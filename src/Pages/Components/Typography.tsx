import { Card, CardBody } from 'oks-ui'
import { PageHeader } from '../../Components/ui'

const SCALE = [
  { label: 'Page title', size: '20px', weight: 700, className: 'text-[20px] font-bold' },
  { label: 'Card title', size: '14-15px', weight: 600, className: 'text-[14px] font-semibold' },
  { label: 'Body', size: '13.5px', weight: 400, className: 'text-[13.5px] font-normal' },
  { label: 'Muted / caption', size: '12px', weight: 400, className: 'text-[12px] font-normal' },
  { label: 'Subtle / label', size: '11px', weight: 500, className: 'text-[11px] font-medium uppercase tracking-wide' },
]

export default function TypographyPage() {
  return (
    <div>
      <PageHeader
        title="Typography"
        subtitle="Plus Jakarta Sans for body text, Hanken Grotesk for headings. One scale, used consistently across the app."
        crumbs={[{ label: 'Verox', to: '/' }, { label: 'Components' }, { label: 'Typography' }]}
      />
      <Card>
        <CardBody className="flex flex-col gap-5">
          {SCALE.map((s) => (
            <div key={s.label} className="flex items-baseline justify-between gap-4 border-b pb-4 last:border-0 last:pb-0" style={{ borderColor: 'var(--app-border)' }}>
              <span className={s.className} style={{ color: 'var(--app-fg-strong)' }}>
                {s.label}
              </span>
              <span className="shrink-0 text-[11px]" style={{ color: 'var(--app-fg-subtle)' }}>
                {s.size} · {s.weight}
              </span>
            </div>
          ))}
        </CardBody>
      </Card>
    </div>
  )
}
