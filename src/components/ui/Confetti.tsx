'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useMemo } from 'react'

type ConfettiProps = {
  trigger: number
  colors?: string[]
}

type Particle = {
  id: number
  x: number
  y: number
  angle: number
  velocity: number
  size: number
  color: string
  rotation: number
}

export function Confetti({ trigger, colors }: ConfettiProps) {
  const particles = useMemo<Particle[]>(() => {
    if (trigger === 0) return []
    const palette = colors ?? [
      'var(--accent)',
      '#7BA3F5',
      '#A78BFA',
      '#F472B6',
      '#FBBF24',
    ]
    return Array.from({ length: 24 }, (_, i) => ({
      id: i,
      x: 0,
      y: 0,
      angle: (Math.PI * 2 * i) / 24 + (Math.random() - 0.5) * 0.5,
      velocity: 80 + Math.random() * 120,
      size: 4 + Math.random() * 6,
      color: palette[Math.floor(Math.random() * palette.length)],
      rotation: Math.random() * 360,
    }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trigger])

  return (
    <div
      className="pointer-events-none absolute left-1/2 top-1/2 z-20"
      aria-hidden="true"
    >
      <AnimatePresence>
        {particles.map((p) => {
          const dx = Math.cos(p.angle) * p.velocity
          const dy = Math.sin(p.angle) * p.velocity
          return (
            <motion.div
              key={`${trigger}-${p.id}`}
              className="absolute rounded-sm"
              style={{
                width: p.size,
                height: p.size,
                backgroundColor: p.color,
              }}
              initial={{ x: 0, y: 0, opacity: 1, scale: 1, rotate: 0 }}
              animate={{
                x: dx,
                y: dy,
                opacity: 0,
                scale: 0.3,
                rotate: p.rotation,
              }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 1.2,
                ease: [0.32, 0.72, 0, 1],
              }}
            />
          )
        })}
      </AnimatePresence>
    </div>
  )
}