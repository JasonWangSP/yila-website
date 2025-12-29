import { ContactForm } from "@/components/contact-form";
import { SectionHeading } from "@/components/section-heading";

export const metadata = {
  title: "联系与预约演示｜Yila 医疗云",
  description: "联系 Yila 获取演示或方案咨询。",
};

export default function ContactPage() {
  return (
    <div className="py-16">
      <div className="mx-auto w-full max-w-6xl px-6">
        <SectionHeading
          eyebrow="联系与预约"
          title="获取适合您机构的解决方案"
          description="填写需求，我们将在 1 个工作日内与您联系。"
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_0.8fr]">
          <ContactForm />
          <div className="space-y-4 rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm">
            <div>
              <p className="text-sm font-semibold text-slate-900">快速沟通</p>
              <p className="mt-2 text-sm text-slate-600">hello@yila.health</p>
              <p className="text-sm text-slate-600">+65 8888 8888</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900">办公地址</p>
              <p className="mt-2 text-sm text-slate-600">
                新加坡示例大道 18 号，Yila Tower 12F
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900">服务时间</p>
              <p className="mt-2 text-sm text-slate-600">周一至周五 9:00 - 18:00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
