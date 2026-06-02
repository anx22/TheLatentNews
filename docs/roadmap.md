# The Latent News Roadmap

This roadmap turns the current static prototype into a complete editorial application. The app is intentionally unfinished; the tasks below are ordered so Codex can continue implementation without asking the user to manually create scaffolding each time.

## Phase 0: Repository and process foundation

- Keep `main` as the canonical working branch.
- Keep the working tree clean after every Codex task.
- Run and maintain the quality gates in `docs/quality.md`.
- Keep `.github/workflows/web-ci.yml` aligned with local scripts.
- Expand docs before introducing large implementation changes.

## Phase 1: Product definition

- Resolve the brand naming conflict between `TheLatentNews`, `The Latent News`, and `The Latent Times`.
- Write an editorial mission statement.
- Define the target audience: AI builders, researchers, designers, cultural strategists, policy readers, and future-oriented media consumers.
- Define the primary sections: News, Analysis, Interviews, Reports, Signals, Archive, and The Latent Lens.
- Document the tone: high-fashion newspaper, cultural intelligence briefing, myth-aware technology criticism.

## Phase 2: App shell

- Add a global site header with navigation.
- Add a reusable site footer.
- Add `not-found.tsx`, `loading.tsx`, and an error boundary.
- Move global styles from `app/page.tsx` into `app/globals.css`.
- Add layout-level metadata, Open Graph defaults, and canonical URL configuration.

## Phase 3: Frontpage modularization

- Extract the masthead, hero, signal rail, story grid, essay strip, canon index, and footer ticker into reusable components.
- Move frontpage data into `apps/web/content/frontpage.ts`.
- Add TypeScript types for `SignalItem`, `StoryTeaser`, and visual treatment names.
- Replace hard-coded story card data with typed content imports.
- Keep the first visual pass identical while improving maintainability.

## Phase 4: Editorial content model

- Add typed content files for articles, authors, rubrics, tags, and sources.
- Add article detail routes at `app/articles/[slug]/page.tsx`.
- Add section landing pages for Signals, Essays, Interviews, Reports, Archive, and About.
- Generate route metadata from content objects.
- Add basic content validation helpers.

## Phase 5: Temporal memory

- Implement the temporal memory model described in `docs/temporal-memory.md`.
- Link articles and signals to memory events.
- Build a `MemoryTimeline` component.
- Add signal profile pages with narrative history and source trails.
- Use memory snapshots to show how a story changed over time.

## Phase 6: Search and archive

- Build a static search index from articles, signals, and memory events.
- Add `app/search/page.tsx` with client-side filtering.
- Add archive filters for year, rubric, tag, and signal.
- Add RSS/feed route generation.
- Add sitemap and robots routes.

## Phase 7: Quality, accessibility, and launch readiness

- Enable stricter TypeScript settings once content models are stable.
- Add component tests for frontpage and article pages.
- Add Playwright smoke tests for navigation and critical routes.
- Add accessibility checks beyond the current static smoke test.
- Add deployment documentation and preview deployment expectations.

## Immediate next implementation queue

1. Extract frontpage data to `apps/web/content/frontpage.ts`.
2. Move inline styles to `apps/web/app/globals.css`.
3. Split `apps/web/app/page.tsx` into frontpage components.
4. Create route placeholders for `/signals`, `/archive`, `/about`, `/articles/[slug]`.
5. Add the first typed temporal-memory data file.
6. Add metadata templates and sitemap generation.
