# surajraj99.github.io

Personal research website for Suraj Rajendran. Built with [Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com).

## Develop

```bash
npm install
npm run dev          # http://localhost:4321
npm run build        # static site → ./dist
npm run preview      # serve ./dist locally
```

Requires Node 20+.

## Deploy

GitHub Actions builds and deploys to GitHub Pages on every push to `master`. See `.github/workflows/deploy.yml`.

The repo's Pages setting must be configured to **Source: GitHub Actions** (Settings → Pages).

## Content

| Where | What |
| --- | --- |
| `src/pages/` | Routes (one `.astro` file per page) |
| `src/content/news/` | News timeline entries (Markdown) |
| `src/content/talks/` | Talk entries (Markdown) |
| `src/content/publications/` | Publication entries (JSON) |
| `src/data/socials.ts` | Social media links |
| `src/components/` | Shared Astro components |
| `public/assets/` | Profile photo, PDFs, static assets |
