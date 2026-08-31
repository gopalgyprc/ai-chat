'use client'

import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0)

  const faqs = [
    {
      q: 'Which AI model powers AIchat?',
      a: 'AIchat is powered by Google Gemini 3.6 Flash. We stream tokens directly using the official Google Gen AI SDK for low latency and deep multi-turn context awareness across long technical conversations.',
    },
    {
      q: 'Do I need to pay or provide a credit card?',
      a: 'No. You can start chatting immediately using Google Sign-In or test everything out instantly with our 1-click Demo account. No credit cards or lengthy sign-up forms are required.',
    },
    {
      q: 'What happens to my conversation history if I close my browser?',
      a: 'All conversations are saved synchronously to your local browser storage and synced to your secure Cloud Firestore account. Your past chats remain organized by date in the sidebar and are ready whenever you return.',
    },
    {
      q: 'How does the Dark Mode / Light Mode toggle work?',
      a: 'Click the Sun/Moon icon in the top navigation or chat header. Your preferred theme is stored in local storage and persists across page refreshes and devices without flickering.',
    },
    {
      q: 'Can I copy formatted code blocks and responses?',
      a: 'Yes. Every response includes a one-click copy button, and code snippets are automatically highlighted with proper language tags and formatted in clean markdown.',
    },
    {
      q: 'How do smart follow-up suggestions work?',
      a: 'After every AI response, 4 to 5 contextual follow-up question chips appear automatically. Clicking any chip immediately sends that prompt into the chat, letting you explore topics deeply with zero typing.',
    },
  ]

  return (
    <section className="relative mx-auto w-full max-w-7xl px-4 sm:px-8 lg:px-12 py-16 sm:py-24 border-t border-neutral-100 dark:border-neutral-900">
      <div className="max-w-2xl">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
          Frequently asked questions
        </h2>
        <p className="mt-3 text-sm sm:text-base lg:text-lg text-neutral-600 dark:text-neutral-400">
          Everything you need to know about the platform, privacy, and how it works.
        </p>
      </div>

      <div className="mt-10 max-w-4xl space-y-3">
        {faqs.map((faq, idx) => {
          const isOpen = openIdx === idx
          return (
            <div
              key={faq.q}
              className="rounded-xl border border-neutral-200 bg-white p-5 dark:border-neutral-800 dark:bg-[#121214] shadow-2xs"
            >
              <button
                onClick={() => setOpenIdx(isOpen ? null : idx)}
                className="flex w-full items-center justify-between text-left text-sm sm:text-base font-semibold text-neutral-900 dark:text-white cursor-pointer"
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={`size-4 text-neutral-500 transition-transform duration-200 shrink-0 ml-4 ${
                    isOpen ? 'rotate-180 text-amber-500' : ''
                  }`}
                />
              </button>
              {isOpen && (
                <p className="mt-3 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed border-t border-neutral-100 dark:border-neutral-800/70 pt-3">
                  {faq.a}
                </p>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
