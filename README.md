# Rosso Consulting

Independent consulting practice and umbrella entity. Swiss-domiciled. Founded and led by Marco Rosso.

Source code for [rossoconsulting.ch](https://rossoconsulting.ch).

**Stack:** Astro 5 · Sveltia CMS · GitHub · Netlify

---

## Architecture in one line

Every piece of content on the site — every heading, paragraph, list item, link, image, SEO field, nav label, and footer column — lives in a JSON or Markdown file under `src/content/`, edited through Sveltia CMS at `/admin/`. **Nothing is hardcoded in `.astro` files.** Page templates are pure renderers that consume CMS data.

This means: edit anything in the CMS → it commits to Git → Netlify rebuilds → live within ~60 seconds.

---

## Stack components

- **Astro 5** — Static site generator. Outputs pre-rendered HTML for every page.
- **TypeScript** — Strict mode, with content collection type safety.
- **Sveltia CMS** — Modern, drop-in replacement for Netlify CMS / Decap CMS. Same config schema, much better UX. Loaded at `/admin/` from the unpkg CDN.
- **GitHub** — Source of truth for all content (JSON + Markdown + image uploads).
- **Netlify** — Hosting, build pipeline, Identity provider, Git Gateway proxy for CMS auth.

---

## Quick start

```bash
npm install
npm run dev          # → http://localhost:4321
npm run build        # → ./dist
npm run preview      # serves ./dist locally
```

Node 20+ required.

---

## Deployment to Netlify

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

### 2. Connect to Netlify

1. [app.netlify.com](https://app.netlify.com) → **Add new site** → **Import an existing project** → **GitHub** → pick the repo
2. Build settings (auto-detected from `netlify.toml`): build command `npm run build`, publish directory `dist`, Node 20
3. **Deploy site**

### 3. Custom domain

Site → **Domain management** → **Add a domain** → `rossoconsulting.ch`. Netlify provisions Let's Encrypt automatically.

### 4. Enable Netlify Identity (required for CMS auth)

Site → **Identity** → **Enable Identity**:
- Registration: **Invite only**
- External providers: enable **GitHub** if you prefer GitHub login
- Services → **Git Gateway** → **Enable Git Gateway**

### 5. Invite yourself

Identity → **Invite users** → your email. Accept invite in inbox, set password (or use GitHub).

### 6. Access the CMS

`https://rossoconsulting.ch/admin/` → log in with Identity credentials.

---

## Project structure

```
rossoconsulting/
├── public/
│   ├── admin/
│   │   ├── index.html          Sveltia CMS bootstrap
│   │   └── config.yml          CMS schema — collections, fields, i18n
│   ├── uploads/                Image uploads (managed by Sveltia)
│   ├── favicon.svg
│   ├── llms.txt                LLM-friendly site summary
│   └── robots.txt              AI crawler permissions
├── src/
│   ├── components/
│   │   ├── BaseHead.astro      SEO meta (CMS-driven)
│   │   ├── JsonLd.astro        Structured data (CMS-driven)
│   │   ├── Nav.astro           Header (consumes navigation collection)
│   │   ├── Footer.astro        Footer (consumes navigation collection)
│   │   ├── Hero.astro
│   │   ├── SectionHeader.astro
│   │   ├── Lane.astro
│   │   ├── CTABlock.astro
│   │   ├── PullQuote.astro
│   │   ├── CareerChart.astro
│   │   └── pages/              Shared page templates
│   │       ├── HomeTemplate.astro
│   │       ├── PracticeTemplate.astro
│   │       ├── PrincipalTemplate.astro
│   │       ├── AdvisoryTemplate.astro
│   │       ├── VenturesTemplate.astro
│   │       ├── ContactTemplate.astro
│   │       └── WritingTemplate.astro
│   ├── content/                ───── SINGLE SOURCE OF TRUTH ─────
│   │   ├── settings/                  ⟶ Sveltia multiple_folders layout
│   │   │   ├── en/
│   │   │   │   ├── site.json          Global site settings + JSON-LD
│   │   │   │   ├── navigation.json    Header + footer
│   │   │   │   └── ui.json            Shared UI strings
│   │   │   ├── it/ (same 3 files)
│   │   │   └── es/ (same 3 files)
│   │   ├── pages/
│   │   │   ├── en/                    ⟶ 7 page JSON files
│   │   │   │   ├── home.json
│   │   │   │   ├── practice.json
│   │   │   │   ├── principal.json
│   │   │   │   ├── advisory.json
│   │   │   │   ├── ventures.json
│   │   │   │   ├── contact.json
│   │   │   │   └── writing.json
│   │   │   ├── it/ (same 7 files)
│   │   │   └── es/ (same 7 files)
│   │   ├── articles/                  English-only essays (Markdown)
│   │   └── advisory/                  Advisory portfolio (Markdown frontmatter)
│   ├── content.config.ts       Zod schemas + glob loaders
│   ├── lib/cms.ts              Type-safe helpers for reading collections
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── ArticleLayout.astro
│   ├── pages/                  Astro routes — thin wrappers around templates
│   └── styles/global.css
├── astro.config.mjs
├── netlify.toml
├── tsconfig.json
└── package.json
```

---

## How the CMS-driven architecture works

### Data flow

```
Sveltia CMS edit
       ↓
  Git commit (via Git Gateway)
       ↓
  Netlify build hook fires
       ↓
  Astro reads src/content/*.json via content collections
       ↓
  Page templates render with CMS data
       ↓
  Static HTML deployed to Netlify CDN
```

### Key principles

1. **Page templates are renderers, not authors.** Open any file in `src/components/pages/` — no hardcoded strings. Every heading, paragraph, and link reads from `page.data.*` loaded via `getEntry()`.

2. **One JSON file per page per locale.** `src/content/pages/practice.en.json` contains the full English practice page. Edit it → Sveltia commits → Netlify rebuilds → live.

3. **Images are never hardcoded in components.** Every image (favicon, default OG, page-specific OG, advisory logos) is a field in a JSON file. Sveltia's image widget uploads to `public/uploads/` and writes the path back into the JSON.

4. **Site-wide settings live in one place.** Site name, contact email, LinkedIn URL, default OG image, JSON-LD principal/founding info — all in `src/content/settings/site.json`. Change once, propagates everywhere.

5. **The advisory page combines two sources.** Base advisory entries (name, role, stage, URL, order, active flag) live in `src/content/advisory/*.md` and are language-neutral. Per-locale descriptions and engagement formats live in `pages/advisory.{lang}.json` under `advisoryOverrides`. Marco edits both in Sveltia; the page renders them merged.

---

## Sveltia CMS configuration

`public/admin/config.yml` defines four collections:

### 1. Site Settings (file collection)

Three files:
- **General** — site name, URL, contact, default OG image, logo, JSON-LD principal/founding info. Single file, no locale.
- **Navigation & Footer** — per locale (×3). Header items + CTA + footer columns.
- **Shared UI Strings** — per locale (×3). Article meta labels, common strings, SEO defaults.

### 2. Pages (file collection)

Seven page entries, each with three locale variants:
Home · Practice · Principal · Advisory · Ventures · Contact · Writing

Sveltia presents these as a tabbed interface: pick the page, pick the locale, edit fields. Image fields use Sveltia's media library (uploads to `public/uploads/`).

### 3. Writing — Articles (folder collection)

English-only Markdown essays. Each is a file in `src/content/articles/` with frontmatter for title, deck, category, date, reading time, draft/featured flags, SEO overrides, and related articles (Sveltia `relation` field to other articles).

### 4. Advisory Portfolio (folder collection)

Markdown files in `src/content/advisory/` with frontmatter for name, role, stage, descriptions, formats, URL, display order, active/featured flags. Body unused (data-only).

---

## i18n design — multiple_folders + i18n: duplicate

Three locales: `en` (default), `it`, `es`. The CMS uses Sveltia's **`multiple_folders`** structure — each locale lives in its own folder:

```
src/content/
├── settings/
│   ├── en/
│   │   ├── site.json
│   │   ├── navigation.json
│   │   └── ui.json
│   ├── it/ (same three files)
│   └── es/ (same three files)
└── pages/
    ├── en/ (7 page JSON files)
    ├── it/ (7 page JSON files)
    └── es/ (7 page JSON files)
```

### Field-level i18n behaviour

Every CMS field is one of two kinds:

- **`i18n: true`** — translatable per locale. The editor sees locale tabs (EN | IT | ES) and edits each language independently. Headings, paragraphs, body copy, SEO titles, menu labels.

- **`i18n: duplicate`** — same value across all locales. Edit once in any locale tab; the value auto-syncs to the others. Used for:
  - **All image fields** (favicon, default OG image, page-specific OG images, advisory logos, article OG images) — upload once, all locales reference the same image
  - **URLs and external links** (site URL, LinkedIn URL, RSS href)
  - **Contact data that doesn't change** (email address, phone)
  - **Brand-level constants** (site name "Rosso Consulting", Astia Web venture name)
  - **Structural data** (section numbers like "01"/"02", career-bar percentages, lane numbers, format letters A–F)
  - **Settings that aren't translatable** (`alumniOf` list, country codes, ISO language codes, boolean flags)

This is the key to **"upload an image once in English and it shows up in every other language automatically"** — every image widget in `config.yml` is marked `i18n: duplicate`. Sveltia displays the image upload UI on the EN tab; the IT and ES tabs show the same image read-only with a "Duplicate from default locale" indicator.

### Articles are English-only

Articles are not translated. The `articles` collection has `i18n: false` and lives flat at `src/content/articles/*.md`. The "Writing / Articoli / Artículos" nav link points to the same `/writing/` URL in every locale.

### Page routes

- EN: `/`, `/practice/`, `/principal/`, etc.
- IT: `/it/`, `/it/practice/`, etc.
- ES: `/es/`, `/es/practice/`, etc.

`hreflang` alternates and `x-default` set on every page.

---

## SEO

Built into every page via `BaseHead.astro` (reads from `site.json`):
- Canonical URL
- `hreflang` alternates for EN/IT/ES + x-default
- Open Graph with locale + locale:alternate
- Twitter Cards
- robots meta with `max-image-preview:large`
- Default OG image fallback from site settings (overridable per page)
- JSON-LD: `Organization` + `Person` on every page; `Article` on essays

`sitemap-index.xml` auto-generated by `@astrojs/sitemap` with i18n alternates. `rss.xml` auto-generated from published articles.

### LLM crawlability

- `public/robots.txt` explicitly allows GPTBot, ClaudeBot, PerplexityBot, Google-Extended, Applebot-Extended, etc.
- `public/llms.txt` follows the [llmstxt.org spec](https://llmstxt.org)
- `<link rel="alternate" type="text/plain" href="/llms.txt">` in every page head

---

## Editorial workflows

### Update a page

1. `/admin/` → **Pages** → pick page (e.g. Practice)
2. Pick locale tab (EN/IT/ES)
3. Edit fields — every section, heading, list item is a typed form input
4. **Save** → Sveltia commits → Netlify rebuilds → live in ~60s

### Add an article

1. `/admin/` → **Writing — Articles** → **New**
2. Fill title, deck, category, date, reading time
3. Write body in the rich Markdown editor
4. Optionally pick 1-3 related articles
5. Toggle off **Draft** when ready
6. **Save** → live

### Add an advisory role

1. `/admin/` → **Advisory Portfolio** → **New**
2. Fill name, role, stage, descriptions, formats, URL, order
3. Toggle **Active** (default) and **Featured** if it appears on homepage
4. **Save** → live

### Localize an advisory entry

The base (English) description lives on the advisory entry itself. To add IT/ES:
1. `/admin/` → **Pages** → **Advisory Page** → pick IT or ES locale
2. Scroll to **Advisory localized overrides** → expand the company name
3. Fill **Full description** and **Formats** in target language
4. **Save**

### Change site name, contact, default OG

1. `/admin/` → **Site Settings** → **General Site Settings**
2. Edit any field
3. **Save** → propagates to every page that uses it

---

## Adding/replacing images

**Every image field is marked `i18n: duplicate` in the CMS config.** This means images are uploaded once and the path is shared across all three locales automatically — you never re-upload the same image for IT or ES.

How it works:

1. Open the CMS at `/admin/`
2. Pick the content entry (e.g. Site Settings → Site & SEO, or Pages → Home Page)
3. Make sure you're on the **EN** locale tab (or any tab — duplicate fields sync both ways)
4. Click the image field (favicon, default OG, page-specific OG, advisory logo, article OG)
5. **Upload an image** → drag/drop or select file
6. Sveltia uploads to `public/uploads/` and writes the path into the JSON field
7. **Save**

When you switch to the IT or ES tab, the image is already there — Sveltia shows it as read-only with a "duplicated from default locale" hint. Editing the image on any tab updates all locales.

Image fields with `i18n: duplicate`:
- Site Settings → favicon, default OG image, logo mark
- Every page → SEO → OG image
- Advisory Portfolio → company logo
- Articles → SEO overrides → OG image

Replace an existing image: click it → **Replace**. Delete: clear the field (most are `required: false`).

If you ever want a locale-specific image (different OG image for IT vs EN), change that field's setting in `public/admin/config.yml` from `i18n: duplicate` to `i18n: true` — the editor will then show the image upload widget on every locale tab independently. This is rarely what you want for a brand site.

---

## Notes

- **Sveltia loaded from CDN.** `public/admin/index.html` pulls the latest version from `unpkg.com/@sveltia/cms`. For production stability, pin to a specific version like `https://unpkg.com/@sveltia/cms@0.55.0/dist/sveltia-cms.js`.
- **CMS commits directly to `main`** (`publish_mode: simple`). For PR-based review, change to `publish_mode: editorial_workflow` in `config.yml`.
- **Image paths in JSON have a leading slash** — `"/uploads/og-default.png"`. Sveltia handles this automatically via `media_folder`/`public_folder`.
- **Add a 1200×630 default OG image** at `public/uploads/og-default.png` (or upload via Sveltia) so social cards render correctly. Without one, OG image meta tags are omitted — better than a broken link.

---

## License

© 2026 Rosso Consulting. All rights reserved.
