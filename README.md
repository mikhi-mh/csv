# चैतन्य संगीत विद्यालय — Chaitanya Sangeet Vidyalay

Official website of Chaitanya Sangeet Vidyalay, Sangola · Mangalwedha — <https://www.chaitanyasangeetvidyalay.com>

Built with **Astro** and **Tailwind CSS**. It produces plain static HTML, so it runs free on **GitHub Pages**.
The previous (2020) website is archived, unchanged, in `old-site/` — it is kept for reference and is **not** deployed.

## Run it on your computer

Needs Node.js 22.23 or newer.

```bash
npm install        # first time only
npm run dev        # open http://localhost:4321  (auto-reloads while you edit)
npm run build      # makes the final site in  dist/
npm run preview    # view the built site
```

## Updating content (no design knowledge needed)

| What you want to change | Edit this |
| --- | --- |
| News / events (current & earlier), admission banner text | `src/data/events.ts` |
| Addresses, phone numbers, email, social links, about text, gurus, faculty | `src/data/school.ts` |
| Course list, student achievements by subject | `src/data/subjects.ts` |
| Videos | `src/data/videos.ts` (paste the YouTube video ID) |
| Gallery photos | drop image files into `src/assets/gallery/` (they appear automatically, resized for you) |
| Admission poster / brochure | replace `src/assets/admission-poster.png` (keep the same file name) |
| Application form / career PDF | replace files in `public/downloads/` (keep the same names) |
| Menu labels, button text | `src/i18n.ts` → `ui` |

Every text has an `en` and an `mr` version. If `mr` is missing, the English text is shown on the Marathi page.
English pages are at `/`, Marathi pages at `/mr/`.

## Project layout

```
src/
  data/        ← all the school's content (edit these)
  assets/      ← images that get optimised at build time (gallery, instruments, emblem, poster)
  views/       ← one file per page; each renders both languages
  pages/       ← URL routes (tiny files that pick a view + language)
  components/  ← header, footer, cards, video player, decorative mandala…
  layouts/     ← the HTML shell shared by every page (SEO tags, fonts)
  styles/      ← colours, fonts and shared styles (global.css)
public/        ← files copied as-is (favicon, PDFs, music, redirects for old URLs)
old-site/      ← the previous website, archived (not deployed)
```

Old addresses (`subject_page.html`, `marathi_index.html`, `contacts.html`, …) have small redirect pages in `public/`
so existing links and Google results keep working.

## Deployment

Every push to `main` runs `.github/workflows/static.yml`: it installs dependencies, runs `npm run build`
and publishes the `dist/` folder to GitHub Pages. The custom domain is kept by `public/CNAME`.
You can also start it by hand from the **Actions** tab (“Run workflow”).

## Later: adding a backend / React

GitHub Pages only hosts static files, so a future backend (admissions form, student login, fees…) would run on a separate
service (e.g. Render, Railway, Firebase, Supabase) and the site would call its API. Interactive parts can be written as
**React components inside this Astro site** (`npx astro add react`) — no rewrite needed.
