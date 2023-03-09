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
    title: "Blog",
    href: "/blog",
  },
  {
    title: "About",
    href: "/about",
  },
];

export default function SideBar() {
  let pathname = usePathname() || "/";

  return (
    <aside className="flex justify-between md:justify-start items-center md:flex-col">
      <Image
        className="mb-3"
        src="/logo.svg"
        alt="Logo"
        width={50}
        height={50}
      />
      <nav>
        <ul className="gap-2 flex md:flex-col">
          {navItems.map((item) => {
            return (
              <li
                key={item.title}
                className={clsx(
                  "text-neutral-400 hover:text-neutral-200 px-2 py-1",
                  item.href === pathname && "bg-neutral-800 rounded-md"
                )}
              >
                <Link
                  href={item.href}
                  aria-label={"Go to " + item.title + " page"}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
