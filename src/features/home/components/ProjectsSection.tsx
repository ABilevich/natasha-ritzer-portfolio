import { Minus, Plus } from 'lucide-react'
import projectPlaceholder from '@/assets/figma/project-placeholder.png'
import { projectCategories } from '../homeContent'
import { SectionTitle } from './SectionTitle'

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="scroll-mt-8 bg-white px-[clamp(20px,6.6vw,100px)] pb-12 pt-8 md:pb-16 md:pt-[42px]"
      aria-labelledby="projects-title"
    >
      <div className="mx-auto flex max-w-[1312px] flex-col gap-10 md:gap-16">
        <SectionTitle title="Projects" />
        <div className="flex flex-col gap-6 md:gap-10">
          {projectCategories.map((category) => {
            const Icon = category.expanded ? Minus : Plus

            return (
              <article key={category.title} className="w-full">
                <div className="flex items-center gap-4 border-b-2 border-[#e5e7eb] py-6 md:gap-8 md:py-8">
                  <Icon
                    className="size-5 shrink-0 text-[#4b5563] md:size-6"
                    aria-hidden="true"
                  />
                  <h3 className="m-0 text-2xl font-semibold leading-tight text-[#4b5563] md:text-[40px]">
                    {category.title}
                  </h3>
                </div>
                {category.expanded && (
                  <div className="grid grid-cols-1 gap-5 pt-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 lg:pt-10">
                    {Array.from({ length: category.previews }).map(
                      (_, index) => (
                        <img
                          key={index}
                          src={projectPlaceholder}
                          alt=""
                          className="h-[220px] w-full rounded-none object-cover md:h-[300px] lg:h-[372px]"
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
