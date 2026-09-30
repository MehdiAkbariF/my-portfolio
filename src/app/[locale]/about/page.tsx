import { getTranslations } from 'next-intl/server'
import { Signature } from '../../../components/illustrations/Signature'
import { Timeline } from '../../../components/about/Timeline'
import { Particles } from '../../../components/illustrations/Particles'
import { Noise } from '../../../components/illustrations/Noise'
import { Aurora } from '../../../components/illustrations/Aurora'

export default async function AboutPage() {
  const t = await getTranslations('about')

  return (
    <main className="relative min-h-[100dvh] overflow-hidden pt-32">
      <Aurora />
      <Particles count={12} />
      <Noise />

      <div className="relative z-10 mx-auto max-w-3xl px-6">
        <div className="mb-16 space-y-6 text-center">
          <h1 className="text-4xl font-bold leading-[1.4] text-[var(--text-primary)] md:text-5xl">
            {t('title')}
          </h1>
          <p className="mx-auto max-w-xl text-base leading-[2] text-[var(--text-secondary)]">
            {t('intro')}
          </p>
        </div>

        {/* امضا */}
        <div className="my-20 flex justify-center">
          <Signature />
        </div>

        {/* نقل قول */}
        <blockquote className="my-24 border-r-2 border-[var(--accent)] pr-6 md:border-l-2 md:border-r-0 md:pl-6 md:pr-0">
          <p className="text-lg leading-[2] text-[var(--text-primary)] italic">
            {t('quote')}
          </p>
        </blockquote>

        {/* لینک‌های سریع */}
        <div className="my-16 flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://github.com/MehdiAkbariF"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-[var(--border-subtle)] bg-[var(--surface-elevated)] px-5 py-2 text-sm font-medium text-[var(--text-primary)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            GitHub
          </a>
          <a
            href="https://t.me/mehdiakbaridev"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-[var(--border-subtle)] bg-[var(--surface-elevated)] px-5 py-2 text-sm font-medium text-[var(--text-primary)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            Telegram
          </a>
        </div>
      </div>

      <Timeline />
    </main>
  )
}