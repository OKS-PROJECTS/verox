import { Card, CardBody, CardHeader, Divider } from 'oks-ui'
import { PageHeader } from '../ui'
import type { DetailPageConfig } from './types'

export function DetailPage({ config }: { config: DetailPageConfig }) {
  const { title, subtitle, crumbs, sections, sidebar } = config

  return (
    <div>
      <PageHeader title={title} subtitle={subtitle} crumbs={crumbs} />
      <div className={sidebar ? 'grid grid-cols-1 gap-5 lg:grid-cols-3' : 'grid grid-cols-1 gap-5'}>
        <div className={sidebar ? 'flex flex-col gap-5 lg:col-span-2' : 'flex flex-col gap-5'}>
          {sections.map((section) => (
            <Card key={section.title}>
              <CardHeader>
                <h3 className="text-[14px] font-semibold" style={{ color: 'var(--app-fg-strong)' }}>
                  {section.title}
                </h3>
              </CardHeader>
              <CardBody className="pt-0">
                <dl>
                  {section.rows.map((row, i) => (
                    <div
                      key={row.label}
                      className="flex items-start justify-between gap-4 py-2.5 text-[13px]"
                      style={i > 0 ? { borderTop: '1px solid var(--app-border)' } : undefined}
                    >
                      <dt style={{ color: 'var(--app-fg-muted)' }}>{row.label}</dt>
                      <dd className="text-right font-medium" style={{ color: 'var(--app-fg-strong)' }}>
                        {row.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </CardBody>
            </Card>
          ))}
        </div>
        {sidebar && (
          <div className="flex flex-col gap-5">
            {sidebar}
            <Divider className="lg:hidden" />
          </div>
        )}
      </div>
    </div>
  )
}
