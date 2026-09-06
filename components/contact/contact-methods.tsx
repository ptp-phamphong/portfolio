"use client";

import { motion } from "framer-motion";
import { Button, Link } from "@heroui/react";
import { Icon } from "@iconify/react";

import { ContactMethod } from "@/components/contact/types";

interface ContactMethodsProps {
  methods: readonly ContactMethod[];
  primaryHref: string;
  primaryLabel: string;
}

export const ContactMethods = ({
  methods,
  primaryHref,
  primaryLabel,
}: ContactMethodsProps) => (
  <div className="flex flex-col gap-8">
    <ul className="flex flex-col gap-4">
      {methods.map((method, index) => (
        <motion.li
          key={method.label}
          className="flex items-center gap-4 rounded-medium border border-divider p-4"
          initial={{ opacity: 0, y: 12 }}
          transition={{ delay: index * 0.08, duration: 0.5 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <div className="p-2.5 rounded-full bg-primary-100 shrink-0">
            <Icon className="w-5 h-5 text-primary-500" icon={method.icon} />
          </div>
          <div className="min-w-0">
            <p className="text-sm text-foreground-500">{method.label}</p>
            {method.href ? (
              <Link
                className="text-foreground break-all"
                href={method.href}
                isExternal={
                  !method.href.startsWith("mailto:") &&
                  !method.href.startsWith("tel:")
                }
                showAnchorIcon={
                  !method.href.startsWith("mailto:") &&
                  !method.href.startsWith("tel:")
                }
              >
                {method.value}
              </Link>
            ) : (
              <p className="text-foreground">{method.value}</p>
            )}
          </div>
        </motion.li>
      ))}
    </ul>

    <Button
      aria-label={primaryLabel}
      as={Link}
      color="primary"
      endContent={<Icon icon="lucide:mail" />}
      href={primaryHref}
      size="lg"
      variant="shadow"
    >
      {primaryLabel}
    </Button>
  </div>
);
