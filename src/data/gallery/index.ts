import type { GalleryEntry } from './types'
import { actionsEntries } from './actions'
import { feedbackEntries } from './feedback'
import { overlaysEntries } from './overlays'
import { navigationEntries } from './navigation'
import { dataDisplayEntries } from './dataDisplay'
import { formsEntries } from './forms'
import { chartsRichTextEntries } from './chartsRichText'

export const GALLERY_ENTRIES: GalleryEntry[] = [
  ...actionsEntries,
  ...feedbackEntries,
  ...overlaysEntries,
  ...navigationEntries,
  ...dataDisplayEntries,
  ...formsEntries,
  ...chartsRichTextEntries,
]

export const GALLERY_CATEGORIES: string[] = Array.from(new Set(GALLERY_ENTRIES.map((e) => e.category)))

export const getGalleryEntry = (slug: string): GalleryEntry | undefined => GALLERY_ENTRIES.find((e) => e.slug === slug)

export type { GalleryEntry }
