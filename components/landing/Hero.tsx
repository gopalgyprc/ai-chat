import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative mx-auto flex w-full max-w-4xl flex-col items-center px-4 pt-14 pb-8 text-center sm:pt-20 sm:pb-12">
      {/* Small quiet tag */}
      <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-100/80 px-3.5 py-1 text-xs font-medium text-neutral-700 dark:border-neutral-800 dark:bg-neutral-900/80 dark:text-neutral-300">
        <span className="size-1.5 rounded-full bg-emerald-500" />
        <span>Simple, fast AI workspace</span>
      </div>

      {/* Main Headline */}
      <h1 className="text-balance text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white sm:text-5xl md:text-6xl leading-[1.15]">
        Your AI workspace, built for everyday work.
      </h1>

      {/* Supporting Text */}
      <p className="mt-5 max-w-2xl text-base sm:text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
        Chat with AI, organize your conversations, and get things done in one simple, distraction-free workspace.
      </p>

      {/* CTAs */}
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto">
        <Link
          href="/chat"
          className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-neutral-900 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200 active:scale-[0.99] shadow-xs"
        >
          Start chatting <ArrowRight className="size-4" />
        </Link>
        <Link
          href="/login"
          className="flex w-full sm:w-auto items-center justify-center rounded-lg border border-neutral-300 bg-white px-6 py-3 text-sm font-semibold text-neutral-700 transition-colors hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800"
        >
          Try demo
        </Link>
      </div>
    </section>
  )
}
