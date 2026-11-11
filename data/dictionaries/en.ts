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
        "I have a background in both Computer Science and Management Information Systems. I take features from the first requirements meeting all the way to production.",
      primaryAction: "Get in touch",
      secondaryAction: "About me",
    },
    focus: {
      sectionTitle: "What I do",
      sectionDescription: "How I approach engineering work.",
      items: [
        {
          title: "Full-stack development",
          icon: "lucide:layers",
          description:
            "Angular and React on the front end, C# and .NET on the back end, SQL Server for the data. I build each feature across all of these layers, from design to release.",
        },
        {
          title: "Requirements and product thinking",
          icon: "lucide:clipboard-list",
          description:
            "My Management Information Systems background helps me work with stakeholders to pin down requirements. I want to know why a system is needed before I decide how to build it.",
        },
        {
          title: "AI-assisted engineering",
          icon: "lucide:sparkles",
          description:
            "I use Claude, Codex and GitHub Copilot every day. At work I build custom Copilot skills and agents that take over repetitive development tasks, and I hold Microsoft certifications in designing AI agents.",
        },
        {
          title: "Independent problem solving",
          icon: "lucide:compass",
          description:
            "I pick up unfamiliar tools quickly and research problems on my own until I have a fix I trust. LifeHub is one example: I set up and run its whole stack on a Raspberry Pi myself, including HTTPS, backups and a sandboxed demo.",
        },
      ],
    },
    cta: {
      title: "Let's work together",
      description:
        "If you have a project or a technical problem in mind, I'd be glad to talk it through.",
      buttonLabel: "Email me",
    },
  },

  about: {
    profileTitle: "Full-stack Developer",
    description: [
      "I'm a full-stack developer at Precio Fishbone, working on an NGO management platform used by international organizations across Europe. My main stack is Angular and React on the front end, C# and .NET on the back end, and SQL Server and other relational databases for the data.",
      "My background covers both Computer Science and Management Information Systems, so I care about what a system should do and why, as well as how it's built. I work with stakeholders while requirements are still being defined, and I raise open questions early, while they're still cheap to answer.",
      "I like digging into unfamiliar problems on my own. Lately most of that time goes into AI. I use Claude, Codex and GitHub Copilot in my daily work and pay attention to where and how they save time. In 2026 I also earned Microsoft certifications in AI agent design.",
    ],
    sections: {
      education: "Education",
      certifications: "Certifications",
      experience: "Experience",
      skills: "Skills",
    },
    certifications: {
      description:
        "Microsoft certifications in Power Platform solution design, business requirements, building AI agents in Copilot Studio, and agentic AI solution architecture.",
      issuer: "Microsoft",
      earned: "Earned",
      verify: "Verify credential",
    },
    education: [
      {
        title: "Ho Chi Minh City University of Technology (HCMUT)",
        date: "2020 – 2024",
        icon: "mdi:school",
        logo: "/logos/hcmut.png",
        description:
          "Computer Science. Some courses I learn: data structures, algorithms, software engineering and databases.",
      },
      {
        title: "University of Economics Ho Chi Minh City (UEH)",
        date: "Since 2026",
        icon: "mdi:school-outline",
        logo: "/logos/ueh.png",
        description:
          "Master's studies in Management Information Systems, which covers how business requirements become working software.",
      },
    ],
    experience: [
      {
        title: "Full-stack Developer · Precio Fishbone",
        date: "06/2023 – Present",
        icon: "mdi:briefcase",
        logo: "/logos/precio-fishbone.svg",
        description:
          "Work on an NGO management platform used by international organizations across Europe. Develop its core modules in Angular, .NET and SharePoint, and keep the stack on current Angular and .NET versions through regular upgrades. Build client-specific customizations, fix issues in client environments, and run CI/CD pipelines and releases in Azure DevOps. Also build GitHub Copilot skills and agents that automate repetitive development tasks.",
      },
      {
        title: "Research Assistant · IAS Lab, HCMUT",
        date: "01/2022 – 09/2022",
        icon: "mdi:brain",
        logo: "/logos/iaslab.png",
        description:
          "Researched convolutional neural network models for facial emotion recognition at Ho Chi Minh City University of Technology. Preprocessed and normalized the FER2013 dataset, and tested deep learning frameworks and techniques to improve model accuracy. Co-authored a peer-reviewed paper, published by Springer in 2023.",
        linkLabel: "Published paper (Springer, 2023)",
      },
      {
        title: "Sales Consultant · 1Office",
        date: "03/2021 – 01/2022",
        icon: "mdi:handshake-outline",
        logo: "/logos/1office.png",
        description:
          "Advised businesses on 1Office's management software. Listening to customers describe their day-to-day operational problems taught me where software requirements come from.",
      },
    ],
    /** `key` maps into SITE.tech for the tool list + icons. */
    technologies: [
      {
        key: "frontend",
        label: "Frontend",
        description:
          "Interfaces built from typed, reusable components that work on both phones and desktops.",
      },
      {
        key: "backend",
        label: "Backend",
        description: "APIs, services and the business logic behind the interface.",
      },
      {
        key: "databases",
        label: "Databases",
        description:
          "Designing and querying the relational databases behind these applications.",
      },
      {
        key: "ai",
        label: "AI Tools",
        description:
          "Tools I use every day at work, and a field I keep studying on my own time.",
      },
    ],
  },

  projects: {
    heading: "Things I've built",
    description:
      "A few projects I've built from an empty repository to a live website. Feel free to open them and look around.",
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
          "A personal app for tracking expenses, income and class schedules. I built the Angular web app, the Expo mobile app and the ASP.NET Core API with MariaDB, and I host all of it on a Raspberry Pi under my own domain. The demo below runs in a sandbox that resets itself, so feel free to log in and click around.",
      },
      {
        key: "portfolio",
        title: "Portfolio",
        description:
          "The site you're reading. A Next.js portfolio in English and Vietnamese, exported as static files and hosted on the same Raspberry Pi as LifeHub. It has light and dark themes, and each language lives in its own typed file, so TypeScript catches any text left untranslated.",
      },
    ],
  },

  contact: {
    heading:
      "I'm happy to talk about projects, collaborations or technical questions. Use whichever channel suits you.",
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
      "Full-stack developer in Ho Chi Minh City. I build web applications from requirements to release.",
  },

  morphingTexts: {
    about: ["Curious", "Full-stack", "Developer"],
    projects: ["Things", "I've", "Built"],
    contact: ["Get", "In", "Touch"],
  },
};
