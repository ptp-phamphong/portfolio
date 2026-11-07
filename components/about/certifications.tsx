"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardBody, Chip, Link } from "@heroui/react";

import { SectionHeader } from "@/components/about/section-header";
import { SITE } from "@/data";
import { Dictionary } from "@/data/types";

interface CertificationsProps {
  title: string;
  labels: Dictionary["about"]["certifications"];
}

export const Certifications = ({ title, labels }: CertificationsProps) => (
  <div className="mb-20">
    <SectionHeader icon="mdi:certificate-outline" title={title} />
    <p className="mb-6 text-sm text-muted-foreground">{labels.description}</p>

    <div className="grid gap-4 md:grid-cols-3">
      {SITE.certifications.map((cert, index) => (
        <motion.div
          key={cert.exam}
          initial={{ opacity: 0, y: 30 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <Card className="h-full border-none shadow-md">
            <CardBody className="flex flex-col items-center gap-3 p-6 text-center">
              {/* Decorative: the credential name below says the same thing. */}
              <Image
                alt=""
                height={96}
                src={cert.badge}
                width={96}
              />

              <div className="flex flex-wrap justify-center gap-2">
                <Chip color="primary" size="sm" variant="flat">
                  {cert.exam}
                </Chip>
                <Chip size="sm" variant="flat">
                  {labels.issuer}
                </Chip>
              </div>

              <h3 className="text-base font-semibold leading-snug">
                {cert.name}
              </h3>
              <p className="text-xs text-muted-foreground">{cert.examTitle}</p>

              {/* mt-auto pins date + link to the card bottom so they line up
                  across cards whose titles wrap to different heights. */}
              <div className="mt-auto flex flex-col items-center gap-1 pt-2">
                <span className="text-sm text-primary-500">
                  {labels.earned}: {cert.earned}
                </span>
                <Link isExternal showAnchorIcon href={cert.verifyUrl} size="sm">
                  {labels.verify}
                </Link>
              </div>
            </CardBody>
          </Card>
        </motion.div>
      ))}
    </div>
  </div>
);
