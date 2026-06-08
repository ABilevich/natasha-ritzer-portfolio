import { NavLink } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import nrLogo from '@/assets/figma/nr-logo.svg'

const navigationItems = [
  { label: 'About', href: '/#about' },
  { label: 'Projects', href: '/#projects' },
  { label: 'CV', href: '/#about' },
]

export function Header() {
  const linkClassName =
    "relative h-auto rounded-none px-0 py-0 text-sm font-medium text-[#4b5563] no-underline hover:bg-transparent hover:text-[#111928] focus-visible:ring-[#111928] after:absolute after:inset-x-0 after:-bottom-2 after:h-px after:origin-left after:scale-x-0 after:bg-[#111928] after:transition-transform after:duration-200 hover:after:scale-x-100 focus-visible:after:scale-x-100 max-[720px]:text-xs"

  return (
    <header className="absolute left-1/2 top-8 z-20 flex h-12 w-[min(1312px,calc(100%_-_40px))] -translate-x-1/2 items-center justify-between max-[720px]:top-5 max-[720px]:h-10">
      <NavLink
        to="/"
        aria-label="Natasha Ritzer home"
        className="block h-[45px] w-16 max-[720px]:h-8 max-[720px]:w-11"
      >
        <img src={nrLogo} alt="" className="size-full object-contain" />
      </NavLink>
      <nav
        className="flex items-center justify-center gap-[45px] max-[720px]:gap-4"
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
        className="h-12 rounded-full border-[#111928] bg-transparent px-[18px] text-sm font-medium text-[#111928] hover:bg-[#111928] hover:text-white max-[720px]:hidden"
      >
        <a href="mailto:hello@natasharitzer.com">Contact Me</a>
      </Button>
    </header>
  )
}
