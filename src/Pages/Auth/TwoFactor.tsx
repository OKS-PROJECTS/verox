import { Button, Form, FormFieldSet, toast } from 'oks-ui'
import { useNavigate } from 'react-router-dom'
import { AuthLayout } from './AuthLayout'

export default function TwoFactor() {
  const navigate = useNavigate()
  return (
    <AuthLayout title="Two-factor verification" subtitle="Enter the 6-digit code from your authenticator app.">
      <Form
        className="flex flex-col gap-5"
        onSubmit={() => {
          toast.success('Verified')
          navigate('/')
        }}
      >
        <FormFieldSet type="otp" name="otp" length={6} label="Verification code" validation={{ rules: { required: true } }} />
        <Button type="submit" color="primary" fullWidth>
          Verify
        </Button>
        <p className="text-center text-[13px]" style={{ color: 'var(--app-fg-muted)' }}>
          Didn&apos;t get a code? <span className="font-semibold" style={{ color: 'var(--app-primary)' }}>Resend</span>
        </p>
      </Form>
    </AuthLayout>
  )
}
