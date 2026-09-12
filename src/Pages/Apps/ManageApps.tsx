import { useState } from 'react'
import { Card, CardBody, SwitchField, Chip } from 'oks-ui'
import { PageHeader } from '../../Components/ui'
import { INSTALLED_APPS } from '../../data/manageApps'

export default function ManageApps() {
  const [apps, setApps] = useState(INSTALLED_APPS)

  const toggleApp = (id: string) => {
    setApps((prev) => prev.map((app) => (app.id === id ? { ...app, enabled: !app.enabled } : app)))
  }

  return (
    <div>
      <PageHeader
        title="Manage Apps"
        subtitle="Enable or disable the apps installed in your workspace."
        crumbs={[{ label: 'Verox', to: '/' }, { label: 'Apps' }, { label: 'Manage Apps' }]}
      />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {apps.map((app) => {
          const Icon = app.icon
          return (
            <Card key={app.id}>
              <CardBody className="flex flex-col gap-3">
                <div className="flex items-start justify-between gap-2">
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[var(--oks-radius-lg)]"
                    style={{ background: 'var(--app-primary-soft)', color: 'var(--app-primary)' }}
                  >
                    <Icon size={20} />
                  </div>
                  <SwitchField
                    aria-label={`Toggle ${app.name}`}
                    checked={app.enabled}
                    onChange={() => toggleApp(app.id)}
                    size="sm"
                  />
                </div>
                <div>
                  <h3 className="text-[14px] font-medium" style={{ color: 'var(--app-fg)' }}>
                    {app.name}
                  </h3>
                  <p className="mt-1 text-[12.5px] leading-snug" style={{ color: 'var(--app-fg-muted)' }}>
                    {app.description}
                  </p>
                </div>
                <div>
                  <Chip variant="soft" color="default" size="sm">
                    {app.category}
                  </Chip>
                </div>
              </CardBody>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
