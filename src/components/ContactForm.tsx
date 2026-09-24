import { useEffect, useId, useRef, useState, type FormEvent, type RefObject } from 'react'
import ArrowIcon from '@/components/ArrowIcon'
import PillButton from '@/components/PillButton'
import { contactForm as copy } from '@/data/contact'

type FieldName = 'name' | 'email' | 'phone' | 'message'
type Values = Record<FieldName, string>
type Errors = Partial<Record<FieldName, string>>
type Status = 'idle' | 'sending' | 'success' | 'error'
type Variant = 'light' | 'dark'

const EMPTY: Values = { name: '', email: '', phone: '', message: '' }
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
/** Digits, spaces, dots, dashes, parentheses and an optional leading +, with 7–15 actual digits. */
const PHONE_RE = /^\+?[\d\s().-]{7,24}$/
const phoneDigits = (v: string) => v.replace(/\D/g, '').length
const MIN_MESSAGE = 10
/** A human can't read the form and fill three fields in under this; scripts can. */
const MIN_FORM_MS = 3000
const SIMULATED_MS = 800

function validate(v: Values, withPhone: boolean): Errors {
  const e: Errors = {}
  if (!v.name.trim()) e.name = copy.errors.nameRequired
  if (!v.email.trim()) e.email = copy.errors.emailRequired
  else if (!EMAIL_RE.test(v.email.trim())) e.email = copy.errors.emailInvalid
  if (withPhone) {
    const phone = v.phone.trim()
    if (!phone) e.phone = copy.errors.phoneRequired
    else if (!PHONE_RE.test(phone) || phoneDigits(phone) < 7 || phoneDigits(phone) > 15) e.phone = copy.errors.phoneInvalid
  }
  if (!v.message.trim()) e.message = copy.errors.messageRequired
  else if (v.message.trim().length < MIN_MESSAGE) e.message = copy.errors.messageShort
  return e
}

/** POSTs JSON to VITE_CONTACT_ENDPOINT; with none configured it pretends to, so the UI works before a backend exists. */
async function send(values: Values, withPhone: boolean): Promise<void> {
  const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT
  if (!endpoint) {
    if (import.meta.env.DEV) console.info('contact form: no endpoint configured, submission simulated')
    await new Promise((resolve) => setTimeout(resolve, SIMULATED_MS))
    return
  }
  const res = await fetch(endpoint, {
    method: 'POST',
    // text/plain avoids the CORS preflight application/json would trigger; Apps Script still JSON.parses the body fine.
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify({
      name: values.name.trim(),
      email: values.email.trim(),
      ...(withPhone ? { phone: values.phone.trim() } : {}),
      message: values.message.trim(),
    }),
  })
  if (!res.ok) throw new Error(`contact endpoint responded ${res.status}`)
}

/** Light: white fields with a 1px grey border. Dark: fields at the section colour with a faint white border. */
const fieldBase: Record<Variant, string> = {
  light:
    'block w-full rounded-(--r-field) border border-field-line bg-paper px-4 text-(length:--fs-field) font-light text-fg placeholder:text-grey-500 aria-invalid:border-danger lg:px-[1.6vw]',
  dark: 'block w-full rounded-(--r-field) border border-(--dark-field-line) bg-black/35 px-4 text-(length:--fs-field) font-light text-fg placeholder:text-[#6b7083] aria-invalid:border-danger-on-dark lg:px-[1.6vw]',
}

function FieldError({ id, message, dark }: { id: string; message?: string; dark: boolean }) {
  if (!message) return null
  return (
    <p id={id} className={`mt-2 text-(length:--fs-check-desc) leading-[1.35] font-medium ${dark ? 'text-danger-on-dark' : 'text-danger'}`}>
      {message}
    </p>
  )
}

/**
 * Name / email / (optional phone) / message. Validation is hand-rolled (required, simple email regex,
 * phone 7–15 digits when the field is shown, message ≥ 10 characters) and shown inline on blur and on submit with aria-invalid + aria-describedby; a failed
 * submit focuses the first invalid field. Anti-spam without a library: a hidden honeypot field
 * (filled ⇒ the submission is dropped but looks successful) and a minimum time on the form (faster
 * than 3s ⇒ dropped without a word — press again). States: idle → sending (button disabled) →
 * success (card content replaced, "Send another") or error (inline message + retry, values kept).
 * Status changes are announced through a polite live region.
 */
export default function ContactForm({ variant = 'light', phone: withPhone = false }: { variant?: Variant; phone?: boolean }) {
  const dark = variant === 'dark'
  const uid = useId()
  const [values, setValues] = useState<Values>(EMPTY)
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<Status>('idle')
  const [cardHeight, setCardHeight] = useState<number>()

  const formRef = useRef<HTMLFormElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const nameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const phoneRef = useRef<HTMLInputElement>(null)
  const messageRef = useRef<HTMLTextAreaElement>(null)
  const honeypotRef = useRef<HTMLInputElement>(null)
  const thanksRef = useRef<HTMLHeadingElement>(null)
  const openedAt = useRef(0)
  const fieldRefs = { name: nameRef, email: emailRef, phone: phoneRef, message: messageRef }
  const fields: FieldName[] = withPhone ? ['name', 'email', 'phone', 'message'] : ['name', 'email', 'message']

  useEffect(() => {
    openedAt.current = Date.now()
  }, [])

  useEffect(() => {
    if (status === 'success') thanksRef.current?.focus()
  }, [status])

  const id = (name: string) => `${uid}-${name}`

  const update = (field: FieldName, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }))
    // Once a field is flagged, clear or refresh its message while the user fixes it.
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: validate({ ...values, [field]: value }, withPhone)[field] }))
  }

  const blur = (field: FieldName) => {
    setErrors((prev) => ({ ...prev, [field]: validate(values, withPhone)[field] }))
  }

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (status === 'sending') return

    const found = validate(values, withPhone)
    setErrors(found)
    const firstInvalid = fields.find((f) => found[f])
    if (firstInvalid) {
      fieldRefs[firstInvalid].current?.focus()
      return
    }

    if (honeypotRef.current?.value) {
      setCardHeight(cardRef.current?.offsetHeight)
      setStatus('success') // a bot gets the same answer a person would
      return
    }
    if (Date.now() - openedAt.current < MIN_FORM_MS) return

    setCardHeight(cardRef.current?.offsetHeight)
    setStatus('sending')
    try {
      await send(values, withPhone)
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  const another = () => {
    setValues(EMPTY)
    setErrors({})
    setStatus('idle')
    openedAt.current = Date.now()
    requestAnimationFrame(() => nameRef.current?.focus())
  }

  const sending = status === 'sending'
  const statusText =
    status === 'sending'
      ? 'Sending your message.'
      : status === 'success'
        ? `${copy.successTitle} ${copy.successBody}`
        : status === 'error'
          ? copy.errors.send
          : ''

  return (
    <div
      ref={cardRef}
      style={status === 'success' && cardHeight ? { minHeight: cardHeight } : undefined}
      className={`relative rounded-(--r-card) p-(--form-pad) ${
        dark ? 'border border-(--dark-card-line) bg-(--dark-card-bg)' : 'bg-form-card shadow-form'
      }`}
    >
      <div role="status" aria-live="polite" className="sr-only">
        {statusText}
      </div>

      {status === 'success' ? (
        <div className="flex h-full flex-col items-start justify-center gap-6 py-6 lg:gap-[1.6vw]">
          <h3
            ref={thanksRef}
            tabIndex={-1}
            className="text-(length:--fs-row-title) leading-[1.16] font-bold tracking-normal outline-none"
          >
            {copy.successTitle}
          </h3>
          <p className="max-w-[24em] text-(length:--fs-lead-md) leading-[1.35] font-light text-fg-muted">
            {copy.successBody}
          </p>
          <button
            type="button"
            onClick={another}
            data-cursor="hover"
            className="cursor-pointer text-(length:--fs-check-title) font-semibold underline decoration-2 underline-offset-[0.25em]"
          >
            {copy.another}
          </button>
        </div>
      ) : (
        <form ref={formRef} noValidate onSubmit={onSubmit} aria-busy={sending}>
          {/* Dark variant: Name and Email share a row from 1024px (frames service-top-17); everything else is full width. */}
          <div className={dark ? 'grid gap-5 lg:grid-cols-2 lg:gap-[1.9vw]' : 'flex flex-col gap-5 lg:gap-[1.9vw]'}>
            {fields.map((field) => {
              const conf = copy.fields[field]
              const err = errors[field]
              const common = {
                id: id(field),
                name: field,
                'aria-required': true as const,
                'aria-invalid': err ? (true as const) : undefined,
                'aria-describedby': err ? id(`${field}-error`) : undefined,
                placeholder: conf.placeholder,
                value: values[field],
                onChange: (e: { target: { value: string } }) => update(field, e.target.value),
                onBlur: () => blur(field),
              }
              return (
                <div key={field} className={dark && (field === 'phone' || field === 'message') ? 'lg:col-span-2' : undefined}>
                  <label htmlFor={id(field)} className="sr-only">
                    {conf.label}
                  </label>
                  {field === 'message' ? (
                    <textarea
                      ref={messageRef}
                      {...common}
                      className={`${fieldBase[variant]} min-h-[clamp(8rem,10.18vw,12.2rem)] resize-none py-4 leading-[1.4] lg:py-[1.45vw]`}
                    />
                  ) : (
                    <input
                      ref={fieldRefs[field] as RefObject<HTMLInputElement>}
                      {...common}
                      type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
                      inputMode={field === 'email' ? 'email' : field === 'phone' ? 'tel' : undefined}
                      autoComplete={field === 'phone' ? 'tel' : field}
                      className={`${fieldBase[variant]} h-(--field-h)`}
                    />
                  )}
                  <FieldError id={id(`${field}-error`)} message={err} dark={dark} />
                </div>
              )
            })}

            {/* Honeypot: invisible and unreachable for people, tempting for form-filling bots. */}
            <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
              <label>
                Leave this field empty
                <input ref={honeypotRef} type="text" name="company_website" tabIndex={-1} autoComplete="off" />
              </label>
            </div>
          </div>

          {status === 'error' && (
            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 lg:mt-[1.6vw]">
              <p className={`text-(length:--fs-check-desc) leading-[1.35] font-medium ${dark ? 'text-danger-on-dark' : 'text-danger'}`}>
                {copy.errors.send}
              </p>
              <button
                type="button"
                onClick={() => formRef.current?.requestSubmit()}
                data-cursor="hover"
                className="cursor-pointer text-(length:--fs-check-desc) font-semibold underline underline-offset-[0.25em]"
              >
                {copy.retry}
              </button>
            </div>
          )}

          <div className="mt-8 lg:mt-[3vw]">
            <PillButton type="submit" disabled={sending} className="gap-[0.85em]">
              <span className={dark ? '' : 'text-[1.076em] font-semibold tracking-normal normal-case'}>
                {sending ? copy.sending : copy.submit}
              </span>
              <ArrowIcon />
            </PillButton>
          </div>
        </form>
      )}
    </div>
  )
}
