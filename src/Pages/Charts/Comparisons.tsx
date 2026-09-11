import { Chart } from 'oks-ui'
import { PageHeader, ChartCard } from '../../Components/ui'
import { QUARTER_COMPARISON, TEAM_RADAR } from '../../data/chartsGallery'

export default function Comparisons() {
  return (
    <div>
      <PageHeader
        title="Comparisons"
        subtitle="Side-by-side series — grouped columns. oks-ui's Chart has no radar/scatter/bubble type, so multi-metric comparisons are shown as grouped columns instead (logged in the feedback doc)."
        crumbs={[{ label: 'Verox', to: '/' }, { label: 'Charts' }, { label: 'Comparisons' }]}
      />
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <ChartCard title="This Year vs. Last Year" subtitle="Quarterly revenue, grouped column">
          <Chart
            type="column"
            data={QUARTER_COMPARISON}
            x="quarter"
            series={[
              { key: 'thisYear', name: 'This year', color: 'var(--oks-color-primary-500)' },
              { key: 'lastYear', name: 'Last year', color: 'var(--oks-color-default-300)' },
            ]}
            height={280}
            unstyled
            legend
            column={{ radius: 4, groupGap: 8 }}
            dataFormat={{ prefix: '$', format: 'compact' }}
          />
        </ChartCard>
        <ChartCard title="Us vs. a Rival" subtitle="Scorecard across 6 dimensions, grouped column">
          <Chart
            type="column"
            data={TEAM_RADAR}
            x="skill"
            series={[
              { key: 'us', name: 'Verox', color: 'var(--oks-color-primary-500)' },
              { key: 'rival', name: 'Rival', color: 'var(--oks-color-danger-400)' },
            ]}
            height={280}
            unstyled
            legend
            column={{ radius: 4, groupGap: 6 }}
          />
        </ChartCard>
      </div>
    </div>
  )
}
