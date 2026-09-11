import type { BoardColumnData } from 'oks-ui'
import type { BoardItem } from '../Components/archetypes/BoardPage'

export type TaskPriority = 'Low' | 'Medium' | 'High' | 'Urgent'

export interface TaskCard extends BoardItem {
  title: string
  assignee: string
  avatarSeed: string
  priority: TaskPriority
  due: string
}

export const BOARD_COLUMNS: BoardColumnData[] = [
  { id: 'backlog', title: 'Backlog', color: 'default' },
  { id: 'in-progress', title: 'In Progress', color: 'info' },
  { id: 'review', title: 'Review', color: 'warning' },
  { id: 'done', title: 'Done', color: 'success' },
]

export const BOARD_TASKS: TaskCard[] = [
  { id: 't-01', columnId: 'backlog', title: 'Audit onboarding checklist copy', assignee: 'Owen Clarke', avatarSeed: 'owen-clarke', priority: 'Low', due: 'Sep 18' },
  { id: 't-02', columnId: 'backlog', title: 'Draft Q4 vendor shortlist', assignee: 'Priya Nair', avatarSeed: 'priya-nair', priority: 'Medium', due: 'Sep 20' },
  { id: 't-03', columnId: 'backlog', title: 'Research calendar sync fix options', assignee: 'Jonathan Lee', avatarSeed: 'jonathan-lee', priority: 'High', due: 'Sep 22' },
  { id: 't-04', columnId: 'backlog', title: 'Collect renewal terms from Fieldworks', assignee: 'Nina Hughes', avatarSeed: 'nina-hughes', priority: 'Medium', due: 'Sep 24' },
  { id: 't-05', columnId: 'in-progress', title: 'Rebuild invoice PDF template', assignee: 'Lisa Brown', avatarSeed: 'lisa-brown', priority: 'High', due: 'Sep 15' },
  { id: 't-06', columnId: 'in-progress', title: 'Fix pagination reset on filter change', assignee: 'Ryan Mitchell', avatarSeed: 'ryan-mitchell', priority: 'Urgent', due: 'Sep 13' },
  { id: 't-07', columnId: 'in-progress', title: 'Write release notes for v2.4', assignee: 'Carlos Diaz', avatarSeed: 'carlos-diaz', priority: 'Low', due: 'Sep 16' },
  { id: 't-08', columnId: 'review', title: 'Design review — kanban card density', assignee: 'Samantha Reed', avatarSeed: 'samantha-reed', priority: 'Medium', due: 'Sep 14' },
  { id: 't-09', columnId: 'review', title: 'Dark mode contrast pass on charts', assignee: 'Nina Hughes', avatarSeed: 'nina-hughes', priority: 'High', due: 'Sep 15' },
  { id: 't-10', columnId: 'review', title: 'QA pass on two-factor code field', assignee: 'Emily Parker', avatarSeed: 'emily-parker', priority: 'Urgent', due: 'Sep 12' },
  { id: 't-11', columnId: 'done', title: 'Ship CSV export on invoices list', assignee: 'Lisa Brown', avatarSeed: 'lisa-brown', priority: 'Low', due: 'Sep 9' },
  { id: 't-12', columnId: 'done', title: 'Resolve sidebar flyout misalignment', assignee: 'Priya Nair', avatarSeed: 'priya-nair', priority: 'Medium', due: 'Sep 8' },
  { id: 't-13', columnId: 'done', title: 'Notification bell badge count fix', assignee: 'Samantha Reed', avatarSeed: 'samantha-reed', priority: 'Low', due: 'Sep 7' },
  { id: 't-14', columnId: 'done', title: 'Onboarding tour mobile skip bug', assignee: 'Carlos Diaz', avatarSeed: 'carlos-diaz', priority: 'Medium', due: 'Sep 5' },
]
