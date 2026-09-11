import { Nav, type NavItemData, type NavRenderItemArgs } from 'oks-ui'
import { NavLink, useLocation } from 'react-router-dom'
import { createElement } from 'react'
import { NAV, isGroup, type NavNode, type NavSection } from '../../data/nav'
import { Logo } from '../../lib/Logo'
import { useThemeSettings } from '../../lib/ThemeSettingsContext'

function toItem(node: NavNode): NavItemData {
  if (isGroup(node)) {
    return {
      key: `group:${node.label}`,
      label: node.label,
      icon: node.icon ? createElement(node.icon, { size: 18 }) : undefined,
      children: node.children.map(toItem),
    }
  }
  return {
    key: node.to,
    label: node.label,
    href: node.to,
    icon: node.icon ? createElement(node.icon, { size: 18 }) : undefined,
    badge: node.badge,
  }
}

const toSectionItems = (sections: NavSection[]): NavItemData[] =>
  sections.map((section) => ({
    key: `section:${section.heading}`,
    label: section.heading,
    isSection: true,
    children: section.items.map(toItem),
  }))

const NAV_ITEMS = toSectionItems(NAV)

function renderItem({ item, isActive, content, props, hasChildren }: NavRenderItemArgs) {
  if (item.isSection || hasChildren) {
    return (
      <button type="button" {...props}>
        {content}
      </button>
    )
  }
  return (
    <NavLink to={item.href ?? '#'} aria-current={isActive ? 'page' : undefined} className={props.className}>
      {content}
    </NavLink>
  )
}

interface SidebarProps {
  isCollapsed?: boolean
  onNavigate?: () => void
}

export function Sidebar({ isCollapsed, onNavigate }: SidebarProps) {
  const { pathname } = useLocation()
  const { sidenavSize } = useThemeSettings()
  const collapsed = isCollapsed ?? (sidenavSize === 'compact' || sidenavSize === 'hover')

  return (
    <aside
      className="app-sidebar flex h-full flex-col border-r"
      style={{
        width: collapsed ? 'var(--app-sidenav-width-collapsed)' : 'var(--app-sidenav-width)',
        background: 'var(--app-menu-bg)',
        borderColor: 'var(--app-menu-border)',
      }}
    >
      <div className="flex h-[var(--app-header-height)] shrink-0 items-center px-5">
        <Logo iconOnly={collapsed} />
      </div>
      <nav className="flex-1 overflow-y-auto px-3 pb-6" onClick={onNavigate}>
        <Nav
          items={NAV_ITEMS}
          aria-label="Primary"
          isItemActive={(item) =>
            !!item.href &&
            (item.href === '/' ? pathname === '/' : pathname === item.href || pathname.startsWith(`${item.href}/`))
          }
          defaultExpandedKeys={NAV_ITEMS.flatMap((s) =>
            (s.children ?? [])
              .filter((g) => g.children?.some((c) => c.href && pathname.startsWith(c.href)))
              .map((g) => g.key),
          )}
          isCollapsed={collapsed}
          renderItem={renderItem}
          classNames={{
            sectionTitle: 'app-nav-heading',
          }}
        />
      </nav>
    </aside>
  )
}
