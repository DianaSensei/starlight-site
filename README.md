# starlight-site

Static site for DevTool, built with Astro and Tailwind and deployed to GitHub Pages
(`.github/workflows/deploy.yml`) at `https://dianasensei.github.io/starlight-site`.

```bash
npm ci
npm run dev     # local dev server
npm run build   # static output in dist/
```

## Layout

| Path | Contents |
| --- | --- |
| `src/config/site.ts` | Repository names, external URLs, nav links, `url()` for base-path links |
| `src/data/` | Built-in tool list and optional plugin list (static content) |
| `src/lib/release.ts` | Latest-release lookup and installer asset URLs |
| `src/lib/catalog.ts` | Plugin catalog fetch, validation, and install deep link |
| `src/lib/posts.ts` | Blog collection query and date formatting |
| `src/components/` | Shared UI (tags, headings, icons, post list, logo) |
| `src/pages/` | One file per route |
| `src/content/blog/` | Blog posts (Markdown, schema in `src/content/config.ts`) |

## Network access from the browser

The pages are static. Client scripts make read-only requests to GitHub only:

- `releases/latest/download/latest.json`, falling back to the Releases API: latest app version.
- `raw.githubusercontent.com/.../catalog.json`: plugin versions and manifest URLs.
  Entries are validated in `src/lib/catalog.ts`; only `https:` manifest URLs are used.

No cookies, analytics, or third-party scripts. Fonts load from Google Fonts.
The only stored value is the `theme` key in `localStorage`.
