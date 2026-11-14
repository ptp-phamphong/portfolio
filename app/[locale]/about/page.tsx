import type { Metadata } from "next";

import { AboutSection } from "@/components/about/about-section";
import { Certifications } from "@/components/about/certifications";
import { ProfileIntro } from "@/components/about/profile-intro";
import { Skills } from "@/components/about/skills";
import { Timeline } from "@/components/about/timeline";
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
  const { about, contact } = dict;

  return (
    <div className="mx-auto max-w-5xl px-6 py-16 text-foreground md:py-24">
      {/* The name is the page title. The old morphing header cycled through
          single words ("Curious", "Full-stack", ...) and blurred the Vietnamese
          diacritics mid-morph. */}
      <ProfileIntro
        description={about.description}
        image={SITE.image}
        meta={`${about.profileTitle} · ${contact.location}`}
        name={SITE.name}
      />

      <AboutSection title={about.sections.education}>
        <Timeline entries={about.education} />
      </AboutSection>

      <Certifications
        labels={about.certifications}
        title={about.sections.certifications}
      />

      <AboutSection title={about.sections.experience}>
        <Timeline entries={about.experience} linkUrl={SITE.research.url} />
      </AboutSection>

      <Skills technologies={about.technologies} title={about.sections.skills} />
    </div>
  );
}
