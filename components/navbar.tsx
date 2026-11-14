"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/react";

import { useI18n } from "@/components/i18n-provider";
import { LanguageSwitcher } from "@/components/language-switcher";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { SITE } from "@/data";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // trailingSlash: true in next.config.js makes the exported URL "/vi/about/"
  // while the links are built as "/vi/about"; compare without the slash or no
  // item is ever marked current.
  const pathname = usePathname().replace(/\/+$/, "") || "/";
  const { dict, path } = useI18n();

  const menuItems = [
    { name: dict.nav.home, href: path("/") },
    { name: dict.nav.about, href: path("/about") },
    { name: dict.nav.projects, href: path("/projects") },
    { name: dict.nav.contact, href: path("/contact") },
  ];

  // Colour only marks the current page: a weight change would shift the row.
  // primary-600 is the accent shade for small text: darker blue on light,
  // lighter blue on dark (the theme mirrors the scale). Plain primary is
  // 4.5:1 on light and 3.8:1 on dark, too low at 14px.
  const linkClass = (href: string) =>
    pathname === href
      ? "text-primary-600"
      : "text-foreground-600 hover:text-foreground";

  return (
    <Navbar
      isBordered
      className="bg-background/80 backdrop-blur-md border-b border-divider"
      isMenuOpen={isMenuOpen}
      maxWidth="xl"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="flex justify-between items-center w-full">
        <NavbarBrand>
          <Link
            className="font-medium text-base text-foreground"
            href={path("/")}
            onClick={() => setIsMenuOpen(false)}
          >
            {SITE.name}
          </Link>
        </NavbarBrand>

        <NavbarContent className="hidden sm:flex justify-center gap-6 flex-grow">
          {menuItems.map((item) => (
            <NavbarItem key={item.href}>
              <Link
                aria-current={pathname === item.href ? "page" : undefined}
                className={`text-sm transition-colors ${linkClass(item.href)}`}
                href={item.href}
              >
                {item.name}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>

        <NavbarItem className="flex items-center gap-1">
          <LanguageSwitcher />
          <ThemeSwitcher />
        </NavbarItem>

        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu className="bg-background/95 backdrop-blur-lg pt-6 sm:hidden">
        <div className="mx-auto w-full max-w-lg space-y-1">
          {menuItems.map((item) => (
            <NavbarMenuItem key={item.href}>
              <Link
                aria-current={pathname === item.href ? "page" : undefined}
                className={`block w-full rounded-medium px-4 py-3 transition-colors hover:bg-content1 ${linkClass(item.href)}`}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </Navbar>
  );
};
