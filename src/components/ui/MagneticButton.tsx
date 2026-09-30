'use client'

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'

type MagneticButtonProps = {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  as?: 'button' | 'a'
  href?: string
  strength?: number
}

export function MagneticButton({
  children,
  onClick,
  className = '',
  as = 'button',
  href,
  strength = 0.35,
}: MagneticButtonProps) {
  const ref = useRef<HTMLElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const distX = (e.clientX - centerX) * strength
    const distY = (e.clientY - centerY) * strength
    setPosition({ x: distX, y: distY })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  const props = {
    ref: ref as any,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    onClick,
    className,
  }

  if (as === 'a') {
    return (
      <motion.a
        {...props}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        animate={{ x: position.x, y: position.y }}
        transition={{ type: 'spring', stiffness: 200, damping: 15, mass: 0.5 }}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      {...props}
      type="button"
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 200, damping: 15, mass: 0.5 }}
    >
      {children}
    </motion.button>
  )
}