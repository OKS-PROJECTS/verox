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

const EXPLICIT = new Set<string>(['/'])
const CONFIGURED = new Set<string>([...listRoutePaths])

const shellRoutes = NAV_ROUTES.filter(
  (p) => !EXPLICIT.has(p) && !CONFIGURED.has(p) && !AUTH_ROUTES[p] && !ERROR_ROUTES[p],
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
            {listRoutes}
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
