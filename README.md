# rossoconsulting.ch

The website of Rosso Consulting, the advisory practice and lab of Marco Rosso.
Operator. Advisor. Builder.

**Stack:** Astro 5 (static) · GitHub · Netlify (hosting and forms). No CMS: content lives in this repository.

The site follows the Brand Guidelines and the Business Foundation (October 2026). When in doubt about words, colour or type, those two documents win.

---

## Run it

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # static site in ./dist
npm run check     # type-checks every page and every language
```

Node 22 or newer.

Netlify builds `main` automatically. Pull requests get a deploy preview.

---

## Where things live

```
src/
├── i18n/
│   ├── en.ts            Every string on the site, in English (the source of truth)
│   ├── it.ts            Italian, typed against en.ts: a missing string fails the build
│   ├── es.ts            Spanish, same
│   └── config.ts        Languages, routes, helpers
├── data/site.ts         Names, links, email, portfolio companies (same in every language)
├── content/
│   ├── articles/        Essays (Markdown, English) → /writing/<slug>/
│   └── notes/           Field Notes (Markdown, English) → /notes/<slug>/
├── pages/
│   ├── [...lang]/       Home, Advisory, AI in Practice, The Lab, Notes, About, Contact, Privacy
│   │                    (one file builds /, /it/ and /es/)
│   ├── writing/[slug]   Essay pages
│   ├── notes/[slug]     Field Note pages
│   └── rss.xml.js       Feed of Field Notes and essays
├── components/          Header, Footer, Logo, CTA panel, Lab items, note lists, home sections
├── layouts/             Base (head, SEO, JSON-LD) and Article
├── styles/global.css    Brand tokens, type scale, light and dark themes
├── brand/logo-paths.json  The logo, extracted as vectors from the master artwork
└── assets/              Portrait
public/
├── brand/               Logo files: full, compact, monogram; colour, reverse, mono dark, mono light
├── og-default.png       Default social image
├── favicon.svg …        Icons (monogram)
├── llms.txt             Summary for AI assistants
└── robots.txt
```

---

## Common edits

**Change a sentence.** Find it in `src/i18n/en.ts` and change it. Do the same in `it.ts` and `es.ts`. Headlines mark their one italic phrase with asterisks: `'Where ideas get *tried*.'`

**Publish a Field Note.** Copy `src/content/notes/_template.md` to a new file such as `src/content/notes/001-review-replies.md`, fill in the front matter (`title`, `summary`, `number`, `date`, optional `status`), write the note and set `draft: false`. It appears on /notes/, on the home page and in the RSS feed. Files starting with `_` are never published.

**Add an essay.** Add a Markdown file to `src/content/articles/` with the same front matter as the existing essays.

**Add or change a Lab item.** Edit `lab.now.items` in each language file. Status is `testing`, `live` or `venture`.

**Add an advisory company.** Add it to `portfolio` in `src/data/site.ts`, then add its category, role and focus under `advisory.portfolio.items` in each language file.

**Change the portrait.** Replace `src/assets/marco-rosso.png` (keep the name, or update the imports). A larger, natural-light photo is welcome.

---

## Contact form (Netlify Forms)

The form on /contact/ is a Netlify form named `contact`. Two settings in the Netlify dashboard:

1. **Forms → Enable form detection** (needed once, then redeploy).
2. **Forms → Form notifications → Add notification → Email** to marco@rossoconsulting.ch.

Spam is filtered by a honeypot field and Netlify's built-in filtering. Without JavaScript the form still posts and returns to /contact/?sent=1.

---

## Brand rules the code enforces

- Colours are tokens in `global.css`. Rosso (#E30613) is only for the logo, the marker, one red rule per view and the Live dot. Small red text uses Rosso Scuro.
- Newsreader for ideas, Inter for interface, JetBrains Mono for labels. Self-hosted, no third-party font requests.
- The logo is drawn from the master artwork; it is never retyped. Full logo on desktop, compact on mobile and on scroll, monogram for icons.
- Dark mode follows the system, with a toggle. Carbone becomes the background and Carta the text.
- All motion respects `prefers-reduced-motion`.

---

## Redirects

Old URLs (`/practice/`, `/principal/`, `/ventures/`, `/writing/`, in every language) redirect permanently to their new pages. See `netlify.toml`.

© Rosso Consulting
