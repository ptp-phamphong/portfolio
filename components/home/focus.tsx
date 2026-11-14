"use client";

import { useI18n } from "@/components/i18n-provider";

export const FocusSection = () => {
  const { dict } = useI18n();
  const { sectionTitle, sectionDescription, items } = dict.home.focus;

  return (
    <section className="container mx-auto max-w-6xl px-6 pb-16 pt-8 md:pb-24 md:pt-12">
      <div className="mb-12 max-w-2xl">
        <h2 className="text-3xl font-medium tracking-[-0.01em] text-foreground md:text-4xl">
          {sectionTitle}
        </h2>
        <p className="mt-4 text-lg text-foreground-600">{sectionDescription}</p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {items.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-divider bg-content1 p-6"
          >
            <h3 className="text-lg font-medium text-foreground">
              {item.title}
            </h3>
            <p className="mt-3 leading-relaxed text-foreground-600">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
