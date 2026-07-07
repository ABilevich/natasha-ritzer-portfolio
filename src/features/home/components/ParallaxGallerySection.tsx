import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { parallaxGalleryItems } from '../homeContent'
import { useParallaxGallery } from '../hooks/useParallaxGallery'

export function ParallaxGallerySection() {
  const sectionRef = useParallaxGallery()

  return (
    <section
      ref={sectionRef}
      className="relative h-svh min-h-0 overflow-hidden bg-white"
      aria-label="Portfolio image gallery"
    >
      <div className="pointer-events-none absolute inset-0 max-[640px]:-translate-y-[clamp(14px,2.5svh,20px)]">
        {parallaxGalleryItems.map((item) => {
          const mobileLeft =
            item.mobilePosition.left ??
            (item.mobilePosition.right ? 'auto' : item.position.left ?? 'auto')
          const mobileRight =
            item.mobilePosition.right ??
            (item.mobilePosition.left ? 'auto' : item.position.right ?? 'auto')
          const mobileTop =
            item.mobilePosition.top ??
            (item.mobilePosition.bottom ? 'auto' : item.position.top ?? 'auto')
          const mobileBottom =
            item.mobilePosition.bottom ??
            (item.mobilePosition.top ? 'auto' : item.position.bottom ?? 'auto')
          const galleryItemStyle = {
            '--gallery-width': `${item.size}vw`,
            '--gallery-mobile-width': `${item.size * 2.15}vw`,
            '--gallery-left': item.position.left ?? 'auto',
            '--gallery-right': item.position.right ?? 'auto',
            '--gallery-top': item.position.top ?? 'auto',
            '--gallery-bottom': item.position.bottom ?? 'auto',
            '--gallery-mobile-left': mobileLeft,
            '--gallery-mobile-right': mobileRight,
            '--gallery-mobile-top': mobileTop,
            '--gallery-mobile-bottom': mobileBottom,
            transform: `translate3d(0, calc(var(--gallery-shift, 0px) * ${item.speed}), 0) rotate(${item.rotation}deg)`,
          } as CSSProperties

          const galleryItemClassName =
            'absolute left-[var(--gallery-left)] right-[var(--gallery-right)] top-[var(--gallery-top)] bottom-[var(--gallery-bottom)] m-0 block w-[var(--gallery-width)] overflow-hidden border border-white/60 bg-white/30 shadow-[0_28px_80px_rgba(31,42,55,0.16)] motion-reduce:!transform-none max-[640px]:left-[var(--gallery-mobile-left)] max-[640px]:right-[var(--gallery-mobile-right)] max-[640px]:top-[var(--gallery-mobile-top)] max-[640px]:bottom-[var(--gallery-mobile-bottom)] max-[640px]:w-[min(var(--gallery-mobile-width),92vw)]'

          const image = (
            <img
              src={item.image}
              alt={item.alt}
              loading="eager"
              decoding="async"
              className="block h-auto w-full"
            />
          )

          if (item.href) {
            return (
              <Link
                key={item.id}
                to={item.href}
                aria-label={`Open ${item.title ?? 'project'} project`}
                className={`${galleryItemClassName} pointer-events-auto transition-transform duration-300 hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#111928]`}
                style={galleryItemStyle}
              >
                {image}
              </Link>
            )
          }

          return (
            <figure
              key={item.id}
              className={galleryItemClassName}
              style={galleryItemStyle}
            >
              {image}
            </figure>
          )
        })}
      </div>
    </section>
  )
}
