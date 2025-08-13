import Image from "next/image";

type HeroProps = {
  name: string;
  title: string;
  subtitle?: string;
  headshotSrc: string;
};

export default function Hero({ name, title, subtitle, headshotSrc }: HeroProps) {
  return (
    <section className="relative py-6 sm:py-8">
      <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
        <div className="text-center sm:text-right">
          <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight">
            {name}
          </h1>
          <p className="mt-2 text-sm sm:text-base text-foreground/80">
            {title}
          </p>
          {subtitle && (
            <p className="mt-1 text-sm sm:text-base text-foreground/60">
              {subtitle}
            </p>
          )}
        </div>
        <div className="relative size-40 sm:size-48 lg:size-65 shadow-xl overflow-hidden">
          <Image
            src={headshotSrc}
            alt={`${name} headshot`}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 176px, (max-width: 1024px) 208px, 240px"
            priority
          />
        </div>
      </div>
    </section>
  );
}


