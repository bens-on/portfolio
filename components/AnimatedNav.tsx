import Link from "next/link";

type NavItem = {
  label: string;
  href: string;
};

type AnimatedNavProps = {
  items: NavItem[];
};

export default function AnimatedNav({ items }: AnimatedNavProps) {
  return (
    <nav className="relative w-full flex justify-center">
      <ul className="grid grid-cols-2 gap-3 sm:gap-4 w-full max-w-lg">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="group relative block rounded-xl border border-black/10 dark:border-white/10 bg-background/60 px-4 sm:px-5 py-3 sm:py-4 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/0 via-cyan-400/10 to-fuchsia-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              <span className="relative z-10 font-medium text-sm sm:text-base">
                {item.label}
              </span>
              <span className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-foreground/40 group-hover:text-foreground transition-colors">→</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}


