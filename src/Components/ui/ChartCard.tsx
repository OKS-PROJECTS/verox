import type { ReactNode } from 'react'
import { Card, CardBody, CardHeader } from 'oks-ui'

interface ChartCardProps {
  title: string
  subtitle?: string
  actions?: ReactNode
  children: ReactNode
  className?: string
}

/**
 * Composed — `Card` + `CardHeader` wrapping a `Chart unstyled` so the chart's
 * own `<figure>` frame doesn't nest a card inside a card.
 */
export function ChartCard({ title, subtitle, actions, children, className }: ChartCardProps) {
  return (
    <Card className={className}>
      <CardHeader className="flex flex-col items-start justify-between gap-3 sm:flex-row">
        <div className="min-w-0">
          <h3 className="text-[15px] font-medium" style={{ color: 'var(--app-fg)' }}>
            {title}
          </h3>
          {subtitle && (
            <p className="mt-0.5 text-[12px]" style={{ color: 'var(--app-fg-muted)' }}>
              {subtitle}
            </p>
          )}
        </div>
        {actions && <div className="shrink-0">{actions}</div>}
      </CardHeader>
      <CardBody className="pt-0">{children}</CardBody>
    </Card>
  )
}
