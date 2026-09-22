import { useParams } from 'react-router-dom'
import { getWorkDetailPage } from '@/data/work-detail'
import { useDocumentTitle } from '@/hooks/useDocumentTitle'
import NotFound from '@/pages/NotFound'
import Approach from '@/sections/work-detail/Approach'
import Challenge from '@/sections/work-detail/Challenge'
import Hero from '@/sections/work-detail/Hero'
import Results from '@/sections/work-detail/Results'

/**
 * /work/:slug — hero → challenge → approach → results, mirroring how ServiceDetail.tsx composes
 * its sections. Per-project content comes from data/work-detail.ts; a slug that matches no entry
 * shows the 404 page.
 */
export default function WorkDetail() {
  const { slug = '' } = useParams()
  const page = getWorkDetailPage(slug)
  useDocumentTitle(page ? `${page.hero.client} | Nezbara` : 'Page not found | Nezbara')

  if (!page) return <NotFound />

  return (
    <>
      <Hero page={page} />
      <Challenge page={page} />
      <Approach page={page} />
      <Results page={page} />
    </>
  )
}
