import React from 'react'
import { Building2 } from 'lucide-react'

export function HowItWorks() {
  const steps = [
    {
      step: '1',
      title: 'Ask any Indiana Tech question',
      description:
        'Inquire about academic degrees, tuition rates, English proficiency (TOEFL/IELTS), housing, or admissions deadlines.',
    },
    {
      step: '2',
      title: 'Get instant, verified answers',
      description:
        'The virtual assistant provides accurate answers grounded strictly in official data from indianatech.edu with zero guesswork.',
    },
    {
      step: '3',
      title: 'Apply online or connect with staff',
      description:
        'Follow direct links to submit a free rolling application, calculate net price, or email the admissions team directly.',
    },
  ]

  return (
    <section id="how-it-works" className="relative mx-auto w-full max-w-7xl px-4 sm:px-8 lg:px-12 py-16 sm:py-24 border-t border-neutral-100 dark:border-neutral-900">
      <div className="max-w-2xl">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1 text-xs font-semibold text-amber-600 dark:text-amber-400">
          <Building2 className="size-3.5" />
          <span>Simple 3-Step Process</span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
          How It Works
        </h2>
        <p className="mt-3 text-sm sm:text-base lg:text-lg text-neutral-600 dark:text-neutral-400">
          Get fast, reliable student guidance with an intuitive interface.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {steps.map((s) => (
          <div
            key={s.step}
            className="flex flex-col justify-between rounded-xl border border-neutral-200 bg-white p-6 sm:p-7 dark:border-neutral-800 dark:bg-[#121214] shadow-2xs hover:border-amber-500/40 transition-colors"
          >
            <div>
              <span className="flex size-8 items-center justify-center rounded-lg bg-amber-500 text-xs font-bold text-black shadow-xs">
                {s.step}
              </span>
              <h3 className="mt-4 text-base sm:text-lg font-semibold text-neutral-900 dark:text-white">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {s.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
