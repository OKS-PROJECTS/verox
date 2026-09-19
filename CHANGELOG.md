# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/).

> Requires oks-ui ^1.2.0

## [Unreleased]

### Changed

- Bumped `oks-ui` from `1.1.2` to `1.2.0`. No breaking changes hit this
  codebase — full build, lint, and a 90-route sweep (desktop + mobile) all
  came back clean. The package's type declarations now ship per-component
  instead of one flat file, but the public import surface is unchanged.
- Fixed an HTML-nesting bug in `KpiCard` (a `Chip` — which renders a block
  `<div>` — was nested inside a `<p>`), surfaced by the upgrade's console
  warnings rather than caused by it.

## [0.1.0] — 2026-09-11

### Added

- Initial build: app shell (sidebar, header, live theme customizer),
  design-token layer, default dashboard, every archetype (list/CRUD, form,
  detail, board), the full component gallery, and every nav route wired to
  a real page.
