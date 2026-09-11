import { Avatar } from 'oks-ui'
import { BoardPage } from '../../Components/archetypes/BoardPage'
import { StatusChip } from '../../Components/ui'
import { avatarUrl } from '../../lib/avatarUrl'
import { BOARD_COLUMNS, BOARD_TASKS, type TaskCard } from '../../data/teamBoard'

export default function TeamBoard() {
  return (
    <BoardPage<TaskCard>
      title="Team Board"
      subtitle="Kanban board for tracking sprint work across the team."
      crumbs={[{ label: 'Verox', to: '/' }, { label: 'Apps' }, { label: 'Team Board' }]}
      columns={BOARD_COLUMNS}
      initialItems={BOARD_TASKS}
      renderCard={(task) => (
        <div
          className="flex flex-col gap-2.5 p-3"
          style={{
            background: 'var(--app-surface)',
            border: '1px solid var(--app-border)',
            borderRadius: 'var(--app-card-radius)',
          }}
        >
          <span className="text-[12.5px] font-semibold leading-snug" style={{ color: 'var(--app-fg-strong)' }}>
            {task.title}
          </span>
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <Avatar src={avatarUrl(task.avatarSeed)} name={task.assignee} size={22} />
              <span className="text-[11px]" style={{ color: 'var(--app-fg-muted)' }}>
                {task.due}
              </span>
            </div>
            <StatusChip status={task.priority} />
          </div>
        </div>
      )}
    />
  )
}
