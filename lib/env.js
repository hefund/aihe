function requireString(value) {
  return typeof value === "string" && value.trim().length > 0;
}

export function getSiteUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL || "https://nof1.ai";
}

export function validatePublicEnv() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

  if (!requireString(siteUrl)) {
    return ["Missing NEXT_PUBLIC_SITE_URL"];
  }

  try {
    new URL(siteUrl);
    return [];
  } catch {
    return ["NEXT_PUBLIC_SITE_URL must be a valid absolute URL"];
  }
}

export function validateContactEnv() {
  const errors = [];
  const hasResendKey = requireString(process.env.RESEND_API_KEY);
  const hasWebhook = requireString(process.env.CONTACT_WEBHOOK_URL);

  if (hasResendKey) {
    if (!requireString(process.env.RESEND_FROM_EMAIL)) {
      errors.push("Missing RESEND_FROM_EMAIL while RESEND_API_KEY is set");
    }

    if (!requireString(process.env.CONTACT_INBOX_EMAIL)) {
      errors.push("Missing CONTACT_INBOX_EMAIL while RESEND_API_KEY is set");
    }
  }

  if (hasWebhook) {
    try {
      new URL(process.env.CONTACT_WEBHOOK_URL);
    } catch {
      errors.push("CONTACT_WEBHOOK_URL must be a valid absolute URL");
    }
  }

  if (!hasResendKey && !hasWebhook) {
    errors.push("Configure either Resend or CONTACT_WEBHOOK_URL for /api/contact");
  }

  return errors;
}

export function assertServerEnv() {
  const errors = [...validatePublicEnv(), ...validateContactEnv()];

  if (errors.length > 0) {
    throw new Error(errors.join("; "));
  }
}
