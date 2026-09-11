import { Card, CardBody, CardHeader, Form, FormFieldSet } from 'oks-ui'
import { PageHeader } from '../../Components/ui'

export default function FormsBasic() {
  return (
    <div>
      <PageHeader
        title="Basic Elements"
        subtitle="Everyday field types, together in one form."
        crumbs={[{ label: 'Verox', to: '/' }, { label: 'Forms' }, { label: 'Basic Elements' }]}
      />
      <Card>
        <CardHeader>
          <h3 className="text-[14px] font-semibold" style={{ color: 'var(--app-fg-strong)' }}>
            Team member
          </h3>
        </CardHeader>
        <CardBody className="pt-0">
          <Form onSubmit={() => {}} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <FormFieldSet type="text" name="firstName" label="First name" placeholder="Jordan" />
            <FormFieldSet type="text" name="lastName" label="Last name" placeholder="Blake" />
            <FormFieldSet type="email" name="email" label="Email address" placeholder="jordan@company.com" />
            <FormFieldSet type="text" name="role" label="Role" placeholder="Product Designer" />
            <FormFieldSet type="url" name="website" label="Website" placeholder="https://" />
            <FormFieldSet type="number" name="seats" label="Seats" placeholder="1" />
            <FormFieldSet type="color" name="accentColor" label="Accent color" />
            <FormFieldSet type="search" name="lookup" label="Search directory" placeholder="Find a teammate…" />
            <FormFieldSet type="textarea" name="bio" label="Bio" placeholder="A short bio…" colSpan={2} />
          </Form>
        </CardBody>
      </Card>
    </div>
  )
}
