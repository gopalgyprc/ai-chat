import React from 'react'
import {
  Sparkles,
  Zap,
  Brain,
  ShieldCheck,
  Code2,
  Copy,
  Check,
  CornerDownRight,
  ArrowRight,
} from 'lucide-react'
import Link from 'next/link'

export function FeatureHighlights() {
  return (
    <section className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20 sm:px-12 sm:py-28">
      {/* Section Header */}
      <div className="max-w-3xl">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white/80 px-3.5 py-1 text-xs font-semibold text-neutral-800 shadow-xs backdrop-blur-md dark:border-white/10 dark:bg-white/5 dark:text-white/80">
          <Sparkles className="size-3.5 text-amber-500" />
          <span>Designed with care</span>
        </div>
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl text-neutral-900 dark:text-white leading-tight">
          Everything built for everyday work,{' '}
          <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
            not marketing checklists.
          </span>
        </h2>
        <p className="mt-4 text-base sm:text-lg text-neutral-600 dark:text-white/70 leading-relaxed">
          We removed the unnecessary noise and focused on what actually makes writing, coding, and thinking with AI feel effortless.
        </p>
      </div>

      {/* Asymmetric Editorial Highlights Grid */}
      <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* Highlight 1: Real-time Streaming & Code (7 cols) */}
        <div className="lg:col-span-7 flex flex-col justify-between rounded-3xl border border-neutral-200 bg-white/90 p-8 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-[#141416]/90">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
              <Zap className="size-4" />
              <span>Real-Time Streaming</span>
            </div>
            <h3 className="mt-3 text-2xl font-bold text-neutral-900 dark:text-white">
              Instant responses that keep up with your thinking
            </h3>
            <p className="mt-2.5 text-sm text-neutral-600 dark:text-white/70 leading-relaxed">
              No waiting 5 seconds for a giant paragraph to pop up all at once. Tokens stream as they formulate with syntax highlighting and instant one-click copying.
            </p>
          </div>

          {/* Interactive Code Mockup */}
          <div className="mt-8 overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50 dark:border-white/5 dark:bg-[#0c0c0e] p-4 text-xs font-mono">
            <div className="flex items-center justify-between border-b border-neutral-200 pb-2.5 mb-3 dark:border-white/10 text-neutral-500 dark:text-white/40 font-sans">
              <span>useChatStream.ts</span>
              <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
                <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Live Streaming</span>
              </div>
            </div>
            <pre className="text-neutral-800 dark:text-amber-200/90 leading-relaxed overflow-x-auto">
{`const { messages, send } = useChatStream({
  model: 'gemini-3.6-flash',
  onChunk: (token) => renderLive(token),
  onError: (err) => fallbackGracefully(err)
})`}
            </pre>
          </div>
        </div>

        {/* Highlight 2: Multi-Turn Memory (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between rounded-3xl border border-neutral-200 bg-white/90 p-8 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-[#141416]/90">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-orange-600 dark:text-orange-400">
              <Brain className="size-4" />
              <span>Contextual Memory</span>
            </div>
            <h3 className="mt-3 text-2xl font-bold text-neutral-900 dark:text-white">
              Remembers the conversation across turns
            </h3>
            <p className="mt-2.5 text-sm text-neutral-600 dark:text-white/70 leading-relaxed">
              Ask a question, follow up with a quick tweak or refactor, and watch Alchat retain your variable names and constraints without repeating yourself.
            </p>
          </div>

          {/* Chat context bubble mockup */}
          <div className="mt-8 space-y-3">
            <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-3.5 text-xs text-neutral-800 dark:text-amber-100 ml-auto max-w-[85%]">
              &ldquo;Now convert that same hook into TypeScript with retry logic.&rdquo;
            </div>
            <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-3.5 text-xs text-neutral-800 dark:border-white/5 dark:bg-[#1e1e22] dark:text-white/90 max-w-[90%] flex items-start gap-2">
              <Sparkles className="size-3.5 text-amber-500 shrink-0 mt-0.5" />
              <span>Preserved previous props structure and added exponential backoff retry.</span>
            </div>
          </div>
        </div>

        {/* Highlight 3: Local-First Privacy (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between rounded-3xl border border-neutral-200 bg-white/90 p-8 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-[#141416]/90">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              <ShieldCheck className="size-4" />
              <span>Local-First & Private</span>
            </div>
            <h3 className="mt-3 text-2xl font-bold text-neutral-900 dark:text-white">
              Your messages write locally with zero lag
            </h3>
            <p className="mt-2.5 text-sm text-neutral-600 dark:text-white/70 leading-relaxed">
              Everything writes immediately to your browser cache for instant responsiveness. When you are connected, your history syncs securely to your Firebase account.
            </p>
          </div>

          <div className="mt-8 flex items-center justify-between rounded-2xl border border-neutral-200 bg-neutral-50 p-4 text-xs dark:border-white/5 dark:bg-[#111113]">
            <span className="font-semibold text-neutral-700 dark:text-white/80">Local Storage Sync</span>
            <span className="rounded-md bg-emerald-500/10 px-2.5 py-1 text-emerald-600 dark:text-emerald-400 font-bold">
              0ms Latency
            </span>
          </div>
        </div>

        {/* Highlight 4: Smart Follow-Up Suggestions (7 cols) */}
        <div className="lg:col-span-7 flex flex-col justify-between rounded-3xl border border-neutral-200 bg-white/90 p-8 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-[#141416]/90">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400">
              <CornerDownRight className="size-4" />
              <span>Smart Follow-Ups</span>
            </div>
            <h3 className="mt-3 text-2xl font-bold text-neutral-900 dark:text-white">
              One-click suggestions that keep exploration going
            </h3>
            <p className="mt-2.5 text-sm text-neutral-600 dark:text-white/70 leading-relaxed">
              After every answer, Alchat provides 4 to 5 contextual follow-up questions. Click any chip to dive deeper without typing long prompts.
            </p>
          </div>

          {/* Interactive chips visual */}
          <div className="mt-8 flex flex-wrap gap-2">
            {[
              '🔍 Can you optimize this for mobile performance?',
              '🧪 Write unit tests covering edge cases',
              '🛡️ What security considerations should I keep in mind?',
              '📋 Summarize key takeaways as a checklist',
            ].map((chip) => (
              <span
                key={chip}
                className="rounded-xl border border-neutral-200 bg-neutral-100 px-3 py-1.5 text-xs font-medium text-neutral-800 dark:border-white/10 dark:bg-white/5 dark:text-white/80"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
