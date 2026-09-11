import { Button, Divider, Drawer, RadioGroupField, SegmentedControl, SwitchField } from 'oks-ui'
import { useThemeSettings } from '../../lib/ThemeSettingsContext'

interface ThemeSettingsDrawerProps {
  isOpen: boolean
  onClose: () => void
}

export function ThemeSettingsDrawer({ isOpen, onClose }: ThemeSettingsDrawerProps) {
  const settings = useThemeSettings()

  return (
    <Drawer isOpen={isOpen} onClose={onClose} position="right" title="Theme settings" width="xs">
      <div className="flex flex-col gap-6 pb-4">
        <p className="text-sm" style={{ color: 'var(--app-fg-muted)' }}>
          Live theme customizer — every option here restyles the whole app, right
          now. Mirrors the reference template&apos;s Layout Options / Sidebars /
          Topbar demo pages, wired up for real instead of static screenshots.
        </p>

        <div>
          <div className="mb-2 text-xs font-semibold uppercase tracking-wide" style={{ color: 'var(--app-fg-subtle)' }}>
            Color mode
          </div>
          <SegmentedControl
            aria-label="Color mode"
            fullWidth
            value={settings.mode}
            onChange={(v) => settings.update('mode', v as 'light' | 'dark')}
            options={[
              { label: 'Light', value: 'light' },
              { label: 'Dark', value: 'dark' },
            ]}
          />
        </div>

        <Divider />

        <RadioGroupField
          label="Menu color"
          value={settings.menuColor}
          onChange={(v) => settings.update('menuColor', v as 'light' | 'dark' | 'gray')}
          options={[
            { label: 'Light', value: 'light' },
            { label: 'Dark', value: 'dark' },
            { label: 'Gray', value: 'gray' },
          ]}
        />

        <RadioGroupField
          label="Topbar color"
          value={settings.topbarColor}
          onChange={(v) => settings.update('topbarColor', v as 'light' | 'dark' | 'gray')}
          options={[
            { label: 'Light', value: 'light' },
            { label: 'Dark', value: 'dark' },
            { label: 'Gray', value: 'gray' },
          ]}
        />

        <RadioGroupField
          label="Sidenav size"
          value={settings.sidenavSize}
          onChange={(v) => settings.update('sidenavSize', v as 'default' | 'compact' | 'hover')}
          options={[
            { label: 'Default', value: 'default' },
            { label: 'Compact (icon rail)', value: 'compact' },
            { label: 'On-hover', value: 'hover' },
          ]}
        />

        <Divider />

        <SwitchField
          label="Boxed layout"
          description="Constrain page content to a centred max-width."
          checked={settings.boxed}
          onChange={(checked) => settings.update('boxed', checked)}
        />

        <RadioGroupField
          label="Density"
          value={settings.density}
          onChange={(v) => settings.update('density', v as 'comfortable' | 'compact')}
          options={[
            { label: 'Comfortable', value: 'comfortable' },
            { label: 'Compact', value: 'compact' },
          ]}
        />

        <RadioGroupField
          label="Header position"
          value={settings.headerPosition}
          onChange={(v) => settings.update('headerPosition', v as 'fixed' | 'scrollable')}
          options={[
            { label: 'Fixed', value: 'fixed' },
            { label: 'Scrollable', value: 'scrollable' },
          ]}
        />

        <Button variant="bordered" color="default" onPress={settings.reset}>
          Reset to defaults
        </Button>
      </div>
    </Drawer>
  )
}
