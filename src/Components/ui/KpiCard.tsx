import type { ReactNode } from 'react'
import { Card, CardBody, CardHeader, Chip } from 'oks-ui'
import { ChevronUp, ChevronDown } from 'lucide-react'
import type { StatTrend } from 'oks-ui'

interface KpiCardProps {
  label: string
  value: string
  delta?: string
  trend?: StatTrend
  help?: string
  icon: ReactNode
  tone?: 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'secondary'
}

/**
 * Composed — `Card` + `CardHeader`/`CardBody`, hand-laid-out rather than
 * `Stat` (whose fixed template puts the icon in a top row beside the label,
 * not centred inline with the value the way the reference's KPI tiles do —
 * logged in OKS-UI-FEEDBACK.md). Icon is a solid-color circle, matching the
 * reference's `avatar-md text-bg-primary` treatment exactly.
 */
export function KpiCard({ label, value, delta, trend, help, icon, tone = 'primary' }: KpiCardProps) {
  return (
    <Card className="h-full">
      <CardHeader>
        <h3 className="text-[14px] font-medium" style={{ color: 'var(--app-fg)' }}>
          {label}
        </h3>
      </CardHeader>
      <CardBody className="pt-0">
        <div className="mb-2 flex items-center justify-center gap-3 py-1">
          <span
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
            style={{ background: `var(--app-${tone})`, color: '#ffffff' }}
          >
            {icon}
          </span>
          <h3 className="text-[24px] font-bold leading-none" style={{ color: 'var(--app-fg-strong)' }}>
            {value}
          </h3>
        </div>
        {(delta || help) && (
          <p className="flex flex-wrap items-center justify-center gap-x-1.5 gap-y-1 text-[12.5px]" style={{ color: 'var(--app-fg-muted)' }}>
            {delta && (
              <Chip
                variant="soft"
                color={trend === 'down' ? 'danger' : 'success'}
                size="sm"
                startContent={trend === 'down' ? <ChevronDown size={12} /> : <ChevronUp size={12} />}
              >
                {delta}
              </Chip>
            )}
            {help && <span className="whitespace-nowrap">{help}</span>}
          </p>
        )}
      </CardBody>
    </Card>
  )
}
