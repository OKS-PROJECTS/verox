import { Card, CardBody } from 'oks-ui'
import { PageHeader } from '../../Components/ui'

const RAMPS = ['primary', 'secondary', 'success', 'warning', 'danger', 'info'] as const
const STOPS = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]

const SEMANTIC = [
  { label: 'app-bg', var: '--app-bg' },
  { label: 'app-surface', var: '--app-surface' },
  { label: 'app-border', var: '--app-border' },
  { label: 'app-fg-strong', var: '--app-fg-strong' },
  { label: 'app-fg', var: '--app-fg' },
  { label: 'app-fg-muted', var: '--app-fg-muted' },
]

export default function Colors() {
  return (
    <div>
      <PageHeader
        title="Colors"
        subtitle="The full oks-ui palette ramp, repointed to Verox's brand, plus the semantic --app-* layer every composed component reads."
        crumbs={[{ label: 'Verox', to: '/' }, { label: 'Components' }, { label: 'Colors' }]}
      />
      <div className="flex flex-col gap-5">
        {RAMPS.map((ramp) => (
          <Card key={ramp}>
            <CardBody>
              <div className="mb-2 text-[13px] font-semibold capitalize" style={{ color: 'var(--app-fg-strong)' }}>
                {ramp}
              </div>
              <div className="grid grid-cols-11 gap-1">
                {STOPS.map((stop) => (
                  <div key={stop} className="flex flex-col items-center gap-1">
                    <div
                      className="h-10 w-full rounded-[var(--oks-radius-sm)]"
                      style={{ background: `var(--oks-color-${ramp}-${stop})`, border: '1px solid var(--app-border)' }}
                    />
                    <span className="text-[9px]" style={{ color: 'var(--app-fg-subtle)' }}>
                      {stop}
                    </span>
                  </div>
                ))}
              </div>
            </CardBody>
          </Card>
        ))}

        <Card>
          <CardBody>
            <div className="mb-2 text-[13px] font-semibold" style={{ color: 'var(--app-fg-strong)' }}>
              --app-* semantic layer
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
              {SEMANTIC.map((s) => (
                <div key={s.var} className="flex flex-col items-center gap-1">
                  <div className="h-10 w-full rounded-[var(--oks-radius-sm)]" style={{ background: `var(${s.var})`, border: '1px solid var(--app-border)' }} />
                  <span className="text-center text-[9px]" style={{ color: 'var(--app-fg-subtle)' }}>
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}
