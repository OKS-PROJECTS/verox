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
  { label: 'Pipeline Target', value: 57300, color: 'var(--oks-color-primary-500)' },
  { label: 'Lead Generation', value: 48900, color: 'var(--oks-color-secondary-500)' },
  { label: 'Beta Rollout Readiness', value: 68, color: 'var(--oks-color-success-500)' },
  { label: 'Support SLA Compliance', value: 88, color: 'var(--oks-color-warning-500)' },
]

export const GOAL_TABLE = [
  { goal: 'Pipeline Target', completed: '57,300', target: '90,000' },
  { goal: 'Lead Generation', completed: '48,900', target: '80,000' },
  { goal: 'Beta Rollout Readiness', completed: '68%', target: 'Security Review Pending' },
  { goal: 'Support SLA Compliance', completed: '88%', target: '92%' },
]

export const REGIONS = [
  { region: 'Washington', value: 715 },
  { region: 'Colorado', value: 540 },
  { region: 'Arizona', value: 385 },
  { region: 'Georgia', value: 505 },
  { region: 'Ohio', value: 230 },
]

export const TOP_COUNTRIES = [
  { country: 'United States', code: 'US', change: '3.1%', value: 1680 },
  { country: 'Brazil', code: 'BR', change: '2.0%', value: 705 },
  { country: 'India', code: 'IN', change: '4.6%', value: 2510 },
  { country: 'Mexico', code: 'MX', change: '1.1%', value: 615 },
  { country: 'Spain', code: 'ES', change: '0.6%', value: 480 },
  { country: 'Netherlands', code: 'NL', change: '2.2%', value: 890 },
  { country: 'Italy', code: 'IT', change: '1.4%', value: 690 },
  { country: 'South Korea', code: 'KR', change: '3.7%', value: 1240 },
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
  { path: '/dashboard', source: 'Direct', views: 4620, avgTime: '02m 44s', bounceRate: '18.2%', conversionRate: '5.1%' },
  { path: '/pricing', source: 'Google', views: 2015, avgTime: '01m 33s', bounceRate: '24.6%', conversionRate: '5.9%' },
  { path: '/templates', source: 'LinkedIn', views: 1870, avgTime: '02m 28s', bounceRate: '16.4%', conversionRate: '6.2%' },
  { path: '/blog/scale-your-workflow', source: 'Twitter', views: 940, avgTime: '03m 40s', bounceRate: '13.5%', conversionRate: '2.8%' },
  { path: '/docs/quickstart', source: 'Reddit', views: 2980, avgTime: '03m 52s', bounceRate: '10.6%', conversionRate: '8.4%' },
  { path: '/integrations', source: 'Direct', views: 1345, avgTime: '01m 47s', bounceRate: '27.1%', conversionRate: '2.9%' },
  { path: '/changelog', source: 'Google', views: 760, avgTime: '01m 05s', bounceRate: '29.3%', conversionRate: '1.9%' },
]
