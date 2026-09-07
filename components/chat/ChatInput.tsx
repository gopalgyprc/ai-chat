'use client'

import React, { useState, useRef, useEffect } from 'react'
import { Sparkles, Send, Square, Mic, MicOff } from 'lucide-react'

interface ChatInputProps {
  onSendMessage: (content: string) => void
  onStopGenerating?: () => void
  disabled?: boolean
  isGenerating?: boolean
  initialValue?: string
}

export function ChatInput({
  onSendMessage,
  onStopGenerating,
  disabled = false,
  isGenerating = false,
  initialValue = '',
}: ChatInputProps) {
  const [text, setText] = useState(initialValue)
  const [isListening, setIsListening] = useState(false)
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const recognitionRef = useRef<any>(null)
  const baseTextRef = useRef<string>('')

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

  // Speech-to-Text initialization with clean non-duplicating transcript handling
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const SpeechRecognition =
        (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition
      if (SpeechRecognition) {
        const recognition = new SpeechRecognition()
        recognition.continuous = true
        recognition.interimResults = true
        recognition.lang = 'en-US'

        recognition.onresult = (event: any) => {
          let finalTranscript = ''
          let interimTranscript = ''

          for (let i = 0; i < event.results.length; i++) {
            const item = event.results[i]
            if (item && item[0] && item[0].transcript) {
              const piece = item[0].transcript.trim()
              if (item.isFinal) {
                finalTranscript += (finalTranscript ? ' ' : '') + piece
              } else {
                interimTranscript += (interimTranscript ? ' ' : '') + piece
              }
            }
          }

          const base = baseTextRef.current
          const spoken = [finalTranscript, interimTranscript].filter(Boolean).join(' ').trim()
          const combined = base ? `${base} ${spoken}` : spoken

          setText(combined)
        }

        recognition.onerror = (e: any) => {
          console.warn('Speech recognition notice:', e?.error)
          setIsListening(false)
        }

        recognition.onend = () => {
          setIsListening(false)
        }

        recognitionRef.current = recognition
      }
    }
  }, [])

  const toggleVoiceListening = () => {
    if (!recognitionRef.current) {
      alert('Speech recognition is not supported in this browser. Please use Chrome or Edge.')
      return
    }

    if (isListening) {
      recognitionRef.current.stop()
      setIsListening(false)
    } else {
      try {
        baseTextRef.current = text.trim()
        recognitionRef.current.start()
        setIsListening(true)
      } catch (err) {
        console.warn('Voice start notice:', err)
      }
    }
  }

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) {
      e.preventDefault()
      e.stopPropagation()
    }
    if (isGenerating && onStopGenerating) {
      onStopGenerating()
      return
    }
    if (!text.trim() || disabled) return

    const messageToSend = text.trim()
    setText('')

    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'
      textareaRef.current.focus({ preventScroll: true })
    }

    onSendMessage(messageToSend)
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
      <form
        onSubmit={handleSubmit}
        className={`relative flex items-center gap-2.5 sm:gap-3 rounded-2xl border bg-white px-3 sm:px-4 py-3 shadow-lg transition-all focus-within:border-amber-500 focus-within:ring-1 focus-within:ring-amber-500/40 dark:bg-[#202022] dark:focus-within:border-amber-400/50 dark:focus-within:ring-amber-400/30 ${
          isListening
            ? 'border-red-500 ring-2 ring-red-500/30 dark:border-red-400'
            : 'border-neutral-300 dark:border-white/10'
        }`}
      >
        <div className="flex shrink-0 items-center justify-center text-amber-500 dark:text-amber-400">
          <Sparkles className="size-5" />
        </div>

        <textarea
          ref={textareaRef}
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={disabled}
          rows={1}
          autoFocus
          placeholder={
            isListening
              ? '🎙️ Listening... speak now...'
              : 'Ask anything about Indiana Tech (programs, tuition, admissions)...'
          }
          className="max-h-44 min-h-[26px] flex-1 resize-none bg-transparent text-[15px] sm:text-base text-neutral-900 placeholder-neutral-400 outline-none leading-relaxed dark:text-white dark:placeholder-white/45"
        />

        {/* Voice Input (Speech-to-Text) Button */}
        <button
          type="button"
          onClick={toggleVoiceListening}
          className={`flex size-9 shrink-0 items-center justify-center rounded-xl transition-all cursor-pointer ${
            isListening
              ? 'bg-red-500 text-white animate-pulse shadow-md shadow-red-500/30'
              : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200 dark:bg-white/10 dark:text-white/70 dark:hover:bg-white/15 dark:hover:text-white'
          }`}
          title={isListening ? 'Stop listening' : 'Voice input (Speech to Text)'}
        >
          {isListening ? <MicOff className="size-4" /> : <Mic className="size-4" />}
        </button>

        {/* Submit or Stop Generation Button */}
        {isGenerating ? (
          <button
            type="button"
            onClick={onStopGenerating}
            aria-label="Stop generation"
            className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-red-500 text-white shadow-md shadow-red-500/30 transition-transform active:scale-95 hover:bg-red-600 cursor-pointer"
            title="Stop generation"
          >
            <Square className="size-4 fill-white" />
          </button>
        ) : (
          <button
            type="submit"
            disabled={!text.trim() || disabled}
            aria-label="Send message"
            className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-neutral-100 text-neutral-700 transition-all hover:bg-[#fbbf24] hover:text-black active:scale-95 disabled:opacity-30 disabled:pointer-events-none cursor-pointer dark:bg-white/10 dark:text-white/90 dark:hover:bg-amber-400 dark:hover:text-black"
          >
            <Send className="size-4 -rotate-45" />
          </button>
        )}
      </form>
      <p className="mt-2.5 text-center text-xs leading-relaxed text-neutral-500 dark:text-white/45">
        Indiana Tech AI Assistant • Answers strictly restricted to official information from <a href="https://www.indianatech.edu" target="_blank" rel="noreferrer" className="underline hover:text-amber-500 dark:hover:text-amber-400">indianatech.edu</a>.
      </p>
    </div>
  )
}

