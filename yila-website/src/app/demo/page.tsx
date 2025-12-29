import { DemoClient } from "@/components/demo-client";
import { SectionHeading } from "@/components/section-heading";

export const metadata = {
  title: "AI 诊疗 Demo｜Yila 医疗云",
  description: "交互式 AI-CDSS Demo，展示结构化输出与 EMR JSON 导出能力。",
};

export default function DemoPage() {
  return (
    <div className="py-16">
      <div className="mx-auto w-full max-w-6xl px-6">
        <SectionHeading
          eyebrow="AI 诊疗演示"
          title="模拟真实门诊场景的 AI-CDSS 输出"
          description="左侧录入病历，右侧实时生成 8 段结构化诊疗建议。"
        />
        <div className="mt-10">
          <DemoClient />
        </div>
      </div>
    </div>
  );
}
