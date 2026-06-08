import { aboutStats } from '../homeContent'
import { SectionTitle } from './SectionTitle'
import { StatCard } from './StatCard'

export function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-mt-8 bg-white px-[clamp(20px,6.6vw,100px)] pb-16 pt-8"
      aria-labelledby="about-title"
    >
      <div className="mx-auto flex max-w-[1312px] flex-col gap-[72px]">
        <SectionTitle title="About" showResumeButton />
        <div className="grid grid-cols-1 md:grid-cols-[445px_1fr]">
          <p className="m-0 text-base leading-6 text-[#1f2a37] md:col-start-2">
            Hi, I’m Natasha — a Product Designer specialized in UX/UI, graphic
            design, and product management. With a background in Industrial
            Design, I combine technology, culture, and aesthetics to create
            thoughtful, user-centered experiences, leading projects from
            research and concept to prototype and launch.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-[19px] md:grid-cols-[424px_1fr_1fr]">
          {aboutStats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  )
}
