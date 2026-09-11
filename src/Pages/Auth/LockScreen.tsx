import { Avatar, Button, Form, FormFieldSet, toast } from 'oks-ui'
import { useNavigate } from 'react-router-dom'
import { avatarUrl } from '../../lib/avatarUrl'
import { AuthLayout } from './AuthLayout'

export default function LockScreen() {
  const navigate = useNavigate()
  return (
    <AuthLayout title="Screen locked" subtitle="Enter your password to keep going.">
      <div className="mb-4 flex flex-col items-center gap-2">
        <Avatar src={avatarUrl('david-dev')} name="David Dev" size={64} />
        <span className="text-[14px] font-semibold" style={{ color: 'var(--app-fg-strong)' }}>
          David Dev
        </span>
      </div>
      <Form
        className="flex flex-col gap-4"
        onSubmit={() => {
          toast.success('Unlocked')
          navigate('/')
        }}
      >
        <FormFieldSet type="password" name="password" label="Password" placeholder="••••••••" validation={{ rules: { required: true } }} />
        <Button type="submit" color="primary" fullWidth>
          Unlock
        </Button>
      </Form>
    </AuthLayout>
  )
}
