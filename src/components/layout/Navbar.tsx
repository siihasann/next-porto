"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const leftItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
];

const rightItems = [
  { href: "/work", label: "Works" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  const linkClass = (href: string) =>
    `nav-link${pathname === href ? " is-active" : ""}`;

  return (
    <header className="sticky top-0 z-99 mx-auto flex w-full items-center justify-center">
      <nav className="glass-nav flex w-full flex-wrap items-center justify-center gap-6 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] sm:gap-10">
        {leftItems.map((item) => (
          <Link
            key={item.href}
            className={linkClass(item.href)}
            href={item.href}
            aria-current={pathname === item.href ? "page" : undefined}
          >
            {item.label}
          </Link>
        ))}
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-[0_10px_30px_-20px_rgba(0,0,0,0.5)]">
          <svg
            aria-hidden="true"
            className="h-6 w-6 text-orange-500"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2l2.6 5.4L20 10l-5.4 2.6L12 18l-2.6-5.4L4 10l5.4-2.6L12 2z" />
          </svg>
        </span>
        {rightItems.map((item) => (
          <Link
            key={item.href}
            className={linkClass(item.href)}
            href={item.href}
            aria-current={pathname === item.href ? "page" : undefined}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
