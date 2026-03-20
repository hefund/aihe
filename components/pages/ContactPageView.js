import LeadForm from "@/components/site/LeadForm";

export default function ContactPageView({ dictionary }) {
  return (
    <section className="contact-page" data-reveal>
      <div className="contact-copy">
        <p className="eyebrow">{dictionary.contact.eyebrow}</p>
        <h1>{dictionary.contact.title}</h1>
        <p className="hero-text">{dictionary.contact.description}</p>
        <div className="contact-side-card">
          <h3>Use Cases</h3>
          <ul className="bullet-list">
            {dictionary.contact.bullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <LeadForm dictionary={dictionary} source="contact_page" />
    </section>
  );
}
