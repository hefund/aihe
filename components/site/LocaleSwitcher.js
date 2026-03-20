"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales } from "@/lib/i18n";
import { trackEvent } from "@/lib/analytics";

export default function LocaleSwitcher({ currentLocale, labels, eventName }) {
  const pathname = usePathname();

  function localize(locale) {
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/") || `/${locale}`;
  }

  return (
    <div className="locale-switcher">
      {locales.map((locale) => (
        <Link
          href={localize(locale)}
          key={locale}
          className={`locale-pill${locale === currentLocale ? " is-active" : ""}`}
          onClick={() => trackEvent(eventName, { from: currentLocale, to: locale })}
        >
          {labels[locale]}
        </Link>
      ))}
    </div>
  );
}
