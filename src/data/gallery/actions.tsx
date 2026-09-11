import { Button, ButtonGroup } from 'oks-ui'
import { Download, Plus, Trash2 } from 'lucide-react'
import type { GalleryEntry } from './types'

export const actionsEntries: GalleryEntry[] = [
  {
    slug: 'button',
    name: 'Button',
    category: 'Actions',
    description: 'Every variant, color, size and state — solid, soft, bordered, ghost and link.',
    render: () => (
      <div className="flex flex-col gap-3">
        <div className="flex flex-wrap gap-2">
          {(['solid', 'soft', 'bordered', 'ghost', 'link'] as const).map((v) => (
            <Button key={v} variant={v} color="primary">
              {v}
            </Button>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Button color="success" startContent={<Plus size={16} />}>
            Add item
          </Button>
          <Button color="danger" variant="soft" startContent={<Trash2 size={16} />}>
            Delete
          </Button>
          <Button color="primary" isLoading>
            Saving
          </Button>
          <Button isIconOnly aria-label="Download" variant="bordered" color="default">
            <Download size={16} />
          </Button>
          <Button isDisabled color="primary">
            Disabled
          </Button>
        </div>
      </div>
    ),
    source: `<Button variant="solid" color="primary">Solid</Button>
<Button variant="soft" color="primary">Soft</Button>
<Button variant="bordered" color="primary">Bordered</Button>
<Button color="success" startContent={<Plus size={16} />}>Add item</Button>
<Button color="primary" isLoading>Saving</Button>`,
  },
  {
    slug: 'button-group',
    name: 'ButtonGroup',
    category: 'Actions',
    description: 'A segmented cluster of buttons sharing borders and radius.',
    render: () => (
      <ButtonGroup color="primary" variant="bordered">
        <Button>Day</Button>
        <Button>Week</Button>
        <Button>Month</Button>
      </ButtonGroup>
    ),
    source: `<ButtonGroup color="primary" variant="bordered">
  <Button>Day</Button>
  <Button>Week</Button>
  <Button>Month</Button>
</ButtonGroup>`,
  },
]
