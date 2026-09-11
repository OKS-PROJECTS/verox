import { useState, type ReactNode } from 'react'
import { Board, type BoardCardContext, type BoardColumnData, type BoardMove } from 'oks-ui'
import { PageHeader, type Crumb } from '../ui'

export interface BoardItem {
  id: string
  columnId: string
  [key: string]: unknown
}

interface BoardPageProps<Item extends BoardItem> {
  title: string
  subtitle?: string
  crumbs?: Crumb[]
  columns: BoardColumnData[]
  initialItems: Item[]
  renderCard: (item: Item, ctx: BoardCardContext) => ReactNode
}

export function BoardPage<Item extends BoardItem>({ title, subtitle, crumbs, columns, initialItems, renderCard }: BoardPageProps<Item>) {
  const [items, setItems] = useState(initialItems)

  const handleMove = (move: BoardMove<Item>) => {
    setItems((prev) => {
      const withoutMoved = prev.filter((it) => it.id !== move.itemId)
      const destItems = withoutMoved.filter((it) => it.columnId === move.to.columnId)
      const rest = withoutMoved.filter((it) => it.columnId !== move.to.columnId)
      destItems.splice(move.to.index, 0, { ...move.item, columnId: move.to.columnId })
      return [...rest, ...destItems].sort((a, b) => {
        if (a.columnId === b.columnId) return 0
        return columns.findIndex((c) => c.id === a.columnId) - columns.findIndex((c) => c.id === b.columnId)
      })
    })
  }

  return (
    <div>
      <PageHeader title={title} subtitle={subtitle} crumbs={crumbs} />
      <Board
        aria-label={title}
        columns={columns}
        items={items}
        getItemId={(item) => item.id}
        getItemColumn={(item) => item.columnId}
        renderCard={renderCard}
        onItemMove={handleMove}
      />
    </div>
  )
}
