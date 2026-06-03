# Temporal Memory

The temporal memory is the product layer that distinguishes The Latent News from a conventional news site. It records how AI stories, signals, claims, and interpretations change over time.

## Purpose

The memory should help readers answer:

- What happened?
- When did the interpretation change?
- Which signals were early, late, wrong, or still unresolved?
- Which sources shaped the narrative?
- How does a current AI story connect to older infrastructure, policy, design, and culture shifts?

## Core entities

### MemoryEvent

A dated event that can be connected to articles, signals, sources, and narrative revisions.

Suggested fields:

- `id`
- `title`
- `date`
- `summary`
- `rubric`
- `sourceIds`
- `signalIds`
- `articleSlugs`
- `confidence`

### Signal

A recurring pattern tracked across time.

Suggested fields:

- `id`
- `slug`
- `title`
- `currentStatus`
- `summary`
- `firstObservedAt`
- `lastUpdatedAt`
- `eventIds`
- `tags`

### NarrativeRevision

A record of how the editorial interpretation changed.

Suggested fields:

- `id`
- `signalId`
- `date`
- `previousFrame`
- `newFrame`
- `reason`
- `sourceIds`

### SourceReference

A normalized reference to source material.

Suggested fields:

- `id`
- `title`
- `publisher`
- `url`
- `publishedAt`
- `accessedAt`
- `notes`

## MVP approach

For the prototype, implement temporal memory as typed static content under `apps/web/content/memory.ts`. This keeps the system inspectable, versioned in Git, and easy for Codex to update.

## Post-MVP approach

After the static content model stabilizes, evaluate a database-backed editorial memory with:

- persistent event IDs,
- source normalization,
- revision history,
- editorial review states,
- search indexing,
- optional vector retrieval for semantic connections.

## First implementation tasks

1. Create `apps/web/content/memory.ts` with TypeScript types and sample data.
2. Connect current frontpage stories to memory IDs.
3. Build a `MemoryTimeline` component.
4. Add a signal profile route that renders linked memory events.
5. Add editorial rules for revising previous interpretations instead of silently overwriting them.
