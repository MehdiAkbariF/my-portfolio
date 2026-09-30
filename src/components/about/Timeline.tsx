'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

type TimelineItem = {
  year: string
  title: string
  description: string
}

const items: TimelineItem[] = [
  {
    year: '۱۳۹۸',
    title: 'شروع مسیر',
    description: 'ورود به دنیای طراحی و توسعه محصولات دیجیتال.',
  },
  {
    year: '۱۳۹۹',
    title: 'پلتفرم‌های B2B',
    description: 'طراحی و توسعه اولین مارکت‌پلیس قطعات یدکی.',
  },
  {
    year: '۱۴۰۰',
    title: 'پنل‌های فروشندگان',
    description: 'تمرکز بر ابزارهای SaaS و داشبوردهای تحلیلی.',
  },
  {
    year: '۱۴۰۲',
    title: 'پروژه‌های صنعتی',
    description: 'ورود به حوزه‌های مهندسی و خدمات تخصصی.',
  },
  {
    year: '۱۴۰۴',
    title: 'امروز',
    description: 'تمرکز بر تجربه‌های کاربری دقیق و محصولات متفاوت.',
  },
]

export function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <div ref={containerRef} className="relative mx-auto max-w-2xl px-6 py-24">
      {/* خط عمودی */}
      <div className="absolute left-6 top-24 bottom-24 w-px bg-[var(--border-subtle)]" />
      <motion.div
        className="absolute left-6 top-24 w-px origin-top bg-[var(--accent)]"
        style={{ height: lineHeight }}
      />

      <div className="space-y-16">
        {items.map((item, i) => (
          <motion.div
            key={item.year}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{
              duration: 0.6,
              delay: i * 0.1,
              ease: [0.32, 0.72, 0, 1],
            }}
            className="relative pl-16"
          >
            {/* نقطه */}
            <div className="absolute left-4 top-1.5 flex h-4 w-4 -translate-x-1/2 items-center justify-center">
              <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
            </div>

            <span className="text-xs font-medium tracking-wider text-[var(--text-tertiary)]">
              {item.year}
            </span>
            <h3 className="mt-1 text-lg font-bold text-[var(--text-primary)]">
              {item.title}
            </h3>
            <p className="mt-2 text-sm leading-[1.9] text-[var(--text-secondary)]">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}