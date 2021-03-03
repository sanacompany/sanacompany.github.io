export function toDashCase(string) {
  return string.trim().replace(/\s+/g, '-').toLowerCase()
}
