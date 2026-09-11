import { Button, Form, FormFieldSet, toast } from 'oks-ui'
import { useNavigate, Link } from 'react-router-dom'
import { AuthLayout } from './AuthLayout'

export default function SignUp() {
  const navigate = useNavigate()
  return (
    <AuthLayout title="Create your account" subtitle="Start your free Verox workspace in under a minute.">
      <Form
        className="flex flex-col gap-4"
        onSubmit={() => {
          toast.success('Account created')
          navigate('/')
        }}
      >
        <FormFieldSet type="text" name="name" label="Full name" placeholder="Jordan Blake" validation={{ rules: { required: true } }} />
        <FormFieldSet type="email" name="email" label="Email address" placeholder="you@example.com" validation={{ rules: { required: true, email: true } }} />
        <FormFieldSet type="password" name="password" label="Password" placeholder="Create a password" validation={{ rules: { required: true, strongPassword: true } }} />
        <Button type="submit" color="primary" fullWidth>
          Create account
        </Button>
        <p className="text-center text-[13px]" style={{ color: 'var(--app-fg-muted)' }}>
          Already have an account?{' '}
          <Link to="/auth/sign-in" className="font-semibold" style={{ color: 'var(--app-primary)' }}>
            Sign in
          </Link>
        </p>
      </Form>
    </AuthLayout>
  )
}
