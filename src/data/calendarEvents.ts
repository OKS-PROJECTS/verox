export type EventTone = 'primary' | 'success' | 'warning' | 'danger' | 'info'

export interface CalendarEvent {
  id: string
  day: number
  title: string
  time: string
  tone: EventTone
}

export const CALENDAR_EVENTS: CalendarEvent[] = [
  { id: 'ev-01', day: 5, title: 'Vendor sync — Northgate Supply', time: '10:00 AM', tone: 'primary' },
  { id: 'ev-02', day: 5, title: 'Q3 budget review', time: '2:30 PM', tone: 'warning' },
  { id: 'ev-03', day: 12, title: 'Design review with Carlos', time: '11:00 AM', tone: 'info' },
  { id: 'ev-04', day: 18, title: 'Onboarding checklist walkthrough', time: '9:30 AM', tone: 'success' },
  { id: 'ev-05', day: 18, title: 'Contract renewal call — Fieldworks', time: '3:00 PM', tone: 'danger' },
  { id: 'ev-06', day: 24, title: 'Team retro', time: '4:00 PM', tone: 'primary' },
]

export const EVENT_TONE_VAR: Record<EventTone, string> = {
  primary: 'var(--app-primary)',
  success: 'var(--app-success)',
  warning: 'var(--app-warning)',
  danger: 'var(--app-danger)',
  info: 'var(--app-info)',
}
