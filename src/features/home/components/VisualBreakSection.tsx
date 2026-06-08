import projectPlaceholder from '@/assets/figma/project-placeholder.png'

export function VisualBreakSection() {
  return (
    <div
      className="h-[260px] w-full bg-cover bg-center md:h-[476px]"
      style={{ backgroundImage: `url(${projectPlaceholder})` }}
      aria-hidden="true"
    />
  )
}
