'use client'

import React, { useState } from 'react'
import {
  GraduationCap,
  BookOpen,
  FolderGit2,
  Briefcase,
  Sparkles,
  FileText,
  HelpCircle,
} from 'lucide-react'

interface ChatWelcomeProps {
  onSelectPrompt: (promptText: string, initialTitle: string) => void
}

export function ChatWelcome({ onSelectPrompt }: ChatWelcomeProps) {
  const [activeTab, setActiveTab] = useState<'study' | 'projects' | 'career'>('study')

  const columns = [
    {
      title: 'Academics & Study',
      icon: GraduationCap,
      iconColor: 'text-amber-500 dark:text-amber-400',
      cards: [
        {
          title: 'Exam Revision Plan:',
          desc: 'Create a high-yield 7-day study timetable.',
          prompt: 'Create a structured 7-day active recall revision schedule with practice quizzes for my semester exams.',
        },
        {
          title: 'Research Paper Formatting:',
          desc: 'Structure citations and literature review.',
          prompt: 'How do I structure a 10-page academic research paper in IEEE format with proper in-text citations and bibliography?',
        },
        {
          title: 'Step-by-Step Problem Solver:',
          desc: 'Solve complex math & engineering problems.',
          prompt: 'Explain how to solve complex matrix eigenvalue problems step-by-step with practical engineering applications.',
        },
      ],
    },
    {
      title: 'Final Year Projects',
      icon: FolderGit2,
      iconColor: 'text-orange-500 dark:text-orange-400',
      cards: [
        {
          title: 'Project Topic Selection:',
          desc: 'Brainstorm cutting-edge engineering topics.',
          prompt: 'Suggest 5 innovative final year engineering project ideas combining Full-Stack Web, AI, and Cloud Architecture with high impact.',
        },
        {
          title: 'Architecture & Schema Design:',
          desc: 'Design system workflows and ER diagrams.',
          prompt: 'Help me design the system architecture diagram, database schema (ERD), and API endpoints for a scalable university management portal.',
        },
        {
          title: 'Project Viva & Defense Prep:',
          desc: 'Practice examiner defense questions.',
          prompt: 'Generate 10 challenging technical viva questions that university external examiners frequently ask during final project defense.',
        },
      ],
    },
    {
      title: 'Career & Campus Prep',
      icon: Briefcase,
      iconColor: 'text-amber-500 dark:text-amber-300',
      cards: [
        {
          title: 'Student Resume & LOR:',
          desc: 'Craft ATS resumes & email professors.',
          prompt: 'Draft a polite formal email to my university professor requesting a strong Letter of Recommendation (LOR) for graduate studies / internships.',
        },
        {
          title: 'Campus Placement Prep:',
          desc: 'Technical & HR interview practice.',
          prompt: 'Give me the top 10 Data Structures & Algorithms (DSA) questions most frequently asked in on-campus software engineering placements.',
        },
        {
          title: 'Lab Report Formatter:',
          desc: 'Write clear engineering lab conclusions.',
          prompt: 'Help me write a professional academic laboratory report conclusion with error analysis and future research scope.',
        },
      ],
    },
  ]

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center px-4 py-8 text-center sm:py-12">
      {/* Category Pills */}
      <div className="mb-10 inline-flex items-center rounded-full border border-neutral-200 bg-neutral-100 p-1.5 shadow-xs dark:border-white/10 dark:bg-[#161619]">
        <button
          onClick={() => setActiveTab('study')}
          className={`flex items-center gap-2 rounded-full px-4 py-2 text-xs sm:text-sm font-medium transition-all cursor-pointer ${
            activeTab === 'study'
              ? 'bg-white text-neutral-900 shadow-xs dark:bg-white/15 dark:text-white'
              : 'text-neutral-600 hover:text-neutral-900 dark:text-white/60 dark:hover:text-white'
          }`}
        >
          <BookOpen className="size-4 text-amber-500" />
          <span>Study & Exams</span>
        </button>

        <button
          onClick={() => setActiveTab('projects')}
          className={`flex items-center gap-2 rounded-full px-4 py-2 text-xs sm:text-sm font-medium transition-all cursor-pointer ${
            activeTab === 'projects'
              ? 'bg-white text-neutral-900 shadow-xs dark:bg-white/15 dark:text-white'
              : 'text-neutral-600 hover:text-neutral-900 dark:text-white/60 dark:hover:text-white'
          }`}
        >
          <FolderGit2 className="size-4 text-orange-500" />
          <span>Final Year Projects</span>
        </button>

        <button
          onClick={() => setActiveTab('career')}
          className={`flex items-center gap-2 rounded-full px-4 py-2 text-xs sm:text-sm font-medium transition-all cursor-pointer ${
            activeTab === 'career'
              ? 'bg-white text-neutral-900 shadow-xs dark:bg-white/15 dark:text-white'
              : 'text-neutral-600 hover:text-neutral-900 dark:text-white/60 dark:hover:text-white'
          }`}
        >
          <Briefcase className="size-4 text-emerald-500" />
          <span>Career & Placements</span>
        </button>
      </div>

      {/* Main Title */}
      <h1 className="mb-2 text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
        University AI Assistant
      </h1>
      <p className="mb-10 text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 max-w-lg">
        Your academic companion for coursework, exam revision, final year project implementation, and campus placements.
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
