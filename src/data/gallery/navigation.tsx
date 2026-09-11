/* eslint-disable react-refresh/only-export-components */
import { useState } from 'react'
import {
  Accordion,
  AccordionItem,
  Breadcrumbs,
  BreadcrumbItem,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
  Pagination,
  PaginationSummary,
  SegmentedControl,
  Tab,
  Tabs,
  Tooltip,
} from 'oks-ui'
import { Archive, ChevronDown, Copy, Pencil, Trash2 } from 'lucide-react'
import type { GalleryEntry } from './types'

function PaginationDemo() {
  const [page, setPage] = useState(3)
  const pageSize = 10
  const total = 214
  return (
    <div className="flex flex-col gap-3">
      <Pagination total={total} pageSize={pageSize} page={page} onChange={setPage} showEdges />
      <PaginationSummary page={page} pageSize={pageSize} total={total} />
    </div>
  )
}

function SegmentedControlDemo() {
  const [range, setRange] = useState('30d')
  return (
    <SegmentedControl
      aria-label="Date range"
      value={range}
      onChange={setRange}
      options={[
        { label: '7D', value: '7d' },
        { label: '30D', value: '30d' },
        { label: '90D', value: '90d' },
        { label: 'YTD', value: 'ytd' },
      ]}
    />
  )
}

export const navigationEntries: GalleryEntry[] = [
  {
    slug: 'tabs',
    name: 'Tabs',
    category: 'Navigation',
    description: 'Switches between related panels of content within the same page.',
    render: () => (
      <Tabs variant="underlined" color="primary" defaultSelectedKey="overview" aria-label="Account sections">
        <Tab key="overview" title="Overview">
          <p className="pt-3 text-sm">Summary of account activity and recent changes.</p>
        </Tab>
        <Tab key="billing" title="Billing">
          <p className="pt-3 text-sm">Manage payment methods and view invoices.</p>
        </Tab>
        <Tab key="security" title="Security">
          <p className="pt-3 text-sm">Two-factor authentication and active sessions.</p>
        </Tab>
      </Tabs>
    ),
    source: `<Tabs variant="underlined" color="primary" defaultSelectedKey="overview" aria-label="Account sections">
  <Tab key="overview" title="Overview">Summary of account activity.</Tab>
  <Tab key="billing" title="Billing">Manage payment methods and invoices.</Tab>
  <Tab key="security" title="Security">Two-factor authentication and sessions.</Tab>
</Tabs>`,
  },
  {
    slug: 'dropdown',
    name: 'Dropdown',
    category: 'Navigation',
    description: 'Popover menu of actions or a selection list, triggered from a button.',
    render: () => (
      <Dropdown>
        <DropdownTrigger>
          <Button variant="bordered" color="default" endContent={<ChevronDown size={16} />}>
            Actions
          </Button>
        </DropdownTrigger>
        <DropdownMenu onAction={() => {}}>
          <DropdownSection title="Manage">
            <DropdownItem key="edit" startContent={<Pencil size={16} />}>
              Edit details
            </DropdownItem>
            <DropdownItem key="archive" startContent={<Archive size={16} />}>
              Archive
            </DropdownItem>
          </DropdownSection>
          <DropdownSection title="Danger zone" showDivider={false}>
            <DropdownItem key="delete" startContent={<Trash2 size={16} style={{ color: 'var(--app-danger)' }} />}>
              Delete
            </DropdownItem>
          </DropdownSection>
        </DropdownMenu>
      </Dropdown>
    ),
    source: `<Dropdown>
  <DropdownTrigger>
    <Button variant="bordered" endContent={<ChevronDown size={16} />}>Actions</Button>
  </DropdownTrigger>
  <DropdownMenu onAction={(key) => handleAction(key)}>
    <DropdownSection title="Manage">
      <DropdownItem key="edit" startContent={<Pencil size={16} />}>Edit details</DropdownItem>
      <DropdownItem key="archive" startContent={<Archive size={16} />}>Archive</DropdownItem>
    </DropdownSection>
    <DropdownItem key="delete" startContent={<Trash2 size={16} />}>Delete</DropdownItem>
  </DropdownMenu>
</Dropdown>`,
  },
  {
    slug: 'tooltip',
    name: 'Tooltip',
    category: 'Navigation',
    description: 'Hover/focus hint explaining an icon-only control or clarifying an action.',
    render: () => (
      <div className="flex flex-wrap items-center gap-4">
        <Tooltip content="Duplicate this record" placement="top">
          <Button isIconOnly variant="bordered" color="default" aria-label="Duplicate">
            <Copy size={16} />
          </Button>
        </Tooltip>
        <Tooltip content="Exports the current view as a CSV file" placement="bottom" color="primary">
          <Button variant="soft" color="primary">
            Export
          </Button>
        </Tooltip>
      </div>
    ),
    source: `<Tooltip content="Duplicate this record" placement="top">
  <Button isIconOnly variant="bordered" aria-label="Duplicate"><Copy size={16} /></Button>
</Tooltip>`,
  },
  {
    slug: 'breadcrumbs',
    name: 'Breadcrumbs',
    category: 'Navigation',
    description: 'Trail showing the current page\'s position within the app hierarchy.',
    render: () => (
      <Breadcrumbs aria-label="Breadcrumb">
        <BreadcrumbItem href="/">Dashboard</BreadcrumbItem>
        <BreadcrumbItem href="/customers">Customers</BreadcrumbItem>
        <BreadcrumbItem>Jane Cooper</BreadcrumbItem>
      </Breadcrumbs>
    ),
    source: `<Breadcrumbs aria-label="Breadcrumb">
  <BreadcrumbItem href="/">Dashboard</BreadcrumbItem>
  <BreadcrumbItem href="/customers">Customers</BreadcrumbItem>
  <BreadcrumbItem>Jane Cooper</BreadcrumbItem>
</Breadcrumbs>`,
  },
  {
    slug: 'pagination',
    name: 'Pagination',
    category: 'Navigation',
    description: 'Page-number control for a long list or table, paired with a result-count summary.',
    render: () => <PaginationDemo />,
    source: `const [page, setPage] = useState(1)

<Pagination total={214} pageSize={10} page={page} onChange={setPage} showEdges />
<PaginationSummary page={page} pageSize={10} total={214} />`,
  },
  {
    slug: 'segmented-control',
    name: 'SegmentedControl',
    category: 'Navigation',
    description: 'Inline mutually-exclusive switch, e.g. a Day/Week/Month or date-range toggle.',
    render: () => <SegmentedControlDemo />,
    source: `const [range, setRange] = useState('30d')

<SegmentedControl
  aria-label="Date range"
  value={range}
  onChange={setRange}
  options={[
    { label: '7D', value: '7d' },
    { label: '30D', value: '30d' },
    { label: '90D', value: '90d' },
  ]}
/>`,
  },
  {
    slug: 'accordion',
    name: 'Accordion',
    category: 'Navigation',
    description: 'Collapsible sections for progressive disclosure, e.g. an FAQ list.',
    render: () => (
      <Accordion variant="bordered" selectionMode="single" defaultExpandedKeys={['billing']}>
        <AccordionItem itemKey="billing" title="How does billing work?" subtitle="Plans & invoices">
          <p className="text-sm">You&apos;re billed monthly based on active seats. Invoices are emailed on the 1st.</p>
        </AccordionItem>
        <AccordionItem itemKey="export" title="Can I export my data?">
          <p className="text-sm">Yes — every table supports CSV export from its toolbar.</p>
        </AccordionItem>
        <AccordionItem itemKey="security" title="Is two-factor authentication required?">
          <p className="text-sm">It&apos;s optional but strongly recommended for admin roles.</p>
        </AccordionItem>
      </Accordion>
    ),
    source: `<Accordion variant="bordered" selectionMode="single" defaultExpandedKeys={['billing']}>
  <AccordionItem itemKey="billing" title="How does billing work?" subtitle="Plans & invoices">
    You're billed monthly based on active seats.
  </AccordionItem>
  <AccordionItem itemKey="export" title="Can I export my data?">
    Yes — every table supports CSV export.
  </AccordionItem>
</Accordion>`,
  },
]
