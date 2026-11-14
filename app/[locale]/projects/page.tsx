import type { Metadata } from "next";

import { ProjectCard } from "@/components/projects/project-card";
import { getDictionary, isLocale, SITE } from "@/data";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) return {};

  const dict = getDictionary(locale);

  return { title: dict.nav.projects, description: dict.projects.description };
}

export default async function ProjectsPage({ params }: PageProps) {
  const { locale } = await params;
  const dict = getDictionary(isLocale(locale) ? locale : "en");
  const { projects } = dict;

  return (
    <section className="mx-auto max-w-5xl px-6 py-16 text-foreground md:py-24">
      {/* A static title: the old morphing header cycled through fragments of
          this sentence, so a visitor could land on a lone "tôi đã". */}
      <header className="mb-12 max-w-2xl">
        <h1 className="text-4xl font-medium tracking-[-0.02em] md:text-5xl">
          {projects.heading}
        </h1>
        <p className="mt-4 text-lg text-foreground-600">
          {projects.description}
        </p>
      </header>

      <div className="grid grid-cols-1 gap-8">
        {projects.items.map((content) => {
          // Language-invariant facts (links, tech, demo login) are keyed by the
          // same `key` in SITE; the dictionary carries only the translated copy.
          const facts = SITE.projects.find((p) => p.key === content.key);

          if (!facts) return null;

          return (
            <ProjectCard
              key={content.key}
              content={content}
              facts={facts}
              labels={projects.labels}
            />
          );
        })}
      </div>
    </section>
  );
}
