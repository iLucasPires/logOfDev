import "./globals.css";
import { Metadata } from "next";
import SideBar from "./components/SideBar";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Log of Dev",
  description:
    "Embark on a journey through my programming world. Explore my \
    personal blog, portfolio, and project logs. Follow along with \
    my experiences and growth in the fascinating world of development.",
  icons: [
    { rel: "icon",type: "image/png",sizes: "32x32",url: "/favicon-32x32.png" },
    { rel: "icon",type: "image/png",sizes: "16x16",url: "/favicon-16x16.png" },
    { rel: "apple-touch-icon",sizes: "180x180",url: "/apple-touch-icon.png" }
  ],
  colorScheme: "dark light",
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#111010",
  manifest: "/site.webmanifest",
  generator: "Log of Dev",
  applicationName: "Log of Dev",
  keywords: [ "JavaScript", "TypeScript", "React", "Next.js",
              "Tailwind CSS", "Lucas Pires Nogueira", "developer", "web developer",
              "software developer"],
  authors: [{ name: "Lucas P." }],
  creator: "Lucas Pires",
  publisher: "Lucas Pires",
  metadataBase: new URL("https://logofdev.software/"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "pt-BR": "/pt-BR",
    },
  },
};

export default function RootLayout({ children }: any) {
  return (
    <html lang="pt-BR">
      <body className="p-10 md:pt-36 bg-[#111010] text-neutral-100">
        <div className="flex flex-col md:flex-row align-top max-w-6xl mx-auto gap-10">
          <SideBar />
          <Analytics />
          {children}
        </div>
      </body>
    </html>
  );
}
