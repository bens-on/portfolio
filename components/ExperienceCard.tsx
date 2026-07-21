import Image from "next/image";
import Link from "next/link";

export type Experience = {
  title: string;
  company: string;
  duration: string;
  description: string;
  skills: string[];
  imageSrc?: string;
  imageContain?: boolean;
  href?: string;
  className?: string;
  current?: boolean;
};

export default function ExperienceCard({
  title,
  company,
  duration,
  description,
  skills,
  imageSrc,
  imageContain,
  href,
  className,
  current,
}: Experience) {
  const coverSrc = imageSrc ?? "/projects/placeholder.svg";
  const content = (
    <div
      className={`group glass-card relative flex flex-col rounded-2xl ${className || ""}`}
    >
      <div
        className={`relative aspect-[16/9] sm:aspect-[4/3] w-full overflow-hidden ${
          imageContain ? "bg-[#0B121E]" : ""
        }`}
      >
        <Image
          src={coverSrc}
          alt={company}
          fill
          className={`${
            imageContain
              ? "object-contain p-6 sm:p-8 group-hover:scale-[1.02]"
              : "object-cover group-hover:scale-105"
          } transition-transform duration-slow ease-smooth`}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-card-overlay" />
        {current ? (
          <span className="absolute left-3 top-3 z-10 rounded-full border border-[var(--accent-primary)]/40 bg-[var(--accent-primary)]/20 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-[var(--accent-primary-light)] backdrop-blur-md">
            Current
          </span>
        ) : null}
      </div>
      <div className="relative z-10 p-4 sm:p-5">
        <h3 className="font-header text-base sm:text-lg font-semibold tracking-tight leading-tight">
          {title}
        </h3>
        <p className="mt-1 text-sm font-medium text-foreground/90">{company}</p>
        <p className="mt-1 text-xs font-body text-foreground/60">{duration}</p>
        <p className="mt-2 text-sm text-foreground/80 leading-relaxed">{description}</p>
        <ul className="mt-3 flex flex-wrap gap-1.5 sm:gap-2">
          {skills.map((skill) => (
            <li
              key={skill}
              className="text-xs rounded-full border border-[var(--glass-border)] bg-white/5 px-2 py-0.5 text-foreground/70"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
      {href ? (
        <div className="absolute right-3 top-3 z-10 rounded-full border border-[var(--glass-border)] bg-[var(--glass-bg-strong)] px-2.5 py-1 text-xs font-medium text-foreground/90 backdrop-blur-md shadow-sm">
          View
        </div>
      ) : null}
    </div>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="block focus:outline-none focus:ring-2 focus:ring-accent-primary/40 rounded-2xl"
      >
        {content}
      </Link>
    );
  }
  return content;
}
