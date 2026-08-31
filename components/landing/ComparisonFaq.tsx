'use client'

import React, { useState } from 'react'
import { Sparkles, Check, X, ChevronDown, HelpCircle } from 'lucide-react'

export function ComparisonFaq() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const comparisonRows = [
    {
      feature: 'Streaming Token Latency',
      alchat: '< 25ms Real-time',
      others: '200ms – 1.5s delay',
      win: true,
    },
    {
      feature: 'AI Model Foundation',
      alchat: 'Google Gemini 3.6 Multimodal',
      others: 'Legacy 3.5 / Limited APIs',
      win: true,
    },
    {
      feature: 'Data Persistence Architecture',
      alchat: 'Local-First + Encrypted Cloud Sync',
      others: 'Server-only, lost on network drop',
      win: true,
    },
    {
      feature: 'Adaptive Light & Dark Modes',
      alchat: 'Full Custom Dual Design Systems',
      others: 'Generic browser color inversion',
      win: true,
    },
    {
      feature: 'Instant Demo Sign-in',
      alchat: '1-Click Zero Friction Testing',
      others: 'Mandatory credit card & forms',
      win: true,
    },
    {
      feature: 'Context Window Retention',
      alchat: '1M+ Tokens History Retention',
      others: 'Truncated after few turns',
      win: true,
    },
  ]

  const faqs = [
    {
      q: 'What is Alchat and how does it work?',
      a: 'Alchat is an intelligent full-stack AI workspace powered by Google Gemini 3.6. It enables developers, writers, and thinkers to stream real-time answers, solve code problems, and organize multi-turn conversations with local-first cloud synchronization.',
    },
    {
      q: 'Do I need a paid API key to use Alchat?',
      a: 'No, Alchat is connected out-of-the-box with Google AI Studio. You can also supply your own custom Gemini key if you prefer dedicated throughput or enterprise quotas.',
    },
    {
      q: 'How does the Local-First Firestore synchronization work?',
      a: 'When you send a message, it is stored immediately in your browser cache with zero lag, and then automatically synchronized to your secure Firebase Cloud account in the background. Even if your internet fluctuates, your history stays safe.',
    },
    {
      q: 'Can I export my chat conversations or copy code snippets?',
      a: 'Yes! Every code block and assistant response features a one-click copy button, and all your past conversations are grouped by date in the sidebar for easy retrieval at any time.',
    },
    {
      q: 'How do I toggle between Dark Mode and Light Mode?',
      a: 'Click the Sun / Moon toggle icon in the navigation bar or top chat header at any time. Your theme choice is saved automatically and persists across all devices and page refreshes.',
    },
  ]

  return (
    <section className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20 sm:px-12 sm:py-28">
      {/* Comparison Section */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white/80 px-4 py-1.5 text-xs font-semibold text-neutral-800 shadow-xs backdrop-blur-md dark:border-white/10 dark:bg-white/5 dark:text-white/80">
          <Sparkles className="size-3.5 text-amber-500 dark:text-amber-400" />
          <span>The Alchat Advantage</span>
        </div>
        <h2 className="text-3xl font-bold tracking-tight sm:text-5xl text-neutral-900 dark:text-white leading-tight">
          Why Builders Choose{' '}
          <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
            Alchat Over Others
          </span>
        </h2>
        <p className="mt-4 text-base sm:text-lg text-neutral-600 dark:text-white/70 leading-relaxed">
          See how our architecture and interface compare to standard chatbot web apps.
        </p>
      </div>

      {/* Comparison Table */}
      <div className="mt-14 overflow-x-auto">
        <div className="min-w-[620px] overflow-hidden rounded-3xl border border-neutral-200 bg-white/90 shadow-xl dark:border-white/10 dark:bg-[#141416]/90">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-neutral-200 bg-neutral-50/80 dark:border-white/10 dark:bg-[#1a1a1d]">
                <th className="py-5 px-6 font-bold text-neutral-900 dark:text-white">Workspace Capability</th>
                <th className="py-5 px-6 font-bold text-amber-600 dark:text-amber-400">Alchat</th>
                <th className="py-5 px-6 font-semibold text-neutral-500 dark:text-white/50">Traditional Chatbots</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100 dark:divide-white/5">
              {comparisonRows.map((row) => (
                <tr key={row.feature} className="transition-colors hover:bg-neutral-50/50 dark:hover:bg-white/5">
                  <td className="py-4.5 px-6 font-medium text-neutral-900 dark:text-white">{row.feature}</td>
                  <td className="py-4.5 px-6 font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-2">
                    <Check className="size-4 shrink-0 text-emerald-500" />
                    <span>{row.alchat}</span>
                  </td>
                  <td className="py-4.5 px-6 text-neutral-500 dark:text-white/50">{row.others}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* FAQ Accordion */}
      <div className="mt-28 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white/80 px-4 py-1.5 text-xs font-semibold text-neutral-800 shadow-xs backdrop-blur-md dark:border-white/10 dark:bg-white/5 dark:text-white/80">
            <HelpCircle className="size-3.5 text-amber-500 dark:text-amber-400" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-neutral-900 dark:text-white">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx
            return (
              <div
                key={faq.q}
                className="rounded-3xl border border-neutral-200 bg-white/80 p-6 shadow-sm backdrop-blur-xl transition-all dark:border-white/10 dark:bg-[#141416]/80"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between text-left text-base sm:text-lg font-bold text-neutral-900 dark:text-white cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`size-5 text-neutral-500 transition-transform duration-200 shrink-0 ml-4 ${
                      isOpen ? 'rotate-180 text-amber-500' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <p className="mt-4 text-sm text-neutral-600 dark:text-white/75 leading-relaxed border-t border-neutral-100 dark:border-white/5 pt-4">
                    {faq.a}
                  </p>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
