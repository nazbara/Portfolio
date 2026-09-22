import { useParams } from 'react-router-dom'
import { getServicePage, serviceCommon } from '@/data/service-pages'
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
 * RelatedInsights.tsx) are built but not used at the moment. Per-page content comes from data/service-pages/
 * (one file per service, grouped by category); testimonials and contact are shared, from serviceCommon. A
 * slug that matches no page shows the 404 page.
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
      <Testimonials label={serviceCommon.testimonialsLabel} />
      <Contact
        variant="dark"
        tone="ink"
        compact
        phone
        checklist={false}
        heading={serviceCommon.contact.heading}
        body={serviceCommon.contact.body}
      />
    </>
  )
}
