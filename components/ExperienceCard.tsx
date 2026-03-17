import Image from "next/image";
import Link from "next/link";

export type Experience = {
  title: string;
  company: string;
  duration: string;
  description: string;
  skills: string[];
  imageSrc?: string;
  href?: string;
  className?: string;
};

export default function ExperienceCard({ title, company, duration, description, skills, imageSrc, href, className }: Experience) {
  const coverSrc = imageSrc ?? "/projects/placeholder.svg";
  const content = (
    <div className={`group relative flex flex-col rounded-2xl border border-foreground/15 bg-background/60 overflow-hidden hover:shadow-card-hover transition-all duration-normal ease-smooth ${className || ''}`}>
      <div className="relative aspect-[16/9] sm:aspect-[4/3] w-full overflow-hidden">
        <Image
          src={coverSrc}
          alt={company}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-slow ease-smooth"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-card-overlay" />
      </div>
      <div className="p-4 sm:p-5">
        <h3 className="text-base sm:text-lg font-semibold tracking-tight leading-tight">{title}</h3>
        <p className="mt-1 text-sm font-medium text-foreground/90">{company}</p>
        <p className="mt-1 text-xs text-foreground/60">{duration}</p>
        <p className="mt-2 text-sm text-foreground/80 leading-relaxed">{description}</p>
        <ul className="mt-3 flex flex-wrap gap-1.5 sm:gap-2">
          {skills.map((skill) => (
            <li
              key={skill}
              className="text-xs rounded-full border border-foreground/15 px-2 py-0.5 text-foreground/70"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
      {href ? (
        <div className="absolute right-3 top-3 rounded-full bg-background/95 px-2 py-1 text-xs text-white font-medium border border-foreground/15 shadow-sm">
          View
        </div>
      ) : null}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block focus:outline-none focus:ring-2 focus:ring-accent-primary/40 rounded-2xl">
        {content}
      </Link>
    );
  }
  return content;
}
