import { useState } from 'react'
import { SplitLayout, SplitPane, Avatar, Button } from 'oks-ui'
import { Reply, Forward } from 'lucide-react'
import { PageHeader } from '../../Components/ui'
import { avatarUrl } from '../../lib/avatarUrl'
import { EMAIL_FOLDERS, EMAILS } from '../../data/email'

export default function Email() {
  const [activeFolder, setActiveFolder] = useState<string>('inbox')
  const folderEmails = EMAILS.filter((e) => e.folder === activeFolder)
  const [selectedId, setSelectedId] = useState<string | null>(folderEmails[0]?.id ?? null)

  const selectFolder = (folderId: string) => {
    setActiveFolder(folderId)
    setSelectedId(EMAILS.find((e) => e.folder === folderId)?.id ?? null)
  }

  const selected = folderEmails.find((e) => e.id === selectedId) ?? folderEmails[0] ?? null
  const activeFolderLabel = EMAIL_FOLDERS.find((f) => f.id === activeFolder)?.label ?? 'Inbox'

  return (
    <div>
      <PageHeader
        title="Email"
        subtitle="A unified inbox for team and vendor correspondence."
        crumbs={[{ label: 'Verox', to: '/' }, { label: 'Apps' }, { label: 'Email' }]}
      />

      <div style={{ height: 'calc(100vh - var(--app-header-height) - 2rem)' }}>
        <SplitLayout
          aria-label="Email"
          className="h-full"
          style={{
            border: 'var(--app-card-border)',
            borderRadius: 'var(--app-card-radius)',
            overflow: 'hidden',
            background: 'var(--app-surface)',
          }}
        >
          <SplitPane defaultSize={200} minSize={160} maxSize={260} isResizable label="Folders" className="hidden h-full lg:flex lg:flex-col">
            <nav className="flex h-full flex-col gap-1 overflow-y-auto p-3" style={{ borderRight: '1px solid var(--app-border)' }}>
              {EMAIL_FOLDERS.map((folder) => {
                const Icon = folder.icon
                const active = folder.id === activeFolder
                return (
                  <button
                    key={folder.id}
                    type="button"
                    onClick={() => selectFolder(folder.id)}
                    className="flex items-center justify-between rounded-[var(--oks-radius-md)] px-3 py-2 text-left text-[13px] font-medium transition-colors"
                    style={{
                      background: active ? 'var(--app-menu-active-bg)' : 'transparent',
                      color: active ? 'var(--app-menu-active-fg)' : 'var(--app-menu-fg)',
                    }}
                  >
                    <span className="flex items-center gap-2">
                      <Icon size={16} />
                      {folder.label}
                    </span>
                    <span className="text-[11px]" style={{ color: 'var(--app-fg-subtle)' }}>
                      {folder.count}
                    </span>
                  </button>
                )
              })}
            </nav>
          </SplitPane>

          <SplitPane defaultSize={340} minSize={280} maxSize={420} isResizable label="Messages" className="h-full">
            <div className="flex h-full flex-col" style={{ borderRight: '1px solid var(--app-border)' }}>
              <div className="px-4 py-3" style={{ borderBottom: '1px solid var(--app-border)' }}>
                <h2 className="text-[13px] font-semibold" style={{ color: 'var(--app-fg-strong)' }}>
                  {activeFolderLabel}
                </h2>
              </div>
              <div className="flex-1 overflow-y-auto">
                {folderEmails.map((email) => {
                  const active = email.id === selected?.id
                  return (
                    <button
                      key={email.id}
                      type="button"
                      onClick={() => setSelectedId(email.id)}
                      className="flex w-full items-start gap-3 px-4 py-3 text-left transition-colors"
                      style={{
                        borderBottom: '1px solid var(--app-border)',
                        background: active ? 'var(--app-primary-soft)' : 'transparent',
                      }}
                    >
                      <Avatar src={avatarUrl(email.avatarSeed)} name={email.sender} size={36} />
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-2">
                          <span className="truncate text-[13px] font-semibold" style={{ color: 'var(--app-fg-strong)' }}>
                            {email.sender}
                          </span>
                          <span className="shrink-0 text-[11px]" style={{ color: 'var(--app-fg-subtle)' }}>
                            {email.time}
                          </span>
                        </div>
                        <div className="truncate text-[12.5px] font-medium" style={{ color: 'var(--app-fg)' }}>
                          {email.subject}
                        </div>
                        <div className="truncate text-[12px]" style={{ color: 'var(--app-fg-muted)' }}>
                          {email.snippet}
                        </div>
                      </div>
                      {email.unread && (
                        <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full" style={{ background: 'var(--app-primary)' }} />
                      )}
                    </button>
                  )
                })}
                {folderEmails.length === 0 && (
                  <div className="p-6 text-center text-[12.5px]" style={{ color: 'var(--app-fg-subtle)' }}>
                    No messages in this folder.
                  </div>
                )}
              </div>
            </div>
          </SplitPane>

          <SplitPane label="Reading pane" className="hidden h-full lg:flex lg:flex-col">
            <div className="flex h-full flex-col">
              {selected ? (
                <>
                  <div className="flex items-start justify-between gap-3 px-5 py-4" style={{ borderBottom: '1px solid var(--app-border)' }}>
                    <div className="flex items-center gap-3">
                      <Avatar src={avatarUrl(selected.avatarSeed)} name={selected.sender} size={40} />
                      <div>
                        <div className="text-[14px] font-semibold" style={{ color: 'var(--app-fg-strong)' }}>
                          {selected.sender}
                        </div>
                        <div className="text-[12px]" style={{ color: 'var(--app-fg-muted)' }}>
                          {selected.senderEmail}
                        </div>
                      </div>
                    </div>
                    <span className="shrink-0 text-[12px]" style={{ color: 'var(--app-fg-subtle)' }}>
                      {selected.time}
                    </span>
                  </div>
                  <div className="flex-1 overflow-y-auto px-5 py-4">
                    <h2 className="mb-4 text-[16px] font-semibold" style={{ color: 'var(--app-fg-strong)' }}>
                      {selected.subject}
                    </h2>
                    <div className="flex flex-col gap-3 text-[13px] leading-relaxed" style={{ color: 'var(--app-fg)' }}>
                      {selected.body.map((paragraph, i) => (
                        <p key={i} className="whitespace-pre-line">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 px-5 py-3" style={{ borderTop: '1px solid var(--app-border)' }}>
                    <Button size="sm" color="primary" startContent={<Reply size={14} />}>
                      Reply
                    </Button>
                    <Button size="sm" variant="bordered" color="default" startContent={<Forward size={14} />}>
                      Forward
                    </Button>
                  </div>
                </>
              ) : (
                <div className="flex h-full items-center justify-center text-[13px]" style={{ color: 'var(--app-fg-subtle)' }}>
                  Select a message to read
                </div>
              )}
            </div>
          </SplitPane>
        </SplitLayout>
      </div>
    </div>
  )
}
