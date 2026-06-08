import { Outlet } from 'react-router-dom'
import { ScrollToHash } from '../../routes/ScrollToHash'
import { Footer } from './Footer'
import { Header } from './Header'

export function MainLayout() {
  return (
    <div className="site-shell">
      <ScrollToHash />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
