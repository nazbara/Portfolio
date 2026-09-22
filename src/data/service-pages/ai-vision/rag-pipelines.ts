import type { ServicePage } from '../types'

/** PLACEHOLDER CONTENT — /services/rag-pipelines. */
export const ragPipelinesPage: ServicePage = {
  slug: 'rag-pipelines',
  title: 'RAG Pipelines',
  hero: { label: 'AI Vision', lines: ['RAG PIPELINES', 'BUILT AROUND', 'YOUR GOALS.'] },
  approach: {
    label: 'Approach',
    paragraphs: [
      'Placeholder: how we approach rag pipelines. We start with your goals, agree what good looks like and only then decide what to make.',
      'Placeholder: what you can expect from working with us: clear communication, a small senior team and work that is easy to keep improving.',
    ],
    cta: { label: 'Talk to us', to: '/contact' },
  },
  includes: {
    label: 'Scope',
    heading: "What's in the package",
    intro: 'Placeholder: every engagement is scoped to your goals. These are the building blocks we combine.',
    items: [
      'Retrieval accuracy tested against your real, messiest documents — not a clean demo set',
      'Source citations built into every answer, so outputs are checkable, not just plausible',
      'A chunking strategy tuned to your actual content structure, not a generic default',
      'A re-indexing pipeline, so new documents show up in answers without a manual rebuild',
    ],
  },
  process: {
    label: 'Process',
    heading: 'Step by step',
    intro: 'Placeholder: a clear path from first conversation to a result your team can run with.',
    steps: ['Data audit and source mapping', 'Pipeline design and chunking strategy', 'Build and retrieval testing', 'Deployment and monitoring'],
  },
  faq: [
    { q: 'Will it work with our messy, real-world documents?', a: 'We test retrieval accuracy against your actual documents, not a clean demo dataset, before calling it done.' },
    { q: 'How do we know the answers are trustworthy?', a: 'Every answer includes source citations, so outputs are checkable rather than just plausible-sounding.' },
    { q: 'What happens when we add new documents later?', a: 'A re-indexing pipeline picks up new documents automatically, so answers stay current without a manual rebuild.' },
    { q: 'Is the chunking strategy generic, or built for our content?', a: "It's tuned to your specific content structure — a generic default rarely retrieves well against real documents." },
  ],
}
