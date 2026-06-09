import { useEffect, useRef, type CSSProperties } from 'react'
import { cn } from '@/lib/utils'
import './GradientBlobBackground.css'

type GradientBlobColors = {
  backgroundStart?: string
  backgroundEnd?: string
  first?: string
  second?: string
  third?: string
  fourth?: string
  fifth?: string
  pointer?: string
}

type GradientBlobBackgroundProps = {
  colors?: GradientBlobColors
  interactive?: boolean
  blendingValue?: string
  size?: string
  className?: string
}

const defaultColors = {
  backgroundStart: '174, 86, 110',
  backgroundEnd: '50, 63, 186',
  first: '255, 178, 45',
  second: '25, 79, 255',
  third: '255, 93, 31',
  fourth: '140, 76, 214',
  fifth: '255, 218, 68',
  pointer: '255, 255, 255',
} satisfies Required<GradientBlobColors>

export function GradientBlobBackground({
  colors,
  interactive = true,
  blendingValue = 'hard-light',
  size = '84%',
  className,
}: GradientBlobBackgroundProps) {
  const backgroundRef = useRef<HTMLDivElement>(null)
  const interactiveRef = useRef<HTMLDivElement>(null)
  const frameRef = useRef<number | null>(null)

  const resolvedColors = {
    ...defaultColors,
    ...colors,
  }

  useEffect(() => {
    const background = backgroundRef.current
    const interactiveBlob = interactiveRef.current

    if (!background || !interactiveBlob || !interactive) {
      return
    }

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const coarsePointer = window.matchMedia(
      '(pointer: coarse), (max-width: 767px)',
    )

    if (reducedMotion.matches || coarsePointer.matches) {
      return
    }

    const handlePointerMove = (event: PointerEvent) => {
      if (frameRef.current) {
        return
      }

      frameRef.current = window.requestAnimationFrame(() => {
        const rect = background.getBoundingClientRect()
        const x = event.clientX - rect.left
        const y = event.clientY - rect.top

        interactiveBlob.style.transform = `translate3d(${x}px, ${y}px, 0)`
        frameRef.current = null
      })
    }

    window.addEventListener('pointermove', handlePointerMove, {
      passive: true,
    })

    return () => {
      window.removeEventListener('pointermove', handlePointerMove)

      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current)
      }
    }
  }, [interactive])

  return (
    <div
      ref={backgroundRef}
      aria-hidden="true"
      className={cn(
        'gradient-blob-background pointer-events-none absolute inset-0 overflow-hidden',
        className,
      )}
      style={
        {
          '--gradient-background-start': resolvedColors.backgroundStart,
          '--gradient-background-end': resolvedColors.backgroundEnd,
          '--gradient-first': resolvedColors.first,
          '--gradient-second': resolvedColors.second,
          '--gradient-third': resolvedColors.third,
          '--gradient-fourth': resolvedColors.fourth,
          '--gradient-fifth': resolvedColors.fifth,
          '--gradient-pointer': resolvedColors.pointer,
          '--gradient-size': size,
          '--gradient-blending': blendingValue,
        } as CSSProperties
      }
    >
      <svg className="pointer-events-none absolute size-0" aria-hidden="true">
        <defs>
          <filter id="gradient-blob-goo">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      <div className="gradient-blob-stage">
        <div className="gradient-blob gradient-blob-first" />
        <div className="gradient-blob gradient-blob-second" />
        <div className="gradient-blob gradient-blob-third" />
        <div className="gradient-blob gradient-blob-fourth" />
        <div className="gradient-blob gradient-blob-fifth" />
        <div
          ref={interactiveRef}
          className="gradient-blob-interactive hidden md:block"
        />
      </div>
      <div className="absolute inset-0 bg-white/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_43%,rgba(255,255,255,0.34),rgba(255,255,255,0.1)_38%,rgba(255,255,255,0.34)_100%)]" />
    </div>
  )
}
