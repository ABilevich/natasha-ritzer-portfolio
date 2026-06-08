export function SkillsSection() {
  return (
    <section
      id="skills"
      className="flex min-h-[78svh] scroll-mt-[72px] items-center border-t border-[var(--color-border)] bg-[var(--color-bg)] max-[720px]:min-h-[64svh] max-[720px]:scroll-mt-16"
      aria-labelledby="skills-title"
    >
      <div className="mx-auto w-[min(1120px,calc(100%_-_40px))]">
        <p className="mb-4 mt-0 text-[0.78rem] font-extrabold text-[var(--color-accent)]">
          02
        </p>
        <h2
          id="skills-title"
          className="m-0 font-[var(--font-display)] text-[clamp(3rem,8vw,7rem)] leading-[0.95] text-[var(--color-heading)]"
        >
          Skills
        </h2>
      </div>
    </section>
  )
}
