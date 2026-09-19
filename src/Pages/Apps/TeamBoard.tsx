import type { LucideIcon } from 'lucide-react'
import {
  Avatar,
  AvatarGroup,
  Button,
  Card,
  CardBody,
  CardHeader,
  Chip,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Progress,
} from 'oks-ui'
import {
  Clock,
  FileBarChart,
  FolderKanban,
  Image,
  Megaphone,
  MoreVertical,
  PackageCheck,
  Plus,
  ShieldCheck,
  Target,
  Ticket,
  Trophy,
  Wallet,
} from 'lucide-react'
import { PageHeader } from '../../Components/ui'
import { avatarUrl } from '../../lib/avatarUrl'
import { TEAM_CARDS } from '../../data/teamBoard'

const STAT_ICONS: Record<string, LucideIcon> = {
  Projects: FolderKanban,
  Ranking: Trophy,
  Budget: Wallet,
  Tickets: Ticket,
  Access: ShieldCheck,
  Reports: FileBarChart,
  Campaigns: Megaphone,
  Reach: Target,
  Assets: Image,
  Deliverables: PackageCheck,
}

export default function TeamBoard() {
  return (
    <div>
      <PageHeader
        title="Team Directory"
        subtitle="Review team composition, budgets, and delivery status at a glance."
        crumbs={[{ label: 'Verox', to: '/' }, { label: 'Apps' }, { label: 'Team Board' }]}
        actions={
          <Button color="primary" startContent={<Plus size={16} />}>
            Add New Team
          </Button>
        }
      />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {TEAM_CARDS.map((team) => (
          <Card key={team.id} className="h-full">
            <CardHeader className="flex items-start justify-between gap-2">
              <div className="flex items-center gap-2">
                <h3 className="text-[14px] font-semibold" style={{ color: 'var(--app-fg-strong)' }}>
                  {team.name}
                </h3>
                {team.isNew && (
                  <Chip size="sm" color="primary" variant="soft">
                    New
                  </Chip>
                )}
              </div>
              <Dropdown placement="bottom-end">
                <DropdownTrigger>
                  <Button isIconOnly size="sm" variant="ghost" color="default" aria-label="Team actions">
                    <MoreVertical size={16} />
                  </Button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Team actions">
                  <DropdownItem key="view" title="View team" />
                  <DropdownItem key="edit" title="Edit team" />
                  <DropdownItem key="archive" title="Archive team" />
                </DropdownMenu>
              </Dropdown>
            </CardHeader>

            <CardBody className="pt-0">
              <p className="text-[12.5px]" style={{ color: 'var(--app-fg-muted)' }}>
                Total {team.memberCount} members
              </p>
              <AvatarGroup max={4} size={28} className="mt-2">
                {team.memberSeeds.map((seed) => (
                  <Avatar key={seed} src={avatarUrl(seed)} name={seed} />
                ))}
              </AvatarGroup>

              <p className="mt-4 text-[11px] font-semibold uppercase tracking-wide" style={{ color: 'var(--app-fg-subtle)' }}>
                About team
              </p>
              <p className="mt-1 text-[12.5px] leading-relaxed" style={{ color: 'var(--app-fg-muted)' }}>
                {team.about}
              </p>

              <div className="mt-4 grid grid-cols-3 gap-2 border-t pt-4" style={{ borderColor: 'var(--app-border)' }}>
                {team.stats.map((s) => {
                  const Icon = STAT_ICONS[s.label] ?? FolderKanban
                  return (
                    <div key={s.label} className="flex flex-col gap-1">
                      <span
                        className="flex items-center gap-1 text-[10.5px] font-semibold uppercase tracking-wide"
                        style={{ color: 'var(--app-fg-subtle)' }}
                      >
                        <Icon size={12} /> {s.label}
                      </span>
                      <span className="text-[13px] font-semibold" style={{ color: 'var(--app-fg-strong)' }}>
                        {s.value}
                      </span>
                    </div>
                  )
                })}
              </div>

              <div className="mt-4">
                <div className="mb-1.5 flex items-center justify-between text-[12px]">
                  <span style={{ color: 'var(--app-fg-muted)' }}>{team.progressLabel}</span>
                  <span className="font-semibold" style={{ color: 'var(--app-fg-strong)' }}>
                    {team.progressValue}%
                  </span>
                </div>
                <Progress value={team.progressValue} size="sm" color="primary" aria-label={team.progressLabel} />
              </div>

              <div className="mt-4 flex items-center justify-between border-t pt-3" style={{ borderColor: 'var(--app-border)' }}>
                <span className="flex items-center gap-1.5 text-[11.5px]" style={{ color: 'var(--app-fg-subtle)' }}>
                  <Clock size={12} /> Updated {team.updatedAgo}
                </span>
                <Button size="sm" color="primary">
                  Details
                </Button>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  )
}
