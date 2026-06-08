import { NavLink } from 'react-router-dom'

const navigationItems = [
  { label: 'About', href: '/#about' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Projects', href: '/#projects' },
]

export function Header() {
  return (
    <header className="site-header">
      <NavLink className="site-logo" to="/" aria-label="Natasha Ritzer home">
        NR
      </NavLink>
      <nav className="site-nav" aria-label="Primary navigation">
        {navigationItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  )
}
