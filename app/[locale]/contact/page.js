import { notFound } from "next/navigation";
import PageJsonLd from "@/app/[locale]/PageJsonLd";
import LocalizedShell from "@/components/site/LocalizedShell";
import { getSiteUrl } from "@/lib/env";
import { getDictionary, isValidLocale } from "@/lib/i18n";
import { buildAlternateLanguages } from "@/lib/seo";

export async function generateMetadata({ params }) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    return {};
  }

  const dictionary = getDictionary(locale);
  return {
    title: dictionary.meta.contact.title,
    description: dictionary.meta.contact.description,
    alternates: {
      canonical: `/${locale}/contact`,
      languages: buildAlternateLanguages("contact")
    }
  };
}

export default async function ContactPage({ params }) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const dictionary = getDictionary(locale);
  return (
    <>
      <PageJsonLd
        siteUrl={getSiteUrl()}
        locale={locale}
        title={dictionary.meta.contact.title}
        description={dictionary.meta.contact.description}
        path="contact"
      />
      <LocalizedShell dictionary={dictionary} page="contact" />
    </>
  );
}
