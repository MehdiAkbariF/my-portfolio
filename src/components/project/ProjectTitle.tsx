'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ScrambleText } from '../ui/ScrambleText'

type ProjectTitleProps = {
  name: string | null
  nameFa: string | null
}

export function ProjectTitle({ name, nameFa }: ProjectTitleProps) {
  return (
    <div className="pointer-events-none relative flex h-16 items-center justify-center">
      <AnimatePresence mode="wait">
        {name && (
          <motion.div
            key={name}
            initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -20, filter: 'blur(8px)' }}
            transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
            className="absolute inset-0 flex flex-col items-center justify-center gap-1"
          >
            <h2 className="text-3xl font-bold tracking-tight text-[var(--text-primary)] md:text-4xl">
              <ScrambleText text={name} duration={600} />
            </h2>
            {nameFa && (
              <p className="text-sm text-[var(--text-tertiary)]">{nameFa}</p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}