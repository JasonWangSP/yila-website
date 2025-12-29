import { ArchitectureDiagram } from "@/components/architecture-diagram";
import { SectionHeading } from "@/components/section-heading";

export const metadata = {
  title: "集成与平台化｜Yila 医疗云",
  description: "展示 Yila 平台架构、API/Webhook 与集成能力。",
};

export default function IntegrationsPage() {
  return (
    <div className="py-16">
      <div className="mx-auto w-full max-w-6xl px-6">
        <SectionHeading
          eyebrow="平台化"
          title="开放集成与系统协同"
          description="支持 HIS/LIS/影像对接、数据导入导出与 API 扩展，形成医疗机构数字中台。"
        />
        <div className="mt-10">
          <ArchitectureDiagram />
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">API / Webhook</h3>
            <p className="mt-2 text-sm text-slate-600">
              提供标准 REST API 与事件订阅，便于对接企业系统。
            </p>
            <div className="mt-4 space-y-2 rounded-2xl bg-slate-50 p-4 text-xs text-slate-600">
              <p>POST /api/v1/patients</p>
              <p>GET /api/v1/visits/{'{id}'}</p>
              <p>POST /api/v1/webhooks/visit.updated</p>
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">数据导入导出</h3>
            <p className="mt-2 text-sm text-slate-600">
              提供标准模板、迁移流程与清洗规则，降低系统切换成本。
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>• 患者档案与历史病历导入</li>
              <li>• 处方、项目与库存初始化</li>
              <li>• 经营指标与财务数据导出</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
