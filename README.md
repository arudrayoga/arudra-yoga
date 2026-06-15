Next steps to build & deploy the improved static site

1. Install Node 20+ and npm on your machine.
2. From the repo root run:

```bash
cd next-site
npm ci
npm run optimize-images
npm run export
```

3. Preview the exported static site in `next-site/out` or push to GitHub and let the workflow publish to GitHub Pages.

Notes:
- Replace placeholder URLs (canonical, sitemap) with your real domain before publishing.
- Update `next-site/app/contact/page.js` Formspree `action` with your form endpoint or use your preferred backend.
Upload to GitHub Pages and enable Pages from Settings.