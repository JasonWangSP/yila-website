import type { AiSection } from "@/data/aiMock";

export function OutputPanel({ sections }: { sections: AiSection[] }) {
  return (
    <div className="space-y-4">
      {sections.map((section) => (
        <div
          key={section.title}
          className={`rounded-3xl border p-6 shadow-sm ${
            section.highlight
              ? "border-emerald-400 bg-emerald-50"
              : "border-slate-200 bg-white"
          }`}
        >
          <h3 className="text-lg font-semibold text-slate-900">
            {section.title}
          </h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-600">
            {section.bullets.map((item, index) => (
              <li key={`${section.title}-${index}`}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
