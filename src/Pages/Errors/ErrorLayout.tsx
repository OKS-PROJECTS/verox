import type { ReactNode } from 'react'
import { Button } from 'oks-ui'
import { useNavigate } from 'react-router-dom'
import { Logo } from '../../lib/Logo'

interface ErrorLayoutProps {
  code?: string
  title: string
  description: string
  icon: ReactNode
}

export function ErrorLayout({ code, title, description, icon }: ErrorLayoutProps) {
  const navigate = useNavigate()
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 px-4 text-center" style={{ background: 'var(--app-bg)' }}>
      <Logo />
      <div className="flex flex-col items-center gap-4">
        <span
          className="flex h-20 w-20 items-center justify-center rounded-full"
          style={{ background: 'var(--app-primary-soft)', color: 'var(--app-primary)' }}
        >
          {icon}
        </span>
        {code && (
          <span className="text-[56px] font-extrabold leading-none" style={{ color: 'var(--app-fg-strong)' }}>
            {code}
          </span>
        )}
        <h1 className="text-[19px] font-bold" style={{ color: 'var(--app-fg-strong)' }}>
          {title}
        </h1>
        <p className="max-w-[420px] text-[13.5px]" style={{ color: 'var(--app-fg-muted)' }}>
          {description}
        </p>
        <Button color="primary" onPress={() => navigate('/')}>
          Back to dashboard
        </Button>
      </div>
    </div>
  )
}
