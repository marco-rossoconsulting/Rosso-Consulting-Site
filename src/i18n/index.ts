import en, { type Copy } from './en';
import it from './it';
import es from './es';
import type { Lang } from './config';

const copies: Record<Lang, Copy> = { en, it, es };

export function getCopy(lang: Lang): Copy {
  return copies[lang];
}

export type { Copy };
export * from './config';
