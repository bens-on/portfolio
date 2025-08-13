import Image from "next/image";
import Link from "next/link";

export type Project = {
  title: string;
  description: string;
  tech: string[];
  imageSrc?: string;
  href?: string;
};

export default function ProjectCard({ title, description, tech, imageSrc, href }: Project) {
  const coverSrc = imageSrc ?? "/projects/placeholder.svg";
  const content = (
    <div className="group relative flex flex-col rounded-2xl border border-black/10 dark:border-white/10 bg-background/60 overflow-hidden hover:shadow-xl transition-shadow">
      <div className="relative h-40 w-full overflow-hidden">
        <Image
          src={coverSrc}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(min-width: 640px) 33vw, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
        <p className="mt-1 text-sm text-foreground/80">{description}</p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {tech.map((t) => (
            <li
              key={t}
              className="text-xs rounded-full border border-foreground/15 px-2 py-0.5 text-foreground/70"
            >
              {t}
            </li>
          ))}
        </ul>
      </div>
      {href ? (
        <div className="absolute right-3 top-3 rounded-full bg-background/70 px-2 py-1 text-xs text-foreground/70 border border-foreground/10">
          View
        </div>
      ) : null}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block focus:outline-none focus:ring-2 focus:ring-cyan-400/40 rounded-2xl">
        {content}
      </Link>
    );
  }
  return content;
}


