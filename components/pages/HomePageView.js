import LeadForm from "@/components/site/LeadForm";
import TrackedLink from "@/components/site/TrackedLink";

export default function HomePageView({ dictionary }) {
  return (
    <>
      <section className="hero" data-reveal>
        <div className="hero-copy">
          <p className="eyebrow">{dictionary.home.eyebrow}</p>
          <h1>{dictionary.home.title}</h1>
          <p className="hero-text">{dictionary.home.description}</p>

          <div className="hero-actions">
            <TrackedLink href={dictionary.home.primaryCta.href} className="button button-primary" eventName={dictionary.analytics.cta} eventData={{ target: "demo", locale: dictionary.locale }}>
              {dictionary.home.primaryCta.label}
            </TrackedLink>
            <TrackedLink href={dictionary.home.secondaryCta.href} className="button button-secondary" eventName={dictionary.analytics.cta} eventData={{ target: "solutions", locale: dictionary.locale }}>
              {dictionary.home.secondaryCta.label}
            </TrackedLink>
          </div>

          <ul className="hero-metrics">
            {dictionary.home.metrics.map((item) => (
              <li key={item.value}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="hero-panel">
          <div className="panel-card panel-main">
            <div className="panel-header">
              <span className="status-dot"></span>
              <span>Decision Engine Live</span>
            </div>
            <div className="signal-grid">
              {dictionary.home.signals.map((item) => (
                <article key={item.name}>
                  <span>{item.name}</span>
                  <strong>{item.value}</strong>
                  <p>{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="panel-card panel-note">
            <p>Recommendation</p>
            <strong>{dictionary.home.note}</strong>
          </div>
        </div>
      </section>

      <section className="logo-strip" data-reveal>
        <p>{dictionary.home.audience}</p>
      </section>

      <section className="section-grid" data-reveal>
        <div className="section-heading">
          <p className="eyebrow">What Is nof1.ai</p>
          <h2>{dictionary.home.contactTitle}</h2>
        </div>
        <div className="card-stack">
          {dictionary.home.cards.map((item) => (
            <article className="info-card" key={item.index}>
              <span>{item.index}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="results" data-reveal>
        <div className="section-heading narrow">
          <p className="eyebrow">Results</p>
          <h2>{dictionary.home.title}</h2>
        </div>
        <div className="results-stats results-stats-inline">
          {dictionary.home.results.map((item) => (
            <article key={item.value}>
              <strong>{item.value}</strong>
              <p>{item.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contact" data-reveal>
        <div className="contact-copy">
          <p className="eyebrow">Start With One Workflow</p>
          <h2>{dictionary.home.contactTitle}</h2>
        </div>
        <LeadForm dictionary={dictionary} source="home" />
      </section>
    </>
  );
}
