'use client'

import React from 'react'
import { Sparkles, ArrowRight } from 'lucide-react'

interface SuggestedQuestionsProps {
  questions: string[]
  onSelectQuestion: (question: string) => void
}

export function SuggestedQuestions({
  questions,
  onSelectQuestion,
}: SuggestedQuestionsProps) {
  if (!questions || questions.length === 0) return null

  return (
    <div className="mt-4 w-full pl-12 sm:pl-13 animate-fade-in">
      <div className="flex items-center gap-1.5 text-xs font-semibold text-neutral-500 dark:text-white/50 mb-2.5">
        <Sparkles className="size-3.5 text-amber-500 dark:text-amber-400" />
        <span>Suggested follow-ups:</span>
      </div>

      <div className="flex flex-wrap gap-2">
        {questions.map((q, idx) => (
          <button
            key={idx}
            onClick={() => onSelectQuestion(q)}
            className="group flex items-center gap-2 rounded-xl border border-neutral-200 bg-white/90 px-3.5 py-2 text-xs sm:text-[13px] font-medium text-neutral-800 shadow-xs transition-all hover:-translate-y-0.5 hover:border-amber-500/60 hover:bg-neutral-50 hover:shadow-md dark:border-white/10 dark:bg-[#1e1e22] dark:text-white/85 dark:hover:border-amber-400/50 dark:hover:bg-[#28282c] dark:hover:text-white cursor-pointer text-left"
          >
            <span>{q}</span>
            <ArrowRight className="size-3 text-neutral-400 transition-transform group-hover:translate-x-0.5 group-hover:text-amber-500 dark:text-white/40 dark:group-hover:text-amber-400 shrink-0" />
          </button>
        ))}
      </div>
    </div>
  )
}
