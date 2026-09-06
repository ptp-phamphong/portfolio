"use client";

import { usePathname, useRouter } from "next/navigation";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/react";
import { Icon } from "@iconify/react";

import { useI18n } from "@/components/i18n-provider";
import { getDictionary, isLocale, Locale, LOCALES } from "@/data";

/** "/vi/about" -> "/about" ; "/en" -> "/" */
const stripLocale = (pathname: string): string => {
  const [, first, ...rest] = pathname.split("/");

  if (!first || !isLocale(first)) return pathname;

  return rest.length ? `/${rest.join("/")}` : "/";
};

export const LanguageSwitcher = () => {
  const { locale } = useI18n();
  const pathname = usePathname();
  const router = useRouter();

  const switchTo = (next: Locale) => {
    const rest = stripLocale(pathname);

    router.push(rest === "/" ? `/${next}` : `/${next}${rest}`);
  };

  return (
    <Dropdown placement="bottom-end">
      <DropdownTrigger>
        <Button
          isIconOnly
          aria-label="Change language"
          className="text-default-500"
          variant="light"
        >
          <span className="flex items-center gap-1">
            <Icon icon="lucide:languages" width={18} />
            <span className="text-xs font-semibold">
              {getDictionary(locale).languageShort}
            </span>
          </span>
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        disallowEmptySelection
        aria-label="Language"
        selectedKeys={[locale]}
        selectionMode="single"
        onAction={(key) => switchTo(key as Locale)}
      >
        {LOCALES.map((code) => (
          <DropdownItem key={code}>{getDictionary(code).languageName}</DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};
