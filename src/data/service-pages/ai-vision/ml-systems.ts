import type { ServicePage } from '../types'

/** PLACEHOLDER CONTENT — /services/ml-systems. */
export const mlSystemsPage: ServicePage = {
  slug: 'ml-systems',
  title: 'ML Systems',
  hero: { label: 'AI Vision', lines: ['BUILT AROUND YOUR', 'REAL WORLD DATA,', 'NOT A DEMO.'] },
  approach: {
    label: 'Approach',
    paragraphs: [
      'We start with your goals, not a model architecture. Before any training begins, we agree what "good" looks like — the accuracy that actually matters for your use case, and what happens when the model is inevitably wrong.',
      'Working with us means direct access to a small senior team, honest conversations about what ML can and cannot do, and systems built so your team can own them long after we have shipped.',
    ],
    cta: { label: 'Talk to us', to: '/contact' },
  },
  includes: {
    label: 'Scope',
    heading: "What's in the package",
    intro: 'Every engagement is scoped to your goals. These are the building blocks we combine.',
    items: [
      'An evaluation harness built alongside the model, not bolted on before ship',
      'Data drift monitoring, so you know before a model quietly degrades',
      'A fallback and rollback plan for every model that reaches production',
      "Documentation written so your team can retrain it — not a black box only we understand",
    ],
  },
  process: {
    label: 'Process',
    heading: 'Step by step',
    intro: 'A clear path from first conversation to a result your team can run with.',
    steps: ['Problem scoping and data audit', 'Model design and experimentation', 'Training and evaluation', 'Deployment and monitoring'],
  },
  faq: [
    { q: 'How do you know the model will keep working after launch?', a: "We build data drift monitoring in from the start, so you're alerted before a model quietly degrades in production." },
    { q: 'What if the model gets something wrong in production?', a: "Every model ships with a fallback and rollback plan, so a bad prediction doesn't take down the whole system." },
    { q: 'Will our team be able to maintain this without you?', a: 'Yes — documentation is written for your team to retrain and maintain the model, not as a black box only we understand.' },
    { q: "How do you test the model before it's live?", a: 'We build an evaluation harness alongside the model itself, not as an afterthought before shipping.' },
  ],
}
