import { Card, CardBody, EmptyState } from 'oks-ui'
import { LayoutTemplate } from 'lucide-react'
import { PageHeader } from '../../Components/ui'

export default function Empty() {
  return (
    <div>
      <PageHeader
        title="Blank page"
        subtitle="A minimal starting point for a new screen."
        crumbs={[{ label: 'Verox', to: '/' }, { label: 'Pages' }, { label: 'Blank page' }]}
      />

      <Card>
        <CardBody>
          <EmptyState
            size="lg"
            icon={<LayoutTemplate size={28} />}
            title="This is a blank canvas"
            description="Start every new page from this file — it already has the page header and a Card wired up. Drop in whatever this screen needs and delete this placeholder."
          />
        </CardBody>
      </Card>
    </div>
  )
}
