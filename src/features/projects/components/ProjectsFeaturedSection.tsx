import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { projects } from '../projectsContent'
import { ProjectPlaceholderTile } from './ProjectPlaceholderTile'

const featuredProjects = projects.slice(0, 3)

export function ProjectsFeaturedSection() {
  const defaultProjectSlug = featuredProjects[0]?.slug
  const [selectedProjectSlug, setSelectedProjectSlug] =
    useState(defaultProjectSlug)

  const activeProjectSlug = selectedProjectSlug ?? defaultProjectSlug

  const activeProject =
    featuredProjects.find((project) => project.slug === activeProjectSlug) ??
    featuredProjects[0]

  function handleProjectSelect(projectSlug: string) {
    setSelectedProjectSlug(projectSlug)
  }

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

          <div className="-mt-4 flex flex-col gap-14 lg:hidden">
            {featuredProjects.map((project) => (
              <article key={project.slug} className="w-full">
                <div className="mb-5 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
                  <h2 className="m-0 text-[42px] font-semibold leading-[46px] tracking-normal text-[#111928]">
                    {project.title}
                  </h2>
                  <ArrowRight
                    className="size-7 text-[#111928]"
                    aria-hidden="true"
                  />
                </div>
                <ProjectPlaceholderTile
                  project={project}
                  metaVariant="featured"
                  className="h-[clamp(360px,92vw,500px)]"
                />
                <p className="m-0 mt-7 text-base font-normal leading-7 tracking-normal text-[#6b7280]">
                  {project.description}
                </p>
              </article>
            ))}
          </div>

          <ul className="m-0 hidden list-none flex-col gap-8 p-0 md:gap-10 lg:flex">
            {featuredProjects.map((project) => {
              const isActive = project.slug === activeProject.slug

              return (
                <li
                  key={project.slug}
                  className="border-b border-[#e5e7eb] pb-8 last:border-b-0 last:pb-0 md:pb-10"
                >
                  <button
                    type="button"
                    aria-pressed={isActive}
                    data-active={isActive}
                    onClick={() => handleProjectSelect(project.slug)}
                    onFocus={() => handleProjectSelect(project.slug)}
                    onMouseEnter={() => handleProjectSelect(project.slug)}
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
