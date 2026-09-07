'use client'

import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import {
  Sparkles,
  Copy,
  Check,
  ThumbsUp,
  ThumbsDown,
  RotateCcw,
  Mail,
  ExternalLink,
} from 'lucide-react'
import { ChatMessage } from '@/types/chat'

interface MessageBubbleProps {
  message: ChatMessage
  userName?: string
  isLastAssistant?: boolean
  onRegenerate?: () => void
}

export function MessageBubble({
  message,
  userName,
  isLastAssistant = false,
  onRegenerate,
}: MessageBubbleProps) {
  const [copied, setCopied] = useState(false)
  const [feedback, setFeedback] = useState<'like' | 'dislike' | null>(null)
  const isUser = message.role === 'user'

  const handleCopy = () => {
    navigator.clipboard.writeText(message.content)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleFeedback = (type: 'like' | 'dislike') => {
    setFeedback((prev) => (prev === type ? null : type))
  }

  const formatTime = (ts: number) => {
    if (!ts) return ''
    const d = new Date(ts)
    return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }

  // Detect email for direct 1-click mailto
  const emailMatch = !isUser && message.content.match(/([a-zA-Z0-9._-]+@indianatech\.edu)/i)
  const extractedEmail = emailMatch ? emailMatch[1] : null

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

            {/* Quick Action Contact / Resource Pill if email exists */}
            {extractedEmail && (
              <div className="mt-4 pt-3 border-t border-neutral-100 dark:border-white/10 flex flex-wrap items-center gap-2">
                <a
                  href={`mailto:${extractedEmail}`}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-amber-500/30 bg-amber-500/10 px-3 py-1.5 text-xs font-semibold text-amber-700 dark:text-amber-300 hover:bg-amber-500/20 transition-colors"
                >
                  <Mail className="size-3.5" />
                  <span>Email {extractedEmail}</span>
                </a>
                <a
                  href="https://academics.indianatech.edu/faculty/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-xl border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-xs font-medium text-neutral-700 dark:border-white/10 dark:bg-white/5 dark:text-white/80 hover:bg-neutral-100 dark:hover:bg-white/10 transition-colors"
                >
                  <ExternalLink className="size-3" />
                  <span>Faculty Directory</span>
                </a>
              </div>
            )}
          </div>

          {/* Action Toolbar */}
          <div className="mt-2.5 flex flex-wrap items-center gap-3 sm:gap-4 text-xs text-neutral-500 dark:text-white/50">
            <span>{formatTime(message.createdAt)}</span>

            {/* Copy Button */}
            <button
              onClick={handleCopy}
              className="flex items-center gap-1 hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer"
              title="Copy message text"
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

            {/* Thumbs Up / Down Feedback */}
            <div className="flex items-center gap-1.5 border-l border-neutral-300 pl-3 dark:border-white/15">
              <button
                onClick={() => handleFeedback('like')}
                className={`p-1 rounded-md transition-colors cursor-pointer ${
                  feedback === 'like'
                    ? 'text-emerald-600 dark:text-emerald-400 bg-emerald-500/10'
                    : 'hover:text-neutral-900 dark:hover:text-white'
                }`}
                title="Helpful response"
              >
                <ThumbsUp className="size-3.5" />
              </button>
              <button
                onClick={() => handleFeedback('dislike')}
                className={`p-1 rounded-md transition-colors cursor-pointer ${
                  feedback === 'dislike'
                    ? 'text-red-600 dark:text-red-400 bg-red-500/10'
                    : 'hover:text-neutral-900 dark:hover:text-white'
                }`}
                title="Not helpful"
              >
                <ThumbsDown className="size-3.5" />
              </button>
              {feedback && (
                <span className="text-[11px] text-neutral-400 dark:text-white/40 animate-fade-in">
                  Thanks for your feedback!
                </span>
              )}
            </div>

            {/* Regenerate Button on Latest Response */}
            {isLastAssistant && onRegenerate && (
              <button
                onClick={onRegenerate}
                className="flex items-center gap-1 hover:text-amber-600 dark:hover:text-amber-400 transition-colors cursor-pointer"
                title="Regenerate this response"
              >
                <RotateCcw className="size-3.5" />
                <span>Regenerate</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
