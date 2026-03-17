"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { useState, useEffect, useRef } from "react";

type NavItem = {
  label: string;
  href: string;
  external?: boolean;
};

const navItems: NavItem[] = [
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/alex-benson-c2226", external: true },
  { label: "GitHub", href: "https://github.com/bens-on", external: true },
  { label: "Email", href: "mailto:alexander.benson@me.com", external: true },
];

function NavLink({ item, onClick }: { item: NavItem; onClick?: () => void }) {
  const linkContent = (
    <div className="group relative inline-flex items-center gap-2 rounded-xl border border-black/10 dark:border-white/10 bg-background/60 px-4 py-2 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/0 via-cyan-400/10 to-fuchsia-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
      <span className="relative z-10 text-sm text-foreground/80 whitespace-nowrap">
        {item.label}
      </span>
    </div>
  );

  if (item.external) {
    return (
      <a
        href={item.href}
        target={item.href.startsWith("mailto:") ? undefined : "_blank"}
        rel={item.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
        className="inline-block focus:outline-none focus:ring-2 focus:ring-accent-primary/40 rounded-xl"
        aria-label={item.label}
        onClick={onClick}
      >
        {linkContent}
      </a>
    );
  }

  return (
    <Link
      href={item.href}
      className="inline-block focus:outline-none focus:ring-2 focus:ring-cyan-400/40 rounded-xl"
      aria-label={item.label}
      onClick={onClick}
    >
      {linkContent}
    </Link>
  );
}

export default function GlassNav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMobileOpen(false);
      }
    }
    if (mobileOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileOpen]);

  return (
    <>
      {/* Desktop nav */}
      <nav className="hidden md:flex items-center gap-1.5 lg:gap-2.5 flex-nowrap">
        {navItems.map((item) => (
          <NavLink key={item.href} item={item} />
        ))}
        <ThemeToggle />
      </nav>

      {/* Mobile nav */}
      <div className="flex md:hidden items-center gap-2" ref={menuRef}>
        <ThemeToggle />
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="relative inline-flex items-center justify-center w-10 h-10 rounded-xl border border-black/10 dark:border-white/10 bg-background/60 focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <div className="flex flex-col items-center justify-center gap-1.5">
            <span className={`block h-0.5 w-5 rounded-full bg-foreground transition-all duration-300 origin-center ${mobileOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-5 rounded-full bg-foreground transition-all duration-300 ${mobileOpen ? "opacity-0 scale-0" : ""}`} />
            <span className={`block h-0.5 w-5 rounded-full bg-foreground transition-all duration-300 origin-center ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>

        {mobileOpen && (
          <div className="absolute top-full right-0 mt-2 mr-4 flex flex-col gap-1.5 p-3 rounded-2xl border border-black/10 dark:border-white/10 bg-background/90 backdrop-blur-xl shadow-lg z-50 min-w-[160px]">
            {navItems.map((item) => (
              <NavLink key={item.href} item={item} onClick={() => setMobileOpen(false)} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

