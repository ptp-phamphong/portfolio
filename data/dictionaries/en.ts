import { Dictionary } from "@/data/types";

export const en: Dictionary = {
  /** Shown in the language switcher. */
  languageName: "English",
  languageShort: "EN",

  nav: {
    home: "Home",
    about: "About",
    projects: "Projects",
    contact: "Contact",
  },

  home: {
    hero: {
      greeting: "Hi, I'm",
      title: "Full-stack Developer",
      headline: "I build web applications end to end.",
      subtitle:
        "Full-stack developer with a background in both Computer Science and Management Information Systems. I take features from the first requirements discussion through to production.",
      primaryAction: "Get in touch",
      secondaryAction: "About me",
    },
    focus: {
      sectionTitle: "What I Do",
      sectionDescription:
        "How I approach engineering work, beyond a list of frameworks.",
      items: [
        {
          title: "Full-stack Development",
          icon: "lucide:layers",
          description:
            "Angular and React on the front end, C# and .NET on the back end, SQL Server underneath. I take a feature from design through implementation and release, rather than handing it off midway.",
        },
        {
          title: "Requirements & Product Thinking",
          icon: "lucide:clipboard-list",
          description:
            "A background in Management Information Systems means I work comfortably with stakeholders to define requirements — establishing why a system is needed before deciding how to build it.",
        },
        {
          title: "AI-Assisted Engineering",
          icon: "lucide:sparkles",
          description:
            "I use Claude, Codex and GitHub Copilot in my daily development work, and continually assess where they add real value and where they do not.",
        },
        {
          title: "Independent Problem Solving",
          icon: "lucide:compass",
          description:
            "I learn quickly and research unfamiliar problems independently, working through them until I have a solution I can rely on.",
        },
      ],
    },
    cta: {
      title: "Let's work together",
      description:
        "I'm always glad to discuss new projects, technical challenges, or opportunities to collaborate.",
      buttonLabel: "Email me",
    },
  },

  about: {
    profileTitle: "Full-stack Developer",
    description: [
      "I'm a full-stack developer building and maintaining web applications. I work across the entire stack — Angular and React on the front end, C# and .NET on the back end, with SQL Server and other relational databases underneath.",
      "My background spans both Computer Science and Management Information Systems. That combination shapes how I approach software: I'm concerned not only with how a system is built, but with what it should do and why. I work closely with stakeholders while requirements are being defined, and I raise the difficult questions before the first line of code is written.",
      "I learn quickly and prefer to investigate unfamiliar problems thoroughly and independently. Much of that interest currently goes into AI — I use Claude, Codex and GitHub Copilot in my daily work, and continually evaluate where they genuinely improve engineering outcomes.",
    ],
    sections: {
      education: "Education",
      experience: "Experience",
      skills: "Skills",
    },
    education: [
      {
        title: "Ho Chi Minh City University of Technology (HCMUT)",
        date: "Since 2016",
        icon: "mdi:school",
        description:
          "Computer Science. The foundations I apply daily: data structures, algorithms, software engineering and databases.",
      },
      {
        title: "University of Economics Ho Chi Minh City (UEH)",
        date: "Since 2026",
        icon: "mdi:school-outline",
        description:
          "Master's studies, continuing the Management Information Systems side of my background — where business requirements meet the software built to satisfy them.",
      },
    ],
    experience: [
      {
        title: "Full-stack Developer · Precio Fishbone",
        date: "2023 – Present",
        icon: "mdi:briefcase",
        description:
          "Building and maintaining web applications across the full stack, from feature design through implementation and release. Working in C#/.NET on the back end and Angular and React on the front end.",
      },
      {
        title: "Sales Consultant · 1Office",
        date: "2021 – 2022",
        icon: "mdi:handshake-outline",
        description:
          "Advised businesses on 1Office's management software. Two years of working directly with customers on their operational challenges gave me a clear view of where software requirements originate — a perspective I continue to apply in engineering.",
      },
      {
        title: "Research Assistant · IAS Lab",
        date: "01/2022 - 09/2022",
        icon: "mdi:brain",
        description:
          "Researched convolutional neural network models for facial emotion recognition. Preprocessed and normalised the FER2013 dataset, and evaluated deep learning frameworks and techniques to improve model accuracy.",
        linkLabel: "Research overview",
      },
    ],
    /** `key` maps into SITE.tech for the tool list + icons. */
    technologies: [
      {
        key: "frontend",
        label: "Frontend",
        description:
          "The interfaces users work with every day: component-driven, strongly typed, and responsive across devices.",
      },
      {
        key: "backend",
        label: "Backend",
        description:
          "Business logic, APIs and services — the systems running behind the interface.",
      },
      {
        key: "databases",
        label: "Databases",
        description:
          "Designing and querying the relational databases these applications depend on.",
      },
      {
        key: "ai",
        label: "AI Tools",
        description:
          "Part of my daily engineering workflow, and a field I continue to study on my own time.",
      },
    ],
  },

  projects: {
    heading: "Things I've built",
    description:
      "A few projects I've taken from an empty repository to something running live on the internet. Feel free to open them and have a look.",
    labels: {
      demoAccount: "Demo account",
      username: "Username",
      password: "Password",
      visitDemo: "Open live demo",
      visitSite: "Visit site",
      viewCode: "View code",
    },
    items: [
      {
        key: "lifehub",
        title: "LifeHub",
        description:
          "A personal life-management app I built end to end and run on a Raspberry Pi behind my own domain — an Angular SPA and a mobile app on top of an ASP.NET Core API and MariaDB. It handles expense tracking, notes and daily tools, with full authentication. The demo below is a self-resetting sandbox, so log in and explore freely.",
      },
      {
        key: "portfolio",
        title: "Portfolio",
        description:
          "This very site. A bilingual (English / Vietnamese) portfolio built with Next.js as a fully static export, deployed alongside LifeHub on the same Raspberry Pi. Light and dark themes, animated sections, and a clean data-driven content layer.",
      },
    ],
  },

  contact: {
    heading:
      "I'm always glad to discuss new projects, technical challenges, or potential collaboration.",
    labels: {
      email: "Email",
      phone: "Phone",
      linkedin: "LinkedIn",
      github: "GitHub",
      location: "Location",
    },
    location: "Ho Chi Minh City, Vietnam",
    buttonLabel: "Send me an email",
  },

  footer: {
    connectTitle: "Get in touch",
    contactTitle: "Contact",
    description:
      "Full-stack developer in Ho Chi Minh City, building web applications end to end.",
  },

  morphingTexts: {
    about: ["Curious", "Full-stack", "Developer"],
    projects: ["Things", "I've", "Built"],
    contact: ["Get", "In", "Touch"],
  },
};
