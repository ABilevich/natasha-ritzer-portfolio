import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { parallaxGalleryItems } from '../homeContent'
import { useParallaxGallery } from '../hooks/useParallaxGallery'
import './ParallaxGallerySection.css'

type GalleryPosition = {
  top?: string
  right?: string
  bottom?: string
  left?: string
}

export function ParallaxGallerySection() {
  const sectionRef = useParallaxGallery()

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-white max-[1280px]:h-auto min-[1281px]:h-svh min-[1281px]:min-h-0"
      aria-label="Portfolio image gallery"
    >
      <div className="parallax-gallery-section__responsive-grid grid grid-cols-2 gap-4 px-5 py-10 min-[641px]:gap-6 min-[641px]:px-8 min-[641px]:py-12 min-[1024px]:max-[1280px]:grid-cols-3 min-[1281px]:hidden">
        {parallaxGalleryItems.map((item) => {
          const image = (
            <img
              src={item.image}
              alt={item.alt}
              loading="eager"
              decoding="async"
              className="block h-full w-full object-cover object-center"
            />
          )

          const responsiveGalleryClassName =
            'm-0 block aspect-[4/5] overflow-hidden bg-white'

          if (item.href) {
            return (
              <Link
                key={item.id}
                to={item.href}
                aria-label={`Open ${item.title ?? 'project'} project`}
                className={`${responsiveGalleryClassName} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#111928]`}
              >
                {image}
              </Link>
            )
          }

          return (
            <figure key={item.id} className={responsiveGalleryClassName}>
              {image}
            </figure>
          )
        })}
      </div>

      <div className="pointer-events-none absolute inset-0 max-[1280px]:hidden">
        {parallaxGalleryItems.map((item) => {
          const tabletPosition: GalleryPosition | undefined =
            'tabletPosition' in item ? item.tabletPosition : undefined
          const wideTabletPosition: GalleryPosition | undefined =
            'wideTabletPosition' in item ? item.wideTabletPosition : undefined
          const compactMobilePosition =
            'compactMobilePosition' in item
              ? item.compactMobilePosition
              : undefined
          const mobileZIndex =
            'mobileZIndex' in item ? item.mobileZIndex : 'auto'
          const wideTabletZIndex =
            'wideTabletZIndex' in item &&
            typeof item.wideTabletZIndex === 'number'
              ? item.wideTabletZIndex
              : 10
          const tabletScale =
            'tabletScale' in item && typeof item.tabletScale === 'number'
              ? item.tabletScale
              : 1.35
          const wideTabletScale =
            'wideTabletScale' in item &&
            typeof item.wideTabletScale === 'number'
              ? item.wideTabletScale
              : 1.28
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
          const tabletLeft =
            tabletPosition?.left ??
            (tabletPosition?.right ? 'auto' : item.position.left ?? 'auto')
          const tabletRight =
            tabletPosition?.right ??
            (tabletPosition?.left ? 'auto' : item.position.right ?? 'auto')
          const tabletTop =
            tabletPosition?.top ??
            (tabletPosition?.bottom ? 'auto' : item.position.top ?? 'auto')
          const tabletBottom =
            tabletPosition?.bottom ??
            (tabletPosition?.top ? 'auto' : item.position.bottom ?? 'auto')
          const wideTabletLeft =
            wideTabletPosition?.left ??
            (wideTabletPosition?.right ? 'auto' : tabletLeft)
          const wideTabletRight =
            wideTabletPosition?.right ??
            (wideTabletPosition?.left ? 'auto' : tabletRight)
          const wideTabletTop =
            wideTabletPosition?.top ??
            (wideTabletPosition?.bottom ? 'auto' : tabletTop)
          const wideTabletBottom =
            wideTabletPosition?.bottom ??
            (wideTabletPosition?.top ? 'auto' : tabletBottom)
          const compactMobileLeft =
            compactMobilePosition?.left ??
            (compactMobilePosition?.right ? 'auto' : mobileLeft)
          const compactMobileRight =
            compactMobilePosition?.right ??
            (compactMobilePosition?.left ? 'auto' : mobileRight)
          const compactMobileTop =
            compactMobilePosition?.top ??
            (compactMobilePosition?.bottom ? 'auto' : mobileTop)
          const compactMobileBottom =
            compactMobilePosition?.bottom ??
            (compactMobilePosition?.top ? 'auto' : mobileBottom)
          const galleryItemStyle = {
            aspectRatio:
              'cropAspectRatio' in item ? item.cropAspectRatio : undefined,
            '--gallery-width': `${item.size}vw`,
            '--gallery-tablet-width': `${item.size * tabletScale}vw`,
            '--gallery-wide-tablet-width': `${item.size * wideTabletScale}vw`,
            '--gallery-mobile-width': `${item.size * 2.15}vw`,
            '--gallery-left': item.position.left ?? 'auto',
            '--gallery-right': item.position.right ?? 'auto',
            '--gallery-top': item.position.top ?? 'auto',
            '--gallery-bottom': item.position.bottom ?? 'auto',
            '--gallery-tablet-left': tabletLeft,
            '--gallery-tablet-right': tabletRight,
            '--gallery-tablet-top': tabletTop,
            '--gallery-tablet-bottom': tabletBottom,
            '--gallery-wide-tablet-left': wideTabletLeft,
            '--gallery-wide-tablet-right': wideTabletRight,
            '--gallery-wide-tablet-top': wideTabletTop,
            '--gallery-wide-tablet-bottom': wideTabletBottom,
            '--gallery-wide-tablet-z-index': wideTabletZIndex,
            '--gallery-mobile-left': mobileLeft,
            '--gallery-mobile-right': mobileRight,
            '--gallery-mobile-top': mobileTop,
            '--gallery-mobile-bottom': mobileBottom,
            '--gallery-compact-mobile-left': compactMobileLeft,
            '--gallery-compact-mobile-right': compactMobileRight,
            '--gallery-compact-mobile-top': compactMobileTop,
            '--gallery-compact-mobile-bottom': compactMobileBottom,
            '--gallery-mobile-z-index': mobileZIndex,
            transform: `translate3d(0, calc(var(--gallery-shift, 0px) * ${item.speed}), 0) rotate(${item.rotation}deg)`,
          } as CSSProperties

          const galleryItemClassName =
            'absolute left-[var(--gallery-left)] right-[var(--gallery-right)] top-[var(--gallery-top)] bottom-[var(--gallery-bottom)] m-0 block w-[var(--gallery-width)] overflow-hidden border border-white/60 bg-white/30 shadow-[0_28px_80px_rgba(31,42,55,0.16)] motion-reduce:!transform-none min-[641px]:max-[1023px]:left-[var(--gallery-tablet-left)] min-[641px]:max-[1023px]:right-[var(--gallery-tablet-right)] min-[641px]:max-[1023px]:top-[var(--gallery-tablet-top)] min-[641px]:max-[1023px]:bottom-[var(--gallery-tablet-bottom)] min-[641px]:max-[1023px]:w-[var(--gallery-tablet-width)] min-[1024px]:max-[1280px]:left-[var(--gallery-wide-tablet-left)] min-[1024px]:max-[1280px]:right-[var(--gallery-wide-tablet-right)] min-[1024px]:max-[1280px]:top-[var(--gallery-wide-tablet-top)] min-[1024px]:max-[1280px]:bottom-[var(--gallery-wide-tablet-bottom)] min-[1024px]:max-[1280px]:z-[var(--gallery-wide-tablet-z-index)] min-[1024px]:max-[1280px]:w-[var(--gallery-wide-tablet-width)] max-[640px]:left-[var(--gallery-mobile-left)] max-[640px]:right-[var(--gallery-mobile-right)] max-[640px]:top-[var(--gallery-mobile-top)] max-[640px]:bottom-[var(--gallery-mobile-bottom)] max-[640px]:z-[var(--gallery-mobile-z-index)] max-[640px]:w-[min(var(--gallery-mobile-width),92vw)] max-[360px]:left-[var(--gallery-compact-mobile-left)] max-[360px]:right-[var(--gallery-compact-mobile-right)] max-[360px]:top-[var(--gallery-compact-mobile-top)] max-[360px]:bottom-[var(--gallery-compact-mobile-bottom)]'

          const image = (
            <img
              src={item.image}
              alt={item.alt}
              loading="eager"
              decoding="async"
              className={
                'cropAspectRatio' in item
                  ? 'block h-full w-full object-cover object-center'
                  : 'block h-auto w-full'
              }
            />
          )

          if (item.href) {
            return (
              <Link
                key={item.id}
                to={item.href}
                aria-label={`Open ${item.title ?? 'project'} project`}
                className={`${galleryItemClassName} pointer-events-auto transition-opacity duration-300 hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#111928]`}
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
