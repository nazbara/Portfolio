import type { ServicePage } from '../types'

/** PLACEHOLDER CONTENT — /services/ai-integration. */
export const aiIntegrationPage: ServicePage = {
  slug: 'ai-integration',
  title: 'AI Integration',
  hero: { label: 'AI Vision', lines: ['Automated', 'response', 'that actually helps.'] },
  approach: {
    label: 'Approach',
    paragraphs: [
      'A chatbot or virtual assistant, built well, gives visitors a useful first response instead of a scripted dead end. A bot that cannot answer a real question just adds a frustrating step before someone gives up. We design conversational flows around the questions your customers actually ask, not a generic FAQ tree.',
      'The goal is a first response that resolves or routes, so people get help fast and the leads worth capturing get captured.',
    ],
    cta: { label: 'Talk to us', to: '/contact' },
  },
  includes: {
    label: 'Scope',
    heading: "What's in the package",
    intro: 'Every message is crafted to build trust and authority across all your stakeholder groups.',
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
    intro: 'A strategic approach to unifying your corporate voice and messaging framework.',
    steps: ['Discovery and use-case mapping', 'Architecture and prompt design', 'Build and integration', 'Testing and rollout'],
  },
  faq: [
    { q: 'How do we avoid unpredictable API costs?', a: 'We set up cost-per-call dashboards, so token spend is visible and never shows up as a surprise on the bill.' },
    { q: 'What happens when the AI gives a wrong or strange answer?', a: 'We design a defined fallback for exactly that case, not just for when the API itself is down.' },
    { q: 'Can we review or adjust the prompts later?', a: 'Yes — every prompt is version-controlled, so changes are tracked and easy to roll back.' },
    { q: 'Is a human ever in the loop, or is it fully automated?', a: 'For anything customer-facing, we build in human-in-the-loop checkpoints by design, not as an optional safety net.' },
  ],
}
