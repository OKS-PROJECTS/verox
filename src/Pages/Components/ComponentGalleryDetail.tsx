import { useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { Button, Card, CardBody } from 'oks-ui'
import { Check, Copy } from 'lucide-react'
import { PageHeader } from '../../Components/ui'
import { getGalleryEntry } from '../../data/gallery'

export default function ComponentGalleryDetail() {
  const { slug } = useParams()
  const [copied, setCopied] = useState(false)
  const entry = slug ? getGalleryEntry(slug) : undefined

  if (!entry) return <Navigate to="/components" replace />

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(entry.source)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      /* clipboard unavailable — the source is still visible to copy manually */
    }
  }

  return (
    <div>
      <PageHeader
        title={entry.name}
        subtitle={entry.description}
        crumbs={[
          { label: 'Verox', to: '/' },
          { label: 'Components', to: '/components' },
          { label: entry.category },
          { label: entry.name },
        ]}
        actions={
          <Link to="/components">
            <Button variant="bordered" color="default">
              Back to gallery
            </Button>
          </Link>
        }
      />

      {entry.composed && (
        <p className="mb-4 text-[12.5px]" style={{ color: 'var(--app-fg-muted)' }}>
          {entry.composed}
        </p>
      )}

      <Card className="mb-5">
        <CardBody className="flex min-h-[160px] items-center justify-center p-8">{entry.render()}</CardBody>
      </Card>

      <Card>
        <CardBody className="p-0">
          <div className="flex items-center justify-between border-b px-4 py-2.5" style={{ borderColor: 'var(--app-border)' }}>
            <span className="text-[12px] font-medium" style={{ color: 'var(--app-fg-muted)' }}>
              Source
            </span>
            <Button size="sm" variant="ghost" color="default" startContent={copied ? <Check size={14} /> : <Copy size={14} />} onPress={copy}>
              {copied ? 'Copied' : 'Copy'}
            </Button>
          </div>
          <pre className="overflow-x-auto p-4 text-[12.5px] leading-relaxed" style={{ color: 'var(--app-fg)' }}>
            <code>{entry.source}</code>
          </pre>
        </CardBody>
      </Card>
    </div>
  )
}
