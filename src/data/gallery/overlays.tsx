/* eslint-disable react-refresh/only-export-components */
import { useState } from 'react'
import {
  Backdrop,
  Button,
  Card,
  CardBody,
  CommandPalette,
  Drawer,
  Modal,
  Portal,
  TextField,
  useCommandPalette,
  type CommandPaletteItem,
} from 'oks-ui'
import { CreditCard, FilePlus, Settings, UserPlus } from 'lucide-react'
import type { GalleryEntry } from './types'

function ModalDemo() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <Button color="primary" onPress={() => setIsOpen(true)}>
        Open modal
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Invite a teammate"
        size="sm"
        actions={
          <>
            <Button variant="ghost" color="default" onPress={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button color="primary" onPress={() => setIsOpen(false)}>
              Send invite
            </Button>
          </>
        }
      >
        <TextField label="Email address" type="email" placeholder="jane@company.com" />
      </Modal>
    </>
  )
}

function DrawerDemo() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <Button color="primary" variant="soft" onPress={() => setIsOpen(true)}>
        Open drawer
      </Button>
      <Drawer
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        position="right"
        title="Order #10482"
        width="sm"
        actions={
          <Button color="primary" onPress={() => setIsOpen(false)}>
            Done
          </Button>
        }
      >
        <div className="flex flex-col gap-2 text-sm">
          <p>3 items · $214.50</p>
          <p>Shipped to 221B Baker Street.</p>
        </div>
      </Drawer>
    </>
  )
}

function BackdropDemo() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <Button color="secondary" variant="soft" onPress={() => setIsOpen(true)}>
        Show backdrop
      </Button>
      <Backdrop isOpen={isOpen} onClose={() => setIsOpen(false)} blur="md">
        <Card className="max-w-sm">
          <CardBody className="flex flex-col gap-3">
            <p className="text-sm">Custom content rendered inside a standalone Backdrop dim/blur layer.</p>
            <Button color="primary" onPress={() => setIsOpen(false)}>
              Close
            </Button>
          </CardBody>
        </Card>
      </Backdrop>
    </>
  )
}

function PortalDemo() {
  const [show, setShow] = useState(false)
  return (
    <div className="flex flex-col gap-2">
      <Button color="default" variant="bordered" onPress={() => setShow((s) => !s)}>
        {show ? 'Hide portaled toast' : 'Show portaled toast'}
      </Button>
      {show && (
        <Portal>
          <div
            className="fixed bottom-4 right-4 px-3 py-2 text-sm"
            style={{
              background: 'var(--app-surface)',
              border: '1px solid var(--app-border)',
              borderRadius: 'var(--oks-radius-md)',
              boxShadow: 'var(--app-card-shadow)',
              color: 'var(--app-fg-strong)',
            }}
          >
            Rendered via Portal into document.body
          </div>
        </Portal>
      )}
    </div>
  )
}

const commandPaletteItems: CommandPaletteItem[] = [
  { id: 'new-invoice', label: 'Create invoice', icon: <FilePlus size={16} />, shortcut: ['⌘', 'I'], group: 'Actions' },
  { id: 'new-contact', label: 'Add contact', icon: <UserPlus size={16} />, group: 'Actions' },
  { id: 'go-billing', label: 'Go to Billing', icon: <CreditCard size={16} />, group: 'Navigate' },
  { id: 'go-settings', label: 'Go to Settings', icon: <Settings size={16} />, group: 'Navigate' },
]

function CommandPaletteDemo() {
  const { open, getPaletteProps } = useCommandPalette({ hotkey: false })
  return (
    <>
      <Button color="default" variant="bordered" onPress={open}>
        Open command palette
      </Button>
      <CommandPalette
        {...getPaletteProps()}
        items={commandPaletteItems}
        placeholder="Type a command or search…"
        onSelect={() => {}}
      />
    </>
  )
}

export const overlaysEntries: GalleryEntry[] = [
  {
    slug: 'modal',
    name: 'Modal',
    category: 'Overlays',
    description: 'Centred, controlled dialog for a focused task like a form or confirmation.',
    render: () => <ModalDemo />,
    source: `const [isOpen, setIsOpen] = useState(false)

<Button color="primary" onPress={() => setIsOpen(true)}>Open modal</Button>
<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Invite a teammate"
  size="sm"
  actions={<Button color="primary" onPress={() => setIsOpen(false)}>Send invite</Button>}
>
  <TextField label="Email address" type="email" placeholder="jane@company.com" />
</Modal>`,
  },
  {
    slug: 'drawer',
    name: 'Drawer',
    category: 'Overlays',
    description: 'Slide-in panel for peeking at a record without leaving the current page.',
    render: () => <DrawerDemo />,
    source: `const [isOpen, setIsOpen] = useState(false)

<Button onPress={() => setIsOpen(true)}>Open drawer</Button>
<Drawer
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  position="right"
  title="Order #10482"
  width="sm"
  actions={<Button color="primary" onPress={() => setIsOpen(false)}>Done</Button>}
>
  <p>3 items · $214.50</p>
</Drawer>`,
  },
  {
    slug: 'backdrop',
    name: 'Backdrop',
    category: 'Overlays',
    description: 'Standalone dim/blur layer — the primitive Modal, Drawer and CommandPalette build on.',
    render: () => <BackdropDemo />,
    source: `const [isOpen, setIsOpen] = useState(false)

<Button onPress={() => setIsOpen(true)}>Show backdrop</Button>
<Backdrop isOpen={isOpen} onClose={() => setIsOpen(false)} blur="md">
  <Card className="max-w-sm">
    <CardBody>Custom content over a dim/blur layer.</CardBody>
  </Card>
</Backdrop>`,
  },
  {
    slug: 'portal',
    name: 'Portal',
    category: 'Overlays',
    description: 'Renders children into document.body (or a given container), escaping clipped/scrolling parents.',
    render: () => <PortalDemo />,
    source: `<Portal>
  <div className="fixed bottom-4 right-4">Rendered outside the current DOM tree</div>
</Portal>`,
  },
  {
    slug: 'command-palette',
    name: 'CommandPalette',
    category: 'Overlays',
    description: '⌘K / Ctrl+K style command overlay for jumping to actions and destinations.',
    render: () => <CommandPaletteDemo />,
    source: `const { open, getPaletteProps } = useCommandPalette({ hotkey: false })

<Button onPress={open}>Open command palette</Button>
<CommandPalette
  {...getPaletteProps()}
  items={[
    { id: 'new-invoice', label: 'Create invoice', icon: <FilePlus size={16} />, group: 'Actions' },
    { id: 'go-billing', label: 'Go to Billing', icon: <CreditCard size={16} />, group: 'Navigate' },
  ]}
  onSelect={(item) => console.log(item.id)}
/>`,
  },
]
