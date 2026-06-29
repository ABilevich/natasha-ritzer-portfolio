import { useRef, useState } from 'react'
import type { MouseEvent, PointerEvent } from 'react'
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
  className,
}: {
  item: ProjectCaseStudyGalleryItem
  className?: string
}) {
  const [isZoomed, setIsZoomed] = useState(false)
  const [zoomPosition, setZoomPosition] = useState({ x: 50, y: 50 })
  const lastPointerType = useRef<PointerEvent<HTMLButtonElement>['pointerType']>('mouse')

  const updateZoomPosition = (event: PointerEvent<HTMLButtonElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect()
    const x = ((event.clientX - bounds.left) / bounds.width) * 100
    const y = ((event.clientY - bounds.top) / bounds.height) * 100

    setZoomPosition({
      x: Math.min(100, Math.max(0, x)),
      y: Math.min(100, Math.max(0, y)),
    })
  }

  const resetZoom = () => {
    setIsZoomed(false)
    setZoomPosition({ x: 50, y: 50 })
  }

  const toggleTouchOrKeyboardZoom = (
    event: MouseEvent<HTMLButtonElement>,
  ) => {
    if (lastPointerType.current === 'mouse' && event.detail !== 0) return

    setIsZoomed((current) => !current)
  }

  return (
    <button
      type="button"
      aria-label={`Zoom ${item.alt}`}
      aria-pressed={isZoomed}
      onClick={toggleTouchOrKeyboardZoom}
      onFocus={() => setIsZoomed(true)}
      onBlur={resetZoom}
      onPointerEnter={(event) => {
        lastPointerType.current = event.pointerType
        updateZoomPosition(event)
        if (event.pointerType !== 'touch') setIsZoomed(true)
      }}
      onPointerLeave={() => {
        if (lastPointerType.current !== 'touch') resetZoom()
      }}
      onPointerMove={(event) => {
        lastPointerType.current = event.pointerType
        if (event.pointerType !== 'touch' || isZoomed) {
          updateZoomPosition(event)
        }
      }}
      style={{
        backgroundImage: `url(${item.image})`,
        backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
        backgroundSize: isZoomed ? '220%' : 'cover',
      }}
      className={cn(
        'm-0 flex overflow-hidden bg-[#f3f4f6] bg-no-repeat p-0 text-left transition-[background-size] duration-200 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#111928]',
        item.variant === 'tall' &&
          'aspect-[1256/1682] items-start lg:aspect-auto lg:h-full',
        item.id === 'flow' && 'aspect-[1184/813] items-center',
        item.id === 'interface' && 'aspect-[1184/790] items-center',
        className,
      )}
    >
      <img
        src={item.image}
        alt={item.alt}
        className={cn(
          'h-full w-full object-cover object-center transition-opacity duration-200',
          isZoomed && 'opacity-0',
        )}
      />
    </button>
  )
}

export function ProjectCaseStudyLayout({
  project,
}: ProjectCaseStudyLayoutProps) {
  const [primaryGalleryItem, ...secondaryGalleryItems] = project.gallery

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
        <div className="mx-auto grid max-w-[1216px] gap-5 md:gap-[30px] lg:grid-cols-[minmax(0,593px)_minmax(0,593px)] lg:items-stretch">
          {primaryGalleryItem ? (
            <ProjectGalleryImage
              key={primaryGalleryItem.id}
              item={primaryGalleryItem}
            />
          ) : null}
          <div className="grid gap-5 md:gap-[30px]">
            {secondaryGalleryItems.map((item) => (
              <ProjectGalleryImage key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>
    </article>
  )
}
