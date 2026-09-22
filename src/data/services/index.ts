/**
 * Each service group lives in its own file (strategy.ts, creative.ts, digital.ts, growth.ts,
 * ai-vision.ts) so a group can be edited without touching the others. This file just combines
 * them in the order they should appear in the navbar dropdown, footer and Services section.
 */
import { strategyGroup } from './strategy'
import { creativeGroup } from './creative'
import { digitalGroup } from './digital'
import { growthGroup } from './growth'
import { aiVisionGroup } from './ai-vision'

export type { ServiceItem, ServiceGroup } from './types'

/** PLACEHOLDER heading for the Services section. */
export const servicesHeading = 'Services.'

export const serviceGroups = [strategyGroup, creativeGroup, digitalGroup, growthGroup, aiVisionGroup]

export const serviceHref = (slug: string) => `/services/${slug}`
