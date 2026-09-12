import { CircularProgress } from 'oks-ui'
import type { CSSProperties } from 'react'

export interface RingDatum {
  label: string
  value: number
  color: string
  size: number
}

interface RingGaugeProps {
  rings: RingDatum[]
  centerValue?: string
  centerLabel?: string
  diameter?: number
}

/**
 * Composed — concentric `CircularProgress` rings (each sized via a
 * `--oks-circular-progress-size` style override, since the shipped `size`
 * prop is a 3-step token, not an arbitrary px) to approximate a multi-metric
 * radial gauge. oks-ui has no native multi-ring/concentric gauge — logged in
 * OKS-UI-FEEDBACK.md.
 */
export function RingGauge({ rings, centerValue, centerLabel, diameter = 160 }: RingGaugeProps) {
  return (
    <div className="ring-gauge relative shrink-0" style={{ width: diameter, height: diameter }}>
      {rings.map((r) => (
        <div key={r.label} className="absolute inset-0 flex items-center justify-center">
          <CircularProgress
            value={r.value}
            aria-label={r.label}
            showValueLabel={false}
            strokeWidth={5}
            style={{ '--oks-circular-progress-indicator': r.color, '--oks-circular-progress-track': 'var(--app-border)', '--oks-circular-progress-size': `${r.size}px` } as CSSProperties}
          />
        </div>
      ))}
      {(centerValue || centerLabel) && (
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          {centerValue && (
            <span className="text-[18px] font-bold" style={{ color: 'var(--app-fg-strong)' }}>
              {centerValue}
            </span>
          )}
          {centerLabel && (
            <span className="text-[10px]" style={{ color: 'var(--app-fg-muted)' }}>
              {centerLabel}
            </span>
          )}
        </div>
      )}
    </div>
  )
}
