import { Alert, Button, CircularProgress, EmptyState, Loader, Progress, Skeleton, toast } from 'oks-ui'
import { AlertTriangle, FilePlus, Plus } from 'lucide-react'
import type { GalleryEntry } from './types'

export const feedbackEntries: GalleryEntry[] = [
  {
    slug: 'alert',
    name: 'Alert',
    category: 'Feedback',
    description: 'Inline banner for surfacing a status, warning, or error alongside page content.',
    render: () => (
      <div className="flex flex-col gap-3">
        <Alert
          color="success"
          variant="soft"
          title="Payment received"
          description="Invoice #4821 was paid in full via ACH transfer."
          isClosable
        />
        <Alert
          color="warning"
          variant="bordered"
          title="Storage almost full"
          description="You've used 92% of your workspace storage. Upgrade to avoid disruptions."
          actions={
            <Button size="xs-sm" color="warning" variant="soft">
              Upgrade plan
            </Button>
          }
        />
        <Alert
          color="danger"
          variant="solid"
          icon={<AlertTriangle size={18} />}
          title="Sync failed"
          description="Could not reach the billing provider. Retrying in 30 seconds."
        />
      </div>
    ),
    source: `<Alert
  color="success"
  variant="soft"
  title="Payment received"
  description="Invoice #4821 was paid in full via ACH transfer."
  isClosable
/>
<Alert
  color="warning"
  variant="bordered"
  title="Storage almost full"
  description="You've used 92% of your workspace storage. Upgrade to avoid disruptions."
  actions={<Button size="xs-sm" color="warning" variant="soft">Upgrade plan</Button>}
/>`,
  },
  {
    slug: 'loader',
    name: 'Loader',
    category: 'Feedback',
    description: 'Spinner for indicating an in-progress operation with no known duration.',
    render: () => (
      <div className="flex flex-wrap items-center gap-6">
        <Loader variant="ring-inset" color="primary" />
        <Loader variant="ring-dual" color="secondary" size={28} />
        <Loader variant="dots-roll" color="success" />
        <Loader variant="pulse" color="warning" label="Loading" />
      </div>
    ),
    source: `<Loader variant="ring-inset" color="primary" />
<Loader variant="ring-dual" color="secondary" size={28} />
<Loader variant="dots-roll" color="success" />
<Loader variant="pulse" color="warning" label="Loading" />`,
  },
  {
    slug: 'toast',
    name: 'Toast',
    category: 'Feedback',
    description: 'Transient notification fired imperatively from anywhere in the app — mounted once via ToastProvider.',
    render: () => (
      <div className="flex flex-wrap gap-2">
        <Button color="success" variant="soft" onPress={() => toast.success('Invoice #4821 marked as paid.')}>
          Success toast
        </Button>
        <Button color="danger" variant="soft" onPress={() => toast.error('Could not save changes.')}>
          Error toast
        </Button>
        <Button
          color="default"
          variant="bordered"
          startContent={<FilePlus size={16} />}
          onPress={() =>
            toast.promise(new Promise((resolve) => setTimeout(resolve, 1500)), {
              loading: { title: 'Exporting…' },
              success: () => ({ title: 'Export ready', description: 'report.csv is ready to download.' }),
              error: () => ({ title: 'Export failed' }),
            })
          }
        >
          Promise toast
        </Button>
      </div>
    ),
    source: `<Button color="success" onPress={() => toast.success('Invoice #4821 marked as paid.')}>
  Success toast
</Button>
<Button
  onPress={() =>
    toast.promise(exportReport(), {
      loading: { title: 'Exporting…' },
      success: () => ({ title: 'Export ready' }),
      error: () => ({ title: 'Export failed' }),
    })
  }
>
  Promise toast
</Button>`,
  },
  {
    slug: 'progress',
    name: 'Progress',
    category: 'Feedback',
    description: 'Linear progress bar for a determinate or indeterminate task.',
    render: () => (
      <div className="flex w-full max-w-sm flex-col gap-4">
        <Progress value={72} color="primary" showValueLabel label="Storage used" />
        <Progress value={38} color="warning" size="sm" />
        <Progress color="success" label="Syncing…" />
      </div>
    ),
    source: `<Progress value={72} color="primary" showValueLabel label="Storage used" />
<Progress value={38} color="warning" size="sm" />
<Progress color="success" label="Syncing…" />`,
  },
  {
    slug: 'circular-progress',
    name: 'CircularProgress',
    category: 'Feedback',
    description: 'Ring-shaped progress indicator, useful for compact completion states.',
    render: () => (
      <div className="flex flex-wrap items-center gap-6">
        <CircularProgress value={64} color="primary" showValueLabel label="Profile complete" />
        <CircularProgress value={90} color="success" size="lg" strokeWidth={3} />
        <CircularProgress color="secondary" size="sm" />
      </div>
    ),
    source: `<CircularProgress value={64} color="primary" showValueLabel label="Profile complete" />
<CircularProgress value={90} color="success" size="lg" strokeWidth={3} />
<CircularProgress color="secondary" size="sm" />`,
  },
  {
    slug: 'skeleton',
    name: 'Skeleton',
    category: 'Feedback',
    description: 'Animated placeholder shown in place of content that is still loading.',
    render: () => (
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <Skeleton variant="circle" width={40} height={40} />
          <div className="flex flex-col gap-2">
            <Skeleton variant="text" width={160} />
            <Skeleton variant="text" width={110} />
          </div>
        </div>
        <Skeleton variant="rect" height={80} radius="md" />
      </div>
    ),
    source: `<Skeleton variant="circle" width={40} height={40} />
<Skeleton variant="text" width={160} />
<Skeleton variant="rect" height={80} radius="md" />`,
  },
  {
    slug: 'empty-state',
    name: 'EmptyState',
    category: 'Feedback',
    description: '"Nothing here yet" placeholder, also used as the default empty body for Table.',
    render: () => (
      <EmptyState
        title="No invoices yet"
        description="Invoices you create will show up here once they're sent to a client."
        actions={
          <Button color="primary" startContent={<Plus size={16} />}>
            Create invoice
          </Button>
        }
      />
    ),
    source: `<EmptyState
  title="No invoices yet"
  description="Invoices you create will show up here once they're sent to a client."
  actions={<Button color="primary" startContent={<Plus size={16} />}>Create invoice</Button>}
/>`,
  },
]
