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
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

import { useI18n } from "@/components/i18n-provider";
import { LanguageSwitcher } from "@/components/language-switcher";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { SITE } from "@/data";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const { dict, path } = useI18n();

  const menuItems = [
    { name: dict.nav.home, href: path("/"), icon: "lucide:home" },
    { name: dict.nav.about, href: path("/about"), icon: "lucide:user" },
    {
      name: dict.nav.projects,
      href: path("/projects"),
      icon: "lucide:folder-git-2",
    },
    { name: dict.nav.contact, href: path("/contact"), icon: "lucide:send" },
  ];

  return (
    <Navbar
      isBordered
      className="bg-background/70 backdrop-blur-md border-b border-divider"
      isMenuOpen={isMenuOpen}
      maxWidth="xl"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="flex justify-between items-center w-full">
        <NavbarBrand>
          <motion.div
            animate={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              className="text-brand-gradient font-bold text-xl"
              href={path("/")}
              onClick={() => setIsMenuOpen(false)}
            >
              {SITE.name}
            </Link>
          </motion.div>
        </NavbarBrand>

        <NavbarContent className="hidden sm:flex justify-center gap-6 flex-grow">
          {menuItems.map((item, index) => (
            <NavbarItem key={item.href}>
              <motion.div
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -10 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Link
                  className={`flex items-center gap-2 transition-colors ${
                    pathname === item.href
                      ? "text-primary-500 font-semibold"
                      : "text-foreground hover:text-primary-500"
                  }`}
                  href={item.href}
                >
                  <Icon className="w-5 h-5 text-primary-500" icon={item.icon} />
                  {item.name}
                </Link>
              </motion.div>
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
      <NavbarMenu className="bg-background/80 backdrop-blur-lg pt-6 sm:hidden">
        <div className="mx-auto max-w-lg space-y-4">
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={item.href}>
              <motion.div
                animate={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -20 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Link
                  className="w-full flex items-center gap-3 py-3 px-4 rounded-medium hover:bg-content1 transition-colors"
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Icon className="w-5 h-5 text-primary-500" icon={item.icon} />
                  {item.name}
                </Link>
              </motion.div>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </Navbar>
  );
};
