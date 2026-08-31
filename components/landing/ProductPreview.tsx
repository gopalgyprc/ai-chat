import React from 'react'
import {
  Sparkle,
  Plus,
  Copy,
  Send,
  Sparkles,
  MessageSquare,
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
              app.aichat.internal/chat
            </span>
          </div>
          <div className="flex items-center gap-2 text-xs text-neutral-400">
            <span className="size-2 rounded-full bg-emerald-500" />
            <span className="hidden sm:inline">Connected to Gemini 3.6</span>
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
                    <Sparkle className="size-3 fill-black" />
                  </div>
                  <span>AIchat</span>
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
                  Recent
                </p>
                <div className="flex items-center gap-2 rounded-lg bg-neutral-200/70 px-2.5 py-1.5 text-xs font-medium text-neutral-900 dark:bg-neutral-800 dark:text-white">
                  <MessageSquare className="size-3.5 text-amber-500 shrink-0" />
                  <span className="truncate">React state architecture</span>
                </div>
                <div className="flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-xs text-neutral-600 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-800/50">
                  <MessageSquare className="size-3.5 text-neutral-400 shrink-0" />
                  <span className="truncate">API route design patterns</span>
                </div>
                <div className="flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-xs text-neutral-600 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-800/50">
                  <MessageSquare className="size-3.5 text-neutral-400 shrink-0" />
                  <span className="truncate">PostgreSQL index tuning</span>
                </div>
              </div>

              <div className="space-y-1">
                <p className="px-2 text-[10px] font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
                  Previous 30 Days
                </p>
                <div className="flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-xs text-neutral-600 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-800/50">
                  <MessageSquare className="size-3.5 text-neutral-400 shrink-0" />
                  <span className="truncate">Draft cold email copy</span>
                </div>
                <div className="flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-xs text-neutral-600 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-800/50">
                  <MessageSquare className="size-3.5 text-neutral-400 shrink-0" />
                  <span className="truncate">Tailwind dark mode setup</span>
                </div>
              </div>
            </div>

            {/* User Profile Footer */}
            <div className="flex items-center justify-between border-t border-neutral-200 pt-3 dark:border-neutral-800">
              <div className="flex items-center gap-2">
                <div className="flex size-7 items-center justify-center rounded-full bg-neutral-900 text-xs font-semibold text-white dark:bg-white dark:text-black">
                  A
                </div>
                <div>
                  <p className="text-xs font-semibold text-neutral-900 dark:text-white">Alex Rivera</p>
                  <p className="text-[10px] text-neutral-500">alex@example.com</p>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Chat Workspace */}
          <div className="flex flex-1 flex-col justify-between p-4 sm:p-6 lg:p-8 bg-white dark:bg-[#121214]">
            {/* Conversation Header */}
            <div className="flex items-center justify-between border-b border-neutral-100 pb-3 dark:border-neutral-800/60">
              <div className="flex items-center gap-2">
                <span className="text-xs sm:text-sm font-semibold text-neutral-800 dark:text-neutral-200">
                  React state architecture
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs text-neutral-500">
                <span className="rounded-full bg-neutral-100 px-2 py-0.5 text-[11px] font-medium text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300">
                  Gemini 3.6
                </span>
              </div>
            </div>

            {/* Message Stream */}
            <div className="my-4 space-y-4 text-xs sm:text-sm">
              {/* User Message */}
              <div className="flex justify-end">
                <div className="max-w-[85%] rounded-2xl rounded-tr-xs bg-neutral-900 px-4 py-2.5 text-white dark:bg-neutral-800">
                  <p>How do I handle optimistic updates in React 19 without blocking UI input?</p>
                </div>
              </div>

              {/* AI Response */}
              <div className="flex items-start gap-3">
                <div className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-amber-500/10 text-amber-600 dark:bg-amber-400/10 dark:text-amber-400 mt-0.5">
                  <Sparkles className="size-4" />
                </div>
                <div className="flex-1 space-y-2 rounded-2xl rounded-tl-xs border border-neutral-200 bg-neutral-50/50 p-4 text-neutral-800 dark:border-neutral-800 dark:bg-neutral-900/50 dark:text-neutral-200">
                  <p className="leading-relaxed">
                    Use React 19&apos;s <code>useOptimistic</code> hook. It allows you to immediately update the local state while the asynchronous network request is pending:
                  </p>

                  <div className="overflow-hidden rounded-lg border border-neutral-200 bg-neutral-900 p-3 font-mono text-[11px] text-neutral-200 dark:border-neutral-800">
                    <div className="flex items-center justify-between pb-1 text-neutral-400 text-[10px]">
                      <span>OptimisticChat.tsx</span>
                      <span className="flex items-center gap-1 text-neutral-300">
                        <Copy className="size-3" /> Copy
                      </span>
                    </div>
                    <code className="block text-amber-200/90 leading-relaxed">
                      const [optimisticMessages, setOptimistic] = useOptimistic(messages, (state, update) =&gt; [...state, update]);
                    </code>
                  </div>
                </div>
              </div>

              {/* Suggested Follow-up chips */}
              <div className="flex flex-wrap gap-1.5 pl-10">
                <span className="rounded-md border border-neutral-200 bg-white px-2.5 py-1 text-[11px] font-medium text-neutral-600 hover:border-neutral-400 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300">
                  🔍 Add error rollback
                </span>
                <span className="rounded-md border border-neutral-200 bg-white px-2.5 py-1 text-[11px] font-medium text-neutral-600 hover:border-neutral-400 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300">
                  🧪 Write unit tests
                </span>
              </div>
            </div>

            {/* Input Bar */}
            <div className="mt-2 flex items-center gap-2 rounded-xl border border-neutral-200 bg-white px-3.5 py-2.5 shadow-2xs dark:border-neutral-800 dark:bg-neutral-900">
              <Sparkles className="size-4 text-amber-500 shrink-0" />
              <input
                type="text"
                readOnly
                placeholder="Ask follow-up question..."
                className="w-full bg-transparent text-xs sm:text-sm text-neutral-700 placeholder-neutral-400 outline-none dark:text-neutral-200 dark:placeholder-neutral-500"
              />
              <button
                type="button"
                aria-label="Send message"
                className="flex size-7 sm:size-8 items-center justify-center rounded-lg bg-neutral-900 text-white dark:bg-white dark:text-black shrink-0"
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
