import { avatarUrl } from '../lib/avatarUrl'

export interface Invoice {
  id: string
  client: string
  email: string
  seed: string
  period: string
  purchase: string
  amount: string
  status: 'Paid' | 'Pending' | 'Overdue' | 'Draft'
  [key: string]: unknown
}

export const INVOICES: Invoice[] = [
  { id: 'INV-2010', client: 'Emily Parker', email: 'emily@startupwave.io', seed: 'emily-parker', period: 'Feb 2 – Feb 10, 2025', purchase: 'Bootstrap · Extended License', amount: '$999.00', status: 'Paid' },
  { id: 'INV-2009', client: 'Michael Scott', email: 'michael@dundermifflin.com', seed: 'michael-scott', period: 'Feb 5 – Feb 12, 2025', purchase: 'CRM Dashboard · Regular License', amount: '$249.00', status: 'Pending' },
  { id: 'INV-2008', client: 'Samantha Reed', email: 'samantha@alphatech.com', seed: 'samantha-reed', period: 'Jan 10 – Jan 15, 2025', purchase: 'Landing Page · Agency Pack', amount: '$349.00', status: 'Overdue' },
  { id: 'INV-2007', client: 'Jonathan Lee', email: 'jonathan@zenflow.co', seed: 'jonathan-lee', period: 'Mar 1 – Mar 5, 2025', purchase: 'Task Manager · SaaS Version', amount: '$799.00', status: 'Draft' },
  { id: 'INV-2006', client: 'Carlos Diaz', email: 'carlos@theverseinc.com', seed: 'carlos-diaz', period: 'Mar 10 – Mar 15, 2025', purchase: 'Admin Panel · Developer License', amount: '$1,199.00', status: 'Paid' },
  { id: 'INV-2005', client: 'Lisa Brown', email: 'lisa@digitue.com', seed: 'lisa-brown', period: 'Mar 20 – Mar 25, 2025', purchase: 'Analytics Suite · Enterprise', amount: '$1,499.00', status: 'Pending' },
  { id: 'INV-2004', client: 'Ryan Mitchell', email: 'ryan@bizsci.com', seed: 'ryan-mitchell', period: 'Apr 1 – Apr 7, 2025', purchase: 'Sales App · Regular License', amount: '$499.00', status: 'Draft' },
  { id: 'INV-2003', client: 'Nina Hughes', email: 'nina@creativelabs.io', seed: 'nina-hughes', period: 'Apr 8 – Apr 12, 2025', purchase: 'Marketing Kit · Extended License', amount: '$899.00', status: 'Paid' },
  { id: 'INV-2002', client: 'Priya Nair', email: 'priya@northgate.dev', seed: 'priya-nair', period: 'Apr 15 – Apr 20, 2025', purchase: 'UI Kit · Team License', amount: '$649.00', status: 'Pending' },
  { id: 'INV-2001', client: 'Owen Clarke', email: 'owen@brightpath.io', seed: 'owen-clarke', period: 'Apr 22 – Apr 28, 2025', purchase: 'API Gateway · Startup Plan', amount: '$1,050.00', status: 'Overdue' },
]

export const invoiceAvatar = (inv: Invoice) => avatarUrl(inv.seed)
