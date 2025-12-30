import { SecurityChecklist } from "@/components/security-checklist";
import { SectionHeading } from "@/components/section-heading";

export const metadata = {
  title: "安全与合规｜Yila 医疗云",
  description: "数据加密、访问控制、审计与备份容灾能力概览。",
};

export default function SecurityPage() {
  return (
    <div className="py-16">
      <div className="mx-auto w-full max-w-6xl px-6">
        <SectionHeading
          eyebrow="安全与合规"
          title="以医疗数据最佳实践为基准"
          description="覆盖数据加密、访问控制、审计日志与灾备体系，适配国际化医疗场景。"
        />
        <div className="mt-10">
          <SecurityChecklist />
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">角色与权限</h3>
            <p className="mt-2 text-sm text-slate-600">
              通过 RBAC 与最小权限原则，控制不同岗位访问范围。
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600">
              <li>集团管理员：策略与审计总览</li>
              <li>门店主管：流程配置与经营指标</li>
              <li>医生：诊疗与病历权限</li>
              <li>前台/药房：收费与库存权限</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">隐私与合规说明</h3>
            <p className="mt-2 text-sm text-slate-600">
              参考新加坡与国际医疗数据最佳实践，提供数据留存、访问日志与授权管理说明。
            </p>
            <div className="mt-4 rounded-2xl bg-slate-50 p-4 text-sm text-slate-600">
              我们提供合规建议模板与流程说明，但不构成法律意见。
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
