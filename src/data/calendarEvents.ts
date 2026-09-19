export type EventTone = 'primary' | 'success' | 'warning' | 'danger' | 'info'

export interface CalendarEvent {
  id: string
  /** ISO date, `YYYY-MM-DD`. */
  date: string
  title: string
  time: string
  tone: EventTone
}

export const CALENDAR_EVENTS: CalendarEvent[] = [
  { id: 'ev-01', date: '2026-09-05', title: 'Vendor sync — Northgate Supply', time: '10:00 AM', tone: 'primary' },
  { id: 'ev-02', date: '2026-09-05', title: 'Q3 budget review', time: '2:30 PM', tone: 'warning' },
  { id: 'ev-03', date: '2026-09-12', title: 'Design review with Carlos', time: '11:00 AM', tone: 'info' },
  { id: 'ev-04', date: '2026-09-18', title: 'Onboarding checklist walkthrough', time: '9:30 AM', tone: 'success' },
  { id: 'ev-05', date: '2026-09-18', title: 'Contract renewal call — Fieldworks', time: '3:00 PM', tone: 'danger' },
  { id: 'ev-06', date: '2026-09-20', title: 'Roadmap alignment sync', time: '1:00 PM', tone: 'primary' },
  { id: 'ev-07', date: '2026-09-22', title: 'Sprint planning', time: '10:30 AM', tone: 'success' },
  { id: 'ev-08', date: '2026-09-23', title: 'Cross-team standup', time: '9:00 AM', tone: 'info' },
  { id: 'ev-09', date: '2026-09-24', title: 'Team retro', time: '4:00 PM', tone: 'primary' },
  { id: 'ev-10', date: '2026-09-26', title: 'Ops review', time: '2:00 PM', tone: 'warning' },
  { id: 'ev-11', date: '2026-09-29', title: 'Client presentation — draft walkthrough', time: '11:30 AM', tone: 'danger' },
  { id: 'ev-12', date: '2026-10-06', title: 'Vendor renewal review', time: '10:00 AM', tone: 'primary' },
  { id: 'ev-13', date: '2026-10-14', title: 'Product launch readiness check', time: '1:30 PM', tone: 'danger' },
]

export const EVENT_TONE_VAR: Record<EventTone, string> = {
  primary: 'var(--app-primary)',
  success: 'var(--app-success)',
  warning: 'var(--app-warning)',
  danger: 'var(--app-danger)',
  info: 'var(--app-info)',
}

export const EVENT_TONE_SOFT_VAR: Record<EventTone, string> = {
  primary: 'var(--app-primary-soft)',
  success: 'var(--app-success-soft)',
  warning: 'var(--app-warning-soft)',
  danger: 'var(--app-danger-soft)',
  info: 'var(--app-info-soft)',
}

export interface EventCategory {
  label: string
  color: string
}

export const EVENT_CATEGORIES: EventCategory[] = [
  { label: 'Kickoff meetings', color: 'var(--app-primary)' },
  { label: 'Team standups', color: 'var(--app-info)' },
  { label: 'Client calls', color: 'var(--app-success)' },
  { label: 'Product launches', color: 'var(--app-danger)' },
  { label: 'Design reviews', color: 'var(--app-secondary)' },
  { label: 'Planning sessions', color: 'var(--app-warning)' },
  { label: 'Company milestones', color: 'var(--app-fg-strong)' },
]
