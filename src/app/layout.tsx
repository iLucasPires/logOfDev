import "./globals.css";
import { Metadata } from "next";
import SideBar from "../components/SideBar";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Log of dev",
  generator: "Log of dev",
  applicationName: "Log of dev",
  keywords: ["js", "typescript", "react", "nextjs", "tailwindcss", "42", "42sp"],
  authors: [{name:"lucasp"}],
  creator: 'Lucas Pires',
  publisher: 'Lucas Pires',
  metadataBase: new URL("https://logofdev.software/"),
  alternates: {
      canonical: '/',
      languages: {
          'en-US': '/en-US',
          'pt-BR': '/pt-BR',
      },
  },
};

export default function RootLayout({ children }: any) {
  return (
    <html lang="pt-BR">
      <body className="p-10 md:pt-36 bg-[#111010] text-neutral-100">
        <div className="flex flex-col md:flex-row align-top max-w-6xl mx-auto gap-5">
          <SideBar />
          <Analytics />
          {children}
        </div>
      </body>
    </html>
  );
}
