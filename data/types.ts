import { TechKey } from "@/data/site";

export interface FocusItem {
  title: string;
  icon: string;
  description: string;
}

export interface TimelineEntry {
  title: string;
  date: string;
  icon: string;
  description: string;
  /** Renders a link under the entry; the URL itself lives in SITE. */
  linkLabel?: string;
}

export interface TechGroup {
  key: TechKey;
  label: string;
  description: string;
}

/**
 * Every user-facing string. Adding a language means adding one file that
 * satisfies this interface — TypeScript will flag anything left untranslated.
 */
export interface Dictionary {
  languageName: string;
  languageShort: string;

  nav: {
    home: string;
    about: string;
    contact: string;
  };

  home: {
    hero: {
      greeting: string;
      title: string;
      headline: string;
      subtitle: string;
      primaryAction: string;
      secondaryAction: string;
    };
    focus: {
      sectionTitle: string;
      sectionDescription: string;
      items: FocusItem[];
    };
    cta: {
      title: string;
      description: string;
      buttonLabel: string;
    };
  };

  about: {
    profileTitle: string;
    description: string[];
    sections: {
      education: string;
      experience: string;
      skills: string;
    };
    education: TimelineEntry[];
    experience: TimelineEntry[];
    technologies: TechGroup[];
  };

  contact: {
    heading: string;
    labels: {
      email: string;
      phone: string;
      linkedin: string;
      github: string;
      location: string;
    };
    location: string;
    buttonLabel: string;
  };

  footer: {
    connectTitle: string;
    contactTitle: string;
    description: string;
  };

  morphingTexts: {
    about: string[];
    contact: string[];
  };
}
