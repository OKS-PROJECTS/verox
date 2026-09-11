import { Alert, Button, Form, FormFieldSet, toast } from 'oks-ui'
import { useNavigate } from 'react-router-dom'
import { AuthLayout } from './AuthLayout'

export default function DeleteAccount() {
  const navigate = useNavigate()
  return (
    <AuthLayout title="Delete your account" subtitle="This permanently removes your workspace and all its data.">
      <Alert color="danger" variant="soft" title="This can't be undone" description="All boards, invoices and files will be permanently deleted." className="mb-4" />
      <Form
        className="flex flex-col gap-4"
        onSubmit={() => {
          toast.success('Account deleted (demo only)')
          navigate('/auth/sign-in')
        }}
      >
        <FormFieldSet type="text" name="confirm" label='Type "DELETE" to confirm' placeholder="DELETE" validation={{ rules: { required: true } }} />
        <Button type="submit" color="danger" fullWidth>
          Permanently delete account
        </Button>
      </Form>
    </AuthLayout>
  )
}
