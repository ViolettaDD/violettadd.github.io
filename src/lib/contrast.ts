// Contraste WCAG 2.x entre colores hex. Lo usa /_styleguide para auditar la paleta.

export function parseColorTokens(css: string): Record<string, string> {
  const tokens: Record<string, string> = {};
  for (const [, name, value] of css.matchAll(/--(color-[\w-]+):\s*([^;]+);/g)) {
    tokens[name] = value.trim();
  }
  // Resuelve referencias var(--color-x)
  for (let pass = 0; pass < 4; pass++) {
    for (const [name, value] of Object.entries(tokens)) {
      const ref = value.match(/^var\(--(color-[\w-]+)\)$/);
      if (ref && tokens[ref[1]]) tokens[name] = tokens[ref[1]];
    }
  }
  return tokens;
}

function channel(c: number): number {
  const s = c / 255;
  return s <= 0.04045 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
}

export function luminance(hex: string): number {
  const h = hex.replace('#', '');
  const full = h.length === 3 ? [...h].map((c) => c + c).join('') : h;
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(full.slice(i, i + 2), 16));
  return 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b);
}

export function contrastRatio(a: string, b: string): number {
  const [l1, l2] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (l1 + 0.05) / (l2 + 0.05);
}

export type ContrastLevel = 'AAA' | 'AA' | 'AA grande' | 'Falla';

export function contrastLevel(ratio: number): ContrastLevel {
  if (ratio >= 7) return 'AAA';
  if (ratio >= 4.5) return 'AA';
  if (ratio >= 3) return 'AA grande';
  return 'Falla';
}
