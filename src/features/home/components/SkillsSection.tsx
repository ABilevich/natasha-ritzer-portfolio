import { skills } from '../homeContent'
import { SectionTitle } from './SectionTitle'
import { SkillCard } from './SkillCard'

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="scroll-mt-8 bg-white px-[clamp(20px,6.6vw,100px)] pb-16 pt-8"
      aria-labelledby="skills-title"
    >
      <div className="mx-auto flex max-w-[1312px] flex-col gap-[72px]">
        <SectionTitle title="Skills" />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-[90px]">
          {skills.map((skill) => (
            <SkillCard key={skill.title} {...skill} />
          ))}
        </div>
      </div>
    </section>
  )
}
