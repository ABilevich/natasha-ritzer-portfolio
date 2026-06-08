import projectPlaceholder from '@/assets/figma/project-placeholder.png'

export function VisualBreakSection() {
  return (
    <div
      className="h-[220px] w-full bg-cover bg-center sm:h-[320px] lg:h-[476px]"
      style={{ backgroundImage: `url(${projectPlaceholder})` }}
      aria-hidden="true"
    />
  )
}
