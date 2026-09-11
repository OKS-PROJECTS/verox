import { Avatar } from 'oks-ui'

interface EntityCellProps {
  name: string
  sub?: string
  avatarSrc?: string
  square?: boolean
}

/** Composed — an Avatar + two-line label pairing used in table cells. */
export function EntityCell({ name, sub, avatarSrc, square }: EntityCellProps) {
  return (
    <div className="flex items-center gap-2.5">
      <Avatar src={avatarSrc} name={name} size={32} radius={square ? 'sm' : 'full'} />
      <div className="min-w-0 leading-tight">
        <div className="truncate text-[13px] font-semibold" style={{ color: 'var(--app-fg-strong)' }}>
          {name}
        </div>
        {sub && (
          <div className="truncate text-[12px]" style={{ color: 'var(--app-fg-muted)' }}>
            {sub}
          </div>
        )}
      </div>
    </div>
  )
}
