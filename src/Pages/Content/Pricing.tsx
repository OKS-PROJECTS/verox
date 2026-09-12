import { Button, Card, CardBody, CardFooter, CardHeader, Chip, Table } from 'oks-ui'
import { Check } from 'lucide-react'
import { PageHeader } from '../../Components/ui'

interface Tier {
  key: string
  name: string
  price: string
  period: string
  description: string
  features: string[]
  cta: string
  highlighted?: boolean
}

const TIERS: Tier[] = [
  {
    key: 'starter',
    name: 'Starter',
    price: '$19',
    period: '/ month',
    description: 'For solo builders getting a first workspace off the ground.',
    features: ['1 workspace', 'Up to 3 team members', '5GB file storage', 'Community support', 'Basic reporting'],
    cta: 'Start free trial',
  },
  {
    key: 'growth',
    name: 'Growth',
    price: '$49',
    period: '/ month',
    description: 'For growing teams that need automation and deeper insight.',
    features: [
      '5 workspaces',
      'Up to 25 team members',
      '100GB file storage',
      'Priority email support',
      'Advanced reporting',
      'Workflow automation',
    ],
    cta: 'Start free trial',
    highlighted: true,
  },
  {
    key: 'scale',
    name: 'Scale',
    price: '$129',
    period: '/ month',
    description: 'For organizations that need control, security and scale.',
    features: [
      'Unlimited workspaces',
      'Unlimited team members',
      '1TB file storage',
      'Dedicated account manager',
      'Audit log & SSO',
      'Custom SLA',
    ],
    cta: 'Talk to sales',
  },
]

const COMPARISON_ROWS = [
  { feature: 'Team members', starter: '3', growth: '25', scale: 'Unlimited' },
  { feature: 'File storage', starter: '5GB', growth: '100GB', scale: '1TB' },
  { feature: 'Workflow automation', starter: '—', growth: 'Included', scale: 'Included' },
  { feature: 'Single sign-on', starter: '—', growth: '—', scale: 'Included' },
  { feature: 'Support', starter: 'Community', growth: 'Priority email', scale: 'Dedicated manager' },
]

export default function Pricing() {
  return (
    <div>
      <PageHeader
        title="Pricing"
        subtitle="Simple, transparent plans that scale with your team."
        crumbs={[{ label: 'Verox', to: '/' }, { label: 'Pages' }, { label: 'Pricing' }]}
      />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {TIERS.map((tier) => (
          <Card
            key={tier.key}
            shadow={tier.highlighted ? 'md' : 'xs'}
            className="flex flex-col"
            style={tier.highlighted ? { border: '2px solid var(--app-primary)' } : undefined}
          >
            <CardHeader className="flex flex-col items-start gap-2">
              <div className="flex w-full items-center justify-between">
                <h3 className="text-[15px] font-semibold" style={{ color: 'var(--app-fg-strong)' }}>
                  {tier.name}
                </h3>
                {tier.highlighted && (
                  <Chip color="primary" variant="soft" size="sm">
                    Popular
                  </Chip>
                )}
              </div>
              <p className="text-[12px]" style={{ color: 'var(--app-fg-muted)' }}>
                {tier.description}
              </p>
              <div className="mt-1 flex items-baseline gap-1">
                <span className="text-[30px] font-bold" style={{ color: 'var(--app-fg-strong)' }}>
                  {tier.price}
                </span>
                <span className="text-[12px]" style={{ color: 'var(--app-fg-muted)' }}>
                  {tier.period}
                </span>
              </div>
            </CardHeader>
            <CardBody className="flex-1 pt-0">
              <ul className="flex flex-col gap-2.5">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-[13px]" style={{ color: 'var(--app-fg)' }}>
                    <Check size={15} style={{ color: 'var(--app-success)' }} className="mt-0.5 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardBody>
            <CardFooter>
              <Button
                fullWidth
                variant={tier.highlighted ? 'solid' : 'bordered'}
                color={tier.highlighted ? 'primary' : 'default'}
              >
                {tier.cta}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <Card className="mt-6">
        <CardHeader>
          <h3 className="text-[14px] font-medium" style={{ color: 'var(--app-fg)' }}>
            Feature comparison
          </h3>
        </CardHeader>
        <CardBody className="pt-0">
          <Table
            aria-label="Plan feature comparison"
            removeWrapper
            getRowKey={(r) => r.feature}
            rows={COMPARISON_ROWS}
            columns={[
              { key: 'feature', header: 'Feature' },
              { key: 'starter', header: 'Starter', align: 'center' },
              { key: 'growth', header: 'Growth', align: 'center' },
              { key: 'scale', header: 'Scale', align: 'center' },
            ]}
          />
        </CardBody>
      </Card>
    </div>
  )
}
