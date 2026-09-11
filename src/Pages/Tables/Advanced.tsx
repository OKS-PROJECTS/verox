import { Button } from 'oks-ui'
import { Download } from 'lucide-react'
import { PageHeader, DataTable, StatusChip } from '../../Components/ui'
import { PRODUCTS } from '../../data/products'

export default function AdvancedTable() {
  return (
    <div>
      <PageHeader
        title="Advanced Table"
        subtitle="Sort, search, filter, row selection and pagination together."
        crumbs={[{ label: 'Verox', to: '/' }, { label: 'Tables' }, { label: 'Advanced' }]}
      />
      <DataTable
        title="Products"
        toolbarActions={
          <Button size="sm" variant="bordered" color="default" startContent={<Download size={14} />}>
            Export CSV
          </Button>
        }
        columns={[
          { key: 'id', header: 'ID', sortable: true },
          { key: 'name', header: 'Product', sortable: true },
          { key: 'category', header: 'Category', sortable: true },
          { key: 'sku', header: 'SKU' },
          { key: 'price', header: 'Price', align: 'end', sortable: true },
          { key: 'status', header: 'Status', render: (r) => <StatusChip status={r.status} /> },
        ]}
        rows={PRODUCTS}
        getRowKey={(r) => r.id}
        searchKeys={['name', 'sku', 'category']}
        searchPlaceholder="Search products…"
        selectable
        filters={[
          { key: 'in-stock', label: 'In Stock', test: (r) => r.status === 'In Stock' },
          { key: 'low', label: 'Low Stock', test: (r) => r.status === 'Low Stock' },
          { key: 'out', label: 'Out of Stock', test: (r) => r.status === 'Out of Stock' },
        ]}
        pageSize={8}
      />
    </div>
  )
}
