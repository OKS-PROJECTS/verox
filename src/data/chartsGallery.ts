const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
const QUARTERS = ['Q1', 'Q2', 'Q3', 'Q4']

function wave(i: number, base: number, amp: number, period: number, phase = 0): number {
  return Math.round(base + amp * Math.sin((i / period) * Math.PI * 2 + phase))
}

export const REVENUE_TREND = MONTHS.map((month, i) => ({
  month,
  revenue: wave(i, 420, 140, 12, 0.4),
  target: wave(i, 400, 60, 12, 1.2),
}))

export const TRAFFIC_TREND = MONTHS.map((month, i) => ({
  month,
  organic: wave(i, 3200, 900, 12, 0.2),
  paid: wave(i, 1600, 500, 12, 1.6),
  referral: wave(i, 800, 300, 12, 2.3),
}))

export const SALES_BY_CHANNEL = ['Direct', 'Organic', 'Paid Social', 'Email', 'Referral'].map((channel, i) => ({
  channel,
  value: wave(i, 620, 380, 5, i * 0.8),
}))

export const WEEKLY_ORDERS = DAYS.map((day, i) => ({
  day,
  orders: wave(i, 260, 140, 7, i * 0.5),
}))

export const DEVICE_SPLIT = [
  { label: 'Desktop', value: 54, color: 'var(--oks-color-primary-500)' },
  { label: 'Mobile', value: 34, color: 'var(--oks-color-secondary-500)' },
  { label: 'Tablet', value: 12, color: 'var(--oks-color-success-500)' },
]

export const PLAN_SPLIT = [
  { label: 'Starter', value: 38, color: 'var(--oks-color-info-500)' },
  { label: 'Growth', value: 41, color: 'var(--oks-color-primary-500)' },
  { label: 'Scale', value: 21, color: 'var(--oks-color-warning-600)' },
]

export const TEAM_RADAR = ['Speed', 'Design', 'Support', 'Reliability', 'Value', 'Docs'].map((skill, i) => ({
  skill,
  us: wave(i, 74, 20, 6, i * 0.9),
  rival: wave(i, 60, 18, 6, i * 0.4 + 1),
}))

export const QUARTER_COMPARISON = QUARTERS.map((q, i) => ({
  quarter: q,
  thisYear: wave(i, 480, 120, 4, i * 0.6),
  lastYear: wave(i, 420, 100, 4, i * 0.6 + 0.5),
}))

export const HEATMAP_SERIES = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((day, r) => ({
  id: day,
  name: day,
  values: Array.from({ length: 12 }, (_, c) => wave(r * 12 + c, 50, 45, 12, r)),
}))

export const HEATMAP_CATEGORIES = Array.from({ length: 12 }, (_, i) => `${i}:00`)

export const SPARK_SERIES = {
  revenue: MONTHS.map((m, i) => ({ month: m, value: wave(i, 60, 30, 12, 0.3) })),
  signups: MONTHS.map((m, i) => ({ month: m, value: wave(i, 40, 20, 12, 1.4) })),
  churn: MONTHS.map((m, i) => ({ month: m, value: wave(i, 8, 4, 12, 2.1) })),
  nps: MONTHS.map((m, i) => ({ month: m, value: wave(i, 45, 15, 12, 0.8) })),
}
