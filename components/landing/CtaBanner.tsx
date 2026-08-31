import React from 'react'
import Link from 'next/link'
import { Sparkles, ArrowRight, Zap } from 'lucide-react'

export function CtaBanner() {
  return (
    <section className="relative z-10 mx-auto w-full max-w-7xl px-6 py-16 sm:px-12 sm:py-24">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 p-8 sm:p-16 text-center text-black shadow-2xl shadow-orange-500/20">
        <div className="pointer-events-none absolute -right-16 -top-16 size-72 rounded-full bg-white/20 blur-3xl" />
        <div className="pointer-events-none absolute -left-16 -bottom-16 size-72 rounded-full bg-black/20 blur-3xl" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full bg-black/15 px-4 py-1.5 text-xs font-bold text-black mb-6">
            <Zap className="size-3.5 fill-black" />
            <span>Ready in under 10 seconds</span>
          </div>

          <h2 className="text-3xl font-extrabold sm:text-5xl tracking-tight text-black leading-tight">
            Start Building with Alchat Today
          </h2>

          <p className="mt-4 text-base sm:text-lg font-medium text-black/85 max-w-xl mx-auto leading-relaxed">
            Experience lightning-fast Google Gemini reasoning, seamless dual-theme elegance, and local-first cloud synchronization.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/login"
              className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-black px-9 py-4 text-sm font-bold text-white shadow-xl transition-all hover:scale-105 hover:bg-neutral-900 active:scale-95"
            >
              Get Started for Free <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/about"
              className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-black/30 bg-black/5 px-8 py-4 text-sm font-bold text-black transition-colors hover:bg-black/10"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
