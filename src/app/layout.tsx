import type { Metadata } from "next";
import { Noto_Sans_Bengali } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Marque from "@/components/Marque";
import { Suspense } from "react";

const notoSansBengali = Noto_Sans_Bengali({
  subsets: ["bengali", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-bengali",
});

export const metadata: Metadata = {
  title: "আমার ওয়েবসাইট",
  description: "বাংলা ওয়েবসাইট",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="bn" data-theme="light" className={notoSansBengali.className}>
      <body className="min-h-full flex flex-col bg-green-100">
        <NavBar></NavBar>
        <Suspense fallback={"Loading..."}>
          <Marque></Marque>
        </Suspense>
        {children}
      </body>
    </html>
  );
}
