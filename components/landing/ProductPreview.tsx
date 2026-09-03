import React from 'react'
import {
  GraduationCap,
  Plus,
  Send,
  Sparkles,
  MessageSquare,
  Building2,
  Award,
} from 'lucide-react'

export function ProductPreview() {
  return (
    <section className="relative mx-auto w-full max-w-7xl px-4 sm:px-8 lg:px-12 pb-16 sm:pb-24">
      {/* Outer App Frame */}
      <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-xl dark:border-neutral-800 dark:bg-[#121214]">
        {/* Top Window Bar */}
        <div className="flex h-10 items-center justify-between border-b border-neutral-200 bg-neutral-50 px-4 dark:border-neutral-800 dark:bg-[#18181b]">
          <div className="flex items-center gap-2">
            <span className="size-2.5 rounded-full bg-neutral-300 dark:bg-neutral-700" />
            <span className="size-2.5 rounded-full bg-neutral-300 dark:bg-neutral-700" />
            <span className="size-2.5 rounded-full bg-neutral-300 dark:bg-neutral-700" />
            <span className="ml-2 text-xs font-medium text-neutral-500 dark:text-neutral-400">
              indianatech.edu/virtual-assistant
            </span>
          </div>
          <div className="flex items-center gap-2 text-xs text-neutral-400">
            <span className="size-2 rounded-full bg-emerald-500" />
            <span className="hidden sm:inline">Connected to Indiana Tech Knowledge Base</span>
          </div>
        </div>

        {/* Inner App Workspace Grid */}
        <div className="flex min-h-[480px] sm:min-h-[540px]">
          {/* Left Sidebar (Visible on md and above) */}
          <aside className="hidden md:flex w-64 shrink-0 flex-col justify-between border-r border-neutral-200 bg-neutral-50/50 p-4 dark:border-neutral-800 dark:bg-[#161618]">
            <div className="space-y-4">
              {/* Sidebar Header & New Chat button */}
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 text-xs font-bold text-neutral-900 dark:text-white">
                  <div className="flex size-5 items-center justify-center rounded bg-amber-500 text-black">
                    <GraduationCap className="size-3.5" />
                  </div>
                  <span>Indiana Tech AI</span>
                </div>
                <button
                  type="button"
                  aria-label="Create new chat"
                  className="flex items-center gap-1 rounded-md border border-neutral-200 bg-white px-2 py-1 text-[11px] font-medium text-neutral-700 shadow-2xs hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200"
                >
                  <Plus className="size-3" /> New
                </button>
              </div>

              {/* Chat History Section */}
              <div className="space-y-1">
                <p className="px-2 text-[10px] font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
                  Recent Inquiries
                </p>
                <div className="flex items-center gap-2 rounded-lg bg-neutral-200/70 px-2.5 py-1.5 text-xs font-medium text-neutral-900 dark:bg-neutral-800 dark:text-white">
                  <MessageSquare className="size-3.5 text-amber-500 shrink-0" />
                  <span className="truncate">International Student I-20 Guide</span>
                </div>
                <div className="flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-xs text-neutral-600 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-800/50">
                  <MessageSquare className="size-3.5 text-neutral-400 shrink-0" />
                  <span className="truncate">Talwar Engineering & CS Majors</span>
                </div>
                <div className="flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-xs text-neutral-600 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-800/50">
                  <MessageSquare className="size-3.5 text-neutral-400 shrink-0" />
                  <span className="truncate">Tuition & Merit Scholarships</span>
                </div>
              </div>

              <div className="space-y-1">
                <p className="px-2 text-[10px] font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
                  Previous 30 Days
                </p>
                <div className="flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-xs text-neutral-600 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-800/50">
                  <MessageSquare className="size-3.5 text-neutral-400 shrink-0" />
                  <span className="truncate">MBA & Global Leadership Ph.D.</span>
                </div>
                <div className="flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-xs text-neutral-600 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-800/50">
                  <MessageSquare className="size-3.5 text-neutral-400 shrink-0" />
                  <span className="truncate">Fort Wayne Campus Housing</span>
                </div>
              </div>
            </div>

            {/* User Profile Footer */}
            <div className="flex items-center justify-between border-t border-neutral-200 pt-3 dark:border-neutral-800">
              <div className="flex items-center gap-2">
                <div className="flex size-7 items-center justify-center rounded-full bg-amber-500 text-xs font-bold text-black">
                  IT
                </div>
                <div>
                  <p className="text-xs font-semibold text-neutral-900 dark:text-white">Prospective Student</p>
                  <p className="text-[10px] text-neutral-500">admissions@indianatech.edu</p>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Chat Workspace */}
          <div className="flex flex-1 flex-col justify-between p-4 sm:p-6 lg:p-8 bg-white dark:bg-[#121214]">
            {/* Conversation Header */}
            <div className="flex items-center justify-between border-b border-neutral-100 pb-3 dark:border-neutral-800/60">
              <div className="flex items-center gap-2">
                <Building2 className="size-4 text-amber-500" />
                <span className="text-xs sm:text-sm font-semibold text-neutral-800 dark:text-neutral-200">
                  International Student Admissions & Scholarships
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs text-neutral-500">
                <span className="rounded-full bg-amber-500/10 px-2.5 py-0.5 text-[11px] font-semibold text-amber-600 dark:text-amber-400">
                  indianatech.edu
                </span>
              </div>
            </div>

            {/* Message Stream */}
            <div className="my-4 space-y-4 text-xs sm:text-sm">
              {/* User Message */}
              <div className="flex justify-end">
                <div className="max-w-[85%] rounded-2xl rounded-tr-xs bg-amber-500/15 border border-amber-500/30 px-4 py-2.5 text-neutral-900 dark:text-white dark:bg-amber-500/20">
                  <p>How do international students apply to Indiana Tech, and what are the scholarship options?</p>
                </div>
              </div>

              {/* AI Response */}
              <div className="flex items-start gap-3">
                <div className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-gradient-to-tr from-amber-500 to-orange-500 text-black shadow-xs mt-0.5">
                  <Sparkles className="size-4 text-white" />
                </div>
                <div className="flex-1 space-y-2 rounded-2xl rounded-tl-xs border border-neutral-200 bg-neutral-50/50 p-4 text-neutral-800 dark:border-neutral-800 dark:bg-neutral-900/50 dark:text-neutral-200">
                  <p className="font-semibold text-neutral-900 dark:text-white">
                    International Admissions at Indiana Tech:
                  </p>
                  <ul className="space-y-1.5 list-disc pl-5 leading-relaxed text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
                    <li>
                      <strong>English Proficiency:</strong> TOEFL iBT (70) | IELTS (6.0) | Duolingo DET (105) | PTE (51).
                    </li>
                    <li>
                      <strong>Free Online Application:</strong> Applications are evaluated on a <strong>rolling basis</strong> with no application fee.
                    </li>
                    <li>
                      <strong>Form I-20 & Visa:</strong> Issued once academic acceptance and financial guarantees are verified for F-1 visa processing.
                    </li>
                    <li>
                      <strong>Merit Scholarships:</strong> High-achieving international undergraduate students qualify for up to <strong>$18,000/year</strong> in merit scholarships.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Suggested Follow-up chips */}
              <div className="flex flex-wrap gap-1.5 pl-10">
                <span className="rounded-md border border-neutral-200 bg-white px-2.5 py-1 text-[11px] font-medium text-neutral-600 hover:border-amber-400 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300">
                  📜 What documents are needed for I-20?
                </span>
                <span className="rounded-md border border-neutral-200 bg-white px-2.5 py-1 text-[11px] font-medium text-neutral-600 hover:border-amber-400 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300">
                  ⚙️ Explore Talwar Engineering majors
                </span>
              </div>
            </div>

            {/* Input Bar */}
            <div className="mt-2 flex items-center gap-2 rounded-xl border border-neutral-200 bg-white px-3.5 py-2.5 shadow-2xs dark:border-neutral-800 dark:bg-neutral-900">
              <Sparkles className="size-4 text-amber-500 shrink-0" />
              <input
                type="text"
                readOnly
                placeholder="Ask anything about Indiana Tech (programs, tuition, admissions)..."
                className="w-full bg-transparent text-xs sm:text-sm text-neutral-700 placeholder-neutral-400 outline-none dark:text-neutral-200 dark:placeholder-neutral-500"
              />
              <button
                type="button"
                aria-label="Send message"
                className="flex size-7 sm:size-8 items-center justify-center rounded-lg bg-neutral-900 text-white dark:bg-amber-400 dark:text-black shrink-0"
              >
                <Send className="size-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
