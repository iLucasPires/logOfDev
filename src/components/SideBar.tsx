"use client";

import { IoHomeSharp, IoNewspaperSharp, IoMail } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navItems = [
  {
    title: "Home",
    href: "/",
    LogoNav: IoHomeSharp,
  },
  {
    title: "Blog",
    href: "/blog",
    LogoNav: IoNewspaperSharp,
  },
  {
    title: "Contact",
    href: "/contact",
    LogoNav: IoMail,
  },
];

function ItemMenu(props: iItemMenuProps) {
  const {
    item: { title, href, LogoNav },
    isPathName,
  } = props;
  const ariaLabel = "Go to " + title + " page";
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
        aria-label={ariaLabel}
        className="inline-flex items-center gap-2"
      >
        <LogoNav className="text-neutral-400" aria-label={title} />
        <span>{title}</span>
      </Link>
    </li>
  );
}

export default function SideBar() {
  const pathname = usePathname()?.includes("/blog/")
    ? "/blog"
    : usePathname() || "/";
  return (
    <aside className="flex flex-col justify-between md:items-center md:justify-start md:gap-5">
      <Link className="mb-2" href="/" aria-label="Go to home page">
        <Image src="/logo.svg" alt="Logo" width={50} height={50} />
      </Link>

      <nav>
        <ul className="flex gap-2 md:flex-col" role="menu">
          {navItems.map((item) => (
            <ItemMenu
              key={item.title}
              isPathName={item.href === pathname}
              item={item}
            />
          ))}
        </ul>
      </nav>
    </aside>
  );
}
