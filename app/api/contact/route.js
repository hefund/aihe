import { Resend } from "resend";
import { track } from "@vercel/analytics/server";
import { assertServerEnv } from "@/lib/env";
import { buildContactNotificationEmail } from "@/lib/email/contact-notification";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

function validatePayload(payload) {
  const locale = String(payload.locale || "").trim();
  const source = String(payload.source || "").trim();
  const team = String(payload.team || "").trim();
  const email = String(payload.email || "").trim();
  const message = String(payload.message || "").trim();

  if (!team || !email || !message) {
    return { error: "请完整填写团队名称、联系方式和需求描述。" };
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    return { error: "请输入有效的邮箱地址。" };
  }

  return { locale, source, team, email, message };
}

async function sendWithResend(contact) {
  if (!resend) {
    return false;
  }

  const from = process.env.RESEND_FROM_EMAIL;
  const to = process.env.CONTACT_INBOX_EMAIL;

  if (!from || !to) {
    throw new Error("Missing RESEND_FROM_EMAIL or CONTACT_INBOX_EMAIL");
  }

  const emailContent = buildContactNotificationEmail(contact);
  const recipients = to
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);

  const { error } = await resend.emails.send({
    from,
    to: recipients,
    replyTo: contact.email,
    subject: emailContent.subject,
    html: emailContent.html,
    text: emailContent.text
  });

  if (error) {
    throw new Error(error.message || "Resend delivery failed");
  }

  return true;
}

async function forwardToWebhook(contact) {
  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;

  if (!webhookUrl) {
    return false;
  }

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(process.env.CONTACT_WEBHOOK_TOKEN
        ? { Authorization: `Bearer ${process.env.CONTACT_WEBHOOK_TOKEN}` }
        : {})
    },
    body: JSON.stringify({
      source: "nof1.ai",
      submittedAt: new Date().toISOString(),
      contact
    }),
    cache: "no-store"
  });

  if (!response.ok) {
    throw new Error(`Webhook forwarding failed with status ${response.status}`);
  }

  return true;
}

export async function POST(request) {
  try {
    assertServerEnv();
    const payload = await request.json();
    const result = validatePayload(payload);

    if (result.error) {
      return Response.json({ error: result.error }, { status: 400 });
    }

    const sentWithResend = await sendWithResend(result);

    if (!sentWithResend) {
      const forwarded = await forwardToWebhook(result);

      if (!forwarded) {
        throw new Error("No delivery provider configured");
      }
    }

    await track("Lead submitted", {
      locale: result.locale || "unknown",
      source: result.source || "unknown"
    });

    return Response.json({
      ok: true,
      message: "需求已提交，我们会尽快联系你。"
    });
  } catch (error) {
    return Response.json(
      {
        error:
          process.env.NODE_ENV === "development"
            ? `服务端处理失败: ${error.message}`
            : "服务暂时不可用，请稍后再试。"
      },
      { status: 500 }
    );
  }
}
