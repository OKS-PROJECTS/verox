import { Button, Card, CardBody, CardHeader, Form, FormFieldSet, toast, type FormFieldSetProps } from 'oks-ui'
import { useNavigate } from 'react-router-dom'
import { PageHeader } from '../ui'
import type { FormFieldConfig, FormPageConfig } from './types'

/**
 * `FormFieldSet`'s prop type is a discriminated union keyed by `type`, which
 * makes a config-driven `field[]` (author-time shape, not statically
 * narrowed per variant) awkward to spread without a cast. Logged in
 * OKS-UI-FEEDBACK.md.
 */
function Field({ field }: { field: FormFieldConfig }) {
  return <FormFieldSet {...(field as unknown as FormFieldSetProps)} />
}

export function FormPage({ config }: { config: FormPageConfig }) {
  const { title, subtitle, crumbs, sections, fields, initialValues, submitLabel, cancelTo } = config
  const navigate = useNavigate()

  const groups = sections ?? (fields ? [{ fields }] : [])

  return (
    <div>
      <PageHeader title={title} subtitle={subtitle} crumbs={crumbs} />
      <Form
        initialValues={initialValues}
        onSubmit={() => {
          toast.success(`${title} saved`)
          if (cancelTo) navigate(cancelTo)
        }}
        className="flex flex-col gap-5"
      >
        {groups.map((group, gi) => (
          <Card key={group.title ?? gi}>
            {group.title && (
              <CardHeader>
                <h3 className="text-[14px] font-semibold" style={{ color: 'var(--app-fg-strong)' }}>
                  {group.title}
                </h3>
              </CardHeader>
            )}
            <CardBody className={group.title ? 'pt-0' : undefined}>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {group.fields.map((f) => (
                  <Field key={f.name} field={f} />
                ))}
              </div>
            </CardBody>
          </Card>
        ))}

        <div className="flex justify-end gap-2">
          {cancelTo && (
            <Button type="button" variant="bordered" color="default" onPress={() => navigate(cancelTo)}>
              Cancel
            </Button>
          )}
          <Button type="submit" color="primary">
            {submitLabel ?? 'Save'}
          </Button>
        </div>
      </Form>
    </div>
  )
}
