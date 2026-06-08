import projectPlaceholder from '@/assets/figma/project-placeholder.png'

const heroTiles = [
  'left-0 top-0',
  'left-[18%] top-[32%]',
  'left-[8%] top-[68%]',
  'left-[58%] top-0',
  'right-[8%] top-[36%]',
  'left-[52%] top-[66%]',
  'right-[5%] top-[86%]',
]

export function HeroSection() {
  return (
    <section
      className="relative min-h-svh overflow-hidden bg-white/70 md:min-h-[920px]"
      aria-labelledby="hero-title"
    >
      <div className="absolute inset-0" aria-hidden="true">
        {heroTiles.map((position, index) => (
          <img
            key={position}
            src={projectPlaceholder}
            alt=""
            className={`absolute h-[155px] w-[155px] object-cover opacity-80 md:h-[249px] md:w-[246px] ${position}`}
            style={{ transform: index % 2 ? 'translateY(-12%)' : undefined }}
          />
        ))}
      </div>
      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-8 whitespace-nowrap px-5 text-center">
        <h1
          id="hero-title"
          className="m-0 text-[44px] font-bold leading-tight text-[#111928] md:text-7xl md:leading-[72px]"
        >
          Natasha Ritzer
        </h1>
        <p className="m-0 text-xl font-medium leading-8 text-[#6b7280] md:text-[28px] md:leading-10">
          UX UI Designer
        </p>
      </div>
    </section>
  )
}
