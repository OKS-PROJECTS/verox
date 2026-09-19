# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/).

> Requires oks-ui ^1.2.0

## [1.0.0] — 2026-09-19

### Changed

- Bumped `oks-ui` from `1.1.2` to `1.2.0`. No breaking changes hit this
  codebase — full build, lint, and a 90-route sweep (desktop + mobile) all
  came back clean. The package's type declarations now ship per-component
  instead of one flat file, but the public import surface is unchanged.
- Fixed an HTML-nesting bug in `KpiCard` (a `Chip` — which renders a block
  `<div>` — was nested inside a `<p>`), surfaced by the upgrade's console
  warnings rather than caused by it.
- Rebuilt Team Board as a team-roster card grid (members, about text, a
  stat row, a progress bar, Details) instead of a drag-and-drop kanban
  board — an earlier design pass had assumed "kanban" from the nav label
  without opening the reference page. Moved the kanban pattern itself into
  the component gallery as a `Board` demo instead of losing it entirely.
- Rebuilt Calendar as a full month event grid — colored event pills inside
  each day cell, a Create Event button, and a category legend — instead of
  a small compact date-picker. Also fixed mock events silently repeating
  on every month (they were keyed by day-of-month only; switched to a real
  date field).
- Cleaned up stale "kanban" copy left over from the Team Board rebuild
  (Manage Apps card description, sidebar icon, an Issue Tracker mock
  ticket).
- Added a real `README.md` and an MIT `LICENSE`.

## [0.1.0] — 2026-09-11

### Added

- Initial build: app shell (sidebar, header, live theme customizer),
  design-token layer, default dashboard, every archetype (list/CRUD, form,
  detail, board), the full component gallery, and every nav route wired to
  a real page.
