import { useState } from 'react'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Accordion from '../ui/Accordion'
import Reveal from '../ui/Reveal'
import ParallaxBlobs from '../ui/ParallaxBlobs'
import { cefrLevels } from '../../data/content'

export default function CefrLevels() {
  const [openId, setOpenId] = useState(cefrLevels.levels[0].id)

  const handleToggle = (id) => {
    setOpenId(id)
  }

  return (
    <section className="relative overflow-hidden bg-surface-muted py-16 md:py-24">
      <ParallaxBlobs variant="a" />
      <Container className="relative">
        <Reveal>
          <SectionHeading
            eyebrow={cefrLevels.eyebrow}
            title={cefrLevels.title}
            subtitle="Avrupa Dil Portfolyosu (CEFR) standartlarına uygun kazanım hedefleri."
          />
        </Reveal>

        <Reveal className="mt-10">
          <Accordion
            items={cefrLevels.levels}
            openId={openId}
            onToggle={handleToggle}
          />
        </Reveal>
      </Container>
    </section>
  )
}
