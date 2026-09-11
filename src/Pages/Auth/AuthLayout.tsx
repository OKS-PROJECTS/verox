import type { ReactNode } from 'react'
import { Card, CardBody } from 'oks-ui'
import { Logo } from '../../lib/Logo'

interface AuthLayoutProps {
  title: string
  subtitle?: string
  children: ReactNode
  footer?: ReactNode
  width?: number
}

export function AuthLayout({ title, subtitle, children, footer, width = 440 }: AuthLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 px-4 py-10" style={{ background: 'var(--app-bg)' }}>
      <Logo />
      <div className="text-center">
        <h1 className="text-[19px] font-bold" style={{ color: 'var(--app-fg-strong)' }}>
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-1.5 max-w-[360px] text-[13px]" style={{ color: 'var(--app-fg-muted)' }}>
            {subtitle}
          </p>
        )}
      </div>
      <Card className="w-full" style={{ maxWidth: width }}>
        <CardBody className="p-6 sm:p-8">{children}</CardBody>
      </Card>
      {footer}
      <p className="text-xs" style={{ color: 'var(--app-fg-subtle)' }}>
        © {new Date().getFullYear()} Verox. All rights reserved.
      </p>
    </div>
  )
}
