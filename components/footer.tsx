"use client";

import { Button, Link } from "@heroui/react";
import { Icon } from "@iconify/react";

import { useI18n } from "@/components/i18n-provider";
import { SITE } from "@/data";

export const Footer = () => {
  const { dict } = useI18n();
  const { connectTitle, contactTitle, description, selfHosted } = dict.footer;
  const socialLinks = Object.values(SITE.social);

  return (
    <footer className="border-t border-divider bg-content1 py-12">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-8 mb-8 md:grid-cols-3">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-medium mb-4">{connectTitle}</h3>
            <p className="text-foreground-600 mb-4 max-w-md">{description}</p>
            <div className="flex gap-2">
              {socialLinks.map((social) => (
                <Button
                  key={social.url}
                  isExternal
                  isIconOnly
                  aria-label={social.handle}
                  as={Link}
                  className="text-foreground-600"
                  href={social.url}
                  variant="light"
                >
                  <Icon className="w-5 h-5" icon={social.icon} />
                </Button>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-medium mb-4">{contactTitle}</h4>
            <ul className="space-y-2 text-foreground-600">
              <li className="flex items-center gap-2">
                <Icon className="text-foreground-500" icon="lucide:mail" />
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </li>
              <li className="flex items-center gap-2">
                <Icon className="text-foreground-500" icon="lucide:map-pin" />
                {dict.contact.location}
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-divider pt-8 font-mono text-xs text-foreground-500">
          <p>
            © {new Date().getFullYear()} {SITE.name} · {selfHosted}
          </p>
        </div>
      </div>
    </footer>
  );
};
