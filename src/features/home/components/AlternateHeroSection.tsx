import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { alternateHeroProjectCards } from '../homeContent'
import './AlternateHeroSection.css'
import { SquareGridBackground } from './SquareGridBackground'

export function AlternateHeroSection() {
  return (
    <section
      className="alternate-hero-section relative flex h-svh min-h-[720px] overflow-hidden bg-white px-[clamp(20px,6.6vw,100px)] pb-0 pt-[clamp(86px,13svh,108px)] md:min-h-[900px] md:py-20 lg:h-auto lg:min-h-[min(880px,calc(100svh_-_72px))] lg:py-24"
      aria-labelledby="alternate-hero-title"
    >
      <SquareGridBackground />

      <div className="relative z-10 mx-auto grid h-full w-full max-w-[1312px] grid-rows-[auto_1fr] items-start">
        <div className="alternate-hero-copy mx-auto flex w-full max-w-[900px] flex-col items-center gap-10 text-center md:mt-[clamp(2.5rem,7svh,5rem)] md:gap-12 lg:mt-[clamp(2rem,5svh,4rem)]">
          <h2
            id="alternate-hero-title"
            className="m-0 w-full max-w-[22rem] text-[45px] font-bold leading-[0.98] tracking-normal text-[#111928] md:max-w-[900px] md:text-[clamp(2.6rem,10vw,5.25rem)] md:leading-[1.02]"
          >
            <span className="md:hidden">
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
            <span className="hidden md:inline">
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
          className="alternate-hero-gallery relative mx-auto mt-[clamp(64px,10svh,128px)] h-[420px] w-full md:mt-0 md:h-full md:min-h-0 md:overflow-hidden lg:mt-24 lg:h-[420px] lg:overflow-visible"
          aria-label="Featured project previews"
        >
          {alternateHeroProjectCards.map((project, index) => {
            const positionClassName =
              index === 0
                ? 'alternate-hero-card--left'
                : index === 1
                  ? 'alternate-hero-card--center'
                  : 'alternate-hero-card--right'

            return (
              <Link
                key={project.title}
                to={project.href}
                aria-label={`Open ${project.title} project`}
                className={`alternate-hero-card group absolute left-1/2 top-0 block aspect-[4/5] w-[min(22rem,86vw)] overflow-hidden rounded-lg border-[6px] border-white bg-white shadow-[0_24px_60px_rgba(17,25,40,0.18),0_8px_20px_rgba(17,25,40,0.08)] outline-none focus-visible:ring-4 focus-visible:ring-[#111928]/25 md:top-auto md:-bottom-[clamp(5rem,12svh,9rem)] md:w-[min(48vw,27rem)] lg:top-0 lg:bottom-auto lg:w-[min(30vw,27rem)] ${positionClassName}`}
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
