import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function ScrollToHash() {
  const { hash, pathname } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0 })
      return
    }

    const targetId = decodeURIComponent(hash.replace('#', ''))

    const scrollToTarget = () => {
      document.getElementById(targetId)?.scrollIntoView({ block: 'start' })
    }

    window.requestAnimationFrame(scrollToTarget)
    const timeoutId = window.setTimeout(scrollToTarget, 100)

    return () => window.clearTimeout(timeoutId)
  }, [hash, pathname])

  return null
}
