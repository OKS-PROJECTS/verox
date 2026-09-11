import { useState } from 'react'
import { Alert, Button, Card, CardBody, CardHeader, Form, FormFieldSet, toast } from 'oks-ui'
import { PageHeader } from '../../Components/ui'

export default function FormsValidation() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <div>
      <PageHeader
        title="Validation"
        subtitle="oks-ui's own VALIDATION_RULES — required, email, pattern and match-field checks, shown inline."
        crumbs={[{ label: 'Verox', to: '/' }, { label: 'Forms' }, { label: 'Validation' }]}
      />
      <Card>
        <CardHeader>
          <h3 className="text-[14px] font-semibold" style={{ color: 'var(--app-fg-strong)' }}>
            Create account
          </h3>
        </CardHeader>
        <CardBody className="pt-0">
          {submitted && <Alert className="mb-4" color="success" variant="soft" title="All fields valid" description="The form passed every validation rule." />}
          <Form
            validationMode="blur"
            className="grid grid-cols-1 gap-4 sm:grid-cols-2"
            onSubmit={() => {
              setSubmitted(true)
              toast.success('Account created')
            }}
            onError={() => setSubmitted(false)}
          >
            <FormFieldSet type="text" name="username" label="Username" placeholder="jordan-b" validation={{ rules: { required: true, minLength: 3, alphanumeric: true } }} />
            <FormFieldSet type="email" name="email" label="Email address" placeholder="you@example.com" validation={{ rules: { required: true, email: true } }} />
            <FormFieldSet type="password" name="password" label="Password" validation={{ rules: { required: true, strongPassword: {} } }} />
            <FormFieldSet type="password" name="confirmPassword" label="Confirm password" validation={{ rules: { required: true, matchField: 'password' } }} />
            <div className="sm:col-span-2">
              <Button type="submit" color="primary">
                Create account
              </Button>
            </div>
          </Form>
        </CardBody>
      </Card>
    </div>
  )
}
