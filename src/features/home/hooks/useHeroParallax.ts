import { useEffect, useState } from 'react'

export function useHeroParallax() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    )

    if (prefersReducedMotion.matches) {
      return
    }

    let frameId = 0

    const updateScrollPosition = () => {
      setScrollY(window.scrollY)
      frameId = 0
    }

    const handleScroll = () => {
      if (frameId) {
        return
      }

      frameId = window.requestAnimationFrame(updateScrollPosition)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)

      if (frameId) {
        window.cancelAnimationFrame(frameId)
      }
    }
  }, [])

  return scrollY
}
