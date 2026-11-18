# darius.build

Personal site of Darius Moore — v0.1 MVP (hiring-first). Astro + plain CSS tokens, deployed on Vercel.

## Develop

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs dist/
```

## Where things live

- `src/config/site.ts` — name, email, social links, resume PDF path
- `src/data/resume.ts` — resume, case study cards, "at a glance" facts
- `src/styles/global.css` — design tokens (Ivory · Ember default, Ember dark)
- `src/pages/` — `/` homepage, `/resume`, 404

## To do after MVP

- Add `public/resume.pdf` (no phone or personal email) and set `resumePdf: '/resume.pdf'` in `site.ts`
- Replace with the full site (case study pages, `/hire`, services, Lab, newsletter) from `darius-build.zip`
