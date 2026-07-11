"use client";

import Link from "next/link";
import GlassNav from "./GlassNav";

export default function Header() {
  return (
    <header className="w-full fixed top-0 left-0 right-0 z-50 border-b border-[var(--glass-border)] bg-[var(--glass-bg)] backdrop-blur-xl">
      <div className="w-full h-12 sm:h-14 flex items-center justify-between px-4 sm:px-8 md:px-16 lg:px-[125px]">
        <Link
          href="/"
          className="font-header text-sm sm:text-base font-semibold tracking-tight text-foreground/90 hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-accent-primary/40 rounded-lg px-1"
          aria-label="Alex Benson home"
        >
          <span className="text-gradient-aurora">AB</span>
        </Link>
        <GlassNav />
      </div>
    </header>
  );
}
