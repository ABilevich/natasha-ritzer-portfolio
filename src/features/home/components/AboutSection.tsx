import { aboutStats } from '../homeContent'
import { SectionTitle } from './SectionTitle'
import { StatCard } from './StatCard'

export function AboutSection() {
  return (
    <section
      id="about"
      className="flex min-h-svh scroll-mt-8 bg-white px-[clamp(20px,6.6vw,100px)] pb-12 pt-6 md:items-center md:pb-16 md:pt-8"
      aria-labelledby="about-title"
    >
      <div className="mx-auto flex w-full max-w-[1312px] flex-col gap-10 md:gap-14 lg:gap-[72px]">
        <SectionTitle title="About" showResumeButton />
        <div className="grid grid-cols-1 lg:grid-cols-[445px_1fr]">
          <p className="m-0 max-w-[760px] text-base leading-6 text-[#1f2a37] lg:col-start-2 lg:max-w-none">
            Hi, I’m Natasha — a Product Designer specialized in UX/UI, graphic
            design, and product management. With a background in Industrial
            Design, I combine technology, culture, and aesthetics to create
            thoughtful, user-centered experiences, leading projects from
            research and concept to prototype and launch.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:gap-[19px]">
          {aboutStats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  )
}
