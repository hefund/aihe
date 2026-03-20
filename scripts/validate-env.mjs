const errors = [];

function requireString(name) {
  const value = process.env[name];
  return typeof value === "string" && value.trim().length > 0;
}

function ensureUrl(name) {
  if (!requireString(name)) {
    errors.push(`Missing ${name}`);
    return;
  }

  try {
    new URL(process.env[name]);
  } catch {
    errors.push(`${name} must be a valid absolute URL`);
  }
}

ensureUrl("NEXT_PUBLIC_SITE_URL");

const hasResend = requireString("RESEND_API_KEY");
const hasWebhook = requireString("CONTACT_WEBHOOK_URL");

if (hasResend) {
  if (!requireString("RESEND_FROM_EMAIL")) {
    errors.push("Missing RESEND_FROM_EMAIL while RESEND_API_KEY is set");
  }

  if (!requireString("CONTACT_INBOX_EMAIL")) {
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

if (!hasResend && !hasWebhook) {
  errors.push("Configure either Resend or CONTACT_WEBHOOK_URL for /api/contact");
}

if (errors.length > 0) {
  console.error("Environment validation failed:");
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log("Environment validation passed.");
