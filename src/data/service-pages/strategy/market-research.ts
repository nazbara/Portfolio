import type { ServicePage } from '../types'

/** PLACEHOLDER CONTENT — /services/market-research. */
export const marketResearchPage: ServicePage = {
  slug: 'market-research',
  title: 'Market Research',
  hero: { label: 'Strategy', lines: ['KNOW YOUR MARKET', 'BEFORE', 'YOU BET ON IT.'] },
  approach: {
    label: 'Approach',
    paragraphs: [
      'We start with your goals, not a template. Before any interviews happen, we agree what "good" looks like for you — what decision this research needs to support, and what evidence would actually move it.',
      'Clear beats clever most of the time. A well-designed report or deck earns attention because people can follow it, not just because it looks polished.',
    ],
    cta: { label: 'Talk to us', to: '/contact' },
  },
  includes: {
    label: 'Scope',
    heading: "What's in the package",
    intro: 'Every engagement is scoped to your goals. These are the building blocks we combine.',
    items: [
      'Live customer interviews we sit in on — not a survey link and a spreadsheet',
      'A buying-trigger map — the exact moment prospects decide to act, not just who they are',
      'Competitor mystery-shopping, so you see exactly where their funnel wins or loses a customer',
      'A go/no-go scorecard that gives you a decision, not another report to interpret',
    ],
  },
  process: {
    label: 'Process',
    heading: 'Step by step',
    intro: 'A clear path from first conversation to a result your team can run with.',
    steps: ['Scoping and hypotheses', 'Interviews and data collection', 'Analysis and insight synthesis', 'Findings and recommendations'],
  },
  faq: [
    { q: 'Can you do this if we only have a small customer base to interview?', a: 'Yes — with a small base we lean more on structured interviews than surveys, since a handful of real conversations tells you more than a low-response-rate form.' },
    { q: 'How is this different from a generic industry report?', a: 'An industry report tells you about the market. This tells you why your specific customers buy, hesitate, or churn.' },
    { q: 'Do you talk to our customers directly, or just analyze data we give you?', a: "Both, where possible — we run or sit in on real conversations rather than working only from what's already in your CRM." },
    { q: 'What format do we get the findings in?', a: "A short report with a go/no-go scorecard, not a hundred-slide deck nobody opens twice." },
  ],
}
