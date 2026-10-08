/**
 * Curly quotes and apostrophes (Brand Guidelines, 06 · Style sheet).
 * Markdown bodies get this from Astro's SmartyPants; frontmatter strings
 * such as titles and decks pass through here.
 */
export function smartQuotes(s: string): string {
  return s
    .replace(/(^|[\s([{—–-])"/g, '$1“')
    .replace(/"/g, '”')
    .replace(/(^|[\s([{—–-])'/g, '$1‘')
    .replace(/'/g, '’');
}
