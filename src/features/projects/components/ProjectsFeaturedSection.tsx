import { useEffect, useRef, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { projects } from '../projectsContent'
import { ProjectPlaceholderTile } from './ProjectPlaceholderTile'

const featuredProjects = projects.slice(0, 3)

export function ProjectsFeaturedSection() {
  const defaultProjectSlug = featuredProjects[0]?.slug
  const [selectedProjectSlug, setSelectedProjectSlug] =
    useState(defaultProjectSlug)
  const projectItemRefs = useRef<Record<string, HTMLLIElement | null>>({})

  const activeProjectSlug = selectedProjectSlug ?? defaultProjectSlug

  const activeProject =
    featuredProjects.find((project) => project.slug === activeProjectSlug) ??
    featuredProjects[0]

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 1023px)')
    let frameId: number | null = null

    function updateActiveProject() {
      if (!mediaQuery.matches) {
        return
      }

      const viewportTarget = window.innerHeight * 0.42
      let nearestSlug = defaultProjectSlug
      let nearestDistance = Number.POSITIVE_INFINITY

      featuredProjects.forEach((project) => {
        const item = projectItemRefs.current[project.slug]
        const trigger = item?.querySelector('button')

        if (!trigger) {
          return
        }

        const rect = trigger.getBoundingClientRect()
        const triggerCenter = rect.top + rect.height / 2
        const distance = Math.abs(triggerCenter - viewportTarget)

        if (distance < nearestDistance) {
          nearestDistance = distance
          nearestSlug = project.slug
        }
      })

      if (nearestSlug) {
        setSelectedProjectSlug((currentSlug) =>
          currentSlug === nearestSlug ? currentSlug : nearestSlug,
        )
      }
    }

    function scheduleUpdate() {
      if (frameId !== null) {
        return
      }

      frameId = window.requestAnimationFrame(() => {
        frameId = null
        updateActiveProject()
      })
    }

    updateActiveProject()
    window.addEventListener('scroll', scheduleUpdate, { passive: true })
    window.addEventListener('resize', scheduleUpdate)
    mediaQuery.addEventListener('change', scheduleUpdate)

    return () => {
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId)
      }

      window.removeEventListener('scroll', scheduleUpdate)
      window.removeEventListener('resize', scheduleUpdate)
      mediaQuery.removeEventListener('change', scheduleUpdate)
    }
  }, [defaultProjectSlug])

  return (
    <section
      aria-labelledby="featured-projects-title"
      className="min-h-screen px-[clamp(20px,6.6vw,100px)] pb-[30px] pt-[132px] md:pt-[172px]"
    >
      <div className="mx-auto grid w-full max-w-[1312px] gap-12 lg:grid-cols-[minmax(280px,0.72fr)_minmax(560px,1.28fr)] lg:items-start lg:gap-[clamp(48px,5vw,80px)]">
        <div className="flex min-w-0 flex-col">
          <div className="mb-14 flex items-start justify-between gap-8 pb-8 md:mb-16">
            <div>
              <p className="m-0 text-sm font-medium uppercase leading-5 tracking-[0.12em] text-[#6b7280]">
                Selected work
              </p>
              <h1
                id="featured-projects-title"
                className="m-0 mt-4 text-5xl font-bold leading-[58px] tracking-normal text-[#111928]"
              >
                Featured
              </h1>
            </div>
          </div>

          <ul className="m-0 flex list-none flex-col gap-8 p-0 md:gap-10">
            {featuredProjects.map((project) => {
              const isActive = project.slug === activeProject.slug

              return (
                <li
                  key={project.slug}
                  ref={(node) => {
                    projectItemRefs.current[project.slug] = node
                  }}
                  className="border-b border-[#e5e7eb] pb-8 last:border-b-0 last:pb-0 md:pb-10"
                >
                  <button
                    type="button"
                    aria-pressed={isActive}
                    data-active={isActive}
                    onClick={() => setSelectedProjectSlug(project.slug)}
                    onFocus={() => setSelectedProjectSlug(project.slug)}
                    onMouseEnter={() => setSelectedProjectSlug(project.slug)}
                    className={cn(
                      'group/title grid w-full cursor-pointer grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-0 bg-transparent px-0 py-0 text-left text-[#111928] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#111928] md:gap-6',
                      isActive ? 'font-bold' : 'font-normal',
                    )}
                  >
                    <span
                      className={cn(
                        'text-[28px] leading-[30px] text-[#111928]',
                        isActive
                          ? 'font-semibold'
                          : 'font-normal group-hover/title:font-semibold group-focus-visible/title:font-semibold',
                      )}
                    >
                      {project.title}
                    </span>
                    <ArrowRight
                      className={cn(
                        'size-5 justify-self-end text-[#111928] transition-transform duration-200 motion-reduce:transition-none',
                        isActive
                          ? 'translate-x-0 opacity-100'
                          : '-translate-x-2 opacity-0 group-hover/title:translate-x-0 group-hover/title:opacity-100 group-focus-visible/title:translate-x-0 group-focus-visible/title:opacity-100',
                      )}
                      aria-hidden="true"
                    />
                  </button>
                  {isActive ? (
                    <div className="mt-5 flex flex-col gap-4 lg:hidden">
                      <ProjectPlaceholderTile
                        project={project}
                        metaVariant="featured"
                        className="h-[clamp(310px,86vw,430px)]"
                      />
                      <p className="m-0 text-base font-normal leading-6 tracking-normal text-[#6b7280]">
                        {project.description}
                      </p>
                    </div>
                  ) : null}
                </li>
              )
            })}
          </ul>
        </div>
        {activeProject ? (
          <div className="hidden lg:sticky lg:top-24 lg:block">
            <ProjectPlaceholderTile
              project={activeProject}
              metaVariant="featured"
              className="h-[clamp(300px,48vw,520px)] md:h-[clamp(420px,47vw,600px)] lg:h-[min(58vh,620px)]"
            />
            <div className="mt-5 flex items-start justify-between gap-8 max-sm:flex-col max-sm:gap-4">
              <p className="m-0 max-w-[680px] text-base font-normal leading-6 tracking-normal text-[#6b7280]">
                {activeProject.description}
              </p>
              <span className="inline-flex shrink-0 items-center gap-3 pt-0.5 text-sm font-semibold leading-6 text-[#111928] md:text-base">
                View project
                <ArrowRight className="size-5" aria-hidden="true" />
              </span>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  )
}
