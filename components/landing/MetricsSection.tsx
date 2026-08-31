import React from 'react'
import { Zap, ShieldCheck, Cpu, Globe2 } from 'lucide-react'

export function MetricsSection() {
  const metrics = [
    {
      icon: Zap,
      value: '< 25ms',
      label: 'Streaming Latency',
      desc: 'Instant token generation via Gemini 3.6',
    },
    {
      icon: Cpu,
      value: '1M+',
      label: 'Token Context',
      desc: 'Deep multi-turn conversation memory',
    },
    {
      icon: ShieldCheck,
      value: '100%',
      label: 'Local-First Privacy',
      desc: 'Zero-latency cache & encrypted cloud sync',
    },
    {
      icon: Globe2,
      value: '99.99%',
      label: 'Uptime Reliability',
      desc: 'Global edge-distributed infrastructure',
    },
  ]

  const logos = [
    'Google Gemini',
    'Next.js 16',
    'Firebase Cloud',
    'TypeScript',
    'Tailwind CSS',
    'Vercel Edge',
  ]

  return (
    <section className="relative z-10 mx-auto w-full max-w-7xl px-6 py-16 sm:px-12 sm:py-20">
      {/* Logos ticker / subtitle */}
      <div className="text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500 dark:text-white/40">
          Powered by industry-leading technology & frontier AI
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-sm sm:text-base font-semibold text-neutral-400 dark:text-white/40">
          {logos.map((logo) => (
            <div
              key={logo}
              className="rounded-full border border-neutral-200 bg-white/60 px-5 py-2 shadow-xs backdrop-blur-md transition-all hover:border-amber-500/40 hover:text-neutral-900 dark:border-white/10 dark:bg-white/5 dark:hover:text-white"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>

      {/* Metrics Cards Grid */}
      <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((m) => {
          const Icon = m.icon
          return (
            <div
              key={m.label}
              className="group relative rounded-3xl border border-neutral-200 bg-white/80 p-7 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/50 hover:shadow-xl dark:border-white/10 dark:bg-[#141416]/80"
            >
              <div className="mb-4 inline-flex size-11 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-500 transition-transform group-hover:scale-110 dark:bg-amber-400/10 dark:text-amber-400">
                <Icon className="size-5" />
              </div>
              <p className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
                {m.value}
              </p>
              <p className="mt-1 text-sm font-semibold text-neutral-800 dark:text-white/90">
                {m.label}
              </p>
              <p className="mt-1.5 text-xs text-neutral-500 dark:text-white/50 leading-relaxed">
                {m.desc}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
