import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import nrLogo from '@/assets/figma/nr-logo.svg'

const navigationItems = [
  { label: 'About', href: '/#about' },
  { label: 'Projects', href: '/projects' },
  { label: 'CV', href: '/#about' },
]

export function Header() {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isHomePage = location.pathname === '/'
  const isLightOnDark = isHomePage

  const linkClassName = (href: string) => {
    const isActive =
      href === '/projects'
        ? location.pathname.startsWith('/projects')
        : location.pathname === '/' && location.hash === href.replace('/', '')

    return cn(
      'relative h-auto rounded-none px-0 py-0 text-[16px] font-medium no-underline hover:bg-transparent focus-visible:ring-0 after:absolute after:inset-x-0 after:-bottom-2 after:h-px after:origin-left after:scale-x-0 after:transition-transform after:duration-200 hover:after:scale-x-100 focus-visible:after:scale-x-100',
      isLightOnDark
        ? 'text-white hover:text-white after:bg-white'
        : 'text-[#111928] hover:text-[#111928] after:bg-[#111928]',
      isActive && 'after:scale-x-100',
    )
  }

  const mobileLinkClassName =
    'text-right text-3xl font-semibold leading-tight text-white no-underline transition-opacity hover:opacity-75'

  useEffect(() => {
    if (!isMenuOpen) {
      return
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isMenuOpen])

  return (
    <>
      <header className="absolute left-1/2 top-8 z-50 flex h-12 w-[min(1312px,calc(100%_-_40px))] -translate-x-1/2 items-center justify-between gap-6 max-[480px]:w-[calc(100%_-_24px)] max-[720px]:top-5 max-[720px]:h-10">
        <NavLink
          to="/"
          aria-label="Natasha Ritzer home"
          onClick={() => setIsMenuOpen(false)}
          className="relative z-50 block h-[45px] w-16 shrink-0 max-[720px]:h-8 max-[720px]:w-11"
        >
          <img
            src={nrLogo}
            alt=""
            className={cn(
              'size-full object-contain',
              isLightOnDark && 'brightness-0 invert',
            )}
          />
        </NavLink>
        <nav
          className="relative z-50 flex min-w-0 items-center justify-center gap-8 md:gap-[45px] max-[720px]:hidden"
          aria-label="Primary navigation"
        >
          {navigationItems.map((item) => (
            <Button
              key={item.label}
              asChild
              variant="ghost"
              size="sm"
              className={linkClassName(item.href)}
            >
              <NavLink to={item.href}>{item.label}</NavLink>
            </Button>
          ))}
        </nav>
        <Button
          asChild
          variant="outline"
          size="sm"
          className={cn(
            'relative z-50 h-12 shrink-0 rounded-full bg-transparent px-[18px] text-sm font-medium hover:bg-transparent max-[720px]:hidden',
            isLightOnDark
              ? 'border-white text-white hover:text-white'
              : 'border-[#111928] text-[#111928] hover:text-[#111928]',
          )}
        >
          <a href="mailto:hello@natasharitzer.com">Contact Me</a>
        </Button>
        <div className="relative z-50 hidden items-center gap-3 max-[720px]:flex">
          <Button
            asChild
            variant="outline"
            size="sm"
            className={cn(
              'h-9 rounded-full bg-transparent px-4 text-sm font-medium hover:bg-transparent',
              isLightOnDark
                ? 'border-white text-white hover:text-white'
                : 'border-[#111928] text-[#111928] hover:text-[#111928]',
            )}
          >
            <a href="mailto:hello@natasharitzer.com">Contact Me</a>
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsMenuOpen((current) => !current)}
            className={cn(
              'size-10 rounded-full bg-transparent hover:bg-transparent focus-visible:ring-0',
              isLightOnDark
                ? 'text-white hover:text-white'
                : 'text-[#111928] hover:text-[#111928]',
            )}
          >
            {isMenuOpen ? (
              <X className="size-6" aria-hidden="true" />
            ) : (
              <Menu className="size-6" aria-hidden="true" />
            )}
          </Button>
        </div>
      </header>
      <div
        id="mobile-menu"
        aria-hidden={!isMenuOpen}
        className={`fixed inset-0 z-40 hidden max-[720px]:block ${
          isMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        <button
          type="button"
          aria-label="Close menu"
          disabled={!isMenuOpen}
          onClick={() => setIsMenuOpen(false)}
          className="absolute inset-0 border-0 bg-black/15 p-0 transition-opacity duration-200 disabled:cursor-default"
          style={{ opacity: isMenuOpen ? 1 : 0 }}
        />
        <nav
          aria-label="Mobile navigation"
          className="absolute right-0 top-0 flex h-dvh w-[min(78vw,300px)] flex-col items-end gap-7 bg-black/65 px-8 pb-10 pt-24 text-right backdrop-blur-md transition-transform duration-200"
          style={{
            transform: isMenuOpen ? 'translateX(0)' : 'translateX(100%)',
          }}
        >
          {navigationItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              tabIndex={isMenuOpen ? undefined : -1}
              className={mobileLinkClassName}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  )
}
