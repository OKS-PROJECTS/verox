import { Card, CardBody, CardHeader, Form, FormFieldSet } from 'oks-ui'
import { PageHeader } from '../../Components/ui'

const COUNTRIES = ['United States', 'United Kingdom', 'India', 'Canada', 'Australia', 'Germany'].map((c) => ({ label: c, value: c }))
const TAGS = ['Design', 'Engineering', 'Marketing', 'Sales', 'Support'].map((t) => ({ label: t, value: t }))

export default function FormsSelect() {
  return (
    <div>
      <PageHeader
        title="Select"
        subtitle="Single and multi-select, native and custom."
        crumbs={[{ label: 'Verox', to: '/' }, { label: 'Forms' }, { label: 'Select' }]}
      />
      <Card>
        <CardHeader>
          <h3 className="text-[14px] font-medium" style={{ color: 'var(--app-fg)' }}>
            Project settings
          </h3>
        </CardHeader>
        <CardBody className="pt-0">
          <Form onSubmit={() => {}} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <FormFieldSet type="select" name="country" label="Country" options={COUNTRIES} placeholder="Select a country" />
            <FormFieldSet type="select" name="countryNative" label="Country (native)" options={COUNTRIES} native />
            <FormFieldSet type="select" name="tags" label="Team tags" options={TAGS} multiple colSpan={2} />
          </Form>
        </CardBody>
      </Card>
    </div>
  )
}
