import { useEffect, useMemo, useRef, useState } from 'react'
import { Check, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import {
  projectCategories,
  projects,
  type ProjectCategoryTitle,
} from '../projectsContent'
import { ProjectPreviewCard } from './ProjectPreviewCard'

type ProjectFilter = 'All' | ProjectCategoryTitle

const projectFilters = [
  'All',
  ...projectCategories.map((category) => category.title),
] satisfies ProjectFilter[]

export function ProjectsGallerySection() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>('All')
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const filterMenuRef = useRef<HTMLDivElement>(null)

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') {
      return projects
    }

    return projects.filter((project) => project.category === activeFilter)
  }, [activeFilter])

  useEffect(() => {
    if (!isFilterOpen) {
      return
    }

    function handlePointerDown(event: PointerEvent) {
      if (!filterMenuRef.current?.contains(event.target as Node)) {
        setIsFilterOpen(false)
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsFilterOpen(false)
      }
    }

    document.addEventListener('pointerdown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isFilterOpen])

  return (
    <section
      aria-labelledby="projects-gallery-title"
      className="px-[clamp(20px,6.6vw,100px)] pb-16 pt-[30px] md:pb-24"
    >
      <div className="mx-auto flex max-w-[1312px] flex-col gap-9 md:gap-14">
        <div className="flex items-center justify-between gap-6 max-[560px]:flex-col max-[560px]:items-start">
          <h2
            id="projects-gallery-title"
            className="m-0 text-5xl font-bold leading-[58px] tracking-normal text-[#111928]"
          >
            Projects
          </h2>
          <div ref={filterMenuRef} className="relative mt-1 max-[560px]:w-full">
            <button
              type="button"
              aria-haspopup="listbox"
              aria-expanded={isFilterOpen}
              aria-label="Filter projects"
              onClick={() => setIsFilterOpen((isOpen) => !isOpen)}
              className="inline-flex h-10 min-w-[172px] items-center justify-between gap-4 border border-[#E5E7EB] bg-white px-4 text-base font-medium text-[#111928] transition-colors hover:border-[#111928] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#111928] max-[560px]:w-full"
            >
              <span>{activeFilter}</span>
              <ChevronDown
                className={cn(
                  'size-4 transition-transform duration-200 motion-reduce:transition-none',
                  isFilterOpen ? 'rotate-180' : 'rotate-0',
                )}
                aria-hidden="true"
              />
            </button>
            {isFilterOpen ? (
              <div
                role="listbox"
                aria-label="Project filters"
                className="absolute right-0 z-20 mt-2 w-[min(260px,calc(100vw-40px))] overflow-hidden border border-[#E5E7EB] bg-white p-1"
              >
                {projectFilters.map((filter) => {
                  const isSelected = filter === activeFilter

                  return (
                    <button
                      key={filter}
                      type="button"
                      role="option"
                      aria-selected={isSelected}
                      onClick={() => {
                        setActiveFilter(filter)
                        setIsFilterOpen(false)
                      }}
                      className={cn(
                        'flex h-11 w-full items-center gap-3 px-3 text-left text-base font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#111928]',
                        isSelected
                          ? 'bg-[#111928] text-white'
                          : 'text-[#111928] hover:bg-[#f3f4f6]',
                      )}
                    >
                      <Check
                        className={cn(
                          'size-4 shrink-0',
                          isSelected ? 'opacity-100' : 'opacity-0',
                        )}
                        aria-hidden="true"
                      />
                      {filter}
                    </button>
                  )
                })}
              </div>
            ) : null}
          </div>
        </div>
        <div className="grid grid-cols-1 gap-[30px] sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectPreviewCard
              key={project.slug}
              href={project.detailPath}
              revealOnCenterOnMobile
              {...project}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
