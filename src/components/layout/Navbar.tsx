export default function Navbar() {
  return (
    <header className="sticky top-0 z-99 mx-auto flex w-full items-center justify-center">
      <nav className="glass-nav flex w-full flex-wrap items-center justify-center gap-6 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary sm:gap-10">
        <a className="transition hover:text-orange-500" href="/">
          Home
        </a>
        <a className="transition hover:text-orange-500" href="/about">
          About
        </a>
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
        <a className="transition hover:text-orange-500" href="#works">
          Works
        </a>
        <a className="transition hover:text-orange-500" href="#contact">
          Contact
        </a>
      </nav>
    </header>
  );
}
