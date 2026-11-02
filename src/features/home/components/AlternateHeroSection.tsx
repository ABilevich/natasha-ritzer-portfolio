import { useEffect, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { alternateHeroProjectCards } from '../homeContent'
import './AlternateHeroSection.css'
import { SquareGridBackground } from './SquareGridBackground'

export function AlternateHeroSection() {
  const [activeMobileProject, setActiveMobileProject] = useState(1)

  useEffect(() => {
    const mobileViewport = window.matchMedia('(max-width: 767px)')
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

    let interval: number | undefined

    const updateRotation = () => {
      window.clearInterval(interval)
      interval = undefined

      if (mobileViewport.matches && !reducedMotion.matches) {
        interval = window.setInterval(() => {
          setActiveMobileProject(
            (current) => (current + 1) % alternateHeroProjectCards.length,
          )
        }, 3000)
      }
    }

    updateRotation()
    mobileViewport.addEventListener('change', updateRotation)
    reducedMotion.addEventListener('change', updateRotation)

    return () => {
      window.clearInterval(interval)
      mobileViewport.removeEventListener('change', updateRotation)
      reducedMotion.removeEventListener('change', updateRotation)
    }
  }, [])

  return (
    <section
      className="alternate-hero-section relative flex h-svh min-h-[720px] overflow-hidden bg-white px-[clamp(20px,6.6vw,100px)] pb-0 pt-[clamp(86px,13svh,108px)] md:min-h-[900px] md:py-20 lg:min-h-[760px] lg:py-[clamp(4.5rem,9svh,6rem)]"
      aria-labelledby="alternate-hero-title"
    >
      <SquareGridBackground />

      <div className="relative z-10 mx-auto grid h-full w-full max-w-[1312px] grid-rows-[auto_1fr] items-start">
        <div className="alternate-hero-copy mx-auto flex w-full max-w-[900px] flex-col items-center gap-14 text-center md:mt-[clamp(2.5rem,7svh,5rem)] md:gap-12 lg:mt-[clamp(4.5rem,10svh,6rem)] lg:pb-[clamp(4.5rem,10svh,6rem)]">
          <h2
            id="alternate-hero-title"
            className="m-0 w-full max-w-[22rem] text-[45px] font-bold leading-[0.98] tracking-normal text-[#111928] md:max-w-[900px] md:text-[clamp(2.6rem,10vw,5.25rem)] md:leading-[1.02]"
          >
            <span className="alternate-hero-title--mobile md:hidden">
              Design work
              <br />
              that gets
              <br />
              projects
              <br />
              <span className="relative inline-block whitespace-nowrap">
                <span className="relative z-10">moving</span>
                <span
                  className="alternate-hero-underline absolute -bottom-3 left-1/2 h-[0.22em] w-[112%] -translate-x-1/2 rounded-full"
                  aria-hidden="true"
                />
              </span>
            </span>
            <span className="alternate-hero-title--wide hidden md:inline">
              Design work that gets projects{' '}
              <span className="relative inline-block whitespace-nowrap">
                <span className="relative z-10">moving</span>
                <span
                  className="alternate-hero-underline absolute -bottom-3 left-1/2 h-[0.22em] w-[112%] -translate-x-1/2 rounded-full"
                  aria-hidden="true"
                />
              </span>
            </span>
          </h2>

          <Button
            asChild
            variant="outline"
            size="sm"
            className="alternate-hero-cta h-12 rounded-full border-[#4B5563] bg-transparent px-[18px] text-sm font-medium text-[#4B5563] hover:bg-transparent hover:text-[#4B5563] focus-visible:ring-[#4B5563]/30 md:text-base"
          >
            <a href="#projects">
              See my projects
              <ArrowRight className="size-5 transition-transform group-hover/button:translate-x-1" />
            </a>
          </Button>
        </div>

        <div
          className="alternate-hero-gallery relative mx-auto mt-[clamp(64px,10svh,128px)] h-full min-h-0 w-full overflow-hidden md:mt-0 lg:mt-[clamp(2rem,5svh,3.5rem)] lg:h-auto lg:self-stretch lg:overflow-visible"
          aria-label="Featured project previews"
        >
          {alternateHeroProjectCards.map((project, index) => {
            const positionClassName =
              index === 0
                ? 'alternate-hero-card--left'
                : index === 1
                  ? 'alternate-hero-card--center'
                  : 'alternate-hero-card--right'
            const previousMobileProject =
              (activeMobileProject - 1 + alternateHeroProjectCards.length) %
              alternateHeroProjectCards.length
            const mobilePositionClassName =
              index === activeMobileProject
                ? 'alternate-hero-card--mobile-active'
                : index === previousMobileProject
                  ? 'alternate-hero-card--mobile-previous'
                  : 'alternate-hero-card--mobile-next'

            return (
              <Link
                key={project.title}
                to={project.href}
                aria-label={`Open ${project.title} project`}
                className={`alternate-hero-card group absolute left-1/2 top-0 block w-[min(24rem,92vw)] overflow-hidden rounded-lg border-[6px] border-white bg-white shadow-[0_24px_60px_rgba(17,25,40,0.18),0_8px_20px_rgba(17,25,40,0.08)] outline-none focus-visible:ring-4 focus-visible:ring-[#111928]/25 md:top-auto md:w-[min(68vw,38rem)] lg:-bottom-[calc(clamp(4.5rem,9svh,6rem)+1rem)] lg:w-[min(42vw,38rem,62svh)] ${positionClassName} ${mobilePositionClassName}`}
                style={{ aspectRatio: project.aspectRatio }}
              >
                <img
                  src={project.image}
                  alt=""
                  className="block size-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03] group-focus-visible:scale-[1.03]"
                />
              </Link>
            )
          })}

        </div>
      </div>
    </section>
  )
}
