import { RadioGroupField } from 'oks-ui'
import { useThemeSettings } from '../../lib/ThemeSettingsContext'
import { LayoutOptionPage } from './LayoutOptionPage'

export default function SidebarHover() {
  const { sidenavSize, update } = useThemeSettings()
  return (
    <LayoutOptionPage
      title="On-Hover Menu"
      description="The sidebar rests as a narrow icon rail and expands to full width on hover."
      crumbs={[{ label: 'Verox', to: '/' }, { label: 'Sidebars' }, { label: 'On Hover Menu' }]}
      note="Hover over the sidebar on a desktop viewport to see it expand."
    >
      <RadioGroupField
        label="Sidenav size"
        value={sidenavSize}
        onChange={(v) => update('sidenavSize', v as 'default' | 'compact' | 'hover')}
        options={[
          { label: 'Default', value: 'default' },
          { label: 'Compact (icon rail)', value: 'compact' },
          { label: 'On-hover', value: 'hover' },
        ]}
      />
    </LayoutOptionPage>
  )
}
