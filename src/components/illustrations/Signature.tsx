'use client'

import { motion } from 'framer-motion'

export function Signature() {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      viewBox="0 0 400 120"
      className="w-full max-w-md"
      fill="none"
      aria-label="امضای شخصی"
    >
      {/* مسیر امضا — خودش رو می‌کشه */}
      <motion.path
        d="M20,80 C40,40 60,30 80,50 C100,70 110,90 130,80 C150,70 160,40 180,50 C200,60 210,90 230,80 C250,70 270,30 290,45 C310,60 320,85 340,75 C360,65 370,55 380,60"
        stroke="var(--accent)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{
          pathLength: {
            duration: 2.5,
            ease: [0.32, 0.72, 0, 1],
          },
        }}
      />

      {/* نقطه‌ی پایانی */}
      <motion.circle
        cx="380"
        cy="60"
        r="3"
        fill="var(--accent)"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 2.3, duration: 0.4 }}
      />
    </motion.svg>
  )
}