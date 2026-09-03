import React from 'react'
import { GraduationCap, Briefcase, DollarSign, Globe, Building2 } from 'lucide-react'

export function Features() {
  const features = [
    {
      icon: GraduationCap,
      title: 'Talwar Engineering & Computing',
      description:
        'ABET-accredited engineering degrees in Biomedical, Mechanical, Electrical, plus cutting-edge Computer Science & Cybersecurity programs.',
    },
    {
      icon: Briefcase,
      title: 'College of Business & Leadership',
      description:
        'Hands-on degrees in Accounting, Business Administration, Sports Management, MBA tracks, and a Ph.D. in Global Leadership.',
    },
    {
      icon: DollarSign,
      title: 'Tuition & Merit Scholarships',
      description:
        'Traditional undergraduate tuition is ~$16,436/semester with international merit awards up to $18,000/year and full-tuition scholarships.',
    },
    {
      icon: Globe,
      title: 'International Student Guidance',
      description:
        'Free rolling admissions, clear English proficiency standards (TOEFL 70 / IELTS 6.0 / Duolingo 105), and expedited Form I-20 visa support.',
    },
  ]

  return (
    <section id="features" className="relative mx-auto w-full max-w-7xl px-4 sm:px-8 lg:px-12 py-16 sm:py-24">
      {/* Section Header */}
      <div className="max-w-2xl">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1 text-xs font-semibold text-amber-600 dark:text-amber-400">
          <Building2 className="size-3.5" />
          <span>Academic Excellence & Support</span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
          Everything You Need to Know About Indiana Tech
        </h2>
        <p className="mt-3 text-sm sm:text-base lg:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
          From hands-on STEM and business degrees in Fort Wayne to 100% online programs, financial aid, and campus housing.
        </p>
      </div>

      {/* 4 Feature Cards */}
      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => {
          const Icon = f.icon
          return (
            <div
              key={f.title}
              className="flex flex-col justify-between rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-[#121214] shadow-2xs hover:border-amber-500/40 transition-colors"
            >
              <div>
                <div className="flex size-10 items-center justify-center rounded-lg bg-amber-500/10 text-amber-600 dark:bg-amber-400/10 dark:text-amber-400">
                  <Icon className="size-5" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-neutral-900 dark:text-white">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {f.description}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
