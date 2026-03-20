"use client";

import HomePageView from "@/components/pages/HomePageView";
import SolutionsPageView from "@/components/pages/SolutionsPageView";
import ContactPageView from "@/components/pages/ContactPageView";
import SiteFooter from "@/components/site/SiteFooter";
import SiteHeader from "@/components/site/SiteHeader";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";

const pageMap = {
  home: HomePageView,
  solutions: SolutionsPageView,
  contact: ContactPageView
};

export default function LocalizedShell({ dictionary, page }) {
  const PageComponent = pageMap[page];

  useRevealOnScroll();

  return (
    <div className="page-shell">
      <SiteHeader dictionary={dictionary} />
      <main id="top">
        <PageComponent dictionary={dictionary} />
      </main>
      <SiteFooter dictionary={dictionary} />
    </div>
  );
}
