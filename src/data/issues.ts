export interface Issue {
  id: string
  title: string
  assignee: string
  priority: 'Low' | 'Medium' | 'High' | 'Urgent'
  status: 'Open' | 'In Progress' | 'Review' | 'Closed'
  updated: string
  [key: string]: unknown
}

export const ISSUES: Issue[] = [
  { id: 'VRX-482', title: 'Sidebar flyout misaligns on 13" screens', assignee: 'Priya Nair', priority: 'High', status: 'In Progress', updated: '2 hr ago' },
  { id: 'VRX-481', title: 'Export button does nothing on Safari', assignee: 'Owen Clarke', priority: 'Urgent', status: 'Open', updated: '4 hr ago' },
  { id: 'VRX-479', title: 'Dark mode: chart legend text too faint', assignee: 'Nina Hughes', priority: 'Medium', status: 'Review', updated: '1 day ago' },
  { id: 'VRX-476', title: 'Pagination jumps to page 1 after filter', assignee: 'Ryan Mitchell', priority: 'High', status: 'Open', updated: '1 day ago' },
  { id: 'VRX-470', title: 'Add CSV export to invoices list', assignee: 'Lisa Brown', priority: 'Low', status: 'Open', updated: '2 days ago' },
  { id: 'VRX-465', title: 'Onboarding tour skips step 3 on mobile', assignee: 'Carlos Diaz', priority: 'Medium', status: 'Closed', updated: '3 days ago' },
  { id: 'VRX-459', title: 'Calendar: recurring events not deduped', assignee: 'Jonathan Lee', priority: 'High', status: 'In Progress', updated: '4 days ago' },
  { id: 'VRX-452', title: 'Notification bell badge count is stale', assignee: 'Samantha Reed', priority: 'Low', status: 'Closed', updated: '5 days ago' },
  { id: 'VRX-448', title: 'Kanban card drag ghost lags on Firefox', assignee: 'Michael Scott', priority: 'Medium', status: 'Review', updated: '6 days ago' },
  { id: 'VRX-440', title: 'Two-factor code field loses focus on paste', assignee: 'Emily Parker', priority: 'Urgent', status: 'Open', updated: '1 week ago' },
]
