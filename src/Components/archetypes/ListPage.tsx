import { Button, StatGroup, Stat } from 'oks-ui'
import { Plus } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { PageHeader, DataTable } from '../ui'
import type { ListPageConfig } from './types'

export function ListPage({ config }: { config: ListPageConfig }) {
  const { title, subtitle, crumbs, columns, rows, getRowKey, searchKeys, searchPlaceholder, filters, addLabel, addTo, stats } = config
  const navigate = useNavigate()

  return (
    <div>
      <PageHeader
        title={title}
        subtitle={subtitle}
        crumbs={crumbs}
        actions={
          addTo && (
            <Button color="primary" startContent={<Plus size={16} />} onPress={() => navigate(addTo)}>
              {addLabel ?? 'Add new'}
            </Button>
          )
        }
      />

      {stats && stats.length > 0 && (
        <StatGroup columns={stats.length} className="mb-5">
          {stats.map((s) => (
            <Stat key={s.label} label={s.label} value={s.value} />
          ))}
        </StatGroup>
      )}

      <DataTable
        columns={columns}
        rows={rows}
        getRowKey={getRowKey}
        searchKeys={searchKeys}
        searchPlaceholder={searchPlaceholder}
        filters={filters}
      />
    </div>
  )
}
