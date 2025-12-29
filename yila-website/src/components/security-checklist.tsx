import { ShieldCheck, Lock, FileCheck2, CloudCog } from "lucide-react";

const items = [
  {
    title: "数据加密",
    description: "传输与存储双重加密，支持密钥轮换与访问审计。",
    icon: ShieldCheck,
  },
  {
    title: "访问控制",
    description: "RBAC、最小权限与多因素验证选项，保障关键数据访问。",
    icon: Lock,
  },
  {
    title: "审计日志",
    description: "覆盖关键操作、导出与审批流程，满足医疗合规审计。",
    icon: FileCheck2,
  },
  {
    title: "备份与容灾",
    description: "多地备份与恢复演练，确保业务连续性。",
    icon: CloudCog,
  },
];

export function SecurityChecklist() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <div
            key={item.title}
            className="rounded-3xl border border-slate-200 bg-white/80 p-6"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-emerald-50 p-3">
                <Icon className="text-emerald-500" size={20} />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">
                {item.title}
              </h3>
            </div>
            <p className="mt-3 text-sm text-slate-600">{item.description}</p>
          </div>
        );
      })}
    </div>
  );
}
