export interface DigestItem {
  id: string
  type: 'mail' | 'flagged' | 'meeting'
  sender: string
  avatarSeed: string
  subject: string
  snippet: string
  time: string
  unread: boolean
}

export const DIGEST_ITEMS: DigestItem[] = [
  { id: 'd-01', type: 'mail', sender: 'Priya Nair', avatarSeed: 'priya-nair', subject: 'Q3 procurement schedule — sign-off needed', snippet: 'Attaching the revised procurement schedule for Q3 review.', time: '9:14 AM', unread: true },
  { id: 'd-02', type: 'flagged', sender: 'Lisa Brown', avatarSeed: 'lisa-brown', subject: 'Invoice #INV-2014 is now overdue', snippet: 'Friendly reminder that invoice INV-2014 remains unpaid.', time: '9:02 AM', unread: true },
  { id: 'd-03', type: 'mail', sender: 'Owen Clarke', avatarSeed: 'owen-clarke', subject: 'Re: Onboarding checklist for new hires', snippet: 'One suggestion — move the equipment request earlier.', time: '8:47 AM', unread: true },
  { id: 'd-04', type: 'meeting', sender: 'Nina Hughes', avatarSeed: 'nina-hughes', subject: 'Contract renewal — 30 day notice', snippet: 'Current agreement renews automatically in 30 days.', time: 'Yesterday', unread: false },
  { id: 'd-05', type: 'mail', sender: 'Ryan Mitchell', avatarSeed: 'ryan-mitchell', subject: 'Weekly status — shipping delays resolved', snippet: 'Carrier delay from last week has cleared.', time: 'Yesterday', unread: false },
  { id: 'd-06', type: 'flagged', sender: 'Jonathan Lee', avatarSeed: 'jonathan-lee', subject: 'Calendar sync issue — duplicate events', snippet: 'A few of us are seeing duplicate recurring events.', time: 'Sun', unread: false },
  { id: 'd-07', type: 'mail', sender: 'Carlos Diaz', avatarSeed: 'carlos-diaz', subject: 'Design review notes from Thursday', snippet: 'Three open questions at the bottom need answers.', time: 'Mon', unread: false },
  { id: 'd-08', type: 'mail', sender: 'Samantha Reed', avatarSeed: 'samantha-reed', subject: 'Welcome to the team!', snippet: 'A short list of things to get set up in your first week.', time: 'Last week', unread: false },
]

export interface ScheduleItem {
  id: string
  title: string
  time: string
  location: string
}

export const TODAY_SCHEDULE: ScheduleItem[] = [
  { id: 's-01', title: 'Vendor sync — Northgate Supply', time: '10:00 AM', location: 'Meeting Room 2' },
  { id: 's-02', title: 'Design review with Carlos', time: '11:30 AM', location: 'Video call' },
  { id: 's-03', title: 'Q3 budget review', time: '2:30 PM', location: 'Meeting Room 1' },
  { id: 's-04', title: 'Team retro', time: '4:00 PM', location: 'Video call' },
]

export interface QuickTask {
  id: string
  label: string
  done: boolean
}

export const QUICK_TASKS: QuickTask[] = [
  { id: 'qt-01', label: 'Approve Northgate vendor list', done: true },
  { id: 'qt-02', label: 'Reply to Fieldworks renewal notice', done: false },
  { id: 'qt-03', label: 'Send Q3 deck to finance', done: false },
  { id: 'qt-04', label: 'Confirm Thursday planning sync', done: true },
]
