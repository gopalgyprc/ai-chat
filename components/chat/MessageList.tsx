'use client'

import React, { useEffect, useRef } from 'react'
import { ChatMessage } from '@/types/chat'
import { MessageBubble } from './MessageBubble'
import { TypingIndicator } from './TypingIndicator'
import { SuggestedQuestions } from './SuggestedQuestions'
import { getSuggestedQuestions } from '@/lib/suggestions'

interface MessageListProps {
  messages: ChatMessage[]
  isGenerating?: boolean
  userName?: string
  onSelectSuggestion?: (question: string) => void
  onRegenerate?: () => void
}

export function MessageList({
  messages,
  isGenerating = false,
  userName,
  onSelectSuggestion,
  onRegenerate,
}: MessageListProps) {
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' })
  }, [messages.length, isGenerating])
  const lastMessage = messages[messages.length - 1]
  const isLastAssistant = lastMessage?.role === 'assistant'
  const lastUserMessage = [...messages].reverse().find((m) => m.role === 'user')

  const suggestions =
    !isGenerating && isLastAssistant && onSelectSuggestion
      ? getSuggestedQuestions(lastUserMessage?.content, lastMessage?.content)
      : []

  const handleCleanQuestionSelect = (q: string) => {
    const cleanText = q.replace(/^[\p{Emoji}\p{Extended_Pictographic}\u200d\s]+/u, '').trim()
    if (onSelectSuggestion) {
      onSelectSuggestion(cleanText || q)
    }
  }

  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col px-4 py-6">
      {/* Print-Only Official Academic Letterhead */}
      <div className="hidden print:block mb-8 pb-4 border-b-2 border-neutral-900">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold tracking-tight text-neutral-900 uppercase">
              Indiana Tech Virtual Assistant
            </h1>
            <p className="text-xs text-neutral-600">
              Official Academic & Advisory Consultation Transcript
            </p>
          </div>
          <div className="text-right text-xs text-neutral-500">
            <p className="font-semibold text-neutral-900">indianatech.edu</p>
            <p>{new Date().toLocaleDateString()} • {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
          </div>
        </div>
      </div>

      {messages.map((msg, idx) => (
        <MessageBubble
          key={msg.id}
          message={msg}
          userName={userName}
          isLastAssistant={idx === messages.length - 1 && msg.role === 'assistant' && !isGenerating}
          onRegenerate={onRegenerate}
        />
      ))}

      {isGenerating && <TypingIndicator />}
      {suggestions.length > 0 && (
        <SuggestedQuestions
          questions={suggestions}
          onSelectQuestion={handleCleanQuestionSelect}
        />
      )}

      <div ref={bottomRef} className="h-4" />
    </div>
  )
}
