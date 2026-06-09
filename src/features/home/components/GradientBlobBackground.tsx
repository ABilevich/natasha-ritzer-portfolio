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

type GradientBlobSizes = {
  first?: string
  second?: string
  third?: string
  fourth?: string
  fifth?: string
  pointer?: string
}

type GradientBlobBackgroundProps = {
  colors?: GradientBlobColors
  blobSizes?: GradientBlobSizes
  interactive?: boolean
  blendingValue?: string
  className?: string
}

const defaultColors = {
  backgroundStart: '#0040b7',
  backgroundEnd: '#5d00ba',
  first: '#c87e00',
  second: '#0099ff',
  third: '#d63d00',
  fourth: '#c664ff',
  fifth: '#ad6e00',
  pointer: '#b3ff00',
} satisfies Required<GradientBlobColors>

const defaultBlobSizes = {
  first: '86%',
  second: '82%',
  third: '78%',
  fourth: '84%',
  fifth: '70%',
  pointer: '100%',
} satisfies Required<GradientBlobSizes>

function getRgbChannels(hexColor: string) {
  const normalizedColor = hexColor.replace('#', '').trim()
  const expandedColor =
    normalizedColor.length === 3
      ? normalizedColor
          .split('')
          .map((character) => character + character)
          .join('')
      : normalizedColor

  if (!/^[\da-f]{6}$/i.test(expandedColor)) {
    return hexColor
  }

  const red = Number.parseInt(expandedColor.slice(0, 2), 16)
  const green = Number.parseInt(expandedColor.slice(2, 4), 16)
  const blue = Number.parseInt(expandedColor.slice(4, 6), 16)

  return `${red}, ${green}, ${blue}`
}

export function GradientBlobBackground({
  colors,
  blobSizes,
  interactive = true,
  blendingValue = 'hard-light',
  className,
}: GradientBlobBackgroundProps) {
  const backgroundRef = useRef<HTMLDivElement>(null)
  const interactiveRef = useRef<HTMLDivElement>(null)
  const frameRef = useRef<number | null>(null)

  const resolvedColors = {
    ...defaultColors,
    ...colors,
  }

  const resolvedBlobSizes = {
    ...defaultBlobSizes,
    ...blobSizes,
  }

  const colorChannels = {
    backgroundStart: getRgbChannels(resolvedColors.backgroundStart),
    backgroundEnd: getRgbChannels(resolvedColors.backgroundEnd),
    first: getRgbChannels(resolvedColors.first),
    second: getRgbChannels(resolvedColors.second),
    third: getRgbChannels(resolvedColors.third),
    fourth: getRgbChannels(resolvedColors.fourth),
    fifth: getRgbChannels(resolvedColors.fifth),
    pointer: getRgbChannels(resolvedColors.pointer),
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
          '--gradient-background-start': colorChannels.backgroundStart,
          '--gradient-background-end': colorChannels.backgroundEnd,
          '--gradient-first': colorChannels.first,
          '--gradient-second': colorChannels.second,
          '--gradient-third': colorChannels.third,
          '--gradient-fourth': colorChannels.fourth,
          '--gradient-fifth': colorChannels.fifth,
          '--gradient-pointer': colorChannels.pointer,
          '--gradient-size-first': resolvedBlobSizes.first,
          '--gradient-size-second': resolvedBlobSizes.second,
          '--gradient-size-third': resolvedBlobSizes.third,
          '--gradient-size-fourth': resolvedBlobSizes.fourth,
          '--gradient-size-fifth': resolvedBlobSizes.fifth,
          '--gradient-size-pointer': resolvedBlobSizes.pointer,
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
