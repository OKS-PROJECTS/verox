import type { LucideIcon } from 'lucide-react'
import {
  LayoutGrid,
  Mail,
  KanbanSquare,
  MessageSquare,
  CalendarDays,
  Receipt,
  Inbox,
  Bug,
  Grid3x3,
  FileQuestion,
  Tag,
  FileX,
  History,
  Search,
  ListChecks,
  Languages,
  PartyPopper,
  Clipboard,
  Compass,
  Video,
  LogIn,
  UserPlus,
  KeyRound,
  ShieldCheck,
  Lock,
  Hash,
  UserX,
  AlertTriangle,
  Ban,
  Wrench,
  ScrollText,
  Columns3,
  Square,
  PanelLeft,
  MoonStar,
  CircleDot,
  Boxes,
  LineChart,
  BarChart3,
  PieChart,
  Radar,
  Grid2x2,
  Sparkles,
  FormInput,
  MousePointerClick,
  ListFilter,
  CheckSquare,
  Milestone,
  UploadCloud,
  FileText,
  SlidersHorizontal,
  Rows3,
  Puzzle,
  Table,
  TableProperties,
  Map,
  Palette,
} from 'lucide-react'

export interface NavLeaf {
  label: string
  to: string
  icon?: LucideIcon
  badge?: string
}

export interface NavGroupNode {
  label: string
  icon?: LucideIcon
  children: NavNode[]
}

export type NavNode = NavLeaf | NavGroupNode

export interface NavSection {
  heading: string
  items: NavNode[]
}

const isGroup = (n: NavNode): n is NavGroupNode => Array.isArray((n as NavGroupNode).children)

export const NAV: NavSection[] = [
  {
    heading: 'Main',
    items: [
      { label: 'Dashboard', to: '/', icon: LayoutGrid },
      {
        label: 'Email',
        icon: Mail,
        badge: 'New',
        children: [
          { label: 'Inbox', to: '/apps/email/inbox' },
          { label: 'Details', to: '/apps/email/inbox/1' },
          { label: 'Compose', to: '/apps/email/compose' },
        ],
      },
      { label: 'Team Board', to: '/apps/team-board', icon: KanbanSquare },
      { label: 'Chat', to: '/apps/chat', icon: MessageSquare },
      { label: 'Calendar', to: '/apps/calendar', icon: CalendarDays },
      {
        label: 'Invoice',
        icon: Receipt,
        children: [
          { label: 'Invoices', to: '/apps/invoices' },
          { label: 'Single Invoice', to: '/apps/invoices/INV-2010' },
          { label: 'New Invoice', to: '/apps/invoices/new' },
        ],
      },
      { label: 'Outlook View', to: '/apps/outlook', icon: Inbox },
      { label: 'Issue Tracker', to: '/apps/issue-tracker', icon: Bug },
      { label: 'Manage Apps', to: '/apps/manage', icon: Grid3x3 },
    ],
  },
  {
    heading: 'Custom Pages',
    items: [
      {
        label: 'Pages',
        icon: FileText,
        children: [
          { label: 'FAQ', to: '/pages/faq' },
          { label: 'Pricing', to: '/pages/pricing' },
          { label: 'Empty Page', to: '/pages/empty' },
          { label: 'Timeline', to: '/pages/timeline' },
          { label: 'Search Results', to: '/pages/search-results' },
          { label: 'Regional Sales', to: '/pages/regions' },
        ],
      },
      {
        label: 'Plugins',
        icon: Puzzle,
        children: [
          { label: 'Sortable List', to: '/plugins/sortable' },
          { label: 'i18 Support', to: '/plugins/i18n' },
          { label: 'Sweet Alerts', to: '/plugins/alerts' },
          { label: 'Clipboard', to: '/plugins/clipboard' },
          { label: 'Tour', to: '/plugins/tour' },
          { label: 'Video Player', to: '/plugins/video-player' },
        ],
      },
      {
        label: 'Authentication',
        icon: ShieldCheck,
        children: [
          { label: 'Sign In', to: '/auth/sign-in' },
          { label: 'Sign Up', to: '/auth/sign-up' },
          { label: 'Reset Password', to: '/auth/reset-password' },
          { label: 'Two Factor', to: '/auth/two-factor' },
          { label: 'Lock Screen', to: '/auth/lock-screen' },
          { label: 'Login with PIN', to: '/auth/login-pin' },
          { label: 'Delete Account', to: '/auth/delete-account' },
        ],
      },
      {
        label: 'Error Pages',
        icon: AlertTriangle,
        children: [
          { label: '400 Bad Request', to: '/error/400' },
          { label: '404 Not Found', to: '/error/404' },
          { label: 'Maintenance', to: '/error/maintenance' },
        ],
      },
    ],
  },
  {
    heading: 'Layouts',
    items: [
      {
        label: 'Layout Options',
        icon: PanelLeft,
        children: [
          { label: 'Scrollable', to: '/layouts/scrollable' },
          { label: 'Compact', to: '/layouts/compact' },
          { label: 'Boxed', to: '/layouts/boxed' },
          { label: 'Horizontal', to: '/layouts/horizontal' },
          { label: 'Preloader', to: '/layouts/preloader' },
        ],
      },
      {
        label: 'Sidebars',
        icon: Columns3,
        children: [
          { label: 'Dark Menu', to: '/layouts/sidebar-dark' },
          { label: 'Gray Menu', to: '/layouts/sidebar-gray' },
          { label: 'On Hover Menu', to: '/layouts/sidebar-hover' },
        ],
      },
      {
        label: 'Topbar',
        icon: MoonStar,
        children: [
          { label: 'Dark Topbar', to: '/layouts/topbar-dark' },
          { label: 'Gray Topbar', to: '/layouts/topbar-gray' },
        ],
      },
    ],
  },
  {
    heading: 'Components',
    items: [
      {
        label: 'Base UI',
        icon: Square,
        children: [
          { label: 'Accordions', to: '/components/accordion' },
          { label: 'Alerts', to: '/components/alert' },
          { label: 'Avatars', to: '/components/avatar' },
          { label: 'Badges', to: '/components/badge' },
          { label: 'Breadcrumb', to: '/components/breadcrumbs' },
          { label: 'Buttons', to: '/components/button' },
          { label: 'Cards', to: '/components/card' },
          { label: 'Chips', to: '/components/chip' },
          { label: 'Command Palette', to: '/components/command-palette' },
          { label: 'Dropdowns', to: '/components/dropdown' },
          { label: 'Grid Options', to: '/components/grid' },
          { label: 'List Group', to: '/components/nav' },
          { label: 'Modals', to: '/components/modal' },
          { label: 'Notifications', to: '/components/toast' },
          { label: 'Drawer / Offcanvas', to: '/components/drawer' },
          { label: 'Placeholders', to: '/components/skeleton' },
          { label: 'Pagination', to: '/components/pagination' },
          { label: 'Popovers / Tooltips', to: '/components/tooltip' },
          { label: 'Progress', to: '/components/progress' },
          { label: 'Spinners', to: '/components/loader' },
          { label: 'Tabs', to: '/components/tabs' },
          { label: 'Typography', to: '/components/typography' },
          { label: 'Colors', to: '/components/colors' },
          { label: 'Icons', to: '/components/icons' },
          { label: 'Utilities & Tokens', to: '/components/utilities' },
        ],
      },
      {
        label: 'Charts',
        icon: LineChart,
        children: [
          { label: 'Line & Area', to: '/charts/line-area' },
          { label: 'Bar & Column', to: '/charts/bar-column' },
          { label: 'Distributions', to: '/charts/distributions' },
          { label: 'Comparisons', to: '/charts/comparisons' },
          { label: 'Heatmap', to: '/charts/heatmap' },
          { label: 'Sparklines', to: '/charts/sparklines' },
        ],
      },
      {
        label: 'Forms',
        icon: FormInput,
        children: [
          { label: 'Basic Elements', to: '/forms/basic' },
          { label: 'Pickers', to: '/forms/pickers' },
          { label: 'Select', to: '/forms/select' },
          { label: 'Validation', to: '/forms/validation' },
          { label: 'Wizard', to: '/forms/wizard' },
          { label: 'File Uploads', to: '/forms/file-uploads' },
          { label: 'Text Editors', to: '/forms/text-editors' },
          { label: 'Range Slider', to: '/forms/range-slider' },
          { label: 'Layouts', to: '/forms/layouts' },
          { label: 'Other Plugins', to: '/forms/other' },
        ],
      },
      {
        label: 'Tables',
        icon: Table,
        children: [
          { label: 'Static Tables', to: '/tables/static' },
          { label: 'Custom Tables', to: '/tables/custom' },
          { label: 'Advanced Table', to: '/tables/advanced' },
        ],
      },
      { label: 'Component Gallery', to: '/components', icon: Boxes },
    ],
  },
]

const collect = (items: NavNode[]): string[] =>
  items.flatMap((n) => (isGroup(n) ? collect(n.children) : [n.to]))

export const NAV_ROUTES: string[] = Array.from(new Set(NAV.flatMap((s) => collect(s.items))))

export { isGroup }

// Re-exported so consumers don't need to import lucide-react directly for the misc icons used above.
export const NavIcons = {
  FileQuestion,
  Tag,
  FileX,
  History,
  Search,
  ListChecks,
  Languages,
  PartyPopper,
  Clipboard,
  Compass,
  Video,
  LogIn,
  UserPlus,
  KeyRound,
  Lock,
  Hash,
  UserX,
  Ban,
  Wrench,
  ScrollText,
  MoonStar,
  CircleDot,
  BarChart3,
  PieChart,
  Radar,
  Grid2x2,
  Sparkles,
  MousePointerClick,
  ListFilter,
  CheckSquare,
  Milestone,
  UploadCloud,
  SlidersHorizontal,
  Rows3,
  TableProperties,
  Map,
  Palette,
}
