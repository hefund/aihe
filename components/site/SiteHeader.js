import LocaleSwitcher from "@/components/site/LocaleSwitcher";
import TrackedLink from "@/components/site/TrackedLink";

export default function SiteHeader({ dictionary }) {
  return (
    <header className="site-header" data-reveal>
      <TrackedLink href={`/${dictionary.locale}`} className="brand" eventName={dictionary.analytics.nav} eventData={{ target: "brand", locale: dictionary.locale }}>
        <img className="brand-logo" src="/brand-mark.svg" alt="" />
        <span className="brand-text">{dictionary.brand}</span>
      </TrackedLink>

      <nav className="site-nav">
        {dictionary.nav.map((item) => (
          <TrackedLink href={item.href} key={item.href} eventName={dictionary.analytics.nav} eventData={{ target: item.label, locale: dictionary.locale }}>
            {item.label}
          </TrackedLink>
        ))}
      </nav>

      <LocaleSwitcher currentLocale={dictionary.locale} labels={dictionary.labels} eventName={dictionary.analytics.locale} />
    </header>
  );
}
