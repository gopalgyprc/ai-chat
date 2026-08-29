'use client'

import Link from 'next/link'
import { Menu, Search, X } from 'lucide-react'
import { useState } from 'react'
import { ThemeToggle } from '@/components/ui/ThemeToggle'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="w-full border-b border-neutral-200 bg-white/80 transition-colors duration-200 dark:border-white/10 dark:bg-[#050505]/70 backdrop-blur-md">
      <header className="relative z-10 mx-auto flex h-24 w-full max-w-7xl items-center justify-between px-8 sm:px-14 lg:px-20">
        {/* Brand Logo */}
        <Link
          href="/"
          className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 transition-opacity hover:opacity-90 dark:text-white"
        >
          Alchat
        </Link>

        {/* Center Navigation Links */}
        <nav className="hidden items-center gap-10 lg:gap-14 text-[15px] sm:text-base font-medium text-neutral-600 dark:text-white/80 md:flex">
          <Link href="/about" className="transition-colors hover:text-neutral-900 dark:hover:text-white hover:scale-105">
            About Us
          </Link>
          <Link href="/blog" className="transition-colors hover:text-neutral-900 dark:hover:text-white hover:scale-105">
            Blog
          </Link>
          <Link href="/contact" className="transition-colors hover:text-neutral-900 dark:hover:text-white hover:scale-105">
            Contact
          </Link>
        </nav>

        {/* Right Actions: Search, ThemeToggle & Login */}
        <div className="hidden items-center gap-3.5 sm:flex">
          <div className="flex h-10 w-48 items-center gap-2.5 rounded-full border border-neutral-200 bg-neutral-100 px-4 text-sm text-neutral-700 shadow-inner dark:border-white/15 dark:bg-white/5 dark:text-white/65">
            <Search className="size-4 text-neutral-400 dark:text-white/50" />
            <span>Search</span>
          </div>

          <ThemeToggle variant="icon" />

          <Link
            href="/login"
            className="flex h-10 w-28 items-center justify-center rounded-full bg-neutral-900 text-sm font-semibold text-white transition-transform hover:scale-105 hover:bg-neutral-800 shadow-md dark:bg-white dark:text-black dark:hover:bg-neutral-100"
          >
            Log in
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex items-center gap-2 sm:hidden">
          <ThemeToggle variant="icon" />
          <button
            aria-label="Open menu"
            className="text-neutral-800 dark:text-white p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-white/10 cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="size-7" /> : <Menu className="size-7" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="relative z-20 flex flex-col gap-5 border-b border-neutral-200 px-8 pb-8 text-base font-medium text-neutral-800 md:hidden bg-white dark:border-white/10 dark:text-white/80 dark:bg-[#0a0a0c]">
          <Link
            href="/about"
            className="transition-colors hover:text-neutral-900 dark:hover:text-white py-1"
            onClick={() => setMenuOpen(false)}
          >
            About Us
          </Link>
          <Link
            href="/blog"
            className="transition-colors hover:text-neutral-900 dark:hover:text-white py-1"
            onClick={() => setMenuOpen(false)}
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="transition-colors hover:text-neutral-900 dark:hover:text-white py-1"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
          <Link
            href="/login"
            className="flex h-11 w-full items-center justify-center rounded-full bg-neutral-900 text-sm font-semibold text-white shadow-md mt-2 dark:bg-white dark:text-black"
            onClick={() => setMenuOpen(false)}
          >
            Log in
          </Link>
        </div>
      )}
    </div>
  )
}
