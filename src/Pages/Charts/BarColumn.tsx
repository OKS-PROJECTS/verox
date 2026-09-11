import { Chart } from 'oks-ui'
import { PageHeader, ChartCard } from '../../Components/ui'
import { SALES_BY_CHANNEL, WEEKLY_ORDERS } from '../../data/chartsGallery'

export default function BarColumn() {
  return (
    <div>
      <PageHeader
        title="Bar & Column"
        subtitle="Categorical comparisons — horizontal bar and vertical column."
        crumbs={[{ label: 'Verox', to: '/' }, { label: 'Charts' }, { label: 'Bar & Column' }]}
      />
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <ChartCard title="Sales by Channel" subtitle="Horizontal bar, ranked">
          <Chart
            type="bar"
            data={[...SALES_BY_CHANNEL].sort((a, b) => b.value - a.value)}
            x="channel"
            series="value"
            height={260}
            unstyled
            palette={{ roles: ['primary'] }}
            bar={{ radius: 4 }}
            dataFormat={{ prefix: '$', format: 'compact' }}
          />
        </ChartCard>
        <ChartCard title="Orders This Week" subtitle="Vertical column, daily">
          <Chart
            type="column"
            data={WEEKLY_ORDERS}
            x="day"
            series="orders"
            height={260}
            unstyled
            palette={{ roles: ['secondary'] }}
            column={{ radius: 6 }}
          />
        </ChartCard>
      </div>
    </div>
  )
}
