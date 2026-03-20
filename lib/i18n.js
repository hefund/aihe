export const locales = ["zh", "en"];
export const defaultLocale = "zh";

const dictionaries = {
  zh: {
    locale: "zh",
    lang: "zh-CN",
    labels: { zh: "中文", en: "English" },
    brand: "nof1.ai",
    footer: {
      tagline: "Designing sharper decisions for ambitious teams.",
      legal: "Built for Vercel deployment, multilingual delivery, and measurable conversion."
    },
    nav: [
      { href: "/zh", label: "首页" },
      { href: "/zh/solutions", label: "解决方案" },
      { href: "/zh/contact", label: "联系" }
    ],
    meta: {
      home: {
        title: "nof1.ai | 为高表现团队打造的 AI 决策系统",
        description: "nof1.ai 帮助团队把分散的数据、流程和判断，整合成可执行的 AI 决策系统。"
      },
      solutions: {
        title: "解决方案 | nof1.ai",
        description: "查看 nof1.ai 如何把增长、运营和销售场景里的关键判断沉淀成稳定工作流。"
      },
      contact: {
        title: "联系 | nof1.ai",
        description: "预约 nof1.ai 演示，提交团队场景，启动你的第一个 AI 决策工作流。"
      }
    },
    analytics: {
      nav: "Navigation click",
      locale: "Locale switch",
      cta: "CTA click",
      formStart: "Lead form started",
      formSubmit: "Lead submitted"
    },
    home: {
      eyebrow: "AI Operating Layer For Decision Makers",
      title: "让每一次关键判断，不再依赖运气。",
      description: "nof1.ai 把业务规则、实时数据和专家经验压缩成一套可复制的 AI 决策系统。",
      primaryCta: { href: "/zh/contact", label: "预约演示" },
      secondaryCta: { href: "/zh/solutions", label: "查看方案" },
      metrics: [
        { value: "10x", label: "更快生成决策建议" },
        { value: "92%", label: "团队采纳率" },
        { value: "7 天", label: "可落地首个工作流" }
      ],
      signals: [
        { name: "Signals", value: "128", detail: "市场、行为、营收、成本实时汇总" },
        { name: "Playbooks", value: "24", detail: "将专家经验沉淀成可执行策略" },
        { name: "Confidence", value: "97%", detail: "给出判断依据，而不是黑盒答案" }
      ],
      note: "优先收缩低 ROI 渠道预算，把资源切换到复购人群。",
      audience: "适用于增长、运营、投研、SaaS 与高密度决策团队",
      cards: [
        { index: "01", title: "统一上下文", description: "整合 CRM、BI、知识库和 SOP，形成稳定输入层。" },
        { index: "02", title: "生成建议", description: "基于目标、约束和历史表现输出建议方案。" },
        { index: "03", title: "驱动执行", description: "将建议转化为提醒、审批、派单和复盘。" }
      ],
      results: [
        { value: "48%", label: "减少跨团队对齐成本" },
        { value: "31%", label: "提升实验与策略迭代速度" },
        { value: "0→1", label: "将隐性经验系统化沉淀" }
      ],
      contactTitle: "先解决一个高价值决策场景，再扩展到整套业务系统。"
    },
    solutions: {
      eyebrow: "Solutions",
      title: "把关键决策场景拆出来，逐个变成可执行系统。",
      description: "从一个高价值流程开始接入，比如预算调整、销售判断或运营预警。",
      items: [
        { title: "增长团队", description: "把投放复盘、预算调整和实验优先级接入同一套决策面板。" },
        { title: "运营团队", description: "跟踪异常指标、生成排查动作，并把 SOP 自动派发。" },
        { title: "销售团队", description: "统一线索评分、商机推进判断和跟进节奏。" }
      ],
      steps: [
        { title: "Observe", description: "接入业务数据、团队规则与目标约束。" },
        { title: "Decide", description: "生成建议，并解释每个判断背后的依据。" },
        { title: "Execute", description: "把建议推送到审批、协作和复盘流程中。" }
      ],
      cta: { href: "/zh/contact", label: "带着你的场景来聊" }
    },
    contact: {
      eyebrow: "Contact",
      title: "带一个真实业务场景来，我们把它做成第一个工作流。",
      description: "提交团队背景、当前流程和卡点，我们会判断是否适合用 nof1.ai 落地。",
      bullets: [
        "投放预算与实验优先级判断",
        "销售线索评分与推进建议",
        "运营异常监控与自动派单"
      ]
    },
    form: {
      team: "团队名称",
      email: "联系方式",
      message: "你的核心场景",
      placeholders: {
        team: "例如：nof1 growth",
        email: "you@company.com",
        message: "例如：我们想把投放复盘和预算调整自动化。"
      },
      submit: "提交需求",
      submitting: "提交中...",
      helper: "表单会提交到 `/api/contact`，并可触发 Resend 与 Vercel Analytics 转化记录。"
    }
  },
  en: {
    locale: "en",
    lang: "en-US",
    labels: { zh: "中文", en: "English" },
    brand: "nof1.ai",
    footer: {
      tagline: "Designing sharper decisions for ambitious teams.",
      legal: "Built for Vercel deployment, multilingual delivery, and measurable conversion."
    },
    nav: [
      { href: "/en", label: "Home" },
      { href: "/en/solutions", label: "Solutions" },
      { href: "/en/contact", label: "Contact" }
    ],
    meta: {
      home: {
        title: "nof1.ai | AI decision systems for high-performing teams",
        description: "nof1.ai turns fragmented data, workflows, and expert judgment into a repeatable AI decision layer."
      },
      solutions: {
        title: "Solutions | nof1.ai",
        description: "See how nof1.ai turns growth, ops, and sales decisions into executable AI workflows."
      },
      contact: {
        title: "Contact | nof1.ai",
        description: "Book a nof1.ai demo and start with one high-value decision workflow."
      }
    },
    analytics: {
      nav: "Navigation click",
      locale: "Locale switch",
      cta: "CTA click",
      formStart: "Lead form started",
      formSubmit: "Lead submitted"
    },
    home: {
      eyebrow: "AI Operating Layer For Decision Makers",
      title: "Make critical decisions feel engineered, not improvised.",
      description: "nof1.ai compresses your business logic, real-time signals, and expert playbooks into a repeatable AI decision system.",
      primaryCta: { href: "/en/contact", label: "Book a demo" },
      secondaryCta: { href: "/en/solutions", label: "View solutions" },
      metrics: [
        { value: "10x", label: "faster strategic recommendations" },
        { value: "92%", label: "team adoption rate" },
        { value: "7 days", label: "to launch the first workflow" }
      ],
      signals: [
        { name: "Signals", value: "128", detail: "Market, behavior, revenue, and cost signals in one place" },
        { name: "Playbooks", value: "24", detail: "Expert judgment turned into executable strategies" },
        { name: "Confidence", value: "97%", detail: "Explanations and evidence instead of black-box answers" }
      ],
      note: "Shift budget away from low-ROI channels and back into repeat buyers.",
      audience: "Built for growth, operations, SaaS, and other decision-dense teams",
      cards: [
        { index: "01", title: "Unify context", description: "Connect CRM, BI, docs, and SOPs into a stable input layer." },
        { index: "02", title: "Generate recommendations", description: "Produce next-step guidance with evidence." },
        { index: "03", title: "Drive execution", description: "Turn recommendations into approvals, tasks, and review loops." }
      ],
      results: [
        { value: "48%", label: "less cross-team alignment overhead" },
        { value: "31%", label: "faster experimentation and iteration" },
        { value: "0→1", label: "turn tacit expertise into systems" }
      ],
      contactTitle: "Solve one high-value decision flow first, then expand."
    },
    solutions: {
      eyebrow: "Solutions",
      title: "Turn decision-heavy workflows into systems, one by one.",
      description: "Start with one valuable process such as budget allocation, deal qualification, or ops alerts.",
      items: [
        { title: "Growth teams", description: "Unify budget moves, experiment reviews, and prioritization." },
        { title: "Operations teams", description: "Track anomalies and route playbooks automatically." },
        { title: "Sales teams", description: "Standardize lead scoring and pipeline judgment." }
      ],
      steps: [
        { title: "Observe", description: "Connect data, rules, and constraints into a stable input layer." },
        { title: "Decide", description: "Generate recommendations with evidence." },
        { title: "Execute", description: "Push decisions into approvals and follow-up workflows." }
      ],
      cta: { href: "/en/contact", label: "Bring us your workflow" }
    },
    contact: {
      eyebrow: "Contact",
      title: "Bring one real workflow and we will shape it into your first system.",
      description: "Share your team context, current process, and bottleneck.",
      bullets: [
        "Paid media budget decisions",
        "Lead scoring and pipeline guidance",
        "Operational anomaly monitoring"
      ]
    },
    form: {
      team: "Team name",
      email: "Contact email",
      message: "Your core workflow",
      placeholders: {
        team: "For example: nof1 growth",
        email: "you@company.com",
        message: "For example: we want to automate paid media reviews and budget decisions."
      },
      submit: "Submit",
      submitting: "Sending...",
      helper: "The form posts to `/api/contact` and can trigger Resend plus Vercel Analytics conversion events."
    }
  }
};

export function isValidLocale(locale) {
  return locales.includes(locale);
}

export function getDictionary(locale) {
  return dictionaries[isValidLocale(locale) ? locale : defaultLocale];
}

export function getLocalizedPath(locale, path = "") {
  return `/${locale}${path === "/" ? "" : path}`;
}
