import type { Metadata } from "next";
import { Noto_Sans_SC, Space_Grotesk } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import "./globals.css";

const bodyFont = Noto_Sans_SC({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

const displayFont = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Yila 医疗云｜Clinic OS + AI-CDSS",
  description:
    "Yila 面向医疗机构的产品官网，覆盖诊所 SaaS、AI-CDSS、EMR、运营管理与合规能力展示。",
  openGraph: {
    title: "Yila 医疗云｜Clinic OS + AI-CDSS",
    description:
      "覆盖诊所 SaaS、AI-CDSS、EMR、运营管理与合规能力展示。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className={`${bodyFont.variable} ${displayFont.variable} antialiased`}>
        <div className="min-h-screen bg-slate-50 text-slate-900">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
