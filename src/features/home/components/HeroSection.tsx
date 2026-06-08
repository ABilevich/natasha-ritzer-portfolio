import './HeroSection.css'

export function HeroSection() {
  return (
    <section
      className="home-hero-grid grid min-h-svh place-items-center px-5 pb-10 pt-24 max-[720px]:pt-[84px]"
      aria-labelledby="hero-title"
    >
      <h1
        id="hero-title"
        className="floating-name m-0 max-w-[min(980px,90vw)] text-balance text-center font-[var(--font-display)] text-[clamp(4.4rem,14vw,10rem)] font-extrabold leading-[0.9] text-[var(--color-heading)] motion-reduce:animate-none"
      >
        Natasha Ritzer
      </h1>
    </section>
  )
}
