/**
 * Shared across every /services/:slug page: testimonials, the FAQ/related-section headings and
 * the closing contact block all stay the same regardless of which service page you're on. Only
 * the hero, approach, scope, process and FAQ content above them is page-specific — see the
 * strategy/, creative/, digital/, growth/ and ai-vision/ folders.
 */
export const serviceCommon = {
  relatedWorkHeading: 'Related work',
  relatedArticlesHeading: 'Related articles',
  faqHeading: "FAQ'S",
  testimonialsLabel: 'Kind words',
  contact: {
    heading: 'Ready to get started?',
    body: "Tell us where you are and where you want to be. We'll suggest a sensible first step.",
  },
} as const
