'use client'

import { useLocale } from 'next-intl'
import { usePathname, useRouter } from 'next/navigation'
import { useTransition } from 'react'

export function LocaleToggle() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const [isPending, startTransition] = useTransition()

  const nextLocale = locale === 'fa' ? 'en' : 'fa'

  const handleSwitch = () => {
    startTransition(() => {
      const segments = pathname.split('/')
      segments[1] = nextLocale
      router.replace(segments.join('/') || `/${nextLocale}`)
    })
  }

  return (
    <button
      type="button"
      aria-label="Switch language"
      disabled={isPending}
      onClick={handleSwitch}
      className="h-11 rounded-full border border-[var(--border-subtle)] bg-[var(--surface-elevated)] px-4 text-sm font-medium text-[var(--text-primary)] transition-colors duration-200 hover:bg-[var(--surface-overlay)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2 disabled:opacity-50"
    >
      {locale === 'fa' ? 'EN' : 'فا'}
    </button>
  )
}