import Link from "next/link";
import { PricingCards } from "@/components/pricing-cards";
import { SectionHeading } from "@/components/section-heading";

export const metadata = {
  title: "定价｜Yila 医疗云",
  description: "Yila 诊所 SaaS 与 AI-CDSS 定价方案。",
};

export default function PricingPage() {
  return (
    <div className="py-16">
      <div className="mx-auto w-full max-w-6xl px-6">
        <SectionHeading
          eyebrow="定价方案"
          title="满足不同规模医疗机构的预算需求"
          description="可根据门店数量、用户规模与集成复杂度提供定制方案。"
        />
        <div className="mt-10">
          <PricingCards />
        </div>
        <div className="mt-10 rounded-3xl border border-slate-200 bg-white/80 p-8 text-center">
          <h3 className="text-2xl font-semibold text-slate-900">需要定制方案？</h3>
          <p className="mt-2 text-sm text-slate-600">
            与解决方案顾问沟通您的机构规模与流程需求。
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex rounded-full bg-slate-900 px-6 py-2 text-sm font-semibold text-white"
          >
            预约演示
          </Link>
        </div>
      </div>
    </div>
  );
}
