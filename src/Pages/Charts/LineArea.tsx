import { Chart } from 'oks-ui'
import { PageHeader, ChartCard } from '../../Components/ui'
import { REVENUE_TREND, TRAFFIC_TREND } from '../../data/chartsGallery'

export default function LineArea() {
  return (
    <div>
      <PageHeader
        title="Line & Area"
        subtitle="Trend charts built with oks-ui's Chart component."
        crumbs={[{ label: 'Verox', to: '/' }, { label: 'Charts' }, { label: 'Line & Area' }]}
      />
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <ChartCard title="Revenue vs. Target" subtitle="Monthly, smoothed area">
          <Chart
            type="area"
            data={REVENUE_TREND}
            x="month"
            series={[
              { key: 'revenue', name: 'Revenue', color: 'var(--oks-color-primary-500)' },
              { key: 'target', name: 'Target', color: 'var(--oks-color-default-400)' },
            ]}
            height={280}
            unstyled
            legend
            line={{ curve: 'smooth', area: { show: true, fill: { opacity: 0.14 } } }}
            grid={{ horizontal: true }}
            dataFormat={{ prefix: '$', format: 'compact' }}
          />
        </ChartCard>
        <ChartCard title="Traffic Sources" subtitle="Organic, paid and referral, straight lines">
          <Chart
            type="line"
            data={TRAFFIC_TREND}
            x="month"
            series={[
              { key: 'organic', name: 'Organic', color: 'var(--oks-color-success-500)' },
              { key: 'paid', name: 'Paid', color: 'var(--oks-color-primary-500)' },
              { key: 'referral', name: 'Referral', color: 'var(--oks-color-warning-600)' },
            ]}
            height={280}
            unstyled
            legend
            line={{ curve: 'straight', strokeWidth: 2 }}
            grid={{ horizontal: true }}
            dataFormat={{ format: 'compact' }}
          />
        </ChartCard>
      </div>
    </div>
  )
}
