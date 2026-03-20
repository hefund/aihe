const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://nof1.ai";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: ["/zh", "/en"]
    },
    sitemap: `${siteUrl}/sitemap.xml`
  };
}
