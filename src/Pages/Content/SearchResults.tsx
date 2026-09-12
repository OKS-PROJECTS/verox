import { useMemo, useState } from 'react'
import { Card, CardBody, Pagination, PaginationSummary, TextField } from 'oks-ui'
import { BarChart3, FileText, LayoutDashboard, Search, Settings, Users } from 'lucide-react'
import { PageHeader } from '../../Components/ui'

interface SearchDoc {
  key: string
  title: string
  snippet: string
  path: string
  icon: React.ReactNode
}

const DOCS: SearchDoc[] = [
  {
    key: 'd1',
    title: 'Default dashboard overview',
    snippet: 'A tour of the default dashboard layout — KPI tiles, the performance chart and the regional breakdown.',
    path: 'Verox / Dashboard / Default',
    icon: <LayoutDashboard size={16} />,
  },
  {
    key: 'd2',
    title: 'Customizing your dashboard widgets',
    snippet: 'Learn how to reorder, resize and remove widgets on any dashboard, and how to save a layout as default.',
    path: 'Verox / Docs / Dashboard',
    icon: <LayoutDashboard size={16} />,
  },
  {
    key: 'd3',
    title: 'Analytics dashboard for marketing teams',
    snippet: 'A pre-built dashboard template focused on campaign reach, funnel conversion and channel attribution.',
    path: 'Verox / Templates / Marketing',
    icon: <BarChart3 size={16} />,
  },
  {
    key: 'd4',
    title: 'Sharing a dashboard with external viewers',
    snippet: 'Generate a read-only link to a dashboard, optionally password-protected, for people outside your workspace.',
    path: 'Verox / Docs / Sharing',
    icon: <FileText size={16} />,
  },
  {
    key: 'd5',
    title: 'Setting dashboard-level permissions',
    snippet: 'Restrict who can edit a dashboard versus who can only view it, independent of workspace-level roles.',
    path: 'Verox / Docs / Permissions',
    icon: <Settings size={16} />,
  },
  {
    key: 'd6',
    title: 'Embedding a dashboard in another app',
    snippet: 'Use the embed API to render a live dashboard inside an internal tool via a signed iframe URL.',
    path: 'Verox / Docs / API',
    icon: <FileText size={16} />,
  },
  {
    key: 'd7',
    title: 'Dashboard performance and load times',
    snippet: 'Tips for keeping a dashboard fast once it has more than a dozen widgets pulling from live queries.',
    path: 'Verox / Docs / Performance',
    icon: <BarChart3 size={16} />,
  },
  {
    key: 'd8',
    title: 'Team dashboard access requests',
    snippet: 'How members can request access to a private dashboard, and how admins approve or deny those requests.',
    path: 'Verox / Docs / Access requests',
    icon: <Users size={16} />,
  },
  {
    key: 'd9',
    title: 'Inviting teammates to a workspace',
    snippet: 'Send email invitations, set a default role, and track pending invitations from the members page.',
    path: 'Verox / Docs / Members',
    icon: <Users size={16} />,
  },
  {
    key: 'd10',
    title: 'Configuring single sign-on',
    snippet: 'Connect an identity provider using SAML or OIDC and enforce it for every member of the workspace.',
    path: 'Verox / Docs / Security',
    icon: <Settings size={16} />,
  },
]

const PAGE_SIZE = 5

export default function SearchResults() {
  const [query, setQuery] = useState('dashboard')
  const [page, setPage] = useState(1)

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return DOCS
    return DOCS.filter((d) => d.title.toLowerCase().includes(q) || d.snippet.toLowerCase().includes(q))
  }, [query])

  const pageCount = Math.max(1, Math.ceil(results.length / PAGE_SIZE))
  const clampedPage = Math.min(page, pageCount)
  const pageResults = results.slice((clampedPage - 1) * PAGE_SIZE, clampedPage * PAGE_SIZE)

  return (
    <div>
      <PageHeader
        title="Search results"
        subtitle="Find pages, docs and settings across your workspace."
        crumbs={[{ label: 'Verox', to: '/' }, { label: 'Pages' }, { label: 'Search results' }]}
      />

      <div className="mx-auto mb-5 max-w-xl">
        <TextField
          type="search"
          variant="filled"
          size="lg"
          placeholder="Search everything…"
          startIcon={<Search size={16} />}
          value={query}
          onChange={(v) => {
            setQuery(v)
            setPage(1)
          }}
          aria-label="Search"
        />
      </div>

      <div className="mx-auto max-w-2xl">
        <p className="mb-3 text-[12.5px]" style={{ color: 'var(--app-fg-muted)' }}>
          {results.length} result{results.length === 1 ? '' : 's'} for "{query}"
        </p>

        <div className="flex flex-col gap-3">
          {pageResults.map((doc) => (
            <Card key={doc.key} isHoverable>
              <CardBody className="flex items-start gap-3">
                <span
                  className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
                  style={{ background: 'var(--app-primary-soft)', color: 'var(--app-primary)' }}
                >
                  {doc.icon}
                </span>
                <div className="min-w-0">
                  <p className="text-[11px]" style={{ color: 'var(--app-fg-subtle)' }}>
                    {doc.path}
                  </p>
                  <h3 className="text-[14px] font-medium" style={{ color: 'var(--app-fg)' }}>
                    {doc.title}
                  </h3>
                  <p className="mt-1 text-[12.5px] leading-relaxed" style={{ color: 'var(--app-fg)' }}>
                    {doc.snippet}
                  </p>
                </div>
              </CardBody>
            </Card>
          ))}

          {pageResults.length === 0 && (
            <Card>
              <CardBody className="text-center text-sm" style={{ color: 'var(--app-fg-muted)' }}>
                No results found for "{query}".
              </CardBody>
            </Card>
          )}
        </div>

        {results.length > 0 && (
          <div className="mt-5 flex flex-col items-center justify-between gap-3 sm:flex-row">
            <PaginationSummary page={clampedPage} pageSize={PAGE_SIZE} total={results.length} />
            <Pagination page={clampedPage} pageCount={pageCount} onChange={setPage} size="sm" />
          </div>
        )}
      </div>
    </div>
  )
}
