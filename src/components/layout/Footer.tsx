import { useLocation } from 'react-router-dom'
import behanceIcon from '@/assets/behance-icon.svg'
import dribbbleIcon from '@/assets/dribbble-icon.svg'
import linkedinIcon from '@/assets/linkedin-icon.svg'
import { cn } from '@/lib/utils'

export function Footer() {
  const location = useLocation()
  const isHomePage = location.pathname === '/'
  const homeFooterLinks = [
    { label: 'About', href: '/#about' },
    { label: 'Projects', href: '/projects' },
    {
      label: 'CV',
      href: '/natasha-ritzer-cv.pdf',
      download: 'Natasha-Ritzer-CV.pdf',
    },
  ]
  const whiteFooterLinks = [
    { label: 'About', href: '/#about' },
    { label: 'Projects', href: '/projects' },
    {
      label: 'CV',
      href: '/natasha-ritzer-cv.pdf',
      download: 'Natasha-Ritzer-CV.pdf',
    },
  ]
  const socialLinks = [
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/natasha-ritzer-ux-ui/',
      icon: linkedinIcon,
    },
    {
      label: 'Behance',
      href: 'https://www.behance.net/natasha-ritzer-ux-ui',
      icon: behanceIcon,
    },
    {
      label: 'Dribbble',
      href: 'https://dribbble.com/Natiritzer27',
      icon: dribbbleIcon,
    },
  ]
  const footerLinks = isHomePage ? homeFooterLinks : whiteFooterLinks

  return (
    <footer
      className={cn(
        'px-[clamp(20px,6.6vw,100px)] pb-14 pt-9 text-sm font-medium md:pb-20 md:pt-[45px]',
        isHomePage ? 'bg-black text-white' : 'bg-white text-[#111928]',
      )}
    >
      <div className="mx-auto flex w-full max-w-[1312px] items-center justify-between gap-8 max-[860px]:flex-col max-[860px]:items-start">
        <nav className="flex items-center gap-8 max-[860px]:flex-wrap max-[860px]:gap-6 lg:gap-[54px]">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              download={'download' in link ? link.download : undefined}
              className="text-current no-underline"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="ml-auto flex items-center justify-end gap-16 max-[860px]:ml-0 max-[860px]:flex-col max-[860px]:items-start max-[860px]:gap-8 lg:gap-20">
          {!isHomePage ? (
            <nav
              aria-label="Social links"
              className="flex items-center gap-9 text-[#6f7480] md:gap-12"
            >
              {socialLinks.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-opacity hover:opacity-70"
                >
                  <img
                    src={icon}
                    alt=""
                    className="size-8 brightness-0 opacity-55"
                    aria-hidden="true"
                  />
                </a>
              ))}
            </nav>
          ) : null}
          <p
            className={cn(
              'm-0',
              isHomePage ? 'text-white/50' : 'text-[#111928]/50',
            )}
          >
            2026 Natasha Ritzer.
          </p>
        </div>
      </div>
    </footer>
  )
}
