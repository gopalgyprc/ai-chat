import React from 'react'
import {
  Sparkles,
  Zap,
  Brain,
  ShieldCheck,
  Code2,
  Moon,
  Workflow,
  ArrowRight,
} from 'lucide-react'
import Link from 'next/link'

export function FeatureGrid() {
  const features = [
    {
      icon: Zap,
      title: 'Ultra-Fast Token Streaming',
      desc: 'Experience real-time AI responses with sub-25ms latency. Watch solutions formulate dynamically without waiting for full payload downloads.',
      tag: 'Speed',
      glow: 'from-amber-500/20 to-orange-500/0',
    },
    {
      icon: Brain,
      title: 'Deep Contextual Memory',
      desc: 'Powered by Gemini multimodal reasoning, Alchat remembers full conversational threads, nuances, and technical criteria across multi-turn sessions.',
      tag: 'Intelligence',
      glow: 'from-orange-500/20 to-rose-500/0',
    },
    {
      icon: ShieldCheck,
      title: 'Local-First Cloud Sync',
      desc: 'Conversations persist instantly in your browser storage with zero latency, while seamlessly synchronizing with Firebase Cloud in the background.',
      tag: 'Security',
      glow: 'from-emerald-500/20 to-teal-500/0',
    },
    {
      icon: Code2,
      title: 'Developer Sandbox Ready',
      desc: 'Native syntax highlighting, one-click code copy, clean Markdown parsing, and language detection tailored for modern engineering workflows.',
      tag: 'Coding',
      glow: 'from-blue-500/20 to-indigo-500/0',
    },
    {
      icon: Moon,
      title: 'Dual Theme Craftsmanship',
      desc: 'Switch seamlessly between deeply immersive Dark Mode and clean, crisp Light Mode, crafted with Poppins typography and high-contrast styling.',
      tag: 'Aesthetics',
      glow: 'from-purple-500/20 to-pink-500/0',
    },
    {
      icon: Workflow,
      title: 'Multimodal Flexibility',
      desc: 'From technical code refactoring to storytelling, language translation, creative brainstorming, and philosophical deep dives.',
      tag: 'Versatility',
      glow: 'from-yellow-500/20 to-amber-500/0',
    },
  ]

  return (
    <section id="features" className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20 sm:px-12 sm:py-28">
      <div className="text-center max-w-3xl mx-auto">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white/80 px-4 py-1.5 text-xs font-semibold text-neutral-800 shadow-xs backdrop-blur-md dark:border-white/10 dark:bg-white/5 dark:text-white/80">
          <Sparkles className="size-3.5 text-amber-500 dark:text-amber-400" />
          <span>Core Capabilities</span>
        </div>
        <h2 className="text-3xl font-bold tracking-tight sm:text-5xl text-neutral-900 dark:text-white leading-tight">
          Everything You Need in a{' '}
          <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
            Modern AI Workspace
          </span>
        </h2>
        <p className="mt-4 text-base sm:text-lg text-neutral-600 dark:text-white/70 leading-relaxed">
          Engineered to give developers, creators, and thinkers the ultimate leverage with zero friction.
        </p>
      </div>
      <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => {
          const Icon = f.icon
          return (
            <div
              key={f.title}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-neutral-200 bg-white/80 p-8 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-amber-500/50 hover:shadow-xl dark:border-white/10 dark:bg-[#141416]/80"
            >
              <div
                className={`pointer-events-none absolute -top-12 -left-12 size-40 rounded-full bg-gradient-to-br ${f.glow} blur-2xl transition-opacity duration-300 group-hover:opacity-100 opacity-50`}
              />

              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-500 transition-transform group-hover:scale-110 dark:bg-amber-400/10 dark:text-amber-400">
                    <Icon className="size-6" />
                  </div>
                  <span className="rounded-full bg-neutral-100 px-3 py-1 text-[11px] font-semibold text-neutral-700 dark:bg-white/5 dark:text-white/70">
                    {f.tag}
                  </span>
                </div>

                <h3 className="mt-6 text-lg font-bold text-neutral-900 dark:text-white transition-colors group-hover:text-amber-500 dark:group-hover:text-amber-400">
                  {f.title}
                </h3>
                <p className="mt-3 text-sm text-neutral-600 dark:text-white/65 leading-relaxed">
                  {f.desc}
                </p>
              </div>

              <div className="relative z-10 mt-6 pt-4 border-t border-neutral-100 dark:border-white/5">
                <Link
                  href="/login"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-600 dark:text-amber-400 hover:underline"
                >
                  Explore feature <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
