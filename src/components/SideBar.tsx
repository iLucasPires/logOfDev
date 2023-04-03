"use client";

import { IoHomeSharp, IoNewspaperSharp, IoMail } from "react-icons/io5";
import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navItems = [
  {
    title: "Home",
    href: "/",
    icon: IoHomeSharp,
  },
  {
    title: "Blog",
    href: "/blog",
    icon: IoNewspaperSharp,
  },
  {
    title: "Contact",
    href: "/contact",
    icon: IoMail,
  },
];

function ItemMenu(props: ItemMenuProps) {
  return (
    <li
      className={clsx(
        "flex items-center gap-2 px-2 py-1",
        "text-neutral-400 hover:text-neutral-200",
        props.isPathName && "rounded-md bg-neutral-900"
      )}
    >
      <Link
        href={props.item.href}
        className="inline-flex items-center gap-2"
        aria-label={"Go to " + props.item.title + " page"}
      >
        <props.item.icon
          className="text-neutral-400"
          aria-label={props.item.title}
        />
        <span>{props.item.title}</span>
      </Link>
    </li>
  );
}

export default function SideBar() {
  let pathname = usePathname() || "/";
  if (pathname.includes("/blog/")) {
    pathname = "/blog";
  }

  return (
    <aside
      className={clsx(
        "flex items-center justify-between",
        "md:flex-col md:justify-start",
        "md:gap-5"
      )}
    >
      <Link className="mb-3" href="/" aria-label="Go to home page">
        <Image src="/logo.svg" alt="Logo" width={50} height={50} />
      </Link>

      <nav>
        <ul className={clsx("flex gap-2", "md:flex-col")} role="menu">
          {navItems.map((item) => (
            <ItemMenu
              key={item.title}
              item={item}
              isPathName={pathname === item.href}
            />
          ))}
        </ul>
      </nav>
    </aside>
  );
}
