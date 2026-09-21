import { aboutContact } from '@/data/about-page'
import { useDocumentTitle } from '@/hooks/useDocumentTitle'
import Contact from '@/sections/Contact'
import AboutHero from '@/sections/about/AboutHero'
import Embedded from '@/sections/about/Embedded'
import Founders from '@/sections/about/Founders'
import IntroBand from '@/sections/about/IntroBand'
import Teams from '@/sections/about/Teams'
import Values from '@/sections/about/Values'

/** /about: hero → intro band → teams → founders → values → embedded → dark contact (with phone). Footer comes from Layout. */
export default function About() {
  useDocumentTitle('About | Nezbara')

  return (
    <>
      <AboutHero />
      <IntroBand />
      <Teams />
      <Founders />
      <Values />
      <Embedded />
      <Contact variant="dark" phone heading={aboutContact.heading} />
    </>
  )
}
