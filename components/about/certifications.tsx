"use client";

import Image from "next/image";
import { Link } from "@heroui/react";

import { AboutSection } from "@/components/about/about-section";
import { SITE } from "@/data";
import { Dictionary } from "@/data/types";

interface CertificationsProps {
  title: string;
  labels: Dictionary["about"]["certifications"];
}

/**
 * One row per credential: badge, name, then the date and the verify link at
 * the right edge. A list rather than a 2x2 grid, because the About content
 * column is too narrow for two cards without wrapping every title.
 */
export const Certifications = ({ title, labels }: CertificationsProps) => (
  <AboutSection title={title}>
    <p className="mb-6 max-w-prose leading-relaxed text-foreground-600">
      {labels.description}
    </p>

    {/* Experts first, then associates (order comes from SITE). */}
    <ul className="divide-y divide-divider rounded-2xl border border-divider bg-content1">
      {SITE.certifications.map((cert) => (
        <li
          key={cert.exam}
          className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:gap-6"
        >
          <div className="flex min-w-0 flex-1 items-start gap-4 sm:items-center">
            {/* Decorative: the credential name next to it says the same thing. */}
            <Image
              alt=""
              className="shrink-0"
              height={56}
              src={cert.badge}
              width={56}
            />
            <div className="min-w-0">
              <p className="font-mono text-xs text-foreground-500">
                {cert.exam} · {labels.issuer}
              </p>
              <h3 className="mt-1 font-medium leading-snug">{cert.name}</h3>
              <p className="mt-1 text-sm text-foreground-600">
                {cert.examTitle}
              </p>
            </div>
          </div>

          {/* On phones this row sits under the text, indented past the badge
              (56px + 16px gap) so the columns stay aligned, and wraps instead
              of squeezing the link onto two lines. */}
          <div className="flex shrink-0 flex-wrap items-center gap-x-4 gap-y-1 pl-[72px] text-sm sm:flex-col sm:items-end sm:pl-0">
            <span className="text-foreground-500">
              {labels.earned}{" "}
              <span className="font-mono tabular-nums">{cert.earned}</span>
            </span>
            {/* primary-600: the accent shade for small text in both themes. */}
            <Link
              isExternal
              showAnchorIcon
              className="whitespace-nowrap text-primary-600"
              href={cert.verifyUrl}
              size="sm"
            >
              {labels.verify}
            </Link>
          </div>
        </li>
      ))}
    </ul>
  </AboutSection>
);
