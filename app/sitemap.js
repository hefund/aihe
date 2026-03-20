import { locales } from "@/lib/i18n";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://nof1.ai";

export default function sitemap() {
  const routes = ["", "/solutions", "/contact"];

  return locales.flatMap((locale) =>
    routes.map((route, index) => ({
      url: `${siteUrl}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: route === "" ? "weekly" : "monthly",
      priority: index === 0 ? 1 : 0.8
    }))
  );
}
