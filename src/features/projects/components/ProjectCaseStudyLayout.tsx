import { Link } from 'react-router-dom'
import { ChevronLeft } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { ProjectCaseStudy } from '../projectCaseStudies'

type ProjectCaseStudyLayoutProps = {
  project: ProjectCaseStudy
}

const placeholderBackground = {
  backgroundImage:
    'linear-gradient(135deg, rgba(17, 25, 40, 0.05) 0%, rgba(17, 25, 40, 0.02) 46%, rgba(17, 25, 40, 0.07) 100%)',
}

function ProjectImagePlaceholder({
  className,
  label,
}: {
  className?: string
  label: string
}) {
  return (
    <figure
      role="img"
      aria-label={label}
      className={cn('m-0 overflow-hidden bg-[#f3f4f6]', className)}
      style={placeholderBackground}
    />
  )
}

export function ProjectCaseStudyLayout({
  project,
}: ProjectCaseStudyLayoutProps) {
  return (
    <article className="bg-white text-[#111928]">
      <section className="px-[clamp(20px,6.6vw,100px)] pb-[70px] pt-[132px] md:pb-[96px] md:pt-[172px]">
        <div className="mx-auto w-full max-w-[1216px]">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-[20px] font-normal leading-7 tracking-normal text-[#111928] no-underline transition-opacity hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#111928]"
          >
            <ChevronLeft className="size-7 stroke-[1.8]" aria-hidden="true" />
            Projects
          </Link>
        </div>
        <div className="mx-auto mt-[54px] grid w-full max-w-[1216px] items-stretch gap-12 lg:grid-cols-[minmax(0,552px)_minmax(520px,633px)] lg:justify-between lg:gap-[30px]">
          <div className="flex max-w-[552px] flex-col lg:justify-between">
            <h1 className="m-0 text-[clamp(44px,12vw,60px)] font-bold leading-[1.08] tracking-normal text-[#111928]">
              {project.title}
            </h1>
            <div className="mt-8 flex flex-col gap-6 text-[18px] font-normal leading-6 tracking-normal text-[#6b7280]">
              {project.intro.map((paragraph) => (
                <p key={paragraph} className="m-0">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <dl className="m-0 self-start overflow-hidden rounded-[10px] border border-[#E5E7EB] bg-white">
            {project.details.map((detail) => (
              <div
                key={detail.label}
                className="grid min-h-[56px] grid-cols-1 gap-1 border-b border-[#E5E7EB] px-5 py-4 last:border-b-0 sm:grid-cols-[118px_minmax(0,1fr)] sm:items-center sm:gap-6 md:px-6"
              >
                <dt className="text-base font-normal leading-6 text-[#6b7280]">
                  {detail.label}
                </dt>
                <dd className="m-0 break-words text-left text-base font-medium leading-6 text-[#111928] sm:text-right">
                  {detail.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section
        aria-label={`${project.title} gallery`}
        className="px-[clamp(20px,6.6vw,100px)] pb-20 md:pb-[120px]"
      >
        <div className="mx-auto grid max-w-[1216px] gap-[30px] lg:grid-cols-2">
          {project.gallery.map((item, index) => (
            <ProjectImagePlaceholder
              key={item.id}
              label={`${project.title} project image ${index + 1}`}
              className={cn(
                item.aspectClassName,
                index === 0 && 'lg:col-span-2 lg:min-h-[280px]',
                index > 0 && 'lg:min-h-[320px]',
                index > 0 && 'lg:[grid-row:2]',
                index === 1 && 'lg:[grid-column:1]',
                index === 2 && 'lg:[grid-column:2]',
              )}
            />
          ))}
        </div>
      </section>
    </article>
  )
}
