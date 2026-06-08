import { NavLink } from 'react-router-dom'

const navigationItems = [
  { label: 'About', href: '/#about' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Projects', href: '/#projects' },
]

export function Header() {
  const linkClassName =
    "relative text-[0.78rem] font-bold uppercase text-[var(--color-heading)] no-underline after:absolute after:inset-x-0 after:-bottom-2 after:h-0.5 after:origin-left after:scale-x-0 after:bg-[var(--color-accent)] after:transition-transform after:duration-200 hover:after:scale-x-100 focus-visible:after:scale-x-100 max-[720px]:text-[0.7rem]"

  return (
    <header className="fixed inset-x-0 top-0 z-10 flex min-h-[72px] items-center justify-between border-b border-[var(--color-border)] bg-[color-mix(in_srgb,var(--color-bg)_88%,transparent)] px-[clamp(20px,5vw,72px)] backdrop-blur-[18px] max-[720px]:min-h-16">
      <NavLink
        className="grid size-[42px] place-items-center rounded-full border border-[var(--color-heading)] text-[0.78rem] font-bold text-[var(--color-heading)] no-underline max-[720px]:size-[38px]"
        to="/"
        aria-label="Natasha Ritzer home"
      >
        NR
      </NavLink>
      <nav
        className="flex items-center gap-[clamp(16px,3vw,40px)] max-[720px]:gap-3.5"
        aria-label="Primary navigation"
      >
        {navigationItems.map((item) => (
          <a key={item.href} className={linkClassName} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  )
}
