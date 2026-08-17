# Portfolio — Dava Rajif Cahyadiansyah

Personal portfolio site. Next.js 13 App Router, TypeScript, Tailwind CSS and Framer Motion.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build
npm run start
```

## Structure

```
src/
  app/                  routes: /, /projects, /projects/[slug], /about, /resume, /contact
  components/           UI components
  constants/
    products.tsx        project data — edit here to add or change a project
    timeline.tsx        work history and education
    socials.tsx         social links
public/images/          real screenshots
public/images/mock/     generated interface mockups for private/internal projects
```

### Adding a project

Append an entry to `src/constants/products.tsx`. `slug` becomes the detail-page URL,
`featured: true` puts it on the home page, and `category` feeds the filter chips on
`/projects`.

## Notes

- `next.config.mjs` sets `experimental.workerThreads: false` because page-data
  collection races on Windows and intermittently fails the build.
- Projects under `public/images/mock/` are interface mockups, used where the real
  system is internal or client-owned and cannot be screenshotted publicly.
