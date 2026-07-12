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

1. **Wire up the contact form.** Create a free form at [formspree.io](https://formspree.io) pointed at your inbox, then replace `FORMSPREE_ENDPOINT` in `src/pages/Contact.jsx` with your real endpoint URL.
2. **Replace placeholder content.** `src/data/content.js` holds all portfolio case studies and client testimonials — these are placeholders and should be swapped for real client work/names before publishing, so visitors aren't shown fabricated testimonials.
3. **Update contact details** in `src/components/Footer.jsx` and `src/pages/Contact.jsx` if your email/hours change.
4. **Deploy** — the `dist/` folder from `npm run build` can be deployed to Netlify, Vercel, GitHub Pages, or any static host.
