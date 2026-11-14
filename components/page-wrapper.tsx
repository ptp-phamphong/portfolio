"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

type PageWrapperProps = {
  children: ReactNode;
};

export const PageWrapper = ({ children }: PageWrapperProps) => {
  const pathname = usePathname();

  return (
    <motion.div
      key={pathname}
      animate="animate"
      className="flex-1"
      exit="exit"
      initial="initial"
      transition={pageTransition}
      variants={pageVariants}
    >
      {children}
    </motion.div>
  );
};

// A short fade between pages. No slide or zoom: the content should not move
// under the reader, and each page already has at most one entrance of its own.
const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const pageTransition = {
  duration: 0.2,
  ease: [0.22, 1, 0.36, 1],
};
