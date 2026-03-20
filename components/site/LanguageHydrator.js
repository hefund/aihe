"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function LanguageHydrator() {
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.lang = pathname.startsWith("/en") ? "en-US" : "zh-CN";
  }, [pathname]);

  return null;
}
