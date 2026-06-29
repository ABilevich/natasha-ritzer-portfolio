import { Link } from 'react-router-dom'
import { ChevronLeft } from 'lucide-react'
import { cn } from '@/lib/utils'
import type {
  ProjectCaseStudy,
  ProjectCaseStudyGalleryItem,
} from '../projectCaseStudies'

type ProjectCaseStudyLayoutProps = {
  project: ProjectCaseStudy
}

function ProjectGalleryImage({
  item,
  index,
}: {
  item: ProjectCaseStudyGalleryItem
  index: number
}) {
  return (
    <figure
      className={cn(
        'm-0 flex overflow-hidden bg-[#f3f4f6]',
        item.variant === 'tall'
          ? 'aspect-[1196/1682] items-start justify-center lg:aspect-auto lg:row-span-2'
          : 'aspect-[1368/764] items-center justify-center lg:aspect-auto',
        index === 0 && 'lg:[grid-column:1] lg:[grid-row:1/span_2]',
        index === 1 && 'lg:[grid-column:2] lg:[grid-row:1]',
        index === 2 && 'lg:[grid-column:2] lg:[grid-row:2]',
      )}
    >
      <img
        src={item.image}
        alt={item.alt}
        className="h-full w-full object-contain object-center"
      />
    </figure>
  )
}

export function ProjectCaseStudyLayout({
  project,
}: ProjectCaseStudyLayoutProps) {
  return (
    <article className="bg-white text-[#111928]">
      <section className="px-[clamp(20px,6.6vw,100px)] pb-14 pt-[112px] md:pb-[96px] md:pt-[172px]">
        <div className="mx-auto w-full max-w-[1216px]">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-[20px] font-normal leading-7 tracking-normal text-[#111928] no-underline transition-opacity hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#111928]"
          >
            <ChevronLeft className="size-7 stroke-[1.8]" aria-hidden="true" />
            Projects
          </Link>
        </div>
        <div className="mx-auto mt-10 grid w-full max-w-[1216px] items-stretch gap-10 md:mt-[54px] lg:grid-cols-[minmax(0,593px)_minmax(0,593px)] lg:justify-between lg:gap-[30px]">
          <div className="flex max-w-[593px] flex-col lg:justify-between">
            <h1 className="m-0 text-[clamp(44px,12vw,60px)] font-bold leading-[1.08] tracking-normal text-[#111928]">
              {project.title}
            </h1>
            <div className="mt-7 flex flex-col gap-5 text-[18px] font-normal leading-7 tracking-normal text-[#6b7280] md:mt-8 md:gap-6 md:leading-6">
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
                className="grid min-h-[56px] grid-cols-[88px_minmax(0,1fr)] items-center gap-4 border-b border-[#E5E7EB] px-4 py-4 last:border-b-0 max-[360px]:grid-cols-1 max-[360px]:gap-1 sm:grid-cols-[118px_minmax(0,1fr)] sm:gap-6 md:px-6"
              >
                <dt className="text-base font-normal leading-6 text-[#6b7280]">
                  {detail.label}
                </dt>
                <dd className="m-0 break-words text-right text-base font-medium leading-6 text-[#111928] max-[360px]:text-left">
                  {detail.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section
        aria-label={`${project.title} gallery`}
        className="px-[clamp(20px,6.6vw,100px)] pb-16 md:pb-[120px]"
      >
        <div className="mx-auto grid max-w-[1216px] gap-5 md:gap-[30px] lg:grid-cols-[minmax(0,593px)_minmax(0,593px)] lg:grid-rows-[405.5px_405.5px]">
          {project.gallery.map((item, index) => (
            <ProjectGalleryImage
              key={item.id}
              item={item}
              index={index}
            />
          ))}
        </div>
      </section>
    </article>
  )
}
