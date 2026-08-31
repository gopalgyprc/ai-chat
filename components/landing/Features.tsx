import React from 'react'
import { Zap, MessageSquare, Shield, Laptop } from 'lucide-react'

export function Features() {
  const features = [
    {
      icon: Zap,
      title: 'Fast AI conversations',
      description:
        'Get clear, useful answers with real-time streaming tokens powered by Google Gemini.',
    },
    {
      icon: MessageSquare,
      title: 'Organized conversations',
      description:
        'Your chat history is automatically grouped by date in the sidebar so you can easily find and revisit past work.',
    },
    {
      icon: Shield,
      title: 'Google sign-in & instant demo',
      description:
        'Securely sign in with your Google account, or test the complete workspace instantly with 1-click guest access.',
    },
    {
      icon: Laptop,
      title: 'Local-first cloud sync',
      description:
        'Messages save immediately to your device with zero delay and sync to your Firebase cloud account in the background.',
    },
  ]

  return (
    <section id="features" className="relative mx-auto w-full max-w-7xl px-4 sm:px-8 lg:px-12 py-16 sm:py-24">
      {/* Section Header */}
      <div className="max-w-2xl">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
          Built for everyday productivity
        </h2>
        <p className="mt-3 text-sm sm:text-base lg:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
          Everything you need to think, code, write, and organize your ideas without clutter.
        </p>
      </div>

      {/* 4 Realistic Feature Cards */}
      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => {
          const Icon = f.icon
          return (
            <div
              key={f.title}
              className="flex flex-col justify-between rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-[#121214] shadow-2xs"
            >
              <div>
                <div className="flex size-9 items-center justify-center rounded-lg bg-neutral-100 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200">
                  <Icon className="size-4.5" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-neutral-900 dark:text-white">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {f.description}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
