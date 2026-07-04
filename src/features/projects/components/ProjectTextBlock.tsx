import { cn } from '@/lib/utils'
import type { ProjectCaseStudyTextBlock } from '../case-studies/types'

type ProjectTextBlockProps = {
  block: ProjectCaseStudyTextBlock
  className?: string
}

export function ProjectTextBlock({ block, className }: ProjectTextBlockProps) {
  return (
    <div
      className={cn(
        'border-t border-[#E5E7EB] pt-5 text-[18px] font-normal leading-[1.45] tracking-normal text-[#6b7280] md:pt-[22px]',
        className,
      )}
    >
      {block.paragraphs.map((paragraph, index) => (
        <p key={`${index}-${paragraph}`} className="m-0 max-w-[593px]">
          {paragraph}
        </p>
      ))}
    </div>
  )
}
