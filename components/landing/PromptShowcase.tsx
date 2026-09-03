'use client'

import React, { useState } from 'react'
import { GraduationCap, Globe, Cpu, DollarSign, Copy, Check, ArrowRight, Building2 } from 'lucide-react'
import Link from 'next/link'

export function PromptShowcase() {
  const [copied, setCopied] = useState(false)
  const [activeTab, setActiveTab] = useState(0)

  const showcases = [
    {
      tab: 'Admissions & Apply',
      icon: GraduationCap,
      category: 'Undergraduate Admissions',
      prompt: 'What are the admission requirements and deadlines for applying to Indiana Tech?',
      response: `### Undergraduate Admissions at Indiana Tech (Fort Wayne, IN)

1. **Application Fee**:
   • Applying online is **100% FREE** at [indianatech.edu/apply](https://www.indianatech.edu/apply).

2. **Admissions Model**:
   • Indiana Tech operates on a **rolling admissions** timeline—applications are evaluated as soon as transcripts and documents are submitted, with no stressful fixed deadlines.

3. **Required Documents**:
   • Completed online application.
   • Official high school transcripts or GED scores.
   • SAT/ACT test scores are optional for most undergraduate degree programs.

4. **Next Steps**:
   • Once admitted, an admissions counselor will guide you through financial aid award letters, campus housing selection, and course registration.`,
    },
    {
      tab: 'International & Visas',
      icon: Globe,
      category: 'F-1 Visa & I-20 Processing',
      prompt: 'How do international students receive a Form I-20 and what are the English test minimums?',
      response: `### International Student Admissions & Form I-20 Checklist

1. **English Language Proficiency Scores**:
   • TOEFL iBT: Minimum 70
   • IELTS: Minimum 6.0 overall band
   • Duolingo English Test (DET): Minimum 105
   • PTE Academic: Minimum 51

2. **Form I-20 Issuance Process**:
   • Step 1: Submit free online application with academic transcripts and English proof.
   • Step 2: Upload a copy of your valid passport page.
   • Step 3: Provide a Financial Guarantee statement and bank statements verifying funding.
   • Step 4: Indiana Tech issues your official Form I-20 to schedule your F-1 student visa interview.

3. **International Merit Scholarships**:
   • High-achieving international applicants can receive up to **$18,000 per year** in institutional merit awards.`,
    },
    {
      tab: 'Talwar Engineering & CS',
      icon: Cpu,
      category: 'Colleges & Academic Programs',
      prompt: 'What engineering and computing majors are offered in the Talwar College?',
      response: `### Talwar College of Engineering and Computer Sciences

Indiana Tech offers hands-on, career-focused engineering and computing degrees featuring state-of-the-art laboratory facilities:

• **ABET-Accredited Engineering**:
  - Biomedical Engineering (B.S.)
  - Electrical Engineering (B.S.)
  - Mechanical Engineering (B.S.)
  - Industrial & Manufacturing Engineering (B.S.)

• **Computing & Cybersecurity**:
  - Computer Science (B.S.)
  - Cybersecurity (B.S. & M.S.)
  - Software Engineering (B.S.)
  - Information Technology (B.S.)

• **Graduate Degrees**:
  - M.S. in Cybersecurity
  - M.S. in Engineering Management
  - M.S. in Information Systems`,
    },
    {
      tab: 'Tuition & Scholarships',
      icon: DollarSign,
      category: 'Financial Aid & Costs',
      prompt: 'What is the tuition cost per semester, and what scholarships can I qualify for?',
      response: `### Indiana Tech Tuition & Financial Aid Breakdown

1. **Traditional Undergraduate Tuition**:
   • **Cost**: ~$16,436 per semester (12–18 credit hours) / ~$32,872 per academic year.
   • **Online / CPS Tuition**: ~$415 to $530 per credit hour depending on undergraduate/graduate level.

2. **Institutional Scholarships**:
   • Over **90% of traditional undergraduate students** receive institutional grants or scholarships.
   • **Merit Scholarships**: Tiered awards based on high school/college GPA (e.g., Presidential, Dean's, and Achievement awards).
   • **International Merit Scholarships**: Up to $18,000/year for eligible international students.
   • **NAIA Athletic Scholarships**: Awarded across varsity sports teams.

3. **Net Price Calculator**:
   • Available at [indianatech.edu](https://www.indianatech.edu) to calculate your personalized out-of-pocket costs.`,
    },
  ]

  const current = showcases[activeTab]

  const handleCopy = () => {
    navigator.clipboard.writeText(current.response)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="showcase" className="relative mx-auto w-full max-w-7xl px-4 sm:px-8 lg:px-12 py-16 sm:py-24 border-t border-neutral-100 dark:border-neutral-900">
      <div className="max-w-2xl">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1 text-xs font-semibold text-amber-600 dark:text-amber-400">
          <Building2 className="size-3.5" />
          <span>Verified Guidance</span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
          Explore Common Inquiries
        </h2>
        <p className="mt-3 text-sm sm:text-base lg:text-lg text-neutral-600 dark:text-neutral-400">
          See how the Indiana Tech Virtual Assistant answers key questions about admissions, international visas, degrees, and scholarships.
        </p>
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        {showcases.map((s, idx) => {
          const Icon = s.icon
          const isActive = activeTab === idx
          return (
            <button
              key={s.tab}
              onClick={() => setActiveTab(idx)}
              className={`flex items-center gap-2 rounded-lg px-4 py-2 text-xs sm:text-sm font-medium transition-colors cursor-pointer ${
                isActive
                  ? 'bg-neutral-900 text-white dark:bg-amber-400 dark:text-black font-semibold'
                  : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200/70 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800'
              }`}
            >
              <Icon className="size-3.5" />
              <span>{s.tab}</span>
            </button>
          )
        })}
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm dark:border-neutral-800 dark:bg-[#121214]">
        <div className="border-b border-neutral-200 bg-neutral-50/70 p-4 sm:p-5 dark:border-neutral-800 dark:bg-[#161618]">
          <div className="flex items-center justify-between text-xs text-neutral-500 mb-1.5">
            <span className="font-semibold text-amber-600 dark:text-amber-400">
              Inquiry Category ({current.category})
            </span>
            <span>Student Question</span>
          </div>
          <p className="text-sm sm:text-base font-medium text-neutral-900 dark:text-neutral-100">
            &ldquo;{current.prompt}&rdquo;
          </p>
        </div>
        <div className="p-4 sm:p-6 lg:p-8">
          <div className="flex items-center justify-between pb-3 text-xs text-neutral-500 border-b border-neutral-100 dark:border-neutral-800/60 mb-4">
            <span className="font-semibold text-neutral-800 dark:text-neutral-200">
              Indiana Tech Assistant Response
            </span>
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 rounded-md border border-neutral-200 px-2.5 py-1 text-xs text-neutral-700 hover:bg-neutral-50 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800 cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="size-3.5 text-emerald-500" />
                  <span className="text-emerald-500 font-medium">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="size-3.5" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          <div className="whitespace-pre-wrap font-sans text-xs sm:text-sm text-neutral-800 dark:text-neutral-200 leading-relaxed bg-neutral-50 dark:bg-[#0d0d0f] p-4 sm:p-5 rounded-xl border border-neutral-200 dark:border-neutral-800/80">
            {current.response}
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-neutral-200 bg-neutral-50 px-4 py-3 sm:px-6 text-xs dark:border-neutral-800 dark:bg-[#161618]">
          <span className="text-neutral-500 dark:text-neutral-400">
            Sourced strictly from official knowledge on indianatech.edu
          </span>
          <Link
            href="/chat"
            className="flex items-center gap-1 font-semibold text-neutral-900 hover:underline dark:text-amber-400"
          >
            Ask in chat <ArrowRight className="size-3.5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
