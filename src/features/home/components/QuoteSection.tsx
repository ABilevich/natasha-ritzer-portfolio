import quoteAuthorImage from '@/assets/figma/natasha-quote-avatar.jpeg'
import { GradientBlobBackground } from './GradientBlobBackground'

export function QuoteSection() {
  return (
    <section className="relative flex min-h-svh items-center overflow-hidden px-[clamp(20px,6.6vw,100px)] py-16 md:py-20">
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
      <blockquote className="relative z-10 mx-auto flex w-full max-w-[1312px] min-w-0 flex-col items-start gap-8 text-left text-white md:gap-[45px]">
        <p className="m-0 max-w-[1312px] text-[clamp(1.6rem,2.65vw,2.5rem)] font-medium italic leading-[1.55]">
          “I get to combine my love for technology and art to create
          user-centered experiences, that not only look stunning but also makes
          user’s lives easier”
        </p>
        <footer className="flex items-center gap-4 text-white md:gap-6">
          <img
            src={quoteAuthorImage}
            alt=""
            className="size-[54px] shrink-0 rounded-full border-2 border-white object-cover object-top"
            aria-hidden="true"
          />
          <cite className="not-italic text-[clamp(1.125rem,2.1vw,2rem)] font-normal leading-tight">
            Natasha Ritzer · UX UI Designer
          </cite>
        </footer>
      </blockquote>
    </section>
  )
}
