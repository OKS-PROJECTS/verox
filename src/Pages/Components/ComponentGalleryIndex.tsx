import { Link } from 'react-router-dom'
import { Card, CardBody, Chip, TextField } from 'oks-ui'
import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import { PageHeader } from '../../Components/ui'
import { GALLERY_CATEGORIES, GALLERY_ENTRIES } from '../../data/gallery'

export default function ComponentGalleryIndex() {
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return GALLERY_ENTRIES
    return GALLERY_ENTRIES.filter((e) => e.name.toLowerCase().includes(q) || e.description.toLowerCase().includes(q))
  }, [query])

  return (
    <div>
      <PageHeader
        title="Component Gallery"
        subtitle={`Every oks-ui export used in Verox, ${GALLERY_ENTRIES.length} components with live examples and copyable source.`}
        crumbs={[{ label: 'Verox', to: '/' }, { label: 'Components' }]}
      />

      <div className="mb-6 max-w-sm">
        <TextField
          type="search"
          variant="filled"
          placeholder="Search components…"
          startIcon={<Search size={15} />}
          value={query}
          onChange={setQuery}
          aria-label="Search components"
        />
      </div>

      {GALLERY_CATEGORIES.map((category) => {
        const entries = filtered.filter((e) => e.category === category)
        if (entries.length === 0) return null
        return (
          <section key={category} className="mb-8">
            <h2 className="mb-3 text-[13px] font-semibold uppercase tracking-wide" style={{ color: 'var(--app-fg-subtle)' }}>
              {category}
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {entries.map((entry) => (
                <Link key={entry.slug} to={`/components/${entry.slug}`}>
                  <Card isHoverable isPressable className="h-full">
                    <CardBody>
                      <div className="mb-2 flex items-center justify-between">
                        <h3 className="text-[14px] font-medium" style={{ color: 'var(--app-fg)' }}>
                          {entry.name}
                        </h3>
                        <Chip size="sm" variant="bordered" color="default">
                          {entry.category}
                        </Chip>
                      </div>
                      <p className="text-[12.5px]" style={{ color: 'var(--app-fg-muted)' }}>
                        {entry.description}
                      </p>
                    </CardBody>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        )
      })}
    </div>
  )
}
