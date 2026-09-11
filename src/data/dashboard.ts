const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

function wave(i: number, base: number, amp: number, period: number, phase = 0): number {
  return Math.round(base + amp * Math.sin((i / period) * Math.PI * 2 + phase))
}

export const PERFORMANCE_TREND = MONTHS.map((month, i) => ({
  month,
  websiteTraffic: wave(i, 68, 22, 12, 0.3),
  activeUsers: wave(i, 52, 16, 12, 1.1),
  conversionRate: wave(i, 34, 10, 12, 2.1),
  revenueGrowth: wave(i, 44, 14, 12, 0.6),
}))

export const ENGAGEMENT_TREND = MONTHS.map((month, i) => ({
  month,
  websiteVisitors: wave(i, 420, 140, 12, 0.2),
  appUsers: wave(i, 260, 90, 12, 1.4),
  socialMedia: wave(i, 180, 70, 12, 2.4),
}))

export const GOAL_ACHIEVEMENT = [
  { label: 'Sales Target', value: 82450, color: 'var(--oks-color-primary-500)' },
  { label: 'Marketing Reach', value: 66200, color: 'var(--oks-color-secondary-500)' },
  { label: 'Product Launch Readiness', value: 74, color: 'var(--oks-color-success-500)' },
  { label: 'Support Response SLA', value: 91, color: 'var(--oks-color-warning-500)' },
]

export const GOAL_TABLE = [
  { goal: 'Sales Target', completed: '82,450', target: '100,000' },
  { goal: 'Marketing Reach', completed: '66,200', target: '100,000' },
  { goal: 'Product Launch Readiness', completed: '74%', target: 'Final QA Pending' },
  { goal: 'Support Response SLA', completed: '91%', target: '95%' },
]

export const REGIONS = [
  { region: 'New York', value: 890 },
  { region: 'California', value: 650 },
  { region: 'Texas', value: 320 },
  { region: 'Florida', value: 470 },
  { region: 'Illinois', value: 265 },
]

export const TOP_COUNTRIES = [
  { country: 'United States', change: '2.3%', value: 1450 },
  { country: 'United Kingdom', change: '1.2%', value: 980 },
  { country: 'India', change: '3.8%', value: 2340 },
  { country: 'Canada', change: '1.5%', value: 740 },
  { country: 'Australia', change: '0.8%', value: 560 },
  { country: 'Germany', change: '2.9%', value: 1120 },
  { country: 'France', change: '1.0%', value: 845 },
  { country: 'Japan', change: '4.1%', value: 1980 },
]

export interface PageAnalyticsRow {
  path: string
  source: string
  views: number
  avgTime: string
  bounceRate: string
  conversionRate: string
  [key: string]: unknown
}

export const PAGE_ANALYTICS: PageAnalyticsRow[] = [
  { path: '/dashboard', source: 'Direct', views: 3980, avgTime: '02m 12s', bounceRate: '19.5%', conversionRate: '4.3%' },
  { path: '/pricing', source: 'Google', views: 1742, avgTime: '01m 49s', bounceRate: '22.1%', conversionRate: '6.7%' },
  { path: '/features', source: 'LinkedIn', views: 2310, avgTime: '02m 05s', bounceRate: '17.8%', conversionRate: '5.4%' },
  { path: '/blog/how-to-boost-sales', source: 'Twitter', views: 1128, avgTime: '03m 14s', bounceRate: '14.9%', conversionRate: '2.2%' },
  { path: '/docs/get-started', source: 'Reddit', views: 2540, avgTime: '04m 01s', bounceRate: '11.2%', conversionRate: '7.9%' },
  { path: '/integrations', source: 'Direct', views: 1660, avgTime: '01m 32s', bounceRate: '25.4%', conversionRate: '3.1%' },
  { path: '/changelog', source: 'Google', views: 980, avgTime: '00m 58s', bounceRate: '31.0%', conversionRate: '1.6%' },
]
