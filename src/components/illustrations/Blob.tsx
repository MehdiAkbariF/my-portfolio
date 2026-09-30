'use client'

import { motion } from 'framer-motion'

export function Blob() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-hidden"
      aria-hidden="true"
    >
      <motion.svg
        width="800"
        height="800"
        viewBox="0 0 800 800"
        className="opacity-20 blur-3xl"
      >
        <defs>
          <linearGradient id="blob-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--accent)" />
            <stop offset="100%" stopColor="#A78BFA" />
          </linearGradient>
        </defs>

        <motion.path
          fill="url(#blob-grad)"
          animate={{
            d: [
              'M400,150 C550,150 680,250 680,400 C680,550 550,680 400,680 C250,680 120,550 120,400 C120,250 250,150 400,150 Z',
              'M400,180 C580,180 720,300 700,450 C680,600 520,700 380,680 C220,660 100,540 130,380 C160,220 220,180 400,180 Z',
              'M420,160 C600,200 700,320 680,480 C660,640 500,720 340,680 C180,640 100,500 140,340 C180,180 240,120 420,160 Z',
              'M400,150 C550,150 680,250 680,400 C680,550 550,680 400,680 C250,680 120,550 120,400 C120,250 250,150 400,150 Z',
            ],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </motion.svg>
    </div>
  )
}