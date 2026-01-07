"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

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

export default function GlassNav() {
  return (
    <nav className="relative flex items-center gap-0.5 sm:gap-1 md:gap-1.5 lg:gap-2.5 flex-nowrap w-auto">
        {navItems.map((item) => {
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
                key={item.href}
                href={item.href}
                target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={item.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                className="inline-block focus:outline-none focus:ring-2 focus:ring-accent-primary/40 rounded-xl"
                aria-label={item.label}
              >
                {linkContent}
              </a>
            );
          }

          return (
            <Link 
              key={item.href} 
              href={item.href} 
              className="inline-block focus:outline-none focus:ring-2 focus:ring-cyan-400/40 rounded-xl"
              aria-label={item.label}
            >
              {linkContent}
            </Link>
          );
        })}
        <ThemeToggle />
    </nav>
  );
}

