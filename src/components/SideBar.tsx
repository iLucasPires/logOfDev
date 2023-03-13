"use client";
import {
  IoHomeSharp,
  IoNewspaperSharp,
  IoPersonSharp,
} from "react-icons/io5";

interface ItemMenuProps {
  item: {
    title: string;
    href: string;
    icon: JSX.Element;
  };
  isPathName: boolean;
}

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

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
    title: "About",
    href: "/about",
    icon: <IoPersonSharp aria-label="About" />,
  },
];

function ItemMenu(props: ItemMenuProps) {
  return (
    <li
      className={clsx(
        "text-neutral-400 hover:text-neutral-200 px-2 py-1 flex items-center gap-2",
        props.isPathName && "bg-neutral-800 rounded-md"
      )}
    >
      {props.item.icon}

      <Link
        href={props.item.href}
        aria-label={"Go to " + props.item.title + " page"}
      >
        {props.item.title}
      </Link>
    </li>
  );
}

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
          {navItems.map((item) => (
            <ItemMenu
              key={item.title}
              item={item}
              isPathName={item.href === pathname}
            />
          ))}
        </ul>
      </nav>
    </aside>
  );
}
