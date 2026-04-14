"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const leftItems = [
  { href: "/", label: "Home", disabled: true, badge: "Soon" },
  { href: "/about", label: "About" },
];

const rightItems = [
  { href: "/work", label: "Works" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  const itemClass = (href: string, disabled?: boolean) =>
    `nav-link${!disabled && pathname === href ? " is-active" : ""}${
      disabled ? " pointer-events-none opacity-60" : ""
    }`;

  const renderItem = ({
    href,
    label,
    disabled,
    badge,
  }: {
    href: string;
    label: string;
    disabled?: boolean;
    badge?: string;
  }) => {
    const content = (
      <>
        <span>{label}</span>
        {badge ? (
          <span className="ml-2 rounded-full border border-[#84b179]/35 bg-[#84b179]/12 px-2 py-0.5 text-[8px] font-semibold tracking-[0.08em] text-[#84b179] sm:text-[9px]">
            {badge}
          </span>
        ) : null}
      </>
    );

    if (disabled) {
      return (
        <span
          key={href}
          className={itemClass(href, disabled)}
          aria-disabled="true"
        >
          {content}
        </span>
      );
    }

    return (
      <Link
        key={href}
        className={itemClass(href, disabled)}
        href={href}
        aria-current={pathname === href ? "page" : undefined}
      >
        {content}
      </Link>
    );
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 w-full">
      <nav className="glass-nav flex w-full flex-wrap items-center justify-center gap-3 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] sm:gap-8 sm:px-6 sm:py-3 sm:text-xs sm:tracking-[0.2em] lg:gap-10 lg:px-16">
        {leftItems.map(renderItem)}
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-[0_10px_30px_-20px_rgba(0,0,0,0.5)] sm:h-12 sm:w-12">
          <svg
            aria-hidden="true"
            className="h-5 w-5 text-[#577E53] sm:h-6 sm:w-6"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2l2.6 5.4L20 10l-5.4 2.6L12 18l-2.6-5.4L4 10l5.4-2.6L12 2z" />
          </svg>
        </span>
        {rightItems.map(renderItem)}
      </nav>
    </header>
  );
}
