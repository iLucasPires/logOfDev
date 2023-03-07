"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
];

export default function SideBar() {
  let pathname = usePathname() || "/";

  return (
    <aside className="h-full flex items-center flex-col">
      <Image src="/logo.svg" alt="Logo" width={100} height={100} />
      <nav>
        <ul className="gap-2 flex flex-col items-center h-full">
          {navItems.map((item) => {
            const isActive = item.href === pathname;

            return (
              <li
                key={item.title}
                className={clsx(
                  "text-neutral-400 hover:text-neutral-200",
                  isActive && "bg-neutral-800 rounded-md p-2"
                )}
              >
                <Link href={item.href}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
