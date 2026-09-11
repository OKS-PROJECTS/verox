import { Card, CardBody, CardHeader, FileField } from 'oks-ui'
import { PageHeader } from '../../Components/ui'

export default function FormsFileUploads() {
  return (
    <div>
      <PageHeader
        title="File Uploads"
        subtitle="Inline and drop-zone file inputs, with previews."
        crumbs={[{ label: 'Verox', to: '/' }, { label: 'Forms' }, { label: 'File Uploads' }]}
      />
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <h3 className="text-[14px] font-semibold" style={{ color: 'var(--app-fg-strong)' }}>
              Drop zone
            </h3>
          </CardHeader>
          <CardBody className="pt-0">
            <FileField
              name="attachments"
              label="Attachments"
              ui="dropzone"
              isDroppable
              maxFiles={5}
              maxFileSize={10 * 1024 * 1024}
              preview="thumbnails"
              showFileList
              clearable
            />
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <h3 className="text-[14px] font-semibold" style={{ color: 'var(--app-fg-strong)' }}>
              Inline
            </h3>
          </CardHeader>
          <CardBody className="pt-0">
            <FileField name="avatar" label="Profile photo" ui="inline" maxFiles={1} preview="thumbnails" />
          </CardBody>
        </Card>
      </div>
    </div>
  )
}
