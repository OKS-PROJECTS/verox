import type { ReactNode } from 'react'
import { Card, CardBody } from 'oks-ui'
import { PageHeader } from '../../Components/ui'

const Box = ({ children }: { children: ReactNode }) => (
  <div
    className="flex h-12 items-center justify-center rounded-[var(--oks-radius-sm)] text-[12px] font-medium"
    style={{ background: 'var(--app-surface-2)', color: 'var(--app-fg-muted)', border: '1px solid var(--app-border)' }}
  >
    {children}
  </div>
)

export default function Grid() {
  return (
    <div>
      <PageHeader
        title="Grid Options"
        subtitle="Verox uses Tailwind's grid utilities for layout only — every responsive grid declares a base column count so a wide child (a Table, a Chart) can't push the page into horizontal scroll."
        crumbs={[{ label: 'Verox', to: '/' }, { label: 'Components' }, { label: 'Grid Options' }]}
      />
      <div className="flex flex-col gap-6">
        <Card>
          <CardBody>
            <p className="mb-3 text-[12.5px]" style={{ color: 'var(--app-fg-muted)' }}>
              <code>grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4</code>
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {Array.from({ length: 4 }, (_, i) => (
                <Box key={i}>Col {i + 1}</Box>
              ))}
            </div>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <p className="mb-3 text-[12.5px]" style={{ color: 'var(--app-fg-muted)' }}>
              <code>grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-5</code> — content + sidebar
            </p>
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-[2fr_1fr]">
              <Box>Main content (2fr)</Box>
              <Box>Sidebar (1fr)</Box>
            </div>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <p className="mb-3 text-[12.5px]" style={{ color: 'var(--app-fg-muted)' }}>
              <code>grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3</code>
            </p>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
              {Array.from({ length: 6 }, (_, i) => (
                <Box key={i}>{i + 1}</Box>
              ))}
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}
