import { Ban } from 'lucide-react'
import { ErrorLayout } from './ErrorLayout'

export default function Error400() {
  return (
    <ErrorLayout
      code="400"
      title="Bad request"
      description="The request couldn't be understood. Double-check the URL and try again."
      icon={<Ban size={32} />}
    />
  )
}
