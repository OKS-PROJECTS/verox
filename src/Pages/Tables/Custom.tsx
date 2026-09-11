import { Card, CardBody, CardHeader, Progress, Table } from 'oks-ui'
import { PageHeader, StatusChip } from '../../Components/ui'
import { PRODUCTS } from '../../data/products'

export default function CustomTables() {
  const rows = PRODUCTS.slice(0, 8)
  return (
    <div>
      <PageHeader
        title="Custom Tables"
        subtitle="Table cells composed from other oks-ui primitives — progress bars, status chips."
        crumbs={[{ label: 'Verox', to: '/' }, { label: 'Tables' }, { label: 'Custom' }]}
      />
      <Card>
        <CardHeader>
          <h3 className="text-[14px] font-semibold" style={{ color: 'var(--app-fg-strong)' }}>
            Stock Levels
          </h3>
        </CardHeader>
        <CardBody className="pt-0 overflow-x-auto">
          <Table
            aria-label="Stock levels"
            getRowKey={(r) => r.id}
            rows={rows}
            isStriped
            columns={[
              { key: 'name', header: 'Product', sortable: true },
              { key: 'sku', header: 'SKU' },
              {
                key: 'stock',
                header: 'Stock level',
                width: 220,
                render: (r) => (
                  <div className="flex items-center gap-2">
                    <Progress
                      value={r.stock}
                      aria-label={`${r.name} stock level`}
                      size="sm"
                      color={r.stock < 15 ? 'danger' : r.stock < 40 ? 'warning' : 'success'}
                      className="w-28"
                    />
                    <span className="text-[12px]" style={{ color: 'var(--app-fg-muted)' }}>
                      {r.stock}%
                    </span>
                  </div>
                ),
              },
              { key: 'status', header: 'Status', render: (r) => <StatusChip status={r.status} /> },
              { key: 'price', header: 'Price', align: 'end', sortable: true },
            ]}
          />
        </CardBody>
      </Card>
    </div>
  )
}
