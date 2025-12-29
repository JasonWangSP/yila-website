import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_#d1fae5,_transparent_55%),radial-gradient(circle_at_20%_50%,_#e0f2fe,_transparent_45%),radial-gradient(circle_at_80%_20%,_#fef9c3,_transparent_50%)]" />
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 pb-20 pt-16 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
            <Sparkles size={14} />
            医疗机构 AI 时代基础设施
          </div>
          <h1 className="text-4xl font-semibold leading-tight text-slate-900 md:text-5xl">
            Yila 让诊所拥有
            <span className="text-emerald-500">可控流程</span>
            、
            <span className="text-sky-500">数据中台</span>
            与
            <span className="text-amber-500">可信 AI</span>
          </h1>
          <p className="text-base text-slate-600 md:text-lg">
            面向中医与综合门诊的 Clinic OS + AI-CDSS 平台，覆盖接诊、EMR、运营、财务、库存、增长与安全合规。
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/demo"
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800"
            >
              预约演示
              <ArrowUpRight size={16} />
            </Link>
            <Link
              href="/modules"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 hover:border-slate-300"
            >
              查看产品矩阵
            </Link>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-slate-600">
            <span className="rounded-full border border-slate-200 bg-white/70 px-3 py-1">
              EMR / HIS / CDSS / RAG
            </span>
            <span className="rounded-full border border-slate-200 bg-white/70 px-3 py-1">
              支持连锁门诊与集团管理
            </span>
          </div>
        </div>
        <div className="grid gap-4">
          <div className="rounded-3xl border border-white/60 bg-white/80 p-6 shadow-xl">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-slate-900">AI-CDSS 输出预览</p>
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs text-emerald-600">
                实时生成
              </span>
            </div>
            <div className="mt-4 space-y-3">
              {[
                "推荐方案总览：以疏肝清热为主",
                "辨证建议：肝郁化火 + 气滞血瘀",
                "风险提示：出现剧烈头痛需转诊",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm text-slate-600"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white/70 p-5">
              <p className="text-xs font-semibold text-emerald-500">临床效率</p>
              <p className="mt-2 text-sm text-slate-600">
                结构化病历与标准处方，平均提升 35% 录入速度。
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white/70 p-5">
              <p className="text-xs font-semibold text-sky-500">运营增长</p>
              <p className="mt-2 text-sm text-slate-600">
                会员与复诊触达，让复诊率提升 22%。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
