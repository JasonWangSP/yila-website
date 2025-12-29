import { CheckCircle2 } from "lucide-react";

export function FeatureGrid({
  items,
}: {
  items: { title: string; description: string }[];
}) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {items.map((item) => (
        <div
          key={item.title}
          className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm"
        >
          <div className="flex items-center gap-3">
            <CheckCircle2 className="text-emerald-500" size={20} />
            <h3 className="text-lg font-semibold text-slate-900">
              {item.title}
            </h3>
          </div>
          <p className="mt-3 text-sm text-slate-600">{item.description}</p>
        </div>
      ))}
    </div>
  );
}


