import { Card, CardBody, CardHeader, Form, FormFieldSet } from 'oks-ui'
import { PageHeader } from '../../Components/ui'

export default function FormsLayouts() {
  return (
    <div>
      <PageHeader
        title="Layouts"
        subtitle="Label placement variants — top, left, right and floating."
        crumbs={[{ label: 'Verox', to: '/' }, { label: 'Forms' }, { label: 'Layouts' }]}
      />
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <h3 className="text-[14px] font-semibold" style={{ color: 'var(--app-fg-strong)' }}>
              Top label (default)
            </h3>
          </CardHeader>
          <CardBody className="flex flex-col gap-4 pt-0">
            <Form onSubmit={() => {}} className="flex flex-col gap-4">
              <FormFieldSet type="text" name="a1" label="Full name" labelPlacement="top" placeholder="Jordan Blake" />
              <FormFieldSet type="email" name="a2" label="Email" labelPlacement="top" placeholder="jordan@company.com" />
            </Form>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <h3 className="text-[14px] font-semibold" style={{ color: 'var(--app-fg-strong)' }}>
              Left label
            </h3>
          </CardHeader>
          <CardBody className="flex flex-col gap-4 pt-0">
            <Form onSubmit={() => {}} className="flex flex-col gap-4">
              <FormFieldSet type="text" name="b1" label="Full name" labelPlacement="left" placeholder="Jordan Blake" />
              <FormFieldSet type="email" name="b2" label="Email" labelPlacement="left" placeholder="jordan@company.com" />
            </Form>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <h3 className="text-[14px] font-semibold" style={{ color: 'var(--app-fg-strong)' }}>
              Floating label
            </h3>
          </CardHeader>
          <CardBody className="flex flex-col gap-4 pt-0">
            <Form onSubmit={() => {}} className="flex flex-col gap-4">
              <FormFieldSet type="text" name="c1" label="Full name" labelPlacement="floating" placeholder=" " />
              <FormFieldSet type="email" name="c2" label="Email" labelPlacement="floating" placeholder=" " />
            </Form>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <h3 className="text-[14px] font-semibold" style={{ color: 'var(--app-fg-strong)' }}>
              Inline / two-column
            </h3>
          </CardHeader>
          <CardBody className="pt-0">
            <Form onSubmit={() => {}} className="grid grid-cols-2 gap-4">
              <FormFieldSet type="text" name="d1" label="First name" placeholder="Jordan" />
              <FormFieldSet type="text" name="d2" label="Last name" placeholder="Blake" />
            </Form>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}
