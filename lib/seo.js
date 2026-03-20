import { defaultLocale, locales } from "@/lib/i18n";

export function buildAlternateLanguages(path = "") {
  const normalized = path ? `/${path.replace(/^\/+/, "")}` : "";
  const entries = Object.fromEntries(
    locales.map((locale) => [locale === "zh" ? "zh-CN" : "en-US", `/${locale}${normalized}`])
  );

  entries["x-default"] = `/${defaultLocale}${normalized}`;
  return entries;
}

export function buildOrganizationJsonLd(siteUrl) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "nof1.ai",
    url: siteUrl,
    logo: `${siteUrl}/brand-mark.svg`,
    sameAs: []
  };
}

export function buildWebSiteJsonLd(siteUrl) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "nof1.ai",
    url: siteUrl,
    inLanguage: ["zh-CN", "en-US"]
  };
}

export function buildWebPageJsonLd({ siteUrl, locale, title, description, path }) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url: `${siteUrl}/${locale}${path ? `/${path.replace(/^\/+/, "")}` : ""}`,
    inLanguage: locale === "zh" ? "zh-CN" : "en-US",
    isPartOf: {
      "@type": "WebSite",
      name: "nof1.ai",
      url: siteUrl
    }
  };
}
