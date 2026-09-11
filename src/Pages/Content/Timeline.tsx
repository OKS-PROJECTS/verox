import { Card, CardBody, Timeline, TimelineItem } from 'oks-ui'
import { Bug, MessageSquare, Rocket } from 'lucide-react'
import { PageHeader } from '../../Components/ui'

type EntryType = 'release' | 'fix' | 'note'

interface Entry {
  key: string
  type: EntryType
  title: string
  time: string
  description: string
}

const TYPE_META: Record<EntryType, { icon: React.ReactNode; color: 'primary' | 'danger' | 'info' }> = {
  release: { icon: <Rocket size={13} />, color: 'primary' },
  fix: { icon: <Bug size={13} />, color: 'danger' },
  note: { icon: <MessageSquare size={13} />, color: 'info' },
}

const ENTRIES: Entry[] = [
  {
    key: 'e1',
    type: 'release',
    title: 'v2.4.0 — Workflow automation',
    time: 'Sep 10, 2026',
    description:
      'Added conditional automation rules that can move records between stages and notify a channel when a threshold is hit.',
  },
  {
    key: 'e2',
    type: 'fix',
    title: 'Fixed export timeout on large tables',
    time: 'Sep 8, 2026',
    description:
      'CSV exports above 50k rows were timing out. Exports are now streamed in chunks and no longer block the UI thread.',
  },
  {
    key: 'e3',
    type: 'note',
    title: 'Maintenance window scheduled',
    time: 'Sep 6, 2026',
    description: 'A 15-minute maintenance window is planned for Sunday 02:00 UTC to upgrade the search index.',
  },
  {
    key: 'e4',
    type: 'release',
    title: 'v2.3.0 — Keyboard command palette',
    time: 'Aug 29, 2026',
    description: 'Press ⌘K anywhere in the app to jump to a page, run an action, or search across records.',
  },
  {
    key: 'e5',
    type: 'fix',
    title: 'Resolved duplicate notification emails',
    time: 'Aug 24, 2026',
    description: 'Members assigned to overlapping teams were receiving the same digest email twice. Deduplication is now applied server-side.',
  },
  {
    key: 'e6',
    type: 'note',
    title: 'API rate limits increased',
    time: 'Aug 20, 2026',
    description: 'Business and Scale plans now get 5,000 requests per minute per workspace, up from 2,000.',
  },
  {
    key: 'e7',
    type: 'release',
    title: 'v2.2.0 — Saved views',
    time: 'Aug 12, 2026',
    description: 'Table and board views can now be saved per user, with filters, sort order and column widths preserved.',
  },
  {
    key: 'e8',
    type: 'fix',
    title: 'Fixed drag handle misalignment on Safari',
    time: 'Aug 5, 2026',
    description: 'Board card drag handles were offset by a few pixels in Safari 17, making the first click miss the card.',
  },
  {
    key: 'e9',
    type: 'note',
    title: 'Deprecating the legacy webhook format',
    time: 'Jul 30, 2026',
    description: 'The v1 webhook payload will be removed on Jan 1, 2027. Migrate to the v2 payload documented in the API reference.',
  },
]

export default function TimelinePage() {
  return (
    <div>
      <PageHeader
        title="Changelog"
        subtitle="Releases, fixes and notes from the product team."
        crumbs={[{ label: 'Verox', to: '/' }, { label: 'Pages' }, { label: 'Timeline' }]}
      />

      <Card>
        <CardBody>
          <Timeline>
            {ENTRIES.map((entry) => {
              const meta = TYPE_META[entry.type]
              return (
                <TimelineItem key={entry.key} title={entry.title} time={entry.time} icon={meta.icon} color={meta.color}>
                  <p className="text-[13px] leading-relaxed" style={{ color: 'var(--app-fg)' }}>
                    {entry.description}
                  </p>
                </TimelineItem>
              )
            })}
          </Timeline>
        </CardBody>
      </Card>
    </div>
  )
}
