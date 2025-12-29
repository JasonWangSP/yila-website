import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  description,
  action,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div className="space-y-3">
        {eyebrow ? (
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-500">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">
          {title}
        </h2>
        {description ? (
          <p className="max-w-2xl text-base text-slate-600 md:text-lg">
            {description}
          </p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}


