'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { MagneticButton } from '../ui/MagneticButton'

export type Project = {
  id: string
  name: string
  nameFa: string
  role: string
  roleFa: string
  description: string
  descriptionFa: string
  url: string
  tags: string[]
}

type ProjectCardProps = {
  project: Project | null
  onClose: () => void
}

export function ProjectCard({ project, onClose }: ProjectCardProps) {
  const t = useTranslations('common')

  return (
    <AnimatePresence mode="wait">
      {project && (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 60 }}
          transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
          className="fixed inset-x-4 bottom-6 z-40 mx-auto max-w-lg rounded-3xl border border-[var(--border-subtle)] bg-[var(--surface-elevated)] p-6 shadow-2xl backdrop-blur-xl sm:inset-x-auto"
        >
          <div className="mb-4 flex items-start justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold leading-tight text-[var(--text-primary)]">
                {project.name}
              </h3>
              <p className="mt-1 text-xs text-[var(--text-tertiary)]">
                {project.nameFa}
              </p>
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label={t('close')}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--border-subtle)] text-[var(--text-secondary)] transition-colors hover:bg-[var(--surface-overlay)] hover:text-[var(--text-primary)]"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M2 2 L12 12 M12 2 L2 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          <p className="text-sm leading-[1.9] text-[var(--text-secondary)]">
            {project.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[var(--border-subtle)] bg-[var(--surface-overlay)] px-3 py-1 text-[10px] font-medium text-[var(--text-secondary)]"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* دکمه‌ی مگنتی */}
          <MagneticButton
            as="a"
            href={project.url}
            strength={0.15}
            className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-[var(--accent)] px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-[var(--accent-hover)]"
          >
            {t('viewProject')}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M3 11 L11 3 M6 3 L11 3 L11 8"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </MagneticButton>
        </motion.div>
      )}
    </AnimatePresence>
  )
}