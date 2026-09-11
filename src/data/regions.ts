export interface RegionRow {
  region: string
  revenue: number
  orders: number
  growth: string
  [key: string]: unknown
}

export const REGION_SALES: RegionRow[] = [
  { region: 'New York', revenue: 890000, orders: 4120, growth: '+8.2%' },
  { region: 'California', revenue: 650000, orders: 3580, growth: '+5.6%' },
  { region: 'Texas', revenue: 320000, orders: 2140, growth: '+3.1%' },
  { region: 'Florida', revenue: 470000, orders: 2790, growth: '+6.4%' },
  { region: 'Illinois', revenue: 265000, orders: 1610, growth: '+1.9%' },
  { region: 'Washington', revenue: 398000, orders: 2050, growth: '+7.3%' },
  { region: 'Massachusetts', revenue: 312000, orders: 1740, growth: '+4.8%' },
  { region: 'Georgia', revenue: 244000, orders: 1490, growth: '+2.6%' },
  { region: 'Ontario', revenue: 356000, orders: 1980, growth: '+6.9%' },
  { region: 'Quebec', revenue: 198000, orders: 1210, growth: '+1.4%' },
  { region: 'British Columbia', revenue: 227000, orders: 1330, growth: '+5.2%' },
  { region: 'Greater London', revenue: 512000, orders: 2860, growth: '+9.1%' },
  { region: 'North Rhine-Westphalia', revenue: 287000, orders: 1620, growth: '+3.7%' },
  { region: 'Île-de-France', revenue: 301000, orders: 1710, growth: '+4.2%' },
  { region: 'New South Wales', revenue: 264000, orders: 1480, growth: '+5.9%' },
  { region: 'Victoria', revenue: 219000, orders: 1250, growth: '+3.4%' },
  { region: 'Maharashtra', revenue: 342000, orders: 2380, growth: '+11.6%' },
  { region: 'Karnataka', revenue: 298000, orders: 2010, growth: '+9.8%' },
  { region: 'Tokyo', revenue: 276000, orders: 1390, growth: '+2.2%' },
  { region: 'São Paulo', revenue: 209000, orders: 1340, growth: '+7.7%' },
]
