import Link from 'next/link'
import { ArrowRight, Rocket } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center px-4 pt-12 text-center sm:pt-20">
      {/* Top pill badge */}
      <div className="mb-6 flex items-center gap-2.5 rounded-full border border-neutral-300 bg-white/70 px-3 py-1.5 text-xs text-neutral-800 backdrop-blur-md shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-white/80">
        <span className="rounded-full bg-[#f34d30] px-3.5 py-1 font-semibold text-white shadow-[0_0_20px_rgba(243,77,48,.6)] text-[11px]">
          ● We are on top
        </span>
        <span className="hidden px-2 sm:inline text-neutral-600 dark:text-white/70">
          We source our linguistic data from diverse sets
        </span>
      </div>

      {/* Main heading */}
      <h1 className="text-balance text-4xl font-bold leading-[1.08] tracking-[-0.04em] text-neutral-900 transition-colors duration-200 dark:text-white sm:text-6xl md:text-7xl">
        The Future of Human-AI
        <br className="hidden sm:block" /> Synergy{' '}
        <span className="inline-flex size-14 items-center justify-center rounded-full bg-[#63321b] align-middle shadow-[0_0_32px_rgba(246,93,38,.4)] sm:size-16">
          <Rocket className="size-8 text-orange-200 sm:size-9" />
        </span>{' '}
        Starts Here
      </h1>

      {/* Description */}
      <p className="mt-6 max-w-2xl text-pretty text-sm leading-relaxed text-neutral-600 transition-colors duration-200 dark:text-white/75 sm:text-base">
        Unlock the power of advanced AI that understands context, learns from your style,
        and provides instant, human-like responses to elevate your daily productivity
      </p>

      {/* CTA Get Started button */}
      <Link
        href="/login"
        className="mt-8 flex items-center gap-2.5 rounded-full bg-neutral-900 px-9 py-3.5 text-sm font-semibold text-white transition-all hover:scale-105 hover:bg-neutral-800 shadow-lg dark:bg-white dark:text-black dark:hover:bg-neutral-100 dark:shadow-[0_4px_25px_rgba(255,255,255,0.2)]"
      >
        Get Started <ArrowRight className="size-4" />
      </Link>
    </section>
  )
}
