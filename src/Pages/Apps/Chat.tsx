import { useRef, useState, type KeyboardEvent } from 'react'
import { SplitLayout, SplitPane, Avatar, Badge, MessageList, Message, TextField, Button } from 'oks-ui'
import { Send } from 'lucide-react'
import { PageHeader } from '../../Components/ui'
import { avatarUrl } from '../../lib/avatarUrl'
import { CONVERSATIONS, type ChatMessage } from '../../data/chat'

export default function Chat() {
  const [activeId, setActiveId] = useState(CONVERSATIONS[0].id)
  const [draft, setDraft] = useState('')
  const [messagesByConv, setMessagesByConv] = useState<Record<string, ChatMessage[]>>(() =>
    Object.fromEntries(CONVERSATIONS.map((c) => [c.id, c.messages])),
  )
  const nextId = useRef(1)

  const active = CONVERSATIONS.find((c) => c.id === activeId) ?? CONVERSATIONS[0]
  const thread = messagesByConv[activeId] ?? []

  const sendMessage = () => {
    const body = draft.trim()
    if (!body) return
    const message: ChatMessage = {
      id: `local-${nextId.current++}`,
      author: 'You',
      avatarSeed: 'verox-you',
      align: 'end',
      body,
      timestamp: 'Just now',
      status: 'sent',
    }
    setMessagesByConv((prev) => ({ ...prev, [activeId]: [...(prev[activeId] ?? []), message] }))
    setDraft('')
  }

  const handleComposerKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <div>
      <PageHeader
        title="Chat"
        subtitle="Direct messages and group threads for the team."
        crumbs={[{ label: 'Verox', to: '/' }, { label: 'Apps' }, { label: 'Chat' }]}
      />

      <div style={{ height: 'calc(100vh - var(--app-header-height) - 2rem)' }}>
        <SplitLayout
          aria-label="Chat"
          className="h-full"
          style={{
            border: 'var(--app-card-border)',
            borderRadius: 'var(--app-card-radius)',
            overflow: 'hidden',
            background: 'var(--app-surface)',
          }}
        >
          <SplitPane defaultSize={300} minSize={240} maxSize={380} isResizable label="Conversations" className="h-full">
            <div className="flex h-full flex-col overflow-y-auto" style={{ borderRight: '1px solid var(--app-border)' }}>
              {CONVERSATIONS.map((conversation) => {
                const isActive = conversation.id === activeId
                const avatar = (
                  <Avatar
                    src={avatarUrl(conversation.avatarSeed)}
                    name={conversation.name}
                    size={40}
                    status={conversation.online ? 'online' : undefined}
                  />
                )
                return (
                  <button
                    key={conversation.id}
                    type="button"
                    onClick={() => setActiveId(conversation.id)}
                    className="flex w-full items-center gap-3 px-4 py-3 text-left transition-colors"
                    style={{
                      borderBottom: '1px solid var(--app-border)',
                      background: isActive ? 'var(--app-primary-soft)' : 'transparent',
                    }}
                  >
                    {conversation.unread > 0 ? (
                      <Badge content={String(conversation.unread)} color="primary" size="sm" shape="circle" placement="bottom-end">
                        {avatar}
                      </Badge>
                    ) : (
                      avatar
                    )}
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <span className="truncate text-[13px] font-semibold" style={{ color: 'var(--app-fg-strong)' }}>
                          {conversation.name}
                        </span>
                        <span className="shrink-0 text-[11px]" style={{ color: 'var(--app-fg-subtle)' }}>
                          {conversation.time}
                        </span>
                      </div>
                      <div className="truncate text-[12px]" style={{ color: 'var(--app-fg-muted)' }}>
                        {conversation.lastMessage}
                      </div>
                    </div>
                  </button>
                )
              })}
            </div>
          </SplitPane>

          <SplitPane label="Thread" className="h-full">
            <div className="flex h-full flex-col">
              <div className="flex items-center gap-3 px-5 py-3" style={{ borderBottom: '1px solid var(--app-border)' }}>
                <Avatar
                  src={avatarUrl(active.avatarSeed)}
                  name={active.name}
                  size={32}
                  status={active.online ? 'online' : undefined}
                />
                <div>
                  <div className="text-[13.5px] font-semibold" style={{ color: 'var(--app-fg-strong)' }}>
                    {active.name}
                  </div>
                  <div className="text-[11.5px]" style={{ color: 'var(--app-fg-subtle)' }}>
                    {active.online ? 'Online' : 'Offline'}
                  </div>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto px-4 py-3">
                <MessageList>
                  {thread.map((message) => (
                    <Message
                      key={message.id}
                      author={message.author}
                      avatar={<Avatar src={avatarUrl(message.avatarSeed)} name={message.author} size={28} />}
                      timestamp={message.timestamp}
                      align={message.align}
                      variant="bubble"
                      color={message.align === 'end' ? 'primary' : 'default'}
                      status={message.align === 'end' ? message.status : undefined}
                    >
                      {message.body}
                    </Message>
                  ))}
                </MessageList>
              </div>

              <div className="flex items-center gap-2 px-4 py-3" style={{ borderTop: '1px solid var(--app-border)' }}>
                <div className="flex-1">
                  <TextField
                    type="text"
                    variant="filled"
                    size="sm"
                    placeholder="Type a message…"
                    value={draft}
                    onChange={setDraft}
                    onKeyDown={handleComposerKeyDown}
                    aria-label="Message"
                  />
                </div>
                <Button isIconOnly color="primary" aria-label="Send message" onPress={sendMessage}>
                  <Send size={16} />
                </Button>
              </div>
            </div>
          </SplitPane>
        </SplitLayout>
      </div>
    </div>
  )
}
