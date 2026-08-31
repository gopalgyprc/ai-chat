import React from 'react'
import { Sparkles, Star, Quote } from 'lucide-react'

export function Testimonials() {
  const reviews = [
    {
      name: 'Sarah Jenkins',
      role: 'Staff Frontend Engineer at Veloce',
      avatar: 'S',
      color: 'from-amber-400 to-orange-500',
      comment:
        'The streaming speed on Alchat is unmatched. Having conversational memory that retains my entire state management context across multiple questions has saved me hours of daily debugging.',
      rating: 5,
    },
    {
      name: 'Dr. Arthur Campbell',
      role: 'AI Researcher & Data Scientist',
      avatar: 'A',
      color: 'from-blue-400 to-indigo-500',
      comment:
        'Alchat strikes the ideal balance between raw Gemini 3.6 reasoning power and a refined, distraction-free workspace. The dual-mode theme support with Poppins typography is gorgeous.',
      rating: 5,
    },
    {
      name: 'Elena Ramos',
      role: 'Product Designer & Content Strategist',
      avatar: 'E',
      color: 'from-emerald-400 to-teal-500',
      comment:
        'From drafting product copy to creating multi-lingual campaign translations in seconds, Alchat has become the single most valuable productivity tool in my creative stack.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Full-Stack Founder',
      avatar: 'M',
      color: 'from-purple-400 to-pink-500',
      comment:
        'Local-first persistence means I never lose my thoughts even on spotty flight WiFi. When connection restores, it seamlessly syncs to my Firebase account. Simply brilliant.',
      rating: 5,
    },
    {
      name: 'Priya Sharma',
      role: 'Senior DevOps Architect',
      avatar: 'P',
      color: 'from-rose-400 to-red-500',
      comment:
        'The ability to quickly ask for complex Kubernetes manifests or Terraform scripts and have formatted, copy-ready blocks output instantly is game-changing for our operations.',
      rating: 5,
    },
    {
      name: 'David Lindqvist',
      role: 'Software Consultant',
      avatar: 'D',
      color: 'from-yellow-400 to-amber-500',
      comment:
        'Clean UI, zero clutter, instant Google authentication, and lightning-fast responses. Exactly how a 2026 AI application should look and feel.',
      rating: 5,
    },
  ]

  return (
    <section className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20 sm:px-12 sm:py-28">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white/80 px-4 py-1.5 text-xs font-semibold text-neutral-800 shadow-xs backdrop-blur-md dark:border-white/10 dark:bg-white/5 dark:text-white/80">
          <Sparkles className="size-3.5 text-amber-500 dark:text-amber-400" />
          <span>User Feedback</span>
        </div>
        <h2 className="text-3xl font-bold tracking-tight sm:text-5xl text-neutral-900 dark:text-white leading-tight">
          Loved by Builders,{' '}
          <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
            Engineers & Creators
          </span>
        </h2>
        <p className="mt-4 text-base sm:text-lg text-neutral-600 dark:text-white/70 leading-relaxed">
          See why thousands of developers and teams rely on Alchat every single day.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {reviews.map((r) => (
          <div
            key={r.name}
            className="flex flex-col justify-between rounded-3xl border border-neutral-200 bg-white/80 p-8 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/50 hover:shadow-xl dark:border-white/10 dark:bg-[#141416]/80"
          >
            <div>
              {/* Stars */}
              <div className="flex items-center gap-1 text-amber-400 mb-4">
                {[...Array(r.rating)].map((_, i) => (
                  <Star key={i} className="size-4 fill-amber-400" />
                ))}
              </div>

              {/* Quote text */}
              <p className="text-sm text-neutral-700 dark:text-white/80 leading-relaxed italic">
                &ldquo;{r.comment}&rdquo;
              </p>
            </div>

            {/* Author details */}
            <div className="mt-8 flex items-center gap-3.5 border-t border-neutral-100 dark:border-white/5 pt-4">
              <div
                className={`flex size-10 items-center justify-center rounded-full bg-gradient-to-tr ${r.color} text-xs font-bold text-white shadow-md`}
              >
                {r.avatar}
              </div>
              <div>
                <p className="text-sm font-bold text-neutral-900 dark:text-white">{r.name}</p>
                <p className="text-xs text-neutral-500 dark:text-white/50">{r.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
