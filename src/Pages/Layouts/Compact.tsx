import { RadioGroupField } from 'oks-ui'
import { useThemeSettings } from '../../lib/ThemeSettingsContext'
import { LayoutOptionPage } from './LayoutOptionPage'

export default function Compact() {
  const { density, update } = useThemeSettings()
  return (
    <LayoutOptionPage
      title="Compact"
      description="Tighten card padding and the sidebar width for a denser layout."
      crumbs={[{ label: 'Verox', to: '/' }, { label: 'Layout Options' }, { label: 'Compact' }]}
    >
      <RadioGroupField
        label="Density"
        value={density}
        onChange={(v) => update('density', v as 'comfortable' | 'compact')}
        options={[
          { label: 'Comfortable', value: 'comfortable' },
          { label: 'Compact', value: 'compact' },
        ]}
      />
    </LayoutOptionPage>
  )
}
