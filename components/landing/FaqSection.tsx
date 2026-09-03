'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, Building2, Sparkles, Mail, ArrowRight } from 'lucide-react'

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
      {/* Centered Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="mb-3.5 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-xs font-semibold text-amber-600 dark:text-amber-400 shadow-2xs">
          <Building2 className="size-3.5" />
          <span>Frequently Asked Questions</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white leading-tight">
          Answers to Common Questions
        </h2>
        <p className="mt-3.5 text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl mx-auto">
          Everything you need to know about Indiana Tech admissions, degrees, tuition, and international policies.
        </p>
      </div>

      {/* Full-Width Accordion List */}
      <div className="mt-12 w-full space-y-3.5">
        {faqs.map((faq, idx) => {
          const isOpen = openIdx === idx
          return (
            <div
              key={faq.q}
              className={`w-full rounded-2xl border transition-all duration-200 ${
                isOpen
                  ? 'border-amber-500/40 bg-white dark:border-amber-500/30 dark:bg-[#151518] shadow-sm'
                  : 'border-neutral-200 bg-white hover:border-neutral-300 dark:border-neutral-800 dark:bg-[#121214] dark:hover:border-neutral-700 shadow-2xs'
              }`}
            >
              <button
                onClick={() => setOpenIdx(isOpen ? null : idx)}
                className="flex w-full items-center justify-between p-5 sm:p-6 text-left cursor-pointer group"
              >
                <span className="text-base sm:text-lg font-semibold text-neutral-900 dark:text-white pr-4 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                  {faq.q}
                </span>
                <div
                  className={`flex size-8 shrink-0 items-center justify-center rounded-xl border transition-all duration-200 ${
                    isOpen
                      ? 'border-amber-500/40 bg-amber-500/15 text-amber-600 dark:text-amber-400'
                      : 'border-neutral-200 bg-neutral-50 text-neutral-500 group-hover:bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-400 dark:group-hover:bg-neutral-800'
                  }`}
                >
                  <ChevronDown
                    className={`size-4 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </div>
              </button>
              {isOpen && (
                <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-neutral-100 dark:border-neutral-800/70">
                  <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Bottom Full-Width Quick Help Strip */}
      <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border border-neutral-200 bg-neutral-50/80 p-5 sm:p-6 dark:border-neutral-800 dark:bg-[#141416]">
        <div className="flex items-center gap-3 text-center sm:text-left">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600 dark:bg-amber-400/10 dark:text-amber-400">
            <Sparkles className="size-5" />
          </div>
          <div>
            <h3 className="text-sm sm:text-base font-semibold text-neutral-900 dark:text-white">
              Have a question not listed here?
            </h3>
            <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400">
              Our Indiana Tech AI assistant is online 24/7 to help you with instant answers.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          <Link
            href="/chat"
            className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-neutral-900 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white transition-all hover:bg-neutral-800 dark:bg-amber-400 dark:text-black dark:hover:bg-amber-300 shadow-xs"
          >
            <span>Ask Assistant</span>
            <ArrowRight className="size-4" />
          </Link>
          <a
            href="mailto:admissions@indianatech.edu"
            className="flex w-full sm:w-auto items-center justify-center gap-1.5 rounded-xl border border-neutral-300 bg-white px-5 py-2.5 text-xs sm:text-sm font-semibold text-neutral-700 hover:bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700 transition-colors"
          >
            <Mail className="size-4" />
            <span>Admissions Email</span>
          </a>
        </div>
      </div>
    </section>
  )
}
