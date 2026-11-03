import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { projects } from '../projectsContent'
import { ProjectPlaceholderTile } from './ProjectPlaceholderTile'
import './ProjectsFeaturedSection.css'

const featuredProjectSlugs = ['delphi-one-ux-ui', 'bnc', 'agenda-vital']
const featuredProjects = featuredProjectSlugs.flatMap((slug) =>
  projects.filter((project) => project.slug === slug),
)

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
      className="projects-featured-section min-h-screen px-[clamp(20px,6.6vw,100px)] pb-12 pt-[132px] md:pb-16 md:pt-[156px] xl:flex xl:min-h-svh xl:items-center xl:py-[132px]"
    >
      <div className="mx-auto grid w-full max-w-[1312px] gap-12 xl:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] xl:items-center xl:gap-[clamp(48px,5vw,80px)]">
        <div className="flex min-w-0 flex-col">
          <div className="projects-featured-section__title-block mb-10 flex items-start justify-between gap-8 border-b border-[#e5e7eb] py-6 md:mb-16 md:border-b-0 md:pb-8 md:pt-0">
            <div>
              <p className="projects-featured-section__eyebrow m-0 text-sm font-medium uppercase leading-5 tracking-[0.12em] text-[#6b7280]">
                Selected work
              </p>
              <h1
                id="featured-projects-title"
                className="m-0 mt-4 text-3xl font-bold leading-[1.15] tracking-normal text-[#111928] md:text-5xl md:leading-[58px]"
              >
                Featured
              </h1>
            </div>
          </div>

          <div className="projects-featured-section__mobile-list flex flex-col gap-14 xl:hidden">
            {featuredProjects.map((project) => {
              const mobileProjectContent = (
                <>
                  <div className="projects-featured-section__project-heading mb-5 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-b border-[#e5e7eb] pb-5 md:border-b-0 md:pb-0">
                    <h2 className="m-0 text-3xl font-bold leading-[1.15] tracking-normal text-[#111928] md:text-[42px] md:font-semibold md:leading-[46px]">
                      {project.title}
                    </h2>
                    <ArrowRight
                      className="size-6 text-[#111928] md:size-7"
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
                </>
              )

              if (project.detailPath) {
                return (
                  <Link
                    key={project.slug}
                    to={project.detailPath}
                    className="block w-full text-inherit no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#111928]"
                    aria-label={`${project.title}: ${project.description}`}
                  >
                    {mobileProjectContent}
                  </Link>
                )
              }

              return (
                <article key={project.slug} className="w-full">
                  {mobileProjectContent}
                </article>
              )
            })}
          </div>

          <ul className="m-0 hidden list-none flex-col gap-8 p-0 md:gap-10 xl:flex">
            {featuredProjects.map((project) => {
              const isActive = project.slug === activeProject.slug

              return (
                <li
                  key={project.slug}
                  className="border-b border-[#e5e7eb] pb-8 last:border-b-0 last:pb-0 md:pb-10"
                >
                  {project.detailPath ? (
                    <Link
                      to={project.detailPath}
                      aria-current={isActive ? 'true' : undefined}
                      data-active={isActive}
                      onFocus={() => handleProjectSelect(project.slug)}
                      onMouseEnter={() => handleProjectSelect(project.slug)}
                      className={cn(
                        'group/title grid w-full cursor-pointer grid-cols-[minmax(0,1fr)_auto] items-center gap-4 text-left text-[#111928] no-underline transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#111928] md:gap-6',
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
                    </Link>
                  ) : (
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
                  )}
                </li>
              )
            })}
          </ul>
        </div>
        {activeProject ? (
          <div className="relative hidden xl:sticky xl:top-24 xl:block">
            {activeProject.detailPath ? (
              <Link
                to={activeProject.detailPath}
                className="block text-inherit no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#111928]"
                aria-label={`${activeProject.title}: ${activeProject.description}`}
              >
                <ProjectPlaceholderTile
                  project={activeProject}
                  metaVariant="featured"
                  className="h-[clamp(300px,48vw,520px)] md:h-[clamp(420px,47vw,600px)] xl:h-[min(58vh,620px)]"
                />
              </Link>
            ) : (
              <ProjectPlaceholderTile
                project={activeProject}
                metaVariant="featured"
                className="h-[clamp(300px,48vw,520px)] md:h-[clamp(420px,47vw,600px)] xl:h-[min(58vh,620px)]"
              />
            )}
            <div className="mt-5 flex flex-col items-start justify-between gap-4 2xl:flex-row 2xl:gap-8">
              <p className="m-0 max-w-[680px] text-base font-normal leading-6 tracking-normal text-[#6b7280]">
                {activeProject.description}
              </p>
              {activeProject.detailPath ? (
                <Link
                  to={activeProject.detailPath}
                  className="inline-flex shrink-0 items-center gap-3 pt-0.5 text-sm font-semibold leading-6 text-[#111928] no-underline md:text-base"
                >
                  View project
                  <ArrowRight className="size-5" aria-hidden="true" />
                </Link>
              ) : (
                <span className="inline-flex shrink-0 items-center gap-3 pt-0.5 text-sm font-semibold leading-6 text-[#111928] md:text-base">
                  View project
                  <ArrowRight className="size-5" aria-hidden="true" />
                </span>
              )}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  )
}
