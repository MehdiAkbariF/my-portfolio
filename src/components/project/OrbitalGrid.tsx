'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ProjectIcon } from '../icons/ProjectIcon'
import { ProjectCard, type Project } from './ProjectCard'
import { ProjectTitle } from './ProjectTitle'
import { Confetti } from '../ui/Confetti'

const projects: Project[] = [
  {
    id: 'yadakiran',
    name: 'Yadakiran',
    nameFa: 'یدک ایران',
    role: 'UI/UX + Development',
    roleFa: 'طراحی و توسعه',
    description:
      'پلتفرم تخصصی قطعات یدکی خودرو با تمرکز بر B2B. جستجوی پارتنامبر، مقایسه قیمت و سیستم سفارش عمده.',
    descriptionFa: '',
    url: 'https://yadakirun.com',
    tags: ['B2B', 'Marketplace', 'Next.js'],
  },
  {
    id: 'yadakchi',
    name: 'Yadakchi',
    nameFa: 'یدک‌چی',
    role: 'UI/UX + Development',
    roleFa: 'طراحی و توسعه',
    description:
      'مارکت‌پلیس قطعات یدکی با پنل فروشندگان اختصاصی. مدیریت موجودی، سفارش و ارسال در یک داشبورد واحد.',
    descriptionFa: '',
    url: 'https://yadakchi.com',
    tags: ['Marketplace', 'Seller Panel', 'Dashboard'],
  },
  {
    id: 'seller',
    name: 'Seller Panel',
    nameFa: 'پنل فروشندگان',
    role: 'Product Design',
    roleFa: 'طراحی محصول',
    description:
      'داشبورد اختصاصی فروشندگان برای مدیریت محصولات، سفارش‌ها و تحلیل فروش.',
    descriptionFa: '',
    url: 'https://seller.yadakchi.com',
    tags: ['SaaS', 'Dashboard', 'Analytics'],
  },
  {
    id: 'spatijob',
    name: 'SpatiJob',
    nameFa: 'اسپاتی‌جاب',
    role: 'UI/UX + Development',
    roleFa: 'طراحی و توسعه',
    description:
      'پلتفرم کشف موقعیت‌های شغلی مکانی. اتصال کارجو و کارفرما بر اساس موقعیت جغرافیایی.',
    descriptionFa: '',
    url: 'https://spatijob.com',
    tags: ['Geo', 'Recruitment', 'Map'],
  },
  {
    id: 'liftaland',
    name: 'Liftaland',
    nameFa: 'لیفت‌لند',
    role: 'UI/UX + Development',
    roleFa: 'طراحی و توسعه',
    description:
      'سامانه مرجع خدمات مهندسی و قطعات آسانسور. سرویس دوره‌ای، اخذ گواهی استاندارد.',
    descriptionFa: '',
    url: 'https://demo.liftaland.com',
    tags: ['Industrial', 'Services', 'Standards'],
  },
]

// موقعیت‌های مداری — هر پروژه یه زاویه‌ی متفاوت
const orbitalPositions = [
  { angle: 0, radius: 1 }, // چپ
  { angle: 72, radius: 1 }, // بالا راست
  { angle: 144, radius: 1 }, // پایین راست
  { angle: 216, radius: 1 }, // پایین چپ
  { angle: 288, radius: 1 }, // بالا چپ
]

export function OrbitalGrid() {
  const [activeId, setActiveId] = useState<string | null>(null)
  const [confettiTrigger, setConfettiTrigger] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  const containerRef = useRef<HTMLDivElement>(null)

  // موس برای پارالاکس
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springX = useSpring(mouseX, { damping: 30, stiffness: 100, mass: 1 })
  const springY = useSpring(mouseY, { damping: 30, stiffness: 100, mass: 1 })

  // پارالاکس — لایه‌های عمق
  const depthFar = useTransform(springX, [-1, 1], [-8, 8])
  const depthMid = useTransform(springX, [-1, 1], [-16, 16])
  const depthNear = useTransform(springX, [-1, 1], [-28, 28])

  const depthFarY = useTransform(springY, [-1, 1], [-8, 8])
  const depthMidY = useTransform(springY, [-1, 1], [-16, 16])
  const depthNearY = useTransform(springY, [-1, 1], [-28, 28])

  // چرخش مداری
  const rotation = useMotionValue(0)
  const rotationSpring = useSpring(rotation, {
    damping: 40,
    stiffness: 60,
    mass: 1.5,
  })

  useEffect(() => {
    if (typeof window === 'undefined') return
    const touch = window.matchMedia('(pointer: coarse)').matches
    setIsMobile(touch)

    if (touch) return

    const handleMouse = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1
      const y = (e.clientY / window.innerHeight) * 2 - 1
      mouseX.set(x)
      mouseY.set(y)
    }

    window.addEventListener('mousemove', handleMouse)
    return () => window.removeEventListener('mousemove', handleMouse)
  }, [mouseX, mouseY])

  // چرخش آروم خودکار
  useEffect(() => {
    let raf: number
    let last = performance.now()

    const tick = (now: number) => {
      const delta = (now - last) / 1000
      last = now
      if (!activeId) {
        rotation.set(rotation.get() + delta * 3) // 3 درجه در ثانیه
      }
      raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [rotation, activeId])

  const handleSelect = (id: string) => {
    if (id === activeId) {
      setActiveId(null)
    } else {
      setActiveId(id)
      setConfettiTrigger((t) => t + 1)
    }
  }

  const handleClose = () => {
    setActiveId(null)
  }

  const activeProject = projects.find((p) => p.id === activeId) ?? null

  return (
    <>
      <ProjectTitle
        name={activeProject?.name ?? null}
        nameFa={activeProject?.nameFa ?? null}
      />

      <div
        ref={containerRef}
        className="relative flex w-full max-w-3xl items-center justify-center pb-32"
        style={{ minHeight: '480px' }}
      >
        {/* لایه‌ی دور — دایره‌ها */}
        <motion.div
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
          style={{ x: depthFar, y: depthFarY }}
          aria-hidden="true"
        >
          <motion.div
            style={{ rotate: rotationSpring }}
            className="absolute"
          >
            <svg
              width="440"
              height="440"
              viewBox="0 0 440 440"
              fill="none"
              className="opacity-30"
            >
              <circle
                cx="220"
                cy="220"
                r="200"
                stroke="var(--accent)"
                strokeWidth="0.5"
                strokeDasharray="2 8"
                fill="none"
              />
              <circle
                cx="220"
                cy="220"
                r="160"
                stroke="var(--accent)"
                strokeWidth="0.5"
                strokeDasharray="1 6"
                fill="none"
              />
            </svg>
          </motion.div>
        </motion.div>

        {/* لایه‌ی میانی — آیکون‌ها روی مدار */}
        <motion.div
          className="relative h-[360px] w-[360px]"
          style={{ x: depthMid, y: depthMidY }}
        >
          <motion.div
            className="absolute inset-0"
            style={{ rotate: rotationSpring }}
          >
            {projects.map((project, i) => {
              const pos = orbitalPositions[i]
              const rad = (pos.angle * Math.PI) / 180
              const radius = 140
              const x = Math.cos(rad) * radius
              const y = Math.sin(rad) * radius

              // آیکون‌ها برعکس بچرخن تا صاف بمونن
              const counterRotate = useTransform(rotationSpring, (r) => -r)

              return (
                <motion.div
                  key={project.id}
                  className="absolute left-1/2 top-1/2"
                  style={{
                    x,
                    y,
                    translateX: '-50%',
                    translateY: '-50%',
                    rotate: counterRotate,
                  }}
                >
                  <motion.div
                    style={{ x: depthNear, y: depthNearY }}
                  >
                    <ProjectIcon
                      id={project.id as any}
                      label={project.name}
                      isActive={activeId === project.id}
                      isDimmed={activeId !== null && activeId !== project.id}
                      onSelect={handleSelect}
                    />
                    {activeId === project.id && (
                      <Confetti trigger={confettiTrigger} />
                    )}
                  </motion.div>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>

        {/* مرکز — نقطه‌ی نورانی */}
        <motion.div
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: activeId ? 0 : [1, 1.2, 1],
            opacity: activeId ? 0 : [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          aria-hidden="true"
        >
          <div className="h-3 w-3 rounded-full bg-[var(--accent)] blur-[2px]" />
        </motion.div>
      </div>

      <ProjectCard project={activeProject} onClose={handleClose} />
    </>
  )
}