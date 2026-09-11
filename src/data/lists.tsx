/* eslint-disable react-refresh/only-export-components */
import { Avatar, Button, Tooltip } from 'oks-ui'
import { Eye, Pencil, Trash2 } from 'lucide-react'
import type { ListPageConfig } from '../Components/archetypes/types'
import { EntityCell, StatusChip } from '../Components/ui'
import { INVOICES, invoiceAvatar, type Invoice } from './invoices'
import { ISSUES, type Issue } from './issues'

function RowActions({ onView }: { onView?: () => void }) {
  return (
    <div className="flex items-center justify-end gap-1">
      <Tooltip content="View">
        <Button isIconOnly size="sm" variant="ghost" color="default" aria-label="View" onPress={onView}>
          <Eye size={15} />
        </Button>
      </Tooltip>
      <Tooltip content="Edit">
        <Button isIconOnly size="sm" variant="ghost" color="default" aria-label="Edit">
          <Pencil size={15} />
        </Button>
      </Tooltip>
      <Tooltip content="Delete">
        <Button isIconOnly size="sm" variant="ghost" color="danger" aria-label="Delete">
          <Trash2 size={15} />
        </Button>
      </Tooltip>
    </div>
  )
}

const invoicesConfig: ListPageConfig<Invoice> = {
  title: 'Invoices',
  subtitle: 'Every invoice across all clients and products.',
  crumbs: [{ label: 'Verox', to: '/' }, { label: 'Apps' }, { label: 'Invoices' }],
  addLabel: 'New invoice',
  addTo: '/apps/invoices/new',
  columns: [
    { key: 'id', header: 'ID', sortable: true, render: (r) => <span className="font-semibold">{r.id}</span> },
    { key: 'period', header: 'Create & end date', sortable: true },
    {
      key: 'client',
      header: "Client's name",
      sortable: true,
      render: (r) => <EntityCell name={r.client} sub={r.email} avatarSrc={invoiceAvatar(r)} />,
    },
    { key: 'purchase', header: 'Purchase' },
    { key: 'amount', header: 'Amount', align: 'end', sortable: true },
    { key: 'status', header: 'Status', render: (r) => <StatusChip status={r.status} /> },
    { key: 'actions', header: 'Actions', align: 'end', render: () => <RowActions /> },
  ],
  rows: INVOICES,
  getRowKey: (r) => r.id,
  searchKeys: ['id', 'client', 'email'],
  searchPlaceholder: 'Search invoices…',
  filters: [
    { key: 'paid', label: 'Paid', test: (r) => r.status === 'Paid' },
    { key: 'pending', label: 'Pending', test: (r) => r.status === 'Pending' },
    { key: 'overdue', label: 'Overdue', test: (r) => r.status === 'Overdue' },
  ],
}

const issueTrackerConfig: ListPageConfig<Issue> = {
  title: 'Issue Tracker',
  subtitle: 'Every open and closed issue across your projects.',
  crumbs: [{ label: 'Verox', to: '/' }, { label: 'Apps' }, { label: 'Issue Tracker' }],
  addLabel: 'New issue',
  columns: [
    { key: 'id', header: 'ID', sortable: true, render: (r) => <span className="font-semibold">{r.id}</span> },
    { key: 'title', header: 'Title', sortable: true },
    {
      key: 'assignee',
      header: 'Assignee',
      render: (r) => (
        <div className="flex items-center gap-2">
          <Avatar name={r.assignee} size={24} />
          <span>{r.assignee}</span>
        </div>
      ),
    },
    { key: 'priority', header: 'Priority', render: (r) => <StatusChip status={r.priority} /> },
    { key: 'status', header: 'Status', render: (r) => <StatusChip status={r.status} /> },
    { key: 'updated', header: 'Updated', align: 'end', sortable: true },
  ],
  rows: ISSUES,
  getRowKey: (r) => r.id,
  searchKeys: ['id', 'title', 'assignee'],
  searchPlaceholder: 'Search issues…',
  filters: [
    { key: 'open', label: 'Open', test: (r) => r.status !== 'Closed' },
    { key: 'closed', label: 'Closed', test: (r) => r.status === 'Closed' },
    { key: 'urgent', label: 'Urgent', test: (r) => r.priority === 'Urgent' },
  ],
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const LIST_CONFIGS: Record<string, ListPageConfig<any>> = {
  '/apps/invoices': invoicesConfig,
  '/apps/issue-tracker': issueTrackerConfig,
}
