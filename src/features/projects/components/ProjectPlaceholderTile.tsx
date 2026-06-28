import { ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { PortfolioProject } from '../projectsContent'
import './projectPlaceholders.css'

type ProjectPlaceholderTileProps = {
  project: PortfolioProject
  className?: string
  showMeta?: boolean
  metaVariant?: 'category' | 'featured'
}

export function ProjectPlaceholderTile({
  project,
  className,
  showMeta = false,
  metaVariant = 'category',
}: ProjectPlaceholderTileProps) {
  const isFeaturedMeta = metaVariant === 'featured'

  return (
    <article
      aria-label={`${project.title}, ${project.category}`}
      className={cn(
        'group relative isolate min-h-[220px] overflow-hidden bg-[#f8fafc] md:min-h-[300px]',
        className,
      )}
    >
      {isFeaturedMeta ? (
        <img
          src={project.image}
          alt=""
          className="absolute inset-0 size-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.015] group-focus-within:scale-[1.015]"
        />
      ) : (
        <div className="project-image-placeholder absolute inset-0" />
      )}
      {showMeta && !isFeaturedMeta ? (
        <div
          className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-5 bg-gradient-to-t from-white via-white/90 to-white/0 p-5 pt-20 md:p-7 md:pt-28"
        >
          <div className="min-w-0">
            <p className="m-0 text-sm font-medium text-[#6b7280]">
              {project.category}
            </p>
            <h3
              className="m-0 mt-1 text-2xl font-semibold leading-tight text-[#111928] md:text-[32px]"
            >
              {project.title}
            </h3>
          </div>
          <ArrowUpRight
            className="mb-1 size-6 shrink-0 text-[#111928] md:size-7"
            aria-hidden="true"
          />
        </div>
      ) : null}
    </article>
  )
}
