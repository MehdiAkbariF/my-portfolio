'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

type ContactLinkProps = {
  label: string
  value: string
  href: string
  icon: React.ReactNode
}

export function ContactLink({ label, value, href, icon }: ContactLinkProps) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ x: 8 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="group flex items-center justify-between gap-4 border-b border-[var(--border-subtle)] py-6 transition-colors hover:border-[var(--accent)]"
    >
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[var(--border-subtle)] bg-[var(--surface-elevated)] text-[var(--text-secondary)] transition-colors group-hover:border-[var(--accent)] group-hover:text-[var(--accent)]">
          {icon}
        </div>
        <div>
          <p className="text-xs uppercase tracking-wider text-[var(--text-tertiary)]">
            {label}
          </p>
          <p className="mt-1 text-base font-medium text-[var(--text-primary)]">
            {value}
          </p>
        </div>
      </div>

      <motion.svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        animate={{ x: hovered ? 4 : 0 }}
        className="shrink-0 text-[var(--text-tertiary)] transition-colors group-hover:text-[var(--accent)]"
      >
        <path
          d="M4 16 L16 4 M8 4 L16 4 L16 12"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.svg>
    </motion.a>
  )
}