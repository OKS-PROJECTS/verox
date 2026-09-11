import { Card, CardBody, CardHeader, Chart } from 'oks-ui'

export interface DonutDatum {
  label: string
  value: number
  color: string
  [key: string]: unknown
}

interface DonutCardProps {
  title: string
  subtitle?: string
  data: DonutDatum[]
  centerLabel?: string
  height?: number
}

/**
 * Composed — `Chart type="donut"` (pie centre replaced via `renderCenter`)
 * plus a side legend, inside a `Card`. oks-ui's donut centre has no built-in
 * secondary caption slot, so the label under the total is our own overlay —
 * logged in OKS-UI-FEEDBACK.md.
 */
export function DonutCard({ title, subtitle, data, centerLabel, height = 200 }: DonutCardProps) {
  return (
    <Card>
      <CardHeader>
        <h3 className="text-[14px] font-semibold" style={{ color: 'var(--app-fg-strong)' }}>
          {title}
        </h3>
        {subtitle && (
          <p className="mt-0.5 text-[12px]" style={{ color: 'var(--app-fg-muted)' }}>
            {subtitle}
          </p>
        )}
      </CardHeader>
      <CardBody className="flex flex-col items-center gap-4 pt-0 sm:flex-row">
        <div className="donut-no-center shrink-0">
          <Chart
            type="donut"
            data={data}
            x="label"
            series="value"
            unstyled
            height={height}
            legend={false}
            palette={{ colors: data.map((d) => d.color) }}
            pie={{
              renderCenter: ({ formatted }) => (
                <div className="flex flex-col items-center">
                  <span className="text-[18px] font-bold" style={{ color: 'var(--app-fg-strong)' }}>
                    {formatted}
                  </span>
                  {centerLabel && (
                    <span className="text-[10px]" style={{ color: 'var(--app-fg-muted)' }}>
                      {centerLabel}
                    </span>
                  )}
                </div>
              ),
            }}
          />
        </div>
        <ul className="w-full min-w-0 flex-1 space-y-2">
          {data.map((d) => (
            <li key={d.label} className="flex items-center justify-between gap-2 text-[12.5px]">
              <span className="flex min-w-0 items-center gap-2 truncate" style={{ color: 'var(--app-fg)' }}>
                <span className="h-2 w-2 shrink-0 rounded-full" style={{ background: d.color }} />
                <span className="truncate">{d.label}</span>
              </span>
              <span className="shrink-0 font-semibold" style={{ color: 'var(--app-fg-strong)' }}>
                {d.value}
              </span>
            </li>
          ))}
        </ul>
      </CardBody>
    </Card>
  )
}
