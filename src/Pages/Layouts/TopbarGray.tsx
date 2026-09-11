import { RadioGroupField } from 'oks-ui'
import { useThemeSettings } from '../../lib/ThemeSettingsContext'
import { LayoutOptionPage } from './LayoutOptionPage'

export default function TopbarGray() {
  const { topbarColor, update } = useThemeSettings()
  return (
    <LayoutOptionPage
      title="Gray Topbar"
      description="A neutral gray header, between the light and dark treatments."
      crumbs={[{ label: 'Verox', to: '/' }, { label: 'Topbar' }, { label: 'Gray Topbar' }]}
    >
      <RadioGroupField
        label="Topbar color"
        value={topbarColor}
        onChange={(v) => update('topbarColor', v as 'light' | 'dark' | 'gray')}
        options={[
          { label: 'Light', value: 'light' },
          { label: 'Dark', value: 'dark' },
          { label: 'Gray', value: 'gray' },
        ]}
      />
    </LayoutOptionPage>
  )
}
