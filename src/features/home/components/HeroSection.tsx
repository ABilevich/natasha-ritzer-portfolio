
import { useHeroParallax } from '../hooks/useHeroParallax'
import image0 from '@/assets/figma/s-l1200.png'
import image1 from '@/assets/figma/Baby.webp'

const speed = 2

const heroTiles = [
  { image: image1, position: 'left-0 top-0', speed: 0.1 * speed, offset: 0 },
  { image: image0, position: 'left-[18%] top-[32%]', speed: 0.18 * speed, offset: -12 },
  { image: image1, position: 'left-[8%] top-[68%]', speed: 0.14 * speed, offset: 0 },
  { image: image0, position: 'left-[58%] top-0', speed: 0.08 * speed, offset: 0 },
  { image: image0, position: 'right-[8%] top-[36%]', speed: 0.2 * speed, offset: -12 },
  { image: image1, position: 'left-[52%] top-[66%]', speed: 0.16 * speed, offset: 0 },
  { image: image0, position: 'right-[5%] top-[86%]', speed: 0.12 * speed, offset: -12 },
  { image: image1, position: 'right-[55%] top-[85%]', speed: 0.06 * speed, offset: 0 },
]

export function HeroSection() {
  const scrollY = useHeroParallax()

  return (
    <section
      className="relative min-h-[760px] overflow-hidden bg-white/70 sm:min-h-svh lg:min-h-[920px]"
      aria-labelledby="hero-title"
    >
      <div className="absolute inset-0" aria-hidden="true">
        {heroTiles.map((tile) => (
          <img
            key={tile.position}
            src={tile.image}
            alt=""
            className={`absolute h-32 w-32 object-cover opacity-80 will-change-transform sm:h-[155px] sm:w-[155px] md:h-[190px] md:w-[188px] lg:h-[249px] lg:w-[246px] ${tile.position}`}
            style={{
              transform: `translate3d(0, ${tile.offset - scrollY * tile.speed}px, 0)`,
            }}
          />
        ))}
      </div>
      <div className="absolute left-1/2 top-1/2 flex w-full max-w-[min(760px,calc(100%_-_40px))] -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-5 px-5 text-center md:gap-8">
        <h1
          id="hero-title"
          className="m-0 text-[clamp(2.4rem,11vw,4.5rem)] font-bold leading-tight text-[#111928] md:leading-[72px]"
        >
          Natasha Ritzer
        </h1>
        <p className="m-0 text-lg font-medium leading-7 text-[#6b7280] md:text-[28px] md:leading-10">
          UX UI Designer
        </p>
      </div>
    </section>
  )
}
