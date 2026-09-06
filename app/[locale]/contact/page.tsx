import type { Metadata } from "next";

import { PageHeader } from "@/components/page-header";
import { ContactCard } from "@/components/contact/contact-card";
import { ContactMethods } from "@/components/contact/contact-methods";
import { ContactMethod } from "@/components/contact/types";
import { getDictionary, isLocale, SITE } from "@/data";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) return {};

  const dict = getDictionary(locale);

  return { title: dict.nav.contact, description: dict.contact.heading };
}

export default async function ContactPage({ params }: PageProps) {
  const { locale } = await params;
  const dict = getDictionary(isLocale(locale) ? locale : "en");
  const { contact, morphingTexts } = dict;

  const methods: ContactMethod[] = [
    {
      label: contact.labels.email,
      value: SITE.email,
      href: `mailto:${SITE.email}`,
      icon: "lucide:mail",
    },
    {
      label: contact.labels.phone,
      value: SITE.phone.display,
      href: SITE.phone.href,
      icon: "lucide:phone",
    },
    {
      label: contact.labels.linkedin,
      value: SITE.social.linkedin.handle,
      href: SITE.social.linkedin.url,
      icon: SITE.social.linkedin.icon,
    },
    {
      label: contact.labels.github,
      value: SITE.social.github.handle,
      href: SITE.social.github.url,
      icon: SITE.social.github.icon,
    },
    {
      label: contact.labels.location,
      value: contact.location,
      href: null,
      icon: "lucide:map-pin",
    },
  ];

  return (
    <section className="py-20">
      <PageHeader texts={morphingTexts.contact} />
      <div className="container mx-auto px-4">
        <ContactCard heading={contact.heading}>
          <ContactMethods
            methods={methods}
            primaryHref={`mailto:${SITE.email}`}
            primaryLabel={contact.buttonLabel}
          />
        </ContactCard>
      </div>
    </section>
  );
}
