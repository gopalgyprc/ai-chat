'use client'

import React, { useState } from 'react'
import {
  Home,
  Folder,
  Download,
  Sparkles,
  Flame,
  Star,
} from 'lucide-react'

interface ChatWelcomeProps {
  onSelectPrompt: (promptText: string, initialTitle: string) => void
}

export function ChatWelcome({ onSelectPrompt }: ChatWelcomeProps) {
  const [activeTab, setActiveTab] = useState<'home' | 'documentation' | 'download'>('documentation')

  const columns = [
    {
      title: 'Recent',
      icon: Sparkles,
      iconColor: 'text-amber-500 dark:text-amber-400',
      cards: [
        {
          title: 'Speak Any Language:',
          desc: 'Translate phrases instantly.',
          prompt: 'Translate the following conversation into conversational Spanish and French.',
        },
        {
          title: 'Explore Philosophy:',
          desc: 'Discuss profound questions.',
          prompt: 'Explore the philosophical question: What is consciousness and can an artificial mind experience qualia?',
        },
        {
          title: 'Code Problem Solver:',
          desc: 'Debug and optimize algorithms.',
          prompt: 'Help me debug a complex state management issue in Next.js and React 19.',
        },
      ],
    },
    {
      title: 'Frequent',
      icon: Flame,
      iconColor: 'text-orange-500 dark:text-orange-400',
      cards: [
        {
          title: 'Imagination Unleashed:',
          desc: 'Create a unique story from any idea.',
          prompt: 'Write a gripping cyberpunk short story about an AI that secretly restores ancient forests.',
        },
        {
          title: 'Learn Something New:',
          desc: 'Explain complex topics in simple terms.',
          prompt: 'Explain the core principles of quantum computing like I am 12 years old.',
        },
        {
          title: 'Cooking Made Easy:',
          desc: 'Get delicious recipes easily.',
          prompt: 'Give me 3 creative gourmet dinners I can make with chicken, garlic, lemons, and olive oil.',
        },
      ],
    },
    {
      title: 'Recommended',
      icon: Star,
      iconColor: 'text-amber-500 dark:text-amber-300',
      cards: [
        {
          title: 'Virtual Travel Buddy:',
          desc: 'Tour the world virtually.',
          prompt: 'Plan an immersive 5-day walking and culinary itinerary through Tokyo and Kyoto.',
        },
        {
          title: 'Healthy Living Tips:',
          desc: 'Receive fitness and wellness advice.',
          prompt: 'Design a practical 30-minute daily bodyweight workout and healthy hydration schedule.',
        },
        {
          title: 'Art & Music Picks:',
          desc: 'Discover art and music.',
          prompt: 'Recommend 5 hidden gem ambient / neoclassical albums for deep focus while programming.',
        },
      ],
    },
  ]

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center px-4 py-8 text-center sm:py-12">
      {/* Top Center Pill Navigation Switcher */}
      <div className="mb-10 inline-flex items-center rounded-full border border-neutral-300 bg-neutral-200/80 p-1.5 shadow-md backdrop-blur-md dark:border-white/10 dark:bg-[#161619]/90">
        <button
          onClick={() => setActiveTab('home')}
          className={`flex items-center gap-2 rounded-full px-4 py-2 text-xs sm:text-sm font-medium transition-all cursor-pointer ${
            activeTab === 'home'
              ? 'bg-white text-neutral-900 shadow-sm dark:bg-white/15 dark:text-white'
              : 'text-neutral-600 hover:text-neutral-900 dark:text-white/60 dark:hover:text-white'
          }`}
        >
          <Home className="size-4" />
          <span>Home</span>
        </button>

        <button
          onClick={() => setActiveTab('documentation')}
          className={`flex items-center gap-2 rounded-full px-4 py-2 text-xs sm:text-sm font-medium transition-all cursor-pointer ${
            activeTab === 'documentation'
              ? 'bg-white text-neutral-900 shadow-sm dark:bg-white/15 dark:text-white'
              : 'text-neutral-600 hover:text-neutral-900 dark:text-white/60 dark:hover:text-white'
          }`}
        >
          <Folder className="size-4 text-amber-500 dark:text-amber-400" />
          <span>Documentation</span>
        </button>

        <button
          onClick={() => setActiveTab('download')}
          className={`flex items-center gap-2 rounded-full px-4 py-2 text-xs sm:text-sm font-medium transition-all cursor-pointer ${
            activeTab === 'download'
              ? 'bg-white text-neutral-900 shadow-sm dark:bg-white/15 dark:text-white'
              : 'text-neutral-600 hover:text-neutral-900 dark:text-white/60 dark:hover:text-white'
          }`}
        >
          <Download className="size-4" />
          <span>Download</span>
        </button>
      </div>

      {/* Main Title */}
      <h1 className="mb-10 text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-5xl">
        Ai Chat
      </h1>

      {/* 3 Columns Layout */}
      <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-3">
        {columns.map((col) => {
          const Icon = col.icon
          return (
            <div key={col.title} className="flex flex-col text-left">
              {/* Column Header */}
              <div className="mb-4 flex items-center gap-2 text-base font-semibold text-neutral-900 dark:text-white">
                <Icon className={`size-4.5 ${col.iconColor}`} />
                <span>{col.title}</span>
              </div>

              {/* Cards in Column */}
              <div className="space-y-3.5 flex-1">
                {col.cards.map((card) => (
                  <div
                    key={card.title}
                    onClick={() => onSelectPrompt(card.prompt, `${card.title} ${card.desc}`)}
                    className="group relative cursor-pointer rounded-xl border border-neutral-200 border-l-[3px] border-l-amber-500 bg-white p-4.5 transition-all duration-200 hover:-translate-y-0.5 hover:bg-neutral-50 hover:shadow-md dark:border-white/5 dark:border-l-amber-400/90 dark:bg-[#202022] dark:hover:bg-[#28282b] dark:hover:border-white/10 dark:hover:border-l-amber-400 dark:hover:shadow-lg dark:hover:shadow-amber-500/5 shadow-sm"
                  >
                    <h4 className="text-[13px] sm:text-sm font-semibold text-neutral-900 dark:text-white/95 group-hover:text-amber-600 dark:group-hover:text-amber-200 transition-colors">
                      {card.title}
                    </h4>
                    <p className="mt-1 text-xs sm:text-[13px] leading-relaxed text-neutral-600 dark:text-white/65 group-hover:text-neutral-800 dark:group-hover:text-white/85 transition-colors">
                      {card.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
