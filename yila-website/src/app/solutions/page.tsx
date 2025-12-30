import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { solutions } from "@/data/solutions";

export const metadata = {
  title: "解决方案｜Yila 医疗云",
  description: "中医诊所、综合门诊、连锁机构与医养结合解决方案。",
};

export default function SolutionsPage() {
  return (
    <div className="py-16">
      <div className="mx-auto w-full max-w-6xl px-6">
        <SectionHeading
          eyebrow="解决方案"
          title="针对不同门诊模式的能力组合"
          description="Yila 根据诊疗场景组合模块与实施路径，缩短上线周期。"
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {solutions.map((solution) => (
            <div
              key={solution.id}
              id={solution.id}
              className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-slate-900">
                {solution.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                {solution.description}
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600">
                {solution.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link
            href="/contact"
            className="rounded-full bg-emerald-500 px-6 py-2 text-sm font-semibold text-white"
          >
            获取方案咨询
          </Link>
          <Link
            href="/demo"
            className="rounded-full border border-slate-200 px-6 py-2 text-sm font-semibold text-slate-700"
          >
            体验 AI Demo
          </Link>
        </div>
      </div>
    </div>
  );
}
