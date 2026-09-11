export interface NotificationItem {
  id: string
  title: string
  detail: string
}

export const NOTIFICATIONS: NotificationItem[] = [
  { id: 'n1', title: 'Invoice INV-2010 was paid', detail: 'Emily Parker · 2 min ago' },
  { id: 'n2', title: 'New issue assigned to you', detail: 'VRX-482 · 18 min ago' },
  { id: 'n3', title: 'Weekly report is ready', detail: 'Analytics · 1 hr ago' },
  { id: 'n4', title: 'Server deploy succeeded', detail: 'production · 3 hr ago' },
  { id: 'n5', title: 'Samantha commented on a card', detail: 'Team board · yesterday' },
]
