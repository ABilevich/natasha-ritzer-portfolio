import { useState } from 'react'
import { Minus, Plus } from 'lucide-react'
import { projectCategoryGroups } from '@/features/projects/projectsContent'
import { ProjectPreviewCard } from '@/features/projects/components/ProjectPreviewCard'
import { cn } from '@/lib/utils'
import { SectionTitle } from './SectionTitle'

type ProjectCategoryPanelProps = {
  category: (typeof projectCategoryGroups)[number]
  isExpanded: boolean
  panelId: string
}

function ProjectCategoryPanel({
  category,
  isExpanded,
  panelId,
}: ProjectCategoryPanelProps) {
  return (
    <div
      id={panelId}
      aria-hidden={!isExpanded}
      className={cn(
        'overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out motion-reduce:transition-none',
        isExpanded
          ? 'max-h-[760px] opacity-100 md:max-h-[340px] lg:max-h-[430px]'
          : 'max-h-0 opacity-0',
      )}
    >
      <div className="pt-6 lg:pt-10">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:gap-8">
          {category.projects.map((project) => (
            <ProjectPreviewCard
              key={project.slug}
              href={project.detailPath}
              isInteractive={isExpanded}
              {...project}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export function ProjectsSection() {
  const [expandedCategories, setExpandedCategories] = useState(() =>
    Object.fromEntries(
      projectCategoryGroups.map((category) => [
        category.title,
        category.defaultExpanded,
      ]),
    ),
  )

  const toggleCategory = (title: string) => {
    setExpandedCategories((current) => ({
      ...current,
      [title]: !current[title],
    }))
  }

  return (
    <section
      id="projects"
      className="scroll-mt-8 bg-white px-[clamp(20px,6.6vw,100px)] pb-12 pt-8 md:pb-16 md:pt-[42px]"
      aria-labelledby="projects-title"
    >
      <div className="mx-auto flex max-w-[1312px] flex-col gap-10 md:gap-16">
        <SectionTitle title="Projects" />
        <div className="flex flex-col gap-6 md:gap-10">
          {projectCategoryGroups.map((category) => {
            const isExpanded = expandedCategories[category.title]
            const Icon = isExpanded ? Minus : Plus
            const panelId = `projects-${category.title
              .toLowerCase()
              .replaceAll(' ', '-')}`

            return (
              <article key={category.title} className="w-full">
                <button
                  type="button"
                  aria-controls={panelId}
                  aria-expanded={isExpanded}
                  onClick={() => toggleCategory(category.title)}
                  className="flex w-full cursor-pointer items-center gap-4 border-0 border-b-2 border-solid border-[#e5e7eb] bg-transparent px-0 py-6 text-left md:gap-8 md:py-8"
                >
                  <Icon
                    className="size-5 shrink-0 text-[#4b5563] md:size-6"
                    aria-hidden="true"
                  />
                  <h3 className="m-0 text-2xl font-semibold leading-tight text-[#4b5563] md:text-[40px]">
                    {category.title}
                  </h3>
                </button>
                <ProjectCategoryPanel
                  category={category}
                  isExpanded={isExpanded}
                  panelId={panelId}
                />
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
