import Link from 'next/link'
import { Sparkle } from 'lucide-react'

export function Footer() {
  return (
    <footer className="w-full border-t border-neutral-200 bg-white dark:border-neutral-800 dark:bg-[#09090b] py-12 px-4 sm:px-8 lg:px-12 transition-colors duration-200">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 sm:flex-row">
        {/* Brand */}
        <div className="flex items-center gap-2">
          <div className="flex size-6 items-center justify-center rounded-md bg-amber-500 text-black">
            <Sparkle className="size-3.5 fill-black" />
          </div>
          <span className="text-base font-bold text-neutral-900 dark:text-white">AIchat</span>
        </div>

        {/* Links */}
        <nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-neutral-600 dark:text-neutral-400">
          <Link href="/about" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
            About
          </Link>
          <Link href="/blog" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
            Blog
          </Link>
          <Link href="/contact" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
            Contact
          </Link>
          <Link href="/login" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
            Log in
          </Link>
          <Link href="/chat" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
            Workspace
          </Link>
        </nav>

        {/* Copyright */}
        <p className="text-xs text-neutral-500 dark:text-neutral-500">
          © 2026 AIchat. Built for everyday work.
        </p>
      </div>
    </footer>
  )
}
