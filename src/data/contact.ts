/**
 * PLACEHOLDER CONTENT — copy for the Contact section. Swap the wording freely; the shape is what
 * Contact.tsx reads.
 */
export const contactHeading = 'Have a project in mind?'

export const contactIntro = "Tell us a little about it and we'll reply within one business day."

export const contactChecklist = [
  {
    title: 'Project scoping',
    description: 'Placeholder: a one-line note on how the first conversation shapes the brief.',
  },
  {
    title: 'Team and process',
    description: 'Placeholder: a one-line note on who you will work with and how the work runs.',
  },
] as const

/** Form copy, kept here so wording changes don't touch the component. */
export const contactForm = {
  fields: {
    name: { label: 'Name', placeholder: 'Name *' },
    email: { label: 'Email', placeholder: 'Email *' },
    phone: { label: 'Phone', placeholder: 'Phone *' },
    message: { label: 'Tell us about your project', placeholder: 'Tell us about your project *' },
  },
  submit: 'Send message',
  sending: 'Sending...',
  errors: {
    nameRequired: 'Please enter your name.',
    emailRequired: 'Please enter your email address.',
    emailInvalid: 'That email address doesn’t look right.',
    phoneRequired: 'Please enter your phone number.',
    phoneInvalid: 'That phone number doesn’t look right.',
    messageRequired: 'Please tell us a little about your project.',
    messageShort: 'Please write at least 10 characters.',
    send: 'Something went wrong and your message was not sent. Your details are still here.',
  },
  retry: 'Try again',
  successTitle: 'Thank you.',
  successBody: 'Your message is on its way. We’ll reply within one business day.',
  another: 'Send another',
} as const
