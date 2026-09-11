import type { ReactNode } from 'react'
import { Card, CardBody, Stat, type StatTrend } from 'oks-ui'

interface KpiCardProps {
  label: string
  value: string
  delta?: string
  trend?: StatTrend
  help?: string
  icon: ReactNode
  tone?: 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'secondary'
}

/** Composed — `Card` + `Stat`, with the icon in a tinted circle to match the reference's KPI tiles. */
export function KpiCard({ label, value, delta, trend, help, icon, tone = 'primary' }: KpiCardProps) {
  return (
    <Card className="h-full">
      <CardBody>
        <Stat
          label={label}
          value={value}
          delta={delta}
          trend={trend}
          help={help}
          icon={
            <span
              className="flex h-10 w-10 items-center justify-center rounded-full"
              style={{ background: `var(--app-${tone}-soft)`, color: `var(--app-${tone})` }}
            >
              {icon}
            </span>
          }
        />
      </CardBody>
    </Card>
  )
}
