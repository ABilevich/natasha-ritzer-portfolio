import { useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import behanceIcon from '@/assets/behance-icon.svg'
import dribbbleIcon from '@/assets/dribbble-icon.svg'
import linkedinIcon from '@/assets/linkedin-icon.svg'
import { cn } from '@/lib/utils'

const contactMailto =
  'mailto:di.ritzer@gmail.com?subject=Natasha%20Ritzer%20contact%20request&body=Hi%20Natasha%2C%20I%20found%20your%20portfolio%20and%20would%20like%20to%20get%20in%20touch%20about...'

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
        'px-[clamp(20px,6.6vw,100px)] text-sm font-medium',
        isHomePage ? 'bg-black text-white' : 'bg-white text-[#111928]',
      )}
    >
      <div className="mx-auto w-full max-w-[1312px]">
        <div
          className={cn(
            'flex items-center justify-between gap-8 border-b py-8 max-[860px]:flex-col max-[860px]:items-start',
            isHomePage ? 'border-white' : 'border-[#e5e7eb]',
          )}
        >
          <h2 className="m-0 text-2xl font-semibold leading-tight md:text-[45px]">
            Let’s Connect
          </h2>
          <div className="flex flex-wrap items-center gap-6 md:gap-12 lg:gap-16">
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
                  className={cn(
                    'size-8',
                    isHomePage ? '' : 'brightness-0 opacity-55',
                  )}
                  aria-hidden="true"
                />
              </a>
            ))}
            <Button
              asChild
              variant="outline"
              className={cn(
                'h-11 rounded-full bg-transparent px-5 md:h-12 md:px-6',
                isHomePage
                  ? 'border-white text-white hover:bg-white hover:text-black'
                  : 'border-[#111928] text-[#111928] hover:bg-[#111928] hover:text-white',
              )}
            >
              <a href={contactMailto}>Contact Me</a>
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-between gap-8 pb-14 pt-9 max-[860px]:flex-col max-[860px]:items-start md:pb-20 md:pt-[45px]">
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
