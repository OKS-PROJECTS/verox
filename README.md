# Verox

Verox is a promotional admin-dashboard template — a default dashboard,
nine app archetypes (email, chat, calendar, team directory, invoicing,
issue tracking, app management), a full form/table/chart gallery, every
auth flow, and every supporting custom/error page — built entirely on top
of the [`oks-ui`](https://www.npmjs.com/package/oks-ui) React component
library.

Every screen renders through `oks-ui` primitives (`Button`, `Card`, `Table`,
`Chart`, `Nav`, `Calendar`, `Board`, form fields, and friends) composed into
a small set of reusable page archetypes — there is no other UI, chart, form,
or validation library in this codebase. Where `oks-ui` doesn't yet have a
primitive for something (a page header band, a data table with built-in
pagination, a KPI tile), it's composed from what the library does provide
and logged as a gap rather than pulled in from elsewhere.

## Stack

- [Vite](https://vite.dev) + [React 19](https://react.dev) + TypeScript
- [react-router-dom](https://reactrouter.com) v7 for routing
- [Tailwind CSS](https://tailwindcss.com) v4, used only for layout utilities
  (spacing, flex/grid, breakpoints) — all color/typography/shape comes from
  the `oks-ui` design-token system
- [oxlint](https://oxc.rs) for linting
- [lucide-react](https://lucide.dev) for icons

## Getting started

```bash
npm install
npm run dev      # start the dev server
npm run build    # type-check (tsc -b) and production build
npm run lint      # oxlint
npm run preview   # preview a production build locally
```

## What's here

- **Dashboard** — KPI tiles, a combo bar/line performance chart, an
  engagement trend, a goal-tracking ring gauge, a regional sales
  breakdown, and a page-analytics table.
- **Apps** — Email (3-pane inbox), Team Directory, Chat, Calendar (full
  month event grid), Invoices (list/detail/create), Outlook-style unified
  inbox, Issue Tracker, and Manage Apps.
- **Custom pages** — FAQ, Pricing, Empty state, Timeline, Search results.
- **Forms & tables** — every form field type, a multi-step wizard, file
  uploads, and static/searchable/paginated table patterns.
- **Charts** — line, area, bar, column, pie, donut, radial, heatmap, and
  sparkline galleries built on `oks-ui`'s `Chart`.
- **Auth** — sign in, sign up, reset password, two-factor, lock screen,
  PIN login, delete-account confirmation — all shell-less, standalone
  pages.
- **Component gallery** — every `oks-ui` primitive used in this template,
  browsable with live previews and source snippets at `/components`.
- **Theming** — light/dark mode, a full design-token layer
  (`src/styles/theme.css`), and a live theme customizer in the header.

Every item in the sidebar navigation resolves to a real page — nothing is
a placeholder.

## Project structure

```
src/
  Components/
    Commom/       # app shell: Header, Sidebar
    archetypes/    # reusable page templates (List, Form, Detail)
    ui/            # small composed pieces (PageHeader, KpiCard, DataTable, …)
  Pages/           # route components, grouped by nav section
  data/            # mock data + nav/gallery configuration
  lib/             # theme context, avatar helper, logo
  styles/theme.css  # design tokens + the handful of documented oks-ui overrides
```

## License

MIT — see [LICENSE](./LICENSE).
