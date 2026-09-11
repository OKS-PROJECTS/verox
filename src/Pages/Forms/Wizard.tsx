import { Card, CardBody, defineStep, FormFieldSet, SteppedForm, toast } from 'oks-ui'
import { PageHeader } from '../../Components/ui'

const steps = [
  defineStep({
    key: 'account',
    title: 'Account',
    description: 'Basic account details',
    fields: ['company', 'email'],
    content: (
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <FormFieldSet type="text" name="company" label="Company name" validation={{ rules: { required: true } }} />
        <FormFieldSet type="email" name="email" label="Work email" validation={{ rules: { required: true, email: true } }} />
      </div>
    ),
  }),
  defineStep({
    key: 'plan',
    title: 'Plan',
    description: 'Choose a plan',
    fields: ['plan'],
    content: (
      <FormFieldSet
        type="radio"
        name="plan"
        label="Plan"
        validation={{ rules: { required: true } }}
        options={[
          { label: 'Starter', value: 'starter' },
          { label: 'Growth', value: 'growth' },
          { label: 'Scale', value: 'scale' },
        ]}
      />
    ),
  }),
  defineStep({
    key: 'review',
    title: 'Review',
    description: 'Confirm and finish',
    content: (
      <p className="text-[13px]" style={{ color: 'var(--app-fg-muted)' }}>
        Review your details, then submit to finish setting up your workspace.
      </p>
    ),
  }),
]

export default function FormsWizard() {
  return (
    <div>
      <PageHeader
        title="Wizard"
        subtitle="A multi-step form built from SteppedForm."
        crumbs={[{ label: 'Verox', to: '/' }, { label: 'Forms' }, { label: 'Wizard' }]}
      />
      <Card>
        <CardBody>
          <SteppedForm steps={steps} headerVariant="progress" onSubmit={() => { toast.success('Workspace created') }} />
        </CardBody>
      </Card>
    </div>
  )
}
