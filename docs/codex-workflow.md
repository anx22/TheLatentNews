# Codex Workflow

This document defines how Codex-generated work should be gathered, committed, and prepared for review without requiring manual file creation after every step.

## Operating mode

1. Work on `main` for the prototype unless a user explicitly requests a separate feature branch.
2. Inspect the repository state before changing files:
   - `git status --short --branch`
   - `git branch --all --no-color`
   - `git remote -v`
3. Pull or merge remote work only when a remote exists. If no remote exists, document that local `main` is the complete available source of truth.
4. Make focused changes that advance the roadmap.
5. Run the required quality gates from `docs/quality.md`.
6. Commit the finished changes with a concise, descriptive message.
7. Create a PR record with the PR tool after the commit.

## Automatic commit policy

Codex should commit completed repository changes automatically instead of leaving a dirty working tree for the user. A completed Codex task should end in exactly one of these states:

- No code changes were necessary, so no commit and no PR were created.
- Code or documentation changed, quality checks were run, a commit was created, and a PR record was created.

## Commit message style

Use short imperative messages:

- `Document Codex workflow and roadmap`
- `Add web CI quality gates`
- `Extract frontpage components`
- `Add temporal memory model`

## PR body checklist

Every PR body should include:

- Summary of changed areas.
- Tests/checks that were run.
- Known warnings or limitations.
- Follow-up tasks when relevant.

## Current consolidation status

As of this repository state, the visible Codex-created work has been consolidated onto `main` locally. No Git remote is configured, so GitHub synchronization must happen outside this container or after a remote is added.
