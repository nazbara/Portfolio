import { MotionConfig } from 'framer-motion'
import { Outlet } from 'react-router-dom'
import Cursor from '@/components/Cursor'
import Footer from '@/components/Footer'
import LenisProvider from '@/components/LenisProvider'
import Navbar from '@/components/Navbar'
import ScrollToTop from '@/components/ScrollToTop'

export default function Layout() {
  return (
    // One place for the OS motion preference: framer-motion honours it for every section.
    <MotionConfig reducedMotion="user">
      <LenisProvider>
        <ScrollToTop />
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
        <Cursor />
      </LenisProvider>
    </MotionConfig>
  )
}
