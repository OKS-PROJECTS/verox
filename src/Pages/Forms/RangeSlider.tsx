import { Card, CardBody, CardHeader, RangeField } from 'oks-ui'
import { PageHeader } from '../../Components/ui'

export default function FormsRangeSlider() {
  return (
    <div>
      <PageHeader
        title="Range Slider"
        subtitle="Single-value and range sliders, with marks."
        crumbs={[{ label: 'Verox', to: '/' }, { label: 'Forms' }, { label: 'Range Slider' }]}
      />
      <Card>
        <CardHeader>
          <h3 className="text-[14px] font-medium" style={{ color: 'var(--app-fg)' }}>
            Campaign budget
          </h3>
        </CardHeader>
        <CardBody className="flex flex-col gap-8 pt-0">
          <RangeField name="budget" label="Monthly budget" min={0} max={5000} step={50} defaultValue={1200} showValue formatValue={(n) => `$${n}`} />
          <RangeField
            name="ageRange"
            label="Audience age range"
            selection="range"
            min={13}
            max={80}
            defaultValue={{ min: 24, max: 45 }}
            showValue
            marks={[13, 45, 80]}
          />
        </CardBody>
      </Card>
    </div>
  )
}
