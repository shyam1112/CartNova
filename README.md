# Cartnova

Marketing site for Cartnova, a Shopify solutions agency. Built with React + Vite.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build   # outputs to dist/
npm run preview # preview the production build locally
```

## Pages

- `/` — Home
- `/services` — Shopify Development, Theme Design, Custom Apps, Shopify Plus & Supplier Database, Checkout Extensions, Product Migration, Store Audit, Support
- `/portfolio` — Case study grid with category filters
- `/about` — Company story, values, team structure
- `/contact` — Contact form + FAQ

## Before going live

1. **Replace placeholder content.** `src/data/content.js` holds portfolio case studies and testimonials. Several are real (marked `live: true`) but a few are still placeholders — swap them for real client work before publishing so visitors aren't shown fabricated testimonials.
2. **Update contact details** in `src/components/Footer.jsx` and `src/pages/Contact.jsx` if your hours/availability change.
3. **Confirm the domain.** All SEO metadata (`index.html`, `src/hooks/useSeo.js`, `public/robots.txt`, `public/sitemap.xml`) assumes the site's canonical URL is `https://www.thecartnova.com` (Vercel is configured to redirect the bare `thecartnova.com` to the `www` version — the metadata must match whichever one actually serves the 200 response, not the one that redirects). If that changes, update `SITE_URL` in `src/hooks/useSeo.js` and the URLs in those four files.
4. **Deploy** — a `vercel.json` rewrite config is included so client-side routes (`/services`, `/portfolio`, etc.) work correctly on Vercel. The `dist/` folder from `npm run build` can also be deployed to Netlify, GitHub Pages, or any static host (Netlify needs an equivalent `_redirects` file with `/* /index.html 200`).

## SEO

The site ships with on-page SEO already handled:

- Unique `<title>` and meta description per page (`src/hooks/useSeo.js`), plus Open Graph/Twitter Card tags and canonical URLs
- A branded social-share image at `public/og-image.jpg`
- `Organization` JSON-LD structured data in `index.html`
- `public/robots.txt` and `public/sitemap.xml`

**On-page SEO alone won't make the site rank #1 for "Cartnova" — that also depends on:**

1. **Getting indexed.** Add the site to [Google Search Console](https://search.google.com/search-console) as a Domain property (covers both `www` and non-`www`), verify ownership, and submit `https://www.thecartnova.com/sitemap.xml`.
2. **Google Business Profile.** Create one at [business.google.com](https://business.google.com) with the name "Cartnova" — this is one of the strongest signals for winning brand-name searches.
3. **Consistent naming.** Use "Cartnova" exactly and consistently across LinkedIn, Twitter/X, Instagram, GitHub, Clutch/Upwork profiles, etc., and link them back to the site. Once you have these, add them to the `sameAs` array in the `Organization` JSON-LD block in `index.html`.
4. **Backlinks.** Getting the live client sites (Redskapsfabrikken, Proffdeler, Shop Learners) or directories like Clutch to link back to thecartnova.com strengthens the domain's authority.
5. **Time.** Brand-name rankings for a brand-new domain typically take a few weeks to consolidate after indexing, even with everything above in place.
