import type { ReactNode } from 'react'

export interface GalleryEntry {
  slug: string
  name: string
  category: string
  description: string
  composed?: string
  render: () => ReactNode
  source: string
}
