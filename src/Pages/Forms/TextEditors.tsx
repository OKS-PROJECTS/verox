import { useState } from 'react'
import { Card, CardBody, CardHeader, TextEditor, type Block } from 'oks-ui'
import { PageHeader } from '../../Components/ui'

const INITIAL_BLOCKS: Block[] = [
  {
    id: 'heading-1',
    type: 'heading',
    props: { level: 2 },
    content: [{ type: 'text', text: 'Changelog entry' }],
    children: [],
  },
  {
    id: 'paragraph-1',
    type: 'paragraph',
    props: {},
    content: [
      { type: 'text', text: 'Draft your update, then publish it to the ' },
      { type: 'text', text: 'changelog', styles: { bold: true } },
      { type: 'text', text: '.' },
    ],
    children: [],
  },
]

export default function FormsTextEditors() {
  const [value, setValue] = useState<Block[]>(INITIAL_BLOCKS)

  return (
    <div>
      <PageHeader
        title="Text Editors"
        subtitle="A block-based rich text editor."
        crumbs={[{ label: 'Verox', to: '/' }, { label: 'Forms' }, { label: 'Text Editors' }]}
      />
      <Card>
        <CardHeader>
          <h3 className="text-[14px] font-medium" style={{ color: 'var(--app-fg)' }}>
            Changelog entry
          </h3>
        </CardHeader>
        <CardBody className="pt-0">
          <TextEditor value={value} onChange={setValue} />
        </CardBody>
      </Card>
    </div>
  )
}
