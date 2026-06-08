import { Badge } from '@/components/ui/badge'

export function AboutSection() {
  return (
    <section
      id="about"
      className="flex min-h-[78svh] scroll-mt-[72px] items-center border-t border-[var(--color-border)] bg-[var(--color-surface)] max-[720px]:min-h-[64svh] max-[720px]:scroll-mt-16"
      aria-labelledby="about-title"
    >
      <div className="mx-auto w-[min(1120px,calc(100%_-_40px))]">
        <Badge
          variant="outline"
          className="mb-4 border-[var(--color-accent)] bg-transparent text-[0.78rem] font-extrabold text-[var(--color-accent)]"
        >
          01
        </Badge>
        <h2
          id="about-title"
          className="m-0 font-[var(--font-display)] text-[clamp(3rem,8vw,7rem)] leading-[0.95] text-[var(--color-heading)]"
        >
          About
        </h2>
      </div>
    </section>
  )
}
