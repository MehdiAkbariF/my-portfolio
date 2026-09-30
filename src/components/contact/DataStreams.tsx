'use client'

import { motion } from 'framer-motion'

type Stream = {
  fromX: number
  fromY: number
  toX: number
  toY: number
  delay: number
  duration: number
}

const streams: Stream[] = [
  { fromX: 200, fromY: 200, toX: 50, toY: 30, delay: 0, duration: 3 },
  { fromX: 200, fromY: 200, toX: 350, toY: 60, delay: 0.5, duration: 3.5 },
  { fromX: 200, fromY: 200, toX: 30, toY: 250, delay: 1, duration: 4 },
  { fromX: 200, fromY: 200, toX: 370, toY: 280, delay: 1.5, duration: 3.2 },
  { fromX: 200, fromY: 200, toX: 100, toY: 370, delay: 2, duration: 3.8 },
  { fromX: 200, fromY: 200, toX: 300, toY: 380, delay: 2.5, duration: 3.4 },
]

export function DataStreams() {
  return (
    <svg
      viewBox="0 0 400 400"
      className="pointer-events-none absolute inset-0 h-full w-full"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="stream-grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="var(--accent)" stopOpacity="0" />
          <stop offset="50%" stopColor="var(--accent)" stopOpacity="0.6" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
        </linearGradient>
      </defs>

      {streams.map((s, i) => {
        const midX = (s.fromX + s.toX) / 2
        const midY = (s.fromY + s.toY) / 2
        const offsetX = (s.toY - s.fromY) * 0.2
        const offsetY = (s.fromX - s.toX) * 0.2

        return (
          <g key={i}>
            {/* مسیر خط */}
            <motion.path
              d={`M ${s.fromX} ${s.fromY} Q ${midX + offsetX} ${midY + offsetY} ${s.toX} ${s.toY}`}
              stroke="var(--accent)"
              strokeWidth="0.5"
              fill="none"
              opacity="0.15"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 2,
                delay: s.delay,
                ease: [0.32, 0.72, 0, 1],
              }}
            />

            {/* ذره‌ی در حال حرکت */}
            <motion.circle
              r="2"
              fill="var(--accent)"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 1, 1, 0],
                offsetDistance: ['0%', '100%'],
              }}
              transition={{
                duration: s.duration,
                delay: s.delay + 2,
                repeat: Infinity,
                repeatDelay: 1,
                ease: 'easeInOut',
              }}
              style={{
                offsetPath: `path("M ${s.fromX} ${s.fromY} Q ${midX + offsetX} ${midY + offsetY} ${s.toX} ${s.toY}")`,
              }}
            />
          </g>
        )
      })}
    </svg>
  )
}