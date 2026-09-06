"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button, Link } from "@heroui/react";
import { Icon } from "@iconify/react";

import { Hole } from "@/components/backgrounds/hole/hole";
import { useI18n } from "@/components/i18n-provider";
import { SITE } from "@/data";

export const HeroSection = ({
  showBackground = true,
}: {
  showBackground?: boolean;
}) => {
  const { dict, path } = useI18n();
  const {
    greeting,
    title,
    headline,
    subtitle,
    primaryAction,
    secondaryAction,
  } = dict.home.hero;

  return (
    <section className="min-h-[calc(100vh-64px)] flex items-center justify-center relative overflow-hidden bg-background">
      {showBackground && <Hole />}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-500/10 to-transparent" />
      <div className="container mx-auto px-4 z-10">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            animate={{ opacity: 1, scale: 1 }}
            className="mb-8 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 opacity-70 blur-md" />
              <Image
                priority
                alt={SITE.name}
                className="relative h-36 w-36 rounded-full object-cover object-top ring-2 ring-background/80 shadow-xl"
                height={144}
                sizes="144px"
                src={SITE.image}
                width={144}
              />
            </div>
          </motion.div>

          <motion.h1
            animate={{ opacity: 1, y: 0 }}
            className="text-brand-gradient text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {greeting} {SITE.name} &mdash; {headline}
          </motion.h1>

          <motion.p
            animate={{ opacity: 1, y: 0 }}
            className="text-foreground-500 text-sm md:text-base mb-4 font-medium uppercase tracking-widest"
            initial={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {title}
          </motion.p>

          <motion.p
            animate={{ opacity: 1, y: 0 }}
            className="text-foreground-600 text-lg md:text-xl mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {subtitle}
          </motion.p>

          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <Button
              aria-label={primaryAction}
              as={Link}
              className="w-full sm:w-auto"
              color="primary"
              endContent={<Icon icon="lucide:send" />}
              href={path("/contact")}
              size="lg"
              variant="shadow"
            >
              {primaryAction}
            </Button>
            <Button
              aria-label={secondaryAction}
              as={Link}
              className="w-full sm:w-auto"
              color="primary"
              endContent={<Icon icon="lucide:arrow-right" />}
              href={path("/about")}
              size="lg"
              variant="bordered"
            >
              {secondaryAction}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
