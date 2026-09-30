'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export function Spotlight() {
  const [isTouch, setIsTouch] = useState(true)
  const x = useMotionValue(-500)
  const y = useMotionValue(-500)

  const springX = useSpring(x, { damping: 30, stiffness: 200, mass: 0.8 })
  const springY = useSpring(y, { damping: 30, stiffness: 200, mass: 0.8 })

  useEffect(() => {
    if (typeof window === 'undefined') return

    const touch = window.matchMedia('(pointer: coarse)').matches
    setIsTouch(touch)
    if (touch) return

    const handleMove = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }

    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [x, y])

  if (isTouch) return null

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed z-[5] h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full"
      style={{
        x: springX,
        y: springY,
        background:
          'radial-gradient(circle, var(--accent) 0%, transparent 70%)',
        opacity: 0.06,
        mixBlendMode: 'screen',
      }}
    />
  )
}