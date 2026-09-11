import { useState } from 'react'
import {
  Avatar,
  Badge,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
  TextField,
  Tooltip,
} from 'oks-ui'
import {
  Bell,
  Expand,
  Grid3x3,
  Menu,
  MoonStar,
  Plus,
  Settings,
  Shrink,
  Sun,
  UserRound,
} from 'lucide-react'
import { useThemeSettings } from '../../lib/ThemeSettingsContext'
import { avatarUrl } from '../../lib/avatarUrl'
import { NOTIFICATIONS } from '../../data/notifications'

interface HeaderProps {
  onOpenMobileNav: () => void
  onOpenSettings: () => void
}

export function Header({ onOpenMobileNav, onOpenSettings }: HeaderProps) {
  const { mode, toggleMode } = useThemeSettings()
  const [isFullscreen, setIsFullscreen] = useState(false)

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen?.()
      setIsFullscreen(true)
    } else {
      document.exitFullscreen?.()
      setIsFullscreen(false)
    }
  }

  return (
    <header
      className="app-header sticky top-0 z-30 flex h-[var(--app-header-height)] items-center gap-3 border-b px-4 lg:px-6"
      style={{ background: 'var(--app-header-bg)', borderColor: 'var(--app-border)', boxShadow: 'var(--app-header-shadow)' }}
    >
      <Button
        isIconOnly
        variant="ghost"
        color="default"
        size="sm"
        aria-label="Open navigation"
        className="lg:hidden"
        onPress={onOpenMobileNav}
      >
        <Menu size={18} />
      </Button>

      <div className="hidden w-full max-w-[280px] sm:block">
        <TextField
          type="search"
          variant="filled"
          size="sm"
          placeholder="Quick search…"
          aria-label="Quick search"
          startIcon={<span className="opacity-60">⌘K</span>}
        />
      </div>

      <div className="ml-auto flex items-center gap-1.5">
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Button variant="ghost" color="default" size="sm">
              <Plus size={16} /> Quick create
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Quick create">
            <DropdownItem key="invoice" title="New invoice" href="/apps/invoices/new" />
            <DropdownItem key="issue" title="New issue" href="/apps/issue-tracker" />
            <DropdownItem key="event" title="New event" href="/apps/calendar" />
          </DropdownMenu>
        </Dropdown>

        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Button isIconOnly variant="ghost" color="default" size="sm" aria-label="Apps" tooltip="Apps">
              <Grid3x3 size={18} />
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Apps">
            <DropdownSection title="Apps">
              <DropdownItem key="email" title="Email" href="/apps/email/inbox" />
              <DropdownItem key="chat" title="Chat" href="/apps/chat" />
              <DropdownItem key="calendar" title="Calendar" href="/apps/calendar" />
              <DropdownItem key="board" title="Team board" href="/apps/team-board" />
            </DropdownSection>
          </DropdownMenu>
        </Dropdown>

        <Tooltip content="Theme settings">
          <Button isIconOnly variant="ghost" color="default" size="sm" aria-label="Theme settings" onPress={onOpenSettings}>
            <Settings size={18} />
          </Button>
        </Tooltip>

        <Tooltip content={mode === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}>
          <Button isIconOnly variant="ghost" color="default" size="sm" aria-label="Toggle color mode" onPress={toggleMode}>
            {mode === 'light' ? <MoonStar size={18} /> : <Sun size={18} />}
          </Button>
        </Tooltip>

        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Button isIconOnly variant="ghost" color="default" size="sm" aria-label="Notifications">
              <Badge content={String(NOTIFICATIONS.length)} color="danger" size="sm" shape="circle">
                <Bell size={18} />
              </Badge>
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Notifications" classNames={{ base: 'w-80' }}>
            <DropdownSection title={`${NOTIFICATIONS.length} new notifications`}>
              {NOTIFICATIONS.map((n) => (
                <DropdownItem key={n.id} title={n.title} description={n.detail} showDivider />
              ))}
            </DropdownSection>
          </DropdownMenu>
        </Dropdown>

        <Tooltip content={isFullscreen ? 'Exit fullscreen' : 'Fullscreen'}>
          <Button
            isIconOnly
            variant="ghost"
            color="default"
            size="sm"
            aria-label="Toggle fullscreen"
            className="hidden sm:inline-flex"
            onPress={toggleFullscreen}
          >
            {isFullscreen ? <Shrink size={18} /> : <Expand size={18} />}
          </Button>
        </Tooltip>

        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <button type="button" className="flex items-center gap-2 rounded-[var(--oks-radius-md)] px-1.5 py-1 hover:bg-[var(--app-surface-2)]">
              <Avatar src={avatarUrl('david-dev')} name="David Dev" size={32} />
              <span className="hidden text-left leading-tight lg:block">
                <span className="block text-[13px] font-semibold" style={{ color: 'var(--app-fg-strong)' }}>
                  David Dev
                </span>
                <span className="block text-[11px]" style={{ color: 'var(--app-fg-muted)' }}>
                  Admin Head
                </span>
              </span>
            </button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Account">
            <DropdownSection title="David Dev · Admin Head" showDivider>
              <DropdownItem key="profile" title="Profile" startContent={<UserRound size={16} />} href="/pages/empty" />
              <DropdownItem key="settings" title="Account settings" startContent={<Settings size={16} />} onAction={onOpenSettings} />
            </DropdownSection>
            <DropdownItem key="lock" title="Lock screen" href="/auth/lock-screen" />
            <DropdownItem key="logout" title="Log out" href="/auth/sign-in" />
          </DropdownMenu>
        </Dropdown>
      </div>
    </header>
  )
}
