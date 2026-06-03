# Systembestandsaufnahme und Implementierungskompass

Stand: 2026-06-02

## 1. Kurzfazit

The Latent News ist aktuell ein sehr schlankes Next.js-Frontend in einem Monorepo-ähnlichen Verzeichnislayout. Das Produkt existiert als statische, editorial gestaltete Startseite unter dem Namen **The Latent Times**. Ein erstes nicht-interaktives Qualitätsfundament aus ESLint und Prettier ist vorhanden; es gibt aber noch keine Datenquelle, kein CMS, keine API-Schicht, keine Testsuite und keine dokumentierten Deployment- oder Redaktionsprozesse. Die vorhandene Basis ist buildfähig und eignet sich gut als visuelle Produktvision für die nächsten Implementierungsphasen.

## 2. Repository-Inventar

| Bereich            | Aktueller Stand                                                                                                       | Bewertung                                                                                     |
| ------------------ | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| Root-Dokumentation | `README.md` enthält derzeit nur Kurzbeschreibung und Projektüberblick.                                                | Als Einstieg vorhanden, aber bislang ohne System-, Setup- oder Roadmaptiefe.                  |
| Web-App            | `apps/web` enthält eine Next.js-App mit App Router.                                                                   | Der einzige ausführbare Projektteil.                                                          |
| Frontpage          | `apps/web/app/page.tsx` rendert die Seitenkomposition und Styles; Inhalte kommen aus `apps/web/content/frontpage.ts`. | Besser wartbar als der erste Prototyp, aber Komponenten und Styling sind noch nicht getrennt. |
| Layout/Metadata    | `apps/web/app/layout.tsx` setzt HTML-Sprache, Titel und Beschreibung.                                                 | Minimal und funktionsfähig.                                                                   |
| Styling            | CSS liegt in einem `<style>`-Block innerhalb der Page-Komponente.                                                     | Visuell kohärent, aber mittelfristig schwer wiederzuverwenden.                                |
| Paketierung        | `apps/web/package.json` mit Next.js, React, React DOM, TypeScript, ESLint und Prettier.                               | Buildfähig; CI und Test-Tooling müssen ergänzt werden.                                        |
| TypeScript         | `strict` ist deaktiviert.                                                                                             | Für frühen Prototyp akzeptabel, für Produktphase zu locker.                                   |
| Linting            | Script `npm run lint` ruft die ESLint-CLI mit `eslint-config-next` auf.                                               | Nicht-interaktiv und CI-fähig; spätere Regelverschärfung bleibt sinnvoll.                     |
| Formatierung       | Prettier ist mit `npm run format` und `npm run format:check` eingerichtet.                                            | Grundlegendes Formatierungs-Gate ist vorhanden.                                               |
| Tests              | Keine Unit-, Komponenten-, Accessibility- oder E2E-Tests.                                                             | Kritische Lücke vor weiteren UI- und Content-Iterationen.                                     |
| Datenmodell        | Frontpage-Daten sind in `apps/web/content/frontpage.ts` typisiert.                                                    | Solide Zwischenstufe; ein vollständiges Editorial-Domainmodell fehlt noch.                    |
| CI/CD              | Keine Pipeline im Repository.                                                                                         | Muss vor Teamarbeit und Deployment ergänzt werden.                                            |

## 3. Ausführbarer Systemstand

### 3.1 Anwendung

- Framework: Next.js App Router.
- Runtime-Ziel: statische Startseite, aktuell ohne serverseitige Datenintegration.
- Package-Name: `@the-latent-news/web`.
- Hauptentrypoints:
  - `apps/web/app/layout.tsx` für globale Metadata und Dokumentrahmen.
  - `apps/web/app/page.tsx` für Startseitenkomposition, Struktur und CSS.
  - `apps/web/content/frontpage.ts` für typisierte Startseiteninhalte.

### 3.2 Inhaltliche Produktfläche

Die Startseite besteht derzeit aus folgenden redaktionellen Modulen:

1. Masthead mit Markenpositionierung.
2. Hero-Briefing mit Leitthese.
3. Signal Rail mit fünf Bewegungen.
4. Story Grid mit sechs Karten.
5. Essay Strip als programmatisches Editorial Statement.
6. Canon/Index-Sektion.
7. Footer-Ticker.

Diese Module zeigen bereits eine klare Editorial-Designrichtung: monochrome Zeitungscouture, abstrahierte Visualsysteme und AI-Kultur als Leitmotiv. Noch fehlen echte Artikelrouten, redaktionelle Taxonomie, Inhaltsquellen, Autorenprofile, Archivlogik und Publishing-Workflow.

### 3.3 Verifizierter technischer Zustand

- `npm run build` in `apps/web` läuft erfolgreich durch und prerendered `/` statisch.
- `npm run lint` läuft nicht-interaktiv über die ESLint-CLI.
- `npm run format:check` läuft über Prettier als nicht-mutierender Formatierungscheck.
- `npm list --depth=0` zeigt installierte Versionen aus `package-lock.json`, darunter Next.js 15.5.19, React 19.2.7, TypeScript 5.9.3, ESLint 9.39.4 und Prettier 3.8.3.

## 4. Architekturdiagnose

### 4.1 Stärken

- Sehr kleiner, gut verständlicher Codebestand.
- Starke visuelle Richtung und klare redaktionelle Tonalität.
- Build ist grün; statische Auslieferung ist aktuell realistisch.
- Keine komplexen Altlasten, Migrationen oder Backend-Abhängigkeiten.

### 4.2 Risiken

- Alle Startseitenmodule sind weiterhin in einer einzigen Page-Datei gekoppelt.
- Darstellungslogik und Styles sind noch nicht getrennt; Inhalte sind inzwischen ausgelagert.
- Linting ist eingerichtet, aber CI und Tests fehlen noch als automatisierte Qualitätsgates.
- Fehlende Tests machen visuelle und responsive Regressionen wahrscheinlich.
- Kein Inhaltsmodell; spätere CMS-Integration wäre ohne vorherige Domänenmodellierung chaotisch.
- Markenname ist uneinheitlich: Repository und README sprechen von The Latent News, die UI von The Latent Times.

### 4.3 Offene Produktentscheidungen

1. Soll die publizistische Marke **The Latent News** oder **The Latent Times** heißen?
2. Wird die Seite ein Magazin mit Artikeln, ein Signal-Dashboard oder ein hybrides Editorial-System?
3. Welche Inhaltsquellen sind vorgesehen: Markdown/MDX, Headless CMS, proprietäre Redaktionstools oder API-generierte Briefings?
4. Wird Mehrsprachigkeit gebraucht oder bleibt die Publikation zunächst englisch?
5. Welche Rolle spielen KI-generierte Bilder, Provenance-Hinweise und Modelltransparenz im Produkt?

## 5. Zielbild für die nächsten Phasen

Das nächste stabile Ziel ist ein wartbarer Editorial-Webkern:

- Modularisierte Frontpage-Komponenten.
- Zentralisiertes Content-Modell für Signals, Stories, Issues, Sections und Authors.
- Lokale statische Inhalte als Übergangslösung, bevor ein CMS angebunden wird.
- Qualitätsgates für TypeScript, Linting, Formatierung, Tests und Build.
- Dokumentierter Entwicklungs-, Redaktions- und Deployment-Workflow.

## 6. Implementierungskompass

### Phase 0: Fundament sichern

**Ziel:** Aus dem Prototyp einen zuverlässig wartbaren Codebestand machen.

Empfohlene Aufgaben:

- ESLint über die ESLint-CLI konfigurieren und `next lint` ersetzen.
- Prettier oder eine äquivalente Formatierungsstrategie festlegen.
- TypeScript schrittweise auf `strict: true` vorbereiten.
- Basis-CI mit `npm ci`, `npm run lint`, `npm run build` und später Tests einrichten.
- Repository-Konventionen dokumentieren: Branches, Commits, PR-Checks, App-Pfade.

Akzeptanzkriterien:

- Alle nicht-interaktiven Checks laufen reproduzierbar in CI.
- Neue Codeänderungen können ohne manuelle Tool-Konfiguration geprüft werden.
- README enthält klare Setup- und Qualitätsbefehle.

### Phase 1: Frontpage modularisieren

**Ziel:** Die statische Startseite in wiederverwendbare Bausteine überführen.

Empfohlene Aufgaben:

- `page.tsx` in Komponenten aufteilen: `Masthead`, `Hero`, `SignalRail`, `StoryGrid`, `EssayStrip`, `CanonIndex`, `FooterTicker`.
- Lokale Content-Datei ist mit `content/frontpage.ts` eingeführt; nächster Schritt ist Validierung und Erweiterung.
- Gemeinsame Typen sind für die Frontpage vorhanden; nächster Schritt sind Domain-Typen wie `Signal`, `Story`, `Issue`, `Section`.
- Styling aus Inline-Block herauslösen: CSS Module, globale CSS-Datei oder Design-Token-Struktur.
- Erste Story-Detailroute planen: `/stories/[slug]`.

Akzeptanzkriterien:

- `page.tsx` orchestriert nur noch Seitenkomposition.
- Inhalte sind ohne JSX-Änderungen aktualisierbar.
- Komponenten sind klar benannt und isoliert testbar.

### Phase 2: Content-System und Taxonomie

**Ziel:** Eine redaktionelle Domain etablieren.

Empfohlene Aufgaben:

- Inhaltsmodell für Artikel, Signals, Issues, Authors, Tags, Series und Visual Worlds definieren.
- Slug-, Datums- und Statusregeln festlegen: `draft`, `review`, `published`, `archived`.
- Erste lokale Datenquelle implementieren: JSON, TypeScript-Content oder MDX.
- Metadaten für SEO/Open Graph pro Story und Issue erzeugen.
- Redaktionelle Leitlinien dokumentieren: Tonalität, Rubriken, Quellenangaben, KI-Transparenz.

Akzeptanzkriterien:

- Mindestens eine Detailseite wird aus strukturierten Daten generiert.
- Frontpage kann kuratierte Inhalte aus derselben Datenbasis ziehen.
- Content-Validierung verhindert fehlende Titel, Slugs und Kurztexte.

### Phase 3: Produktqualität und Barrierefreiheit

**Ziel:** Das visuelle System belastbar und zugänglich machen.

Empfohlene Aufgaben:

- Accessibility-Check mit Fokusreihenfolge, Kontrast, semantischen Landmarken und Screenreader-Labels.
- Responsive Regressionen über Playwright-Screenshots absichern.
- Komponenten- oder Rendering-Tests für zentrale Module einführen.
- Performance-Budget definieren: First Load JS, Bildgrößen, Fontstrategie.
- Fehler- und 404-Erlebnis redaktionell gestalten.

Akzeptanzkriterien:

- Automatisierte Tests decken Startseite und erste Storyroute ab.
- Lighthouse- oder vergleichbare Audits erreichen definierte Mindestwerte.
- UI bleibt bei mobilen, Tablet- und Desktop-Breakpoints stabil.

### Phase 4: Publishing und Betrieb

**Ziel:** Aus der App eine betreibbare Publikationsplattform machen.

Empfohlene Aufgaben:

- Deployment-Ziel festlegen, z. B. Vercel, Netlify oder eigener Node-Host.
- Umgebungsvariablen und Secrets dokumentieren.
- Preview-Deployments für Pull Requests einrichten.
- Analytics- und Privacy-Konzept entscheiden.
- Sitemaps, RSS/Atom Feed und strukturierte Daten ergänzen.
- Optional: Headless CMS anbinden, sobald lokales Content-Modell stabil ist.

Akzeptanzkriterien:

- Jeder Merge kann reproduzierbar deployed werden.
- Redaktion kann Preview-Links prüfen.
- Monitoring und Rollback-Pfad sind dokumentiert.

## 7. Sofort parallel ausführbare Aufgaben

Die folgenden Aufgaben sind bewusst so geschnitten, dass mehrere Personen oder Agenten parallel arbeiten können, ohne dieselben Dateien anfassen zu müssen.

| Track       | Aufgabe                                                                          | Primäre Dateien                                           | Abhängigkeiten                                                  | Ergebnis                                                           |
| ----------- | -------------------------------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------------- | ------------------------------------------------------------------ |
| Tooling     | ESLint/Prettier sind eingerichtet; offen sind CI und strengere Regeln.           | `.github/workflows/*`, `apps/web/tsconfig.json`           | Keine                                                           | Automatisierte Checks bei Pull Requests.                           |
| Typisierung | Domain-Content-Typen über Frontpage hinaus entwerfen.                            | neue Dateien unter `apps/web/lib` oder `apps/web/content` | Marken-/Contententscheidungen hilfreich, aber nicht blockierend | Wiederverwendbare Interfaces für Signals, Stories, Issues.         |
| Content     | Frontpage-Daten sind extrahiert; offen sind Slugs, Status und Story-Detaildaten. | `apps/web/content/*`                                      | Typisierung kann parallel erweitert werden                      | Redaktionelle Daten werden routefähig.                             |
| UI          | Komponenten-Schnitt erstellen.                                                   | neue Komponenten unter `apps/web/components`              | Content-Extraktion optional                                     | Page-Komposition wird verständlicher.                              |
| Styling     | Design-Tokens und CSS-Struktur vorschlagen.                                      | neue CSS- oder Token-Dateien                              | Keine                                                           | Grundlage für konsistente Farben, Linien, Typografie.              |
| Tests       | Teststrategie und erstes Setup evaluieren.                                       | neue Testconfig, ggf. `package.json`                      | Tooling-Track koordiniert Scripts                               | Entscheidung für Playwright/Vitest und erster Smoke-Test.          |
| Redaktion   | Brand- und Taxonomieentscheidungen dokumentieren.                                | `docs/`                                                   | Keine                                                           | Klärung von The Latent News vs. The Latent Times und Rubrikmodell. |
| DevOps      | CI-Pipeline entwerfen.                                                           | `.github/workflows/*`                                     | Tooling-Scripts sollten final sein                              | Automatisierte Qualitätsprüfung bei Pull Requests.                 |

## 8. Priorisierte nächste Schritte

1. **Markenentscheidung treffen:** The Latent News vs. The Latent Times verbindlich festlegen.
2. **CI aktivieren:** `npm ci`, `npm run lint`, `npm run format:check` und `npm run build` automatisieren.
3. **Komponenten modularisieren:** Startseite in nachvollziehbare Module zerlegen.
4. **Content-Modell erweitern:** Slugs, Status, Autoren, Sections und erste Story-Detaildaten ergänzen.
5. **Erste Storyroute bauen:** Die Publikation braucht mindestens eine echte Artikelseite.
6. **Tests aktivieren:** Smoke-Test und später Accessibility-/Responsive-Checks ergänzen.
7. **Redaktionelle Dokumentation ergänzen:** Rubriken, Ton, Quellen- und KI-Transparenzregeln.

## 9. Empfohlene Definition of Done ab sofort

Für jede neue technische Aufgabe sollte gelten:

- Build läuft lokal erfolgreich.
- Linting läuft nicht-interaktiv oder die Blockade ist dokumentiert.
- Neue Inhalte sind typisiert oder validiert.
- UI-Änderungen werden mindestens auf Mobile und Desktop geprüft.
- Dokumentation wird aktualisiert, wenn Architektur, Scripts oder Workflows geändert werden.
- PR-Beschreibung nennt Testbefehle und bekannte Einschränkungen.
