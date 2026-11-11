/**
 * Language-invariant facts. These are identical in every locale, so they live
 * here once — an email address or an icon name must never drift between the
 * English and Vietnamese dictionaries.
 */
export const SITE = {
  name: "Phạm Thanh Phong",
  email: "ptp.phamphong@gmail.com",
  /** Vietnamese mobile number: leading 0 is dropped after the +84 country code. */
  phone: {
    display: "+84 369 566 252",
    href: "tel:+84369566252",
  },
  image: "/profile.jpg",
  social: {
    linkedin: {
      handle: "phong-pham-thanh",
      url: "https://www.linkedin.com/in/phong-phạm-thanh-1747b8270/",
      icon: "mdi:linkedin",
    },
    github: {
      handle: "phong-pham-thanh",
      url: "https://github.com/ptp-phamphong",
      icon: "mdi:github",
    },
    facebook: {
      handle: "thanhphong.pham.90",
      url: "https://www.facebook.com/thanhphong.pham.90/",
      icon: "mdi:facebook",
    },
  },
  /**
   * The IAS Lab entry links to the published paper (Springer LNNS, 12th
   * Conference on Information Technology and Its Applications, 2023).
   */
  research: {
    url: "https://link.springer.com/chapter/10.1007/978-3-031-36886-8_19",
  },
  /**
   * Projects I've shipped and can show. Language-invariant facts only —
   * URLs, tech tags, icons and the demo login live here; the title and
   * description for each project are translated in the dictionaries, keyed
   * by `key`. `demo` carries throwaway credentials for a public sandbox
   * account, so it's safe to display.
   */
  projects: [
    {
      key: "lifehub",
      icon: "lucide:layout-dashboard",
      image: "/projects/lifehub.png",
      tech: [
        { name: "Angular", icon: "logos:angular-icon" },
        { name: ".NET", icon: "logos:dotnet" },
        { name: "C#", icon: "logos:c-sharp" },
        { name: "MySQL", icon: "logos:mysql-icon" },
        { name: "Expo", icon: "simple-icons:expo" },
      ],
      demo: {
        url: "https://demo.ptp-phamphong.com/",
        username: "demo",
        password: "1234",
      },
      repo: "https://github.com/ptp-phamphong/LifeHub",
    },
    {
      key: "portfolio",
      icon: "lucide:globe",
      image: "/projects/portfolio.jpg",
      tech: [
        { name: "Next.js", icon: "logos:nextjs-icon" },
        { name: "React", icon: "logos:react" },
        { name: "TypeScript", icon: "logos:typescript-icon" },
        { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
      ],
      live: {
        url: "https://ptp-phamphong.com/",
      },
      repo: "https://github.com/ptp-phamphong/portfolio",
    },
  ],
  /**
   * Microsoft certifications. Credential and exam names are official proper
   * nouns, so they stay in English in every locale. `verifyUrl` is a public
   * Microsoft Learn transcript share link — every credential is on the one
   * personal Learn account (the work account was linked into it 11/2026).
   * Badges are Microsoft's official level badges (associate / expert).
   * Order: experts first, then associates, newest first within each level.
   */
  certifications: [
    {
      name: "Agentic AI Business Solutions Architect Expert",
      exam: "AB-100",
      examTitle: "Agentic AI Business Solutions Architect",
      badge: "/certifications/expert.svg",
      earned: "11/2026",
      verifyUrl:
        "https://learn.microsoft.com/en-us/users/phongphmthanh-8887/transcript/v0y96aynqk3jz4o",
    },
    {
      name: "Power Platform Solution Architect Expert",
      exam: "PL-600",
      examTitle: "Microsoft Power Platform Solution Architect",
      badge: "/certifications/expert.svg",
      earned: "03/2026",
      verifyUrl:
        "https://learn.microsoft.com/en-us/users/phongphmthanh-8887/transcript/v0y96aynqk3jz4o",
    },
    {
      name: "AI Agent Builder Associate",
      exam: "AB-620",
      examTitle:
        "Designing and Building Integrated AI Agent Solutions in Copilot Studio",
      badge: "/certifications/associate.svg",
      earned: "11/2026",
      verifyUrl:
        "https://learn.microsoft.com/en-us/users/phongphmthanh-8887/transcript/v0y96aynqk3jz4o",
    },
    {
      name: "Power Platform Functional Consultant Associate",
      exam: "PL-200",
      examTitle: "Microsoft Power Platform Functional Consultant",
      badge: "/certifications/associate.svg",
      earned: "03/2026",
      verifyUrl:
        "https://learn.microsoft.com/en-us/users/phongphmthanh-8887/transcript/v0y96aynqk3jz4o",
    },
  ],
  /** Tool names and icons are proper nouns — the same in both languages. */
  tech: {
    frontend: [
      { name: "Angular", icon: "logos:angular-icon" },
      { name: "React", icon: "logos:react" },
      { name: "TypeScript", icon: "logos:typescript-icon" },
      { name: "JavaScript", icon: "logos:javascript" },
      { name: "HTML5", icon: "logos:html-5" },
      { name: "SCSS", icon: "logos:sass" },
    ],
    backend: [
      { name: "C#", icon: "logos:c-sharp" },
      { name: ".NET", icon: "logos:dotnet" },
      { name: "Java", icon: "logos:java" },
      { name: "Python", icon: "logos:python" },
    ],
    databases: [
      { name: "SQL Server", icon: "simple-icons:microsoftsqlserver" },
      { name: "MySQL", icon: "logos:mysql-icon" },
      { name: "Oracle", icon: "logos:oracle" },
    ],
    ai: [
      { name: "Claude", icon: "simple-icons:claude" },
      { name: "Codex", icon: "simple-icons:openai" },
      { name: "GitHub Copilot", icon: "simple-icons:githubcopilot" },
    ],
  },
} as const;

export type TechKey = keyof typeof SITE.tech;
export type ProjectKey = (typeof SITE.projects)[number]["key"];
