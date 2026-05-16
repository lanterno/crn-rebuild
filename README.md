# Climate Robotics Network

The marketing site for the [Climate Robotics Network](https://crn.elghareeb.space) — an inclusive community connecting, enabling, and supporting climate robotics worldwide.

**Stack:** Astro 5 · Tailwind v3 · TinaCMS · Bun · TypeScript (strict) · GitHub Pages

## Quick start

Use [Bun](https://bun.sh), not npm/yarn/pnpm — the lockfile is `bun.lock` and CI uses Bun.

```sh
bun install            # install deps
bun run dev            # dev server with TinaCMS at http://localhost:4321
bun run build:static   # CI build (Astro only, no Tina secrets needed)
bun run preview        # preview the built dist/ locally
```

| Command | Purpose |
| :--- | :--- |
| `bun run dev` | Runs `tinacms dev -c "astro dev"` — full CMS admin at `/admin` |
| `bun run build` | Full build incl. TinaCMS admin (needs `TINA_CLIENT_ID` + `TINA_TOKEN`) |
| `bun run build:static` | What `.github/workflows/deploy.yml` runs — Astro only |
| `bun astro check` | TypeScript + Astro diagnostics |

There is **no test suite, no linter, and no formatter** configured. Don't invent commands for them.

## What's here

| Route | Page |
| :--- | :--- |
| `/` | Homepage — hero, community stats, CTA |
| `/consulting` | Consulting services |
| `/research` | 2025 White Paper |
| `/summits` | Summits hub — organizers, past events |
| `/summits/2025` | Summit 2025 archive — program, speakers, sponsors, video grid |
| `/summits/2026` | Summit 2026 archive — program, speakers, sponsors |
| `/map` | Global map of climate robotics orgs (Leaflet, full-viewport) |
| `/slack` | Join the Slack community |

## Repository layout

```
site/
├── public/                # Static assets — copied verbatim into dist/
│   └── images/            # Hero photos, speaker portraits, sponsor logos, team
├── src/
│   ├── components/        # Reusable Astro components
│   ├── content/           # TinaCMS-managed MDX/JSON content
│   ├── layouts/           # BaseLayout (Header + Footer + global SEO)
│   ├── lib/               # Cross-cutting data — SOURCE OF TRUTH
│   │   ├── constants.ts   # External URLs, site/summit metadata
│   │   ├── summits-data.ts# Summits, speakers, programs, sponsors, team
│   │   ├── mapData.ts     # Build-time fetch from Google Sheets
│   │   └── types.ts       # Shared types for the map
│   ├── pages/             # File-based routes
│   └── styles/global.css  # Tailwind + utility classes
├── tina/config.ts         # TinaCMS schema (page + siteSettings collections)
├── docs/                  # Project goals & scraped agenda reference
├── ARCHITECTURE.md        # Why this stack — design philosophy
└── CLAUDE.md              # Codebase guide for AI assistants
```

When adding external URLs or summit data, edit `src/lib/` rather than hardcoding values in pages. See `CLAUDE.md` for the conventions.

## Deployment

`.github/workflows/deploy.yml` builds with `bun run build:static` and publishes `dist/` to GitHub Pages on every push to `main`. The custom domain `crn.elghareeb.space` is set via `public/CNAME`.

`astro.config.mjs` declares `output: 'static'` — there is no SSR, no API routes, no server. Anything that needs runtime data either fetches client-side or is baked in at build time (as `mapData.ts` does for the `/map` page).

To refresh the `/map` data in production, re-run the Pages workflow.

## Editing content

**With TinaCMS (visual editor):**

1. `bun run dev` to start the server with TinaCMS
2. Open `http://localhost:4321/admin`
3. Edit pages with live preview — changes commit to Git

**Directly in the repo:**

- Page copy lives in `src/content/pages/*.mdx`
- Site-wide settings (nav, footer, social) live in `src/content/settings/site.json`
- Summit data, speakers, sponsors, organizers live in `src/lib/summits-data.ts`
- External URLs (Slack invite, YouTube playlists, partner sites) live in `src/lib/constants.ts`

## Further reading

- [`ARCHITECTURE.md`](ARCHITECTURE.md) — the "why" behind the stack
- [`CLAUDE.md`](CLAUDE.md) — codebase conventions and gotchas (esp. the deliberately non-`BaseLayout` map page, the build-time Google Sheets fetch, and the strict TypeScript flags)
- [`docs/summit-2026-agenda.txt`](docs/summit-2026-agenda.txt) — scraped reference for the 2026 program
