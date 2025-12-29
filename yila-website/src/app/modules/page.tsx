import Link from "next/link";
import { ModuleMatrix } from "@/components/module-matrix";
import { ScreenshotCard } from "@/components/screenshot-card";
import { SectionHeading } from "@/components/section-heading";

export const metadata = {
  title: "产品模块｜Yila 医疗云",
  description: "Yila 产品模块矩阵，覆盖临床、AI-CDSS、运营、平台化与合规能力。",
};

export default function ModulesPage() {
  return (
    <div>
      <section className="py-16">
        <div className="mx-auto w-full max-w-6xl px-6">
          <SectionHeading
            eyebrow="产品模块"
            title="从临床到运营的全栈能力"
            description="Yila 将诊所核心业务流程拆解为可落地模块，支持快速部署与持续升级。"
            action={
              <Link
                href="/demo"
                className="rounded-full bg-emerald-500 px-5 py-2 text-sm font-semibold text-white"
              >
                体验 AI Demo
              </Link>
            }
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <ScreenshotCard
              title="诊所管理系统"
              description="一体化门诊接诊、收费、排班与运营策略执行。"
            />
            <ScreenshotCard
              title="EMR 电子病历"
              description="结构化病历、四诊采集与处方管理协同。"
            />
            <ScreenshotCard
              title="AI-CDSS"
              description="多学派模型 + 风险提示 + 结构化输出。"
            />
          </div>
        </div>
      </section>
      <ModuleMatrix />
      <section className="py-16">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="rounded-3xl border border-slate-200 bg-white/80 p-8 text-center">
            <h3 className="text-2xl font-semibold text-slate-900">
              想深入了解模块组合？
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              我们可以根据机构类型提供模块组合建议与实施路线图。
            </p>
            <div className="mt-6 flex justify-center">
              <Link
                href="/contact"
                className="rounded-full bg-slate-900 px-6 py-2 text-sm font-semibold text-white"
              >
                获取方案书
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
