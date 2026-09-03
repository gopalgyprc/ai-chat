'use client'

import React from 'react'
import {
  GraduationCap,
  Globe,
  DollarSign,
  Building2,
  ShieldCheck,
  Award,
} from 'lucide-react'

interface ChatWelcomeProps {
  onSelectPrompt: (promptText: string, initialTitle: string) => void
}

export function ChatWelcome({ onSelectPrompt }: ChatWelcomeProps) {
  const columns = [
    {
      title: 'Colleges & Academic Degrees',
      icon: GraduationCap,
      iconColor: 'text-amber-500 dark:text-amber-400',
      cards: [
        {
          title: 'Talwar Engineering & Computing:',
          desc: 'Computer Science, Cybersecurity, ABET Engineering.',
          prompt: 'What undergraduate and graduate engineering and computer science programs are offered in the Talwar College at Indiana Tech?',
        },
        {
          title: 'College of Business & MBA:',
          desc: 'Accounting, Management, Sports, MBA.',
          prompt: 'What business majors, concentrations, and MBA options does Indiana Tech offer?',
        },
        {
          title: '100% Online Degrees (CPS):',
          desc: 'Flexible accelerated degrees for working adults.',
          prompt: 'How do online degrees work through Indiana Tech\'s College of Professional Studies (CPS)?',
        },
      ],
    },
    {
      title: 'Admissions & International Students',
      icon: Globe,
      iconColor: 'text-orange-500 dark:text-orange-400',
      cards: [
        {
          title: 'International Student Guide:',
          desc: 'TOEFL/IELTS, I-20 visa issuance, checklist.',
          prompt: 'How can international students apply to Indiana Tech, and what are the English proficiency (TOEFL/IELTS/Duolingo) and Form I-20 requirements?',
        },
        {
          title: 'Free Rolling Application:',
          desc: 'No application fee, fast evaluation.',
          prompt: 'How does Indiana Tech\'s free online application and rolling admissions process work?',
        },
        {
          title: 'Graduate & Ph.D. Admissions:',
          desc: 'Master\'s degrees & Ph.D. Global Leadership.',
          prompt: 'What are the admission requirements for graduate master\'s programs and the Ph.D. in Global Leadership at Indiana Tech?',
        },
      ],
    },
    {
      title: 'Tuition, Scholarships & Campus',
      icon: DollarSign,
      iconColor: 'text-amber-500 dark:text-amber-300',
      cards: [
        {
          title: 'Tuition & Cost of Attendance:',
          desc: 'Undergraduate, online rates & housing.',
          prompt: 'What is the tuition cost per semester at Indiana Tech, and how much is housing and dining on the Fort Wayne campus?',
        },
        {
          title: 'Merit Scholarships & Aid:',
          desc: 'Up to $18,000/yr international & domestic aid.',
          prompt: 'What institutional scholarships, merit awards (up to $18,000/year), and financial aid programs are available at Indiana Tech?',
        },
        {
          title: 'Fort Wayne Campus & Warriors:',
          desc: '1600 E Washington Blvd, NAIA athletics.',
          prompt: 'Where is Indiana Tech located, who is the president, and what NAIA sports teams compete for the Indiana Tech Warriors?',
        },
      ],
    },
  ]

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center px-4 py-8 text-center sm:py-12">
      {/* Main Title */}
      <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1 text-xs font-semibold text-amber-600 dark:text-amber-400">
        <Building2 className="size-3.5" />
        <span>Official Knowledge Base • indianatech.edu</span>
      </div>
      <h1 className="mb-2 text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
        Indiana Tech AI Assistant
      </h1>
      <p className="mb-10 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 max-w-xl">
        Your dedicated virtual guide for official information about <strong>Indiana Tech</strong> in Fort Wayne, Indiana. Ask about academic programs, admissions, tuition, international visas, and campus life.
      </p>

      {/* 3 Columns Layout */}
      <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-3">
        {columns.map((col) => {
          const Icon = col.icon
          return (
            <div key={col.title} className="flex flex-col text-left">
              <div className="mb-4 flex items-center gap-2 text-base font-semibold text-neutral-900 dark:text-white">
                <Icon className={`size-4.5 ${col.iconColor}`} />
                <span>{col.title}</span>
              </div>
              <div className="space-y-3.5 flex-1">
                {col.cards.map((card) => (
                  <div
                    key={card.title}
                    onClick={() => onSelectPrompt(card.prompt, `${card.title} ${card.desc}`)}
                    className="group relative cursor-pointer rounded-xl border border-neutral-200 border-l-[3px] border-l-amber-500 bg-white p-4.5 transition-all duration-200 hover:-translate-y-0.5 hover:bg-neutral-50 hover:shadow-md dark:border-white/5 dark:border-l-amber-400/90 dark:bg-[#18181b] dark:hover:bg-[#202024] dark:hover:border-white/10 dark:hover:border-l-amber-400 shadow-xs"
                  >
                    <h4 className="text-[13px] sm:text-sm font-semibold text-neutral-900 dark:text-white/95 group-hover:text-amber-600 dark:group-hover:text-amber-300 transition-colors">
                      {card.title}
                    </h4>
                    <p className="mt-1 text-xs sm:text-[13px] leading-relaxed text-neutral-600 dark:text-white/65 group-hover:text-neutral-800 dark:group-hover:text-white/85 transition-colors">
                      {card.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

