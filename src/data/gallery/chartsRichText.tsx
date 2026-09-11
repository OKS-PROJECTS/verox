import { Chart, TextEditor } from 'oks-ui'
import type { Block } from 'oks-ui'
import type { GalleryEntry } from './types'

const trendRows = [
  { month: 'Apr', revenue: 42 },
  { month: 'May', revenue: 48 },
  { month: 'Jun', revenue: 45 },
  { month: 'Jul', revenue: 53 },
  { month: 'Aug', revenue: 58 },
  { month: 'Sep', revenue: 64 },
]

const ticketRows = [
  { channel: 'Email', tickets: 32 },
  { channel: 'Chat', tickets: 51 },
  { channel: 'Phone', tickets: 18 },
  { channel: 'Social', tickets: 24 },
]

const planRows = [
  { plan: 'Starter', accounts: 38 },
  { plan: 'Growth', accounts: 44 },
  { plan: 'Scale', accounts: 18 },
]

const chartTileStyle = {
  border: '1px solid var(--app-border)',
  background: 'var(--app-surface)',
}

const initialDoc: Block[] = [
  {
    id: 'heading-1',
    type: 'heading',
    props: { level: 2 },
    content: [{ type: 'text', text: 'Release notes — v2.4' }],
    children: [],
  },
  {
    id: 'paragraph-1',
    type: 'paragraph',
    props: {},
    content: [
      { type: 'text', text: 'This release focuses on faster exports and a redesigned ' },
      { type: 'text', text: 'billing', styles: { bold: true } },
      { type: 'text', text: ' page. See the ' },
      { type: 'link', text: 'full changelog', href: '#' },
      { type: 'text', text: ' for details.' },
    ],
    children: [],
  },
]

export const chartsRichTextEntries: GalleryEntry[] = [
  {
    slug: 'chart',
    name: 'Chart',
    category: 'Data visualization',
    description: 'Line, column and donut renders of the same charting primitive — the only chart tool in the template.',
    render: () => (
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-lg p-3" style={chartTileStyle}>
          <p className="mb-2 text-xs font-medium" style={{ color: 'var(--app-fg-muted)' }}>
            Revenue trend
          </p>
          <Chart
            type="line"
            data={trendRows}
            x="month"
            series={[{ key: 'revenue', name: 'Revenue', color: 'var(--oks-color-primary-500)' }]}
            height={180}
            unstyled
            axisY={{ hide: true }}
            line={{ curve: 'smooth', area: { show: true, fill: { opacity: 0.15 } } }}
          />
        </div>
        <div className="rounded-lg p-3" style={chartTileStyle}>
          <p className="mb-2 text-xs font-medium" style={{ color: 'var(--app-fg-muted)' }}>
            Tickets by channel
          </p>
          <Chart
            type="column"
            data={ticketRows}
            x="channel"
            series={[{ key: 'tickets', name: 'Tickets', color: 'var(--oks-color-info-500)' }]}
            height={180}
            unstyled
            axisY={{ hide: true }}
            column={{ radius: 4 }}
          />
        </div>
        <div className="rounded-lg p-3" style={chartTileStyle}>
          <p className="mb-2 text-xs font-medium" style={{ color: 'var(--app-fg-muted)' }}>
            Plan mix
          </p>
          <Chart
            type="donut"
            data={planRows}
            x="plan"
            series={[{ key: 'accounts', name: 'Accounts' }]}
            height={180}
            unstyled
            palette={{ roles: ['primary', 'info', 'secondary'] }}
          />
        </div>
      </div>
    ),
    source: `<Chart
  type="line"
  data={revenueRows}
  x="month"
  series={[{ key: "revenue", name: "Revenue", color: "var(--oks-color-primary-500)" }]}
  height={180}
  unstyled
  line={{ curve: "smooth", area: { show: true, fill: { opacity: 0.15 } } }}
/>
<Chart type="column" data={ticketRows} x="channel" series={[{ key: "tickets", name: "Tickets" }]} height={180} unstyled />
<Chart type="donut" data={planRows} x="plan" series={[{ key: "accounts", name: "Accounts" }]} height={180} unstyled palette={{ roles: ["primary", "info", "secondary"] }} />`,
  },
  {
    slug: 'text-editor',
    name: 'TextEditor',
    category: 'Rich text',
    description: 'Block-based rich text editor seeded with a heading and a formatted paragraph.',
    render: () => (
      <div className="rounded-lg p-2" style={chartTileStyle}>
        <TextEditor
          value={initialDoc}
          onChange={() => {}}
          allowedBlocks={['paragraph', 'heading', 'bulletList', 'quote']}
          placeholder="Start typing…"
        />
      </div>
    ),
    source: `<TextEditor
  value={initialDoc}
  onChange={setValue}
  allowedBlocks={["paragraph", "heading", "bulletList", "quote"]}
  placeholder="Start typing…"
/>`,
  },
]
