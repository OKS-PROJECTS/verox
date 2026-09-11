import { useMemo, useState, type ReactNode } from 'react'
import {
  Card,
  CardBody,
  CardHeader,
  Chip,
  EmptyState,
  Pagination,
  PaginationSummary,
  Table,
  TextField,
  type TableColumn,
  type TableRowKey,
  type TableSelectionMode,
} from 'oks-ui'
import { Search } from 'lucide-react'

export interface DataTableFilter<Row> {
  key: string
  label: string
  test: (row: Row) => boolean
}

export interface DataTableProps<Row extends Record<string, unknown>> {
  title?: string
  subtitle?: string
  columns: TableColumn<Row>[]
  rows: Row[]
  getRowKey: (row: Row, index: number) => TableRowKey
  searchKeys?: Array<keyof Row>
  searchPlaceholder?: string
  filters?: DataTableFilter<Row>[]
  toolbarActions?: ReactNode
  pageSize?: number
  selectable?: boolean
  onRowAction?: (key: TableRowKey, row: Row) => void
  emptyTitle?: string
  emptyDescription?: string
}

/**
 * Composed — `Table` + `Pagination`/`PaginationSummary` + a search/filter
 * toolbar, inside a `Card`. oks-ui's `Table` deliberately doesn't bundle
 * pagination ("compose it here"); this is that composition, matching every
 * list/CRUD archetype page. Logged in OKS-UI-FEEDBACK.md as a DX nicety
 * oks-ui could ship as an opt-in `Table paginated` mode.
 */
export function DataTable<Row extends Record<string, unknown>>({
  title,
  subtitle,
  columns,
  rows,
  getRowKey,
  searchKeys,
  searchPlaceholder = 'Search…',
  filters,
  toolbarActions,
  pageSize = 10,
  selectable,
  onRowAction,
  emptyTitle = 'No results',
  emptyDescription = 'Try a different search or filter.',
}: DataTableProps<Row>) {
  const [query, setQuery] = useState('')
  const [activeFilter, setActiveFilter] = useState<string | null>(null)
  const [page, setPage] = useState(1)
  const selectionMode: TableSelectionMode = selectable ? 'multiple' : 'none'

  const filtered = useMemo(() => {
    let out = rows
    if (activeFilter && filters) {
      const f = filters.find((x) => x.key === activeFilter)
      if (f) out = out.filter(f.test)
    }
    if (query.trim() && searchKeys?.length) {
      const q = query.trim().toLowerCase()
      out = out.filter((row) => searchKeys.some((k) => String(row[k] ?? '').toLowerCase().includes(q)))
    }
    return out
  }, [rows, query, activeFilter, filters, searchKeys])

  const pageCount = Math.max(1, Math.ceil(filtered.length / pageSize))
  const clampedPage = Math.min(page, pageCount)
  const pageRows = filtered.slice((clampedPage - 1) * pageSize, clampedPage * pageSize)

  return (
    <Card>
      {(title || toolbarActions) && (
        <CardHeader className="flex flex-wrap items-center justify-between gap-3">
          <div>
            {title && (
              <h3 className="text-[15px] font-semibold" style={{ color: 'var(--app-fg-strong)' }}>
                {title}
              </h3>
            )}
            {subtitle && (
              <p className="mt-0.5 text-[12px]" style={{ color: 'var(--app-fg-muted)' }}>
                {subtitle}
              </p>
            )}
          </div>
          {toolbarActions}
        </CardHeader>
      )}
      <CardBody className={title ? 'pt-0' : undefined}>
        <div className="mb-4 flex flex-wrap items-center gap-2">
          {searchKeys && (
            <div className="w-full max-w-[260px]">
              <TextField
                type="search"
                variant="filled"
                size="sm"
                placeholder={searchPlaceholder}
                startIcon={<Search size={14} />}
                value={query}
                onChange={(v) => {
                  setQuery(v)
                  setPage(1)
                }}
                aria-label={searchPlaceholder}
              />
            </div>
          )}
          {filters && (
            <div className="flex flex-wrap items-center gap-1.5">
              <Chip
                variant={activeFilter === null ? 'solid' : 'bordered'}
                color={activeFilter === null ? 'primary' : 'default'}
                size="sm"
                onSelectedChange={() => {
                  setActiveFilter(null)
                  setPage(1)
                }}
              >
                All
              </Chip>
              {filters.map((f) => (
                <Chip
                  key={f.key}
                  variant={activeFilter === f.key ? 'solid' : 'bordered'}
                  color={activeFilter === f.key ? 'primary' : 'default'}
                  size="sm"
                  onSelectedChange={() => {
                    setActiveFilter(f.key)
                    setPage(1)
                  }}
                >
                  {f.label}
                </Chip>
              ))}
            </div>
          )}
        </div>

        <div className="overflow-x-auto">
          <Table
            aria-label={title ?? 'Data table'}
            columns={columns}
            rows={pageRows}
            getRowKey={getRowKey}
            selectionMode={selectionMode}
            onRowAction={onRowAction}
            emptyContent={<EmptyState title={emptyTitle} description={emptyDescription} size="sm" />}
            isStriped={false}
          />
        </div>

        {filtered.length > 0 && (
          <div className="mt-4 flex flex-col items-center justify-between gap-3 sm:flex-row">
            <PaginationSummary page={clampedPage} pageSize={pageSize} total={filtered.length} />
            <Pagination page={clampedPage} pageCount={pageCount} onChange={setPage} size="sm" />
          </div>
        )}
      </CardBody>
    </Card>
  )
}
