import { Dictionary } from "@/data/types";
import { en } from "@/data/dictionaries/en";
import { vi } from "@/data/dictionaries/vi";

export const LOCALES = ["en", "vi"] as const;
export const DEFAULT_LOCALE: Locale = "en";

export type Locale = (typeof LOCALES)[number];

const DICTIONARIES: Record<Locale, Dictionary> = { en, vi };

export const isLocale = (value: string): value is Locale =>
  (LOCALES as readonly string[]).includes(value);

export const getDictionary = (locale: Locale): Dictionary =>
  DICTIONARIES[locale] ?? DICTIONARIES[DEFAULT_LOCALE];

/** Prefixes an in-app path with the active locale: ("vi", "/about") -> "/vi/about". */
export const localePath = (locale: Locale, path: string): string =>
  path === "/" ? `/${locale}` : `/${locale}${path}`;

export { SITE } from "@/data/site";
export type { Dictionary } from "@/data/types";
