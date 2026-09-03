'use client'

import Link from 'next/link'
import { Menu, GraduationCap, X, ExternalLink } from 'lucide-react'
import { useState } from 'react'
import { ThemeToggle } from '@/components/ui/ThemeToggle'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/90 backdrop-blur-md transition-colors duration-200 dark:border-white/10 dark:bg-[#09090b]/90">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-8 lg:px-12">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 text-base sm:text-lg font-bold tracking-tight text-neutral-900 transition-opacity hover:opacity-90 dark:text-white"
        >
          <div className="flex size-8 items-center justify-center rounded-lg bg-amber-500 text-black shadow-xs">
            <GraduationCap className="size-5" />
          </div>
          <div className="flex flex-col">
            <span className="leading-tight">Indiana Tech</span>
            <span className="text-[10px] font-semibold text-amber-600 dark:text-amber-400 tracking-normal">
              Virtual Assistant
            </span>
          </div>
        </Link>

        {/* Center Navigation Links */}
        <nav className="hidden items-center gap-7 text-sm font-medium text-neutral-600 dark:text-white/70 md:flex">
          <a
            href="#features"
            className="transition-colors hover:text-neutral-900 dark:hover:text-white"
          >
            Academics
          </a>
          <a
            href="#how-it-works"
            className="transition-colors hover:text-neutral-900 dark:hover:text-white"
          >
            How it works
          </a>
          <a
            href="#showcase"
            className="transition-colors hover:text-neutral-900 dark:hover:text-white"
          >
            Inquiries
          </a>
          <a
            href="#faq"
            className="transition-colors hover:text-neutral-900 dark:hover:text-white"
          >
            FAQ
          </a>
          <a
            href="https://www.indianatech.edu"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-amber-600 dark:text-amber-400 hover:underline"
          >
            <span>indianatech.edu</span>
            <ExternalLink className="size-3" />
          </a>
        </nav>

        {/* Right Actions */}
        <div className="hidden items-center gap-3 sm:flex">
          <ThemeToggle variant="icon" />

          <Link
            href="/login"
            className="px-3.5 py-1.5 text-sm font-medium text-neutral-700 transition-colors hover:text-neutral-900 dark:text-white/80 dark:hover:text-white"
          >
            Log in
          </Link>

          <Link
            href="/chat"
            className="rounded-lg bg-neutral-900 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-neutral-800 dark:bg-amber-400 dark:text-black dark:hover:bg-amber-300 shadow-xs"
          >
            Ask Assistant
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 sm:hidden">
          <ThemeToggle variant="icon" />
          <button
            aria-label="Toggle navigation menu"
            className="p-1.5 text-neutral-700 hover:bg-neutral-100 dark:text-white/80 dark:hover:bg-white/10 rounded-md cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="border-b border-neutral-200 bg-white px-5 py-4 text-sm font-medium text-neutral-800 dark:border-white/10 dark:bg-[#09090b] dark:text-white/80 md:hidden space-y-3">
          <a
            href="#features"
            className="block py-1 hover:text-neutral-900 dark:hover:text-white"
            onClick={() => setMenuOpen(false)}
          >
            Academics
          </a>
          <a
            href="#how-it-works"
            className="block py-1 hover:text-neutral-900 dark:hover:text-white"
            onClick={() => setMenuOpen(false)}
          >
            How it works
          </a>
          <a
            href="#showcase"
            className="block py-1 hover:text-neutral-900 dark:hover:text-white"
            onClick={() => setMenuOpen(false)}
          >
            Inquiries
          </a>
          <a
            href="#faq"
            className="block py-1 hover:text-neutral-900 dark:hover:text-white"
            onClick={() => setMenuOpen(false)}
          >
            FAQ
          </a>
          <a
            href="https://www.indianatech.edu"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 py-1 text-amber-600 dark:text-amber-400"
          >
            <span>Visit indianatech.edu</span>
            <ExternalLink className="size-3.5" />
          </a>
          <div className="pt-2 border-t border-neutral-200 dark:border-white/10 flex flex-col gap-2">
            <Link
              href="/login"
              className="w-full text-center py-2 text-sm font-medium rounded-lg border border-neutral-200 dark:border-white/10"
              onClick={() => setMenuOpen(false)}
            >
              Log in
            </Link>
            <Link
              href="/chat"
              className="w-full text-center py-2 text-sm font-semibold rounded-lg bg-neutral-900 text-white dark:bg-amber-400 dark:text-black"
              onClick={() => setMenuOpen(false)}
            >
              Ask Assistant
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
