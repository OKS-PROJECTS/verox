import { SwitchField } from 'oks-ui'
import { useThemeSettings } from '../../lib/ThemeSettingsContext'
import { LayoutOptionPage } from './LayoutOptionPage'

export default function Boxed() {
  const { boxed, update } = useThemeSettings()
  return (
    <LayoutOptionPage
      title="Boxed"
      description="Constrain page content to a centred max-width instead of stretching edge to edge."
      crumbs={[{ label: 'Verox', to: '/' }, { label: 'Layout Options' }, { label: 'Boxed' }]}
    >
      <SwitchField
        label="Boxed layout"
        description="Widen your browser to see the effect on large screens."
        checked={boxed}
        onChange={(checked) => update('boxed', checked)}
      />
    </LayoutOptionPage>
  )
}
