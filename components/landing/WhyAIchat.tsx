import React from 'react'
import { Check } from 'lucide-react'

export function WhyAIchat() {
  const points = [
    {
      title: 'Distraction-free focus',
      description:
        'A clean interface with comfortable typography and spacing. No popups, no promotional sidebars, no clutter.',
    },
    {
      title: 'Reliable local-first storage',
      description:
        'Everything is stored instantly on your device, then backed up to your account. Your history stays intact even on spotty connections.',
    },
    {
      title: 'Smart follow-up suggestions',
      description:
        'Helpful contextual questions appear after each answer, letting you explore topics deeper with a single click.',
    },
    {
      title: 'Adaptive dual themes',
      description:
        'Crafted Light and Dark modes designed to be easy on your eyes whether working in bright daylight or late at night.',
    },
  ]

  return (
    <section id="why-aichat" className="relative mx-auto w-full max-w-7xl px-4 sm:px-8 lg:px-12 py-16 sm:py-24 border-t border-neutral-100 dark:border-neutral-900">
      <div className="max-w-2xl">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
          Why choose AIchat
        </h2>
        <p className="mt-3 text-sm sm:text-base lg:text-lg text-neutral-600 dark:text-neutral-400">
          A straightforward workspace designed for people who appreciate simplicity and speed.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {points.map((p) => (
          <div
            key={p.title}
            className="flex items-start gap-4 rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-[#121214] shadow-2xs"
          >
            <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400 mt-0.5">
              <Check className="size-3.5" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-neutral-900 dark:text-white">
                {p.title}
              </h3>
              <p className="mt-1.5 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {p.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
