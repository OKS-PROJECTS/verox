import { EmptyState, Button } from 'oks-ui'
import { Construction } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function ComingSoon() {
  const navigate = useNavigate()
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <EmptyState
        icon={<Construction size={32} />}
        title="This page is being built"
        description="This route isn't wired up to a real screen yet."
        size="lg"
        actions={
          <Button color="primary" onPress={() => navigate('/')}>
            Back to dashboard
          </Button>
        }
      />
    </div>
  )
}
