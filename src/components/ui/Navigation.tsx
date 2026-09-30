'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { ThemeToggle } from './ThemeToggle'
import { LocaleToggle } from './LocaleToggle'

export function Navigation({ locale }: { locale: string }) {
  const t = useTranslations('nav')
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // بستن منو با تغییر مسیر
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const links = [
    { href: `/${locale}`, label: t('work') },
    { href: `/${locale}/about`, label: t('about') },
    { href: `/${locale}/contact`, label: t('contact') },
  ]

  const isActive = (href: string) => {
    if (href === `/${locale}`) {
      return pathname === `/${locale}` || pathname === `/${locale}/`
    }
    return pathname.startsWith(href)
  }

  return (
    <>
      <header
        className={`safe-top fixed inset-x-0 top-0 z-50 px-5 transition-all duration-500 ${
          scrolled ? 'backdrop-blur-xl' : ''
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between py-4">
          {/* لوگو */}
          <Link
            href={`/${locale}`}
            className="group flex items-center gap-2 text-sm font-medium tracking-tight text-[var(--text-primary)]"
          >
            <motion.span
              className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--accent)]"
              whileHover={{ rotate: 90 }}
              transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M7 1 L13 7 L7 13 L1 7 Z"
                  fill="white"
                  opacity="0.9"
                />
              </svg>
            </motion.span>
            <span className="hidden sm:block">Portfolio</span>
          </Link>

          {/* دسکتاپ: منو */}
          <nav className="hidden items-center gap-1 md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? 'text-[var(--text-primary)]'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                {isActive(link.href) && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-[var(--surface-elevated)]"
                    transition={{
                      type: 'spring',
                      stiffness: 400,
                      damping: 30,
                    }}
                  />
                )}
                <span className="relative">{link.label}</span>
              </Link>
            ))}
          </nav>

          {/* دکمه‌ها */}
          <div className="flex items-center gap-2">
            <LocaleToggle />
            <ThemeToggle />

            {/* موبایل: دکمه‌ی منو */}
            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              onClick={() => setIsOpen((o) => !o)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border-subtle)] bg-[var(--surface-elevated)] text-[var(--text-primary)] transition-colors hover:bg-[var(--surface-overlay)] md:hidden"
            >
              <motion.div
                animate={{ rotate: isOpen ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M3 3 L13 13 M13 3 L3 13"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M2 5 L14 5 M2 11 L14 11"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                )}
              </motion.div>
            </button>
          </div>
        </div>
      </header>

      {/* موبایل: منوی تمام صفحه */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-[var(--surface-base)] backdrop-blur-xl md:hidden"
          >
            <nav className="flex flex-col items-center gap-8">
              {links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.1 + i * 0.08,
                    duration: 0.5,
                    ease: [0.32, 0.72, 0, 1],
                  }}
                >
                  <Link
                    href={link.href}
                    className={`text-3xl font-bold tracking-tight transition-colors ${
                      isActive(link.href)
                        ? 'text-[var(--accent)]'
                        : 'text-[var(--text-primary)]'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}