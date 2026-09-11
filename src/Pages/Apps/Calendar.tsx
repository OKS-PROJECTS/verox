import { Calendar as CalendarComp, Card, CardBody, CardHeader, type CalendarDayContext } from 'oks-ui'
import { CalendarClock } from 'lucide-react'
import { PageHeader } from '../../Components/ui'
import { CALENDAR_EVENTS, EVENT_TONE_VAR } from '../../data/calendarEvents'

const now = new Date()

const EVENTS_BY_DAY = CALENDAR_EVENTS.reduce<Record<number, typeof CALENDAR_EVENTS>>((acc, event) => {
  const bucket = acc[event.day] ?? []
  bucket.push(event)
  acc[event.day] = bucket
  return acc
}, {})

const UPCOMING = [...CALENDAR_EVENTS].sort((a, b) => a.day - b.day)

function renderDay(ctx: CalendarDayContext) {
  const dayEvents = ctx.inMonth ? EVENTS_BY_DAY[ctx.date.getDate()] : undefined
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-1 py-1">
      <span
        className="text-[12.5px]"
        style={{
          color: ctx.inMonth ? 'var(--app-fg-strong)' : 'var(--app-fg-subtle)',
          fontWeight: ctx.isToday ? 700 : 500,
        }}
      >
        {ctx.date.getDate()}
      </span>
      {dayEvents && (
        <div className="flex items-center gap-0.5">
          {dayEvents.slice(0, 2).map((event) => (
            <span key={event.id} className="h-1.5 w-1.5 rounded-full" style={{ background: EVENT_TONE_VAR[event.tone] }} />
          ))}
        </div>
      )}
    </div>
  )
}

export default function CalendarPage() {
  return (
    <div>
      <PageHeader
        title="Calendar"
        subtitle="Shared scheduling and meeting reminders for the team."
        crumbs={[{ label: 'Verox', to: '/' }, { label: 'Apps' }, { label: 'Calendar' }]}
      />

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-[2fr_1fr]">
        <Card>
          <CardBody>
            <CalendarComp selectionMode="single" defaultMonth={now} fixedWeeks renderDay={renderDay} ariaLabel="Team calendar" />
          </CardBody>
        </Card>

        <Card>
          <CardHeader className="flex items-center gap-2">
            <CalendarClock size={16} style={{ color: 'var(--app-primary)' }} />
            <h3 className="text-[14px] font-semibold" style={{ color: 'var(--app-fg-strong)' }}>
              Upcoming events
            </h3>
          </CardHeader>
          <CardBody className="pt-0">
            <ul className="flex flex-col">
              {UPCOMING.map((event) => {
                const date = new Date(now.getFullYear(), now.getMonth(), event.day)
                return (
                  <li key={event.id} className="flex items-start gap-3 py-2.5" style={{ borderBottom: '1px solid var(--app-border)' }}>
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full" style={{ background: EVENT_TONE_VAR[event.tone] }} />
                    <div className="min-w-0">
                      <div className="truncate text-[13px] font-semibold" style={{ color: 'var(--app-fg-strong)' }}>
                        {event.title}
                      </div>
                      <div className="text-[12px]" style={{ color: 'var(--app-fg-muted)' }}>
                        {date.toLocaleDateString(undefined, { month: 'short', day: 'numeric' })} &middot; {event.time}
                      </div>
                    </div>
                  </li>
                )
              })}
            </ul>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}
