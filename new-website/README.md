# चैतन्य संगीत विद्यालय — Chaitanya Sangeet Vidyalay (website v2)

The new website, built with **Astro** and **Tailwind CSS**. It produces plain static HTML, so it runs free on **GitHub Pages**.
The old site in the repo root is untouched.

## Run it on your computer

```bash
cd new-website
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
```

Old addresses (`subject_page.html`, `marathi_index.html`, `contacts.html`, …) have small redirect pages in `public/`
so existing links and Google results keep working.

## Going live (when ready)

The current GitHub Actions workflow (`.github/workflows/static.yml` in the repo root) deploys the **old** site.
To switch, the workflow needs to build `new-website/` and upload `new-website/dist` instead of the repo root —
e.g. add `actions/setup-node` + `npm ci && npm run build` (working directory `new-website`) and set
`path: new-website/dist` on the upload step. The custom domain stays the same (`public/CNAME`).

## Later: adding a backend / React

GitHub Pages only hosts static files, so a future backend (admissions form, student login, fees…) would run on a separate
service (e.g. Render, Railway, Firebase, Supabase) and the site would call its API. Interactive parts can be written as
**React components inside this Astro site** (`npx astro add react`) — no rewrite needed.
