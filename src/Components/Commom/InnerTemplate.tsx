import { useEffect, useRef, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Drawer } from 'oks-ui'
import { Sidebar } from './Sidebar'
import { Header } from './Header'
import { Footer } from './Footer'
import { ThemeSettingsDrawer } from './ThemeSettingsDrawer'

export function InnerTemplate() {
  const { pathname } = useLocation()
  const mainRef = useRef<HTMLDivElement>(null)
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)
  const [isSettingsOpen, setIsSettingsOpen] = useState(false)

  useEffect(() => {
    mainRef.current?.scrollTo({ top: 0 })
    setIsMobileNavOpen(false)
  }, [pathname])

  return (
    <div className="flex h-screen w-full overflow-hidden" style={{ background: 'var(--app-bg)' }}>
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      <Drawer isOpen={isMobileNavOpen} onClose={() => setIsMobileNavOpen(false)} position="left" width="xs" classNames={{ body: 'p-0' }}>
        <Sidebar onNavigate={() => setIsMobileNavOpen(false)} />
      </Drawer>

      <div className="flex min-w-0 flex-1 flex-col">
        <Header onOpenMobileNav={() => setIsMobileNavOpen(true)} onOpenSettings={() => setIsSettingsOpen(true)} />
        <div ref={mainRef} className="app-shell-content flex-1 overflow-y-auto px-4 pb-2 pt-5 lg:px-6">
          <Outlet />
          <Footer />
        </div>
      </div>

      <ThemeSettingsDrawer isOpen={isSettingsOpen} onClose={() => setIsSettingsOpen(false)} />
    </div>
  )
}
