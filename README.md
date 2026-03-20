# nof1.ai

`Next.js` App Router 官网项目，包含多语言多页面路由、Resend 邮件表单 API、Vercel Analytics 埋点、`public/` 资源和 Vercel 部署配置。

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fhefund%2Faihe.git)

## 本地开发

```bash
npm install
npm run dev
```

访问 `http://localhost:3000`。

## 环境变量

复制 `.env.example` 为 `.env.local` 并填写：

```bash
NEXT_PUBLIC_SITE_URL=https://nof1.ai
RESEND_API_KEY=re_xxxxxxxxx
RESEND_FROM_EMAIL="nof1.ai <hello@nof1.ai>"
CONTACT_INBOX_EMAIL=founder@nof1.ai
CONTACT_WEBHOOK_URL=https://your-webhook-endpoint
CONTACT_WEBHOOK_TOKEN=optional-secret
```

说明：

- `NEXT_PUBLIC_SITE_URL` 用于 metadata 和社交分享链接。
- `RESEND_API_KEY` 是 Resend API Key。
- `RESEND_FROM_EMAIL` 必须使用你在 Resend 里验证过的发件域名地址。
- `CONTACT_INBOX_EMAIL` 是接收官网线索的收件邮箱，支持逗号分隔多个地址。
- `CONTACT_WEBHOOK_URL` 是可选兜底方案；当没有配置 Resend 时，`/api/contact` 会转发到这里。
- `CONTACT_WEBHOOK_TOKEN` 是可选的 Bearer Token。

## 表单 API

前端表单会提交到 `POST /api/contact`，服务端会：

1. 校验 `team`、`email`、`message`
2. 如配置了 Resend，则发送一封新线索通知邮件到 `CONTACT_INBOX_EMAIL`
3. 如未配置 Resend，则可选地转发到 `CONTACT_WEBHOOK_URL`
4. 返回提交结果给前端

表单请求还会携带：

- `locale`
- `source`

服务端会把这两个字段一起写入邮件内容，并记录为转化事件。

## 多语言与路由

当前路由：

- `/zh`
- `/zh/solutions`
- `/zh/contact`
- `/en`
- `/en/solutions`
- `/en/contact`

根路径 `/` 会自动重定向到默认语言 `/zh`。

SEO 相关：

- 每个页面都生成 `canonical`
- 每个页面都输出 `hreflang` 语言替代链接
- 全站输出 `Organization`、`WebSite`、`WebPage` 三类 JSON-LD
- `robots.txt` 与 `sitemap.xml` 已按多语言路由生成

## 分析埋点

项目已接入：

- `@vercel/analytics`
- `@vercel/speed-insights`

当前会追踪：

1. 页面访问
2. 导航点击
3. CTA 点击
4. 表单开始填写
5. 表单提交成功/失败

其中服务端在 `/api/contact` 内还会额外记录一次 `Lead submitted` 转化事件。

请求体示例：

```json
{
  "team": "nof1 growth",
  "email": "you@company.com",
  "message": "我们想把投放复盘和预算调整自动化。"
}
```

## 部署

推荐直接部署到 Vercel：

```bash
vercel
```

或将仓库连接到 Vercel 控制台并配置上述环境变量。

GitHub 一键导入：

1. 打开上面的 `Deploy with Vercel` 按钮
2. 登录你的 Vercel 账户
3. 选择 GitHub 仓库 `hefund/aihe`
4. 配置环境变量
5. 点击 `Deploy`

构建前可手动执行：

```bash
npm run validate:env
```

`npm run build` 也会自动先跑这一步。

## 生产环境变量校验

服务端会在处理 `/api/contact` 前校验环境变量：

- `NEXT_PUBLIC_SITE_URL` 必须存在且是绝对 URL
- 如果配置了 `RESEND_API_KEY`，则必须同时配置 `RESEND_FROM_EMAIL` 与 `CONTACT_INBOX_EMAIL`
- 如果配置了 `CONTACT_WEBHOOK_URL`，它必须是绝对 URL
- `Resend` 和 `Webhook` 至少要有一种可用

对应实现见 [env.js](d:/aihe/lib/env.js)。

另外仓库还提供了一个构建前校验脚本：[validate-env.mjs](d:/aihe/scripts/validate-env.mjs)。

## 部署前检查清单

1. `NEXT_PUBLIC_SITE_URL` 已配置为生产域名，例如 `https://nof1.ai`
2. `RESEND_API_KEY` 已配置，且发信域名已在 Resend 完成验证
3. `RESEND_FROM_EMAIL` 使用的是已验证域名
4. `CONTACT_INBOX_EMAIL` 为真实接收线索的邮箱，必要时配置多个
5. 如果不用 Resend，已配置可用的 `CONTACT_WEBHOOK_URL`
6. Vercel 项目里已启用 Analytics 和 Speed Insights
7. 检查 `/zh`、`/zh/solutions`、`/zh/contact`、`/en`、`/en/solutions`、`/en/contact` 都可访问
8. 检查页面源码中存在 `canonical`、`hreflang` 和 JSON-LD
9. 测试表单提交成功、失败、以及无配置时报错的分支
10. 部署后检查 `robots.txt` 与 `sitemap.xml` 是否返回正确内容

## Resend 接入说明

根据 Resend 官方文档，你需要先完成两件事：

1. 创建 `RESEND_API_KEY`
2. 验证发信域名，并让 `RESEND_FROM_EMAIL` 使用该域名下的地址

官方参考：

- https://resend.com/docs/send-with-nextjs
- https://resend.com/docs/send-with-vercel-functions
- https://resend.com/docs/knowledge-base/how-to-handle-api-keys

## Vercel Analytics 说明

官方参考：

- https://vercel.com/docs/frameworks/create-react-app
- https://vercel.com/docs/analytics/custom-events
- https://vercel.com/docs/speed-insights
