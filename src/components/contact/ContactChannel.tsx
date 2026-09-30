'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

type ContactChannelProps = {
  label: string
  value: string
  href: string
  icon: React.ReactNode
  index: number
  direction?: 'left' | 'right'
}

export function ContactChannel({
  label,
  value,
  href,
  icon,
  index,
  direction = 'left',
}: ContactChannelProps) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      initial={{ opacity: 0, x: direction === 'left' ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.32, 0.72, 0, 1],
      }}
      className="group relative flex items-center gap-5 border-b border-[var(--border-subtle)] py-7 transition-colors hover:border-[var(--accent)]"
    >
      {/* خط کشیده‌شونده زیر */}
      <motion.div
        className="absolute bottom-0 left-0 h-px bg-[var(--accent)]"
        initial={{ width: 0 }}
        animate={{ width: hovered ? '100%' : 0 }}
        transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
      />

      {/* آیکون با هاله */}
      <motion.div
        animate={{
          scale: hovered ? 1.1 : 1,
          rotate: hovered ? 6 : 0,
        }}
        transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
        className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface-elevated)] text-[var(--text-secondary)] transition-colors group-hover:border-[var(--accent)] group-hover:text-[var(--accent)]"
      >
        {/* هاله‌ی نور */}
        <motion.div
          className="absolute inset-0 rounded-2xl bg-[var(--accent)]"
          animate={{ opacity: hovered ? 0.12 : 0 }}
          transition={{ duration: 0.3 }}
        />
        <div className="relative">{icon}</div>
      </motion.div>

      {/* متن */}
      <div className="flex flex-1 flex-col gap-1">
        <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-[var(--text-tertiary)]">
          {label}
        </span>
        <motion.span
          animate={{ x: hovered ? 6 : 0 }}
          transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
          className="text-base font-semibold tracking-tight text-[var(--text-primary)]"
        >
          {value}
        </motion.span>
      </div>

      {/* فلش */}
      <motion.div
        animate={{
          x: hovered ? 6 : 0,
          opacity: hovered ? 1 : 0.4,
        }}
        transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
        className="shrink-0 text-[var(--text-tertiary)] transition-colors group-hover:text-[var(--accent)]"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M5 12 L19 12 M13 6 L19 12 L13 18"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>
    </motion.a>
  )
}