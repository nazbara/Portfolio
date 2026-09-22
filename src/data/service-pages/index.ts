/**
 * Every /services/:slug page is its own literal file, grouped by service category (strategy/,
 * creative/, digital/, growth/, ai-vision/) so a page's content can be edited on its own without
 * touching the others. Testimonials, the FAQ/related-section headings and the closing contact
 * block are shared across all of them — see common.ts.
 */
import { strategyPage } from './strategy/strategy'
import { brandStrategyPage } from './strategy/brand-strategy'
import { marketResearchPage } from './strategy/market-research'
import { positioningPage } from './strategy/positioning'
import { creativePage } from './creative/creative'
import { identityDesignPage } from './creative/identity-design'
import { campaignsPage } from './creative/campaigns'
import { videoProductionPage } from './creative/video-production'
import { digitalPage } from './digital/digital'
import { webDesignPage } from './digital/web-design'
import { webDevelopmentPage } from './digital/web-development'
import { landingPagesPage } from './digital/landing-pages'
import { growthPage } from './growth/growth'
import { seoPage } from './growth/seo'
import { socialMediaPage } from './growth/social-media'
import { performanceMarketingPage } from './growth/performance-marketing'
import { aiVisionPage } from './ai-vision/ai-vision'
import { mlSystemsPage } from './ai-vision/ml-systems'
import { aiIntegrationPage } from './ai-vision/ai-integration'
import { ragPipelinesPage } from './ai-vision/rag-pipelines'

export type { ServicePage } from './types'
export { serviceCommon } from './common'

const pagesBySlug: Record<string, import('./types').ServicePage> = {
  [strategyPage.slug]: strategyPage,
  [brandStrategyPage.slug]: brandStrategyPage,
  [marketResearchPage.slug]: marketResearchPage,
  [positioningPage.slug]: positioningPage,
  [creativePage.slug]: creativePage,
  [identityDesignPage.slug]: identityDesignPage,
  [campaignsPage.slug]: campaignsPage,
  [videoProductionPage.slug]: videoProductionPage,
  [digitalPage.slug]: digitalPage,
  [webDesignPage.slug]: webDesignPage,
  [webDevelopmentPage.slug]: webDevelopmentPage,
  [landingPagesPage.slug]: landingPagesPage,
  [growthPage.slug]: growthPage,
  [seoPage.slug]: seoPage,
  [socialMediaPage.slug]: socialMediaPage,
  [performanceMarketingPage.slug]: performanceMarketingPage,
  [aiVisionPage.slug]: aiVisionPage,
  [mlSystemsPage.slug]: mlSystemsPage,
  [aiIntegrationPage.slug]: aiIntegrationPage,
  [ragPipelinesPage.slug]: ragPipelinesPage,
}

/** The page for /services/:slug, or undefined when the slug matches no service page (the route then shows the 404 page). */
export function getServicePage(slug: string) {
  return pagesBySlug[slug]
}
