'use client'

import React, { useState } from 'react'
import { Sparkles, Code2, PenTool, BookOpen, Languages, Copy, Check, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function PromptShowcase() {
  const [copied, setCopied] = useState(false)
  const [activeTab, setActiveTab] = useState(0)

  const showcases = [
    {
      tab: 'Full-Stack Coding',
      icon: Code2,
      tag: 'TypeScript & Next.js',
      prompt: 'Write a clean React 19 hook for optimistic state dispatch with real-time SSE token streaming.',
      response: `export function useStreamChat({ endpoint = '/api/chat' }) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isStreaming, setIsStreaming] = useState(false);

  const sendMessage = async (prompt: string) => {
    // 1. Optimistically append user message
    const userMsg = { id: crypto.randomUUID(), role: 'user', content: prompt };
    setMessages(prev => [...prev, userMsg]);
    setIsStreaming(true);

    const response = await fetch(endpoint, {
      method: 'POST',
      body: JSON.stringify({ message: prompt })
    });
    // 2. Real-time stream reader loop
    const reader = response.body?.getReader();
    ...
  };
  return { messages, isStreaming, sendMessage };
}`,
    },
    {
      tab: 'Creative Writing',
      icon: PenTool,
      tag: 'Story & Prose',
      prompt: 'Write a poetic opening paragraph for a sci-fi novel about sentient ancient redwoods.',
      response: `The old root-heart pulsed beneath three centuries of loam, listening to the silver hum of satellites orbiting in the cold dark above. While the two-legged creatures built cities of glass and titanium that crumbled in mere decades, the coastal giants wove a subterranean fiber-optic network of mycorrhizal intelligence—quietly archiving every thunderstorm, solar flare, and whispered secret since the dawn of the Holocene.`,
    },
    {
      tab: 'Deep Research',
      icon: BookOpen,
      tag: 'Academic Synthesis',
      prompt: 'Explain the difference between Transformer Attention Mechanisms and State Space Models (Mamba).',
      response: `### 1. Quadratic vs. Linear Complexity:
- **Transformers (Standard Self-Attention)** compute pairwise relationships between all tokens, resulting in **O(N²)** time/memory complexity relative to sequence length.
- **State Space Models (e.g. Mamba)** compress historical context into a hidden state vector recurrently, achieving **O(N)** linear inference speed and constant memory footprint.

### 2. Long-Context Trade-offs:
Mamba excels at continuous streaming throughput, while Transformers maintain higher recall fidelity across arbitrary token coordinates.`,
    },
    {
      tab: 'Global Translation',
      icon: Languages,
      tag: 'Multi-Language',
      prompt: 'Translate "The future of human-AI synergy starts with effortless communication" into Spanish, Japanese & German.',
      response: `🇪🇸 **Spanish**: *El futuro de la sinergia entre humanos y la IA comienza con una comunicación sin esfuerzo.*

🇯🇵 **Japanese**: *人間とAIの相乗効果の未来は、スムーズなコミュニケーションから始まります。*

🇩🇪 **German**: *Die Zukunft der Synergie zwischen Mensch und KI beginnt mit müheloser Kommunikation.*`,
    },
  ]

  const current = showcases[activeTab]

  const handleCopy = () => {
    navigator.clipboard.writeText(current.response)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20 sm:px-12 sm:py-28">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white/80 px-4 py-1.5 text-xs font-semibold text-neutral-800 shadow-xs backdrop-blur-md dark:border-white/10 dark:bg-white/5 dark:text-white/80">
          <Sparkles className="size-3.5 text-amber-500 dark:text-amber-400" />
          <span>Interactive Showcase</span>
        </div>
        <h2 className="text-3xl font-bold tracking-tight sm:text-5xl text-neutral-900 dark:text-white leading-tight">
          One Intelligent Core,{' '}
          <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
            Limitless Possibilities
          </span>
        </h2>
        <p className="mt-4 text-base sm:text-lg text-neutral-600 dark:text-white/70 leading-relaxed">
          Switch between real-world use cases to see how Alchat handles intricate requirements with precision.
        </p>
      </div>

      {/* Preset Tabs Switcher */}
      <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
        {showcases.map((s, idx) => {
          const Icon = s.icon
          const isActive = activeTab === idx
          return (
            <button
              key={s.tab}
              onClick={() => setActiveTab(idx)}
              className={`flex items-center gap-2.5 rounded-full px-5 py-2.5 text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                isActive
                  ? 'bg-neutral-900 text-white dark:bg-white dark:text-black shadow-md scale-105'
                  : 'bg-white/80 text-neutral-600 hover:bg-neutral-100 dark:bg-white/5 dark:text-white/70 dark:hover:bg-white/10'
              }`}
            >
              <Icon className={`size-4 ${isActive ? 'text-amber-400 dark:text-amber-600' : ''}`} />
              <span>{s.tab}</span>
            </button>
          )
        })}
      </div>

      {/* Interactive Code / Prompt Preview Frame */}
      <div className="mt-10 mx-auto max-w-4xl overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-xl dark:border-white/10 dark:bg-[#121214]">
        {/* Top Prompt Box */}
        <div className="border-b border-neutral-200 bg-neutral-50/80 p-5 sm:p-6 dark:border-white/10 dark:bg-[#18181b]">
          <div className="flex items-center justify-between text-xs text-neutral-500 dark:text-white/50 mb-2">
            <span className="font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
              User Prompt ({current.tag})
            </span>
            <span>Input</span>
          </div>
          <p className="text-sm sm:text-base font-medium text-neutral-900 dark:text-white">
            &ldquo;{current.prompt}&rdquo;
          </p>
        </div>

        {/* Output Response Box */}
        <div className="p-6 sm:p-8">
          <div className="flex items-center justify-between text-xs text-neutral-500 dark:text-white/50 mb-4">
            <div className="flex items-center gap-2">
              <div className="flex size-5 items-center justify-center rounded-md bg-amber-500/20 text-amber-500">
                <Sparkles className="size-3" />
              </div>
              <span className="font-semibold text-neutral-800 dark:text-white/80">Alchat Response</span>
            </div>

            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 rounded-lg border border-neutral-200 px-3 py-1 text-xs text-neutral-700 hover:bg-neutral-100 dark:border-white/10 dark:text-white/80 dark:hover:bg-white/5 cursor-pointer"
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

          <pre className="overflow-x-auto whitespace-pre-wrap font-sans text-xs sm:text-sm text-neutral-800 dark:text-white/90 leading-relaxed bg-neutral-100/60 dark:bg-black/40 p-5 rounded-2xl border border-neutral-200/50 dark:border-white/5 custom-scrollbar">
            {current.response}
          </pre>
        </div>

        {/* Footer CTA */}
        <div className="border-t border-neutral-200 bg-neutral-50 p-4 sm:px-8 flex items-center justify-between text-xs dark:border-white/5 dark:bg-[#18181b]">
          <span className="text-neutral-500 dark:text-white/50">
            Powered by Google Gemini 3.6 Multimodal
          </span>
          <Link
            href="/login"
            className="flex items-center gap-1.5 font-semibold text-amber-600 dark:text-amber-400 hover:underline"
          >
            Launch workspace <ArrowRight className="size-3.5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
