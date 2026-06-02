# Quality Gates

Diese Mindestchecks gelten für die Web-App in `apps/web`. Ziel ist, dass dieselben Befehle lokal reproduzierbar sind und später unverändert oder gleichwertig in der CI laufen.

## Mindestchecks

| Check | Lokaler Befehl | CI-Status | Zweck |
| --- | --- | --- | --- |
| TypeScript-Check | `cd apps/web && npm run typecheck` | Verpflichtend | Prüft Typfehler ohne Build-Artefakte zu erzeugen. |
| Lint | `cd apps/web && npm run lint` | Verpflichtend | Prüft Next.js-, React- und TypeScript-Regeln. |
| Build | `cd apps/web && npm run build` | Verpflichtend | Verifiziert, dass die App produktionsfähig kompiliert. |
| Formatierung | `cd apps/web && npm run format` | Verpflichtend | Prüft, ob Prettier-konforme Formatierung eingehalten wird. |
| Accessibility-Smoke-Test | `cd apps/web && npm run a11y:smoke` | Verpflichtend | Prüft grundlegende Accessibility-Markierungen wie Sprache, Hauptbereich, primäre Überschrift und benannte Bereiche. |

## Lokal ausführen

Vor jedem Pull Request sollten Entwicklerinnen und Entwickler die Checks lokal ausführen:

```bash
cd apps/web
npm run typecheck
npm run lint
npm run format
npm run a11y:smoke
npm run build
```

Falls die Formatierung fehlschlägt, kann sie lokal mit `npm run format:write` korrigiert werden. Danach muss `npm run format` erneut erfolgreich laufen.

## Spätere CI-Ausführung

Sobald CI konfiguriert ist, muss sie mindestens diese Jobs für Änderungen an `main` und für Pull Requests ausführen:

1. Dependencies installieren: `cd apps/web && npm ci`
2. TypeScript prüfen: `cd apps/web && npm run typecheck`
3. Lint ausführen: `cd apps/web && npm run lint`
4. Formatierung prüfen: `cd apps/web && npm run format`
5. Accessibility-Smoke-Test ausführen: `cd apps/web && npm run a11y:smoke`
6. Produktionsbuild erstellen: `cd apps/web && npm run build`

Die CI darf einen Pull Request erst als mergefähig markieren, wenn alle verpflichtenden Checks erfolgreich sind.

## Verpflichtend vor jedem Merge nach `main`

Vor jedem Merge nach `main` sind die folgenden Checks verpflichtend und müssen grün sein:

- TypeScript-Check
- Lint
- Build
- Formatierung
- Accessibility-Smoke-Test

Diese Checks sind auch dann verpflichtend, wenn nur kleinere UI-, Content- oder Konfigurationsänderungen vorgenommen wurden. Ausnahmen müssen im Pull Request begründet und nachträglich behoben werden.
