'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Header } from '@/components/landing/Header'
import { Footer } from '@/components/landing/Footer'
import {
  Sparkles,
  Calendar,
  Clock,
  ArrowRight,
  BookOpen,
  Tag,
  Search,
} from 'lucide-react'

const articles = [
  {
    id: 1,
    title: 'Harnessing Google Gemini 3.6 for Real-Time Coding & Reasoning',
    excerpt:
      'Explore how multimodal token streaming and 1M+ token context windows are changing how engineers write, debug, and ship software.',
    category: 'Engineering',
    date: 'Aug 28, 2026',
    readTime: '5 min read',
    author: 'Alex Rivera',
    featured: true,
  },
  {
    id: 2,
    title: 'Building Zero-Latency Local-First AI Workspaces',
    excerpt:
      'How combining synchronous client storage with asynchronous Firestore background synchronizers creates an instant, offline-resilient UX.',
    category: 'Architecture',
    date: 'Aug 24, 2026',
    readTime: '7 min read',
    author: 'Elena Rostova',
    featured: false,
  },
  {
    id: 3,
    title: 'Design Systems for Dual-Mode Dark & Light AI Interfaces',
    excerpt:
      'A deep dive into contrast ratios, custom typography hierarchies, and micro-interactions for modern web applications.',
    category: 'Design',
    date: 'Aug 19, 2026',
    readTime: '4 min read',
    author: 'Marcus Vance',
    featured: false,
  },
  {
    id: 4,
    title: 'Mastering Multi-Turn Prompts: Crafting Effective Context Chains',
    excerpt:
      'Proven prompt templates and system instruction frameworks to extract precise, structured outputs from frontier generative models.',
    category: 'AI Research',
    date: 'Aug 15, 2026',
    readTime: '6 min read',
    author: 'Dr. Sarah Chen',
    featured: false,
  },
  {
    id: 5,
    title: 'The Next Wave of Multimodal AI: Beyond Text and Speech',
    excerpt:
      'From dynamic SVG rendering to real-time interactive canvases, what the future holds for human-AI creative collaboration.',
    category: 'Product',
    date: 'Aug 10, 2026',
    readTime: '5 min read',
    author: 'Alex Rivera',
    featured: false,
  },
  {
    id: 6,
    title: 'Secure Authentication & Realtime State Persistence with Firebase',
    excerpt:
      'Best practices for securing user conversation metadata and handling offline network degradation gracefully in React 19.',
    category: 'Engineering',
    date: 'Aug 04, 2026',
    readTime: '8 min read',
    author: 'Elena Rostova',
    featured: false,
  },
]

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const categories = ['All', 'Engineering', 'Architecture', 'Design', 'AI Research', 'Product']

  const filteredArticles = articles.filter((art) => {
    const matchesCategory = selectedCategory === 'All' || art.category === selectedCategory
    const matchesSearch =
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const featuredArticle = articles.find((a) => a.featured)

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-[#f8f9fa] text-neutral-900 transition-colors duration-200 dark:bg-[#050505] dark:text-white flex flex-col justify-between">
      {/* Background ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-[220px] h-[600px] w-full max-w-[1200px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(246,110,70,0.2)_0%,rgba(251,191,36,0.1)_40%,transparent_70%)] blur-3xl dark:bg-[radial-gradient(ellipse_at_center,rgba(246,71,31,0.45)_0%,rgba(204,48,20,0.18)_40%,transparent_70%)]" />

      <Header />

      <main className="relative z-10 mx-auto w-full max-w-6xl px-6 py-16 sm:px-12 sm:py-24 flex-1">
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white/80 px-4 py-1.5 text-xs font-semibold text-neutral-800 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-white/5 dark:text-white/80">
            <BookOpen className="size-3.5 text-amber-500 dark:text-amber-400" />
            <span>Alchat Insights</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-neutral-900 dark:text-white leading-[1.15]">
            Engineering, Research &{' '}
            <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
              AI Innovations
            </span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 dark:text-white/75">
            Deep dives into artificial intelligence, software architecture, UI design, and generative workflows.
          </p>
        </div>

        {/* Featured Article Card */}
        {featuredArticle && selectedCategory === 'All' && !searchQuery && (
          <div className="mt-14 rounded-3xl border border-neutral-200 bg-white p-8 sm:p-10 shadow-lg dark:border-white/10 dark:bg-[#141416] transition-all hover:border-amber-500/50">
            <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-500 dark:text-white/50 mb-3">
              <span className="rounded-full bg-amber-500/10 px-3 py-1 font-semibold text-amber-600 dark:text-amber-400">
                Featured
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="size-3" /> {featuredArticle.date}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="size-3" /> {featuredArticle.readTime}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white hover:text-amber-500 transition-colors">
              {featuredArticle.title}
            </h2>
            <p className="mt-4 text-base text-neutral-600 dark:text-white/75 leading-relaxed">
              {featuredArticle.excerpt}
            </p>
            <div className="mt-6 flex items-center justify-between">
              <span className="text-xs font-medium text-neutral-500 dark:text-white/50">
                By {featuredArticle.author}
              </span>
              <Link
                href="/login"
                className="flex items-center gap-2 text-sm font-semibold text-amber-600 dark:text-amber-400 hover:underline"
              >
                Read Article <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        )}

        {/* Filter and Search Bar */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-neutral-200 dark:border-white/10 pb-6">
          {/* Category Chips */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-neutral-900 text-white dark:bg-white dark:text-black shadow-sm font-semibold'
                    : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200 dark:bg-white/5 dark:text-white/70 dark:hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="flex w-full sm:w-64 items-center gap-2.5 rounded-full border border-neutral-200 bg-white px-4 py-2 text-xs text-neutral-800 shadow-sm dark:border-white/10 dark:bg-[#141416] dark:text-white">
            <Search className="size-3.5 text-neutral-400 dark:text-white/50" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent outline-none placeholder-neutral-400 dark:placeholder-white/40"
            />
          </div>
        </div>

        {/* Articles Grid */}
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredArticles.map((art) => (
            <article
              key={art.id}
              className="flex flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-[#141416]"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-neutral-500 dark:text-white/50 mb-3">
                  <span className="rounded-full bg-neutral-100 px-2.5 py-0.5 font-medium text-neutral-700 dark:bg-white/5 dark:text-white/70">
                    {art.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="size-3" /> {art.readTime}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-neutral-900 dark:text-white line-clamp-2 hover:text-amber-500 transition-colors">
                  {art.title}
                </h3>
                <p className="mt-2.5 text-xs text-neutral-600 dark:text-white/70 line-clamp-3 leading-relaxed">
                  {art.excerpt}
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-neutral-100 dark:border-white/5 pt-4 text-xs">
                <span className="text-neutral-400 dark:text-white/40">{art.date}</span>
                <Link
                  href="/login"
                  className="flex items-center gap-1 font-semibold text-amber-600 dark:text-amber-400 hover:underline"
                >
                  Read <ArrowRight className="size-3" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="py-16 text-center text-sm text-neutral-500 dark:text-white/50">
            No articles found matching your criteria. Try another search term!
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}
