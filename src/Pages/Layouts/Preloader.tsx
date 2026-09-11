import { useState } from 'react'
import { Button, Card, CardBody, Loader } from 'oks-ui'
import { PageHeader } from '../../Components/ui'

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(false)

  const trigger = () => {
    setIsLoading(true)
    setTimeout(() => setIsLoading(false), 1600)
  }

  return (
    <div>
      <PageHeader
        title="Preloader"
        subtitle="The full-page loading state shown while the app boots or a route lazy-loads."
        crumbs={[{ label: 'Verox', to: '/' }, { label: 'Layout Options' }, { label: 'Preloader' }]}
      />
      <Card>
        <CardBody className="flex flex-col items-center gap-4 py-10">
          {isLoading ? (
            <Loader size={40} label="Loading" />
          ) : (
            <Button color="primary" onPress={trigger}>
              Trigger preloader
            </Button>
          )}
        </CardBody>
      </Card>
    </div>
  )
}
