'use client'

import React, { useEffect, useRef } from 'react'
import { ChatMessage } from '@/types/chat'
import { MessageBubble } from './MessageBubble'
import { TypingIndicator } from './TypingIndicator'

interface MessageListProps {
  messages: ChatMessage[]
  isGenerating?: boolean
  userName?: string
}

export function MessageList({ messages, isGenerating = false, userName }: MessageListProps) {
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isGenerating])

  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col px-4 py-6">
      {messages.map((msg) => (
        <MessageBubble key={msg.id} message={msg} userName={userName} />
      ))}
      {isGenerating && <TypingIndicator />}
      <div ref={bottomRef} />
    </div>
  )
}
