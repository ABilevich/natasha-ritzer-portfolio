import { GradientBlobBackground } from './GradientBlobBackground'

export function HeroSection() {
  return (
    <section
      className="relative min-h-[760px] overflow-hidden bg-white sm:min-h-svh lg:min-h-[920px]"
      aria-labelledby="hero-title"
    >
      <GradientBlobBackground
        blobSizes={{
          first: '120%',
          second: '120%',
          third: '120%',
          fourth: '120%',
          fifth: '120%',
          pointer: '120%',
        }}
      />
      <div className="absolute left-1/2 top-1/2 z-10 flex w-full max-w-[min(760px,calc(100%_-_40px))] -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-5 px-5 text-center md:gap-8">
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
