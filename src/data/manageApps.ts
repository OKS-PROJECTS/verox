import {
  Mail,
  MessageSquare,
  CalendarDays,
  Users,
  Receipt,
  Bug,
  FileText,
  Cloud,
  Clock,
  type LucideIcon,
} from 'lucide-react'

export interface InstalledApp {
  id: string
  name: string
  description: string
  icon: LucideIcon
  category: string
  enabled: boolean
}

export const INSTALLED_APPS: InstalledApp[] = [
  { id: 'app-email', name: 'Email', description: 'Unified inbox for team and vendor correspondence.', icon: Mail, category: 'Communication', enabled: true },
  { id: 'app-chat', name: 'Chat', description: 'Direct messaging and group threads for the team.', icon: MessageSquare, category: 'Communication', enabled: true },
  { id: 'app-calendar', name: 'Calendar', description: 'Shared scheduling with meeting reminders.', icon: CalendarDays, category: 'Productivity', enabled: true },
  { id: 'app-board', name: 'Team Board', description: 'Team rosters, budgets, and delivery status.', icon: Users, category: 'Productivity', enabled: true },
  { id: 'app-invoices', name: 'Invoices', description: 'Create, send, and track client invoices.', icon: Receipt, category: 'Finance', enabled: true },
  { id: 'app-issues', name: 'Issue Tracker', description: 'Log and triage bugs across products.', icon: Bug, category: 'Development', enabled: false },
  { id: 'app-docs', name: 'Docs', description: 'Shared documents and meeting notes.', icon: FileText, category: 'Productivity', enabled: true },
  { id: 'app-storage', name: 'Cloud Storage', description: 'File storage and sharing across the workspace.', icon: Cloud, category: 'Storage', enabled: false },
  { id: 'app-timesheets', name: 'Timesheets', description: 'Track hours and submit weekly timesheets.', icon: Clock, category: 'Finance', enabled: false },
]
