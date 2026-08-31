import React from 'react'
import { LogIn, MessageSquareCode, Sparkles, FolderSync, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'One-Click Authentication',
      desc: 'Sign in instantly with your Google account or test the live environment using our quick one-click Demo login. No tedious setup required.',
      icon: LogIn,
    },
    {
      number: '02',
      title: 'Stream Context-Rich Dialogues',
      desc: 'Ask complex coding problems, draft essays, generate ideas, or analyze research. Google Gemini responds in real-time with sub-25ms latency.',
      icon: MessageSquareCode,
    },
    {
      number: '03',
      title: 'Continuous Cloud Sync & History',
      desc: 'Your conversations are automatically organized into chronological history groups, synchronized across devices, and ready whenever inspiration strikes.',
      icon: FolderSync,
    },
  ]

  return (
    <section className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20 sm:px-12 sm:py-28">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white/80 px-4 py-1.5 text-xs font-semibold text-neutral-800 shadow-xs backdrop-blur-md dark:border-white/10 dark:bg-white/5 dark:text-white/80">
          <Sparkles className="size-3.5 text-amber-500 dark:text-amber-400" />
          <span>Seamless Workflow</span>
        </div>
        <h2 className="text-3xl font-bold tracking-tight sm:text-5xl text-neutral-900 dark:text-white leading-tight">
          How Alchat Works in{' '}
          <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
            3 Simple Steps
          </span>
        </h2>
        <p className="mt-4 text-base sm:text-lg text-neutral-600 dark:text-white/70 leading-relaxed">
          From first question to complete project realization, Alchat keeps you in continuous flow state.
        </p>
      </div>

      {/* 3 Steps Cards */}
      <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
        {steps.map((step, idx) => {
          const Icon = step.icon
          return (
            <div
              key={step.number}
              className="relative flex flex-col justify-between rounded-3xl border border-neutral-200 bg-white/80 p-8 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-amber-500/50 hover:shadow-xl dark:border-white/10 dark:bg-[#141416]/80"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-3xl sm:text-4xl font-extrabold text-amber-500/30 dark:text-amber-400/30">
                    {step.number}
                  </span>
                  <div className="flex size-11 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-500 dark:bg-amber-400/10 dark:text-amber-400">
                    <Icon className="size-5" />
                  </div>
                </div>

                <h3 className="mt-6 text-xl font-bold text-neutral-900 dark:text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm text-neutral-600 dark:text-white/65 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-neutral-100 dark:border-white/5">
                <span className="text-xs font-semibold text-neutral-400 dark:text-white/40">
                  Step {idx + 1} of 3
                </span>
              </div>
            </div>
          )
        })}
      </div>

      {/* Interactive Flow Callout */}
      <div className="mt-14 flex justify-center">
        <Link
          href="/login"
          className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105 hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-100"
        >
          Try the Workflow Now <ArrowRight className="size-4" />
        </Link>
      </div>
    </section>
  )
}
