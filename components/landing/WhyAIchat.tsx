import React from 'react'
import { Check, Building2 } from 'lucide-react'

export function WhyAIchat() {
  const points = [
    {
      title: '100% Grounded in Official Indiana Tech Info',
      description:
        'All answers are strictly scoped to official university resources on indianatech.edu to guarantee reliable, hallucination-free guidance.',
    },
    {
      title: '24/7 International & Admissions Support',
      description:
        'Get immediate guidance on English proficiency requirements (TOEFL/IELTS), Form I-20 visa steps, and financial guarantees anytime.',
    },
    {
      title: 'Explore Degrees & Scholarship Tiers',
      description:
        'Easily discover undergraduate and graduate programs in engineering, business, cybersecurity, and calculate your merit scholarship eligibility.',
    },
    {
      title: 'Completely Free with Zero Friction',
      description:
        'Available freely to all prospective students, parents, high school counselors, and alumni without paywalls or credit cards.',
    },
  ]

  return (
    <section id="why-aichat" className="relative mx-auto w-full max-w-7xl px-4 sm:px-8 lg:px-12 py-16 sm:py-24 border-t border-neutral-100 dark:border-neutral-900">
      <div className="max-w-2xl">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1 text-xs font-semibold text-amber-600 dark:text-amber-400">
          <Building2 className="size-3.5" />
          <span>Why Use The Assistant</span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
          Why Use the Indiana Tech Virtual Assistant
        </h2>
        <p className="mt-3 text-sm sm:text-base lg:text-lg text-neutral-600 dark:text-neutral-400">
          A dedicated, accurate digital guide designed to help you navigate your educational journey at Indiana Tech.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {points.map((p) => (
          <div
            key={p.title}
            className="flex items-start gap-4 rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-[#121214] shadow-2xs hover:border-amber-500/40 transition-colors"
          >
            <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-amber-500/15 text-amber-600 dark:bg-amber-400/20 dark:text-amber-400 mt-0.5">
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
