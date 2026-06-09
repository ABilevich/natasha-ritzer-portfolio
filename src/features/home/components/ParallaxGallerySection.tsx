import type { CSSProperties } from 'react'
import { parallaxGalleryItems } from '../homeContent'
import { useParallaxGallery } from '../hooks/useParallaxGallery'

export function ParallaxGallerySection() {
  const sectionRef = useParallaxGallery()

  return (
    <section
      ref={sectionRef}
      className="relative h-svh min-h-[620px] overflow-hidden bg-white max-[640px]:min-h-[560px]"
      aria-label="Portfolio image gallery"
    >
      <div className="pointer-events-none absolute inset-0">
        {parallaxGalleryItems.map((item) => (
          <figure
            key={item.id}
            className="absolute left-[var(--gallery-left)] right-[var(--gallery-right)] top-[var(--gallery-top)] bottom-[var(--gallery-bottom)] m-0 w-[var(--gallery-width)] overflow-hidden border border-white/60 bg-white/30 shadow-[0_28px_80px_rgba(31,42,55,0.16)] motion-reduce:!transform-none max-[640px]:left-[var(--gallery-mobile-left)] max-[640px]:right-[var(--gallery-mobile-right)] max-[640px]:top-[var(--gallery-mobile-top)] max-[640px]:bottom-[var(--gallery-mobile-bottom)] max-[640px]:w-[min(var(--gallery-mobile-width),92vw)]"
            style={
              {
                '--gallery-width': `${item.size}vw`,
                '--gallery-mobile-width': `${item.size * 1.85}vw`,
                '--gallery-left': item.position.left ?? 'auto',
                '--gallery-right': item.position.right ?? 'auto',
                '--gallery-top': item.position.top ?? 'auto',
                '--gallery-bottom': item.position.bottom ?? 'auto',
                '--gallery-mobile-left':
                  item.mobilePosition.left ?? item.position.left ?? 'auto',
                '--gallery-mobile-right':
                  item.mobilePosition.right ?? item.position.right ?? 'auto',
                '--gallery-mobile-top':
                  item.mobilePosition.top ?? item.position.top ?? 'auto',
                '--gallery-mobile-bottom':
                  item.mobilePosition.bottom ?? item.position.bottom ?? 'auto',
                transform: `translate3d(0, calc(var(--gallery-shift, 0px) * ${item.speed}), 0) rotate(${item.rotation}deg)`,
              } as CSSProperties
            }
          >
            <img
              src={item.image}
              alt={item.alt}
              loading="eager"
              decoding="async"
              className="block h-auto w-full"
            />
          </figure>
        ))}
      </div>
    </section>
  )
}
