import "@/app/globals.css";

import { clsx } from "clsx";
import { type Metadata } from "next";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";

import { getDictionary, isLocale, Locale, LOCALES, SITE } from "@/data";
import { Footer } from "@/components/footer";
import { I18nProvider } from "@/components/i18n-provider";
import { Navigation } from "@/components/navbar";
import { PageWrapper } from "@/components/page-wrapper";
import { Providers } from "@/app/providers";
import { StarsBackground } from "@/components/backgrounds/stars";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-sans",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

const OG_LOCALE: Record<Locale, string> = { en: "en_US", vi: "vi_VN" };

type LocaleParams = { params: Promise<{ locale: string }> };

/** Prerenders /en and /vi at build time; any other locale segment 404s. */
export const dynamicParams = false;

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: LocaleParams): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) return {};

  const dict = getDictionary(locale);
  const title = `${SITE.name} — ${dict.home.hero.title}`;

  return {
    metadataBase: new URL(siteUrl),
    title: { default: title, template: `%s | ${SITE.name}` },
    description: dict.home.hero.subtitle,
    alternates: {
      canonical: `/${locale}`,
      languages: Object.fromEntries(LOCALES.map((l) => [l, `/${l}`])),
    },
    openGraph: {
      title: { default: title, template: `%s | ${SITE.name}` },
      description: dict.home.hero.subtitle,
      siteName: SITE.name,
      locale: OG_LOCALE[locale],
      type: "website",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    twitter: {
      title: { default: SITE.name, template: `%s | ${SITE.name}` },
      card: "summary_large_image",
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: LocaleParams & { children: React.ReactNode }) {
  const { locale } = await params;

  if (!isLocale(locale)) notFound();

  const dict = getDictionary(locale);

  const content = (
    <main className="bg-background min-h-screen bg-gradient-to-b from-background to-content2">
      <Navigation />
      <PageWrapper>{children}</PageWrapper>
      <Footer />
    </main>
  );

  return (
    <html suppressHydrationWarning lang={locale}>
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <I18nProvider dict={dict} locale={locale}>
            <StarsBackground>{content}</StarsBackground>
          </I18nProvider>
        </Providers>
      </body>
    </html>
  );
}
