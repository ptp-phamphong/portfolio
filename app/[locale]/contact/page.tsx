import type { Metadata } from "next";

import {
  ContactMethods,
  EmailButton,
} from "@/components/contact/contact-methods";
import { ContactMethod } from "@/components/contact/types";
import { getDictionary, isLocale, SITE } from "@/data";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) return {};

  const dict = getDictionary(locale);

  return { title: dict.nav.contact, description: dict.contact.description };
}

export default async function ContactPage({ params }: PageProps) {
  const { locale } = await params;
  const dict = getDictionary(isLocale(locale) ? locale : "en");
  const { contact } = dict;

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
    <section className="mx-auto max-w-5xl px-6 py-16 text-foreground md:py-24">
      {/* Split like the home hero: the ask on the left, the channels on the
          right. Same container and title position as the other pages, so the
          h1 does not jump sideways when switching pages. */}
      <div className="grid items-start gap-10 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-12">
        <header>
          <h1 className="text-4xl font-medium tracking-[-0.02em] md:text-5xl">
            {contact.heading}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-foreground-600">
            {contact.description}
          </p>
          <div className="mt-8">
            <EmailButton
              href={`mailto:${SITE.email}`}
              label={contact.buttonLabel}
            />
          </div>
        </header>

        <ContactMethods methods={methods} />
      </div>
    </section>
  );
}
