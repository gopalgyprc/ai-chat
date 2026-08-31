import Link from 'next/link'
import { Header } from '@/components/landing/Header'
import { Footer } from '@/components/landing/Footer'
import {
  Sparkles,
  Zap,
  ShieldCheck,
  Cpu,
  Brain,
  Globe2,
  ArrowRight,
  Layers,
  CheckCircle2,
} from 'lucide-react'

export default function AboutPage() {
  const pillars = [
    {
      icon: Zap,
      title: 'Ultra-Low Latency Streaming',
      desc: 'Engineered from the ground up for real-time token generation, streaming thoughts instantly to provide an uninterrupted flow of creativity.',
      color: 'text-amber-500 bg-amber-500/10 dark:text-amber-400 dark:bg-amber-400/10',
    },
    {
      icon: Brain,
      title: 'Context-Aware Intelligence',
      desc: 'Powered by Google Gemini 3.6 multimodal reasoning, maintaining seamless conversation memory across complex topics and multi-turn workflows.',
      color: 'text-orange-500 bg-orange-500/10 dark:text-orange-400 dark:bg-orange-400/10',
    },
    {
      icon: ShieldCheck,
      title: 'Local-First Privacy & Security',
      desc: 'Zero-latency local cache backed by enterprise Firebase cloud encryption ensures your chats remain private, responsive, and available offline.',
      color: 'text-emerald-500 bg-emerald-500/10 dark:text-emerald-400 dark:bg-emerald-400/10',
    },
    {
      icon: Layers,
      title: 'Adaptive Dual-Theme Interface',
      desc: 'Pixel-accurate dark and light design systems with custom Poppins typography and fluid micro-animations tailored for deep work.',
      color: 'text-sky-500 bg-sky-500/10 dark:text-sky-400 dark:bg-sky-400/10',
    },
  ]

  const stats = [
    { label: 'Latency', value: '< 25ms' },
    { label: 'Context Window', value: '1M+ Tokens' },
    { label: 'Uptime Reliability', value: '99.99%' },
    { label: 'Supported Formats', value: 'Code, Text, Math' },
  ]

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-[#f8f9fa] text-neutral-900 transition-colors duration-200 dark:bg-[#050505] dark:text-white flex flex-col justify-between">
      <div className="pointer-events-none absolute left-1/2 top-[200px] h-[600px] w-full max-w-[1200px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(246,110,70,0.2)_0%,rgba(251,191,36,0.1)_40%,transparent_70%)] blur-3xl dark:bg-[radial-gradient(ellipse_at_center,rgba(246,71,31,0.45)_0%,rgba(204,48,20,0.18)_40%,transparent_70%)]" />

      <Header />

      <main className="relative z-10 mx-auto w-full max-w-6xl px-6 py-16 sm:px-12 sm:py-24 flex-1">
        <div className="mb-6 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white/80 px-4 py-1.5 text-xs font-semibold text-neutral-800 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-white/5 dark:text-white/80">
            <Sparkles className="size-3.5 text-amber-500 dark:text-amber-400" />
            <span>About Alchat</span>
          </div>
        </div>
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-neutral-900 dark:text-white leading-[1.15]">
            Pioneering the Next Era of{' '}
            <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 bg-clip-text text-transparent">
              Human-AI Synergy
            </span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-neutral-600 dark:text-white/75 leading-relaxed">
            Alchat is a state-of-the-art conversational AI workspace built to accelerate human reasoning,
            programming, writing, and creative problem solving without friction.
          </p>
        </div>
        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-neutral-200 bg-white/90 p-6 text-center shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-[#121214]/90"
            >
              <p className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white">{s.value}</p>
              <p className="mt-1 text-xs font-medium text-neutral-500 dark:text-white/50">{s.label}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 rounded-3xl border border-neutral-200 bg-white/80 p-8 sm:p-12 shadow-lg backdrop-blur-md dark:border-white/10 dark:bg-[#161619]/90">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white">Our Mission</h2>
            <p className="mt-4 text-base text-neutral-600 dark:text-white/80 leading-relaxed">
              We believe artificial intelligence should feel like an intuitive extension of human thought —
              lightning-fast, deeply contextual, aesthetic, and completely dependable.
              Whether you are architecting large-scale software systems, researching profound topics, or drafting prose,
              Alchat provides the clarity and leverage you need to do your best work.
            </p>
          </div>
        </div>
        <div className="mt-16">
          <h2 className="text-center text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white mb-10">
            Engineered for Precision & Speed
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {pillars.map((pillar) => {
              const Icon = pillar.icon
              return (
                <div
                  key={pillar.title}
                  className="rounded-2xl border border-neutral-200 bg-white p-7 shadow-sm transition-all hover:shadow-md dark:border-white/10 dark:bg-[#141416]"
                >
                  <div className={`flex size-12 items-center justify-center rounded-xl ${pillar.color} mb-5`}>
                    <Icon className="size-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">{pillar.title}</h3>
                  <p className="mt-2 text-sm text-neutral-600 dark:text-white/70 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
        <div className="mt-20 rounded-3xl bg-gradient-to-r from-amber-500 to-orange-500 p-8 sm:p-12 text-center text-black shadow-2xl shadow-amber-500/20">
          <h3 className="text-3xl font-bold sm:text-4xl text-black">Ready to Experience Alchat?</h3>
          <p className="mt-3 text-sm sm:text-base font-medium opacity-90 max-w-xl mx-auto">
            Start a conversation in seconds with Google Gemini intelligence and seamless cloud persistence.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              href="/login"
              className="flex items-center gap-2 rounded-full bg-black px-8 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-105 shadow-xl"
            >
              Get Started for Free <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
