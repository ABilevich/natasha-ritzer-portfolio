import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import './ProjectPreviewCard.css'

type ProjectPreviewCardProps = {
  title: string
  description: string
  image: string
  isInteractive?: boolean
}

export function ProjectPreviewCard({
  title,
  description,
  image,
  isInteractive = true,
}: ProjectPreviewCardProps) {
  const [isRevealed, setIsRevealed] = useState(false)

  return (
    <article
      tabIndex={isInteractive ? 0 : -1}
      aria-label={`${title}: ${description}`}
      onBlur={() => setIsRevealed(false)}
      onFocus={() => setIsRevealed(true)}
      onMouseEnter={() => setIsRevealed(true)}
      onMouseLeave={() => setIsRevealed(false)}
      className={cn(
        'project-preview-card group relative flex h-[220px] w-full items-end overflow-hidden p-5 text-left no-underline outline-none md:h-[300px] md:p-6 lg:h-[372px]',
        isRevealed && 'is-revealed',
      )}
    >
      <img
        src={image}
        alt=""
        className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-[1.03] group-focus-visible:scale-[1.03]"
      />
      <div className="project-preview-overlay absolute inset-0 bg-gradient-to-b from-white/0 from-35% to-white transition-opacity duration-300" />
      <div className="project-preview-content relative flex w-full flex-col gap-2 transition-all duration-300">
        <div className="flex items-center justify-between gap-4">
          <h4 className="m-0 text-xl font-normal leading-[30px] text-[#111928] md:text-2xl">
            {title}
          </h4>
          <ArrowRight className="size-6 shrink-0 text-[#111928]" />
        </div>
        <p className="m-0 max-w-[34rem] text-sm leading-6 text-[#4b5563] md:text-base">
          {description}
        </p>
      </div>
    </article>
  )
}
