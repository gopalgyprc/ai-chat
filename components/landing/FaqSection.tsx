'use client'

import React, { useState } from 'react'
import { ChevronDown, Building2 } from 'lucide-react'

export function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0)

  const faqs = [
    {
      q: 'What academic degree programs does Indiana Tech offer?',
      a: 'Indiana Tech offers career-focused degrees at the associate, bachelor’s, master’s (MBA, MS Cybersecurity, MS Management), and Ph.D. level in Global Leadership. Degrees are housed across the Talwar College of Engineering and Computer Sciences, College of Business, College of Arts and Sciences, and the College of Professional Studies (100% online).',
    },
    {
      q: 'Is there an application fee to apply to Indiana Tech?',
      a: 'No! Applying online to Indiana Tech is 100% FREE for all domestic and international undergraduate and graduate applicants at indianatech.edu/apply.',
    },
    {
      q: 'What are the admission requirements for international students?',
      a: 'International applicants must submit their free online application, official academic transcripts with certified English translations, copy of passport, and proof of English proficiency (TOEFL iBT 70, IELTS 6.0, Duolingo DET 105, or PTE 51). Form I-20 is issued promptly upon verification of financial guarantee documents.',
    },
    {
      q: 'How much is tuition and what scholarships are available?',
      a: 'Traditional undergraduate tuition is ~$16,436 per semester (~$32,872/year). Over 90% of students receive institutional financial aid. International students can qualify for merit scholarships up to $18,000 per year, and there are two full-tuition Presidential scholarships available annually.',
    },
    {
      q: 'Where is Indiana Tech located and who is the university president?',
      a: 'The main campus is located at 1600 E. Washington Blvd., Fort Wayne, Indiana 46803. Dr. Karl W. Einolf has served as the president of Indiana Tech since July 2017.',
    },
    {
      q: 'What athletics and sports teams compete at Indiana Tech?',
      a: 'Indiana Tech’s athletic teams are the Warriors, represented by mascot Maximus the Warrior. The university competes in the National Association of Intercollegiate Athletics (NAIA) in the Wolverine-Hoosier Athletic Conference (WHAC) across 25+ varsity sports.',
    },
  ]

  return (
    <section id="faq" className="relative mx-auto w-full max-w-7xl px-4 sm:px-8 lg:px-12 py-16 sm:py-24 border-t border-neutral-100 dark:border-neutral-900">
      <div className="max-w-2xl">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1 text-xs font-semibold text-amber-600 dark:text-amber-400">
          <Building2 className="size-3.5" />
          <span>Frequently Asked Questions</span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
          Answers to Common Questions
        </h2>
        <p className="mt-3 text-sm sm:text-base lg:text-lg text-neutral-600 dark:text-neutral-400">
          Everything you need to know about Indiana Tech admissions, degrees, tuition, and international policies.
        </p>
      </div>

      <div className="mt-10 max-w-4xl space-y-3">
        {faqs.map((faq, idx) => {
          const isOpen = openIdx === idx
          return (
            <div
              key={faq.q}
              className="rounded-xl border border-neutral-200 bg-white p-5 dark:border-neutral-800 dark:bg-[#121214] shadow-2xs hover:border-amber-500/30 transition-colors"
            >
              <button
                onClick={() => setOpenIdx(isOpen ? null : idx)}
                className="flex w-full items-center justify-between text-left text-sm sm:text-base font-semibold text-neutral-900 dark:text-white cursor-pointer"
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={`size-4 text-neutral-500 transition-transform duration-200 shrink-0 ml-4 ${
                    isOpen ? 'rotate-180 text-amber-500' : ''
                  }`}
                />
              </button>
              {isOpen && (
                <p className="mt-3 text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed border-t border-neutral-100 dark:border-neutral-800/70 pt-3">
                  {faq.a}
                </p>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
