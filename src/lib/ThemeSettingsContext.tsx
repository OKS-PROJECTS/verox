/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'

export type ColorMode = 'light' | 'dark'
export type ChromeColor = 'light' | 'dark' | 'gray'
export type Density = 'comfortable' | 'compact'
export type HeaderPosition = 'fixed' | 'scrollable'
export type SidenavSize = 'default' | 'compact' | 'hover'

export interface ThemeSettings {
  mode: ColorMode
  menuColor: ChromeColor
  topbarColor: ChromeColor
  boxed: boolean
  density: Density
  headerPosition: HeaderPosition
  sidenavSize: SidenavSize
}

const DEFAULTS: ThemeSettings = {
  mode: 'light',
  menuColor: 'light',
  topbarColor: 'light',
  boxed: false,
  density: 'comfortable',
  headerPosition: 'fixed',
  sidenavSize: 'default',
}

const STORAGE_KEY = 'verox:theme-settings'

interface ThemeSettingsContextValue extends ThemeSettings {
  update: <K extends keyof ThemeSettings>(key: K, value: ThemeSettings[K]) => void
  toggleMode: () => void
  reset: () => void
}

const ThemeSettingsContext = createContext<ThemeSettingsContextValue | null>(null)

function load(): ThemeSettings {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return DEFAULTS
    return { ...DEFAULTS, ...(JSON.parse(raw) as Partial<ThemeSettings>) }
  } catch {
    return DEFAULTS
  }
}

export function ThemeSettingsProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useState<ThemeSettings>(load)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(settings))
    } catch {
      /* private-browsing / storage disabled — settings just won't persist */
    }
    const root = document.documentElement
    root.setAttribute('data-theme', settings.mode)
    root.setAttribute('data-menu-color', settings.menuColor)
    root.setAttribute('data-topbar-color', settings.topbarColor)
    root.setAttribute('data-boxed', String(settings.boxed))
    root.setAttribute('data-density', settings.density)
    root.setAttribute('data-header-position', settings.headerPosition)
    root.setAttribute('data-sidenav-size', settings.sidenavSize)
  }, [settings])

  const value = useMemo<ThemeSettingsContextValue>(
    () => ({
      ...settings,
      update: (key, val) => setSettings((s) => ({ ...s, [key]: val })),
      toggleMode: () => setSettings((s) => ({ ...s, mode: s.mode === 'light' ? 'dark' : 'light' })),
      reset: () => setSettings(DEFAULTS),
    }),
    [settings],
  )

  return <ThemeSettingsContext.Provider value={value}>{children}</ThemeSettingsContext.Provider>
}

export function useThemeSettings() {
  const ctx = useContext(ThemeSettingsContext)
  if (!ctx) throw new Error('useThemeSettings must be used within ThemeSettingsProvider')
  return ctx
}
