"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { IoHomeSharp } from "react-icons/io5";
import { AiFillProject } from "react-icons/ai";

const navItems = [
  {
    title: "Home",
    href: "/",
    LogoNav: IoHomeSharp,
  },

  {
    title: "Projetos",
    href: "/projects",
    LogoNav: AiFillProject,
  },
];

function ItemMenu(props: iItemMenuProps) {
  const { isPathName, item } = props;
  const { title, href, LogoNav } = item;
  const effectHoverPathName = isPathName && "rounded-md bg-neutral-900";

  return (
    <li
      className={
        "flex items-center gap-2 px-2 py-1 text-neutral-400 hover:text-neutral-200 " +
        effectHoverPathName
      }
    >
      <Link
        href={href}
        aria-label={"Navigate to tab " + title + " page"}
        aria-current={isPathName ? "page" : undefined}
        aria-labelledby="menu-item-label"
        className="inline-flex items-center gap-2"
      >
        <LogoNav className="text-neutral-400" aria-label={title} />
        <span>{title}</span>
      </Link>
    </li>
  );
}

export default function () {
  const pathname = usePathname()?.includes("/blog/")
    ? "/blog"
    : usePathname() || "/";
  return (
    <aside className="flex flex-col justify-between md:items-center md:justify-start gap-5">
      <Link className="mb-2" href="/" aria-label="Go to home page">
        <Image src="/logo.svg" alt="Logo" width={50} height={50} />
      </Link>

      <nav>
        <ul className="flex gap-2 md:flex-col" role="menu">
          <ItemMenu
            key={navItems[0].title}
            isPathName={pathname === navItems[0].href}
            item={navItems[0]}
          />

          <ItemMenu
            key={navItems[1].title}
            isPathName={pathname === navItems[1].href}
            item={navItems[1]}
          />
        </ul>
      </nav>
    </aside>
  );
}
