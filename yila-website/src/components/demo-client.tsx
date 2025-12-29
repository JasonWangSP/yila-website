"use client";

import { useMemo, useState } from "react";
import { buildAiOutput, DemoFormData, SchoolKey } from "@/data/aiMock";
import { demoCases } from "@/data/demoCases";
import { DemoForm } from "./demo-form";
import { OutputPanel } from "./output-panel";
import { Download, Wand2, FileText } from "lucide-react";

const emptyForm: DemoFormData = {
  name: "",
  age: "",
  gender: "",
  chiefComplaint: "",
  presentIllness: "",
  pastHistory: "",
  tongue: "",
  pulse: "",
  signs: "",
  tests: "",
  followUp: "",
};

export function DemoClient() {
  const [form, setForm] = useState<DemoFormData>(emptyForm);
  const [school, setSchool] = useState<SchoolKey>("classic");
  const [sections, setSections] = useState(() => buildAiOutput(emptyForm, "classic"));

  const onChange = (key: keyof DemoFormData, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleFillExample = () => {
    setForm(demoCases[0]);
  };

  const handleGenerate = () => {
    setSections(buildAiOutput(form, school));
  };

  const exportPayload = useMemo(() => {
    return {
      emr: form,
      school,
      sections,
      generatedAt: new Date().toISOString(),
    };
  }, [form, school, sections]);

  const handleExport = () => {
    const blob = new Blob([JSON.stringify(exportPayload, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "yila-emr-export.json";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
      <div className="space-y-6 rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">病历录入</h2>
            <p className="text-sm text-slate-600">
              请填写诊疗信息，模拟 AI 结构化与方案输出。
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={handleFillExample}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-700"
            >
              <FileText size={14} />
              生成示例
            </button>
            <button
              onClick={handleGenerate}
              className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-xs font-semibold text-white"
            >
              <Wand2 size={14} />
              生成 AI 建议
            </button>
            <button
              onClick={handleExport}
              className="inline-flex items-center gap-2 rounded-full border border-emerald-500 px-4 py-2 text-xs font-semibold text-emerald-600"
            >
              <Download size={14} />
              导出 EMR JSON
            </button>
          </div>
        </div>
        <DemoForm
          form={form}
          onChange={onChange}
          school={school}
          onSchoolChange={setSchool}
        />
      </div>
      <div className="space-y-4">
        <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">AI 输出预览</h2>
          <p className="text-sm text-slate-600">
            输出严格按 8 个标题分块，支持补齐关键信息提示。
          </p>
        </div>
        <OutputPanel sections={sections} />
      </div>
    </div>
  );
}
