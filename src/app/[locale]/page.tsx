import { getTranslations } from 'next-intl/server'
import { OrbitalGrid } from '../../components/project/OrbitalGrid'
import { Workbench } from '../../components/illustrations/Workbench'
import { Particles } from '../../components/illustrations/Particles'
import { Noise } from '../../components/illustrations/Noise'
import { Aurora } from '../../components/illustrations/Aurora'
import { Blob } from '../../components/illustrations/Blob'
import { Spotlight } from '../../components/ui/Spotlight'
import { HeroText } from '../../components/ui/HeroText'

export default async function HomePage() {
  const t = await getTranslations('hero')

  return (
    <main className="relative min-h-[100dvh] overflow-hidden">
      <Aurora />
      <Blob />
      <Workbench />
      <Particles count={20} />
      <Noise />
      <Spotlight />

      <div className="relative z-10 flex min-h-[100dvh] flex-col items-center justify-center gap-16 px-6 pt-24">
        <HeroText tagline={t('tagline')} hint={t('swipeHint')} />
        <OrbitalGrid />
      </div>
    </main>
  )
}