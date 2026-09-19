import { useState } from 'react'
import { Button, Calendar as CalendarComp, Card, CardBody, CardHeader, type CalendarDayContext } from 'oks-ui'
import { Plus } from 'lucide-react'
import { PageHeader } from '../../Components/ui'
import { CALENDAR_EVENTS, EVENT_CATEGORIES, EVENT_TONE_SOFT_VAR, EVENT_TONE_VAR } from '../../data/calendarEvents'

const now = new Date()

function toDateKey(date: Date): string {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`
}

const EVENTS_BY_DATE = CALENDAR_EVENTS.reduce<Record<string, typeof CALENDAR_EVENTS>>((acc, event) => {
  const bucket = acc[event.date] ?? []
  bucket.push(event)
  acc[event.date] = bucket
  return acc
}, {})

function renderDay(ctx: CalendarDayContext) {
  const dayEvents = EVENTS_BY_DATE[toDateKey(ctx.date)]
  const visible = dayEvents?.slice(0, 2)
  const overflow = dayEvents && dayEvents.length > 2 ? dayEvents.length - 2 : 0
  return (
    <div className="flex h-full w-full flex-col items-start gap-1 p-1">
      <span
        className="text-[12px]"
        style={{
          color: ctx.inMonth ? 'var(--app-fg-strong)' : 'var(--app-fg-subtle)',
          fontWeight: ctx.isToday ? 700 : 500,
        }}
      >
        {ctx.date.getDate()}
      </span>
      {visible && visible.length > 0 && (
        <div className="flex w-full flex-col gap-1">
          {visible.map((event) => (
            <span
              key={event.id}
              className="truncate rounded px-1.5 py-0.5 text-left text-[10px] font-medium"
              style={{ background: EVENT_TONE_SOFT_VAR[event.tone], color: EVENT_TONE_VAR[event.tone] }}
            >
              {event.title}
            </span>
          ))}
          {overflow > 0 && (
            <span className="text-[10px]" style={{ color: 'var(--app-fg-subtle)' }}>
              +{overflow} more
            </span>
          )}
        </div>
      )}
    </div>
  )
}

export default function CalendarPage() {
  const [month, setMonth] = useState(now)

  return (
    <div>
      <PageHeader
        title="Calendar"
        subtitle="Shared scheduling and meeting reminders for the team."
        crumbs={[{ label: 'Verox', to: '/' }, { label: 'Apps' }, { label: 'Calendar' }]}
      />

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1fr_3fr]">
        <Card className="h-fit">
          <CardBody>
            <Button color="primary" className="w-full" startContent={<Plus size={16} />}>
              Create New Event
            </Button>
            <p className="mt-3 text-[12px]" style={{ color: 'var(--app-fg-muted)' }}>
              Click a day on the calendar to schedule a new event.
            </p>
            <div className="mt-5 flex flex-col gap-2.5">
              {EVENT_CATEGORIES.map((cat) => (
                <div key={cat.label} className="flex items-center gap-2 text-[12.5px]" style={{ color: 'var(--app-fg)' }}>
                  <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ background: cat.color }} />
                  {cat.label}
                </div>
              ))}
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardHeader className="flex items-center justify-between">
            <h3 className="text-[14px] font-medium" style={{ color: 'var(--app-fg)' }}>
              Month view
            </h3>
            <Button size="sm" variant="bordered" color="default" onClick={() => setMonth(new Date())}>
              Today
            </Button>
          </CardHeader>
          <CardBody className="pt-0">
            <CalendarComp
              className="event-calendar"
              selectionMode="single"
              month={month}
              onMonthChange={setMonth}
              fixedWeeks
              renderDay={renderDay}
              ariaLabel="Team calendar"
            />
          </CardBody>
        </Card>
      </div>
    </div>
  )
}
