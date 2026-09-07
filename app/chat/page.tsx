'use client'

import React, { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/components/auth/AuthProvider'
import { ChatLayout } from '@/components/chat/ChatLayout'
import { ChatWelcome } from '@/components/chat/ChatWelcome'
import { MessageList } from '@/components/chat/MessageList'
import { ChatInput } from '@/components/chat/ChatInput'
import { TuitionEstimatorModal } from '@/components/chat/TuitionEstimatorModal'
import { Conversation } from '@/types/conversation'
import { ChatMessage } from '@/types/chat'
import {
  subscribeToUserConversations,
  subscribeToMessages,
  createConversation,
  addMessage,
  deleteConversation,
  togglePinConversation,
  updateConversationTitle,
  clearAllConversations,
  groupConversations,
} from '@/lib/firestore'
import { Loader2 } from 'lucide-react'

export default function ChatPage() {
  const router = useRouter()
  const { user, loading, signOut } = useAuth()

  const [conversations, setConversations] = useState<Conversation[]>([])
  const [activeConversation, setActiveConversation] = useState<Conversation | null>(null)
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [isGenerating, setIsGenerating] = useState(false)
  const [streamingContent, setStreamingContent] = useState<string>('')
  const [prefilledInput, setPrefilledInput] = useState<string>('')
  const [isTuitionModalOpen, setIsTuitionModalOpen] = useState(false)

  const abortControllerRef = useRef<AbortController | null>(null)
  const activeStreamContentRef = useRef<string>('')

  const LAST_ACTIVE_KEY = (uid: string) => `alchat_active_conv_${uid}`

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login')
    }
  }, [user, loading, router])

  useEffect(() => {
    if (!user) return
    const unsubscribe = subscribeToUserConversations(user.uid, (convList) => {
      setConversations(convList)
    })
    return () => unsubscribe()
  }, [user])

  // Restore ongoing conversation on page load / refresh
  useEffect(() => {
    if (!user || conversations.length === 0) return

    // If active conversation already exists in current state, verify it's still present in the list
    if (activeConversation) {
      const exists = conversations.some((c) => c.id === activeConversation.id)
      if (exists) return
    }

    try {
      const savedConvId = localStorage.getItem(LAST_ACTIVE_KEY(user.uid))
      if (savedConvId) {
        const found = conversations.find((c) => c.id === savedConvId)
        if (found) {
          setActiveConversation(found)
        }
      }
    } catch { }
  }, [user, conversations, activeConversation])

  useEffect(() => {
    if (!user || !activeConversation) {
      setMessages([])
      return
    }
    const unsubscribe = subscribeToMessages(user.uid, activeConversation.id, (msgList) => {
      if (msgList && msgList.length > 0) {
        setMessages(msgList)
      }
    })
    return () => unsubscribe()
  }, [user, activeConversation])

  const grouped = groupConversations(conversations)

  const handleSelectConversation = (conv: Conversation) => {
    setActiveConversation(conv)
    setPrefilledInput('')
    setStreamingContent('')
    setIsGenerating(false)
    if (user) {
      try {
        localStorage.setItem(LAST_ACTIVE_KEY(user.uid), conv.id)
      } catch { }
    }
  }

  const handleNewChat = () => {
    setActiveConversation(null)
    setMessages([])
    setStreamingContent('')
    setPrefilledInput('')
    setIsGenerating(false)
    if (user) {
      try {
        localStorage.removeItem(LAST_ACTIVE_KEY(user.uid))
      } catch { }
    }
  }

  const handleDeleteConversation = async (id: string, e: React.MouseEvent) => {
    e.stopPropagation()
    if (!user) return
    await deleteConversation(user.uid, id)
    if (activeConversation?.id === id) {
      handleNewChat()
    }
  }

  const handleTogglePin = async (id: string, e: React.MouseEvent) => {
    e.stopPropagation()
    if (!user) return
    await togglePinConversation(user.uid, id)
  }

  const handleRenameConversation = async (id: string, newTitle: string) => {
    if (!user || !newTitle.trim()) return
    await updateConversationTitle(user.uid, id, newTitle.trim())
    if (activeConversation?.id === id) {
      setActiveConversation((prev) => (prev ? { ...prev, title: newTitle.trim() } : null))
    }
  }

  const handleClearAll = async () => {
    if (!user) return
    await clearAllConversations(user.uid)
    handleNewChat()
  }

  const handleStopGenerating = async () => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort()
      abortControllerRef.current = null
    }

    const currentPartial = activeStreamContentRef.current.trim()
    setIsGenerating(false)
    setStreamingContent('')

    if (currentPartial && user && activeConversation) {
      const savedPartialMsg = await addMessage(user.uid, activeConversation.id, {
        role: 'assistant',
        content: currentPartial + ' *(Generation stopped by user)*',
      })
      setMessages((prev) => [...prev, savedPartialMsg])
    }
  }

  const handleSendMessage = async (text: string) => {
    if (!user || !text.trim() || isGenerating) return

    let currentConv = activeConversation
    if (!currentConv) {
      const generatedTitle =
        text.length > 32 ? text.substring(0, 32).trim() + '...' : text.trim()
      currentConv = await createConversation(user.uid, generatedTitle)
      setActiveConversation(currentConv)
      try {
        localStorage.setItem(LAST_ACTIVE_KEY(user.uid), currentConv.id)
      } catch { }
    }

    const userMsg: ChatMessage = {
      id: 'msg_temp_' + Date.now(),
      role: 'user',
      content: text,
      createdAt: Date.now(),
    }
    setMessages((prev) => [...prev, userMsg])
    setIsGenerating(true)
    setStreamingContent('')
    activeStreamContentRef.current = ''

    addMessage(user.uid, currentConv.id, {
      role: 'user',
      content: text,
    }).catch((e) => console.warn('Sync user message notice:', e))

    const historyPayload = messages.map((m) => ({
      role: m.role,
      content: m.content,
    }))

    const controller = new AbortController()
    abortControllerRef.current = controller

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text,
          history: historyPayload,
        }),
        signal: controller.signal,
      })

      if (!response.ok || !response.body) {
        throw new Error(`HTTP Error: ${response.status} ${response.statusText}`)
      }

      const reader = response.body.getReader()
      const decoder = new TextDecoder()
      let accumulated = ''

      while (true) {
        const { value, done } = await reader.read()
        if (done) break

        const chunkStr = decoder.decode(value, { stream: true })
        const lines = chunkStr.split('\n').filter((l) => l.trim() !== '')

        for (const line of lines) {
          try {
            const data = JSON.parse(line)
            if (data.type === 'chunk') {
              accumulated += data.text
              activeStreamContentRef.current = accumulated
              setStreamingContent(accumulated)
            } else if (data.type === 'done') {
              accumulated = data.fullText || accumulated
              activeStreamContentRef.current = accumulated
              setStreamingContent(accumulated)
            } else if (data.type === 'error') {
              accumulated += (accumulated ? '\n\n' : '') + `⚠️ AI Notice: ${data.error}`
              activeStreamContentRef.current = accumulated
              setStreamingContent(accumulated)
            }
          } catch {
            accumulated += line
            activeStreamContentRef.current = accumulated
            setStreamingContent(accumulated)
          }
        }
      }

      const finalText = accumulated.trim() || 'I am ready to assist you. How can I help next?'
      const assistantMsg = await addMessage(user.uid, currentConv.id, {
        role: 'assistant',
        content: finalText,
      })

      setMessages((prev) => [...prev, assistantMsg])
    } catch (err: any) {
      if (err.name === 'AbortError') {
        console.log('Chat generation stream was aborted by user.')
        return
      }
      console.error('Chat stream error:', err)
      const errorContent = `### ⚠️ Server is down, we are coming soon.\n\nOur AI service is currently unavailable. Please check back shortly or visit [indianatech.edu](https://www.indianatech.edu).`
      const fallbackMsg = await addMessage(user.uid, currentConv.id, {
        role: 'assistant',
        content: errorContent,
      })
      setMessages((prev) => [...prev, fallbackMsg])
    } finally {
      setIsGenerating(false)
      setStreamingContent('')
      abortControllerRef.current = null
    }
  }

  const handleRegenerate = () => {
    if (isGenerating) return
    const lastUserMsg = [...messages].reverse().find((m) => m.role === 'user')
    if (lastUserMsg) {
      handleSendMessage(lastUserMsg.content)
    }
  }

  const handleSelectPrompt = (promptText: string) => {
    handleSendMessage(promptText)
  }

  if (loading) {
    return (
      <div className="flex h-screen w-screen items-center justify-center bg-[#f8f9fa] text-neutral-900 dark:bg-[#131314] dark:text-white">
        <div className="flex flex-col items-center gap-3">
          <Loader2 className="size-8 animate-spin text-amber-500 dark:text-amber-400" />
          <p className="text-xs text-neutral-500 dark:text-white/60">Loading your AI workspace...</p>
        </div>
      </div>
    )
  }

  if (!user) return null
  const displayMessages: ChatMessage[] = [...messages]
  if (isGenerating && streamingContent) {
    displayMessages.push({
      id: 'streaming-assistant-msg',
      role: 'assistant',
      content: streamingContent,
      createdAt: Date.now(),
    })
  }

  return (
    <>
      <ChatLayout
        conversations={conversations}
        grouped={grouped}
        activeConversation={activeConversation}
        messages={messages}
        user={user}
        onSelectConversation={handleSelectConversation}
        onNewChat={handleNewChat}
        onDeleteConversation={handleDeleteConversation}
        onTogglePin={handleTogglePin}
        onRenameConversation={handleRenameConversation}
        onClearAll={handleClearAll}
        onOpenTuitionModal={() => setIsTuitionModalOpen(true)}
        onSignOut={signOut}
      >
        <div className="flex min-h-full flex-col justify-between">
          <div className="flex-1">
            {displayMessages.length === 0 && !isGenerating ? (
              <ChatWelcome onSelectPrompt={handleSelectPrompt} />
            ) : (
              <MessageList
                messages={displayMessages}
                isGenerating={isGenerating && !streamingContent}
                userName={user.name}
                onSelectSuggestion={handleSendMessage}
                onRegenerate={handleRegenerate}
              />
            )}
          </div>
          <div className="sticky bottom-0 z-20 bg-gradient-to-t from-[#f8f9fa] via-[#f8f9fa]/95 to-transparent pt-4 dark:from-[#131314] dark:via-[#131314]/95 dark:to-transparent transition-colors duration-200">
            <ChatInput
              onSendMessage={handleSendMessage}
              onStopGenerating={handleStopGenerating}
              isGenerating={isGenerating}
              initialValue={prefilledInput}
            />
          </div>
        </div>
      </ChatLayout>

      <TuitionEstimatorModal
        isOpen={isTuitionModalOpen}
        onClose={() => setIsTuitionModalOpen(false)}
        onAskAssistant={handleSendMessage}
      />
    </>
  )
}

