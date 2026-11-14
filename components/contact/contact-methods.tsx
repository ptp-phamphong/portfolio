"use client";

import { Button, Link } from "@heroui/react";
import { Icon } from "@iconify/react";

import { ContactMethod } from "@/components/contact/types";

/** mailto:/tel: open an app on this device; everything else is a new tab. */
const isExternalHref = (href: string) =>
  !href.startsWith("mailto:") && !href.startsWith("tel:");

/**
 * One card, one row per channel, hairlines between rows. Icons take the muted
 * text color: the values are what people came for, so they carry the contrast.
 */
export const ContactMethods = ({
  methods,
}: {
  methods: readonly ContactMethod[];
}) => (
  <ul className="divide-y divide-divider rounded-2xl border border-divider bg-content1">
    {methods.map((method) => (
      <li key={method.label} className="flex items-center gap-4 px-5 py-4">
        <Icon
          aria-hidden
          className="h-[18px] w-[18px] shrink-0 text-foreground-500"
          icon={method.icon}
        />
        <div className="min-w-0">
          <p className="text-sm text-foreground-500">{method.label}</p>
          {method.href ? (
            // break-words, not break-all: wrap only when the value cannot fit,
            // and then at a sensible point instead of mid-word.
            <Link
              className="break-words"
              color="foreground"
              href={method.href}
              isExternal={isExternalHref(method.href)}
              showAnchorIcon={isExternalHref(method.href)}
              underline="hover"
            >
              {method.value}
            </Link>
          ) : (
            <p className="text-foreground">{method.value}</p>
          )}
        </div>
      </li>
    ))}
  </ul>
);

export const EmailButton = ({ href, label }: { href: string; label: string }) => (
  <Button
    as={Link}
    className="w-full sm:w-auto"
    color="primary"
    endContent={<Icon icon="lucide:mail" />}
    href={href}
    size="lg"
  >
    {label}
  </Button>
);
