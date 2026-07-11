import { skills } from '../homeContent'
import { SectionTitle } from './SectionTitle'
import { SkillCard } from './SkillCard'

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="scroll-mt-8 bg-white px-[clamp(20px,6.6vw,100px)] pb-12 pt-6 md:flex md:min-h-svh md:items-center md:pb-16 md:pt-8"
      aria-labelledby="skills-title"
    >
      <div className="mx-auto flex w-full max-w-[1312px] flex-col gap-10 md:gap-14 lg:gap-[72px]">
        <SectionTitle title="Skills" titleId="skills-title" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-x-[90px] lg:gap-y-12">
          {skills.map((skill) => (
            <SkillCard key={skill.title} {...skill} />
          ))}
        </div>
      </div>
    </section>
  )
}
