import { Button, Card, CardBody, CardHeader, toast } from 'oks-ui'
import { Copy } from 'lucide-react'
import { PageHeader } from '../../Components/ui'

interface Snippet {
  key: string
  title: string
  description: string
  code: string
}

const SNIPPETS: Snippet[] = [
  {
    key: 'api-key',
    title: 'API key',
    description: 'Use this key to authenticate server-side requests. Treat it like a password.',
    code: 'vrx_live_9f3a2c7b41e0d8f6c5b9a2e1',
  },
  {
    key: 'invite-link',
    title: 'Workspace invite link',
    description: 'Anyone with this link can request to join Acme Corp as a Member.',
    code: 'https://app.verox.io/invite/acme-corp/8k2j4h',
  },
  {
    key: 'cli-install',
    title: 'CLI install command',
    description: 'Install the command-line tool to manage this workspace from your terminal.',
    code: 'npm install -g @verox/cli',
  },
  {
    key: 'embed-snippet',
    title: 'Embed snippet',
    description: 'Paste this into any page to embed a live, read-only dashboard.',
    code: '<script src="https://embed.verox.io/d/2k9f1.js" defer></script>',
  },
]

function copySnippet(code: string, label: string) {
  navigator.clipboard
    .writeText(code)
    .then(() => toast.success(`${label} copied to clipboard.`))
    .catch(() => toast.error('Could not copy to clipboard.'))
}

export default function ClipboardPage() {
  return (
    <div>
      <PageHeader
        title="Copy to clipboard"
        subtitle="Keys, links and snippets you'll want to paste elsewhere."
        crumbs={[{ label: 'Verox', to: '/' }, { label: 'Pages' }, { label: 'Clipboard' }]}
      />

      <div className="mx-auto flex max-w-2xl flex-col gap-4">
        {SNIPPETS.map((snippet) => (
          <Card key={snippet.key}>
            <CardHeader>
              <h3 className="text-[14px] font-medium" style={{ color: 'var(--app-fg)' }}>
                {snippet.title}
              </h3>
              <p className="mt-0.5 text-[12px]" style={{ color: 'var(--app-fg-muted)' }}>
                {snippet.description}
              </p>
            </CardHeader>
            <CardBody className="pt-0">
              <div
                className="flex items-center justify-between gap-3 rounded-[var(--oks-radius-md)] px-3 py-2.5"
                style={{ background: 'var(--app-surface-2)', border: '1px solid var(--app-border)' }}
              >
                <code
                  className="min-w-0 flex-1 overflow-x-auto whitespace-nowrap text-[12.5px]"
                  style={{ color: 'var(--app-fg-strong)' }}
                >
                  {snippet.code}
                </code>
                <Button
                  size="sm"
                  variant="bordered"
                  color="default"
                  isIconOnly
                  aria-label={`Copy ${snippet.title}`}
                  onPress={() => copySnippet(snippet.code, snippet.title)}
                >
                  <Copy size={14} />
                </Button>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  )
}
