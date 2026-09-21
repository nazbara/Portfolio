/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Where the contact form POSTs its JSON. Unset ⇒ the form simulates a successful send. */
  readonly VITE_CONTACT_ENDPOINT?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
