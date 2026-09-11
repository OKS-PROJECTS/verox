import { useMemo, useState } from 'react'
import { Accordion, AccordionItem, Card, CardBody, TextField } from 'oks-ui'
import { CreditCard, HelpCircle, Search, ShieldCheck } from 'lucide-react'
import { PageHeader } from '../../Components/ui'

interface FaqEntry {
  key: string
  question: string
  answer: string
}

interface FaqCategory {
  key: string
  title: string
  icon: React.ReactNode
  items: FaqEntry[]
}

const CATEGORIES: FaqCategory[] = [
  {
    key: 'getting-started',
    title: 'Getting started',
    icon: <HelpCircle size={16} />,
    items: [
      {
        key: 'gs-1',
        question: 'How do I create my first workspace?',
        answer:
          'From the sidebar, choose "New workspace", give it a name and a URL slug, then invite teammates by email. You can rename or archive a workspace later from Settings without losing any of its data.',
      },
      {
        key: 'gs-2',
        question: 'Can I import data from a spreadsheet?',
        answer:
          'Yes. Every list view has an Import action that accepts CSV files up to 10MB. Map your columns to fields on the next screen, then run a dry-run preview before committing the import.',
      },
      {
        key: 'gs-3',
        question: 'What roles are available for team members?',
        answer:
          'Workspaces support Owner, Admin, Member and Viewer roles. Owners and Admins can manage billing and integrations; Members can create and edit records; Viewers have read-only access.',
      },
      {
        key: 'gs-4',
        question: 'Is there a mobile app?',
        answer:
          'The dashboard is fully responsive and works well in a mobile browser. A dedicated iOS and Android app is on the roadmap, and workspace admins can request early access from Settings.',
      },
    ],
  },
  {
    key: 'billing',
    title: 'Billing and plans',
    icon: <CreditCard size={16} />,
    items: [
      {
        key: 'bl-1',
        question: 'How does seat-based billing work?',
        answer:
          'You are billed monthly or annually for the number of active seats in a workspace. Removing a member frees their seat immediately, and the next invoice is prorated automatically.',
      },
      {
        key: 'bl-2',
        question: 'Can I switch between monthly and annual billing?',
        answer:
          'Yes, from Settings → Billing you can switch cycles at any time. Moving to annual billing applies a discount immediately; moving to monthly takes effect at the next renewal date.',
      },
      {
        key: 'bl-3',
        question: 'Do you offer a discount for non-profits or students?',
        answer:
          'Verified non-profits and educational institutions get 30% off any paid plan. Apply from the billing page with your organization details and approval typically takes one business day.',
      },
      {
        key: 'bl-4',
        question: 'What happens to my data if I downgrade?',
        answer:
          'Downgrading never deletes data. Features gated to a higher tier become read-only until you either upgrade again or export the affected records.',
      },
    ],
  },
  {
    key: 'security',
    title: 'Security and privacy',
    icon: <ShieldCheck size={16} />,
    items: [
      {
        key: 'sec-1',
        question: 'Is two-factor authentication supported?',
        answer:
          'Yes, both authenticator-app and SMS-based two-factor authentication are supported, and workspace Owners can require it for every member from Settings → Security.',
      },
      {
        key: 'sec-2',
        question: 'Where is my data stored?',
        answer:
          'Workspace data is stored in region-pinned clusters chosen at signup — currently US, EU and APAC — with encryption at rest and in transit, and nightly backups retained for 30 days.',
      },
      {
        key: 'sec-3',
        question: 'Can I export a full audit log?',
        answer:
          'Admins can export a full audit log of logins, permission changes and record edits as CSV or stream it to an external SIEM via webhook on Business and higher plans.',
      },
      {
        key: 'sec-4',
        question: 'How do I delete my account permanently?',
        answer:
          'Account deletion is available from Settings → Danger zone. It queues a 14-day grace period, after which all associated data is permanently and irreversibly removed.',
      },
    ],
  },
]

export default function Faq() {
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return CATEGORIES
    return CATEGORIES.map((category) => ({
      ...category,
      items: category.items.filter(
        (item) => item.question.toLowerCase().includes(q) || item.answer.toLowerCase().includes(q),
      ),
    })).filter((category) => category.items.length > 0)
  }, [query])

  return (
    <div>
      <PageHeader
        title="Frequently asked questions"
        subtitle="Answers to the questions our support team hears most often."
        crumbs={[{ label: 'Verox', to: '/' }, { label: 'Pages' }, { label: 'FAQ' }]}
      />

      <div className="mx-auto mb-6 max-w-xl">
        <TextField
          type="search"
          variant="filled"
          size="lg"
          placeholder="Search the FAQ…"
          startIcon={<Search size={16} />}
          value={query}
          onChange={setQuery}
          aria-label="Search the FAQ"
        />
      </div>

      <div className="mx-auto flex max-w-3xl flex-col gap-6">
        {filtered.length === 0 && (
          <Card>
            <CardBody className="text-center text-sm" style={{ color: 'var(--app-fg-muted)' }}>
              No questions match "{query}". Try a different search term.
            </CardBody>
          </Card>
        )}

        {filtered.map((category) => (
          <div key={category.key}>
            <div className="mb-2 flex items-center gap-2">
              <span style={{ color: 'var(--app-primary)' }}>{category.icon}</span>
              <h2 className="text-[13px] font-semibold uppercase tracking-wide" style={{ color: 'var(--app-fg-muted)' }}>
                {category.title}
              </h2>
            </div>
            <Accordion variant="splitted" selectionMode="multiple" defaultExpandedKeys={[category.items[0]?.key ?? '']}>
              {category.items.map((item) => (
                <AccordionItem key={item.key} itemKey={item.key} title={item.question}>
                  <p className="text-[13px] leading-relaxed" style={{ color: 'var(--app-fg)' }}>
                    {item.answer}
                  </p>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ))}
      </div>
    </div>
  )
}
