import { useState } from 'react'
import { Button, Card, CardBody, CardHeader, Modal, toast } from 'oks-ui'
import { AlertTriangle, CheckCircle2, Info, XCircle } from 'lucide-react'
import { PageHeader } from '../../Components/ui'

export default function SweetAlerts() {
  const [isDeleteOpen, setIsDeleteOpen] = useState(false)
  const [isInfoOpen, setIsInfoOpen] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)

  const confirmDelete = () => {
    setIsDeleting(true)
    window.setTimeout(() => {
      setIsDeleting(false)
      setIsDeleteOpen(false)
      toast.success('Project deleted.', { description: 'This action cannot be undone.' })
    }, 600)
  }

  return (
    <div>
      <PageHeader
        title="Alerts and confirmations"
        subtitle="Toast and modal patterns for common feedback moments."
        crumbs={[{ label: 'Verox', to: '/' }, { label: 'Pages' }, { label: 'Alerts' }]}
      />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Card>
          <CardHeader className="flex items-center gap-2">
            <CheckCircle2 size={16} style={{ color: 'var(--app-success)' }} />
            <h3 className="text-[14px] font-semibold" style={{ color: 'var(--app-fg-strong)' }}>
              Success toast
            </h3>
          </CardHeader>
          <CardBody className="pt-0">
            <p className="mb-3 text-[12.5px]" style={{ color: 'var(--app-fg-muted)' }}>
              A brief, non-blocking confirmation that an action completed.
            </p>
            <Button
              color="success"
              variant="soft"
              onPress={() => toast.success('Changes saved successfully.')}
            >
              Save changes
            </Button>
          </CardBody>
        </Card>

        <Card>
          <CardHeader className="flex items-center gap-2">
            <XCircle size={16} style={{ color: 'var(--app-danger)' }} />
            <h3 className="text-[14px] font-semibold" style={{ color: 'var(--app-fg-strong)' }}>
              Error toast
            </h3>
          </CardHeader>
          <CardBody className="pt-0">
            <p className="mb-3 text-[12.5px]" style={{ color: 'var(--app-fg-muted)' }}>
              Surfaces a failure without interrupting what the user was doing.
            </p>
            <Button
              color="danger"
              variant="soft"
              onPress={() =>
                toast.error('Something went wrong.', { description: 'Please check your connection and try again.' })
              }
            >
              Trigger sync
            </Button>
          </CardBody>
        </Card>

        <Card>
          <CardHeader className="flex items-center gap-2">
            <AlertTriangle size={16} style={{ color: 'var(--app-danger)' }} />
            <h3 className="text-[14px] font-semibold" style={{ color: 'var(--app-fg-strong)' }}>
              Confirm destructive action
            </h3>
          </CardHeader>
          <CardBody className="pt-0">
            <p className="mb-3 text-[12.5px]" style={{ color: 'var(--app-fg-muted)' }}>
              Uses an <code>alertdialog</code> role so the interruption reads correctly to assistive tech.
            </p>
            <Button color="danger" variant="bordered" onPress={() => setIsDeleteOpen(true)}>
              Delete project…
            </Button>
          </CardBody>
        </Card>

        <Card>
          <CardHeader className="flex items-center gap-2">
            <Info size={16} style={{ color: 'var(--app-info)' }} />
            <h3 className="text-[14px] font-semibold" style={{ color: 'var(--app-fg-strong)' }}>
              Informational modal
            </h3>
          </CardHeader>
          <CardBody className="pt-0">
            <p className="mb-3 text-[12.5px]" style={{ color: 'var(--app-fg-muted)' }}>
              A standard dialog for context that doesn't require a decision.
            </p>
            <Button color="info" variant="bordered" onPress={() => setIsInfoOpen(true)}>
              About this workspace
            </Button>
          </CardBody>
        </Card>
      </div>

      <Modal
        isOpen={isDeleteOpen}
        onClose={() => setIsDeleteOpen(false)}
        role="alertdialog"
        title="Delete this project?"
        size="sm"
        actions={
          <>
            <Button variant="ghost" color="default" onPress={() => setIsDeleteOpen(false)} isDisabled={isDeleting}>
              Cancel
            </Button>
            <Button color="danger" onPress={confirmDelete} isLoading={isDeleting}>
              Delete
            </Button>
          </>
        }
      >
        <p className="text-[13px] leading-relaxed" style={{ color: 'var(--app-fg)' }}>
          This permanently removes the project, its records and every automation attached to it. Members will lose
          access immediately.
        </p>
      </Modal>

      <Modal
        isOpen={isInfoOpen}
        onClose={() => setIsInfoOpen(false)}
        title="About this workspace"
        size="sm"
        actions={
          <Button color="primary" onPress={() => setIsInfoOpen(false)}>
            Got it
          </Button>
        }
      >
        <p className="text-[13px] leading-relaxed" style={{ color: 'var(--app-fg)' }}>
          This workspace is on the Growth plan, with 12 of 25 seats used. Billing renews on the 1st of every month
          and can be managed from Settings → Billing.
        </p>
      </Modal>
    </div>
  )
}
