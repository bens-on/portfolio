"use client";

import { useEffect, useState, useCallback } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [mounted, setMounted] = useState(false);

  const applyTheme = useCallback((newTheme: "light" | "dark") => {
    const root = document.documentElement;
    if (newTheme === "dark") {
      root.style.setProperty("--background", "#07060f");
      root.style.setProperty("--foreground", "#f2f0f8");
      root.classList.add("dark");
    } else {
      root.style.setProperty("--background", "#f4f1fb");
      root.style.setProperty("--foreground", "#1a1528");
      root.classList.remove("dark");
    }
  }, []);

  useEffect(() => {
    setMounted(true);
    
    try {
      const root = document.documentElement;
      const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
      let currentTheme: "light" | "dark";
      if (savedTheme === "light" || savedTheme === "dark") {
        currentTheme = savedTheme;
      } else {
        const hasDarkClass = root.classList.contains("dark");
        currentTheme = hasDarkClass ? "dark" : "light";
        localStorage.setItem("theme", currentTheme);
      }
      setTheme(currentTheme);
      applyTheme(currentTheme);
    } catch {
      const root = document.documentElement;
      const hasDarkClass = root.classList.contains("dark");
      const fallbackTheme = hasDarkClass ? "dark" : "light";
      setTheme(fallbackTheme);
    }
  }, [applyTheme]);

  const toggleTheme = useCallback(() => {
    const newTheme = theme === "dark" ? "light" : "dark";
    try {
      localStorage.setItem("theme", newTheme);
      setTheme(newTheme);
      applyTheme(newTheme);
    } catch {
      setTheme(newTheme);
      applyTheme(newTheme);
    }
  }, [theme, applyTheme]);

  const iconSvg = mounted && theme === "dark" ? (
    <svg
      className="size-5"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </svg>
  ) : mounted && theme === "light" ? (
    <svg
      className="size-5"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
      />
    </svg>
  ) : (
    <svg
      className="size-5"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </svg>
  );

  if (!mounted) {
    return (
      <button
        type="button"
        className="group relative inline-flex items-center justify-center rounded-xl border border-[var(--glass-border)] bg-[var(--glass-bg)] px-4 py-2 overflow-hidden backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-accent-primary/40 text-foreground/80"
        aria-label="Toggle theme"
        disabled
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent-secondary)]/0 via-[var(--accent-primary)]/15 to-[var(--accent-pink)]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
        <span className="relative z-10">
          <svg
            className="size-5"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        </span>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="group relative inline-flex items-center justify-center rounded-xl border border-[var(--glass-border)] bg-[var(--glass-bg)] px-4 py-2 overflow-hidden backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-accent-primary/40 text-foreground/80"
      aria-label="Toggle theme"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent-secondary)]/0 via-[var(--accent-primary)]/15 to-[var(--accent-pink)]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
      <span className="relative z-10">
        {iconSvg}
      </span>
    </button>
  );
}
