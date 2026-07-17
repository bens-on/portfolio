import Image from "next/image";
import WaveField from "./WaveField";

export default function HeroIdentity() {
  return (
    <section className="relative w-full overflow-x-hidden pb-20 sm:pb-32 md:pb-40">
      {/* Waves span hero + bleed zone; mask + canvas fade reveal aurora underneath */}
      <div className="pointer-events-none absolute inset-0 wave-field-fade">
        <WaveField className="h-full w-full" />
      </div>

      <div className="relative flex min-h-[72svh] sm:min-h-[78svh] flex-col items-center justify-center px-4 pt-4 sm:pt-2 text-center">
        <div className="relative z-10 flex w-full max-w-3xl flex-col items-center">
          <div className="relative mb-5 sm:mb-8">
            <div
              aria-hidden
              className="absolute left-1/2 top-1/2 h-36 w-36 sm:h-52 sm:w-52 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-2xl"
              style={{ background: "var(--gradient-aurora)" }}
            />
            <div className="relative h-36 w-36 sm:h-52 sm:w-52 md:h-60 md:w-60">
              <Image
                src="/me.png"
                alt="Alex Benson"
                fill
                className="object-contain object-center"
                sizes="(max-width: 640px) 144px, (max-width: 768px) 208px, 240px"
                priority
              />
            </div>
          </div>

          <h1 className="font-header font-bold tracking-tighter leading-[0.9] text-[clamp(2.4rem,11vw,8.5rem)] uppercase">
            <span className="text-gradient-aurora">Alex Benson</span>
          </h1>

          <p className="mt-5 sm:mt-6 max-w-2xl font-header text-lg sm:text-2xl font-medium tracking-tight text-foreground/85">
            Electrical Engineer
          </p>
          <p className="mt-3 max-w-xl font-body text-sm sm:text-base text-foreground/60 leading-relaxed">
            MSEE student at Colorado State building real-time hardware for
            aerospace and energy.
          </p>

          <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-2.5">
            <a
              href="#experience"
              className="rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              See my work
            </a>
            <a
              href="/contact"
              className="rounded-full border border-[var(--glass-border)] bg-[var(--glass-bg)] px-5 py-2.5 text-sm font-medium text-foreground/85 backdrop-blur-md transition-colors hover:bg-[var(--glass-bg-strong)]"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
