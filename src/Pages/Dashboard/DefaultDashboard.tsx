import { Card, CardBody, CardHeader, Chart, Button, Table } from 'oks-ui'
import { ShoppingBag, DollarSign, Users, Percent, Download, Upload, Globe, UserPlus, Clock } from 'lucide-react'
import { ChartCard, DataTable, KpiCard, PageHeader, RingGauge } from '../../Components/ui'
import {
  ENGAGEMENT_TREND,
  GOAL_TABLE,
  PAGE_ANALYTICS,
  PERFORMANCE_TREND,
  REGIONS,
  TOP_COUNTRIES,
} from '../../data/dashboard'

const REGION_COLORS = [
  'var(--oks-color-primary-500)',
  'var(--oks-color-success-500)',
  'var(--oks-color-warning-500)',
  'var(--oks-color-info-500)',
  'var(--oks-color-secondary-500)',
  'var(--oks-color-danger-400)',
  'var(--oks-color-primary-300)',
]

export default function DefaultDashboard() {
  return (
    <div>
      <PageHeader
        title="Welcome back, David"
        subtitle="Here's what's happening across your workspace today."
        crumbs={[{ label: 'Verox', to: '/' }, { label: 'Dashboard' }]}
      />

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,5fr)_7fr]">
        <div className="grid grid-cols-2 gap-3 sm:gap-5">
          <KpiCard label="Total Orders" value="412.80k" delta="6.15%" trend="up" help="Since last month" icon={<ShoppingBag size={18} />} tone="primary" />
          <KpiCard label="Total Revenue" value="$1.85M" delta="7.32%" trend="up" help="Since last month" icon={<DollarSign size={18} />} tone="success" />
          <KpiCard label="Active Customers" value="38.90k" delta="1.64%" trend="down" help="Since last month" icon={<Users size={18} />} tone="warning" />
          <KpiCard label="Conversion Rate" value="3.92%" delta="0.87%" trend="up" help="Since last week" icon={<Percent size={18} />} tone="info" />
          <KpiCard label="New Signups" value="9.60k" delta="5.80%" trend="up" help="Since last month" icon={<UserPlus size={18} />} tone="secondary" />
          <KpiCard label="Avg. Session Time" value="4m 12s" delta="2.10%" trend="up" help="Since last month" icon={<Clock size={18} />} tone="danger" />
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
          <div className="relative">
            <Chart
              type="column"
              data={PERFORMANCE_TREND}
              x="month"
              series={[{ key: 'websiteTraffic', name: 'Website Traffic', color: 'var(--oks-color-primary-300)' }]}
              height={380}
              unstyled
              grid={{ horizontal: true }}
              padding={{ top: 8, right: 12, bottom: 24, left: 40 }}
              column={{ radius: 3, width: 14 }}
            />
            <div className="pointer-events-none absolute inset-0">
              <Chart
                type="line"
                data={PERFORMANCE_TREND}
                x="month"
                series={[
                  { key: 'activeUsers', name: 'Active Users', color: 'var(--oks-color-secondary-500)' },
                  { key: 'conversionRate', name: 'Conversion Rate', color: 'var(--oks-color-success-500)' },
                  { key: 'revenueGrowth', name: 'Revenue Growth', color: 'var(--oks-color-warning-600)' },
                ]}
                height={380}
                unstyled
                background="transparent"
                legend={false}
                axisX={{ hide: true }}
                axisY={{ hide: true }}
                grid={{ horizontal: false }}
                padding={{ top: 8, right: 12, bottom: 24, left: 40 }}
                line={{ curve: 'smooth', strokeWidth: 2 }}
              />
            </div>
          </div>
          <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-[12px]" style={{ color: 'var(--app-fg-muted)' }}>
            {[
              { label: 'Website Traffic', color: 'var(--oks-color-primary-300)' },
              { label: 'Active Users', color: 'var(--oks-color-secondary-500)' },
              { label: 'Conversion Rate', color: 'var(--oks-color-success-500)' },
              { label: 'Revenue Growth', color: 'var(--oks-color-warning-600)' },
            ].map((l) => (
              <span key={l.label} className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full" style={{ background: l.color }} />
                {l.label}
              </span>
            ))}
          </div>
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
            height={280}
            unstyled
            legend
            line={{ curve: 'smooth', area: { show: true, fill: { opacity: 0.12 } }, markers: { size: 5 } }}
          />
        </ChartCard>

        <Card>
          <CardHeader>
            <h3 className="text-[14px] font-medium" style={{ color: 'var(--app-fg)' }}>
              Goal Achievement Metrics
            </h3>
          </CardHeader>
          <CardBody className="pt-0">
            <div className="mb-4 flex justify-center">
              <RingGauge
                diameter={150}
                centerValue="76%"
                centerLabel="Avg."
                rings={[
                  { label: 'Pipeline Target', value: 64, color: 'var(--oks-color-primary-500)', size: 150 },
                  { label: 'Lead Generation', value: 61, color: 'var(--oks-color-secondary-500)', size: 112 },
                  { label: 'Support SLA', value: 88, color: 'var(--oks-color-success-500)', size: 74 },
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
                { key: 'goal', header: 'Goal', width: '40%' },
                { key: 'completed', header: 'Completed', width: '30%' },
                { key: 'target', header: 'Target', width: '30%' },
              ]}
            />
          </CardBody>
        </Card>

        <Card>
          <CardHeader className="flex items-center gap-2">
            <Globe size={16} style={{ color: 'var(--app-primary)' }} />
            <h3 className="text-[14px] font-medium" style={{ color: 'var(--app-fg)' }}>
              Regional Sales Distribution
            </h3>
          </CardHeader>
          <CardBody className="pt-0">
            <p className="mb-3 text-[11.5px]" style={{ color: 'var(--app-fg-subtle)' }}>
              Shown as a ranked chart — oks-ui ships no choropleth/region-map
              primitive (logged in the feedback doc).
            </p>
            <Chart
              type="bar"
              data={REGIONS}
              x="region"
              series="value"
              height={170}
              unstyled
              palette={{ colors: REGION_COLORS }}
              bar={{ radius: 4 }}
            />
            <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5 border-t pt-4" style={{ borderColor: 'var(--app-border)' }}>
              {REGIONS.map((r, i) => (
                <div key={r.region} className="flex items-center gap-2 text-[12.5px]">
                  <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ background: REGION_COLORS[i % REGION_COLORS.length] }} />
                  <span className="truncate" style={{ color: 'var(--app-fg)' }}>
                    {r.region}
                  </span>
                  <span className="ml-auto shrink-0 font-semibold" style={{ color: 'var(--app-fg-strong)' }}>
                    {r.value}
                  </span>
                </div>
              ))}
            </div>
          </CardBody>
        </Card>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-[3fr_1fr]">
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
            <h3 className="text-[14px] font-medium" style={{ color: 'var(--app-fg)' }}>
              Top Countries
            </h3>
          </CardHeader>
          <CardBody className="pt-0">
            <ul className="flex flex-col gap-3">
              {TOP_COUNTRIES.map((c) => (
                <li key={c.country} className="flex items-center justify-between text-[13px]">
                  <span className="flex items-center gap-2">
                    <span
                      className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[8px] font-bold"
                      style={{ background: 'var(--app-surface-2)', color: 'var(--app-fg-muted)' }}
                    >
                      {c.code}
                    </span>
                    <span style={{ color: 'var(--app-fg)' }}>{c.country}</span>
                  </span>
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
