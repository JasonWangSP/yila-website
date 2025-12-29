export type DemoFormData = {
  name: string;
  age: string;
  gender: string;
  chiefComplaint: string;
  presentIllness: string;
  pastHistory: string;
  tongue: string;
  pulse: string;
  signs: string;
  tests: string;
  followUp: string;
};

export type SchoolKey =
  | "classic"
  | "shanghan"
  | "wenbing"
  | "fangzheng"
  | "integrative"
  | "custom";

export type AiSection = {
  title: string;
  bullets: string[];
  highlight?: boolean;
};

const schoolTone: Record<SchoolKey, { label: string; phrase: string }> = {
  classic: {
    label: "经典学派",
    phrase: "遵循经典辨证思路，以脏腑与气血津液为主线。",
  },
  shanghan: {
    label: "伤寒学派",
    phrase: "偏重六经辨证与寒热表里层次分析。",
  },
  wenbing: {
    label: "温病学派",
    phrase: "强调卫气营血与三焦辨证，关注热象演变。",
  },
  fangzheng: {
    label: "方证学派",
    phrase: "以方证对应为核心，突出证候与方剂匹配。",
  },
  integrative: {
    label: "综合学派",
    phrase: "结合多学派视角，给出可解释的综合方案。",
  },
  custom: {
    label: "自定义",
    phrase: "根据机构自定义路径输出，适配个性化临床标准。",
  },
};

const pickMissing = (data: DemoFormData) => {
  const missing: string[] = [];
  if (!data.tongue.trim()) missing.push("舌象");
  if (!data.pulse.trim()) missing.push("脉象");
  if (!data.chiefComplaint.trim()) missing.push("主诉");
  if (!data.presentIllness.trim()) missing.push("现病史");
  if (!data.tests.trim()) missing.push("辅助检查");
  return missing;
};

const buildSummary = (data: DemoFormData) => {
  const base = [
    data.chiefComplaint || "主诉信息不足",
    data.presentIllness || "现病史尚未补充",
  ]
    .filter(Boolean)
    .join("；");
  return base.length > 0 ? base : "病情描述尚不完整。";
};

export const buildAiOutput = (
  data: DemoFormData,
  school: SchoolKey
): AiSection[] => {
  const missing = pickMissing(data);
  const tone = schoolTone[school];
  const patient = data.name ? `${data.name}` : "患者";
  const summary = buildSummary(data);
  const missingNote =
    missing.length > 0
      ? `关键信息缺失：建议补充 ${missing.join("、")}。`
      : "信息完整度良好，可进入方案制定。";

  return [
    {
      title: "推荐方案总览",
      highlight: true,
      bullets: [
        `${patient}以“${data.chiefComplaint || "主诉待补"}”为核心诉求，优先控制症状与情绪紧张。`,
        "中医治疗以疏肝解郁、清泄郁热为主，配合放松与睡眠管理。",
        "建议 2-3 次疗程评估疗效，必要时联合影像/检验复查。",
      ],
    },
    {
      title: "病情概要",
      bullets: [
        `病情摘要：${summary}`,
        `舌脉要点：${data.tongue || "未记录舌象"}；${data.pulse || "未记录脉象"}。`,
        `转写结构化要点：${data.signs || "体征待补充"}；${data.tests || "检查待补充"}。`,
        missingNote,
      ],
    },
    {
      title: "初步诊断与证型",
      bullets: [
        "证型建议：肝郁化火（主证），兼夹气滞血瘀可能。",
        "参考依据：胀痛、口苦、睡眠不安、脉弦数等提示郁热内扰。",
      ],
    },
    {
      title: "中医治疗方案",
      bullets: [
        `学派路径：${tone.label}。${tone.phrase}`,
        "治法：疏肝清热、调和气血，兼顾安神。",
        "处方思路：以疏肝解郁为主方，酌加清热、活血药味。",
        "非药物建议：针灸取穴太冲、合谷、百会，配合放松训练。",
      ],
    },
    {
      title: "加减思路（结合本例）",
      bullets: [
        "若口苦口干明显：加黄芩、栀子以清泄郁热。",
        "若颈肩紧张明显：加葛根、川芎以舒筋活络。",
        "若睡眠不安：加酸枣仁、夜交藤以养心安神。",
      ],
    },
    {
      title: "辨证推理过程",
      bullets: [
        `依据${tone.label}路径，先辨病位与寒热，再确认气机与情志因素。`,
        "主症胀痛、口苦提示肝胆郁热；脉弦数提示气机郁滞与热象。",
        "排除外感与器质性病变后，定位于肝郁化火夹血瘀。",
      ],
    },
    {
      title: "随访与观察要点",
      bullets: [
        "关注头痛频率、强度、诱因与睡眠质量变化。",
        "记录情绪波动与压力事件，必要时启动心理支持。",
        "建议 7-10 天复诊，调整药物与非药物方案。",
      ],
    },
    {
      title: "风险提示与转诊建议",
      bullets: [
        "若出现剧烈头痛、视力下降或神经系统症状，需立即转诊。",
        "如疗程 2 次后无改善，建议完善影像学检查。",
        "高风险或疑似器质性病变时转至神经科进一步评估。",
      ],
    },
  ];
};
