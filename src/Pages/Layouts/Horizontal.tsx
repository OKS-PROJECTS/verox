import { Alert, Card, CardBody } from 'oks-ui'
import { PageHeader } from '../../Components/ui'

export default function Horizontal() {
  return (
    <div>
      <PageHeader
        title="Horizontal"
        subtitle="A top-nav layout with no sidebar — menu items run across the header instead."
        crumbs={[{ label: 'Verox', to: '/' }, { label: 'Layout Options' }, { label: 'Horizontal' }]}
      />
      <Card>
        <CardBody>
          <Alert
            variant="soft"
            color="warning"
            title="Not wired up in this build"
            description="A horizontal top-nav is a structural change to the shell (the sidebar's Nav tree would need to render as a horizontal Dropdown-driven menu bar instead). Verox ships the sidebar layout only — this page documents the gap rather than faking the variant."
          />
        </CardBody>
      </Card>
    </div>
  )
}
