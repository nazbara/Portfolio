import { site } from '@/data/site'

const sections = [
  {
    heading: '1. Information We Gather',
    intro: 'We may collect the following categories of data:',
    items: [
      'Personal Details: Your name, email address, phone number, company, and any other information you provide when reaching out to us.',
      'Technical Data: IP address, browser and device details, and how you navigate our site.',
      'Cookies and Analytics: We use cookies to improve your experience on the site and understand traffic patterns.',
    ],
  },
  {
    heading: '2. How We Use Your Information',
    intro: 'The data we collect helps us to:',
    items: [
      'Deliver and enhance our services.',
      'Reply to questions and support requests.',
      'Tailor your experience and improve how the site functions.',
      'Understand usage trends and site performance.',
      "Share updates, newsletters, or offers — only if you've opted in.",
    ],
  },
  {
    heading: '3. Keeping Your Information Secure',
    paragraph:
      "We take reasonable precautions to protect your personal data from unauthorized access, misuse, disclosure, or loss. That said, no online transmission method is completely secure, so we can't promise absolute protection.",
  },
  {
    heading: '4. Who We Share Data With',
    intro: 'We never sell or rent out your personal information. We may, however, share it with:',
    items: [
      'Trusted partners who help us run the website, handle marketing, or provide analytics.',
      'Authorities or regulators, where legally required.',
    ],
  },
  {
    heading: '5. Your Choices and Rights',
    intro: "You're entitled to:",
    items: [
      'Ask to view, correct, or delete your personal information.',
      'Unsubscribe from promotional emails at any time via the link provided.',
      'Turn off cookies through your browser settings.',
    ],
  },
  {
    heading: '6. Links to Other Sites',
    paragraph:
      "Our site may link out to external websites. We aren't responsible for how those sites handle privacy, so we recommend checking their policies directly.",
  },
  {
    heading: '7. Privacy for Minors',
    paragraph: "Our services aren't designed for anyone under 13, and we don't knowingly gather information from children.",
  },
  {
    heading: '8. Updates to This Policy',
    paragraph: 'This policy may be revised periodically. Any updates will appear on this page along with a new effective date.',
  },
] as const

export default function Privacy() {
  return (
    <section
      data-theme="dark"
      className="bg-canvas pt-[calc(max(var(--scrim-h),var(--header-h))+3rem)] pb-(--section-py)"
    >
      <div className="site-container">
        <div className="max-w-(--container-narrow)">
          <h1 className="text-h1 font-bold tracking-[-0.02em]">Privacy Policy</h1>

          <p className="mt-6 text-lead font-light text-fg-muted">
            Nezbara (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) values your privacy and is dedicated to
            keeping the personal information you share with us secure. This Privacy Policy outlines how we gather,
            use, and protect your data when you visit our website (www.nezbara.com) and make use of our services.
          </p>

          <div className="mt-14 space-y-12 lg:mt-20 lg:space-y-16">
            {sections.map((s) => (
              <div key={s.heading}>
                <h2 className="border-b border-line pb-4 text-h3 font-bold tracking-[-0.02em]">{s.heading}</h2>
                {'intro' in s && <p className="mt-4 text-body text-fg-muted">{s.intro}</p>}
                {'items' in s && (
                  <ul className="mt-4 space-y-3">
                    {s.items.map((item) => {
                      const [label, ...rest] = item.split(': ')
                      const description = rest.join(': ')
                      return (
                        <li key={item} className="flex gap-3 text-body text-fg-muted">
                          <span aria-hidden="true" className="mt-[0.7em] size-1.5 shrink-0 rounded-full bg-fg-dim" />
                          <span>
                            {description ? (
                              <>
                                <span className="font-bold text-fg">{label}:</span> {description}
                              </>
                            ) : (
                              label
                            )}
                          </span>
                        </li>
                      )
                    })}
                  </ul>
                )}
                {'paragraph' in s && <p className="mt-4 text-body text-fg-muted">{s.paragraph}</p>}
              </div>
            ))}

            <div>
              <h2 className="border-b border-line pb-4 text-h3 font-bold tracking-[-0.02em]">9. Get in Touch</h2>
              <p className="mt-4 text-body text-fg-muted">For any questions about this Privacy Policy, reach out to:</p>
              <p className="mt-4 text-body text-fg">
                {site.name}
                <br />
                Email: <a href={`mailto:${site.email}`} className="underline underline-offset-2">{site.email}</a>
                <br />
                Website: <a href="https://www.nezbara.com" className="underline underline-offset-2">www.nezbara.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
