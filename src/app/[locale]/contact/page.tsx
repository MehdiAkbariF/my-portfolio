import { getTranslations } from 'next-intl/server'
import { ContactChannel } from '../../../components/contact/ContactChannel'
import { PulseCore } from '../../../components/contact/PulseCore'
import { DataStreams } from '../../../components/contact/DataStreams'
import { Particles } from '../../../components/illustrations/Particles'
import { Noise } from '../../../components/illustrations/Noise'
import { Aurora } from '../../../components/illustrations/Aurora'

export default async function ContactPage() {
  const t = await getTranslations('contact')

  const contacts = [
    {
      label: t('github'),
      value: '@MehdiAkbariF',
      href: 'https://github.com/MehdiAkbariF',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2 C6.5 2 2 6.5 2 12 C2 16.4 4.9 20.1 8.8 21.4 C9.3 21.5 9.5 21.2 9.5 20.9 L9.5 19 C6.7 19.5 6.1 17.7 6.1 17.7 C5.7 16.6 5 16.2 5 16.2 C4.1 15.6 5.1 15.6 5.1 15.6 C6.1 15.7 6.7 16.6 6.7 16.6 C7.6 18.2 9.1 17.7 9.6 17.4 C9.7 16.8 9.9 16.3 10.2 16 C7.9 15.7 5.5 14.9 5.5 11.1 C5.5 10 5.9 9 6.6 8.3 C6.5 8 6.1 7 6.7 5.5 C6.7 5.5 7.6 5.2 9.5 6.6 C10.3 6.3 11.2 6.2 12 6.2 C12.8 6.2 13.7 6.3 14.5 6.6 C16.4 5.2 17.3 5.5 17.3 5.5 C17.9 7 17.5 8 17.4 8.3 C18.1 9 18.5 10 18.5 11.1 C18.5 14.9 16.1 15.7 13.8 16 C14.2 16.3 14.5 16.9 14.5 17.8 L14.5 20.9 C14.5 21.2 14.7 21.5 15.2 21.4 C19.1 20.1 22 16.4 22 12 C22 6.5 17.5 2 12 2 Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      label: t('telegram'),
      value: '@mehdiakbaridev',
      href: 'https://t.me/mehdiakbaridev',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M21 4 L3 11 L8.5 13 L11 20 L14 14.5 L19 19 L21 4 Z M8.5 13 L18 7 L11 14.5 L11 18 L8.5 13 Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      label: t('email'),
      value: 'mehdi@example.com',
      href: 'mailto:mehdi@example.com',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <rect
            x="2"
            y="5"
            width="20"
            height="14"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M2 8 L12 14 L22 8"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ]

  return (
    <main className="relative min-h-[100dvh] overflow-hidden pt-32">
      {/* پس‌زمینه */}
      <Aurora />
      <Particles count={16} />
      <Noise />

      <div className="relative z-10 mx-auto max-w-2xl px-6 pb-24">
        {/* هدر */}
        <div className="mb-16 space-y-4 text-center">
          <h1 className="text-balance text-4xl font-bold leading-[1.4] text-[var(--text-primary)] md:text-5xl">
            {t('title')}
          </h1>
          <p className="mx-auto max-w-md text-base leading-[2] text-[var(--text-secondary)]">
            {t('subtitle')}
          </p>
        </div>

        {/* قلب تپنده + خطوط داده */}
        <div className="relative mx-auto mb-16 flex h-[400px] w-full items-center justify-center">
          <DataStreams />
          <PulseCore />
        </div>

        {/* کانال‌های ارتباطی */}
        <div className="space-y-0">
          {contacts.map((contact, i) => (
            <ContactChannel
              key={contact.label}
              label={contact.label}
              value={contact.value}
              href={contact.href}
              icon={contact.icon}
              index={i}
              direction={i % 2 === 0 ? 'left' : 'right'}
            />
          ))}
        </div>

        {/* امضا */}
        <div className="mt-20 text-center">
          <p className="text-xs leading-[1.9] text-[var(--text-tertiary)]">
            ساخته شده با ❤ در تهران
          </p>
        </div>
      </div>
    </main>
  )
}