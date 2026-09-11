import { Chart } from 'oks-ui'
import { PageHeader, ChartCard } from '../../Components/ui'
import { DEVICE_SPLIT, PLAN_SPLIT } from '../../data/chartsGallery'

export default function Distributions() {
  return (
    <div>
      <PageHeader
        title="Distributions"
        subtitle="Share-of-whole breakdowns — pie and donut."
        crumbs={[{ label: 'Verox', to: '/' }, { label: 'Charts' }, { label: 'Distributions' }]}
      />
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <ChartCard title="Traffic by Device" subtitle="Pie">
          <Chart
            type="pie"
            data={DEVICE_SPLIT}
            x="label"
            series="value"
            height={260}
            unstyled
            legend
            palette={{ colors: DEVICE_SPLIT.map((d) => d.color) }}
            dataFormat={{ suffix: '%' }}
          />
        </ChartCard>
        <ChartCard title="Customers by Plan" subtitle="Donut, with centre total">
          <Chart
            type="donut"
            data={PLAN_SPLIT}
            x="label"
            series="value"
            height={260}
            unstyled
            legend
            palette={{ colors: PLAN_SPLIT.map((d) => d.color) }}
            dataFormat={{ suffix: '%' }}
          />
        </ChartCard>
      </div>
    </div>
  )
}
