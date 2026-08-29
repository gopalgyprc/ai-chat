import Link from 'next/link'
import { Sparkles, Heart } from 'lucide-react'

export function Footer() {
  return (
    <footer className="w-full border-t border-neutral-200 bg-white/60 dark:border-white/10 dark:bg-[#08080a] py-12 px-6 sm:px-14 lg:px-20 transition-colors duration-200">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="flex size-8 items-center justify-center rounded-xl bg-[#fbbf24] text-black shadow-md shadow-amber-500/20">
            <Sparkles className="size-4 fill-black" />
          </div>
          <span className="text-xl font-bold tracking-tight text-neutral-900 dark:text-white">Alchat</span>
        </div>

        <div className="flex items-center gap-8 text-sm text-neutral-600 dark:text-white/70">
          <Link href="/about" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
            About Us
          </Link>
          <Link href="/blog" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
            Blog
          </Link>
          <Link href="/contact" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
            Contact
          </Link>
          <Link href="/login" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
            Sign In
          </Link>
        </div>

        <p className="text-xs text-neutral-500 dark:text-white/45 flex items-center gap-1.5">
          <span>Copyright © 2026 Alchat Inc. All rights reserved.</span>
        </p>
      </div>
    </footer>
  )
}
