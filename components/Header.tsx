"use client";

import Link from "next/link";
import GlassNav from "./GlassNav";

export default function Header() {
  return (
    <header className="w-full fixed top-0 left-0 right-0 z-50 border-b border-[var(--glass-border)] bg-[var(--glass-bg)] backdrop-blur-xl">
      <div className="w-full h-12 sm:h-14 flex items-center justify-between gap-3 px-4 sm:px-8 md:px-16 lg:px-[125px]">
        <Link
          href="/"
          className="inline-flex h-11 w-11 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full border border-[var(--glass-border)] bg-[var(--glass-bg)] font-header text-sm sm:text-base font-semibold tracking-tight text-foreground/90 transition-colors hover:border-[var(--accent-primary)]/50 hover:text-foreground focus:outline-none focus:ring-2 focus:ring-accent-primary/40"
          aria-label="Alex Benson home"
        >
          AB
        </Link>
        <GlassNav />
      </div>
    </header>
  );
}
