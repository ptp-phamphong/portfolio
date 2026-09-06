import type { Metadata } from "next";

import { ProfileCard } from "@/components/about/profile-card";
import { EducationTimeline } from "@/components/about/timelines/education-timeline";
import { ExperienceTimeline } from "@/components/about/timelines/experience-timeline";
import { Skills } from "@/components/about/skills";
import { PageHeader } from "@/components/page-header";
import { getDictionary, isLocale, SITE } from "@/data";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) return {};

  const dict = getDictionary(locale);

  return {
    title: dict.nav.about,
    description: dict.about.description[0],
  };
}

export default async function AboutPage({ params }: PageProps) {
  const { locale } = await params;
  const dict = getDictionary(isLocale(locale) ? locale : "en");
  const { about, morphingTexts } = dict;

  return (
    <section className="py-20 px-6 md:px-12 max-w-5xl mx-auto text-foreground">
      <PageHeader texts={morphingTexts.about} />
      <ProfileCard
        description={about.description}
        image={SITE.image}
        name={SITE.name}
        title={about.profileTitle}
      />

      <EducationTimeline
        education={about.education}
        title={about.sections.education}
      />
      <ExperienceTimeline
        experience={about.experience}
        researchUrl={SITE.research.url}
        title={about.sections.experience}
      />
      <Skills technologies={about.technologies} title={about.sections.skills} />
    </section>
  );
}
