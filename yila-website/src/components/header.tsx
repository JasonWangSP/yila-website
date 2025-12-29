"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { mainLinks, productLinks, solutionLinks } from "@/data/navigation";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/40 bg-white/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500 text-white font-semibold">
            YL
          </div>
          <div>
            <p className="text-base font-semibold text-slate-900">Yila 医疗云</p>
            <p className="text-xs text-slate-500">Clinic OS + AI-CDSS</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-slate-700 md:flex">
          <div className="group relative">
            <button className="flex items-center gap-2 font-medium">
              产品
              <span className="text-xs">▾</span>
            </button>
            <div className="absolute left-0 mt-3 hidden w-56 rounded-2xl border border-slate-200 bg-white p-3 shadow-xl group-hover:block">
              {productLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block rounded-lg px-3 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="group relative">
            <button className="flex items-center gap-2 font-medium">
              解决方案
              <span className="text-xs">▾</span>
            </button>
            <div className="absolute left-0 mt-3 hidden w-56 rounded-2xl border border-slate-200 bg-white p-3 shadow-xl group-hover:block">
              {solutionLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block rounded-lg px-3 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          {mainLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="font-medium text-slate-700 hover:text-slate-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/demo"
            className="rounded-full border border-emerald-500 px-4 py-2 text-sm font-semibold text-emerald-600 hover:bg-emerald-50"
          >
            预约演示
          </Link>
          <Link
            href="/contact"
            className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
          >
            联系我们
          </Link>
        </div>

        <button
          className="flex items-center rounded-lg border border-slate-200 p-2 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="打开菜单"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-slate-200 bg-white px-6 pb-6 md:hidden">
          <div className="space-y-4 pt-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-emerald-500">
                产品
              </p>
              <div className="mt-2 grid gap-2">
                {productLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-emerald-500">
                解决方案
              </p>
              <div className="mt-2 grid gap-2">
                {solutionLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="grid gap-2">
              {mainLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              <Link
                href="/demo"
                onClick={() => setOpen(false)}
                className="rounded-full border border-emerald-500 px-4 py-2 text-center text-sm font-semibold text-emerald-600"
              >
                预约演示
              </Link>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="rounded-full bg-slate-900 px-4 py-2 text-center text-sm font-semibold text-white"
              >
                联系我们
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
