function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export function buildContactNotificationEmail({ locale, source, team, email, message }) {
  const safeTeam = escapeHtml(team);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");
  const safeLocale = escapeHtml(locale || "unknown");
  const safeSource = escapeHtml(source || "unknown");

  return {
    subject: `新线索：${team} 提交了 nof1.ai 需求`,
    text: [
      "nof1.ai 收到一条新的官网咨询。",
      "",
      `语言: ${locale || "unknown"}`,
      `来源: ${source || "unknown"}`,
      `团队名称: ${team}`,
      `联系方式: ${email}`,
      "需求描述:",
      message
    ].join("\n"),
    html: `
      <div style="font-family: Arial, sans-serif; background:#f3efe7; padding:32px;">
        <div style="max-width:640px; margin:0 auto; background:#fffaf2; border:1px solid #eadfd3; border-radius:24px; overflow:hidden;">
          <div style="padding:24px 28px; background:linear-gradient(135deg, #ff6b3d, #ff9d66); color:#ffffff;">
            <div style="font-size:14px; letter-spacing:0.08em; text-transform:uppercase; opacity:0.82;">nof1.ai</div>
            <h1 style="margin:10px 0 0; font-size:28px; line-height:1.15;">收到新的官网咨询</h1>
          </div>
          <div style="padding:28px;">
            <p style="margin:0 0 20px; color:#506253; line-height:1.7;">
              有潜在客户刚通过官网表单提交了需求，建议尽快跟进。
            </p>
            <table style="width:100%; border-collapse:collapse;">
              <tr>
                <td style="padding:12px 0; color:#506253; width:120px;">语言</td>
                <td style="padding:12px 0; color:#112018; font-weight:700;">${safeLocale}</td>
              </tr>
              <tr>
                <td style="padding:12px 0; color:#506253;">来源</td>
                <td style="padding:12px 0; color:#112018; font-weight:700;">${safeSource}</td>
              </tr>
              <tr>
                <td style="padding:12px 0; color:#506253; width:120px;">团队名称</td>
                <td style="padding:12px 0; color:#112018; font-weight:700;">${safeTeam}</td>
              </tr>
              <tr>
                <td style="padding:12px 0; color:#506253;">联系方式</td>
                <td style="padding:12px 0; color:#112018; font-weight:700;">${safeEmail}</td>
              </tr>
              <tr>
                <td style="padding:12px 0; color:#506253; vertical-align:top;">需求描述</td>
                <td style="padding:12px 0; color:#112018; line-height:1.7;">${safeMessage}</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    `
  };
}
