# Rising Hope Doula

A static Next.js site for GitHub Pages with [Pages CMS](https://pagescms.org) integration. Content is stored in this repo and can be edited via the Pages CMS UI at [app.pagescms.org](https://app.pagescms.org).

## Features

- **Static export** – `output: 'export'` for deployment to GitHub Pages or any static host
- **Pages CMS** – Edit content (pages, blog posts, images) in GitHub via [Pages CMS](https://github.com/pages-cms/pages-cms); configuration is in [`.pages.yml`](.pages.yml)
- **Content** – Markdown with YAML frontmatter in `content/pages/` and `content/posts/`
- **GitHub Actions** – Workflow in [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml) builds and deploys to GitHub Pages on push to `main`

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). No `basePath` is used locally.

## Build for GitHub Pages

The build uses `GITHUB_REPOSITORY` (e.g. `owner/repo`) to set `basePath` and `assetPrefix` so the site works when served at `https://<user>.github.io/<repo>/`.

To build locally as if for GitHub Pages:

```bash
GITHUB_REPOSITORY=your-username/risingHopeDoula npm run build
```

Static files are in `out/`.

## Deploy to GitHub Pages

1. Push this repo to GitHub.
2. In the repo: **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Push to `main` (or run the workflow manually). The workflow builds the site and deploys the `out` folder to GitHub Pages.

Your site will be at `https://<username>.github.io/<repo>/`.

## Connect Pages CMS

1. Go to [app.pagescms.org](https://app.pagescms.org) and sign in with GitHub.
2. Install the Pages CMS GitHub App on this repository (or your fork).
3. Open the repo in Pages CMS. You can edit:
   - **Pages** – files in `content/pages/` (e.g. `about.md`)
   - **Blog Posts** – files in `content/posts/`
   - **Images** – files in `public/images/`

The [`.pages.yml`](.pages.yml) file in this repo defines the content schema. You can change it in Pages CMS or by editing the file in GitHub.

## Project structure

```
├── .github/workflows/deploy-pages.yml   # GitHub Pages deploy
├── .pages.yml                           # Pages CMS config
├── app/
│   ├── layout.tsx
│   ├── page.tsx                         # Home
│   ├── about/page.tsx
│   └── blog/
│       ├── page.tsx
│       └── [slug]/page.tsx
├── content/
│   ├── pages/                           # Editable pages (e.g. about.md)
│   └── posts/                           # Blog posts (markdown)
├── lib/content.ts                       # Read content at build time
├── next.config.mjs                      # output: 'export', basePath for GH Pages
└── public/images/                       # Media (managed by Pages CMS)
```

## License

MIT
