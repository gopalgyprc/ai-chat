import React from 'react'
import Link from 'next/link'
import { ArrowRight, GraduationCap } from 'lucide-react'

export function FinalCta() {
  return (
    <section className="relative mx-auto w-full max-w-7xl px-4 sm:px-8 lg:px-12 py-16 sm:py-24">
      <div className="rounded-2xl border border-neutral-200 bg-neutral-50 px-6 py-12 text-center dark:border-neutral-800 dark:bg-[#161618] sm:px-12 sm:py-16">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
          Have Questions About Indiana Tech?
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-sm sm:text-base text-neutral-600 dark:text-neutral-300">
          Get fast, reliable answers about admissions, degrees, tuition, and international visas directly from official knowledge.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/chat"
            className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-neutral-900 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-neutral-800 dark:bg-amber-400 dark:text-black dark:hover:bg-amber-300 shadow-xs"
          >
            Ask Assistant Now <ArrowRight className="size-4" />
          </Link>
          <a
            href="https://www.indianatech.edu/apply"
            target="_blank"
            rel="noreferrer"
            className="flex w-full sm:w-auto items-center justify-center gap-1.5 rounded-lg border border-neutral-300 bg-white px-7 py-3.5 text-sm font-semibold text-neutral-700 transition-colors hover:bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700"
          >
            <GraduationCap className="size-4" />
            Apply to Indiana Tech (Free)
          </a>
        </div>
      </div>
    </section>
  )
}
