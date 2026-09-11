import {
  TextField,
  TextAreaField,
  PasswordField,
  OtpField,
  SelectField,
  SwitchField,
  Checkbox,
  CheckboxGroupField,
  Radio,
  RadioGroupField,
  RangeField,
  PhoneField,
  DatePickerField,
  FileField,
  LoopFields,
  FormFieldSet,
  Form,
  SteppedForm,
  defineStep,
} from 'oks-ui'
import { Mail, Search } from 'lucide-react'
import type { GalleryEntry } from './types'

export const formsEntries: GalleryEntry[] = [
  {
    slug: 'text-field',
    name: 'TextField',
    category: 'Forms',
    description: 'Text, email, search and number variants, plus the borderless filled style.',
    render: () => (
      <div className="flex max-w-sm flex-col gap-3">
        <TextField label="Company name" placeholder="Nimbus Retail Group" />
        <TextField type="email" label="Work email" placeholder="alex@nimbusretail.com" startIcon={<Mail size={16} />} />
        <TextField type="search" placeholder="Search invoices…" startIcon={<Search size={16} />} />
        <TextField type="number" label="Seats" defaultValue={12} />
        <TextField variant="filled" label="Subdomain" placeholder="nimbus" suffix=".verox.app" />
      </div>
    ),
    source: `<TextField label="Company name" placeholder="Nimbus Retail Group" />
<TextField type="email" label="Work email" startIcon={<Mail size={16} />} />
<TextField type="search" placeholder="Search invoices…" startIcon={<Search size={16} />} />
<TextField type="number" label="Seats" defaultValue={12} />
<TextField variant="filled" label="Subdomain" placeholder="nimbus" suffix=".verox.app" />`,
  },
  {
    slug: 'textarea-field',
    name: 'TextAreaField',
    category: 'Forms',
    description: 'Multiline text input with an optional live character counter.',
    render: () => (
      <div className="max-w-sm">
        <TextAreaField
          label="Internal note"
          placeholder="Add context for the next agent who picks up this ticket…"
          description="Visible only to your team."
          showLengthCounter
          maxLength={240}
          rows={4}
        />
      </div>
    ),
    source: `<TextAreaField
  label="Internal note"
  placeholder="Add context for the next agent who picks up this ticket…"
  description="Visible only to your team."
  showLengthCounter
  maxLength={240}
  rows={4}
/>`,
  },
  {
    slug: 'password-field',
    name: 'PasswordField',
    category: 'Forms',
    description: 'Password input with a reveal toggle and a strength requirement.',
    render: () => (
      <div className="max-w-sm">
        <PasswordField
          label="New password"
          placeholder="Enter a strong password"
          revealToggle
          strongPassword={{ minLength: 8, minUpper: 1, minNumber: 1 }}
        />
      </div>
    ),
    source: `<PasswordField
  label="New password"
  placeholder="Enter a strong password"
  revealToggle
  strongPassword={{ minLength: 8, minUpper: 1, minNumber: 1 }}
/>`,
  },
  {
    slug: 'otp-field',
    name: 'OtpField',
    category: 'Forms',
    description: 'Segmented one-time-code input for two-factor verification.',
    render: () => (
      <div className="max-w-xs">
        <OtpField label="Verification code" description="Sent to +1 •••• •• 42" length={6} ui="segmented" />
      </div>
    ),
    source: `<OtpField label="Verification code" description="Sent to +1 •••• •• 42" length={6} ui="segmented" />`,
  },
  {
    slug: 'select-field',
    name: 'SelectField',
    category: 'Forms',
    description: 'Single and multi-select, both backed by the same option list shape.',
    render: () => (
      <div className="flex max-w-sm flex-col gap-3">
        <SelectField
          label="Plan"
          options={[
            { label: 'Starter', value: 'starter' },
            { label: 'Growth', value: 'growth' },
            { label: 'Scale', value: 'scale' },
          ]}
          defaultValue="growth"
        />
        <SelectField
          label="Assign reviewers"
          multiple
          options={[
            { label: 'Priya Natarajan', value: 'priya' },
            { label: 'Marcus Webb', value: 'marcus' },
            { label: 'Sofia Lindqvist', value: 'sofia' },
          ]}
          defaultValue={['priya', 'sofia']}
        />
      </div>
    ),
    source: `<SelectField
  label="Plan"
  options={[
    { label: "Starter", value: "starter" },
    { label: "Growth", value: "growth" },
    { label: "Scale", value: "scale" },
  ]}
  defaultValue="growth"
/>
<SelectField label="Assign reviewers" multiple options={reviewerOptions} defaultValue={["priya", "sofia"]} />`,
  },
  {
    slug: 'switch-field',
    name: 'SwitchField',
    category: 'Forms',
    description: 'Toggle with optional on/off state text.',
    render: () => (
      <div className="flex max-w-sm flex-col gap-3">
        <SwitchField label="Email notifications" defaultChecked description="Weekly digest and billing alerts" />
        <SwitchField label="Maintenance mode" color="danger" showStateText checkedText="On" uncheckedText="Off" />
      </div>
    ),
    source: `<SwitchField label="Email notifications" defaultChecked description="Weekly digest and billing alerts" />
<SwitchField label="Maintenance mode" color="danger" showStateText checkedText="On" uncheckedText="Off" />`,
  },
  {
    slug: 'checkbox',
    name: 'Checkbox',
    category: 'Forms',
    description: 'Single checkbox plus a grouped set for multi-select preferences.',
    render: () => (
      <div className="flex max-w-sm flex-col gap-3">
        <Checkbox label="Send me product updates" defaultChecked />
        <CheckboxGroupField
          label="Notify me about"
          options={[
            { label: 'New orders', value: 'orders' },
            { label: 'Failed payments', value: 'payments' },
            { label: 'Low stock', value: 'stock' },
          ]}
          defaultValue={['orders', 'payments']}
        />
      </div>
    ),
    source: `<Checkbox label="Send me product updates" defaultChecked />
<CheckboxGroupField
  label="Notify me about"
  options={[
    { label: "New orders", value: "orders" },
    { label: "Failed payments", value: "payments" },
    { label: "Low stock", value: "stock" },
  ]}
  defaultValue={["orders", "payments"]}
/>`,
  },
  {
    slug: 'radio',
    name: 'Radio',
    category: 'Forms',
    description: 'Standalone radio pair plus a grouped field for a single choice.',
    render: () => (
      <div className="flex max-w-sm flex-col gap-4">
        <div className="flex gap-4">
          <Radio name="billing-cycle" label="Monthly" defaultChecked />
          <Radio name="billing-cycle" label="Annual" />
        </div>
        <RadioGroupField
          label="Shipping speed"
          options={[
            { label: 'Standard · 5-7 days', value: 'standard' },
            { label: 'Express · 2-3 days', value: 'express' },
            { label: 'Overnight', value: 'overnight' },
          ]}
          defaultValue="express"
        />
      </div>
    ),
    source: `<Radio name="billing-cycle" label="Monthly" defaultChecked />
<Radio name="billing-cycle" label="Annual" />

<RadioGroupField
  label="Shipping speed"
  options={[
    { label: "Standard · 5-7 days", value: "standard" },
    { label: "Express · 2-3 days", value: "express" },
    { label: "Overnight", value: "overnight" },
  ]}
  defaultValue="express"
/>`,
  },
  {
    slug: 'range-field',
    name: 'RangeField',
    category: 'Forms',
    description: 'Single-handle and dual-handle sliders with formatted values.',
    render: () => (
      <div className="flex max-w-sm flex-col gap-5">
        <RangeField
          label="Discount"
          min={0}
          max={50}
          step={5}
          defaultValue={15}
          marks={[0, 25, 50]}
          showValue
          formatValue={(n) => `${n}%`}
        />
        <RangeField
          label="Price range"
          selection="range"
          min={0}
          max={500}
          step={10}
          defaultValue={{ min: 80, max: 320 }}
          showValue
          formatValue={(n) => `$${n}`}
        />
      </div>
    ),
    source: `<RangeField label="Discount" min={0} max={50} step={5} defaultValue={15} showValue formatValue={(n) => \`\${n}%\`} />
<RangeField
  label="Price range"
  selection="range"
  min={0}
  max={500}
  defaultValue={{ min: 80, max: 320 }}
  showValue
  formatValue={(n) => \`$\${n}\`}
/>`,
  },
  {
    slug: 'phone-field',
    name: 'PhoneField',
    category: 'Forms',
    description: 'Phone input with a country code selector.',
    render: () => (
      <div className="max-w-sm">
        <PhoneField label="Mobile number" defaultCountryCode="+1" defaultValue={{ code: '+1', phone: '4155550142' }} />
      </div>
    ),
    source: `<PhoneField label="Mobile number" defaultCountryCode="+1" defaultValue={{ code: "+1", phone: "4155550142" }} />`,
  },
  {
    slug: 'date-picker-field',
    name: 'DatePickerField',
    category: 'Forms',
    description: 'Date input with quick presets, and a range variant for billing periods.',
    render: () => (
      <div className="flex max-w-sm flex-col gap-3">
        <DatePickerField
          label="Due date"
          showPresets
          presets={['today', 'thisWeek', 'thisMonth']}
          defaultValue="2026-09-18"
          clearable
        />
        <DatePickerField
          label="Billing period"
          range
          monthsToShow={2}
          defaultValue={{ start: '2026-09-01', end: '2026-09-30' }}
        />
      </div>
    ),
    source: `<DatePickerField label="Due date" showPresets presets={["today", "thisWeek", "thisMonth"]} defaultValue="2026-09-18" clearable />
<DatePickerField label="Billing period" range monthsToShow={2} defaultValue={{ start: "2026-09-01", end: "2026-09-30" }} />`,
  },
  {
    slug: 'file-field',
    name: 'FileField',
    category: 'Forms',
    description: 'Drag-and-drop file input with thumbnail previews.',
    render: () => (
      <div className="max-w-sm">
        <FileField
          label="Attachments"
          description="PNG or PDF, up to 10MB each"
          ui="dropzone"
          isDroppable
          preview="thumbnails"
          maxFiles={5}
          maxFileSize={10 * 1024 * 1024}
          dropLabel="Drop files to attach"
        />
      </div>
    ),
    source: `<FileField
  label="Attachments"
  description="PNG or PDF, up to 10MB each"
  ui="dropzone"
  isDroppable
  preview="thumbnails"
  maxFiles={5}
  maxFileSize={10 * 1024 * 1024}
  dropLabel="Drop files to attach"
/>`,
  },
  {
    slug: 'loop-fields',
    name: 'LoopFields',
    category: 'Forms',
    description: 'Repeatable "add another" group inside a real Form, wired for loopGroupToArray.',
    render: () => (
      <Form onSubmit={() => {}} className="flex max-w-md flex-col gap-4">
        <LoopFields
          group="items"
          nameStrategy="bracket"
          minItems={1}
          maxItems={5}
          addTitle="Add line item"
          removeTitle="Remove item"
        >
          {(index) => (
            <div className="flex items-end gap-2">
              <FormFieldSet
                type="text"
                name="description"
                label={index === 0 ? 'Description' : undefined}
                placeholder="Design consulting"
                wrapperClassName="flex-1"
              />
              <FormFieldSet
                type="number"
                name="amount"
                label={index === 0 ? 'Amount' : undefined}
                placeholder="0.00"
                wrapperClassName="w-28"
              />
            </div>
          )}
        </LoopFields>
      </Form>
    ),
    source: `<Form onSubmit={(formData) => loopGroupToArray(formData, "items")}>
  <LoopFields group="items" nameStrategy="bracket" minItems={1} maxItems={5} addTitle="Add line item" removeTitle="Remove item">
    {(index) => (
      <>
        <FormFieldSet type="text" name="description" label={index === 0 ? "Description" : undefined} placeholder="Design consulting" />
        <FormFieldSet type="number" name="amount" label={index === 0 ? "Amount" : undefined} placeholder="0.00" />
      </>
    )}
  </LoopFields>
</Form>`,
  },
  {
    slug: 'stepped-form',
    name: 'SteppedForm',
    category: 'Forms',
    description: 'Multi-step workspace onboarding flow with per-step validation.',
    render: () => (
      <div className="max-w-md">
        <SteppedForm
          headerVariant="progress"
          onSubmit={() => {}}
          steps={[
            defineStep({
              key: 'account',
              title: 'Account',
              fields: ['fullName', 'email'],
              content: (
                <div className="flex flex-col gap-3">
                  <FormFieldSet
                    type="text"
                    name="fullName"
                    label="Full name"
                    placeholder="Jordan Reyes"
                    validation={{ rules: { required: true } }}
                  />
                  <FormFieldSet
                    type="email"
                    name="email"
                    label="Work email"
                    placeholder="jordan@nimbusretail.com"
                    validation={{ rules: { required: true, email: true } }}
                  />
                </div>
              ),
            }),
            defineStep({
              key: 'workspace',
              title: 'Workspace',
              fields: ['company'],
              content: (
                <div className="flex flex-col gap-3">
                  <FormFieldSet
                    type="text"
                    name="company"
                    label="Company"
                    placeholder="Nimbus Retail Group"
                    validation={{ rules: { required: true } }}
                  />
                  <FormFieldSet
                    type="select"
                    name="teamSize"
                    label="Team size"
                    options={[
                      { label: '1–10', value: 'small' },
                      { label: '11–50', value: 'medium' },
                      { label: '50+', value: 'large' },
                    ]}
                  />
                </div>
              ),
            }),
            defineStep({
              key: 'review',
              title: 'Review',
              content: (
                <p className="text-sm" style={{ color: 'var(--app-fg-muted)' }}>
                  Everything looks good — submit to create the workspace.
                </p>
              ),
            }),
          ]}
        />
      </div>
    ),
    source: `<SteppedForm
  headerVariant="progress"
  onSubmit={(formData) => createWorkspace(formData)}
  steps={[
    defineStep({
      key: "account",
      title: "Account",
      fields: ["fullName", "email"],
      content: (
        <>
          <FormFieldSet type="text" name="fullName" label="Full name" validation={{ rules: { required: true } }} />
          <FormFieldSet type="email" name="email" label="Work email" validation={{ rules: { required: true, email: true } }} />
        </>
      ),
    }),
    defineStep({
      key: "workspace",
      title: "Workspace",
      fields: ["company"],
      content: <FormFieldSet type="text" name="company" label="Company" validation={{ rules: { required: true } }} />,
    }),
    defineStep({ key: "review", title: "Review", content: <p>Everything looks good — submit to create the workspace.</p> }),
  ]}
/>`,
  },
]
