'use client'

import { motion } from 'framer-motion'

export function Aurora() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      <svg
        className="absolute left-1/2 top-1/2 h-[120vh] w-[120vw] -translate-x-1/2 -translate-y-1/2"
        viewBox="0 0 1200 1200"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <filter id="aurora-blur">
            <feGaussianBlur stdDeviation="80" />
          </filter>

          <radialGradient id="aurora-1" cx="30%" cy="30%" r="60%">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
          </radialGradient>

          <radialGradient id="aurora-2" cx="70%" cy="60%" r="55%">
            <stop offset="0%" stopColor="#7BA3F5" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#7BA3F5" stopOpacity="0" />
          </radialGradient>

          <radialGradient id="aurora-3" cx="50%" cy="80%" r="50%">
            <stop offset="0%" stopColor="#A78BFA" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#A78BFA" stopOpacity="0" />
          </radialGradient>
        </defs>

        <g filter="url(#aurora-blur)">
          {/* لایه ۱ */}
          <motion.g
            animate={{
              x: [0, 140, -60, 0],
              y: [0, -60, 90, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <ellipse cx="360" cy="360" rx="500" ry="400" fill="url(#aurora-1)" />
          </motion.g>

          {/* لایه ۲ */}
          <motion.g
            animate={{
              x: [0, -140, 60, 0],
              y: [0, 80, -70, 0],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 3,
            }}
          >
            <ellipse cx="840" cy="720" rx="450" ry="380" fill="url(#aurora-2)" />
          </motion.g>

          {/* لایه ۳ */}
          <motion.g
            animate={{
              x: [0, -100, 100, 0],
              y: [0, -60, 40, 0],
            }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 6,
            }}
          >
            <ellipse cx="600" cy="960" rx="420" ry="350" fill="url(#aurora-3)" />
          </motion.g>
        </g>
      </svg>
    </div>
  )
}