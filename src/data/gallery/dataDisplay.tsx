import {
  Avatar,
  AvatarGroup,
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Divider,
  PageTitle,
  Stat,
  StatGroup,
  Timeline,
  TimelineItem,
} from 'oks-ui'
import { Activity, Bell, Check, DollarSign, Send, User, Users } from 'lucide-react'
import { avatarUrl } from '../../lib/avatarUrl'
import type { GalleryEntry } from './types'

export const dataDisplayEntries: GalleryEntry[] = [
  {
    slug: 'avatar',
    name: 'Avatar',
    category: 'Data display',
    description: 'Person or entity image with automatic initials fallback and an optional status dot.',
    render: () => (
      <div className="flex flex-wrap items-end gap-4">
        <Avatar name="Jane Cooper" src={avatarUrl('jane-doe')} size="lg" status="online" />
        <Avatar name="Marcus Lee" src={avatarUrl('marcus-lee')} size="md" status="dnd" />
        <Avatar name="Priya Nair" size="md" color="secondary" />
        <Avatar name="A" size="sm" isBordered color="primary" />
        <Avatar icon={<User size={18} />} size="md" color="default" />
      </div>
    ),
    source: `<Avatar name="Jane Cooper" src={avatarUrl('jane-doe')} size="lg" status="online" />
<Avatar name="Priya Nair" size="md" color="secondary" />
<Avatar icon={<User size={18} />} size="md" color="default" />`,
  },
  {
    slug: 'avatar-group',
    name: 'AvatarGroup',
    category: 'Data display',
    description: 'Overlapping stack of avatars with a "+N" overflow indicator, for collaborators or assignees.',
    render: () => (
      <AvatarGroup max={4} total={9} size="md" isBordered>
        <Avatar name="Jane Cooper" src={avatarUrl('jane-doe')} />
        <Avatar name="Marcus Lee" src={avatarUrl('marcus-lee')} />
        <Avatar name="Priya Nair" src={avatarUrl('priya-nair')} />
        <Avatar name="Tom Alden" src={avatarUrl('tom-alden')} />
        <Avatar name="Sara Kim" src={avatarUrl('sara-kim')} />
      </AvatarGroup>
    ),
    source: `<AvatarGroup max={4} total={9} isBordered>
  <Avatar name="Jane Cooper" src={avatarUrl('jane-doe')} />
  <Avatar name="Marcus Lee" src={avatarUrl('marcus-lee')} />
  <Avatar name="Priya Nair" src={avatarUrl('priya-nair')} />
  <Avatar name="Tom Alden" src={avatarUrl('tom-alden')} />
  <Avatar name="Sara Kim" src={avatarUrl('sara-kim')} />
</AvatarGroup>`,
  },
  {
    slug: 'badge',
    name: 'Badge',
    category: 'Data display',
    description: 'Count or status indicator anchored to a corner of its child, e.g. unread counts.',
    render: () => (
      <div className="flex flex-wrap items-center gap-6">
        <Badge content="4" color="danger" ariaLabel="4 unread notifications">
          <Button isIconOnly variant="bordered" color="default" aria-label="Notifications">
            <Bell size={16} />
          </Button>
        </Badge>
        <Badge content="128" max={99} color="primary" variant="solid">
          <Button variant="bordered" color="default">
            Inbox
          </Button>
        </Badge>
        <Badge isDot color="success" ariaLabel="Online">
          <Avatar name="Jane Cooper" src={avatarUrl('jane-doe')} />
        </Badge>
      </div>
    ),
    source: `<Badge content="4" color="danger" ariaLabel="4 unread notifications">
  <Button isIconOnly variant="bordered" aria-label="Notifications"><Bell size={16} /></Button>
</Badge>
<Badge isDot color="success" ariaLabel="Online">
  <Avatar name="Jane Cooper" src={avatarUrl('jane-doe')} />
</Badge>`,
  },
  {
    slug: 'chip',
    name: 'Chip',
    category: 'Data display',
    description: 'Small pill for a tag, filter, or dismissible/toggleable selection.',
    render: () => (
      <div className="flex flex-wrap gap-2">
        <Chip color="primary" variant="soft">
          Design
        </Chip>
        <Chip color="success" variant="dot">
          Active
        </Chip>
        <Chip color="default" variant="bordered" avatar={<Avatar name="Jane Cooper" src={avatarUrl('jane-doe')} size="xs" />}>
          Jane Cooper
        </Chip>
        <Chip color="warning" variant="soft" onClose={() => {}}>
          Draft
        </Chip>
      </div>
    ),
    source: `<Chip color="primary" variant="soft">Design</Chip>
<Chip color="success" variant="dot">Active</Chip>
<Chip color="warning" variant="soft" onClose={() => removeTag('draft')}>Draft</Chip>`,
  },
  {
    slug: 'divider',
    name: 'Divider',
    category: 'Data display',
    description: 'Horizontal or vertical rule for separating content, with an optional inline label.',
    render: () => (
      <div className="flex flex-col gap-4">
        <Divider />
        <Divider>Or continue with</Divider>
        <div className="flex items-center gap-3" style={{ height: 32 }}>
          <span className="text-sm">Profile</span>
          <Divider orientation="vertical" />
          <span className="text-sm">Security</span>
        </div>
      </div>
    ),
    source: `<Divider />
<Divider>Or continue with</Divider>
<Divider orientation="vertical" />`,
  },
  {
    slug: 'page-title',
    name: 'PageTitle',
    category: 'Data display',
    description: 'Page or section heading with an optional subtitle and leading icon.',
    render: () => (
      <PageTitle title="Customers" subtitle="Manage accounts, contacts, and billing details." icon={<Users size={20} />} />
    ),
    source: `<PageTitle
  title="Customers"
  subtitle="Manage accounts, contacts, and billing details."
  icon={<Users size={20} />}
/>`,
  },
  {
    slug: 'card',
    name: 'Card',
    category: 'Data display',
    description: 'Surface container with header/body/footer sections — the everyday content wrapper.',
    render: () => (
      <Card className="max-w-sm" isHoverable>
        <CardHeader className="flex items-center justify-between">
          <span className="font-medium" style={{ color: 'var(--app-fg-strong)' }}>
            Team plan
          </span>
          <Chip color="primary" variant="soft" size="xs-sm">
            Popular
          </Chip>
        </CardHeader>
        <CardBody>
          <p className="text-sm">Unlimited projects, 10 seats, and priority support for growing teams.</p>
        </CardBody>
        <CardFooter className="flex justify-end gap-2">
          <Button variant="ghost" color="default">
            Compare
          </Button>
          <Button color="primary">Upgrade</Button>
        </CardFooter>
      </Card>
    ),
    source: `<Card isHoverable>
  <CardHeader>Team plan</CardHeader>
  <CardBody>Unlimited projects, 10 seats, and priority support.</CardBody>
  <CardFooter className="flex justify-end gap-2">
    <Button variant="ghost">Compare</Button>
    <Button color="primary">Upgrade</Button>
  </CardFooter>
</Card>`,
  },
  {
    slug: 'stat',
    name: 'Stat',
    category: 'Data display',
    description: 'KPI block with a value, trend pill and icon — has no surface of its own, so wrap it in a Card.',
    render: () => (
      <StatGroup columns={3}>
        <Card>
          <CardBody>
            <Stat label="Revenue" value="$48,204" delta="+12.4%" trend="up" icon={<DollarSign size={18} />} />
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <Stat label="Active users" value="2,318" delta="-3.1%" trend="down" icon={<Users size={18} />} />
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <Stat label="Churn" value="1.8%" trend="flat" help="Last 30 days" icon={<Activity size={18} />} />
          </CardBody>
        </Card>
      </StatGroup>
    ),
    source: `<StatGroup columns={3}>
  <Card><CardBody>
    <Stat label="Revenue" value="$48,204" delta="+12.4%" trend="up" icon={<DollarSign size={18} />} />
  </CardBody></Card>
  <Card><CardBody>
    <Stat label="Active users" value="2,318" delta="-3.1%" trend="down" icon={<Users size={18} />} />
  </CardBody></Card>
</StatGroup>`,
  },
  {
    slug: 'timeline',
    name: 'Timeline',
    category: 'Data display',
    description: 'Vertical activity feed showing a sequence of dated events.',
    render: () => (
      <Timeline>
        <TimelineItem title="Invoice #4821 sent" time="9:02 AM" color="primary" icon={<Send size={14} />}>
          <p className="text-sm">Sent to billing@acme.co for $2,400.</p>
        </TimelineItem>
        <TimelineItem title="Payment received" time="11:47 AM" color="success" icon={<Check size={14} />}>
          <p className="text-sm">Paid in full via ACH transfer.</p>
        </TimelineItem>
        <TimelineItem title="Receipt emailed" time="11:48 AM" color="default">
          <p className="text-sm">Confirmation sent automatically.</p>
        </TimelineItem>
      </Timeline>
    ),
    source: `<Timeline>
  <TimelineItem title="Invoice #4821 sent" time="9:02 AM" color="primary" icon={<Send size={14} />}>
    Sent to billing@acme.co for $2,400.
  </TimelineItem>
  <TimelineItem title="Payment received" time="11:47 AM" color="success" icon={<Check size={14} />}>
    Paid in full via ACH transfer.
  </TimelineItem>
</Timeline>`,
  },
]
