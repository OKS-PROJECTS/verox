import { Card, CardBody, CardHeader, Form, OtpField, PhoneField } from 'oks-ui'
import { PageHeader } from '../../Components/ui'

export default function FormsOther() {
  return (
    <div>
      <PageHeader
        title="Other Plugins"
        subtitle="OTP codes and international phone numbers."
        crumbs={[{ label: 'Verox', to: '/' }, { label: 'Forms' }, { label: 'Other Plugins' }]}
      />
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <h3 className="text-[14px] font-medium" style={{ color: 'var(--app-fg)' }}>
              Verification code
            </h3>
          </CardHeader>
          <CardBody className="pt-0">
            <Form onSubmit={() => {}}>
              <OtpField name="code" label="6-digit code" length={6} />
            </Form>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <h3 className="text-[14px] font-medium" style={{ color: 'var(--app-fg)' }}>
              Phone number
            </h3>
          </CardHeader>
          <CardBody className="pt-0">
            <Form onSubmit={() => {}}>
              <PhoneField name="phone" label="Phone number" defaultCountryCode="US" />
            </Form>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}
