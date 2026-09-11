import { Button, Form, FormFieldSet, toast } from 'oks-ui'
import { useNavigate } from 'react-router-dom'
import { AuthLayout } from './AuthLayout'

export default function LoginPin() {
  const navigate = useNavigate()
  return (
    <AuthLayout title="Login with PIN" subtitle="Enter your 4-digit PIN to continue.">
      <Form
        className="flex flex-col gap-5"
        onSubmit={() => {
          toast.success('Signed in')
          navigate('/')
        }}
      >
        <FormFieldSet type="otp" name="pin" length={4} format="digits" label="PIN" validation={{ rules: { required: true } }} />
        <Button type="submit" color="primary" fullWidth>
          Continue
        </Button>
      </Form>
    </AuthLayout>
  )
}
