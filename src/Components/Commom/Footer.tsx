export function Footer() {
  return (
    <footer className="flex flex-col items-center justify-between gap-2 px-1 py-4 text-xs sm:flex-row" style={{ color: 'var(--app-fg-subtle)' }}>
      <span>
        © {new Date().getFullYear()} Verox. Built entirely with <span style={{ color: 'var(--app-primary)' }}>oks-ui</span>.
      </span>
      <span>v1.0.0</span>
    </footer>
  )
}
