import "./globals.css";
import AnalyticsProvider from "@/components/site/AnalyticsProvider";
import JsonLd from "@/components/site/JsonLd";
import LanguageHydrator from "@/components/site/LanguageHydrator";
import { getSiteUrl } from "@/lib/env";
import { buildOrganizationJsonLd, buildWebSiteJsonLd } from "@/lib/seo";

const siteUrl = getSiteUrl();

export const viewport = {
  themeColor: "#ff6b3d",
  colorScheme: "light"
};

export const metadata = {
  title: "nof1.ai | 为高表现团队打造的 AI 决策系统",
  description:
    "nof1.ai 帮助团队把分散的数据、流程和判断，整合成可执行的 AI 决策系统。",
  metadataBase: new URL(siteUrl),
  applicationName: "nof1.ai",
  keywords: ["nof1.ai", "AI 决策系统", "AI automation", "growth ops", "decision intelligence"],
  alternates: {
    canonical: "/zh"
  },
  openGraph: {
    title: "nof1.ai | 为高表现团队打造的 AI 决策系统",
    description:
      "统一上下文、放大判断质量、把专家经验变成稳定可执行的 AI 工作流。",
    url: siteUrl,
    siteName: "nof1.ai",
    locale: "zh_CN",
    type: "website",
    images: [
      {
        url: "/og-card.svg",
        width: 1200,
        height: 630,
        alt: "nof1.ai"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "nof1.ai | 为高表现团队打造的 AI 决策系统",
    description:
      "统一上下文、放大判断质量、把专家经验变成稳定可执行的 AI 工作流。",
    images: ["/og-card.svg"]
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg"
  },
  manifest: "/site.webmanifest"
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body>
        <JsonLd data={buildOrganizationJsonLd(siteUrl)} />
        <JsonLd data={buildWebSiteJsonLd(siteUrl)} />
        <LanguageHydrator />
        {children}
        <AnalyticsProvider />
      </body>
    </html>
  );
}
