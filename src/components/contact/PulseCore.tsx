'use client'

import { motion } from 'framer-motion'

export function PulseCore() {
  return (
    <div
      className="pointer-events-none relative flex items-center justify-center"
      aria-hidden="true"
    >
      <svg
        width="400"
        height="400"
        viewBox="0 0 400 400"
        fill="none"
        className="max-w-full"
      >
        <defs>
          {/* گرادیان قلب */}
          <radialGradient id="core-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.6" />
            <stop offset="60%" stopColor="var(--accent)" stopOpacity="0.1" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
          </radialGradient>

          <radialGradient id="core-inner" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--accent)" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.3" />
          </radialGradient>
        </defs>

        {/* هاله‌ی بیرونی */}
        <motion.circle
          cx="200"
          cy="200"
          r="120"
          fill="url(#core-glow)"
          animate={{ scale: [1, 1.15, 1], opacity: [0.6, 0.9, 0.6] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: '200px 200px' }}
        />

        {/* حلقه‌ی چرخان ۱ */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          style={{ originX: '200px', originY: '200px' }}
        >
          <circle
            cx="200"
            cy="200"
            r="90"
            stroke="var(--accent)"
            strokeWidth="1"
            strokeDasharray="8 16"
            fill="none"
            opacity="0.4"
          />
        </motion.g>

        {/* حلقه‌ی چرخان ۲ — برعکس */}
        <motion.g
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          style={{ originX: '200px', originY: '200px' }}
        >
          <circle
            cx="200"
            cy="200"
            r="110"
            stroke="var(--accent)"
            strokeWidth="0.5"
            strokeDasharray="2 20"
            fill="none"
            opacity="0.3"
          />
        </motion.g>

        {/* هسته‌ی داخلی */}
        <motion.circle
          cx="200"
          cy="200"
          r="12"
          fill="url(#core-inner)"
          animate={{ scale: [1, 1.3, 1], opacity: [0.9, 1, 0.9] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: '200px 200px' }}
        />

        {/* امواج تپش */}
        <motion.circle
          cx="200"
          cy="200"
          r="20"
          stroke="var(--accent)"
          strokeWidth="1.5"
          fill="none"
          initial={{ scale: 1, opacity: 0.8 }}
          animate={{ scale: 4, opacity: 0 }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeOut' }}
          style={{ transformOrigin: '200px 200px' }}
        />

        <motion.circle
          cx="200"
          cy="200"
          r="20"
          stroke="var(--accent)"
          strokeWidth="1"
          fill="none"
          initial={{ scale: 1, opacity: 0.6 }}
          animate={{ scale: 5, opacity: 0 }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: 'easeOut',
            delay: 0.8,
          }}
          style={{ transformOrigin: '200px 200px' }}
        />

        {/* نقاط داده‌ای روی مدار */}
        {[0, 60, 120, 180, 240, 300].map((angle, i) => {
          const rad = (angle * Math.PI) / 180
          const x = 200 + Math.cos(rad) * 90
          const y = 200 + Math.sin(rad) * 90
          return (
            <motion.circle
              key={angle}
              cx={x}
              cy={y}
              r="2"
              fill="var(--accent)"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{
                duration: 3,
                delay: i * 0.3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          )
        })}
      </svg>
    </div>
  )
}