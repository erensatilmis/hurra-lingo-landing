import Hero from '../components/sections/Hero'
import Mission from '../components/sections/Mission'
import Features from '../components/sections/Features'
import AgeGroups from '../components/sections/AgeGroups'
import CefrLevels from '../components/sections/CefrLevels'
import CtaBand from '../components/sections/CtaBand'
import Testimonials from '../components/sections/Testimonials'
import BlogPreview from '../components/sections/BlogPreview'
import Gallery from '../components/sections/Gallery'
import { ctaBands } from '../data/content'

export default function HomePage() {
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
