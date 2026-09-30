'use client'

import { motion } from 'framer-motion'

export function HeroText({ tagline, hint }: { tagline: string; hint: string }) {
  return (
    <div className="max-w-md space-y-3 text-center">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
        className="text-balance text-xl font-bold leading-[1.7] md:text-2xl"
      >
        {tagline}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.32, 0.72, 0, 1] }}
        className="text-xs leading-[1.9] text-[var(--text-tertiary)]"
      >
        {hint}
      </motion.p>
    </div>
  )
}