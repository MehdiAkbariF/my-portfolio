'use client'

import { motion } from 'framer-motion'

export function Workbench() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: [0.32, 0.72, 0, 1] }}
      className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-hidden"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 800 800"
        className="h-full w-full max-w-4xl opacity-40"
        fill="none"
      >
        {/* شبکه‌ی ایزومتریک پس‌زمینه */}
        <defs>
          <pattern
            id="iso-grid"
            width="40"
            height="23"
            patternUnits="userSpaceOnUse"
            patternTransform="translate(0,0)"
          >
            <path
              d="M0 23 L20 11.5 L40 23 M0 0 L20 11.5 L40 0"
              stroke="var(--border-subtle)"
              strokeWidth="0.5"
              fill="none"
            />
          </pattern>

          {/* گرادیان محو شدن لبه‌ها */}
          <radialGradient id="fade" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="70%" stopColor="white" stopOpacity="0.3" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>

          <mask id="fade-mask">
            <rect width="800" height="800" fill="url(#fade)" />
          </mask>
        </defs>

        {/* شبکه */}
        <rect
          width="800"
          height="800"
          fill="url(#iso-grid)"
          mask="url(#fade-mask)"
        />

        {/* خطوط راهنما — دایره‌های متحدالمرکز */}
        <g mask="url(#fade-mask)" opacity="0.5">
          <ellipse
            cx="400"
            cy="500"
            rx="300"
            ry="150"
            stroke="var(--border-subtle)"
            strokeWidth="1"
            fill="none"
            strokeDasharray="2 6"
          />
          <ellipse
            cx="400"
            cy="500"
            rx="200"
            ry="100"
            stroke="var(--border-subtle)"
            strokeWidth="1"
            fill="none"
            strokeDasharray="2 6"
          />
        </g>

        {/* نقاط تزئینی */}
        <g mask="url(#fade-mask)" opacity="0.6">
          {[
            [200, 300],
            [600, 280],
            [150, 550],
            [650, 520],
            [400, 200],
            [300, 650],
            [500, 620],
          ].map(([cx, cy], i) => (
            <motion.circle
              key={i}
              cx={cx}
              cy={cy}
              r="2"
              fill="var(--accent)"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.3, 0.8, 0.3] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.4,
                ease: 'easeInOut',
              }}
            />
          ))}
        </g>
      </svg>
    </motion.div>
  )
}