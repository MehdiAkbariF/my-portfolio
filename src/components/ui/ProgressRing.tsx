'use client'

import { motion } from 'framer-motion'

type ProgressRingProps = {
  progress: number // 0 to 1
  size?: number
  stroke?: number
  isActive?: boolean
}

export function ProgressRing({
  progress,
  size = 120,
  stroke = 2,
  isActive = false,
}: ProgressRingProps) {
  const radius = (size - stroke) / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference * (1 - progress)

  return (
    <svg
      width={size}
      height={size}
      className="pointer-events-none absolute inset-0"
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke="var(--border-subtle)"
        strokeWidth={stroke}
        fill="none"
        opacity={isActive ? 1 : 0}
        style={{ transition: 'opacity 0.3s' }}
      />
      <motion.circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke="var(--accent)"
        strokeWidth={stroke}
        fill="none"
        strokeLinecap="round"
        strokeDasharray={circumference}
        animate={{ strokeDashoffset: offset }}
        transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
        style={{
          transformOrigin: 'center',
          transform: 'rotate(-90deg)',
          opacity: isActive ? 1 : 0,
          transition: 'opacity 0.3s',
        }}
      />
    </svg>
  )
}