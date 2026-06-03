import { frontpageContent } from "../content/frontpage";

export default function Home() {
  const { masthead, hero, signalRail, stories, essay, canonIndex, footerTicker } = frontpageContent;

  return (
    <main className="frontpage">
      <header className="masthead" aria-label={`${masthead.title} masthead`}>
        <div className="masthead__meta">{masthead.meta}</div>
        <h1>{masthead.title}</h1>
        <p>{masthead.tagline}</p>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="lead-indicator">
          <span>{hero.indicatorLabel}</span>
          <strong>{hero.indicatorValue}</strong>
        </div>
        <article className="hero__story">
          <p className="eyebrow">Frontpage Briefing · Issue 000</p>
          <h2 id="hero-title">
            Artificial intelligence is no longer a sector. It is the weather.
          </h2>
          <p className="hero__dek">
            The Latent Times tracks the ambient forces turning models into
            media, interfaces into rituals, and technical decisions into
            cultural gravity.
          </p>
        </article>
        <div
          className="hero__visual"
          role="img"
          aria-label="Abstract monochrome placeholder for latent signal field"
        >
          <div className="visual-frame">
            <span>{hero.visualLabel}</span>
          </div>
        </div>
      </section>

      <section className="signal-rail" aria-labelledby="signal-title">
        <div>
          <p className="eyebrow">{signalRail.eyebrow}</p>
          <h2 id="signal-title">{signalRail.title}</h2>
        </div>
        <ol>
          {signalRail.signals.map((signal, index) => (
            <li key={signal}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{signal}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="story-grid" aria-label="Story grid">
        {stories.map((story) => (
          <article
            className={`story-card story-card--${story.visualWorld}`}
            key={story.title}
          >
            <div className="story-card__visual">
              <span>{story.visualWorld}</span>
            </div>
            <div className="story-card__copy">
              <p>{story.kicker}</p>
              <h3>{story.title}</h3>
              <span>{story.dek}</span>
            </div>
          </article>
        ))}
      </section>

      <section className="essay-strip" aria-labelledby="essay-title">
        <p className="eyebrow">Essay Strip</p>
        <h2 id="essay-title">
          The next newspaper is not a dashboard. It is a discipline for seeing
          the pattern before it becomes consensus.
        </h2>
        <p>
          Read slowly. Compare signals. Distrust frictionless certainty. The
          future arrives first as a tonal shift, then as infrastructure.
        </p>
      </section>

      <section className="canon-index" aria-label="Canon and index">
        <article>
          <p className="eyebrow">Canon</p>
          <h2>The Prompt Is Dead</h2>
          <p>
            From command line to conversation, from conversation to
            choreography.
          </p>
        </article>
        <article>
          <p className="eyebrow">Index</p>
          <h2>Signal Map</h2>
          <p>
            A living taxonomy for agents, archives, compute, culture, and power.
          </p>
        </article>
      </section>

      <footer className="footer-ticker" aria-label="Footer ticker">
        {footerTicker.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </footer>

      <style>{`
        :root {
          color: #11100d;
          background: #f4efe5;
          font-family: "Inter", "Helvetica Neue", Arial, sans-serif;
        }

        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          background:
            linear-gradient(rgba(17, 16, 13, 0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(17, 16, 13, 0.03) 1px, transparent 1px),
            #f4efe5;
          background-size: 100% 32px, 32px 100%, auto;
          color: #11100d;
        }

        .frontpage {
          margin: 0 auto;
          max-width: 1440px;
          padding: 24px;
        }

        .masthead {
          border-bottom: 1px solid #11100d;
          border-top: 1px solid #11100d;
          display: grid;
          gap: 10px;
          grid-template-columns: 1fr;
          padding: 22px 0 26px;
          text-align: center;
        }

        .masthead__meta,
        .eyebrow,
        .lead-indicator,
        .footer-ticker,
        .story-card__copy p {
          font-family: "IBM Plex Mono", "SFMono-Regular", Consolas, monospace;
          font-size: 0.72rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .masthead h1 {
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(4rem, 13vw, 11.5rem);
          font-weight: 500;
          letter-spacing: -0.095em;
          line-height: 0.82;
          margin: 0;
        }

        .masthead p {
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(1.2rem, 2vw, 2.1rem);
          margin: 0;
        }

        .hero {
          border-bottom: 1px solid #11100d;
          display: grid;
          grid-template-columns: minmax(150px, 0.65fr) minmax(0, 1.45fr) minmax(320px, 1.1fr);
          min-height: 560px;
        }

        .lead-indicator {
          align-content: space-between;
          border-right: 1px solid #11100d;
          display: grid;
          padding: 24px 18px;
        }

        .lead-indicator span {
          writing-mode: vertical-rl;
        }

        .lead-indicator strong {
          font-size: 0.78rem;
          font-weight: 500;
        }

        .hero__story {
          align-content: end;
          border-right: 1px solid #11100d;
          display: grid;
          padding: 28px;
        }

        .hero__story h2 {
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(3.4rem, 7vw, 8.8rem);
          font-weight: 500;
          letter-spacing: -0.075em;
          line-height: 0.86;
          margin: 12px 0 24px;
          max-width: 890px;
        }

        .hero__dek {
          font-size: clamp(1rem, 1.45vw, 1.4rem);
          line-height: 1.35;
          margin: 0;
          max-width: 700px;
        }

        .hero__visual {
          padding: 18px;
        }

        .visual-frame {
          align-items: end;
          background:
            radial-gradient(circle at 30% 28%, rgba(244, 239, 229, 0.72) 0 8%, transparent 19%),
            radial-gradient(circle at 76% 70%, rgba(244, 239, 229, 0.34) 0 10%, transparent 23%),
            repeating-linear-gradient(135deg, rgba(244, 239, 229, 0.12) 0 1px, transparent 1px 12px),
            #11100d;
          color: #f4efe5;
          display: flex;
          height: 100%;
          justify-content: end;
          min-height: 520px;
          padding: 18px;
        }

        .visual-frame span {
          border: 1px solid #f4efe5;
          font-family: "IBM Plex Mono", "SFMono-Regular", Consolas, monospace;
          font-size: 0.72rem;
          letter-spacing: 0.12em;
          padding: 8px 10px;
          text-transform: uppercase;
        }

        .signal-rail {
          border-bottom: 1px solid #11100d;
          display: grid;
          grid-template-columns: 0.8fr 2.2fr;
        }

        .signal-rail > div {
          border-right: 1px solid #11100d;
          padding: 24px;
        }

        .signal-rail h2,
        .canon-index h2 {
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(2rem, 4vw, 4.5rem);
          font-weight: 500;
          letter-spacing: -0.065em;
          line-height: 0.92;
          margin: 10px 0 0;
        }

        .signal-rail ol {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .signal-rail li {
          border-right: 1px solid #11100d;
          display: grid;
          gap: 60px;
          min-height: 260px;
          padding: 18px;
        }

        .signal-rail li:last-child {
          border-right: 0;
        }

        .signal-rail span {
          font-family: Georgia, "Times New Roman", serif;
          font-size: 2.5rem;
        }

        .signal-rail p {
          font-size: 1.05rem;
          line-height: 1.25;
          margin: 0;
        }

        .story-grid {
          border-bottom: 1px solid #11100d;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
        }

        .story-card {
          border-right: 1px solid #11100d;
          display: grid;
          grid-template-rows: 220px 1fr;
          min-height: 430px;
          transition: background 180ms ease, color 180ms ease;
        }

        .story-card:nth-child(3n) {
          border-right: 0;
        }

        .story-card:nth-child(n + 4) {
          border-top: 1px solid #11100d;
        }

        .story-card:hover {
          background: #11100d;
          color: #f4efe5;
        }

        .story-card__visual {
          border-bottom: 1px solid currentColor;
          display: grid;
          padding: 16px;
          place-items: end start;
        }

        .story-card__visual span {
          border: 1px solid currentColor;
          font-family: "IBM Plex Mono", "SFMono-Regular", Consolas, monospace;
          font-size: 0.66rem;
          letter-spacing: 0.1em;
          padding: 6px 8px;
          text-transform: uppercase;
        }

        .story-card--nocturne-grid .story-card__visual {
          background: repeating-linear-gradient(90deg, #11100d 0 1px, transparent 1px 26px), #d9d0bf;
        }

        .story-card--paper-fold .story-card__visual {
          background: linear-gradient(135deg, transparent 49%, #11100d 50%, transparent 51%), #eee6d6;
        }

        .story-card--archive-dust .story-card__visual {
          background: radial-gradient(#11100d 1px, transparent 1px), #e6dcc9;
          background-size: 18px 18px;
        }

        .story-card--redaction-band .story-card__visual {
          background: linear-gradient(#11100d 0 22%, transparent 22% 45%, #11100d 45% 58%, transparent 58%), #efe8d8;
        }

        .story-card--signal-orb .story-card__visual {
          background: radial-gradient(circle at center, transparent 0 28%, #11100d 29% 30%, transparent 31%), #ded4c2;
        }

        .story-card--chrome-bloom .story-card__visual {
          background: conic-gradient(from 45deg, #11100d, #f4efe5, #b9ad99, #11100d);
        }

        .story-card__copy {
          display: grid;
          gap: 16px;
          padding: 18px;
        }

        .story-card__copy h3 {
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(1.7rem, 3vw, 3.1rem);
          font-weight: 500;
          letter-spacing: -0.055em;
          line-height: 0.95;
          margin: 0;
        }

        .story-card__copy p,
        .eyebrow {
          margin: 0;
        }

        .story-card__copy span {
          align-self: end;
          line-height: 1.35;
        }

        .essay-strip {
          background: #11100d;
          color: #f4efe5;
          display: grid;
          gap: 20px;
          grid-template-columns: 0.35fr 1.45fr 0.8fr;
          padding: 32px 24px;
        }

        .essay-strip h2 {
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(2.4rem, 5.8vw, 7.5rem);
          font-weight: 500;
          letter-spacing: -0.08em;
          line-height: 0.85;
          margin: 0;
        }

        .essay-strip p:last-child {
          align-self: end;
          font-size: 1.05rem;
          line-height: 1.3;
          margin: 0;
        }

        .canon-index {
          border-bottom: 1px solid #11100d;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
        }

        .canon-index article {
          min-height: 300px;
          padding: 24px;
        }

        .canon-index article:first-child {
          border-right: 1px solid #11100d;
        }

        .canon-index p:last-child {
          font-size: 1.1rem;
          line-height: 1.35;
          max-width: 460px;
        }

        .footer-ticker {
          display: flex;
          flex-wrap: wrap;
          gap: 0;
          justify-content: center;
          padding: 18px 0 0;
        }

        .footer-ticker span {
          border-right: 1px solid #11100d;
          padding: 0 14px;
        }

        .footer-ticker span:last-child {
          border-right: 0;
        }

        @media (max-width: 1100px) {
          .hero,
          .signal-rail,
          .essay-strip {
            grid-template-columns: 1fr;
          }

          .lead-indicator,
          .hero__story,
          .signal-rail > div {
            border-right: 0;
            border-bottom: 1px solid #11100d;
          }

          .lead-indicator span {
            writing-mode: initial;
          }

          .signal-rail ol,
          .story-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .signal-rail li:nth-child(2n),
          .story-card:nth-child(3n) {
            border-right: 0;
          }

          .story-card:nth-child(odd) {
            border-right: 1px solid #11100d;
          }
        }

        @media (max-width: 700px) {
          .frontpage {
            padding: 12px;
          }

          .masthead h1 {
            font-size: clamp(3.5rem, 18vw, 6rem);
          }

          .hero__story,
          .lead-indicator,
          .signal-rail > div,
          .canon-index article,
          .essay-strip {
            padding: 18px;
          }

          .hero__visual {
            padding: 12px;
          }

          .visual-frame {
            min-height: 340px;
          }

          .signal-rail ol,
          .story-grid,
          .canon-index {
            grid-template-columns: 1fr;
          }

          .signal-rail li,
          .story-card,
          .story-card:nth-child(odd),
          .canon-index article:first-child {
            border-right: 0;
          }

          .signal-rail li,
          .story-card:nth-child(n + 2),
          .canon-index article + article {
            border-top: 1px solid #11100d;
          }
        }
      `}</style>
    </main>
  );
}
