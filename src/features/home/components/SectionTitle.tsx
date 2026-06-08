import { Download } from 'lucide-react'
import { Button } from '@/components/ui/button'

type SectionTitleProps = {
  title: string
  showResumeButton?: boolean
}

export function SectionTitle({
  title,
  showResumeButton = false,
}: SectionTitleProps) {
  return (
    <div className="flex w-full items-center justify-between gap-8 border-b border-[#e5e7eb] py-8">
      <h2 className="m-0 text-4xl font-bold leading-[1.15] text-[#4b5563] md:text-5xl">
        {title}
      </h2>
      {showResumeButton && (
        <Button
          asChild
          variant="ghost"
          className="h-12 rounded-full px-[18px] text-base font-medium text-[#111928] hover:bg-[#f3f4f6]"
        >
          <a href="/#about">
            <Download className="size-6" aria-hidden="true" />
            My resume
          </a>
        </Button>
      )}
    </div>
  )
}
