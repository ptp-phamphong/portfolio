import type { Metadata } from "next";

import { PageHeader } from "@/components/page-header";
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
  const { projects, morphingTexts } = dict;

  return (
    <section className="py-20 px-6 md:px-12 max-w-5xl mx-auto text-foreground">
      <PageHeader texts={morphingTexts.projects} />

      <p className="mb-12 text-center text-lg text-foreground-600 max-w-2xl mx-auto">
        {projects.description}
      </p>

      <div className="grid grid-cols-1 gap-8">
        {projects.items.map((content, index) => {
          // Language-invariant facts (links, tech, demo login) are keyed by the
          // same `key` in SITE; the dictionary carries only the translated copy.
          const facts = SITE.projects.find((p) => p.key === content.key);

          if (!facts) return null;

          return (
            <ProjectCard
              key={content.key}
              content={content}
              facts={facts}
              index={index}
              labels={projects.labels}
            />
          );
        })}
      </div>
    </section>
  );
}
