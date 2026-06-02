# TheLatentNews

A high-fashion newspaper for AI as culture, power and myth.

## Current prototype status

The repository currently contains a Next.js web prototype in `apps/web`. The app renders a static editorial front page for **The Latent Times / The Latent News** with a masthead, hero briefing, signal rail, story grid, essay strip, canon/index block, and footer ticker.

The project is still pre-MVP. The immediate goal is to consolidate all Codex-generated work on `main`, keep changes committed automatically, and make every future iteration reproducible through documented quality gates.

## Repository layout

```text
.
├── apps/web                 # Next.js web prototype
│   ├── app                  # App Router pages/layout
│   ├── scripts              # Local automation scripts
│   ├── eslint.config.mjs    # ESLint flat config
│   ├── package.json         # Web app scripts/dependencies
│   └── tsconfig.json        # TypeScript config
├── docs
│   ├── codex-workflow.md    # How Codex work is consolidated and committed
│   ├── quality.md           # Required local/CI quality gates
│   ├── roadmap.md           # Step-by-step product build plan
│   └── temporal-memory.md   # Temporal memory concept for the product
└── .github/workflows
    └── web-ci.yml           # Automated CI checks for the web app
```

## Working branch policy

- `main` is the canonical working branch for this prototype.
- Codex-generated changes should be committed directly on the active branch before a PR is prepared.
- If feature branches exist later, merge them into `main` only after the quality gates pass.
- Keep the working tree clean after every completed Codex task.

## Local setup

```bash
cd apps/web
npm ci
npm run dev
```

The development server uses the default Next.js behavior. Open the URL printed by `npm run dev`.

## Quality gates

Run these checks before every merge or PR:

```bash
cd apps/web
npm run typecheck
npm run lint
npm run format
npm run a11y:smoke
npm run build
```

The same checks are mirrored in `.github/workflows/web-ci.yml`.

## Current product direction

The Latent News should become an editorial system for AI culture, power, infrastructure, interfaces, datasets, and future signals. The site should evolve from a static front page into a full publishing product with:

1. Structured article and signal models.
2. A temporal memory that tracks how AI narratives change over time.
3. Editorial routes for news, analysis, interviews, reports, signals, archive, and The Latent Lens.
4. Reusable components and a documented design system.
5. Automated CI, quality gates, and predictable Codex handoff behavior.

See `docs/roadmap.md` and `docs/temporal-memory.md` for the next implementation tasks.
