"use client";

import Link from "next/link";
import GlassNav from "./GlassNav";

export default function Header() {
  return (
    <header className="w-full fixed top-0 left-0 right-0 z-50 bg-background/50 backdrop-blur-sm">
      <div className="w-full h-12 sm:h-14 flex items-center justify-between px-4 sm:px-8 md:px-16 lg:px-[125px]">
        <Link 
          href="/launches" 
          className="inline-block rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500/40 focus:ring-offset-2 focus:ring-offset-background"
          aria-label="Recent Launches"
        >
          <div
            className="group relative inline-flex items-center gap-2 rounded-xl border border-red-400/40 bg-red-500/15 px-3 py-1.5 sm:px-4 sm:py-2 overflow-hidden backdrop-blur-sm transition-all duration-300 hover:bg-red-500/20"
            style={{
              boxShadow:
                "0 0 0 1px rgba(239,68,68,0.18), 0 0 28px rgba(239,68,68,0.35), 0 0 90px rgba(239,68,68,0.22)",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/25 to-red-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            <span
              className="relative z-10 text-xs sm:text-sm text-red-700 dark:text-red-200 whitespace-nowrap font-semibold"
              style={{ textShadow: "0 0 14px rgba(239,68,68,0.35)" }}
            >
              Recent Launches 🚀
            </span>
          </div>
        </Link>
        <GlassNav />
      </div>
    </header>
  );
}
