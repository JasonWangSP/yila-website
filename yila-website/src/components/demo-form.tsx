import type { DemoFormData, SchoolKey } from "@/data/aiMock";

export function DemoForm({
  form,
  onChange,
  school,
  onSchoolChange,
}: {
  form: DemoFormData;
  onChange: (key: keyof DemoFormData, value: string) => void;
  school: SchoolKey;
  onSchoolChange: (value: SchoolKey) => void;
}) {
  return (
    <div className="space-y-6">
      <div>
        <label className="text-sm font-medium text-slate-700">选择学派模型</label>
        <select
          value={school}
          onChange={(event) => onSchoolChange(event.target.value as SchoolKey)}
          className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm outline-none focus:border-emerald-400"
        >
          <option value="classic">经典学派</option>
          <option value="shanghan">伤寒学派</option>
          <option value="wenbing">温病学派</option>
          <option value="fangzheng">方证学派</option>
          <option value="integrative">综合学派</option>
          <option value="custom">自定义</option>
        </select>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        <div>
          <label className="text-sm font-medium text-slate-700">姓名</label>
          <input
            value={form.name}
            onChange={(event) => onChange("name", event.target.value)}
            className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm outline-none focus:border-emerald-400"
            placeholder="患者姓名"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-slate-700">年龄</label>
          <input
            value={form.age}
            onChange={(event) => onChange("age", event.target.value)}
            className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm outline-none focus:border-emerald-400"
            placeholder="34"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-slate-700">性别</label>
          <input
            value={form.gender}
            onChange={(event) => onChange("gender", event.target.value)}
            className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm outline-none focus:border-emerald-400"
            placeholder="女"
          />
        </div>
      </div>
      <div>
        <label className="text-sm font-medium text-slate-700">主诉</label>
        <textarea
          value={form.chiefComplaint}
          onChange={(event) => onChange("chiefComplaint", event.target.value)}
          rows={2}
          className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm outline-none focus:border-emerald-400"
          placeholder="反复头痛 3 个月..."
        />
      </div>
      <div>
        <label className="text-sm font-medium text-slate-700">现病史</label>
        <textarea
          value={form.presentIllness}
          onChange={(event) => onChange("presentIllness", event.target.value)}
          rows={3}
          className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm outline-none focus:border-emerald-400"
          placeholder="头痛位置、持续时间、诱因..."
        />
      </div>
      <div>
        <label className="text-sm font-medium text-slate-700">既往史</label>
        <textarea
          value={form.pastHistory}
          onChange={(event) => onChange("pastHistory", event.target.value)}
          rows={2}
          className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm outline-none focus:border-emerald-400"
          placeholder="既往病史、过敏史..."
        />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="text-sm font-medium text-slate-700">舌象</label>
          <input
            value={form.tongue}
            onChange={(event) => onChange("tongue", event.target.value)}
            className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm outline-none focus:border-emerald-400"
            placeholder="舌红，苔薄黄"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-slate-700">脉象</label>
          <input
            value={form.pulse}
            onChange={(event) => onChange("pulse", event.target.value)}
            className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm outline-none focus:border-emerald-400"
            placeholder="弦数"
          />
        </div>
      </div>
      <div>
        <label className="text-sm font-medium text-slate-700">体征</label>
        <textarea
          value={form.signs}
          onChange={(event) => onChange("signs", event.target.value)}
          rows={2}
          className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm outline-none focus:border-emerald-400"
          placeholder="面色、情绪、肌张力等"
        />
      </div>
      <div>
        <label className="text-sm font-medium text-slate-700">辅助检查</label>
        <textarea
          value={form.tests}
          onChange={(event) => onChange("tests", event.target.value)}
          rows={2}
          className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm outline-none focus:border-emerald-400"
          placeholder="血压、化验、影像..."
        />
      </div>
      <div>
        <label className="text-sm font-medium text-slate-700">复诊信息</label>
        <textarea
          value={form.followUp}
          onChange={(event) => onChange("followUp", event.target.value)}
          rows={2}
          className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm outline-none focus:border-emerald-400"
          placeholder="近期作息、疗效反馈..."
        />
      </div>
    </div>
  );
}
