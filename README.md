# TheLatentNews

A high-fashion newspaper for AI as culture, power and myth.

## Current system snapshot

The repository currently contains a single runnable web application in `apps/web`. It is a Next.js App Router prototype that renders a static editorial frontpage under the product masthead **The Latent Times**. The page already establishes the intended visual and editorial direction, but it does not yet include a CMS, article routes, API layer, test suite, CI workflow, or production publishing process.

For the detailed inventory, risks, next implementation phases, and parallel workstreams, see [`docs/system-status-and-implementation-compass.md`](docs/system-status-and-implementation-compass.md).

## Repository layout

```text
.
├── README.md
├── docs/
│   └── system-status-and-implementation-compass.md
└── apps/
    └── web/
        ├── app/
        │   ├── layout.tsx
        │   └── page.tsx
        ├── content/
        │   └── frontpage.ts
        ├── eslint.config.mjs
        ├── .prettierrc.json
        ├── .prettierignore
        ├── package.json
        ├── package-lock.json
        └── tsconfig.json
```

## Web application

- **Framework:** Next.js App Router
- **Package:** `@the-latent-news/web`
- **Primary route:** `/`
- **Current rendering mode:** static prerendered frontpage
- **Primary files:**
  - `apps/web/app/layout.tsx` for global metadata and document structure.
  - `apps/web/app/page.tsx` for the current frontpage composition and inline styles.
  - `apps/web/content/frontpage.ts` for typed frontpage content.

## Local development

From the web app directory:

```bash
cd apps/web
npm install
npm run dev
```

Then open the local Next.js development URL printed by the command.

## Checks

```bash
cd apps/web
npm run build
npm run lint
npm run format:check
```

Known status as of 2026-06-02:

- `npm run build` succeeds and statically prerenders the home route.
- `npm run lint` now uses the ESLint CLI with `eslint-config-next` and runs non-interactively.
- `npm run format:check` uses Prettier to verify formatting without modifying files.

## Implementation compass

The next phases are:

1. Continue stabilizing tooling: stricter TypeScript and CI are still outstanding; ESLint CLI and Prettier are now in place.
2. Modularize the frontpage into reusable components.
3. Extend the typed content files into a fuller editorial domain model.
4. Define the editorial content model for stories, signals, issues, authors, tags, and visual worlds.
5. Add story detail routes and metadata generation.
6. Add accessibility, responsive, component, and smoke tests.
7. Establish deployment, preview, analytics/privacy, RSS/sitemap, and editorial publishing workflows.

See the full compass for acceptance criteria and parallelizable tracks.
