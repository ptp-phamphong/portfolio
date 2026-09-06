'use client';
import { motion } from "framer-motion";
import { Link } from "@heroui/react";

import { SplittingText } from "@/components/textAnimations/splitting-text";
import { TimelineItemProps } from "@/components/about/types";

export const TimelineItem = ({
  title,
  date,
  description,
  link,
  variants,
  delay = 0,
}: TimelineItemProps) => {
  return (
    <motion.li className="mb-10 relative pl-6" variants={variants}>
      <span className="absolute left-0 top-1 bg-primary-500 rounded-full w-4 h-4 border-2 border-background z-10" />
      <h4 className="text-lg font-semibold">{title}</h4>
      <time className="block mb-1 text-sm text-primary-500">{date}</time>
      <SplittingText
        className="text-sm text-muted-foreground"
        delay={delay}
        inView={true}
        inViewOnce={true}
        text={description}
        type="words"
      />
      {/* Block wrapper: the animated description above is an inline span, so an
          inline link would flow into the same line and overlap its last words. */}
      {link && (
        <div className="mt-2">
          <Link isExternal showAnchorIcon href={link.url} size="sm">
            {link.label}
          </Link>
        </div>
      )}
    </motion.li>
  );
};
