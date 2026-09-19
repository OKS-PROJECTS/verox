export interface TeamStat {
  label: string
  value: string
}

export interface TeamCard {
  id: string
  name: string
  isNew?: boolean
  memberCount: number
  memberSeeds: string[]
  about: string
  stats: [TeamStat, TeamStat, TeamStat]
  progressLabel: string
  progressValue: number
  updatedAgo: string
}

export const TEAM_CARDS: TeamCard[] = [
  {
    id: 'team-design',
    name: 'Product Design Team',
    isNew: true,
    memberCount: 4,
    memberSeeds: ['ava-chen', 'marcus-oduya', 'lena-brandt', 'theo-vance'],
    about:
      'Owns the end-to-end product experience, from early research through interactive prototypes, and keeps the visual language consistent across every surface.',
    stats: [
      { label: 'Projects', value: '21' },
      { label: 'Ranking', value: '#4' },
      { label: 'Budget', value: '$18.6M' },
    ],
    progressLabel: 'Sprint completion',
    progressValue: 70,
    updatedAgo: '35 minutes ago',
  },
  {
    id: 'team-platform',
    name: 'Platform Engineering Team',
    memberCount: 8,
    memberSeeds: ['diego-farrow', 'hana-kimura', 'petra-solberg', 'wes-oyelaran', 'ines-costa'],
    about:
      'Builds and operates the core services and infrastructure every other team depends on, with a steady focus on reliability and developer velocity.',
    stats: [
      { label: 'Projects', value: '37' },
      { label: 'Ranking', value: '#1' },
      { label: 'Budget', value: '$41.2M' },
    ],
    progressLabel: 'Sprint completion',
    progressValue: 82,
    updatedAgo: '12 minutes ago',
  },
  {
    id: 'team-security',
    name: 'Security & Access Team',
    memberCount: 3,
    memberSeeds: ['rosa-mendez', 'kian-oshiro', 'felix-torbjorn'],
    about:
      'Owns identity, access control, and platform security reviews, keeping the organization’s compliance posture audit-ready year round.',
    stats: [
      { label: 'Tickets', value: '14' },
      { label: 'Ranking', value: '#7' },
      { label: 'Access', value: 'Full' },
    ],
    progressLabel: 'Backlog cleared',
    progressValue: 47,
    updatedAgo: '1 hour ago',
  },
  {
    id: 'team-finance',
    name: 'Finance Operations Team',
    memberCount: 5,
    memberSeeds: ['grace-adeyemi', 'noah-lindqvist', 'sana-farooqi', 'milo-becker'],
    about:
      'Runs budgeting, vendor contracts, and the monthly close, and partners with every team on spend forecasting and reporting.',
    stats: [
      { label: 'Reports', value: '22' },
      { label: 'Ranking', value: '#3' },
      { label: 'Budget', value: '$24.8M' },
    ],
    progressLabel: 'Close readiness',
    progressValue: 68,
    updatedAgo: '3 hours ago',
  },
  {
    id: 'team-growth',
    name: 'Growth Marketing Team',
    memberCount: 6,
    memberSeeds: ['ruby-lachance', 'jamal-osei', 'chiara-ferrante', 'tobin-akana'],
    about:
      'Plans campaigns, owns brand voice, and turns product-usage data into acquisition and retention experiments.',
    stats: [
      { label: 'Campaigns', value: '15' },
      { label: 'Reach', value: '980K' },
      { label: 'Budget', value: '$9.7M' },
    ],
    progressLabel: 'Campaign delivery',
    progressValue: 55,
    updatedAgo: '50 minutes ago',
  },
  {
    id: 'team-brand',
    name: 'Brand & Visual Team',
    memberCount: 4,
    memberSeeds: ['elin-kowalska', 'davi-nascimento', 'priya-venkat', 'oscar-lindberg'],
    about:
      'Produces illustration, motion, and marketing collateral that keeps every touchpoint on-brand across the product and campaigns.',
    stats: [
      { label: 'Assets', value: '64' },
      { label: 'Deliverables', value: '12' },
      { label: 'Budget', value: '$6.3M' },
    ],
    progressLabel: 'Current workload',
    progressValue: 74,
    updatedAgo: '20 minutes ago',
  },
]
