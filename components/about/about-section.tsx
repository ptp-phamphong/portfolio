interface AboutSectionProps {
  title: string;
  children: React.ReactNode;
}

/**
 * One block of the About page: the title sits in a narrow left column, like a
 * CV, so the long page scans by section. A hairline above each block does the
 * grouping instead of colored headings with icons.
 */
export const AboutSection = ({ title, children }: AboutSectionProps) => (
  <section className="mt-16 grid gap-6 border-t border-divider pt-10 md:mt-20 md:grid-cols-[200px_minmax(0,1fr)] md:gap-12 md:pt-12">
    <h2 className="text-xl font-medium">{title}</h2>
    <div className="min-w-0">{children}</div>
  </section>
);
