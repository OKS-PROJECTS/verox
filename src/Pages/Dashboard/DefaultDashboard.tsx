import { Card, CardBody, CardHeader, Chart, Button, Table } from 'oks-ui'
import { ShoppingBag, DollarSign, Users, Percent, Download, Upload, Globe } from 'lucide-react'
import { ChartCard, DataTable, KpiCard, PageHeader, RingGauge } from '../../Components/ui'
import {
  ENGAGEMENT_TREND,
  GOAL_TABLE,
  PAGE_ANALYTICS,
  PERFORMANCE_TREND,
  REGIONS,
  TOP_COUNTRIES,
} from '../../data/dashboard'

export default function DefaultDashboard() {
  return (
    <div>
      <PageHeader
        title="Welcome back, David"
        subtitle="Here's what's happening across your workspace today."
        crumbs={[{ label: 'Verox', to: '/' }, { label: 'Dashboard' }]}
      />

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,1fr)_2fr]">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-1">
          <KpiCard label="Total Orders" value="687.30k" delta="5.42%" trend="up" help="Since last month" icon={<ShoppingBag size={18} />} tone="primary" />
          <KpiCard label="Total Revenue" value="$2.50M" delta="8.76%" trend="up" help="Since last month" icon={<DollarSign size={18} />} tone="success" />
          <KpiCard label="Active Customers" value="54.60k" delta="2.13%" trend="down" help="Since last month" icon={<Users size={18} />} tone="warning" />
          <KpiCard label="Conversion Rate" value="4.87%" delta="1.28%" trend="up" help="Since last week" icon={<Percent size={18} />} tone="info" />
        </div>

        <ChartCard
          title="Business Performance Overview"
          subtitle="Website traffic, active users, conversion and revenue growth"
          actions={
            <div className="flex gap-2">
              <Button size="sm" variant="bordered" color="default" startContent={<Upload size={14} />}>
                Export
              </Button>
              <Button size="sm" variant="bordered" color="default" startContent={<Download size={14} />}>
                Import
              </Button>
            </div>
          }
        >
          <Chart
            type="area"
            data={PERFORMANCE_TREND}
            x="month"
            series={[
              { key: 'websiteTraffic', name: 'Website Traffic', color: 'var(--oks-color-primary-500)' },
              { key: 'activeUsers', name: 'Active Users', color: 'var(--oks-color-secondary-500)' },
              { key: 'conversionRate', name: 'Conversion Rate', color: 'var(--oks-color-success-500)' },
              { key: 'revenueGrowth', name: 'Revenue Growth', color: 'var(--oks-color-warning-600)' },
            ]}
            height={300}
            unstyled
            legend
            line={{ curve: 'smooth' }}
            grid={{ horizontal: true }}
          />
        </ChartCard>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-3">
        <ChartCard title="Customer Engagement Overview" subtitle="Visitors, app users and social reach">
          <Chart
            type="area"
            data={ENGAGEMENT_TREND}
            x="month"
            series={[
              { key: 'websiteVisitors', name: 'Website Visitors', color: 'var(--oks-color-primary-500)' },
              { key: 'appUsers', name: 'App Users', color: 'var(--oks-color-success-500)' },
              { key: 'socialMedia', name: 'Social Media', color: 'var(--oks-color-warning-600)' },
            ]}
            height={220}
            unstyled
            legend
            line={{ curve: 'smooth', area: { show: true, fill: { opacity: 0.12 } } }}
          />
        </ChartCard>

        <Card>
          <CardHeader>
            <h3 className="text-[14px] font-semibold" style={{ color: 'var(--app-fg-strong)' }}>
              Goal Achievement Metrics
            </h3>
          </CardHeader>
          <CardBody className="pt-0">
            <div className="mb-4 flex justify-center">
              <RingGauge
                diameter={150}
                centerValue="83%"
                centerLabel="Avg."
                rings={[
                  { label: 'Sales Target', value: 82, color: 'var(--oks-color-primary-500)', size: 150 },
                  { label: 'Marketing Reach', value: 66, color: 'var(--oks-color-secondary-500)', size: 112 },
                  { label: 'Support SLA', value: 91, color: 'var(--oks-color-success-500)', size: 74 },
                ]}
              />
            </div>
            <Table
              aria-label="Goal detail"
              removeWrapper
              isCompact
              getRowKey={(r) => r.goal}
              rows={GOAL_TABLE}
              columns={[
                { key: 'goal', header: 'Goal' },
                { key: 'completed', header: 'Completed' },
                { key: 'target', header: 'Target' },
              ]}
            />
          </CardBody>
        </Card>

        <Card>
          <CardHeader className="flex items-center gap-2">
            <Globe size={16} style={{ color: 'var(--app-primary)' }} />
            <h3 className="text-[14px] font-semibold" style={{ color: 'var(--app-fg-strong)' }}>
              Regional Sales Distribution
            </h3>
          </CardHeader>
          <CardBody className="pt-0">
            <p className="mb-2 text-[11.5px]" style={{ color: 'var(--app-fg-subtle)' }}>
              Shown as a ranked chart — oks-ui ships no choropleth/region-map
              primitive (logged in the feedback doc).
            </p>
            <Chart
              type="bar"
              data={REGIONS}
              x="region"
              series="value"
              height={220}
              unstyled
              palette={{ roles: ['primary'] }}
              bar={{ radius: 4 }}
            />
          </CardBody>
        </Card>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-[2fr_1fr]">
        <DataTable
          title="Page Analytics Overview"
          columns={[
            { key: 'path', header: 'Page path', sortable: true },
            { key: 'source', header: 'Top referral source', sortable: true },
            { key: 'views', header: 'Page views', align: 'end', sortable: true },
            { key: 'avgTime', header: 'Avg time on page', align: 'end' },
            { key: 'bounceRate', header: 'Bounce rate', align: 'end' },
            { key: 'conversionRate', header: 'Conversion rate', align: 'end' },
          ]}
          rows={PAGE_ANALYTICS}
          getRowKey={(r) => r.path}
          searchKeys={['path', 'source']}
          searchPlaceholder="Search pages…"
        />

        <Card>
          <CardHeader>
            <h3 className="text-[14px] font-semibold" style={{ color: 'var(--app-fg-strong)' }}>
              Top Countries
            </h3>
          </CardHeader>
          <CardBody className="pt-0">
            <ul className="flex flex-col gap-3">
              {TOP_COUNTRIES.map((c) => (
                <li key={c.country} className="flex items-center justify-between text-[13px]">
                  <span style={{ color: 'var(--app-fg)' }}>{c.country}</span>
                  <span className="flex items-center gap-2">
                    <span style={{ color: 'var(--app-ok)' }}>{c.change}</span>
                    <span className="font-semibold" style={{ color: 'var(--app-fg-strong)' }}>
                      {c.value}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}
