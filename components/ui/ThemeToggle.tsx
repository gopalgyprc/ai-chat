'use client'

import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

interface ThemeToggleProps {
  variant?: 'icon' | 'full'
  className?: string
}

export function ThemeToggle({ variant = 'full', className = '' }: ThemeToggleProps) {
  const [isDark, setIsDark] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const stored = localStorage.getItem('alchat_theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const darkMode = stored ? stored === 'dark' : prefersDark

    setIsDark(darkMode)
    if (darkMode) {
      document.documentElement.classList.add('dark')
      document.documentElement.classList.remove('light')
    } else {
      document.documentElement.classList.remove('dark')
      document.documentElement.classList.add('light')
    }
  }, [])

  const toggleTheme = () => {
    const nextDark = !isDark
    setIsDark(nextDark)
    if (nextDark) {
      document.documentElement.classList.add('dark')
      document.documentElement.classList.remove('light')
      localStorage.setItem('alchat_theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      document.documentElement.classList.add('light')
      localStorage.setItem('alchat_theme', 'light')
    }
  }

  if (!mounted) {
    return (
      <div className="size-9 rounded-xl border border-white/10 bg-white/5 opacity-50" />
    )
  }

  if (variant === 'icon') {
    return (
      <button
        onClick={toggleTheme}
        aria-label="Toggle dark/light theme"
        title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        className={`flex size-9 items-center justify-center rounded-xl border border-neutral-300 bg-neutral-100 text-neutral-700 transition-all hover:bg-neutral-200 hover:scale-105 active:scale-95 dark:border-white/10 dark:bg-white/5 dark:text-white/80 dark:hover:bg-white/10 dark:hover:text-white cursor-pointer ${className}`}
      >
        {isDark ? (
          <Sun className="size-4 text-amber-400 transition-transform duration-300 hover:rotate-45" />
        ) : (
          <Moon className="size-4 text-indigo-500 transition-transform duration-300 hover:-rotate-12" />
        )}
      </button>
    )
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle dark/light theme"
      className={`flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-xs font-medium text-neutral-700 transition-colors hover:bg-neutral-100 dark:text-white/80 dark:hover:bg-white/10 dark:hover:text-white cursor-pointer ${className}`}
    >
      {isDark ? (
        <>
          <Sun className="size-4 text-amber-400" />
          <span>Light Mode</span>
        </>
      ) : (
        <>
          <Moon className="size-4 text-indigo-500" />
          <span>Dark Mode</span>
        </>
      )}
    </button>
  )
}
