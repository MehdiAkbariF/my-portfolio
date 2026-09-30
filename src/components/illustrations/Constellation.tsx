'use client'

import { motion } from 'framer-motion'

type Point = { x: number; y: number }

const positions: Record<string, Point> = {
  yadakiran: { x: 100, y: 100 },
  yadakchi: { x: 380, y: 80 },
  seller: { x: 620, y: 200 },
  spatijob: { x: 180, y: 380 },
  liftaland: { x: 520, y: 420 },
}

const connections: [string, string][] = [
  ['yadakiran', 'yadakchi'],
  ['yadakchi', 'seller'],
  ['yadakiran', 'spatijob'],
  ['spatijob', 'liftaland'],
  ['seller', 'liftaland'],
  ['yadakchi', 'liftaland'],
]

export function Constellation({ activeId }: { activeId: string | null }) {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: [0.32, 0.72, 0, 1] }}
      viewBox="0 0 720 500"
      className="pointer-events-none absolute inset-0 z-0 h-full w-full"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="line-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.6" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* خطوط اتصال */}
      {connections.map(([from, to], i) => {
        const a = positions[from]
        const b = positions[to]
        const isActive =
          activeId === from || activeId === to || activeId === null

        // مسیر منحنی با quadratic bezier
        const midX = (a.x + b.x) / 2
        const midY = (a.y + b.y) / 2
        const offsetX = (b.y - a.y) * 0.15
        const offsetY = (a.x - b.x) * 0.15

        return (
          <motion.path
            key={`${from}-${to}`}
            d={`M ${a.x} ${a.y} Q ${midX + offsetX} ${midY + offsetY} ${b.x} ${b.y}`}
            stroke="var(--accent)"
            strokeWidth="1"
            fill="none"
            strokeDasharray="4 8"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: 1,
              opacity: isActive ? 0.35 : 0.08,
            }}
            transition={{
              pathLength: {
                duration: 2,
                delay: i * 0.15,
                ease: [0.32, 0.72, 0, 1],
              },
              opacity: { duration: 0.6 },
            }}
          />
        )
      })}

      {/* نقاط درخشان روی تقاطع‌ها */}
      {Object.entries(positions).map(([id, p], i) => (
        <motion.circle
          key={id}
          cx={p.x}
          cy={p.y}
          r="3"
          fill="var(--accent)"
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: activeId === id ? 1.8 : 1,
            opacity: activeId === id ? 0.9 : 0.4,
          }}
          transition={{
            duration: 0.6,
            delay: i * 0.1,
            ease: [0.32, 0.72, 0, 1],
          }}
        />
      ))}

      {/* حلقه‌ی چرخان */}
      <motion.g
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        style={{ originX: '360px', originY: '250px' }}
      >
        <circle
          cx="360"
          cy="250"
          r="200"
          stroke="var(--accent)"
          strokeWidth="0.5"
          fill="none"
          strokeDasharray="2 12"
          opacity="0.2"
        />
      </motion.g>

      <motion.g
        animate={{ rotate: -360 }}
        transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
        style={{ originX: '360px', originY: '250px' }}
      >
        <circle
          cx="360"
          cy="250"
          r="240"
          stroke="var(--accent)"
          strokeWidth="0.5"
          fill="none"
          strokeDasharray="1 20"
          opacity="0.15"
        />
      </motion.g>
    </motion.svg>
  )
}