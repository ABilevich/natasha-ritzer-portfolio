import { Minus, Plus } from 'lucide-react'
import projectPlaceholder from '@/assets/figma/project-placeholder.png'
import { projectCategories } from '../homeContent'
import { SectionTitle } from './SectionTitle'

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="scroll-mt-8 bg-white px-[clamp(20px,6.6vw,100px)] pb-16 pt-[42px]"
      aria-labelledby="projects-title"
    >
      <div className="mx-auto flex max-w-[1312px] flex-col gap-16">
        <SectionTitle title="Projects" />
        <div className="flex flex-col gap-10">
          {projectCategories.map((category) => {
            const Icon = category.expanded ? Minus : Plus

            return (
              <article key={category.title} className="w-full">
                <div className="flex items-center gap-8 border-b-2 border-[#e5e7eb] py-8">
                  <Icon className="size-6 text-[#4b5563]" aria-hidden="true" />
                  <h3 className="m-0 text-3xl font-semibold leading-tight text-[#4b5563] md:text-[40px]">
                    {category.title}
                  </h3>
                </div>
                {category.expanded && (
                  <div className="grid grid-cols-1 gap-8 pt-10 md:grid-cols-3">
                    {Array.from({ length: category.previews }).map(
                      (_, index) => (
                        <img
                          key={index}
                          src={projectPlaceholder}
                          alt=""
                          className="h-[260px] w-full rounded-none object-cover md:h-[372px]"
                        />
                      ),
                    )}
                  </div>
                )}
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
