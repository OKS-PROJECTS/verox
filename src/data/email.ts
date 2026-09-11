import { Inbox, Send, FileEdit, Trash2, type LucideIcon } from 'lucide-react'

export interface EmailFolder {
  id: string
  label: string
  icon: LucideIcon
  count: number
}

export const EMAIL_FOLDERS: EmailFolder[] = [
  { id: 'inbox', label: 'Inbox', icon: Inbox, count: 8 },
  { id: 'sent', label: 'Sent', icon: Send, count: 24 },
  { id: 'drafts', label: 'Drafts', icon: FileEdit, count: 3 },
  { id: 'trash', label: 'Trash', icon: Trash2, count: 12 },
]

export interface Email {
  id: string
  folder: string
  sender: string
  senderEmail: string
  avatarSeed: string
  subject: string
  snippet: string
  body: string[]
  time: string
  unread: boolean
}

export const EMAILS: Email[] = [
  {
    id: 'em-01',
    folder: 'inbox',
    sender: 'Priya Nair',
    senderEmail: 'priya.nair@northgate-supply.com',
    avatarSeed: 'priya-nair',
    subject: 'Q3 procurement schedule — sign-off needed',
    snippet: 'Attaching the revised procurement schedule for Q3. Could you review the vendor list before Friday?',
    body: [
      'Hi team,',
      'Attaching the revised procurement schedule for Q3. Could you review the vendor list before Friday so we can lock the budget before the planning sync next week?',
      'The main changes since the last draft are the added logistics line item and a slightly later cutover date for the warehouse migration. Nothing else has shifted.',
      'Let me know if anything looks off, otherwise I will circulate this to finance on Monday morning.',
      'Thanks,\nPriya',
    ],
    time: '9:14 AM',
    unread: true,
  },
  {
    id: 'em-02',
    folder: 'inbox',
    sender: 'Owen Clarke',
    senderEmail: 'owen.clarke@brightloop.io',
    avatarSeed: 'owen-clarke',
    subject: 'Re: Onboarding checklist for new hires',
    snippet: 'Looks good overall. One suggestion — can we move the equipment request earlier in the flow?',
    body: [
      'Hey,',
      'Looks good overall. One suggestion — can we move the equipment request earlier in the flow so new hires have a laptop by day one instead of day three?',
      'Everything else in the checklist reads fine to me. Happy to help pilot it with the next cohort if that is useful.',
      'Best,\nOwen',
    ],
    time: '8:47 AM',
    unread: true,
  },
  {
    id: 'em-03',
    folder: 'inbox',
    sender: 'Nina Hughes',
    senderEmail: 'nina.hughes@fieldworks-co.com',
    avatarSeed: 'nina-hughes',
    subject: 'Contract renewal — 30 day notice',
    snippet: 'Just a heads up that our current agreement renews automatically in 30 days unless we hear otherwise.',
    body: [
      'Hello,',
      'Just a heads up that our current service agreement renews automatically in 30 days unless we hear otherwise from your side.',
      'If you would like to revisit any of the line items — seat count, support tier, or billing cadence — now is a good window to do that before the renewal locks in.',
      'Happy to set up a short call if that is easier than email.',
      'Regards,\nNina',
    ],
    time: 'Yesterday',
    unread: false,
  },
  {
    id: 'em-04',
    folder: 'inbox',
    sender: 'Ryan Mitchell',
    senderEmail: 'ryan.mitchell@harborline.net',
    avatarSeed: 'ryan-mitchell',
    subject: 'Weekly status — shipping delays resolved',
    snippet: 'Good news, the carrier delay from last week has cleared and all backlog orders shipped this morning.',
    body: [
      'Team,',
      'Good news — the carrier delay from last week has cleared and all backlog orders shipped this morning. Tracking numbers are in the shared sheet.',
      'We are still keeping a buffer of two extra days on new orders through the end of the month just in case, but nothing urgent to flag beyond that.',
      'Ryan',
    ],
    time: 'Yesterday',
    unread: false,
  },
  {
    id: 'em-05',
    folder: 'inbox',
    sender: 'Lisa Brown',
    senderEmail: 'lisa.brown@summitpartners.co',
    avatarSeed: 'lisa-brown',
    subject: 'Invoice #INV-2014 is now overdue',
    snippet: 'This is a friendly reminder that invoice INV-2014 was due on the 3rd and remains unpaid.',
    body: [
      'Hi,',
      'This is a friendly reminder that invoice INV-2014 was due on the 3rd and remains unpaid. Could you confirm the expected payment date on your end?',
      'If this has already been sent, please disregard — our system can lag by a day or two on reconciliation.',
      'Thank you,\nLisa',
    ],
    time: 'Mon',
    unread: false,
  },
  {
    id: 'em-06',
    folder: 'inbox',
    sender: 'Carlos Diaz',
    senderEmail: 'carlos.diaz@meridian-labs.com',
    avatarSeed: 'carlos-diaz',
    subject: 'Design review notes from Thursday',
    snippet: 'Sharing the notes from the design review — three open questions at the bottom need answers.',
    body: [
      'Hi all,',
      'Sharing the notes from Thursday design review. Three open questions are listed at the bottom — flagging Priya and Owen directly since they touch onboarding.',
      'Otherwise the direction was well received and we can move to high-fidelity mocks next sprint.',
      'Carlos',
    ],
    time: 'Mon',
    unread: false,
  },
  {
    id: 'em-07',
    folder: 'inbox',
    sender: 'Jonathan Lee',
    senderEmail: 'jonathan.lee@northgate-supply.com',
    avatarSeed: 'jonathan-lee',
    subject: 'Calendar sync issue — duplicate events',
    snippet: 'A few of us are seeing duplicate recurring events after the last calendar sync. Investigating now.',
    body: [
      'Hi team,',
      'A few of us are seeing duplicate recurring events after the last calendar sync. Investigating now and will send an update by end of day.',
      'In the meantime, please do not manually delete the duplicates — that can desync the underlying series.',
      'Jonathan',
    ],
    time: 'Sun',
    unread: false,
  },
  {
    id: 'em-08',
    folder: 'inbox',
    sender: 'Samantha Reed',
    senderEmail: 'samantha.reed@brightloop.io',
    avatarSeed: 'samantha-reed',
    subject: 'Welcome to the team!',
    snippet: 'Excited to have you join us — here is a short list of things to get set up in your first week.',
    body: [
      'Welcome aboard!',
      'Excited to have you join us. Here is a short list of things to get set up in your first week: workstation access, the team wiki, and a short intro call with each pod lead.',
      'Reach out any time if something is unclear — nobody expects you to have this figured out on day one.',
      'Samantha',
    ],
    time: 'Last week',
    unread: false,
  },
  {
    id: 'em-09',
    folder: 'sent',
    sender: 'You',
    senderEmail: 'you@verox.app',
    avatarSeed: 'verox-you',
    subject: 'Re: Q3 procurement schedule — sign-off needed',
    snippet: 'Thanks Priya, this looks good on our end. Approving the vendor list as-is.',
    body: [
      'Hi Priya,',
      'Thanks — this looks good on our end. Approving the vendor list as-is, no concerns about the logistics line item.',
      'Go ahead and circulate to finance whenever you are ready.',
    ],
    time: '9:41 AM',
    unread: false,
  },
  {
    id: 'em-10',
    folder: 'drafts',
    sender: 'You',
    senderEmail: 'you@verox.app',
    avatarSeed: 'verox-you',
    subject: 'Draft: Follow up on contract renewal',
    snippet: 'Hi Nina, thanks for the notice — we would like to revisit the seat count before renewing.',
    body: [
      'Hi Nina,',
      'Thanks for the notice — we would like to revisit the seat count before renewing. Could we find 20 minutes this week?',
      '',
    ],
    time: 'Draft',
    unread: false,
  },
]
