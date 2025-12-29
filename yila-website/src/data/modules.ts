export const moduleMatrix = [
  {
    id: "clinical",
    anchor: "clinic",
    title: "临床与诊疗",
    en: "Clinical",
    description:
      "覆盖门诊接诊、病历、处方、非药物治疗与随访，保证可追溯的临床流程。",
    items: [
      {
        title: "电子病历 EMR",
        description: "结构化病历、复诊追踪、处方与疗效反馈，支持多学派模板。",
      },
      {
        title: "中医四诊采集",
        description: "舌象/脉象/主诉/现病史等字段可配置，形成标准化采集表。",
      },
      {
        title: "处方管理",
        description: "方剂加减、颗粒/汤剂、用法用量与禁忌提示自动提醒。",
      },
      {
        title: "非药物治疗",
        description: "针灸/推拿/拔罐/艾灸/导引疗程管理，支持项目组合。",
      },
      {
        title: "随访与复诊",
        description: "随访计划、复诊建议、风险提示与转诊建议一体化输出。",
      },
    ],
  },
  {
    id: "ai",
    anchor: "ai",
    title: "AI-CDSS 诊疗辅助",
    en: "AI-CDSS",
    description:
      "以临床风险控制为优先，结合证型推理与治疗方案建议，支持多学派模型。",
    items: [
      {
        title: "白话 -> 医学语言 -> EMR",
        description: "支持语音转写入口，将口述信息转为结构化病历。",
      },
      {
        title: "辅助辨证",
        description: "给出 1-2 个证型与依据，并提示关键缺失信息。",
      },
      {
        title: "治疗方案总览",
        description: "最前置呈现，包含目标、方案与禁忌提醒。",
      },
      {
        title: "加减思路",
        description: "结合患者体质与症候，给出可解释的加减策略。",
      },
      {
        title: "鉴别诊断与风险提醒",
        description: "高风险症状提示转诊建议，记录决策依据。",
      },
    ],
  },
  {
    id: "operations",
    anchor: "growth",
    title: "运营与管理",
    en: "Operations",
    description:
      "从获客到复诊，从财务到库存，形成全链路运营闭环。",
    items: [
      {
        title: "患者 CRM / 会员体系",
        description: "会员等级、储值积分与复诊提醒，形成长期患者资产。",
      },
      {
        title: "营销管理",
        description: "活动/优惠券/SMS/WhatsApp/Email 触达占位能力。",
      },
      {
        title: "预约排班",
        description: "医生/房间/项目排班，支持高峰期容量预测。",
      },
      {
        title: "财务与对账",
        description: "收银、发票、收入结构与渠道对账清晰可追溯。",
      },
      {
        title: "库存与供应链",
        description: "中药饮片/颗粒/耗材预警，库存周转可视化。",
      },
      {
        title: "统计分析",
        description: "经营看板覆盖客单价、复诊率、转化率与医生效率。",
      },
    ],
  },
  {
    id: "platform",
    anchor: "analytics",
    title: "集成与平台化",
    en: "Platform",
    description:
      "开放 API、统一权限与审计，面向集团化与多门店管理。",
    items: [
      {
        title: "HIS/LIS/影像检验对接",
        description: "通过标准协议与接口对接外部医疗系统。",
      },
      {
        title: "API / Webhook",
        description: "提供示例端点与事件订阅，快速对接企业生态。",
      },
      {
        title: "权限与审计",
        description: "RBAC 与操作日志，满足医疗机构审计要求。",
      },
      {
        title: "多门店/多角色",
        description: "集团、门店、医生、前台、药房角色权限可控。",
      },
      {
        title: "数据导入导出",
        description: "标准模板与数据清洗，减少迁移成本。",
      },
    ],
  },
  {
    id: "trust",
    anchor: "inventory",
    title: "安全与合规",
    en: "Trust",
    description:
      "以医疗数据最佳实践为基准，覆盖加密、备份与灾备。",
    items: [
      {
        title: "数据加密",
        description: "传输与存储双重加密，保障敏感医疗数据安全。",
      },
      {
        title: "访问控制",
        description: "细粒度权限、白名单与分级授权。",
      },
      {
        title: "审计日志",
        description: "关键操作留痕，支持审计与风险追踪。",
      },
      {
        title: "备份与容灾",
        description: "多地冗余、快速恢复与演练机制。",
      },
      {
        title: "隐私与合规",
        description: "参考新加坡与国际医疗数据最佳实践说明。",
      },
    ],
  },
];

export const valueCards = [
  {
    title: "临床效率",
    description: "结构化病历与处方规范，减少重复录入与随访遗漏。",
  },
  {
    title: "运营增长",
    description: "以会员体系与复诊触达为核心，提升患者生命周期价值。",
  },
  {
    title: "合规可信",
    description: "权限、审计与数据安全全覆盖，满足医疗采购评估。",
  },
];

export const scenarioCards = [
  {
    title: "中医诊所",
    description: "四诊采集 + 方剂管理 + 复诊追踪，形成标准化接诊流程。",
  },
  {
    title: "综合门诊",
    description: "统一接诊入口，联动多科室排班与一体化收费。",
  },
  {
    title: "连锁机构",
    description: "总部统一模板与风控，多门店经营指标实时对比。",
  },
  {
    title: "医养结合",
    description: "慢病管理与长期随访结合，适配康复及养老场景。",
  },
];
