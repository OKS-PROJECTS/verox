import { Button, Form, FormFieldSet, toast } from 'oks-ui'
import { Link } from 'react-router-dom'
import { AuthLayout } from './AuthLayout'

export default function ResetPassword() {
  return (
    <AuthLayout title="Reset your password" subtitle="Enter your email and we'll send you a reset link.">
      <Form className="flex flex-col gap-4" onSubmit={() => toast.success('Reset link sent')}>
        <FormFieldSet type="email" name="email" label="Email address" placeholder="you@example.com" validation={{ rules: { required: true, email: true } }} />
        <Button type="submit" color="primary" fullWidth>
          Send reset link
        </Button>
        <p className="text-center text-[13px]" style={{ color: 'var(--app-fg-muted)' }}>
          Remembered it?{' '}
          <Link to="/auth/sign-in" className="font-semibold" style={{ color: 'var(--app-primary)' }}>
            Back to sign in
          </Link>
        </p>
      </Form>
    </AuthLayout>
  )
}
