import { useEffect } from 'react'

/** Sets document.title while the calling page is mounted and puts the previous title back on unmount. */
export function useDocumentTitle(title: string) {
  useEffect(() => {
    const previous = document.title
    document.title = title
    return () => {
      document.title = previous
    }
  }, [title])
}
