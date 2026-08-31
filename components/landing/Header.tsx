'use client'

import Link from 'next/link'
import { Menu, Sparkle, X } from 'lucide-react'
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
          className="flex items-center gap-2 text-lg font-bold tracking-tight text-neutral-900 transition-opacity hover:opacity-90 dark:text-white"
        >
          <div className="flex size-7 items-center justify-center rounded-lg bg-amber-500 text-black">
            <Sparkle className="size-4 fill-black" />
          </div>
          <span>AIchat</span>
        </Link>

        {/* Center Navigation Links */}
        <nav className="hidden items-center gap-8 text-sm font-medium text-neutral-600 dark:text-white/70 md:flex">
          <a
            href="#features"
            className="transition-colors hover:text-neutral-900 dark:hover:text-white"
          >
            Features
          </a>
          <a
            href="#how-it-works"
            className="transition-colors hover:text-neutral-900 dark:hover:text-white"
          >
            How it works
          </a>
          <a
            href="#why-aichat"
            className="transition-colors hover:text-neutral-900 dark:hover:text-white"
          >
            Why AIchat
          </a>
          <Link
            href="/about"
            className="transition-colors hover:text-neutral-900 dark:hover:text-white"
          >
            About
          </Link>
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
            className="rounded-lg bg-neutral-900 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200 shadow-xs"
          >
            Get started
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
            Features
          </a>
          <a
            href="#how-it-works"
            className="block py-1 hover:text-neutral-900 dark:hover:text-white"
            onClick={() => setMenuOpen(false)}
          >
            How it works
          </a>
          <a
            href="#why-aichat"
            className="block py-1 hover:text-neutral-900 dark:hover:text-white"
            onClick={() => setMenuOpen(false)}
          >
            Why AIchat
          </a>
          <Link
            href="/about"
            className="block py-1 hover:text-neutral-900 dark:hover:text-white"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
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
              className="w-full text-center py-2 text-sm font-semibold rounded-lg bg-neutral-900 text-white dark:bg-white dark:text-black"
              onClick={() => setMenuOpen(false)}
            >
              Get started
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
