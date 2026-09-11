import { useState } from 'react'
import { Card, CardBody, CardHeader, Chip } from 'oks-ui'
import { ArrowDown, ArrowUp, GripVertical } from 'lucide-react'
import { PageHeader } from '../../Components/ui'

interface Task {
  key: string
  title: string
  owner: string
  tone: 'primary' | 'success' | 'warning' | 'info' | 'secondary'
}

const INITIAL_TASKS: Task[] = [
  { key: 't1', title: 'Draft the Q4 launch checklist', owner: 'Priya', tone: 'primary' },
  { key: 't2', title: 'Review pricing page copy', owner: 'Marcus', tone: 'success' },
  { key: 't3', title: 'Audit onboarding email sequence', owner: 'Elena', tone: 'warning' },
  { key: 't4', title: 'Fix broken links in the docs site', owner: 'Sam', tone: 'info' },
  { key: 't5', title: 'Prepare the customer webinar deck', owner: 'Priya', tone: 'secondary' },
  { key: 't6', title: 'Tag stale support tickets for review', owner: 'Marcus', tone: 'primary' },
]

function move<T>(list: T[], from: number, to: number): T[] {
  const next = list.slice()
  const [item] = next.splice(from, 1)
  next.splice(to, 0, item)
  return next
}

export default function Sortable() {
  const [tasks, setTasks] = useState(INITIAL_TASKS)
  const [dragIndex, setDragIndex] = useState<number | null>(null)

  const moveUp = (index: number) => {
    if (index === 0) return
    setTasks((prev) => move(prev, index, index - 1))
  }
  const moveDown = (index: number) => {
    if (index === tasks.length - 1) return
    setTasks((prev) => move(prev, index, index + 1))
  }

  return (
    <div>
      <PageHeader
        title="Sortable priority list"
        subtitle="Reorder this week's tasks by priority."
        crumbs={[{ label: 'Verox', to: '/' }, { label: 'Pages' }, { label: 'Sortable list' }]}
      />

      <Card className="mx-auto max-w-xl">
        <CardHeader>
          <h3 className="text-[14px] font-semibold" style={{ color: 'var(--app-fg-strong)' }}>
            This week's priorities
          </h3>
          <p className="mt-0.5 text-[12px]" style={{ color: 'var(--app-fg-muted)' }}>
            Drag a row, or use the up/down controls — both reorder the list.
          </p>
        </CardHeader>
        <CardBody className="pt-0">
          <ul className="flex flex-col gap-2">
            {tasks.map((task, index) => (
              <li
                key={task.key}
                draggable
                onDragStart={() => setDragIndex(index)}
                onDragOver={(e) => e.preventDefault()}
                onDrop={() => {
                  if (dragIndex === null || dragIndex === index) return
                  setTasks((prev) => move(prev, dragIndex, index))
                  setDragIndex(null)
                }}
                onDragEnd={() => setDragIndex(null)}
                className="flex items-center gap-3 rounded-[var(--app-card-radius)] px-3 py-2.5"
                style={{ border: '1px solid var(--app-border)', background: 'var(--app-surface)' }}
              >
                <GripVertical size={16} className="cursor-grab" style={{ color: 'var(--app-fg-subtle)' }} />
                <span className="w-5 text-[12px] font-semibold" style={{ color: 'var(--app-fg-subtle)' }}>
                  {index + 1}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[13px] font-medium" style={{ color: 'var(--app-fg-strong)' }}>
                    {task.title}
                  </p>
                </div>
                <Chip size="sm" variant="soft" color={task.tone}>
                  {task.owner}
                </Chip>
                <div className="flex flex-col">
                  <button
                    type="button"
                    aria-label={`Move "${task.title}" up`}
                    onClick={() => moveUp(index)}
                    disabled={index === 0}
                    className="rounded p-0.5 disabled:opacity-30"
                    style={{ color: 'var(--app-fg-muted)' }}
                  >
                    <ArrowUp size={14} />
                  </button>
                  <button
                    type="button"
                    aria-label={`Move "${task.title}" down`}
                    onClick={() => moveDown(index)}
                    disabled={index === tasks.length - 1}
                    className="rounded p-0.5 disabled:opacity-30"
                    style={{ color: 'var(--app-fg-muted)' }}
                  >
                    <ArrowDown size={14} />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </CardBody>
      </Card>
    </div>
  )
}
