import type { ReactNode } from 'react'
import { Alert, Button, Card, CardBody } from 'oks-ui'
import { PageHeader, type Crumb } from '../../Components/ui'

interface LayoutOptionPageProps {
  title: string
  description: string
  crumbs: Crumb[]
  children: ReactNode
  note?: string
}

/**
 * Shared shell for the Layout Options / Sidebars / Topbar nav group — each
 * page documents one shell setting and lets you flip it live via the
 * ThemeSettingsContext-backed control passed as `children`, applied to the
 * whole app immediately (not a static screenshot).
 */
export function LayoutOptionPage({ title, description, crumbs, children, note }: LayoutOptionPageProps) {
  return (
    <div>
      <PageHeader title={title} subtitle={description} crumbs={crumbs} />
      <Card>
        <CardBody className="flex flex-col gap-4">
          {children}
          {note && <Alert variant="soft" color="info" description={note} />}
        </CardBody>
      </Card>
    </div>
  )
}

export function OpenSettingsButton({ onOpen }: { onOpen: () => void }) {
  return (
    <Button color="primary" onPress={onOpen}>
      Open theme settings
    </Button>
  )
}
