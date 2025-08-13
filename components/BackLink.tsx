import Link from "next/link";

export default function BackLink() {
  return (
    <div className="mt-4">
      <Link
        href="/"
        className="group relative inline-block rounded-xl border border-black/10 dark:border-white/10 bg-background/60 px-4 py-2 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/0 via-cyan-400/10 to-fuchsia-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
        <span className="relative z-10">← Back </span>
      </Link>
    </div>
  );
}


