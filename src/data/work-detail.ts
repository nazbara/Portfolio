/**
 * Case-study content for /work/:slug — one entry per slug in data/work.ts. Kept as a single file
 * (unlike data/service-pages/*, which is split per category) since there are only six of these;
 * split it out the same way if the list grows. The hero image is NOT duplicated here — it reuses
 * getWorkImage(slug) from lib/media.ts, the same image already used on the grid/carousel.
 */

export interface WorkDetailPage {
  slug: string
  hero: {
    /** Uppercase eyebrow, joined with " · ". */
    categories: string[]
    /** Each line renders in its own block, alternating text-fg / text-fg-dim. */
    headingLines: string[]
    /** Bullet + client name under the heading. */
    client: string
  }
  challenge: {
    label: string
    /** Inline segments of one big statement; muted:true renders dimmer (text-fg-muted). */
    statement: { text: string; muted?: boolean }[]
  }
  approach: {
    label: string
    heading: string
    intro: string
    /** Exactly 2 cards. */
    cards: { number: string; title: string; description: string }[]
  }
  results: {
    label: string
    statement: { text: string; muted?: boolean }[]
    stats: { value: string; label: string }[]
    cards: { title: string; label: string; description: string }[]
  }
}

export const workDetailPages: WorkDetailPage[] = [
  {
    // TODO: replace with real copy/stats — placeholder case study derived from data/work.ts's categories & summary.
    slug: 'jcs-ilearn',
    hero: {
      categories: ['EdTech', 'Product', 'Learning Platform'],
      headingLines: ['Turning Learners', 'Into Job-Ready', 'Talent, One', 'Skill At A Time'],
      client: 'JCS iLearn',
    },
    challenge: {
      label: 'The Challenge',
      statement: [
        { text: 'JCS needed a platform that could turn scattered course content into ' },
        { text: 'a structured, trackable learning journey', muted: true },
        { text: ' — one where learners, trainers and employers could all ' },
        { text: 'see real progress', muted: true },
        { text: ', not just completion certificates.' },
      ],
    },
    approach: {
      label: 'Our Approach',
      heading: 'Programs Built Around Outcomes',
      intro:
        'We designed the platform around three roles — learners, trainers and admins — so every screen shows exactly what that person needs to act on next, from an assessment due today to a certificate ready to issue.',
      cards: [
        {
          number: '01',
          title: 'Structured Learning Paths',
          description: "Programs are broken into modules with clear milestones, so learners always know what's next and how far they've come.",
        },
        {
          number: '02',
          title: 'Built-In Assessment & Certification',
          description: 'Coding, MCQ and psychometric assessments feed directly into a certificate a learner can show an employer.',
        },
      ],
    },
    results: {
      label: 'The Result',
      statement: [
        { text: 'Since launch, JCS iLearn has become the ' },
        { text: 'day-to-day home', muted: true },
        { text: ' for its learners — not a course library they open once and forget.' },
      ],
      stats: [
        { value: '3X', label: 'Increase in learners completing a full program end-to-end' },
        { value: '92%', label: 'Of learners who said the platform made progress easy to track' },
      ],
      cards: [
        {
          title: 'Consistent Engagement',
          label: 'Retention',
          description: 'Weekly active learners grew steadily after launch as the structured paths gave people a reason to come back.',
        },
        {
          title: 'Employer Confidence',
          label: 'Certification',
          description: 'Certificates tied to real assessments made it easier for learners to point to proof of a specific skill.',
        },
      ],
    },
  },
  {
    // TODO: replace with real copy/stats — placeholder case study derived from data/work.ts's categories & summary.
    slug: 'edu-saas',
    hero: {
      categories: ['EdTech', 'SaaS', 'College Platform'],
      headingLines: ['Classroom And', 'Faculty, Finally', 'Running On', 'One Platform'],
      client: 'EDU SaaS',
    },
    challenge: {
      label: 'The Challenge',
      statement: [
        { text: 'Classroom activity and faculty operations lived in ' },
        { text: 'separate, disconnected tools', muted: true },
        { text: ' — the college needed a single platform where ' },
        { text: 'both sides stayed in sync', muted: true },
        { text: '.' },
      ],
    },
    approach: {
      label: 'Our Approach',
      heading: 'One Platform, Two Sides',
      intro:
        'We designed the platform around the two groups who actually run a college day to day, so classroom activity and faculty operations feed the same system instead of two disconnected ones.',
      cards: [
        {
          number: '01',
          title: 'Unified Classroom & Faculty',
          description: 'Classroom activity and faculty operations share one platform, so updates on either side stay in sync automatically.',
        },
        {
          number: '02',
          title: 'Built For One College',
          description: "The platform is shaped around this college's specific structure and workflows, not a generic one-size-fits-all template.",
        },
      ],
    },
    results: {
      label: 'The Result',
      statement: [
        { text: 'The result is a platform the college runs its ' },
        { text: 'day-to-day classroom and faculty work', muted: true },
        { text: ' through, instead of juggling separate tools.' },
      ],
      stats: [
        { value: '1', label: 'Platform replacing separate classroom and faculty tools' },
        { value: '100%', label: 'Of classroom and faculty data kept in sync' },
      ],
      cards: [
        {
          title: 'Single Source Of Truth',
          label: 'Data',
          description: 'Classroom and faculty records live in one place, so nothing falls out of sync between the two sides.',
        },
        {
          title: 'Built To Extend',
          label: 'Maintainability',
          description: 'Adding a new workflow is a content change, not a design decision — the platform already knows how to hold it.',
        },
      ],
    },
  },
  {
    // TODO: replace with real copy/stats — placeholder case study derived from data/work.ts's categories & summary.
    slug: 'tharun-portfolio',
    hero: {
      categories: ['Portfolio', 'Web Design', 'Personal Brand'],
      headingLines: ['A Portfolio', 'Built Around', 'The Work, Not', 'The Template'],
      client: 'Tharun',
    },
    challenge: {
      label: 'The Challenge',
      statement: [
        { text: "Tharun's earlier site looked like every other template — " },
        { text: 'nothing in it said who he was', muted: true },
        { text: ' or made his strongest projects ' },
        { text: 'easy to find', muted: true },
        { text: '.' },
      ],
    },
    approach: {
      label: 'Our Approach',
      heading: 'Design Gets Out Of The Way',
      intro:
        'We kept the interface quiet and let the work carry the page — clear typography, generous spacing and a navigation that gets a visitor to a project in one click.',
      cards: [
        {
          number: '01',
          title: 'One-Click Navigation',
          description: 'Every section is reachable from the first screen, so a recruiter skimming the page never has to hunt for the work.',
        },
        {
          number: '02',
          title: 'Responsive By Default',
          description: 'The layout was built mobile-first, since most first visits to a shared portfolio link happen on a phone.',
        },
      ],
    },
    results: {
      label: 'The Result',
      statement: [
        { text: 'Tharun now has a site he can point to directly instead of ' },
        { text: 'a resume PDF', muted: true },
        { text: ' — one that shows the work instead of just listing it.' },
      ],
      stats: [
        { value: '100', label: 'Mobile Lighthouse score across core pages' },
        { value: '4', label: 'Featured projects now easy to reach in a single click' },
      ],
      cards: [
        {
          title: 'Clear Personal Brand',
          label: 'Positioning',
          description: 'The site now reads as one coherent introduction, not a list of unrelated project links.',
        },
        {
          title: 'Shareable By Design',
          label: 'Distribution',
          description: 'A clean, fast link Tharun can send directly to recruiters, clients or collaborators.',
        },
      ],
    },
  },
  {
    // TODO: replace with real copy/stats — placeholder case study derived from data/work.ts's categories & summary.
    slug: 'ams-bluekode',
    hero: {
      categories: ['Real Estate', 'SaaS', 'Community Management'],
      headingLines: ['Running A', 'Community Without', 'The Spreadsheet', 'Chaos'],
      client: 'AMS — Bluekode',
    },
    challenge: {
      label: 'The Challenge',
      statement: [
        { text: 'Managing an apartment community meant ' },
        { text: 'chasing maintenance payments, complaints and notices', muted: true },
        { text: ' across WhatsApp groups, spreadsheets and paper notices — with ' },
        { text: 'no single source of truth', muted: true },
        { text: ' for residents or admins.' },
      ],
    },
    approach: {
      label: 'Our Approach',
      heading: 'One Platform For Residents And Admins',
      intro:
        'We split the platform into two clear experiences — a resident view for day-to-day requests and an admin view for running the community — sharing the same underlying data.',
      cards: [
        {
          number: '01',
          title: 'Resident Self-Service',
          description: 'Residents can raise complaints, pay dues and check notices without calling the admin office for every small thing.',
        },
        {
          number: '02',
          title: 'Admin Oversight Dashboard',
          description: 'Admins see maintenance status, dues and open complaints across the whole community from one screen.',
        },
      ],
    },
    results: {
      label: 'The Result',
      statement: [
        { text: 'Day-to-day society management moved ' },
        { text: 'off spreadsheets and group chats', muted: true },
        { text: ' and onto a system both residents and admins actually check.' },
      ],
      stats: [
        { value: '60%', label: 'Fewer maintenance calls handled manually by admin staff' },
        { value: '2X', label: 'Faster average time to resolve a resident complaint' },
      ],
      cards: [
        {
          title: 'Transparent Dues',
          label: 'Payments',
          description: 'Residents can see exactly what they owe and pay directly in the platform, cutting down disputes.',
        },
        {
          title: 'Faster Resolutions',
          label: 'Operations',
          description: 'Complaints are tracked from raised to resolved, so nothing quietly gets forgotten.',
        },
      ],
    },
  },
  {
    // TODO: replace with real copy/stats — placeholder case study derived from data/work.ts's categories & summary.
    slug: 'jcs-ilearn-portal',
    hero: {
      categories: ['EdTech', 'Assessment', 'Testing Platform'],
      headingLines: ['Testing That', 'Actually Proves', 'What A Learner', 'Can Do'],
      client: 'JCS iLearn — Assessment Portal',
    },
    challenge: {
      label: 'The Challenge',
      statement: [
        { text: 'JCS needed assessments that went beyond ' },
        { text: 'multiple-choice guesswork', muted: true },
        { text: ' — a way to test real coding ability and softer psychometric traits ' },
        { text: 'without three separate tools', muted: true },
        { text: '.' },
      ],
    },
    approach: {
      label: 'Our Approach',
      heading: 'Three Test Types, One Portal',
      intro:
        'We built a single assessment engine that could run MCQ, live coding and psychometric tests under one roof, so results feed back into the same learner profile instead of three disconnected reports.',
      cards: [
        {
          number: '01',
          title: 'In-Browser Code Execution',
          description: 'Coding tests run and grade candidate code directly in the browser, with no separate compiler setup needed.',
        },
        {
          number: '02',
          title: 'Unified Result Reporting',
          description: 'MCQ, coding and psychometric scores roll up into one report, so a reviewer sees the whole candidate at a glance.',
        },
      ],
    },
    results: {
      label: 'The Result',
      statement: [
        { text: 'The portal now runs ' },
        { text: 'every assessment JCS offers', muted: true },
        { text: ', giving trainers one place to set, grade and report on tests.' },
      ],
      stats: [
        { value: '3', label: 'Assessment types running on a single unified portal' },
        { value: '70%', label: 'Less time spent manually compiling test results' },
      ],
      cards: [
        {
          title: 'Reliable Grading',
          label: 'Assessment',
          description: 'Automated grading removed the manual bottleneck of checking coding submissions by hand.',
        },
        {
          title: 'Actionable Reports',
          label: 'Insights',
          description: "Trainers get a clear, combined view of a candidate's technical and psychometric results.",
        },
      ],
    },
  },
  {
    // TODO: replace with real copy/stats — placeholder case study derived from data/work.ts's categories & summary.
    slug: 'civicflow-ai',
    hero: {
      categories: ['Civic Tech', 'AI', 'Public Sector'],
      headingLines: ['Turning Civic', 'Complaints Into', 'Issues That', 'Actually Get Fixed'],
      client: 'CivicFlow AI',
    },
    challenge: {
      label: 'The Challenge',
      statement: [
        { text: 'Civic issues reported by residents often ' },
        { text: 'disappeared into a queue', muted: true },
        { text: ' with no clear owner, no priority and ' },
        { text: 'no way to track progress', muted: true },
        { text: ' back to the person who reported it.' },
      ],
    },
    approach: {
      label: 'Our Approach',
      heading: 'AI That Routes, Not Just Records',
      intro:
        'We built a pipeline that uses AI to read, categorize and prioritize each report the moment it comes in, then routes it to the right team automatically instead of sitting in a shared inbox.',
      cards: [
        {
          number: '01',
          title: 'Automatic Triage',
          description: 'Incoming reports are classified and prioritized by AI, so urgent issues surface immediately instead of waiting in a queue.',
        },
        {
          number: '02',
          title: 'End-To-End Tracking',
          description: "Every report is trackable from submitted to resolved, so residents can see it isn't disappearing into a void.",
        },
      ],
    },
    results: {
      label: 'The Result',
      statement: [
        { text: 'Civic teams now work from ' },
        { text: 'one prioritized queue', muted: true },
        { text: ' instead of an inbox, and residents can see their report move.' },
      ],
      stats: [
        { value: '45%', label: 'Faster average time from report to assigned owner' },
        { value: '80%', label: 'Of reports auto-categorized correctly without manual review' },
      ],
      cards: [
        {
          title: 'Faster Response',
          label: 'Operations',
          description: 'Automatic routing cut the time between a report landing and someone being responsible for it.',
        },
        {
          title: 'Resident Trust',
          label: 'Transparency',
          description: 'Visible status tracking gave residents a reason to keep reporting instead of giving up on the system.',
        },
      ],
    },
  },
]

const pagesBySlug: Record<string, WorkDetailPage> = Object.fromEntries(workDetailPages.map((page) => [page.slug, page]))

/** The case-study page for /work/:slug, or undefined when the slug matches no entry (the route then shows the 404 page). */
export function getWorkDetailPage(slug: string): WorkDetailPage | undefined {
  return pagesBySlug[slug]
}
