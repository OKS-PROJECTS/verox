/**
 * Deterministic photo URL for a person avatar. `oks-ui`'s `Avatar` falls
 * back to initials automatically if this fails to load. This is the
 * template's only external runtime dependency (see PLAYBOOK-NOTES.md).
 */
export function avatarUrl(seed: string, size = 150): string {
  return `https://i.pravatar.cc/${size}?u=${encodeURIComponent(seed)}`
}
