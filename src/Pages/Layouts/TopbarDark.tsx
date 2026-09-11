import { RadioGroupField } from 'oks-ui'
import { useThemeSettings } from '../../lib/ThemeSettingsContext'
import { LayoutOptionPage } from './LayoutOptionPage'

export default function TopbarDark() {
  const { topbarColor, update } = useThemeSettings()
  return (
    <LayoutOptionPage
      title="Dark Topbar"
      description="Force the header to a dark palette, independent of the overall color mode."
      crumbs={[{ label: 'Verox', to: '/' }, { label: 'Topbar' }, { label: 'Dark Topbar' }]}
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
