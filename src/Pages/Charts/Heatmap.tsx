import { Chart } from 'oks-ui'
import { PageHeader, ChartCard } from '../../Components/ui'
import { HEATMAP_CATEGORIES, HEATMAP_SERIES } from '../../data/chartsGallery'

export default function Heatmap() {
  return (
    <div>
      <PageHeader
        title="Heatmap"
        subtitle="Matrix chart — each row a series, each column a category."
        crumbs={[{ label: 'Verox', to: '/' }, { label: 'Charts' }, { label: 'Heatmap' }]}
      />
      <ChartCard title="Support Load" subtitle="Tickets opened per hour, by weekday">
        <Chart
          type="heatmap"
          data={{ categories: HEATMAP_CATEGORIES, series: HEATMAP_SERIES }}
          height={280}
          unstyled
          heatmap={{ color: 'var(--oks-color-primary-500)', cellGap: 3, cellRadius: 3, showValues: false }}
        />
      </ChartCard>
    </div>
  )
}
