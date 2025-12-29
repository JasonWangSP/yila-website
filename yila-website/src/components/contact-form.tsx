"use client";

import { useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="text-sm font-medium text-slate-700">姓名</label>
          <input
            required
            className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm outline-none focus:border-emerald-400"
            placeholder="张医生"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-slate-700">机构名称</label>
          <input
            required
            className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm outline-none focus:border-emerald-400"
            placeholder="示例中医诊所"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-slate-700">邮箱</label>
          <input
            type="email"
            required
            className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm outline-none focus:border-emerald-400"
            placeholder="doctor@clinic.com"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-slate-700">电话</label>
          <input
            className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm outline-none focus:border-emerald-400"
            placeholder="+65 8888 8888"
          />
        </div>
      </div>
      <div className="mt-4">
        <label className="text-sm font-medium text-slate-700">需求描述</label>
        <textarea
          rows={4}
          className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm outline-none focus:border-emerald-400"
          placeholder="我们希望了解 AI-CDSS 与 EMR 集成方案。"
        />
      </div>
      <div className="mt-6 flex flex-wrap items-center gap-4">
        <button
          type="submit"
          className="rounded-full bg-slate-900 px-6 py-2 text-sm font-semibold text-white hover:bg-slate-800"
        >
          提交信息
        </button>
        {submitted ? (
          <span className="text-sm text-emerald-600">已收到，我们会尽快联系您。</span>
        ) : null}
      </div>
    </form>
  );
}
