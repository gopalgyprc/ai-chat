import React from 'react'
import { Sparkles, MessageSquarePlus, RefreshCw, BookmarkCheck, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function InteractiveWorkflow() {
  const steps = [
    {
      num: '01',
      icon: MessageSquarePlus,
      title: 'Start with a question or paste a snippet',
      desc: 'Drop in a React component with a bug, a math problem, or ask for a clear explanation of complex systems. No prompt engineering acrobatics needed.',
    },
    {
      num: '02',
      icon: RefreshCw,
      title: 'Iterate without losing your train of thought',
      desc: 'Ask follow-up questions or click our contextual suggestion chips. Alchat retains context across the entire conversation history.',
    },
    {
      num: '03',
      icon: BookmarkCheck,
      title: 'Stored cleanly, ready whenever you return',
      desc: 'Every session is automatically categorized by date in your sidebar. Revisit past answers or continue ongoing threads effortlessly.',
    },
  ]

  return (
    <section className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20 sm:px-12 sm:py-28">
      <div className="max-w-3xl mx-auto text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white/80 px-3.5 py-1 text-xs font-semibold text-neutral-800 shadow-xs backdrop-blur-md dark:border-white/10 dark:bg-white/5 dark:text-white/80">
          <Sparkles className="size-3.5 text-amber-500" />
          <span>Simple Workflow</span>
        </div>
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl text-neutral-900 dark:text-white leading-tight">
          How real work gets done on Alchat
        </h2>
        <p className="mt-4 text-base sm:text-lg text-neutral-600 dark:text-white/70">
          Clean, straightforward interactions designed to keep you focused on your goals.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
        {steps.map((s) => {
          const Icon = s.icon
          return (
            <div
              key={s.num}
              className="flex flex-col justify-between rounded-3xl border border-neutral-200 bg-white/80 p-8 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/50 hover:shadow-lg dark:border-white/10 dark:bg-[#141416]/80"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-neutral-400 dark:text-white/30 font-mono">
                    {s.num}
                  </span>
                  <div className="flex size-10 items-center justify-center rounded-xl bg-amber-500/10 text-amber-500 dark:bg-amber-400/10 dark:text-amber-400">
                    <Icon className="size-5" />
                  </div>
                </div>

                <h3 className="mt-6 text-lg font-bold text-neutral-900 dark:text-white">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm text-neutral-600 dark:text-white/65 leading-relaxed">
                  {s.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-neutral-100 dark:border-white/5">
                <span className="text-xs font-medium text-neutral-400 dark:text-white/40">
                  Instant flow
                </span>
              </div>
            </div>
          )
        })}
      </div>

      <div className="mt-14 flex justify-center">
        <Link
          href="/login"
          className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105 hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-100"
        >
          Try it Yourself <ArrowRight className="size-4" />
        </Link>
      </div>
    </section>
  )
}
