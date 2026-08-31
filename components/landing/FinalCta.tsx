import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function FinalCta() {
  return (
    <section className="relative mx-auto w-full max-w-7xl px-4 sm:px-8 lg:px-12 py-16 sm:py-24">
      <div className="rounded-2xl border border-neutral-200 bg-neutral-50 px-6 py-12 text-center dark:border-neutral-800 dark:bg-[#161618] sm:px-12 sm:py-16">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
          Start chatting in seconds.
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-sm sm:text-base text-neutral-600 dark:text-neutral-400">
          No credit card required. Sign in with your Google account or test the workspace instantly with a demo session.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/chat"
            className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-neutral-900 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200 shadow-xs"
          >
            Start chatting <ArrowRight className="size-4" />
          </Link>
          <Link
            href="/login"
            className="flex w-full sm:w-auto items-center justify-center rounded-lg border border-neutral-300 bg-white px-7 py-3.5 text-sm font-semibold text-neutral-700 transition-colors hover:bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700"
          >
            Try demo
          </Link>
        </div>
      </div>
    </section>
  )
}
