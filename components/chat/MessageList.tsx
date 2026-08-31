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
}

export function MessageList({
  messages,
  isGenerating = false,
  userName,
  onSelectSuggestion,
}: MessageListProps) {
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' })
  }, [messages.length, isGenerating])

  // Find last assistant message and last user message for follow-up suggestions
  const lastMessage = messages[messages.length - 1]
  const isLastAssistant = lastMessage?.role === 'assistant'
  const lastUserMessage = [...messages].reverse().find((m) => m.role === 'user')

  const suggestions =
    !isGenerating && isLastAssistant && onSelectSuggestion
      ? getSuggestedQuestions(lastUserMessage?.content, lastMessage?.content)
      : []

  const handleCleanQuestionSelect = (q: string) => {
    // Strip leading emoji if any
    const cleanText = q.replace(/^[\p{Emoji}\p{Extended_Pictographic}\u200d\s]+/u, '').trim()
    if (onSelectSuggestion) {
      onSelectSuggestion(cleanText || q)
    }
  }

  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col px-4 py-6">
      {messages.map((msg) => (
        <MessageBubble key={msg.id} message={msg} userName={userName} />
      ))}

      {isGenerating && <TypingIndicator />}

      {/* Suggested Follow-up Questions Chips */}
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
