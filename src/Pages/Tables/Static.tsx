import { Card, CardBody, CardHeader, Table } from 'oks-ui'
import { PageHeader, StatusChip } from '../../Components/ui'
import { PRODUCTS } from '../../data/products'

export default function StaticTables() {
  const rows = PRODUCTS.slice(0, 6)
  return (
    <div>
      <PageHeader
        title="Static Tables"
        subtitle="A plain, non-interactive table — no sort, search or pagination."
        crumbs={[{ label: 'Verox', to: '/' }, { label: 'Tables' }, { label: 'Static' }]}
      />
      <Card>
        <CardHeader>
          <h3 className="text-[14px] font-medium" style={{ color: 'var(--app-fg)' }}>
            Inventory Snapshot
          </h3>
        </CardHeader>
        <CardBody className="pt-0">
          <Table
            aria-label="Inventory snapshot"
            getRowKey={(r) => r.id}
            rows={rows}
            columns={[
              { key: 'id', header: 'ID' },
              { key: 'name', header: 'Product' },
              { key: 'category', header: 'Category' },
              { key: 'price', header: 'Price', align: 'end' },
              { key: 'status', header: 'Status', render: (r) => <StatusChip status={r.status} /> },
            ]}
          />
        </CardBody>
      </Card>
    </div>
  )
}
