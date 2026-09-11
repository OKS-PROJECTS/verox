/* eslint-disable react-refresh/only-export-components */
import { lazy } from 'react'
import { Route } from 'react-router-dom'
import { LIST_CONFIGS } from './lists'

const ListPage = lazy(() => import('../Components/archetypes/ListPage').then((m) => ({ default: m.ListPage })))

export const listRoutePaths = Object.keys(LIST_CONFIGS)

export const listRoutes = listRoutePaths.map((path) => (
  <Route key={path} path={path} element={<ListPage config={LIST_CONFIGS[path]} />} />
))
