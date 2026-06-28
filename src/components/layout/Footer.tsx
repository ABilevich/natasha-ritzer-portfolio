import { useLocation } from 'react-router-dom'
import { cn } from '@/lib/utils'

export function Footer() {
  const location = useLocation()
  const isHomePage = location.pathname === '/'
  const footerLinks = [
    { label: 'Projects', href: '/projects' },
    { label: 'CV', href: '/#about' },
    { label: 'Articles', href: '/#projects' },
    { label: 'Bookshelf', href: '/#projects' },
  ]

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
    </footer>
  )
}
