import { FileQuestion } from 'lucide-react'
import { ErrorLayout } from './ErrorLayout'

export default function Error404() {
  return (
    <ErrorLayout
      code="404"
      title="Page not found"
      description="The page you're looking for doesn't exist or has been moved."
      icon={<FileQuestion size={32} />}
    />
  )
}
