import Link from 'next/link'
import { ArrowRight, Building2, Sparkles, GraduationCap } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative mx-auto flex w-full max-w-4xl flex-col items-center px-4 pt-14 pb-8 text-center sm:pt-20 sm:pb-12">
      {/* Small quiet tag */}
      <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-xs font-semibold text-amber-700 dark:text-amber-400 shadow-2xs">
        <Building2 className="size-3.5" />
        <span>Official Knowledge Base • indianatech.edu</span>
      </div>

      {/* Main Headline */}
      <h1 className="text-balance text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white sm:text-5xl md:text-6xl leading-[1.15]">
        Your Official AI Guide to{' '}
        <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 bg-clip-text text-transparent">
          Indiana Tech
        </span>
      </h1>

      {/* Supporting Text */}
      <p className="mt-5 max-w-2xl text-base sm:text-lg leading-relaxed text-neutral-600 dark:text-neutral-300">
        Get instant, accurate information about degree programs, tuition costs, international admissions & Form I-20 visas, merit scholarships, and campus life at Indiana Tech in Fort Wayne, Indiana.
      </p>

      {/* CTAs */}
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto">
        <Link
          href="/chat"
          className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-neutral-900 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-neutral-800 dark:bg-amber-400 dark:text-black dark:hover:bg-amber-300 active:scale-[0.99] shadow-xs"
        >
          Ask Indiana Tech Assistant <ArrowRight className="size-4" />
        </Link>
        <a
          href="https://www.indianatech.edu"
          target="_blank"
          rel="noreferrer"
          className="flex w-full sm:w-auto items-center justify-center gap-1.5 rounded-lg border border-neutral-300 bg-white px-6 py-3.5 text-sm font-semibold text-neutral-700 transition-colors hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800"
        >
          <GraduationCap className="size-4" />
          Visit indianatech.edu
        </a>
      </div>
    </section>
  )
}
