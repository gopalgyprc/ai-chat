import React from 'react'
import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'

export function CtaSection() {
  return (
    <section className="relative z-10 mx-auto w-full max-w-7xl px-6 py-16 sm:px-12 sm:py-24">
      <div className="relative overflow-hidden rounded-3xl border border-neutral-300 bg-neutral-900 p-8 sm:p-16 text-center text-white shadow-2xl dark:border-white/10 dark:bg-[#121214]">
        {/* Subtle warm glow behind */}
        <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 size-96 rounded-full bg-amber-500/15 blur-3xl" />

        <div className="relative z-10 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1 text-xs font-semibold text-white mb-6">
            <Sparkles className="size-3.5 text-amber-400" />
            <span>Ready whenever you are</span>
          </div>

          <h2 className="text-3xl font-extrabold sm:text-5xl tracking-tight text-white leading-tight">
            Try a cleaner, faster AI workspace today.
          </h2>

          <p className="mt-4 text-sm sm:text-base text-white/70 max-w-lg mx-auto leading-relaxed">
            No credit card, no waiting lists. Jump straight into the workspace with Google or a quick demo login.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Link
              href="/chat"
              className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-amber-500 px-8 py-3.5 text-sm font-bold text-black shadow-lg transition-all hover:scale-105 hover:bg-amber-400 active:scale-95"
            >
              Start Chatting Now <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/about"
              className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Read About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
