import { useEffect, useRef } from 'react'

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max)

export function useParallaxGallery() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current

    if (!section) {
      return
    }

    const reducedMotionQuery = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    )
    let frameId = 0

    const updateShift = () => {
      frameId = 0

      if (reducedMotionQuery.matches) {
        section.style.setProperty('--gallery-shift', '0px')
        return
      }

      const rect = section.getBoundingClientRect()
      const viewportHeight =
        window.innerHeight || document.documentElement.clientHeight
      const progress = clamp(
        (viewportHeight - rect.top) / (viewportHeight + rect.height),
        0,
        1,
      )
      const amplitude = window.matchMedia('(max-width: 767px)').matches
        ? 64
        : 118
      const shift = (0.5 - progress) * amplitude

      section.style.setProperty('--gallery-shift', `${shift}px`)
    }

    const requestUpdate = () => {
      if (frameId) {
        return
      }

      frameId = window.requestAnimationFrame(updateShift)
    }

    requestUpdate()
    window.addEventListener('scroll', requestUpdate, { passive: true })
    window.addEventListener('resize', requestUpdate)
    reducedMotionQuery.addEventListener('change', requestUpdate)

    return () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId)
      }

      window.removeEventListener('scroll', requestUpdate)
      window.removeEventListener('resize', requestUpdate)
      reducedMotionQuery.removeEventListener('change', requestUpdate)
    }
  }, [])

  return sectionRef
}
