import Link from "next/link";
import { Hero } from "@/components/hero";
import { FeatureGrid } from "@/components/feature-grid";
import { ModuleMatrix } from "@/components/module-matrix";
import { ScreenshotCard } from "@/components/screenshot-card";
import { SectionHeading } from "@/components/section-heading";
import { StatsStrip } from "@/components/stats-strip";
import { scenarioCards, valueCards } from "@/data/modules";

export default function Home() {
  return (
    <div>
      <Hero />
      <StatsStrip />
      <section className="py-16">
        <div className="mx-auto w-full max-w-6xl px-6">
          <SectionHeading
            eyebrow="价值主张"
            title="为医疗机构建立标准化与可信任的数字底座"
            description="从临床到运营，再到平台化能力，Yila 提供完整的产品矩阵与交付保障。"
          />
          <div className="mt-10">
            <FeatureGrid items={valueCards} />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto w-full max-w-6xl px-6">
          <SectionHeading
            eyebrow="产品视图"
            title="功能矩阵 + 场景叙事 + 截图式组件"
            description="面向采购决策者的结构化展示：模块覆盖、场景价值与交互式预览。"
            action={
              <Link
                href="/modules"
                className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700"
              >
                查看全部模块
              </Link>
            }
          />
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <ScreenshotCard
              title="诊所管理总览"
              description="门诊接诊、排班、收费与库存一体化仪表盘。"
            />
            <ScreenshotCard
              title="EMR 结构化录入"
              description="中医四诊 + 复诊追踪 + 处方管理一屏完成。"
            />
            <ScreenshotCard
              title="AI-CDSS 输出"
              description="推荐方案总览、辨证推理、风险提示，医生快速扫读。"
            />
          </div>
        </div>
      </section>

      <ModuleMatrix />

      <section className="py-16">
        <div className="mx-auto w-full max-w-6xl px-6">
          <SectionHeading
            eyebrow="解决方案"
            title="覆盖不同诊疗场景的标准化方案包"
            description="从单体诊所到连锁机构，Yila 形成可复制的最佳实践。"
          />
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {scenarioCards.map((scenario) => (
              <div
                key={scenario.title}
                className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  {scenario.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  {scenario.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/demo"
              className="rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white"
            >
              体验 AI Demo
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700"
            >
              获取方案书
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
