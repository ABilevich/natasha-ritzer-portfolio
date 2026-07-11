import { cn } from '@/lib/utils'

type SquareGridBackgroundProps = {
  className?: string
}

export function SquareGridBackground({
  className,
}: SquareGridBackgroundProps) {
  return (
    <div
      className={cn(
        'pointer-events-none absolute inset-0 opacity-[0.38]',
        className,
      )}
      aria-hidden="true"
    >
      <div className="absolute inset-x-0 top-0 h-[72%] bg-[linear-gradient(#e5e7eb_1px,transparent_1px),linear-gradient(90deg,#e5e7eb_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-b from-white/0 via-white to-white" />
    </div>
  )
}
