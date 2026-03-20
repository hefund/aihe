import TrackedLink from "@/components/site/TrackedLink";

export default function SolutionsPageView({ dictionary }) {
  return (
    <>
      <section className="page-hero" data-reveal>
        <p className="eyebrow">{dictionary.solutions.eyebrow}</p>
        <h1>{dictionary.solutions.title}</h1>
        <p className="hero-text">{dictionary.solutions.description}</p>
      </section>

      <section className="section-grid" data-reveal>
        <div className="section-heading">
          <p className="eyebrow">Teams</p>
          <h2>{dictionary.solutions.title}</h2>
        </div>
        <div className="card-stack">
          {dictionary.solutions.items.map((item) => (
            <article className="info-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-grid" data-reveal>
        <div className="section-heading">
          <p className="eyebrow">Workflow</p>
          <h2>Observe, decide, execute.</h2>
        </div>
        <div className="card-stack">
          {dictionary.solutions.steps.map((item, index) => (
            <article className="info-card" key={item.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="cta-banner" data-reveal>
        <h2>{dictionary.solutions.description}</h2>
        <TrackedLink href={dictionary.solutions.cta.href} className="button button-primary" eventName={dictionary.analytics.cta} eventData={{ target: "solutions-contact", locale: dictionary.locale }}>
          {dictionary.solutions.cta.label}
        </TrackedLink>
      </section>
    </>
  );
}
