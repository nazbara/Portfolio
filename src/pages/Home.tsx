import About from '@/sections/About'
import Contact from '@/sections/Contact'
import Hero from '@/sections/Hero'
import Services from '@/sections/Services'
import Testimonials from '@/sections/Testimonials'
import Work from '@/sections/Work'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Work />
      <Testimonials label="What Our Clients Say" />
      <Contact />
    </>
  )
}
