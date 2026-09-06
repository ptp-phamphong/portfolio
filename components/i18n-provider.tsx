"use client";

import { createContext, useContext, useMemo } from "react";

import { Dictionary, Locale, localePath } from "@/data";

interface I18nValue {
  locale: Locale;
  dict: Dictionary;
  /** Prefixes an in-app path with the active locale. */
  path: (path: string) => string;
}

const I18nContext = createContext<I18nValue | null>(null);

export const I18nProvider = ({
  locale,
  dict,
  children,
}: {
  locale: Locale;
  dict: Dictionary;
  children: React.ReactNode;
}) => {
  const value = useMemo<I18nValue>(
    () => ({ locale, dict, path: (p: string) => localePath(locale, p) }),
    [locale, dict],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useI18n = (): I18nValue => {
  const value = useContext(I18nContext);

  if (!value) {
    throw new Error("useI18n must be used inside <I18nProvider>");
  }

  return value;
};
