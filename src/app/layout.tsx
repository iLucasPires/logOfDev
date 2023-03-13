import SideBar from "../components/SideBar";
import "./globals.css";

export const metadata = {
  title: "portfolio",
  description: "My personal portfolio",
  icons: {
    shortcut: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="p-10 md:pt-36 bg-neutral-900 text-neutral-100">
        <div className="flex flex-col md:flex-row align-top max-w-6xl mx-auto gap-5">
          <SideBar />
          {children}
        </div>
      </body>
    </html>
  );
}
