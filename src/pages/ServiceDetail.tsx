import { useParams } from 'react-router-dom'
import { getServicePage } from '@/data/service-pages'
import { useDocumentTitle } from '@/hooks/useDocumentTitle'
import NotFound from '@/pages/NotFound'
import Contact from '@/sections/Contact'
import Testimonials from '@/sections/Testimonials'
import Approach from '@/sections/service/Approach'
import Faq from '@/sections/service/Faq'
import Includes from '@/sections/service/Includes'
import Process from '@/sections/service/Process'
import ServiceHero from '@/sections/service/ServiceHero'

/**
 * /services/:slug — hero → approach → what's included → process → FAQ → testimonials → dark contact (footer
 * comes from Layout). The related-work and related-articles sections (src/sections/service/RelatedWork.tsx,
 * RelatedInsights.tsx) are built but not used at the moment. Content comes from data/service-pages.ts; a slug
 * that is neither brand-strategy nor a service item / group in services.ts shows the 404 page.
 */
export default function ServiceDetail() {
  const { slug = '' } = useParams()
  const page = getServicePage(slug)
  useDocumentTitle(page ? `${page.title} | Nezbara` : 'Page not found | Nezbara')

  if (!page) return <NotFound />

  return (
    <>
      <ServiceHero page={page} />
      <Approach page={page} />
      <Includes page={page} />
      <Process page={page} />
      <Faq page={page} />
      <Testimonials label={page.testimonialsLabel} />
      <Contact variant="dark" tone="ink" compact phone checklist={false} heading={page.contact.heading} body={page.contact.body} />
    </>
  )
}
