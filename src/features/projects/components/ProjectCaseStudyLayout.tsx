import { useEffect, useState } from 'react'
import type { MouseEvent, SyntheticEvent } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft } from 'lucide-react'
import { cn } from '@/lib/utils'
import type {
  ProjectCaseStudy,
  ProjectCaseStudyGalleryItem,
} from '../case-studies/types'
import { ProjectTextBlock } from './ProjectTextBlock'

type ProjectCaseStudyLayoutProps = {
  project: ProjectCaseStudy
}

function getAverageImageLuminance(image: HTMLImageElement) {
  const canvas = document.createElement('canvas')
  const context = canvas.getContext('2d', { willReadFrequently: true })

  if (!context || image.naturalWidth === 0 || image.naturalHeight === 0) {
    return null
  }

  canvas.width = 32
  canvas.height = 32
  let imageData: ImageData

  try {
    context.drawImage(image, 0, 0, canvas.width, canvas.height)
    imageData = context.getImageData(0, 0, canvas.width, canvas.height)
  } catch {
    return null
  }

  const { data } = imageData
  let luminance = 0

  for (let index = 0; index < data.length; index += 4) {
    luminance += data[index] * 0.2126 + data[index + 1] * 0.7152 + data[index + 2] * 0.0722
  }

  return luminance / (data.length / 4)
}

function ProjectGalleryImage({
  item,
  className,
  imageClassName,
  onOpen,
}: {
  item: ProjectCaseStudyGalleryItem
  className?: string
  imageClassName?: string
  onOpen: (item: ProjectCaseStudyGalleryItem) => void
}) {
  return (
    <button
      type="button"
      aria-label={`Open ${item.alt}`}
      onClick={() => onOpen(item)}
      className={cn(
        'm-0 flex cursor-zoom-in items-center justify-center overflow-hidden bg-[#f3f4f6] p-0 text-left transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#111928]',
        item.variant === 'tall' &&
          'aspect-[1256/1682] lg:aspect-auto lg:h-full',
        item.id === 'flow' && 'aspect-[1184/813] items-center',
        item.id === 'interface' && 'aspect-[1184/790] items-center',
        item.id === 'structure' && 'aspect-[684/390] items-center',
        item.id === 'crm' && 'aspect-[684/421] items-center',
        item.id === 'app-showcase' && 'aspect-[593/360] items-center',
        item.id === 'brand-showcase' && 'aspect-[593/360] items-center',
        className,
      )}
    >
      <img
        src={item.image}
        alt={item.alt}
        className={cn('h-full w-full object-contain object-center', imageClassName)}
      />
    </button>
  )
}

function ProjectGallery({
  project,
  onOpen,
}: {
  project: ProjectCaseStudy
  onOpen: (item: ProjectCaseStudyGalleryItem) => void
}) {
  if (project.galleryLayout === 'grid-2x2') {
    return (
      <div className="mx-auto grid max-w-[1312px] gap-5 md:gap-[30px] lg:grid-cols-[minmax(0,593px)_minmax(0,689px)]">
        {project.gallery.map((item) => (
          <ProjectGalleryImage
            key={item.id}
            item={item}
            className="aspect-[593/360] items-center bg-[#effffa] lg:aspect-auto lg:h-[369px]"
            onOpen={onOpen}
          />
        ))}
      </div>
    )
  }

  const [primaryGalleryItem, ...secondaryGalleryItems] = project.gallery

  return (
    <div className="mx-auto grid max-w-[1312px] gap-5 md:gap-[30px] lg:grid-cols-[minmax(0,593px)_minmax(0,689px)] lg:items-stretch">
      {primaryGalleryItem ? (
        <div
          className={cn(
            'grid gap-6 md:gap-[30px]',
            project.galleryNote
              ? 'lg:h-full lg:grid-rows-[minmax(0,1fr)_auto]'
              : 'content-start',
          )}
        >
          <ProjectGalleryImage
            key={primaryGalleryItem.id}
            item={primaryGalleryItem}
            className={project.galleryNote ? 'relative min-h-0 lg:aspect-auto lg:h-full' : undefined}
            imageClassName={
              project.galleryNote
                ? 'absolute inset-0 object-cover object-top'
                : undefined
            }
            onOpen={onOpen}
          />
          {project.galleryNote ? (
            <ProjectTextBlock block={project.galleryNote} />
          ) : null}
        </div>
      ) : null}
      <div className="grid gap-5 md:gap-[30px]">
        {secondaryGalleryItems.map((item) => (
          <ProjectGalleryImage
            key={item.id}
            item={item}
            className="xl:aspect-auto xl:h-[405px]"
            onOpen={onOpen}
          />
        ))}
      </div>
    </div>
  )
}

function ProjectImageViewer({
  item,
  onClose,
}: {
  item: ProjectCaseStudyGalleryItem | null
  onClose: () => void
}) {
  const [isZoomed, setIsZoomed] = useState(false)
  const [isDarkImage, setIsDarkImage] = useState(false)
  const [zoomOrigin, setZoomOrigin] = useState({ x: 50, y: 50 })

  useEffect(() => {
    if (!item) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = originalOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [item, onClose])

  if (!item) return null

  const updateZoomOrigin = (event: MouseEvent<HTMLImageElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect()
    const x = ((event.clientX - bounds.left) / bounds.width) * 100
    const y = ((event.clientY - bounds.top) / bounds.height) * 100

    setZoomOrigin({
      x: Math.min(100, Math.max(0, x)),
      y: Math.min(100, Math.max(0, y)),
    })
  }

  const handleImageClick = (event: MouseEvent<HTMLImageElement>) => {
    event.stopPropagation()
    updateZoomOrigin(event)
    setIsZoomed((current) => !current)
  }

  const handleImageLoad = (event: SyntheticEvent<HTMLImageElement>) => {
    const luminance = getAverageImageLuminance(event.currentTarget)

    if (luminance !== null) {
      setIsDarkImage(luminance < 115)
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 bg-white/95"
      role="dialog"
      aria-modal="true"
      aria-label="Project image viewer"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        className={cn(
          'absolute right-4 top-4 z-10 inline-flex size-9 items-center justify-center rounded-full p-0 shadow-[0_8px_24px_rgba(17,25,40,0.14)] backdrop-blur-sm transition-colors hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 sm:right-6 sm:top-6',
          isDarkImage
            ? 'bg-[#111928]/45 text-white focus-visible:outline-white'
            : 'bg-white/75 text-[#111928] focus-visible:outline-[#111928]',
        )}
        aria-label="Close image viewer"
      >
        <svg
          aria-hidden="true"
          className="size-8"
          focusable="false"
          viewBox="0 0 24 24"
        >
          <path
            d="M18.3 5.71 12 12l6.3 6.29-1.41 1.41L10.59 13.41 4.29 19.71 2.88 18.3 9.17 12 2.88 5.71 4.29 4.29l6.3 6.3 6.3-6.3z"
            fill="currentColor"
          />
        </svg>
      </button>

      <div
        className="flex h-full w-full items-center justify-center overflow-hidden px-4 py-4 sm:px-6 sm:py-6"
      >
        <img
          src={item.image}
          alt={item.alt}
          draggable={false}
          onLoad={handleImageLoad}
          onClick={handleImageClick}
          onMouseMove={(event) => {
            if (isZoomed) updateZoomOrigin(event)
          }}
          className={cn(
            'max-h-full max-w-full select-none object-contain',
            isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in',
            !isZoomed && 'transition-transform duration-300 ease-out',
          )}
          style={{
            transform: isZoomed ? 'scale(1.85)' : 'scale(1)',
            transformOrigin: `${zoomOrigin.x}% ${zoomOrigin.y}%`,
          }}
        />
      </div>
    </div>
  )
}

export function ProjectCaseStudyLayout({
  project,
}: ProjectCaseStudyLayoutProps) {
  const [activeGalleryItem, setActiveGalleryItem] =
    useState<ProjectCaseStudyGalleryItem | null>(null)

  return (
    <article className="bg-white text-[#111928]">
      <section
        className="px-[clamp(20px,6.6vw,100px)] pb-[54px] pt-[112px] md:pt-[172px]"
      >
        <div className="mx-auto w-full max-w-[1312px]">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-[20px] font-normal leading-7 tracking-normal text-[#111928] no-underline transition-opacity hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#111928]"
          >
            <ChevronLeft className="size-7 stroke-[1.8]" aria-hidden="true" />
            Projects
          </Link>
        </div>
        <div className="mx-auto mt-10 grid w-full max-w-[1312px] items-stretch gap-10 md:mt-[54px] lg:grid-cols-[minmax(0,593px)_minmax(0,689px)] lg:justify-between lg:gap-[30px]">
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

          <dl
            className="m-0 self-stretch overflow-hidden rounded-[10px] border border-[#E5E7EB] bg-white lg:flex lg:flex-col"
          >
            {project.details.map((detail) => (
              <div
                key={detail.label}
                className={cn(
                  'grid min-h-[56px] grid-cols-[88px_minmax(0,1fr)] items-center gap-4 border-b border-[#E5E7EB] px-4 py-4 last:border-b-0 max-[360px]:grid-cols-1 max-[360px]:gap-1 sm:grid-cols-[118px_minmax(0,1fr)] sm:gap-6 md:px-6',
                  'lg:flex-1',
                )}
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
        <ProjectGallery project={project} onOpen={setActiveGalleryItem} />
      </section>
      <ProjectImageViewer
        key={activeGalleryItem?.id ?? 'closed'}
        item={activeGalleryItem}
        onClose={() => setActiveGalleryItem(null)}
      />
    </article>
  )
}
