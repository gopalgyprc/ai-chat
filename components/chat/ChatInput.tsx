'use client'

import React, { useState, useRef, useEffect } from 'react'
import { Sparkles, Send, Loader2 } from 'lucide-react'

interface ChatInputProps {
  onSendMessage: (content: string) => void
  disabled?: boolean
  isGenerating?: boolean
  initialValue?: string
}

export function ChatInput({
  onSendMessage,
  disabled = false,
  isGenerating = false,
  initialValue = '',
}: ChatInputProps) {
  const [text, setText] = useState(initialValue)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  // Always keep focus on mount and when generation status changes
  useEffect(() => {
    textareaRef.current?.focus({ preventScroll: true })
  }, [isGenerating])

  useEffect(() => {
    if (initialValue) {
      setText(initialValue)
      if (textareaRef.current) {
        textareaRef.current.focus({ preventScroll: true })
      }
    }
  }, [initialValue])

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'
      textareaRef.current.style.height = `${Math.min(
        textareaRef.current.scrollHeight,
        180
      )}px`
    }
  }, [text])

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) {
      e.preventDefault()
      e.stopPropagation()
    }
    if (!text.trim() || disabled || isGenerating) return

    const messageToSend = text.trim()
    setText('')

    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'
      textareaRef.current.focus({ preventScroll: true })
    }

    onSendMessage(messageToSend)

    // Ensure cursor stays focused without any blur
    requestAnimationFrame(() => {
      textareaRef.current?.focus({ preventScroll: true })
    })
    setTimeout(() => {
      textareaRef.current?.focus({ preventScroll: true })
    }, 50)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      e.stopPropagation()
      handleSubmit()
    }
  }

  return (
    <div className="mx-auto w-full max-w-4xl px-4 pb-4">
      {/* Input container */}
      <form
        onSubmit={handleSubmit}
        className="relative flex items-center gap-3.5 rounded-2xl border border-neutral-300 bg-white px-4 py-3.5 shadow-lg transition-colors focus-within:border-amber-500 focus-within:ring-1 focus-within:ring-amber-500/40 dark:border-white/10 dark:bg-[#202022] dark:focus-within:border-amber-400/50 dark:focus-within:ring-amber-400/30"
      >
        {/* Left Sparkles Icon */}
        <div className="flex shrink-0 items-center justify-center text-amber-500 dark:text-amber-400">
          <Sparkles className="size-5" />
        </div>

        {/* Textarea Input - Always keeps cursor focus */}
        <textarea
          ref={textareaRef}
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={disabled}
          rows={1}
          autoFocus
          placeholder="How can I help you?"
          className="max-h-44 min-h-[26px] flex-1 resize-none bg-transparent text-[15px] sm:text-base text-neutral-900 placeholder-neutral-400 outline-none leading-relaxed dark:text-white dark:placeholder-white/45"
        />

        {/* Send Button */}
        <button
          type="submit"
          disabled={!text.trim() || disabled || isGenerating}
          aria-label="Send message"
          className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-neutral-100 text-neutral-700 transition-all hover:bg-[#fbbf24] hover:text-black active:scale-95 disabled:opacity-30 disabled:pointer-events-none cursor-pointer dark:bg-white/10 dark:text-white/90 dark:hover:bg-amber-400 dark:hover:text-black"
        >
          {isGenerating ? (
            <Loader2 className="size-4 animate-spin text-amber-500 dark:text-amber-400" />
          ) : (
            <Send className="size-4 -rotate-45" />
          )}
        </button>
      </form>

      {/* Footer Disclaimer */}
      <p className="mt-2.5 text-center text-xs leading-relaxed text-neutral-500 dark:text-white/45">
        Ai Chat may produce inaccurate information about people, places, or facts.
        Version Wed Aug 2 9:31 PM. Privacy Policy. Legal Notice. Copyright © 2023 Ai Chat. All rights reserved.
      </p>
    </div>
  )
}
