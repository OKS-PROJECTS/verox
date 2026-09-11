import { Card, CardBody, Nav } from 'oks-ui'
import { LayoutGrid, Receipt, Settings, Users } from 'lucide-react'
import { PageHeader } from '../../Components/ui'

const ITEMS = [
  { key: 'overview', label: 'Overview', icon: <LayoutGrid size={16} /> },
  { key: 'customers', label: 'Customers', icon: <Users size={16} /> },
  { key: 'billing', label: 'Billing', icon: <Receipt size={16} /> },
  { key: 'settings', label: 'Settings', icon: <Settings size={16} /> },
]

export default function ListGroup() {
  return (
    <div>
      <PageHeader
        title="List Group"
        subtitle="A selectable list of items — built here from oks-ui's Nav component (the same primitive powering the app sidebar), rather than a separate list-group component."
        crumbs={[{ label: 'Verox', to: '/' }, { label: 'Components' }, { label: 'List Group' }]}
      />
      <Card className="max-w-sm">
        <CardBody>
          <Nav items={ITEMS} aria-label="Example list" selectedKey="customers" />
        </CardBody>
      </Card>
    </div>
  )
}
