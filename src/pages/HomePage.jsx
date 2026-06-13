import Hero from '../components/sections/Hero'
import Mission from '../components/sections/Mission'
import Features from '../components/sections/Features'
import AgeGroups from '../components/sections/AgeGroups'
import CefrLevels from '../components/sections/CefrLevels'
import CtaBand from '../components/sections/CtaBand'
import Testimonials from '../components/sections/Testimonials'
import BlogPreview from '../components/sections/BlogPreview'
import Gallery from '../components/sections/Gallery'
import { useTranslation } from 'react-i18next'

export default function HomePage() {
  const { t } = useTranslation('home')
  const ctaBands = t('ctaBands', { returnObjects: true })

  return (
    <main>
      <Hero />
      <Mission />
      <Features />
      <AgeGroups />
      <CtaBand data={ctaBands[1]} />
      <CefrLevels />
      <Testimonials />
      <BlogPreview />
      <Gallery />
    </main>
  )
}
