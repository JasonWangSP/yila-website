import { moduleMatrix } from "@/data/modules";
import { SectionHeading } from "./section-heading";

export function ModuleMatrix() {
  return (
    <section className="py-16" id="module-matrix">
      <div className="mx-auto w-full max-w-6xl px-6">
        <SectionHeading
          eyebrow="模块矩阵"
          title="Yila 完整能力图谱"
          description="以临床流程为核心，向运营、平台与合规延展，形成医疗机构的全栈能力。"
        />
        <div className="mt-10 space-y-8">
          {moduleMatrix.map((group) => (
            <div
              key={group.id}
              id={group.anchor}
              className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm"
            >
              <div className="flex flex-wrap items-baseline gap-3">
                <h3 className="text-2xl font-semibold text-slate-900">
                  {group.title}
                </h3>
                <span className="text-sm font-semibold text-emerald-500">
                  {group.en}
                </span>
              </div>
              <p className="mt-2 text-sm text-slate-600">
                {group.description}
              </p>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {group.items.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-slate-100 bg-slate-50 p-4"
                  >
                    <p className="text-sm font-semibold text-slate-900">
                      {item.title}
                    </p>
                    <p className="mt-2 text-sm text-slate-600">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
