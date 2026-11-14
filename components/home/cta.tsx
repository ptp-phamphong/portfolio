"use client";

import { Button, Link } from "@heroui/react";
import { Icon } from "@iconify/react";

import { useI18n } from "@/components/i18n-provider";
import { SITE } from "@/data";

export const CtaSection = () => {
  const { dict } = useI18n();
  const { title, description, buttonLabel } = dict.home.cta;

  return (
    <section className="container mx-auto max-w-6xl px-6 pb-24">
      <div className="flex flex-col items-start gap-6 rounded-2xl border border-divider bg-content1 p-8 md:flex-row md:items-center md:justify-between md:p-10">
        <div className="max-w-xl">
          <h2 className="text-2xl font-medium text-foreground md:text-3xl">
            {title}
          </h2>
          <p className="mt-3 text-foreground-600">{description}</p>
        </div>
        <Button
          as={Link}
          className="shrink-0"
          color="primary"
          endContent={<Icon icon="lucide:mail" />}
          href={`mailto:${SITE.email}`}
          size="lg"
        >
          {buttonLabel}
        </Button>
      </div>
    </section>
  );
};
