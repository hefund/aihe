"use client";

import Link from "next/link";
import { trackEvent } from "@/lib/analytics";

export default function TrackedLink({ href, children, className, eventName, eventData }) {
  return (
    <Link href={href} className={className} onClick={() => eventName && trackEvent(eventName, eventData)}>
      {children}
    </Link>
  );
}
