import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/80">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-12 md:grid-cols-[2fr_1fr_1fr_1fr]">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500 text-white font-semibold">
              YL
            </div>
            <div>
              <p className="text-base font-semibold text-slate-900">Yila 医疗云</p>
              <p className="text-xs text-slate-500">Clinic OS + AI-CDSS</p>
            </div>
          </div>
          <p className="text-sm text-slate-600">
            让医疗机构拥有可控的临床流程、可视化运营数据与可信 AI 诊疗辅助。
          </p>
          <div className="text-sm text-slate-600">
            <p>邮箱：hello@yila.health</p>
            <p>地址：新加坡示例大道 18 号</p>
          </div>
        </div>
        <div className="space-y-3 text-sm">
          <p className="font-semibold text-slate-900">公司</p>
          <Link href="/about" className="block text-slate-600 hover:text-slate-900">
            关于我们
          </Link>
          <Link href="/contact" className="block text-slate-600 hover:text-slate-900">
            联系我们
          </Link>
          <Link href="/pricing" className="block text-slate-600 hover:text-slate-900">
            定价
          </Link>
        </div>
        <div className="space-y-3 text-sm">
          <p className="font-semibold text-slate-900">合规</p>
          <Link href="/security" className="block text-slate-600 hover:text-slate-900">
            安全与合规
          </Link>
          <Link href="/integrations" className="block text-slate-600 hover:text-slate-900">
            集成与平台
          </Link>
          <Link href="#" className="block text-slate-600 hover:text-slate-900">
            隐私政策
          </Link>
          <Link href="#" className="block text-slate-600 hover:text-slate-900">
            服务条款
          </Link>
        </div>
        <div className="space-y-3 text-sm">
          <p className="font-semibold text-slate-900">社媒</p>
          <Link href="#" className="block text-slate-600 hover:text-slate-900">
            LinkedIn
          </Link>
          <Link href="#" className="block text-slate-600 hover:text-slate-900">
            WeChat
          </Link>
          <Link href="#" className="block text-slate-600 hover:text-slate-900">
            X / Twitter
          </Link>
        </div>
      </div>
      <div className="border-t border-slate-200 py-6 text-center text-xs text-slate-500">
        © 2025 Yila Health. All rights reserved.
      </div>
    </footer>
  );
}

