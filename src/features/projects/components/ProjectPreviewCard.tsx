import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import './ProjectPreviewCard.css'

type ProjectPreviewCardProps = {
  title: string
  description: string
  image: string
  href?: string
  isInteractive?: boolean
  revealOnCenterOnMobile?: boolean
}

export function ProjectPreviewCard({
  title,
  description,
  image,
  href,
  isInteractive = true,
  revealOnCenterOnMobile = false,
}: ProjectPreviewCardProps) {
  const [isRevealed, setIsRevealed] = useState(false)
  const cardRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!revealOnCenterOnMobile) {
      return
    }

    const mediaQuery = window.matchMedia('(max-width: 639px)')

    function updateRevealState() {
      if (!cardRef.current || !mediaQuery.matches) {
        setIsRevealed(false)
        return
      }

      const rect = cardRef.current.getBoundingClientRect()
      const cardCenter = rect.top + rect.height / 2
      const viewportCenter = window.innerHeight / 2
      const revealRange = Math.min(window.innerHeight * 0.18, rect.height * 0.45)

      setIsRevealed(Math.abs(cardCenter - viewportCenter) <= revealRange)
    }

    updateRevealState()
    window.addEventListener('scroll', updateRevealState, { passive: true })
    window.addEventListener('resize', updateRevealState)
    mediaQuery.addEventListener('change', updateRevealState)

    return () => {
      window.removeEventListener('scroll', updateRevealState)
      window.removeEventListener('resize', updateRevealState)
      mediaQuery.removeEventListener('change', updateRevealState)
    }
  }, [revealOnCenterOnMobile])

  const rootClassName = cn(
    'project-preview-card group relative flex h-[340px] w-full items-end overflow-hidden p-5 text-left no-underline outline-none max-[360px]:h-[310px] md:h-[300px] md:p-6 lg:h-[372px]',
    revealOnCenterOnMobile && 'project-preview-card--center-mobile',
    isRevealed && 'is-revealed',
  )

  const cardContent = (
    <>
      <img
        src={image}
        alt=""
        className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-[1.03] group-focus-visible:scale-[1.03]"
      />
      <div className="project-preview-overlay absolute inset-0 bg-gradient-to-b from-white/0 from-15% via-white/85 via-60% to-white transition-opacity duration-300" />
      <div className="project-preview-content relative flex w-full flex-col gap-2 transition-all duration-300">
        <div className="flex items-center justify-between gap-4">
          <h4 className="m-0 text-xl font-semibold leading-[30px] text-[#111928] md:text-2xl">
            {title}
          </h4>
          <ArrowRight className="size-6 shrink-0 text-[#111928]" />
        </div>
        <p className="m-0 max-w-[34rem] text-sm leading-6 text-[#4b5563] md:text-base">
          {description}
        </p>
      </div>
    </>
  )

  if (href) {
    return (
      <Link
        ref={(node) => {
          cardRef.current = node
        }}
        to={href}
        aria-label={`${title}: ${description}`}
        tabIndex={isInteractive ? undefined : -1}
        onBlur={() => setIsRevealed(false)}
        onFocus={() => setIsRevealed(true)}
        onMouseEnter={() => setIsRevealed(true)}
        onMouseLeave={() => setIsRevealed(false)}
        className={rootClassName}
      >
        {cardContent}
      </Link>
    )
  }

  return (
    <article
      ref={cardRef}
      tabIndex={isInteractive ? 0 : -1}
      aria-label={`${title}: ${description}`}
      onBlur={() => setIsRevealed(false)}
      onFocus={() => setIsRevealed(true)}
      onMouseEnter={() => setIsRevealed(true)}
      onMouseLeave={() => setIsRevealed(false)}
      className={rootClassName}
    >
      {cardContent}
    </article>
  )
}
