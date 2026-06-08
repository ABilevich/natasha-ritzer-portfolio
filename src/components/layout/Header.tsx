import { NavLink } from 'react-router-dom'
import { Button } from '@/components/ui/button'

const navigationItems = [
  { label: 'About', href: '/#about' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Projects', href: '/#projects' },
]

export function Header() {
  const linkClassName =
    "relative h-auto rounded-none px-0 py-0 text-[0.78rem] font-bold uppercase text-[var(--color-heading)] no-underline hover:bg-transparent hover:text-[var(--color-heading)] focus-visible:ring-[var(--color-accent)] after:absolute after:inset-x-0 after:-bottom-2 after:h-0.5 after:origin-left after:scale-x-0 after:bg-[var(--color-accent)] after:transition-transform after:duration-200 hover:after:scale-x-100 focus-visible:after:scale-x-100 max-[720px]:text-[0.7rem]"

  return (
    <header className="fixed inset-x-0 top-0 z-10 flex min-h-[72px] items-center justify-between border-b border-[var(--color-border)] bg-[color-mix(in_srgb,var(--color-bg)_88%,transparent)] px-[clamp(20px,5vw,72px)] backdrop-blur-[18px] max-[720px]:min-h-16">
      <Button
        asChild
        variant="ghost"
        size="icon-lg"
        className="size-[42px] rounded-full border border-[var(--color-heading)] bg-transparent text-[0.78rem] font-bold text-[var(--color-heading)] hover:bg-transparent hover:text-[var(--color-heading)] focus-visible:ring-[var(--color-accent)] max-[720px]:size-[38px]"
      >
        <NavLink to="/" aria-label="Natasha Ritzer home">
          NR
        </NavLink>
      </Button>
      <nav
        className="flex items-center gap-[clamp(16px,3vw,40px)] max-[720px]:gap-3.5"
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
    </header>
  )
}
