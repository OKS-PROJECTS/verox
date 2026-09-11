import { lazy, Suspense, type ComponentType } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Loader } from 'oks-ui'
import { InnerTemplate } from './Components/Commom/InnerTemplate'
import { ThemeSettingsProvider } from './lib/ThemeSettingsContext'
import { NAV_ROUTES } from './data/nav'
import { listRoutePaths, listRoutes } from './data/listRoutes'

const ComingSoon = lazy(() => import('./Pages/ComingSoon'))
const DefaultDashboard = lazy(() => import('./Pages/Dashboard/DefaultDashboard'))

const SignIn = lazy(() => import('./Pages/Auth/SignIn'))
const SignUp = lazy(() => import('./Pages/Auth/SignUp'))
const ResetPassword = lazy(() => import('./Pages/Auth/ResetPassword'))
const TwoFactor = lazy(() => import('./Pages/Auth/TwoFactor'))
const LockScreen = lazy(() => import('./Pages/Auth/LockScreen'))
const LoginPin = lazy(() => import('./Pages/Auth/LoginPin'))
const DeleteAccount = lazy(() => import('./Pages/Auth/DeleteAccount'))

const Error400 = lazy(() => import('./Pages/Errors/Error400'))
const Error404 = lazy(() => import('./Pages/Errors/Error404'))
const Maintenance = lazy(() => import('./Pages/Errors/Maintenance'))

const LineArea = lazy(() => import('./Pages/Charts/LineArea'))
const BarColumn = lazy(() => import('./Pages/Charts/BarColumn'))
const Distributions = lazy(() => import('./Pages/Charts/Distributions'))
const Comparisons = lazy(() => import('./Pages/Charts/Comparisons'))
const Heatmap = lazy(() => import('./Pages/Charts/Heatmap'))
const Sparklines = lazy(() => import('./Pages/Charts/Sparklines'))

const StaticTables = lazy(() => import('./Pages/Tables/Static'))
const CustomTables = lazy(() => import('./Pages/Tables/Custom'))
const AdvancedTable = lazy(() => import('./Pages/Tables/Advanced'))

const Scrollable = lazy(() => import('./Pages/Layouts/Scrollable'))
const Compact = lazy(() => import('./Pages/Layouts/Compact'))
const Boxed = lazy(() => import('./Pages/Layouts/Boxed'))
const Horizontal = lazy(() => import('./Pages/Layouts/Horizontal'))
const Preloader = lazy(() => import('./Pages/Layouts/Preloader'))
const SidebarDark = lazy(() => import('./Pages/Layouts/SidebarDark'))
const SidebarGray = lazy(() => import('./Pages/Layouts/SidebarGray'))
const SidebarHover = lazy(() => import('./Pages/Layouts/SidebarHover'))
const TopbarDark = lazy(() => import('./Pages/Layouts/TopbarDark'))
const TopbarGray = lazy(() => import('./Pages/Layouts/TopbarGray'))

const Faq = lazy(() => import('./Pages/Content/Faq'))
const Pricing = lazy(() => import('./Pages/Content/Pricing'))
const EmptyPage = lazy(() => import('./Pages/Content/Empty'))
const ContentTimeline = lazy(() => import('./Pages/Content/Timeline'))
const SearchResults = lazy(() => import('./Pages/Content/SearchResults'))
const Regions = lazy(() => import('./Pages/Content/Regions'))

const ComponentGalleryIndex = lazy(() => import('./Pages/Components/ComponentGalleryIndex'))
const ComponentGalleryDetail = lazy(() => import('./Pages/Components/ComponentGalleryDetail'))
const ComponentsGrid = lazy(() => import('./Pages/Components/Grid'))
const ComponentsListGroup = lazy(() => import('./Pages/Components/ListGroup'))
const ComponentsTypography = lazy(() => import('./Pages/Components/Typography'))
const ComponentsColors = lazy(() => import('./Pages/Components/Colors'))
const ComponentsIcons = lazy(() => import('./Pages/Components/Icons'))
const ComponentsUtilities = lazy(() => import('./Pages/Components/Utilities'))

const FormsBasic = lazy(() => import('./Pages/Forms/Basic'))
const FormsPickers = lazy(() => import('./Pages/Forms/Pickers'))
const FormsSelect = lazy(() => import('./Pages/Forms/Select'))
const FormsValidation = lazy(() => import('./Pages/Forms/Validation'))
const FormsWizard = lazy(() => import('./Pages/Forms/Wizard'))
const FormsFileUploads = lazy(() => import('./Pages/Forms/FileUploads'))
const FormsTextEditors = lazy(() => import('./Pages/Forms/TextEditors'))
const FormsRangeSlider = lazy(() => import('./Pages/Forms/RangeSlider'))
const FormsLayouts = lazy(() => import('./Pages/Forms/Layouts'))
const FormsOther = lazy(() => import('./Pages/Forms/Other'))

const InvoiceDetail = lazy(() => import('./Pages/Apps/InvoiceDetail'))
const InvoiceCreate = lazy(() => import('./Pages/Apps/InvoiceCreate'))
const Email = lazy(() => import('./Pages/Apps/Email'))
const Chat = lazy(() => import('./Pages/Apps/Chat'))
const AppCalendar = lazy(() => import('./Pages/Apps/Calendar'))
const TeamBoard = lazy(() => import('./Pages/Apps/TeamBoard'))
const Outlook = lazy(() => import('./Pages/Apps/Outlook'))
const ManageApps = lazy(() => import('./Pages/Apps/ManageApps'))

const Sortable = lazy(() => import('./Pages/Plugins/Sortable'))
const I18n = lazy(() => import('./Pages/Plugins/I18n'))
const SweetAlerts = lazy(() => import('./Pages/Plugins/SweetAlerts'))
const Clipboard = lazy(() => import('./Pages/Plugins/Clipboard'))
const Tour = lazy(() => import('./Pages/Plugins/Tour'))
const VideoPlayer = lazy(() => import('./Pages/Plugins/VideoPlayer'))

const AUTH_ROUTES: Record<string, ComponentType> = {
  '/auth/sign-in': SignIn,
  '/auth/sign-up': SignUp,
  '/auth/reset-password': ResetPassword,
  '/auth/two-factor': TwoFactor,
  '/auth/lock-screen': LockScreen,
  '/auth/login-pin': LoginPin,
  '/auth/delete-account': DeleteAccount,
}

const ERROR_ROUTES: Record<string, ComponentType> = {
  '/error/400': Error400,
  '/error/404': Error404,
  '/error/maintenance': Maintenance,
}

const INNER_ROUTES: Record<string, ComponentType> = {
  '/charts/line-area': LineArea,
  '/charts/bar-column': BarColumn,
  '/charts/distributions': Distributions,
  '/charts/comparisons': Comparisons,
  '/charts/heatmap': Heatmap,
  '/charts/sparklines': Sparklines,
  '/tables/static': StaticTables,
  '/tables/custom': CustomTables,
  '/tables/advanced': AdvancedTable,
  '/layouts/scrollable': Scrollable,
  '/layouts/compact': Compact,
  '/layouts/boxed': Boxed,
  '/layouts/horizontal': Horizontal,
  '/layouts/preloader': Preloader,
  '/layouts/sidebar-dark': SidebarDark,
  '/layouts/sidebar-gray': SidebarGray,
  '/layouts/sidebar-hover': SidebarHover,
  '/layouts/topbar-dark': TopbarDark,
  '/layouts/topbar-gray': TopbarGray,
  '/pages/faq': Faq,
  '/pages/pricing': Pricing,
  '/pages/empty': EmptyPage,
  '/pages/timeline': ContentTimeline,
  '/pages/search-results': SearchResults,
  '/pages/regions': Regions,
  '/plugins/sortable': Sortable,
  '/plugins/i18n': I18n,
  '/plugins/alerts': SweetAlerts,
  '/plugins/clipboard': Clipboard,
  '/plugins/tour': Tour,
  '/plugins/video-player': VideoPlayer,
  '/apps/email/inbox': Email,
  '/apps/email/inbox/1': Email,
  '/apps/email/compose': Email,
  '/apps/chat': Chat,
  '/apps/calendar': AppCalendar,
  '/apps/team-board': TeamBoard,
  '/apps/outlook': Outlook,
  '/apps/manage': ManageApps,
  '/apps/invoices/new': InvoiceCreate,
  '/components': ComponentGalleryIndex,
  '/components/grid': ComponentsGrid,
  '/components/nav': ComponentsListGroup,
  '/components/typography': ComponentsTypography,
  '/components/colors': ComponentsColors,
  '/components/icons': ComponentsIcons,
  '/components/utilities': ComponentsUtilities,
  '/forms/basic': FormsBasic,
  '/forms/pickers': FormsPickers,
  '/forms/select': FormsSelect,
  '/forms/validation': FormsValidation,
  '/forms/wizard': FormsWizard,
  '/forms/file-uploads': FormsFileUploads,
  '/forms/text-editors': FormsTextEditors,
  '/forms/range-slider': FormsRangeSlider,
  '/forms/layouts': FormsLayouts,
  '/forms/other': FormsOther,
}

const EXPLICIT = new Set<string>(['/', '/apps/invoices/INV-2010', ...Object.keys(INNER_ROUTES)])
const CONFIGURED = new Set<string>([...listRoutePaths])

const shellRoutes = NAV_ROUTES.filter(
  (p) =>
    !EXPLICIT.has(p) &&
    !CONFIGURED.has(p) &&
    !AUTH_ROUTES[p] &&
    !ERROR_ROUTES[p] &&
    !p.startsWith('/components/'), // handled by the dynamic /components/:slug gallery route
)

function PageFallback() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center">
      <Loader />
    </div>
  )
}

export default function App() {
  return (
    <ThemeSettingsProvider>
      <Suspense fallback={<PageFallback />}>
        <Routes>
          {Object.entries(AUTH_ROUTES).map(([path, Component]) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
          {Object.entries(ERROR_ROUTES).map(([path, Component]) => (
            <Route key={path} path={path} element={<Component />} />
          ))}

          <Route element={<InnerTemplate />}>
            <Route path="/" element={<DefaultDashboard />} />
            {Object.entries(INNER_ROUTES).map(([path, Component]) => (
              <Route key={path} path={path} element={<Component />} />
            ))}
            {listRoutes}
            <Route path="/apps/invoices/:id" element={<InvoiceDetail />} />
            <Route path="/components/:slug" element={<ComponentGalleryDetail />} />
            {shellRoutes.map((path) => (
              <Route key={path} path={path} element={<ComingSoon />} />
            ))}
          </Route>

          <Route path="*" element={<Error404 />} />
        </Routes>
      </Suspense>
    </ThemeSettingsProvider>
  )
}
