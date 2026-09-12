import { Card, CardBody, CardHeader, Form, FormFieldSet } from 'oks-ui'
import { PageHeader } from '../../Components/ui'

export default function FormsPickers() {
  return (
    <div>
      <PageHeader
        title="Pickers"
        subtitle="Date, date-range and time-flavoured inputs."
        crumbs={[{ label: 'Verox', to: '/' }, { label: 'Forms' }, { label: 'Pickers' }]}
      />
      <Card>
        <CardHeader>
          <h3 className="text-[14px] font-medium" style={{ color: 'var(--app-fg)' }}>
            Book a resource
          </h3>
        </CardHeader>
        <CardBody className="pt-0">
          <Form onSubmit={() => {}} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <FormFieldSet type="datepicker" name="singleDate" label="Meeting date" showPresets />
            <FormFieldSet type="datepicker" name="range" label="Booking window" range />
            <FormFieldSet type="datepicker" name="deadline" label="Deadline" withTime displayFormat="pretty" />
            <FormFieldSet type="datepicker" name="blocked" label="Next available" clearable />
          </Form>
        </CardBody>
      </Card>
    </div>
  )
}
