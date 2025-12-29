import Link from "next/link";
import { pricingTiers } from "@/data/pricing";

export function PricingCards() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {pricingTiers.map((tier) => (
        <div
          key={tier.name}
          className={`rounded-3xl border p-6 shadow-sm ${
            tier.highlighted
              ? "border-emerald-500 bg-emerald-50/60"
              : "border-slate-200 bg-white"
          }`}
        >
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-slate-900">
              {tier.name}
            </h3>
            {tier.highlighted ? (
              <span className="rounded-full bg-emerald-500 px-3 py-1 text-xs text-white">
                推荐
              </span>
            ) : null}
          </div>
          <p className="mt-3 text-3xl font-semibold text-slate-900">
            {tier.price}
          </p>
          <p className="mt-2 text-sm text-slate-600">{tier.description}</p>
          <ul className="mt-6 space-y-3 text-sm text-slate-600">
            {tier.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            className={`mt-6 inline-flex w-full items-center justify-center rounded-full px-4 py-2 text-sm font-semibold ${
              tier.highlighted
                ? "bg-slate-900 text-white"
                : "border border-slate-200 text-slate-700"
            }`}
          >
            {tier.cta}
          </Link>
        </div>
      ))}
    </div>
  );
}
