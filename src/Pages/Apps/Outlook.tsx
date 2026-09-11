import { useState } from 'react'
import { Card, CardHeader, CardBody, Avatar, Checkbox } from 'oks-ui'
import { Mail, Flag, Users, Clock } from 'lucide-react'
import { PageHeader } from '../../Components/ui'
import { avatarUrl } from '../../lib/avatarUrl'
import { DIGEST_ITEMS, TODAY_SCHEDULE, QUICK_TASKS, type DigestItem } from '../../data/outlookDigest'

const TYPE_ICON: Record<DigestItem['type'], typeof Mail> = {
  mail: Mail,
  flagged: Flag,
  meeting: Users,
}

export default function Outlook() {
  const [tasks, setTasks] = useState(QUICK_TASKS)

  const toggleTask = (id: string) => {
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)))
  }

  return (
    <div>
      <PageHeader
        title="Outlook View"
        subtitle="A unified inbox with today's schedule alongside it."
        crumbs={[{ label: 'Verox', to: '/' }, { label: 'Apps' }, { label: 'Outlook View' }]}
      />

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-[2fr_1fr]">
        <Card>
          <CardHeader>
            <h3 className="text-[14px] font-semibold" style={{ color: 'var(--app-fg-strong)' }}>
              Unified inbox
            </h3>
          </CardHeader>
          <CardBody className="pt-0">
            <ul className="flex flex-col">
              {DIGEST_ITEMS.map((item) => {
                const Icon = TYPE_ICON[item.type]
                return (
                  <li
                    key={item.id}
                    className="flex items-center gap-3 py-3"
                    style={{ borderBottom: '1px solid var(--app-border)' }}
                  >
                    <Avatar src={avatarUrl(item.avatarSeed)} name={item.sender} size={36} />
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <span className="flex min-w-0 items-center gap-1.5">
                          <span className="truncate text-[13px] font-semibold" style={{ color: 'var(--app-fg-strong)' }}>
                            {item.sender}
                          </span>
                          {item.unread && (
                            <span className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: 'var(--app-primary)' }} />
                          )}
                        </span>
                        <span className="shrink-0 text-[11px]" style={{ color: 'var(--app-fg-subtle)' }}>
                          {item.time}
                        </span>
                      </div>
                      <div className="truncate text-[12.5px] font-medium" style={{ color: 'var(--app-fg)' }}>
                        {item.subject}
                      </div>
                      <div className="truncate text-[12px]" style={{ color: 'var(--app-fg-muted)' }}>
                        {item.snippet}
                      </div>
                    </div>
                    <Icon size={14} className="shrink-0" style={{ color: 'var(--app-fg-subtle)' }} />
                  </li>
                )
              })}
            </ul>
          </CardBody>
        </Card>

        <div className="flex flex-col gap-5">
          <Card>
            <CardHeader className="flex items-center gap-2">
              <Clock size={16} style={{ color: 'var(--app-primary)' }} />
              <h3 className="text-[14px] font-semibold" style={{ color: 'var(--app-fg-strong)' }}>
                Today&apos;s schedule
              </h3>
            </CardHeader>
            <CardBody className="pt-0">
              <ul className="flex flex-col">
                {TODAY_SCHEDULE.map((item) => (
                  <li
                    key={item.id}
                    className="flex items-start gap-3 py-2.5"
                    style={{ borderBottom: '1px solid var(--app-border)' }}
                  >
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full" style={{ background: 'var(--app-primary)' }} />
                    <div className="min-w-0">
                      <div className="truncate text-[13px] font-semibold" style={{ color: 'var(--app-fg-strong)' }}>
                        {item.title}
                      </div>
                      <div className="text-[12px]" style={{ color: 'var(--app-fg-muted)' }}>
                        {item.time} &middot; {item.location}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </CardBody>
          </Card>

          <Card>
            <CardHeader>
              <h3 className="text-[14px] font-semibold" style={{ color: 'var(--app-fg-strong)' }}>
                Quick tasks
              </h3>
            </CardHeader>
            <CardBody className="pt-0">
              <div className="flex flex-col gap-2.5">
                {tasks.map((task) => (
                  <Checkbox key={task.id} label={task.label} checked={task.done} onChange={() => toggleTask(task.id)} />
                ))}
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  )
}
