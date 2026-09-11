import { RadioGroupField } from 'oks-ui'
import { useThemeSettings } from '../../lib/ThemeSettingsContext'
import { LayoutOptionPage } from './LayoutOptionPage'

export default function SidebarDark() {
  const { menuColor, update } = useThemeSettings()
  return (
    <LayoutOptionPage
      title="Dark Menu"
      description="Force the sidebar to a dark palette, independent of the overall color mode."
      crumbs={[{ label: 'Verox', to: '/' }, { label: 'Sidebars' }, { label: 'Dark Menu' }]}
      note="This is a live toggle — it's also reachable from the gear icon in the header (Theme settings → Menu color)."
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
