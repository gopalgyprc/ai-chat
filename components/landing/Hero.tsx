import Link from 'next/link'
import { ArrowRight, Rocket } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-4 pt-10 text-center sm:pt-16 md:pt-20">
      <div className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-neutral-300 bg-white/70 px-3 py-1 text-[11px] sm:text-xs text-neutral-800 backdrop-blur-md shadow-xs dark:border-white/10 dark:bg-white/5 dark:text-white/80">
        <span className="shrink-0 rounded-full bg-[#f34d30] px-2.5 py-0.5 font-semibold text-white shadow-[0_0_16px_rgba(243,77,48,.6)] text-[10px] sm:text-[11px]">
          ● We are on top
        </span>
        <span className="truncate text-neutral-600 dark:text-white/70">
          We source our linguistic data from diverse sets
        </span>
      </div>
      <h1 className="text-balance text-3xl font-extrabold leading-[1.12] tracking-tight text-neutral-900 transition-colors duration-200 dark:text-white sm:text-5xl md:text-6xl lg:text-7xl sm:leading-[1.08]">
        The Future of Human-AI{' '}
        <span className="inline-flex size-9 sm:size-12 md:size-14 lg:size-16 items-center justify-center rounded-full bg-[#63321b] align-middle shadow-[0_0_32px_rgba(246,93,38,.4)] mx-1 sm:mx-1.5">
          <Rocket className="size-5 sm:size-6 md:size-8 text-orange-200" />
        </span>{' '}
        <br className="hidden xs:inline sm:inline" />
        Synergy Starts Here
      </h1>
      <p className="mt-4 sm:mt-6 max-w-2xl text-pretty text-xs sm:text-sm md:text-base leading-relaxed text-neutral-600 transition-colors duration-200 dark:text-white/75 px-2">
        Unlock the power of advanced AI that understands context, learns from your style,
        and provides instant, human-like responses to elevate your daily productivity
      </p>
      <Link
        href="/login"
        className="mt-6 sm:mt-8 flex items-center gap-2.5 rounded-full bg-neutral-900 px-7 sm:px-9 py-3 sm:py-3.5 text-xs sm:text-sm font-semibold text-white transition-all hover:scale-105 hover:bg-neutral-800 shadow-lg dark:bg-white dark:text-black dark:hover:bg-neutral-100 dark:shadow-[0_4px_25px_rgba(255,255,255,0.2)] active:scale-95"
      >
        Get Started <ArrowRight className="size-4" />
      </Link>
    </section>
  )
}
