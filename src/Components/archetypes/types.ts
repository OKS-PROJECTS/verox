import type { ReactNode } from 'react'
import type { TableColumn, TableRowKey } from 'oks-ui'
import type { Crumb } from '../ui'
import type { DataTableFilter } from '../ui'

export interface ListPageConfig<Row extends Record<string, unknown> = Record<string, unknown>> {
  title: string
  subtitle?: string
  crumbs?: Crumb[]
  columns: TableColumn<Row>[]
  rows: Row[]
  getRowKey: (row: Row, index: number) => TableRowKey
  searchKeys?: Array<keyof Row>
  searchPlaceholder?: string
  filters?: DataTableFilter<Row>[]
  addLabel?: string
  addTo?: string
  stats?: { label: string; value: string }[]
}

export interface FormFieldConfig {
  type: 'text' | 'number' | 'url' | 'search' | 'color' | 'email' | 'password' | 'otp' | 'file' | 'textarea' | 'select' | 'radio' | 'checkbox' | 'switch' | 'datepicker' | 'range' | 'phone'
  name: string
  label?: string
  placeholder?: string
  description?: string
  options?: { label: string; value: string }[]
  colSpan?: number
  [key: string]: unknown
}

export interface FormPageConfig {
  title: string
  subtitle?: string
  crumbs?: Crumb[]
  sections?: { title?: string; fields: FormFieldConfig[] }[]
  fields?: FormFieldConfig[]
  initialValues?: Record<string, unknown>
  submitLabel?: string
  cancelTo?: string
}

export interface DetailSection {
  title: string
  rows: { label: string; value: ReactNode }[]
}

export interface DetailPageConfig {
  title: string
  subtitle?: string
  crumbs?: Crumb[]
  sections: DetailSection[]
  sidebar?: ReactNode
}
