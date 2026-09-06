# Phạm Thanh Phong — Portfolio

Personal portfolio site of Phạm Thanh Phong, a full-stack developer based in Ho Chi Minh City.

**Live: [ptp-phamphong.com](https://ptp-phamphong.com)** — statically exported and served from a Raspberry Pi behind Caddy.

Built with Next.js (App Router), TypeScript, Tailwind CSS, HeroUI and Framer Motion.

## Running locally

```bash
npm install
npm run dev
```

The site runs at `http://localhost:3000`.

## Languages

The site ships in English and Vietnamese. Every page lives under a locale segment:

```
/en  /en/about  /en/contact
/vi  /vi/about  /vi/contact
```

`/` redirects to `/en`, and the language switcher in the navbar keeps you on the same page (`/en/about` → `/vi/about`). Both languages are prerendered as static HTML, so each has a real, shareable, indexable URL.

## Editing the content

There is no CMS and no copy hardcoded in the components. Content lives in two kinds of file:

| File | Holds |
| --- | --- |
| **`data/site.ts`** | Facts that are the same in every language: name, email, photo, social URLs, and the tool names + [Iconify](https://icon-sets.iconify.design/) icons behind the skills accordion. Change an email here and it updates everywhere. |
| **`data/dictionaries/en.ts`** and **`data/dictionaries/vi.ts`** | Every user-facing string, one file per language. |

Each dictionary is organised as:

| Key | Drives |
| --- | --- |
| `nav` | Navbar links |
| `home.hero` | Greeting, title, headline and tagline |
| `home.focus` | The four "What I Do" cards |
| `home.cta` | The closing call-to-action block |
| `about.description` | The three intro paragraphs next to the photo |
| `about.education` / `about.experience` | The two timelines. An entry with a `linkLabel` renders a link (its URL comes from `SITE.research`) |
| `about.technologies` | The skills accordion. `key` maps into `SITE.tech` for the tool list — only the label and description are translated |
| `contact` | Contact page heading, row labels, location and button |
| `footer`, `morphingTexts` | Footer and the animated page headers |

Both dictionaries implement the `Dictionary` interface in `data/types.ts`, so if you add a string to one language and forget the other, **the build fails** rather than silently falling back to English.

### Adding a language

1. Copy `data/dictionaries/en.ts` to `data/dictionaries/<code>.ts` and translate it.
2. Register it in `data/index.ts` — add the code to `LOCALES` and the dictionary to `DICTIONARIES`.

The routes, the switcher, `<html lang>` and the static build pick it up automatically.

## Deployment

Set `NEXT_PUBLIC_SITE_URL` to the production URL so that Open Graph / social preview links resolve correctly:

```
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

Then `npm run build`.

## Related

[LifeHub](https://github.com/ptp-phamphong/LifeHub) — the full-stack app (ASP.NET Core + Angular + React Native) running on the same Raspberry Pi that serves this site. The visitor counter here posts to its API.

## Credits

Based on the [portfolio template](https://github.com/Sofiane-Bahmed/portfolio-template) by Sofiane Bahmed, used under the MIT License (see `LICENSE`).
