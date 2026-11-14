"use client";

import Image from "next/image";
import { Link } from "@heroui/react";

import { TimelineEntry } from "@/data/types";

interface TimelineProps {
  entries: readonly TimelineEntry[];
  /** URL for the entry that carries a `linkLabel` (the research write-up). */
  linkUrl?: string;
}

export const Timeline = ({ entries, linkUrl }: TimelineProps) => (
  <ol>
    {entries.map((item, index) => {
      const isLast = index === entries.length - 1;

      return (
        <li key={item.title} className="relative flex gap-4 pb-10 last:pb-0">
          {/* Hairline from this marker down to the next one; none under the last. */}
          {!isLast && (
            <span
              aria-hidden
              className="absolute bottom-2 left-5 top-12 w-px bg-divider"
            />
          )}

          {/* White tile on purpose: most logos are dark-on-transparent and
              vanish on the dark theme. */}
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-divider bg-white p-1.5">
            {item.logo ? (
              <Image
                alt=""
                className="h-full w-full object-contain"
                height={28}
                src={item.logo}
                width={28}
              />
            ) : (
              <span className="h-2.5 w-2.5 rounded-full bg-foreground-400" />
            )}
          </span>

          <div className="min-w-0 pt-2">
            <h3 className="font-medium leading-snug md:text-lg">
              {item.title}
            </h3>
            <p className="mt-1 font-mono text-sm text-foreground-500">
              {item.date}
            </p>
            <p className="mt-3 max-w-prose leading-relaxed text-foreground-600">
              {item.description}
            </p>
            {item.linkLabel && linkUrl && (
              <Link
                isExternal
                showAnchorIcon
                className="mt-3 text-primary-600"
                href={linkUrl}
                size="sm"
              >
                {item.linkLabel}
              </Link>
            )}
          </div>
        </li>
      );
    })}
  </ol>
);
