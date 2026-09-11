import { Button, Checkbox, Form, FormFieldSet, toast } from 'oks-ui'
import { useNavigate, Link } from 'react-router-dom'
import { AuthLayout } from './AuthLayout'

export default function SignIn() {
  const navigate = useNavigate()
  return (
    <AuthLayout title="Welcome back" subtitle="Sign in to your Verox account to continue.">
      <Form
        className="flex flex-col gap-4"
        onSubmit={() => {
          toast.success('Signed in')
          navigate('/')
        }}
      >
        <FormFieldSet type="email" name="email" label="Email address" placeholder="you@example.com" validation={{ rules: { required: true, email: true } }} />
        <FormFieldSet type="password" name="password" label="Password" placeholder="••••••••" validation={{ rules: { required: true } }} />
        <div className="flex items-center justify-between">
          <Checkbox name="remember" label="Keep me signed in" />
          <Link to="/auth/reset-password" className="text-[13px] font-medium" style={{ color: 'var(--app-primary)' }}>
            Forgot password?
          </Link>
        </div>
        <Button type="submit" color="primary" fullWidth>
          Sign in
        </Button>
        <p className="text-center text-[13px]" style={{ color: 'var(--app-fg-muted)' }}>
          New here?{' '}
          <Link to="/auth/sign-up" className="font-semibold" style={{ color: 'var(--app-primary)' }}>
            Create an account
          </Link>
        </p>
      </Form>
    </AuthLayout>
  )
}
