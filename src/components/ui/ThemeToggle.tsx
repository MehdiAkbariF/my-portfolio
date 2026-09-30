'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="h-11 w-11 rounded-full border border-[var(--border-subtle)]" />
    )
  }

  const isDark =
    theme === 'dark' || (theme === 'system' && resolvedTheme === 'dark')

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="h-11 w-11 rounded-full border border-[var(--border-subtle)] bg-[var(--surface-elevated)] text-[var(--text-primary)] transition-colors duration-200 hover:bg-[var(--surface-overlay)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2"
    >
      {isDark ? '☀' : '☾'}
    </button>
  )
}