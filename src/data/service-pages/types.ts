export type ServicePage = {
  slug: string
  title: string
  hero: { label: string; lines: string[] }
  approach: { label: string; paragraphs: string[]; cta: { label: string; to: string } }
  includes: { label: string; heading: string; intro: string; items: string[] }
  process: { label: string; heading: string; intro: string; steps: string[] }
  faq: { q: string; a: string }[]
}
