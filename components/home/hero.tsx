"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button, Link } from "@heroui/react";
import { Icon } from "@iconify/react";

import { useI18n } from "@/components/i18n-provider";
import { ThemedImage } from "@/components/themed-image";
import { SITE } from "@/data";

/** The hero's one visual is a real product, not decoration: LifeHub, built and self-hosted by the owner. */
const lifehub = SITE.projects.find((p) => p.key === "lifehub");

export const HeroSection = () => {
  const { dict, path } = useI18n();
  const {
    title,
    headline,
    subtitle,
    primaryAction,
    secondaryAction,
    previewCaption,
  } = dict.home.hero;

  return (
    // No full-viewport min-height: the next section should start just below
    // the fold so the first screen invites a scroll instead of ending in a
    // dead band.
    <section className="container mx-auto max-w-6xl px-6 py-16 md:py-24 lg:py-28">
      {/* The page's only entrance on load: a short fade and rise. */}
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="grid w-full items-center gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16"
        initial={{ opacity: 0, y: 8 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <div>
          <div className="mb-8 flex items-center gap-3">
            <Image
              priority
              alt={SITE.name}
              className="h-12 w-12 rounded-full object-cover object-top"
              height={48}
              sizes="48px"
              src={SITE.image}
              width={48}
            />
            <div>
              <p className="font-medium text-foreground">{SITE.name}</p>
              <p className="font-mono text-xs text-foreground-500">{title}</p>
            </div>
          </div>

          <h1 className="text-4xl font-medium leading-[1.1] tracking-[-0.02em] text-foreground md:text-5xl xl:text-[56px]">
            {headline}
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground-600">
            {subtitle}
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button
              as={Link}
              color="primary"
              endContent={<Icon icon="lucide:send" />}
              href={path("/contact")}
              size="lg"
            >
              {primaryAction}
            </Button>
            <Button
              as={Link}
              endContent={<Icon icon="lucide:arrow-right" />}
              href={path("/about")}
              size="lg"
              variant="bordered"
            >
              {secondaryAction}
            </Button>
          </div>
        </div>

        {lifehub && (
          <figure>
            <div className="overflow-hidden rounded-2xl border border-divider bg-content1 shadow-[0_8px_24px_rgba(0,0,0,0.06)] dark:shadow-none">
              <div className="flex h-9 items-center gap-2 border-b border-divider px-4">
                <Icon
                  className="h-3 w-3 text-foreground-400"
                  icon="lucide:lock"
                />
                <span className="font-mono text-xs text-foreground-500">
                  app.ptp-phamphong.com
                </span>
              </div>
              <ThemedImage
                priority
                alt={previewCaption}
                className="h-auto w-full"
                height={1800}
                sizes="(max-width: 1024px) 100vw, 680px"
                src={lifehub.image}
                width={2880}
              />
            </div>
            <figcaption className="mt-4">
              <Link
                className="gap-2 text-sm text-foreground-600 transition-colors hover:text-foreground"
                href={path("/projects")}
              >
                {previewCaption}
                <Icon className="h-4 w-4" icon="lucide:arrow-right" />
              </Link>
            </figcaption>
          </figure>
        )}
      </motion.div>
    </section>
  );
};
