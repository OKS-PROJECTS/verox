import { RadioGroupField } from 'oks-ui'
import { useThemeSettings } from '../../lib/ThemeSettingsContext'
import { LayoutOptionPage } from './LayoutOptionPage'

export default function SidebarGray() {
  const { menuColor, update } = useThemeSettings()
  return (
    <LayoutOptionPage
      title="Gray Menu"
      description="A neutral gray sidebar, between the light and dark treatments."
      crumbs={[{ label: 'Verox', to: '/' }, { label: 'Sidebars' }, { label: 'Gray Menu' }]}
    >
      <RadioGroupField
        label="Menu color"
        value={menuColor}
        onChange={(v) => update('menuColor', v as 'light' | 'dark' | 'gray')}
        options={[
          { label: 'Light', value: 'light' },
          { label: 'Dark', value: 'dark' },
          { label: 'Gray', value: 'gray' },
        ]}
      />
    </LayoutOptionPage>
  )
}
