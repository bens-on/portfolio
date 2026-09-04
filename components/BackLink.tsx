import Link from "next/link";

export default function BackLink({ href = "/" }: { href?: string }) {
  return (
    <div className="mt-4">
      <Link
        href={href}
        className="group relative inline-block rounded-xl border border-[var(--glass-border)] bg-[var(--glass-bg)] px-4 py-2 overflow-hidden backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-accent-primary/40"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent-secondary)]/0 via-[var(--accent-primary)]/15 to-[var(--accent-pink)]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
        <span className="relative z-10">← Back</span>
      </Link>
    </div>
  );
}
