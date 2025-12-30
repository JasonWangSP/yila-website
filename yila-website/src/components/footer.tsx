import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/80">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-12 md:grid-cols-[2fr_1fr_1fr_1fr]">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Image
              src="/yila-logo.png"
              alt="Yila logo"
              width={40}
              height={40}
              className="h-10 w-10"
            />
            <div>
              <p className="text-base font-semibold text-slate-900">Yila ???</p>
              <p className="text-xs text-slate-500">Clinic OS + AI-CDSS</p>
            </div>
          </div>
          <p className="text-sm text-slate-600">
            ????????????????????????? AI ?????
          </p>
          <div className="text-sm text-slate-600">
            <p>??:hello@yila.health</p>
            <p>??:??????? 18 ?</p>
          </div>
        </div>
        <div className="space-y-3 text-sm">
          <p className="font-semibold text-slate-900">??</p>
          <Link href="/about" className="block text-slate-600 hover:text-slate-900">
            ????
          </Link>
          <Link href="/contact" className="block text-slate-600 hover:text-slate-900">
            ????
          </Link>
          <Link href="/pricing" className="block text-slate-600 hover:text-slate-900">
            ??
          </Link>
        </div>
        <div className="space-y-3 text-sm">
          <p className="font-semibold text-slate-900">??</p>
          <Link href="/security" className="block text-slate-600 hover:text-slate-900">
            ?????
          </Link>
          <Link href="/integrations" className="block text-slate-600 hover:text-slate-900">
            ?????
          </Link>
          <Link href="#" className="block text-slate-600 hover:text-slate-900">
            ????
          </Link>
          <Link href="#" className="block text-slate-600 hover:text-slate-900">
            ????
          </Link>
        </div>
        <div className="space-y-3 text-sm">
          <p className="font-semibold text-slate-900">??</p>
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
        � 2025 Yila Health. All rights reserved.
      </div>
    </footer>
  );
}





