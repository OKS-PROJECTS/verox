import type { MouseEvent, ReactNode } from 'react'
import { BreadcrumbItem, Breadcrumbs } from 'oks-ui'
import { useNavigate } from 'react-router-dom'

export interface Crumb {
  label: string
  to?: string
}

interface PageHeaderProps {
  title: string
  subtitle?: string
  crumbs?: Crumb[]
  actions?: ReactNode
}

/**
 * Composed — oks-ui ships `Breadcrumbs` but not a banded title+breadcrumb+
 * actions header. Logged in OKS-UI-FEEDBACK.md.
 */
export function PageHeader({ title, subtitle, crumbs, actions }: PageHeaderProps) {
  const navigate = useNavigate()
  const go = (to: string) => (e: MouseEvent) => {
    e.preventDefault()
    navigate(to)
  }

  return (
    <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
      <div>
        <h1 className="text-[20px] font-bold leading-tight" style={{ color: 'var(--app-fg-strong)' }}>
          {title}
        </h1>
        {subtitle && (
          <p className="mt-1 text-sm" style={{ color: 'var(--app-fg-muted)' }}>
            {subtitle}
          </p>
        )}
        {crumbs && crumbs.length > 0 && (
          <div className="mt-2">
            <Breadcrumbs aria-label="Breadcrumb">
              {crumbs.map((c, i) => (
                <BreadcrumbItem
                  key={c.label}
                  href={c.to}
                  onClick={c.to ? go(c.to) : undefined}
                  isCurrent={i === crumbs.length - 1}
                >
                  {c.label}
                </BreadcrumbItem>
              ))}
            </Breadcrumbs>
          </div>
        )}
      </div>
      {actions && <div className="flex shrink-0 flex-wrap items-center gap-2">{actions}</div>}
    </div>
  )
}
