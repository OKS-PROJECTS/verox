import { Chip } from 'oks-ui'

type Tone = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'default'

const STATUS_TONE: Record<string, Tone> = {
  paid: 'success',
  active: 'success',
  completed: 'success',
  done: 'success',
  won: 'success',
  online: 'success',
  approved: 'success',
  delivered: 'success',
  pending: 'warning',
  draft: 'default',
  'in progress': 'info',
  'in-progress': 'info',
  review: 'info',
  shipped: 'info',
  processing: 'info',
  overdue: 'danger',
  cancelled: 'danger',
  canceled: 'danger',
  failed: 'danger',
  rejected: 'danger',
  blocked: 'danger',
  offline: 'default',
  open: 'secondary',
  closed: 'default',
  low: 'default',
  medium: 'warning',
  high: 'danger',
  urgent: 'danger',
}

/** Composed — semantic status → `Chip` colour mapping used across list pages. */
export function StatusChip({ status }: { status: string }) {
  const tone = STATUS_TONE[status.toLowerCase()] ?? 'default'
  return (
    <Chip variant="dot" color={tone === 'default' ? 'default' : tone} size="sm">
      {status}
    </Chip>
  )
}
