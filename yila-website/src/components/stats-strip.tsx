export function StatsStrip() {
  const stats = [
    { value: "35%", label: "病历录入效率提升" },
    { value: "22%", label: "复诊率提升" },
    { value: "60+", label: "标准化模块覆盖" },
    { value: "99.9%", label: "系统可用性目标" },
  ];

  return (
    <section className="py-10">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="grid gap-6 rounded-3xl border border-slate-200 bg-white/80 p-6 text-center md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl font-semibold text-slate-900">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-slate-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
