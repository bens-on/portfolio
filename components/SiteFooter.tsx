import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-black/10 dark:border-white/10">
      <div className="mx-auto max-w-6xl p-6 sm:p-10 flex items-center justify-center gap-6">
        <SocialIcon
          href="https://www.linkedin.com/in/alex-benson-c2226"
          label="LinkedIn"
          svg={
            <svg viewBox="0 0 24 24" aria-hidden className="size-5">
              <path fill="currentColor" d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8.1h4V24h-4V8.1zM8.9 8.1h3.8v2.16h.05c.53-1 1.83-2.16 3.77-2.16 4.03 0 4.77 2.65 4.77 6.1V24h-4v-7.62c0-1.82-.03-4.16-2.53-4.16-2.53 0-2.91 1.98-2.91 4.03V24h-4V8.1z"/>
            </svg>
          }
        />
        <SocialIcon
          href="https://github.com/bens-on"
          label="GitHub"
          svg={
            <svg viewBox="0 0 24 24" aria-hidden className="size-5">
              <path fill="currentColor" d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.49 0-.24-.01-.88-.01-1.72-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .85-.28 2.8 1.05.81-.23 1.68-.35 2.55-.35.87 0 1.74.12 2.55.35 1.95-1.33 2.8-1.05 2.8-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.95.68 1.92 0 1.39-.01 2.51-.01 2.85 0 .27.18.6.68.49A10.06 10.06 0 0 0 22 12.26C22 6.58 17.52 2 12 2z"/>
            </svg>
          }
        />
        <SocialIcon
          href="mailto:alexander.benson@me.com"
          label="Email"
          svg={
            <svg viewBox="0 0 24 24" aria-hidden className="size-5">
              <path fill="currentColor" d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m0 4-8 5-8-5V6l8 5 8-5z"/>
            </svg>
          }
        />
      </div>
    </footer>
  );
}

function SocialIcon({ href, label, svg }: { href: string; label: string; svg: React.ReactNode }) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="group relative inline-flex items-center gap-2 rounded-xl border border-black/10 dark:border-white/10 bg-background/60 px-4 py-2 overflow-hidden"
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/0 via-cyan-400/10 to-fuchsia-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
      <span className="relative z-10 text-foreground/80">{svg}</span>
      <span className="relative z-10 text-sm">{label}</span>
    </Link>
  );
}


