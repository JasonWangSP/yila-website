import { SectionHeading } from "@/components/section-heading";

export const metadata = {
  title: "关于我们｜Yila 医疗云",
  description: "Yila 使命、价值观与发展里程碑。",
};

const milestones = [
  { year: "2021", event: "团队成立，聚焦中医诊所数字化。" },
  { year: "2022", event: "发布第一版 EMR + 诊所管理系统。" },
  { year: "2023", event: "上线 AI-CDSS 与多学派模型引擎。" },
  { year: "2024", event: "推出集团化管理与国际化合规方案。" },
];

export default function AboutPage() {
  return (
    <div className="py-16">
      <div className="mx-auto w-full max-w-6xl px-6">
        <SectionHeading
          eyebrow="关于我们"
          title="让每一家诊所拥有可控的临床与运营能力"
          description="Yila 致力于通过产品化与 AI 辅助，提升医疗机构的诊疗质量与经营效率。"
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">使命</h3>
            <p className="mt-3 text-sm text-slate-600">
              让医疗机构拥有标准化流程与可信决策支持，让医生专注诊疗。
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">愿景</h3>
            <p className="mt-3 text-sm text-slate-600">
              成为亚太领先的 Clinic OS + AI-CDSS 平台，连接医疗生态。
            </p>
          </div>
        </div>
        <div className="mt-10 rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900">团队价值观</h3>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {["尊重临床判断", "长期主义交付", "安全合规优先"].map((value) => (
              <div
                key={value}
                className="rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm text-slate-600"
              >
                {value}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900">发展里程碑</h3>
          <div className="mt-4 space-y-4">
            {milestones.map((item) => (
              <div
                key={item.year}
                className="flex items-center justify-between rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm text-slate-600"
              >
                <span className="font-semibold text-slate-900">{item.year}</span>
                <span>{item.event}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
