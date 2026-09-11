import { Card, CardBody, Chart } from 'oks-ui'
import { PageHeader } from '../../Components/ui'
import { SPARK_SERIES } from '../../data/chartsGallery'

const TILES = [
  { key: 'revenue', label: 'Revenue', value: '$2.50M', color: 'var(--oks-color-primary-500)', type: 'area' as const },
  { key: 'signups', label: 'Signups', value: '4,820', color: 'var(--oks-color-success-500)', type: 'area' as const },
  { key: 'churn', label: 'Churn', value: '1.8%', color: 'var(--oks-color-danger-400)', type: 'line' as const },
  { key: 'nps', label: 'NPS', value: '52', color: 'var(--oks-color-info-500)', type: 'line' as const },
]

export default function Sparklines() {
  return (
    <div>
      <PageHeader
        title="Sparklines"
        subtitle="Tiny unstyled trend charts embedded inside KPI tiles."
        crumbs={[{ label: 'Verox', to: '/' }, { label: 'Charts' }, { label: 'Sparklines' }]}
      />
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {TILES.map((tile) => (
          <Card key={tile.key}>
            <CardBody>
              <div className="mb-1 text-[12px]" style={{ color: 'var(--app-fg-muted)' }}>
                {tile.label}
              </div>
              <div className="mb-2 text-[20px] font-bold" style={{ color: 'var(--app-fg-strong)' }}>
                {tile.value}
              </div>
              <Chart
                type={tile.type}
                data={SPARK_SERIES[tile.key as keyof typeof SPARK_SERIES]}
                x="month"
                series={{ key: 'value', color: tile.color }}
                height={56}
                unstyled
                axisX={{ hide: true }}
                axisY={{ hide: true }}
                grid={{ horizontal: false }}
                tooltip={{ showTotal: false }}
                line={{ strokeWidth: 2, area: tile.type === 'area' ? { show: true, fill: { opacity: 0.15 } } : undefined }}
              />
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  )
}
