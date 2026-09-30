'use client'

import { motion } from 'framer-motion'

type ProjectId = 'yadakiran' | 'yadakchi' | 'seller' | 'spatijob' | 'liftaland'

type ProjectIconProps = {
  id: ProjectId
  label: string
  isActive: boolean
  isDimmed: boolean
  onSelect: (id: string) => void
}

// ─── SVG Icons ───

function IconYadakiran() {
  return (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
      <path d="M26 6 L46 17 L26 28 L6 17 Z" fill="var(--accent)" opacity="0.15" />
      <path
        d="M16 26 L24 26 L24 36 C24 38.5 21.5 40.5 19 40.5 C16.5 40.5 14 38.5 14 36 L14 30 Z"
        fill="var(--accent)"
        opacity="0.85"
      />
      <circle cx="19" cy="36" r="3" fill="var(--surface-base)" />
      <circle cx="36" cy="26" r="7" fill="var(--accent)" opacity="0.7" />
      <path
        d="M33 23 L39 29 M33 29 L39 23"
        stroke="var(--surface-base)"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  )
}

function IconYadakchi() {
  return (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
      <path d="M26 4 L48 17 L26 30 L4 17 Z" fill="var(--accent)" opacity="0.9" />
      <path d="M4 17 L26 30 L26 48 L4 35 Z" fill="var(--accent)" opacity="0.55" />
      <path d="M48 17 L48 35 L26 48 L26 30 Z" fill="var(--accent)" opacity="0.35" />
      <path d="M26 4 L26 30" stroke="var(--surface-base)" strokeWidth="1.2" opacity="0.6" />
    </svg>
  )
}

function IconSeller() {
  return (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
      <path d="M21 42 L31 42 L29 46 L23 46 Z" fill="var(--accent)" opacity="0.6" />
      <rect x="19" y="44" width="14" height="2" rx="1" fill="var(--accent)" opacity="0.8" />
      <rect x="6" y="8" width="40" height="30" rx="3" fill="var(--accent)" opacity="0.85" />
      <path
        d="M13 32 L20 24 L26 28 L34 18 L40 22"
        stroke="var(--surface-base)"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <circle cx="40" cy="22" r="2.5" fill="var(--surface-base)" />
    </svg>
  )
}

function IconSpotiJob() {
  return (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
      <path
        d="M20 6 C26 6 31 11 31 17 C31 25 20 40 20 40 C20 40 9 25 9 17 C9 11 14 6 20 6 Z"
        fill="var(--accent)"
        opacity="0.9"
      />
      <circle cx="20" cy="17" r="4.5" fill="var(--surface-base)" />
      <circle cx="36" cy="32" r="7" stroke="var(--accent)" strokeWidth="2.2" fill="none" opacity="0.7" />
      <path d="M41 37 L46 42" stroke="var(--accent)" strokeWidth="2.8" strokeLinecap="round" />
    </svg>
  )
}

function IconLiftaland() {
  return (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
      <rect
        x="12"
        y="10"
        width="28"
        height="34"
        rx="2"
        fill="var(--accent)"
        opacity="0.25"
        stroke="var(--accent)"
        strokeWidth="2"
      />
      <line x1="26" y1="12" x2="26" y2="42" stroke="var(--accent)" strokeWidth="1.8" />
      <path
        d="M26 18 L26 30 M21 23 L26 18 L31 23"
        stroke="var(--accent)"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  )
}

const iconMap: Record<ProjectId, () => React.ReactElement> = {
  yadakiran: IconYadakiran,
  yadakchi: IconYadakchi,
  seller: IconSeller,
  spatijob: IconSpotiJob,
  liftaland: IconLiftaland,
}

// ─── کامپوننت ───

export function ProjectIcon({
  id,
  label,
  isActive,
  isDimmed,
  onSelect,
}: ProjectIconProps) {
  const IconComponent = iconMap[id]

  return (
    <div className="relative flex flex-col items-center gap-3">
      <motion.button
        type="button"
        aria-label={label}
        aria-pressed={isActive}
        onClick={() => onSelect(id)}
        animate={{
          scale: isActive ? 1.25 : 1,
          opacity: isDimmed ? 0.2 : 1,
        }}
        transition={{
          duration: 0.5,
          ease: [0.32, 0.72, 0, 1],
        }}
        whileTap={{ scale: 0.94 }}
        whileHover={{ scale: isActive ? 1.25 : 1.08 }}
        className="group relative flex h-24 w-24 items-center justify-center rounded-3xl border border-[var(--border-subtle)] bg-[var(--surface-elevated)] shadow-[0_8px_32px_-12px_rgba(0,0,0,0.3)] transition-colors duration-300 hover:border-[var(--accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-4"
      >
        {/* هاله‌ی فعال */}
        {isActive && (
          <>
            <motion.div
              layoutId="active-glow"
              className="absolute inset-0 rounded-3xl bg-[var(--accent)] opacity-15"
              transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
            />
            {/* حلقه‌ی نبضی */}
            <motion.div
              className="absolute inset-0 rounded-3xl border-2 border-[var(--accent)]"
              initial={{ scale: 1, opacity: 0.6 }}
              animate={{ scale: 1.35, opacity: 0 }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'easeOut' }}
            />
          </>
        )}

        <div className="relative">
          <IconComponent />
        </div>
      </motion.button>

      <span
        className={`text-[10px] font-medium tracking-tight whitespace-nowrap transition-colors duration-300 ${
          isActive
            ? 'text-[var(--accent)]'
            : 'text-[var(--text-tertiary)] group-hover:text-[var(--text-secondary)]'
        }`}
      >
        {label}
      </span>
    </div>
  )
}