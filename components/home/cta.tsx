"use client";

import { motion } from "framer-motion";
import { Button, Card, CardBody, Link } from "@heroui/react";
import { Icon } from "@iconify/react";

import { useI18n } from "@/components/i18n-provider";
import { SITE } from "@/data";

export const CtaSection = () => {
  const { dict } = useI18n();
  const { title, description, buttonLabel } = dict.home.cta;
  const { email } = SITE;

  return (
    <section className="pb-24">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <Card className="border-none shadow-xl bg-white/90 dark:bg-black/60">
            <CardBody className="p-8 flex flex-col items-center text-center gap-4">
              <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
              <p className="text-foreground-600 max-w-xl">{description}</p>
              <Button
                aria-label={buttonLabel}
                as={Link}
                className="mt-2"
                color="primary"
                endContent={<Icon icon="lucide:mail" />}
                href={`mailto:${email}`}
                size="lg"
                variant="shadow"
              >
                {buttonLabel}
              </Button>
            </CardBody>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
