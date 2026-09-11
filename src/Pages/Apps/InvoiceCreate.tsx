import { FormPage } from '../../Components/archetypes/FormPage'
import type { FormPageConfig } from '../../Components/archetypes/types'

const config: FormPageConfig = {
  title: 'New Invoice',
  subtitle: 'Bill a client for a purchase or subscription.',
  crumbs: [{ label: 'Verox', to: '/' }, { label: 'Apps' }, { label: 'Invoices', to: '/apps/invoices' }, { label: 'New Invoice' }],
  cancelTo: '/apps/invoices',
  submitLabel: 'Create invoice',
  sections: [
    {
      title: 'Client',
      fields: [
        { type: 'text', name: 'client', label: 'Client name', placeholder: 'Jane Cooper', validation: { rules: { required: true } } },
        { type: 'email', name: 'email', label: 'Email address', placeholder: 'jane@company.com', validation: { rules: { required: true, email: true } } },
      ],
    },
    {
      title: 'Invoice details',
      fields: [
        { type: 'text', name: 'purchase', label: 'Purchase', placeholder: 'Admin Panel — Developer License', colSpan: 2, validation: { rules: { required: true } } },
        { type: 'datepicker', name: 'issueDate', label: 'Issue date' },
        { type: 'datepicker', name: 'dueDate', label: 'Due date' },
        { type: 'number', name: 'amount', label: 'Amount (USD)', placeholder: '999', validation: { rules: { required: true } } },
        {
          type: 'select',
          name: 'status',
          label: 'Status',
          options: [
            { label: 'Draft', value: 'Draft' },
            { label: 'Pending', value: 'Pending' },
            { label: 'Paid', value: 'Paid' },
          ],
        },
        { type: 'textarea', name: 'notes', label: 'Notes', placeholder: 'Payment terms, thank-you note…', colSpan: 2 },
      ],
    },
  ],
}

export default function InvoiceCreate() {
  return <FormPage config={config} />
}
