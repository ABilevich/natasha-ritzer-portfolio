import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import nrLogo from '@/assets/figma/nr-logo.svg'

const navigationItems = [
  { label: 'About', href: '/#about' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Projects', href: '/#projects' },
  { label: 'CV', href: '/#about' },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const linkClassName =
    'relative h-auto rounded-none px-0 py-0 text-sm font-medium text-white no-underline hover:bg-transparent hover:text-white focus-visible:ring-white after:absolute after:inset-x-0 after:-bottom-2 after:h-px after:origin-left after:scale-x-0 after:bg-white after:transition-transform after:duration-200 hover:after:scale-x-100 focus-visible:after:scale-x-100'

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
            className="size-full object-contain brightness-0 invert"
          />
        </NavLink>
        <nav
          className="relative z-50 flex min-w-0 items-center justify-center gap-8 md:gap-[45px] max-[720px]:hidden"
          aria-label="Primary navigation"
        >
          {navigationItems.map((item) => (
            <Button
              key={item.href}
              asChild
              variant="ghost"
              size="sm"
              className={linkClassName}
            >
              <a href={item.href}>{item.label}</a>
            </Button>
          ))}
        </nav>
        <Button
          asChild
          variant="outline"
          size="sm"
          className="relative z-50 h-12 shrink-0 rounded-full border-white bg-transparent px-[18px] text-sm font-medium text-white hover:bg-transparent hover:text-white max-[720px]:hidden"
        >
          <a href="mailto:hello@natasharitzer.com">Contact Me</a>
        </Button>
        <div className="relative z-50 hidden items-center gap-3 max-[720px]:flex">
          <Button
            asChild
            variant="outline"
            size="sm"
            className="h-9 rounded-full border-white bg-transparent px-4 text-sm font-medium text-white hover:bg-transparent hover:text-white"
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
            className="size-10 rounded-full bg-transparent text-white hover:bg-transparent hover:text-white focus-visible:ring-white"
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
          className="absolute top-0 flex h-dvh w-[min(78vw,300px)] flex-col items-end gap-7 bg-black/65 px-8 pb-10 pt-24 text-right backdrop-blur-md"
          style={{ right: isMenuOpen ? '0px' : 'calc(-1 * min(78vw, 300px))' }}
        >
          {navigationItems.map((item) => (
            <a
              key={item.href}
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
