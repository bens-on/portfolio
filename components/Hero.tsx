import Image from "next/image";

type HeroProps = {
  name: string;
  title: string;
  subtitle?: string;
  headshotSrc: string;
};

export default function Hero({ name, title, subtitle, headshotSrc }: HeroProps) {
  return (
    <section className="relative py-8 sm:py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex justify-center">
          <div className="flex flex-row items-center gap-6 sm:gap-8 lg:gap-12">
            {/* Image on the right */}
            <div className="relative size-32 sm:size-48 lg:size-56 flex-shrink-0 group">
              {/* Subtle glow effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-foreground/10 via-foreground/18 to-foreground/10 rounded-full blur-lg opacity-55 group-hover:opacity-75 transition-opacity duration-500 animate-pulse"></div>
              
              {/* Main container with natural blending */}
              <div className="relative size-full overflow-hidden rounded-full bg-gradient-to-br from-background/80 to-background/60 backdrop-blur-sm shadow-[0_4px_20px_rgba(0,0,0,0.15)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
                {/* Subtle texture overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-foreground/3 to-transparent"></div>
                
                {/* Very subtle animated accent */}
                <div className="absolute inset-0 opacity-30">
                  <div className="absolute top-2 right-2 w-2 h-2 bg-foreground/10 rounded-full animate-pulse delay-1000"></div>
                </div>
                
                {/* Soft hover enhancement */}
                <div className="absolute inset-0 bg-gradient-to-t from-transparent to-foreground/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <Image
                  src={headshotSrc}
                  alt={`${name} headshot`}
                  fill
                  className="object-cover object-[center_20%] p-1 relative z-10 group-hover:scale-[1.02] transition-transform duration-500 scale-105"
                  sizes="(max-width: 640px) 128px, (max-width: 1024px) 192px, 224px"
                  priority
                />
              </div>
            </div>
            
            {/* Text on the left */}
            <div className="text-center sm:text-left">
              <h1 className="text-xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight animate-fade-in-up">
                {name}
              </h1>
              <p className="mt-2 sm:mt-3 text-sm sm:text-base lg:text-lg text-foreground/80 leading-relaxed animate-fade-in-up animation-delay-200">
                {title}
              </p>
              {subtitle && (
                <p className="mt-1 sm:mt-2 text-sm sm:text-base text-foreground/60 leading-relaxed animate-fade-in-up animation-delay-400">
                  {subtitle}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


