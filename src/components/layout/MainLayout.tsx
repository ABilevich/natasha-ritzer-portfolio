import { Outlet } from 'react-router-dom'
import { ScrollToHash } from '../../routes/ScrollToHash'
import { Footer } from './Footer'
import { Header } from './Header'

export function MainLayout() {
  return (
    <div className="min-h-svh bg-[var(--color-bg)] font-[var(--font-body)] text-[var(--color-text)]">
      <ScrollToHash />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
