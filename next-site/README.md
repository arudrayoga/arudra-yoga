Local development & deploy steps for `next-site`

Requirements: Node 20+, npm

Install and build:

```bash
cd next-site
npm ci
npm run optimize-images    # converts top-level assets/ images to public/optimized as WebP
npm run export             # builds and exports static site to next-site/out
```

Deploy: push to GitHub. The included GitHub Actions workflow will run the same steps and publish the static `next-site/out` to the `gh-pages` branch.

If your site is a project Pages site (username.github.io/repo), set the `BASE_PATH` environment variable in CI to `/repo` so asset paths are correct.
