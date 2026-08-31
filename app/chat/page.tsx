'use client'

import React, { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/components/auth/AuthProvider'
import { ChatLayout } from '@/components/chat/ChatLayout'
import { ChatWelcome } from '@/components/chat/ChatWelcome'
import { MessageList } from '@/components/chat/MessageList'
import { ChatInput } from '@/components/chat/ChatInput'
import { Conversation, GroupedConversations } from '@/types/conversation'
import { ChatMessage } from '@/types/chat'
import {
  subscribeToUserConversations,
  subscribeToMessages,
  createConversation,
  addMessage,
  deleteConversation,
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
  }

  const handleNewChat = () => {
    setActiveConversation(null)
    setMessages([])
    setStreamingContent('')
    setPrefilledInput('')
    setIsGenerating(false)
  }

  const handleDeleteConversation = async (id: string, e: React.MouseEvent) => {
    e.stopPropagation()
    if (!user) return
    await deleteConversation(user.uid, id)
    if (activeConversation?.id === id) {
      handleNewChat()
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

    addMessage(user.uid, currentConv.id, {
      role: 'user',
      content: text,
    }).catch((e) => console.warn('Sync user message notice:', e))

    const historyPayload = messages.map((m) => ({
      role: m.role,
      content: m.content,
    }))

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text,
          history: historyPayload,
        }),
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
              setStreamingContent(accumulated)
            } else if (data.type === 'done') {
              accumulated = data.fullText || accumulated
              setStreamingContent(accumulated)
            } else if (data.type === 'error') {
              accumulated += (accumulated ? '\n\n' : '') + `⚠️ AI Notice: ${data.error}`
              setStreamingContent(accumulated)
            }
          } catch {
            accumulated += line
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
      console.error('Chat stream error:', err)
      const errorContent = `I encountered an issue processing your request: ${err?.message || 'Connection error'}. Please try again.`
      const fallbackMsg = await addMessage(user.uid, currentConv.id, {
        role: 'assistant',
        content: errorContent,
      })
      setMessages((prev) => [...prev, fallbackMsg])
    } finally {
      setIsGenerating(false)
      setStreamingContent('')
    }
  }

  const handleSelectPrompt = (promptText: string, initialTitle: string) => {
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
    <ChatLayout
      conversations={conversations}
      grouped={grouped}
      activeConversation={activeConversation}
      user={user}
      onSelectConversation={handleSelectConversation}
      onNewChat={handleNewChat}
      onDeleteConversation={handleDeleteConversation}
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
            />
          )}
        </div>
        <div className="sticky bottom-0 z-20 bg-gradient-to-t from-[#f8f9fa] via-[#f8f9fa]/95 to-transparent pt-4 dark:from-[#131314] dark:via-[#131314]/95 dark:to-transparent transition-colors duration-200">
          <ChatInput
            onSendMessage={handleSendMessage}
            isGenerating={isGenerating}
            initialValue={prefilledInput}
          />
        </div>
      </div>
    </ChatLayout>
  )
}
