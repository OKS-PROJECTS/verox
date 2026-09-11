export interface ChatMessage {
  id: string
  author: string
  avatarSeed: string
  align: 'start' | 'end'
  body: string
  timestamp: string
  status?: 'sending' | 'sent' | 'delivered' | 'read' | 'failed'
}

export interface Conversation {
  id: string
  name: string
  avatarSeed: string
  lastMessage: string
  time: string
  unread: number
  online: boolean
  messages: ChatMessage[]
}

export const CONVERSATIONS: Conversation[] = [
  {
    id: 'c-01',
    name: 'Priya Nair',
    avatarSeed: 'priya-nair',
    lastMessage: 'Sounds good, I will send the deck tonight.',
    time: '9:42 AM',
    unread: 2,
    online: true,
    messages: [
      { id: 'm-01', author: 'Priya Nair', avatarSeed: 'priya-nair', align: 'start', body: 'Morning! Did the vendor list changes go through on your end?', timestamp: '9:02 AM' },
      { id: 'm-02', author: 'You', avatarSeed: 'verox-you', align: 'end', body: 'Yep, approved it this morning. Logistics line item looked right.', timestamp: '9:05 AM', status: 'read' },
      { id: 'm-03', author: 'Priya Nair', avatarSeed: 'priya-nair', align: 'start', body: 'Great, thank you. Circulating to finance now.', timestamp: '9:06 AM' },
      { id: 'm-04', author: 'Priya Nair', avatarSeed: 'priya-nair', align: 'start', body: 'One more thing — can we push the planning sync to Thursday?', timestamp: '9:07 AM' },
      { id: 'm-05', author: 'You', avatarSeed: 'verox-you', align: 'end', body: 'Thursday works for me, I will move the invite.', timestamp: '9:20 AM', status: 'read' },
      { id: 'm-06', author: 'Priya Nair', avatarSeed: 'priya-nair', align: 'start', body: 'Appreciate it. Also wanted to loop you in on the deck for Friday review.', timestamp: '9:38 AM' },
      { id: 'm-07', author: 'You', avatarSeed: 'verox-you', align: 'end', body: 'Happy to take a first pass whenever it is ready.', timestamp: '9:40 AM', status: 'delivered' },
      { id: 'm-08', author: 'Priya Nair', avatarSeed: 'priya-nair', align: 'start', body: 'Sounds good, I will send the deck tonight.', timestamp: '9:42 AM' },
    ],
  },
  {
    id: 'c-02',
    name: 'Owen Clarke',
    avatarSeed: 'owen-clarke',
    lastMessage: 'Can we move the equipment step earlier?',
    time: '8:51 AM',
    unread: 0,
    online: true,
    messages: [
      { id: 'm-09', author: 'Owen Clarke', avatarSeed: 'owen-clarke', align: 'start', body: 'Reviewed the onboarding checklist, left a comment.', timestamp: '8:40 AM' },
      { id: 'm-10', author: 'Owen Clarke', avatarSeed: 'owen-clarke', align: 'start', body: 'Can we move the equipment step earlier?', timestamp: '8:51 AM' },
    ],
  },
  {
    id: 'c-03',
    name: 'Nina Hughes',
    avatarSeed: 'nina-hughes',
    lastMessage: 'Sending the renewal terms over shortly.',
    time: 'Yesterday',
    unread: 0,
    online: false,
    messages: [
      { id: 'm-11', author: 'Nina Hughes', avatarSeed: 'nina-hughes', align: 'start', body: 'Sending the renewal terms over shortly.', timestamp: 'Yesterday' },
    ],
  },
  {
    id: 'c-04',
    name: 'Ryan Mitchell',
    avatarSeed: 'ryan-mitchell',
    lastMessage: 'All backlog orders shipped this morning.',
    time: 'Yesterday',
    unread: 0,
    online: false,
    messages: [
      { id: 'm-12', author: 'Ryan Mitchell', avatarSeed: 'ryan-mitchell', align: 'start', body: 'All backlog orders shipped this morning.', timestamp: 'Yesterday' },
    ],
  },
  {
    id: 'c-05',
    name: 'Carlos Diaz',
    avatarSeed: 'carlos-diaz',
    lastMessage: 'Notes from the design review are up.',
    time: 'Mon',
    unread: 5,
    online: true,
    messages: [
      { id: 'm-13', author: 'Carlos Diaz', avatarSeed: 'carlos-diaz', align: 'start', body: 'Notes from the design review are up.', timestamp: 'Mon' },
    ],
  },
  {
    id: 'c-06',
    name: 'Samantha Reed',
    avatarSeed: 'samantha-reed',
    lastMessage: 'Welcome again — let me know if you need anything.',
    time: 'Last week',
    unread: 0,
    online: false,
    messages: [
      { id: 'm-14', author: 'Samantha Reed', avatarSeed: 'samantha-reed', align: 'start', body: 'Welcome again — let me know if you need anything.', timestamp: 'Last week' },
    ],
  },
]
