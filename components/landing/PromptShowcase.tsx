'use client'

import React, { useState } from 'react'
import { Code2, PenTool, BookOpen, Languages, Copy, Check, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function PromptShowcase() {
  const [copied, setCopied] = useState(false)
  const [activeTab, setActiveTab] = useState(0)

  const showcases = [
    {
      tab: 'TypeScript & React',
      icon: Code2,
      category: 'Coding & Debugging',
      prompt: 'How do I handle optimistic UI updates with React 19 useOptimistic without blocking user typing?',
      response: `import { useOptimistic, useState, useTransition } from 'react';

export function ChatFeed({ initialMessages }: { initialMessages: string[] }) {
  const [messages, setMessages] = useState(initialMessages);
  const [isPending, startTransition] = useTransition();

  // Optimistic state updates immediately on user action
  const [optimisticMessages, addOptimistic] = useOptimistic(
    messages,
    (state, newMsg: string) => [...state, { text: newMsg, sending: true }]
  );

  async function handleSend(formData: FormData) {
    const text = formData.get('message') as string;
    if (!text.trim()) return;

    startTransition(async () => {
      addOptimistic(text);
      await sendMessageToServer(text);
      setMessages((prev) => [...prev, { text, sending: false }]);
    });
  }

  return (
    <div>
      {optimisticMessages.map((msg, i) => (
        <p key={i} className={msg.sending ? 'opacity-50' : 'opacity-100'}>
          {msg.text}
        </p>
      ))}
    </div>
  );
}`,
    },
    {
      tab: 'Content & Copywriting',
      icon: PenTool,
      category: 'Product Writing',
      prompt: 'Write a clear, friendly product announcement email for a v2 release with local-first offline support.',
      response: `Subject: Introducing AIchat v2: Faster streaming, offline support, and zero clutter

Hey everyone,

Today we’re launching AIchat v2 — built specifically for developers and creators who need a fast, reliable AI workspace.

Here’s what’s new:
• Sub-25ms token streaming: Instant responses powered by Gemini 3.6 Flash.
• Local-first persistence: Your chats write directly to local storage in 0ms, so you never lose your train of thought on unstable WiFi.
• Smart follow-up suggestions: Contextual 1-click prompts appear after each answer to keep your research moving forward.

Try it today with Google Sign-In or jump straight into the demo with zero setup.

Happy building,
The AIchat Team`,
    },
    {
      tab: 'System Architecture',
      icon: BookOpen,
      category: 'Technical Synthesis',
      prompt: 'Explain the difference between Server-Sent Events (SSE) and WebSockets for real-time AI token streaming.',
      response: `### Server-Sent Events (SSE) vs. WebSockets for AI Streaming

1. Directionality & Protocol:
   • SSE operates over standard HTTP/1.1 or HTTP/2. It is unidirectional (Server → Client), making it the ideal protocol for streaming LLM tokens.
   • WebSockets establish a full-duplex, bidirectional TCP connection, which adds handshake overhead and state management complexity.

2. Resilience & Reconnection:
   • SSE includes built-in automatic reconnection and message ID tracking natively in browser EventSource APIs.
   • WebSockets require custom heartbeat ping/pong handlers and reconnection logic.

3. Recommendation:
   For AI text streaming, SSE over HTTP/2 provides lower latency, works cleanly with edge functions (Vercel, Cloudflare), and handles firewalls effortlessly.`,
    },
    {
      tab: 'Multilingual Translation',
      icon: Languages,
      category: 'Global Localization',
      prompt: 'Translate "Our workspace stores data locally on your device for instant access" into Spanish, French, and Japanese.',
      response: `🇪🇸 Spanish:
"Nuestro espacio de trabajo almacena los datos localmente en su dispositivo para un acceso instantáneo."

🇫🇷 French:
"Notre espace de travail stocke les données localement sur votre appareil pour un accès instantané."

🇯🇵 Japanese:
"当ワークスペースは端末ローカルにデータを保存し、即座にアクセスできます。"`,
    },
  ]

  const current = showcases[activeTab]

  const handleCopy = () => {
    navigator.clipboard.writeText(current.response)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="relative mx-auto w-full max-w-7xl px-4 sm:px-8 lg:px-12 py-16 sm:py-24 border-t border-neutral-100 dark:border-neutral-900">
      <div className="max-w-2xl">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
          See it in action
        </h2>
        <p className="mt-3 text-sm sm:text-base lg:text-lg text-neutral-600 dark:text-neutral-400">
          From complex TypeScript hooks to technical documentation and systems architecture.
        </p>
      </div>

      {/* Tabs */}
      <div className="mt-8 flex flex-wrap gap-2">
        {showcases.map((s, idx) => {
          const Icon = s.icon
          const isActive = activeTab === idx
          return (
            <button
              key={s.tab}
              onClick={() => setActiveTab(idx)}
              className={`flex items-center gap-2 rounded-lg px-4 py-2 text-xs sm:text-sm font-medium transition-colors cursor-pointer ${
                isActive
                  ? 'bg-neutral-900 text-white dark:bg-white dark:text-black'
                  : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200/70 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800'
              }`}
            >
              <Icon className="size-3.5" />
              <span>{s.tab}</span>
            </button>
          )
        })}
      </div>

      {/* Interactive Window */}
      <div className="mt-6 overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm dark:border-neutral-800 dark:bg-[#121214]">
        {/* User Prompt Bar */}
        <div className="border-b border-neutral-200 bg-neutral-50/70 p-4 sm:p-5 dark:border-neutral-800 dark:bg-[#161618]">
          <div className="flex items-center justify-between text-xs text-neutral-500 mb-1.5">
            <span className="font-semibold text-amber-600 dark:text-amber-400">
              Prompt ({current.category})
            </span>
            <span>Input</span>
          </div>
          <p className="text-sm sm:text-base font-medium text-neutral-900 dark:text-neutral-100">
            &ldquo;{current.prompt}&rdquo;
          </p>
        </div>

        {/* AI Response Output */}
        <div className="p-4 sm:p-6 lg:p-8">
          <div className="flex items-center justify-between pb-3 text-xs text-neutral-500 border-b border-neutral-100 dark:border-neutral-800/60 mb-4">
            <span className="font-semibold text-neutral-800 dark:text-neutral-200">
              AIchat Response
            </span>
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 rounded-md border border-neutral-200 px-2.5 py-1 text-xs text-neutral-700 hover:bg-neutral-50 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800 cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="size-3.5 text-emerald-500" />
                  <span className="text-emerald-500 font-medium">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="size-3.5" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          <pre className="overflow-x-auto whitespace-pre-wrap font-mono text-xs sm:text-sm text-neutral-800 dark:text-neutral-200 leading-relaxed bg-neutral-50 dark:bg-[#0d0d0f] p-4 sm:p-5 rounded-xl border border-neutral-200 dark:border-neutral-800/80 custom-scrollbar">
            {current.response}
          </pre>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-neutral-200 bg-neutral-50 px-4 py-3 sm:px-6 text-xs dark:border-neutral-800 dark:bg-[#161618]">
          <span className="text-neutral-500 dark:text-neutral-400">
            Powered by Google Gemini 3.6 Flash
          </span>
          <Link
            href="/chat"
            className="flex items-center gap-1 font-semibold text-neutral-900 hover:underline dark:text-white"
          >
            Try in workspace <ArrowRight className="size-3.5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
