import type { ServicePage } from '../types'

/** PLACEHOLDER CONTENT — /services/ai-integration. */
export const aiIntegrationPage: ServicePage = {
  slug: 'ai-integration',
  title: 'AI Integration',
  hero: { label: 'AI Vision', lines: ['AI INTEGRATION', 'BUILT AROUND', 'YOUR GOALS.'] },
  approach: {
    label: 'Approach',
    paragraphs: [
      'Placeholder: how we approach ai integration. We start with your goals, agree what good looks like and only then decide what to make.',
      'Placeholder: what you can expect from working with us: clear communication, a small senior team and work that is easy to keep improving.',
    ],
    cta: { label: 'Talk to us', to: '/contact' },
  },
  includes: {
    label: 'Scope',
    heading: "What's in the package",
    intro: 'Placeholder: every engagement is scoped to your goals. These are the building blocks we combine.',
    items: [
      'Cost-per-call dashboards, so token spend never shows up as a surprise',
      'Prompt version control, so every change is tracked and reversible',
      'Human-in-the-loop checkpoints designed into any workflow that touches a customer',
      "A defined fallback for when the AI is wrong, not just for when the API is down",
    ],
  },
  process: {
    label: 'Process',
    heading: 'Step by step',
    intro: 'Placeholder: a clear path from first conversation to a result your team can run with.',
    steps: ['Discovery and use-case mapping', 'Architecture and prompt design', 'Build and integration', 'Testing and rollout'],
  },
  faq: [
    { q: 'How do we avoid unpredictable API costs?', a: 'We set up cost-per-call dashboards, so token spend is visible and never shows up as a surprise on the bill.' },
    { q: 'What happens when the AI gives a wrong or strange answer?', a: 'We design a defined fallback for exactly that case, not just for when the API itself is down.' },
    { q: 'Can we review or adjust the prompts later?', a: 'Yes — every prompt is version-controlled, so changes are tracked and easy to roll back.' },
    { q: 'Is a human ever in the loop, or is it fully automated?', a: 'For anything customer-facing, we build in human-in-the-loop checkpoints by design, not as an optional safety net.' },
  ],
}
