'use client'

import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { Sparkles, Copy, Check } from 'lucide-react'
import { ChatMessage } from '@/types/chat'

interface MessageBubbleProps {
  message: ChatMessage
  userName?: string
}

export function MessageBubble({ message, userName }: MessageBubbleProps) {
  const [copied, setCopied] = useState(false)
  const isUser = message.role === 'user'

  const handleCopy = () => {
    navigator.clipboard.writeText(message.content)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const formatTime = (ts: number) => {
    if (!ts) return ''
    const d = new Date(ts)
    return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }

  if (isUser) {
    return (
      <div className="flex w-full justify-end py-3">
        <div className="flex max-w-[85%] items-end gap-3 sm:max-w-[78%]">
          <div className="flex flex-col items-end">
            <div className="rounded-2xl rounded-tr-sm bg-gradient-to-r from-amber-500/15 to-orange-500/15 border border-amber-500/30 px-5 py-3.5 text-[15px] sm:text-base text-neutral-900 shadow-sm leading-relaxed dark:from-amber-500/25 dark:to-orange-500/25 dark:border-amber-500/40 dark:text-white">
              <p className="whitespace-pre-wrap">{message.content}</p>
            </div>
            <span className="mt-1 text-xs text-neutral-500 dark:text-white/50">{formatTime(message.createdAt)}</span>
          </div>

          <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-tr from-emerald-500 to-teal-400 text-xs font-bold text-black ring-2 ring-emerald-400/40 shadow-sm">
            {userName ? userName.charAt(0).toUpperCase() : 'U'}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex w-full justify-start py-4">
      <div className="flex max-w-[95%] items-start gap-3.5 sm:max-w-[88%]">
        <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-tr from-amber-500 to-orange-500 text-black shadow-md shadow-amber-500/20 mt-1">
          <Sparkles className="size-4 text-white" />
        </div>
        <div className="group relative flex flex-col items-start min-w-0 flex-1">
          <div className="w-full rounded-2xl rounded-tl-sm border border-neutral-200 bg-white px-6 py-5 text-[15px] sm:text-base text-neutral-900 shadow-sm dark:border-white/10 dark:bg-[#202022] dark:text-white/95">
            <div className="prose max-w-none text-[15px] sm:text-base leading-relaxed space-y-3.5 [&_p]:my-2.5 [&_h1]:text-xl [&_h2]:text-lg [&_h3]:text-base [&_h1]:font-bold [&_h2]:font-semibold [&_h3]:font-semibold [&_ul]:pl-5 [&_ol]:pl-5 [&_li]:my-1 [&_strong]:font-semibold [&_strong]:text-amber-700 dark:[&_strong]:text-amber-200 [&_code]:rounded [&_code]:bg-neutral-100 dark:[&_code]:bg-white/10 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:text-amber-800 dark:[&_code]:text-amber-300 [&_pre]:rounded-xl [&_pre]:bg-neutral-900 dark:[&_pre]:bg-black/50 [&_pre]:text-white [&_pre]:p-4 [&_blockquote]:border-l-2 [&_blockquote]:border-amber-500 [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-neutral-600 dark:[&_blockquote]:text-white/70">
              <ReactMarkdown>{message.content}</ReactMarkdown>
            </div>
          </div>
          <div className="mt-2 flex items-center gap-4 text-xs text-neutral-500 dark:text-white/50">
            <span>{formatTime(message.createdAt)}</span>
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer"
              title="Copy message"
            >
              {copied ? (
                <>
                  <Check className="size-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span className="text-emerald-600 dark:text-emerald-400 font-medium">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="size-3.5" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
