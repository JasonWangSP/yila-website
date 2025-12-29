import { MonitorSmartphone } from "lucide-react";

export function ScreenshotCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm">
      <div className="flex items-center gap-3">
        <MonitorSmartphone size={18} className="text-slate-500" />
        <p className="text-sm font-semibold text-slate-900">{title}</p>
      </div>
      <div className="mt-4 rounded-2xl border border-dashed border-slate-200 bg-gradient-to-br from-slate-50 via-white to-emerald-50 p-6">
        <div className="h-32 rounded-xl bg-white/70 shadow-inner" />
      </div>
      <p className="mt-4 text-sm text-slate-600">{description}</p>
    </div>
  );
}


