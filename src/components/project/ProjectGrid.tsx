'use client'

import { useState } from 'react'
import { ProjectIcon } from '../icons/ProjectIcon'
import { ProjectCard, type Project } from './ProjectCard'
import { ProjectTitle } from './ProjectTitle'
import { Constellation } from '../illustrations/Constellation'
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
      'داشبورد اختصاصی فروشندگان برای مدیریت محصولات، سفارش‌ها و تحلیل فروش. طراحی مبتنی بر داده و کارایی.',
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
      'پلتفرم کشف موقعیت‌های شغلی مکانی. اتصال کارجو و کارفرما بر اساس موقعیت جغرافیایی و مهارت.',
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
      'سامانه مرجع خدمات مهندسی و قطعات آسانسور. سرویس دوره‌ای، اخذ گواهی استاندارد و تامین قطعات اورجینال.',
    descriptionFa: '',
    url: 'https://demo.liftaland.com',
    tags: ['Industrial', 'Services', 'Standards'],
  },
]

export function ProjectGrid() {
  const [activeId, setActiveId] = useState<string | null>(null)
  const [confettiTrigger, setConfettiTrigger] = useState(0)

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

      <div className="relative flex w-full max-w-2xl flex-col items-center px-6 pb-32">
        <div className="pointer-events-none absolute inset-0">
          <Constellation activeId={activeId} />
        </div>

        <div className="relative grid grid-cols-2 gap-x-14 gap-y-24 sm:grid-cols-3">
          {projects.map((project) => (
            <div key={project.id} className="relative">
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
            </div>
          ))}
        </div>
      </div>

      <ProjectCard project={activeProject} onClose={handleClose} />
    </>
  )
}