import { Chart } from 'oks-ui'
import { Globe } from 'lucide-react'
import { ChartCard, DataTable, PageHeader } from '../../Components/ui'
import { REGION_SALES } from '../../data/regions'

const currency = (n: number) => `$${(n / 1000).toFixed(0)}k`

export default function Regions() {
  return (
    <div>
      <PageHeader
        title="Regional sales distribution"
        subtitle="Revenue, orders and growth broken down by region."
        crumbs={[{ label: 'Verox', to: '/' }, { label: 'Pages' }, { label: 'Regions' }]}
        actions={
          <span className="flex items-center gap-1.5 text-[11.5px]" style={{ color: 'var(--app-fg-subtle)' }}>
            <Globe size={13} />
            oks-ui ships no choropleth/region-map primitive — shown as a ranked chart and table.
          </span>
        }
      />

      <ChartCard title="Revenue by region" subtitle="Top 20 regions by total revenue">
        <Chart
          type="bar"
          data={REGION_SALES}
          x="region"
          series="revenue"
          height={420}
          unstyled
          palette={{ roles: ['primary'] }}
          bar={{ radius: 4 }}
          dataFormat={{ prefix: '$', format: 'compact' }}
        />
      </ChartCard>

      <div className="mt-5">
        <DataTable
          title="All regions"
          subtitle="Revenue, order volume and period-over-period growth"
          columns={[
            { key: 'region', header: 'Region', sortable: true },
            {
              key: 'revenue',
              header: 'Revenue',
              align: 'end',
              sortable: true,
              render: (r) => currency(r.revenue),
            },
            {
              key: 'orders',
              header: 'Orders',
              align: 'end',
              sortable: true,
              render: (r) => r.orders.toLocaleString(),
            },
            { key: 'growth', header: 'Growth', align: 'end', sortable: true },
          ]}
          rows={REGION_SALES}
          getRowKey={(r) => r.region}
          searchKeys={['region']}
          searchPlaceholder="Search regions…"
          pageSize={10}
        />
      </div>
    </div>
  )
}
