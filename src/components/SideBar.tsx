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
    icon: <IoHomeSharp aria-label="Home" />,
  },
  {
    title: "Blog",
    href: "/blog",
    icon: <IoNewspaperSharp aria-label="Blog" />,
  },
  {
    title: "Contact",
    href: "/contact",
    icon: <IoMail aria-label="Contact" />,
  }
];

function ItemMenu(props: ItemMenuProps) {
  return (
    <li
      className={clsx(
        "text-neutral-400 hover:text-neutral-200 px-2 py-1 flex items-center gap-2",
        props.isPathName && "bg-neutral-800 rounded-md"
      )}
    >
      <Link
        href={props.item.href}
        className="inline-flex items-center gap-2"
        aria-label={"Go to " + props.item.title + " page"}
      >
        {props.item.icon}
        <span>{props.item.title}</span>
      </Link>
    </li>
  );
}

export default function SideBar() {
  let pathname = usePathname() || '/';
  if (pathname.includes('/blog/')) {
    pathname = '/blog';
  }


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
