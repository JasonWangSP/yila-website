export function ArchitectureDiagram() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm">
      <div className="grid gap-4 md:grid-cols-[1fr_auto_1fr] md:items-center">
        <div className="space-y-3">
          {[
            "HIS / LIS / 影像",
            "检验设备",
            "第三方支付",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600"
            >
              {item}
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <div className="h-32 w-1 rounded-full bg-emerald-200" />
        </div>
        <div className="space-y-3">
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700">
            Yila 平台中台
          </div>
          {[
            "临床与 EMR",
            "AI-CDSS 引擎",
            "运营与财务",
            "数据治理与审计",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-600"
            >
              {item}
            </div>
          ))}
          <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600">
            API / Webhook / 数据导入导出
          </div>
        </div>
      </div>
    </div>
  );
}
