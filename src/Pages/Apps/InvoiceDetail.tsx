import { useParams } from 'react-router-dom'
import { Avatar, Button, Card, CardBody, CardHeader, Divider, Table } from 'oks-ui'
import { Download, Printer } from 'lucide-react'
import { PageHeader, StatusChip } from '../../Components/ui'
import { INVOICES, invoiceAvatar } from '../../data/invoices'

const LINE_ITEMS = [
  { id: '1', item: 'License', description: 'Extended license, 1 seat', qty: 1, price: '$699.00' },
  { id: '2', item: 'Priority Support', description: '12 months', qty: 1, price: '$180.00' },
  { id: '3', item: 'Setup & Onboarding', description: 'One-time', qty: 1, price: '$120.00' },
]

export default function InvoiceDetail() {
  const { id } = useParams()
  const invoice = INVOICES.find((i) => i.id === id) ?? INVOICES[0]

  return (
    <div>
      <PageHeader
        title={invoice.id}
        subtitle="Invoice detail"
        crumbs={[{ label: 'Verox', to: '/' }, { label: 'Apps' }, { label: 'Invoices', to: '/apps/invoices' }, { label: invoice.id }]}
        actions={
          <>
            <Button variant="bordered" color="default" startContent={<Printer size={15} />}>
              Print
            </Button>
            <Button color="primary" startContent={<Download size={15} />}>
              Download PDF
            </Button>
          </>
        }
      />

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        <div className="flex flex-col gap-5 lg:col-span-2">
          <Card>
            <CardHeader className="flex items-center justify-between">
              <h3 className="text-[14px] font-semibold" style={{ color: 'var(--app-fg-strong)' }}>
                Line items
              </h3>
              <StatusChip status={invoice.status} />
            </CardHeader>
            <CardBody className="pt-0">
              <Table
                aria-label="Invoice line items"
                getRowKey={(r) => r.id}
                rows={LINE_ITEMS}
                columns={[
                  { key: 'item', header: 'Item' },
                  { key: 'description', header: 'Description' },
                  { key: 'qty', header: 'Qty', align: 'end' },
                  { key: 'price', header: 'Price', align: 'end' },
                ]}
              />
              <Divider className="my-4" />
              <div className="ml-auto flex max-w-[220px] flex-col gap-1.5 text-[13px]">
                <div className="flex justify-between" style={{ color: 'var(--app-fg-muted)' }}>
                  <span>Subtotal</span>
                  <span>$999.00</span>
                </div>
                <div className="flex justify-between" style={{ color: 'var(--app-fg-muted)' }}>
                  <span>Tax (0%)</span>
                  <span>$0.00</span>
                </div>
                <div className="flex justify-between text-[14px] font-bold" style={{ color: 'var(--app-fg-strong)' }}>
                  <span>Total</span>
                  <span>{invoice.amount}</span>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>

        <div className="flex flex-col gap-5">
          <Card>
            <CardHeader>
              <h3 className="text-[14px] font-semibold" style={{ color: 'var(--app-fg-strong)' }}>
                Client
              </h3>
            </CardHeader>
            <CardBody className="pt-0">
              <div className="flex items-center gap-3">
                <Avatar src={invoiceAvatar(invoice)} name={invoice.client} size={44} />
                <div>
                  <div className="text-[13.5px] font-semibold" style={{ color: 'var(--app-fg-strong)' }}>
                    {invoice.client}
                  </div>
                  <div className="text-[12px]" style={{ color: 'var(--app-fg-muted)' }}>
                    {invoice.email}
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>

          <Card>
            <CardHeader>
              <h3 className="text-[14px] font-semibold" style={{ color: 'var(--app-fg-strong)' }}>
                Summary
              </h3>
            </CardHeader>
            <CardBody className="pt-0">
              <dl className="flex flex-col gap-2.5 text-[13px]">
                <div className="flex justify-between">
                  <dt style={{ color: 'var(--app-fg-muted)' }}>Billing period</dt>
                  <dd style={{ color: 'var(--app-fg-strong)' }}>{invoice.period}</dd>
                </div>
                <div className="flex justify-between">
                  <dt style={{ color: 'var(--app-fg-muted)' }}>Purchase</dt>
                  <dd className="text-right" style={{ color: 'var(--app-fg-strong)' }}>
                    {invoice.purchase}
                  </dd>
                </div>
              </dl>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  )
}
