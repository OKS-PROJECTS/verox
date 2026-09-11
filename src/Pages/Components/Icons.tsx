import { Card, CardBody } from 'oks-ui'
import {
  LayoutGrid, Mail, Bell, Search, Settings, Users, Calendar, FileText, Download,
  Upload, Trash2, Pencil, Eye, Plus, Check, X, ChevronDown, Star, Heart, Clock,
  Home, ShoppingBag, DollarSign, TrendingUp, MessageSquare, Lock, Shield, Globe,
} from 'lucide-react'
import { PageHeader } from '../../Components/ui'

const ICONS = [
  { Icon: LayoutGrid, name: 'LayoutGrid' }, { Icon: Mail, name: 'Mail' }, { Icon: Bell, name: 'Bell' },
  { Icon: Search, name: 'Search' }, { Icon: Settings, name: 'Settings' }, { Icon: Users, name: 'Users' },
  { Icon: Calendar, name: 'Calendar' }, { Icon: FileText, name: 'FileText' }, { Icon: Download, name: 'Download' },
  { Icon: Upload, name: 'Upload' }, { Icon: Trash2, name: 'Trash2' }, { Icon: Pencil, name: 'Pencil' },
  { Icon: Eye, name: 'Eye' }, { Icon: Plus, name: 'Plus' }, { Icon: Check, name: 'Check' },
  { Icon: X, name: 'X' }, { Icon: ChevronDown, name: 'ChevronDown' }, { Icon: Star, name: 'Star' },
  { Icon: Heart, name: 'Heart' }, { Icon: Clock, name: 'Clock' }, { Icon: Home, name: 'Home' },
  { Icon: ShoppingBag, name: 'ShoppingBag' }, { Icon: DollarSign, name: 'DollarSign' }, { Icon: TrendingUp, name: 'TrendingUp' },
  { Icon: MessageSquare, name: 'MessageSquare' }, { Icon: Lock, name: 'Lock' }, { Icon: Shield, name: 'Shield' },
  { Icon: Globe, name: 'Globe' },
]

export default function Icons() {
  return (
    <div>
      <PageHeader
        title="Icons"
        subtitle="lucide-react is Verox's only icon set — a sample of the ones used throughout the app."
        crumbs={[{ label: 'Verox', to: '/' }, { label: 'Components' }, { label: 'Icons' }]}
      />
      <Card>
        <CardBody>
          <div className="grid grid-cols-3 gap-3 sm:grid-cols-5 lg:grid-cols-7">
            {ICONS.map(({ Icon, name }) => (
              <div
                key={name}
                className="flex flex-col items-center gap-2 rounded-[var(--oks-radius-md)] p-3"
                style={{ border: '1px solid var(--app-border)' }}
              >
                <Icon size={20} style={{ color: 'var(--app-fg)' }} />
                <span className="truncate text-[10px]" style={{ color: 'var(--app-fg-subtle)' }}>
                  {name}
                </span>
              </div>
            ))}
          </div>
        </CardBody>
      </Card>
    </div>
  )
}
