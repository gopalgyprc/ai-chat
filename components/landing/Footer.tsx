import Link from 'next/link'
import { GraduationCap, ExternalLink } from 'lucide-react'

export function Footer() {
  return (
    <footer className="w-full border-t border-neutral-200 bg-white dark:border-neutral-800 dark:bg-[#09090b] py-12 px-4 sm:px-8 lg:px-12 transition-colors duration-200">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 sm:flex-row">
        {/* Brand */}
        <div className="flex items-center gap-2.5">
          <div className="flex size-7 items-center justify-center rounded-lg bg-amber-500 text-black shadow-xs">
            <GraduationCap className="size-4" />
          </div>
          <span className="text-base font-bold text-neutral-900 dark:text-white">
            Indiana Tech Virtual Assistant
          </span>
        </div>

        {/* Links */}
        <nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-neutral-600 dark:text-neutral-400">
          <a
            href="https://www.indianatech.edu"
            target="_blank"
            rel="noreferrer"
            className="hover:text-neutral-900 dark:hover:text-white transition-colors inline-flex items-center gap-1 text-amber-600 dark:text-amber-400 font-medium"
          >
            <span>indianatech.edu</span>
            <ExternalLink className="size-3" />
          </a>
          <a
            href="https://www.indianatech.edu/apply"
            target="_blank"
            rel="noreferrer"
            className="hover:text-neutral-900 dark:hover:text-white transition-colors"
          >
            Apply Online (Free)
          </a>
          <Link href="/about" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
            About
          </Link>
          <Link href="/contact" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
            Contact
          </Link>
          <Link href="/chat" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
            Chat Assistant
          </Link>
        </nav>

        {/* Copyright */}
        <p className="text-xs text-neutral-500 dark:text-neutral-500 text-center sm:text-right">
          © 2026 Indiana Tech Virtual Assistant. Information sourced from indianatech.edu.
        </p>
      </div>
    </footer>
  )
}
