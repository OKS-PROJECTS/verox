import { useState } from 'react'
import { Button, Card, CardBody, Tooltip } from 'oks-ui'
import { BarChart3, LayoutDashboard, Settings, Users } from 'lucide-react'
import { PageHeader } from '../../Components/ui'

interface Step {
  key: string
  icon: React.ReactNode
  title: string
  description: string
  tourTitle: string
  tourBody: string
}

const STEPS: Step[] = [
  {
    key: 'dashboard',
    icon: <LayoutDashboard size={18} />,
    title: 'Dashboard',
    description: 'Your workspace overview.',
    tourTitle: 'Start on the dashboard',
    tourBody: 'This is where every session begins — KPIs, recent activity and the charts that matter most.',
  },
  {
    key: 'reports',
    icon: <BarChart3 size={18} />,
    title: 'Reports',
    description: 'Saved and scheduled reports.',
    tourTitle: 'Build a report',
    tourBody: 'Combine any table or chart into a report, then schedule it to land in an inbox every Monday.',
  },
  {
    key: 'team',
    icon: <Users size={18} />,
    title: 'Team',
    description: 'Members, roles and invites.',
    tourTitle: 'Invite your team',
    tourBody: 'Add teammates by email and assign a role — Admin, Member or Viewer — right from this page.',
  },
  {
    key: 'settings',
    icon: <Settings size={18} />,
    title: 'Settings',
    description: 'Workspace and billing.',
    tourTitle: 'Tune your workspace',
    tourBody: 'Billing, security policies and integrations all live here. Only Owners and Admins can make changes.',
  },
]

export default function Tour() {
  const [isTouring, setIsTouring] = useState(false)
  const [step, setStep] = useState(0)

  const startTour = () => {
    setStep(0)
    setIsTouring(true)
  }
  const next = () => {
    if (step === STEPS.length - 1) {
      setIsTouring(false)
      return
    }
    setStep((s) => s + 1)
  }
  const back = () => setStep((s) => Math.max(0, s - 1))
  const done = () => setIsTouring(false)

  return (
    <div>
      <PageHeader
        title="Guided tour"
        subtitle="A short walkthrough of the main sections of the app."
        crumbs={[{ label: 'Verox', to: '/' }, { label: 'Pages' }, { label: 'Tour' }]}
        actions={
          <Button color="primary" onPress={startTour}>
            Start tour
          </Button>
        }
      />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((s, index) => {
          const isActive = isTouring && step === index
          const card = (
            <Card
              className="h-full"
              style={isActive ? { border: '2px solid var(--app-primary)' } : undefined}
            >
              <CardBody className="flex flex-col items-start gap-2">
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-full"
                  style={{ background: 'var(--app-primary-soft)', color: 'var(--app-primary)' }}
                >
                  {s.icon}
                </span>
                <h3 className="text-[14px] font-medium" style={{ color: 'var(--app-fg)' }}>
                  {s.title}
                </h3>
                <p className="text-[12.5px]" style={{ color: 'var(--app-fg-muted)' }}>
                  {s.description}
                </p>
              </CardBody>
            </Card>
          )

          return (
            <Tooltip
              key={s.key}
              isOpen={isActive}
              placement="bottom"
              isDismissable={false}
              content={
                <div className="flex max-w-[220px] flex-col gap-2 p-1">
                  <p className="text-[12px] font-semibold" style={{ color: 'var(--app-fg-strong)' }}>
                    {s.tourTitle}
                  </p>
                  <p className="text-[11.5px] leading-relaxed" style={{ color: 'var(--app-fg)' }}>
                    {s.tourBody}
                  </p>
                  <div className="mt-1 flex items-center justify-between">
                    <span className="text-[10.5px]" style={{ color: 'var(--app-fg-subtle)' }}>
                      {index + 1} of {STEPS.length}
                    </span>
                    <div className="flex gap-1.5">
                      {index > 0 && (
                        <Button size="sm" variant="ghost" color="default" onPress={back}>
                          Back
                        </Button>
                      )}
                      {index < STEPS.length - 1 ? (
                        <Button size="sm" color="primary" onPress={next}>
                          Next
                        </Button>
                      ) : (
                        <Button size="sm" color="primary" onPress={done}>
                          Done
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              }
            >
              {card}
            </Tooltip>
          )
        })}
      </div>
    </div>
  )
}
