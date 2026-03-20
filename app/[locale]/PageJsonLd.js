import JsonLd from "@/components/site/JsonLd";
import { buildWebPageJsonLd } from "@/lib/seo";

export default function PageJsonLd({ siteUrl, locale, title, description, path }) {
  return (
    <JsonLd
      data={buildWebPageJsonLd({
        siteUrl,
        locale,
        title,
        description,
        path
      })}
    />
  );
}
