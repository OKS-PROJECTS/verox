import { Wrench } from 'lucide-react'
import { ErrorLayout } from './ErrorLayout'

export default function Maintenance() {
  return (
    <ErrorLayout
      title="Down for maintenance"
      description="We're making some improvements. Verox will be back online shortly."
      icon={<Wrench size={32} />}
    />
  )
}
