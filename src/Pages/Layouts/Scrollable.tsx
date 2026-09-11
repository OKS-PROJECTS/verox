import { RadioGroupField } from 'oks-ui'
import { useThemeSettings } from '../../lib/ThemeSettingsContext'
import { LayoutOptionPage } from './LayoutOptionPage'

export default function Scrollable() {
  const { headerPosition, update } = useThemeSettings()
  return (
    <LayoutOptionPage
      title="Scrollable"
      description="Let the header scroll away with the page instead of staying fixed to the top."
      crumbs={[{ label: 'Verox', to: '/' }, { label: 'Layout Options' }, { label: 'Scrollable' }]}
    >
      <RadioGroupField
        label="Header position"
        value={headerPosition}
        onChange={(v) => update('headerPosition', v as 'fixed' | 'scrollable')}
        options={[
          { label: 'Fixed', value: 'fixed' },
          { label: 'Scrollable', value: 'scrollable' },
        ]}
      />
    </LayoutOptionPage>
  )
}
