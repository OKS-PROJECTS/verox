import { Card, CardBody, CardHeader } from 'oks-ui'
import { PageHeader } from '../../Components/ui'

const TOKEN_GROUPS = [
  {
    title: 'Radius',
    tokens: ['--oks-radius-xs', '--oks-radius-sm', '--oks-radius-md', '--oks-radius-lg', '--oks-radius-xl', '--oks-radius-2xl'],
    render: (v: string) => <div className="h-10 w-10" style={{ background: 'var(--app-primary)', borderRadius: `var(${v})` }} />,
  },
  {
    title: 'Card shadow',
    tokens: ['--app-card-shadow'],
    render: (v: string) => <div className="h-10 w-16 rounded-[var(--app-card-radius)]" style={{ background: 'var(--app-surface)', boxShadow: `var(${v})` }} />,
  },
]

export default function Utilities() {
  return (
    <div>
      <PageHeader
        title="Utilities & Tokens"
        subtitle="Tailwind classes handle layout (flex, grid, spacing) only — every color, radius and shadow in Verox comes from a --app-*/--oks-* CSS variable."
        crumbs={[{ label: 'Verox', to: '/' }, { label: 'Components' }, { label: 'Utilities' }]}
      />
      <div className="flex flex-col gap-5">
        {TOKEN_GROUPS.map((group) => (
          <Card key={group.title}>
            <CardHeader>
              <h3 className="text-[14px] font-medium" style={{ color: 'var(--app-fg)' }}>
                {group.title}
              </h3>
            </CardHeader>
            <CardBody className="flex flex-wrap items-end gap-5 pt-0">
              {group.tokens.map((t) => (
                <div key={t} className="flex flex-col items-center gap-2">
                  {group.render(t)}
                  <code className="text-[10px]" style={{ color: 'var(--app-fg-subtle)' }}>
                    {t}
                  </code>
                </div>
              ))}
            </CardBody>
          </Card>
        ))}
        <Card>
          <CardHeader>
            <h3 className="text-[14px] font-medium" style={{ color: 'var(--app-fg)' }}>
              Layout rule
            </h3>
          </CardHeader>
          <CardBody className="pt-0 text-[13px]" style={{ color: 'var(--app-fg-muted)' }}>
            Every responsive grid declares a base column count —{' '}
            <code>grid grid-cols-1 lg:grid-cols-3</code>, never a bare{' '}
            <code>grid lg:grid-cols-3</code> — so a wide child (a Table, a
            Chart) can't push the implicit column past the viewport and force
            the page to scroll sideways.
          </CardBody>
        </Card>
      </div>
    </div>
  )
}
