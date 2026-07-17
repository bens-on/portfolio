import BackLink from "@/components/BackLink";

export default function BORExperiencePage() {
  return (
    <main className="mx-auto max-w-4xl p-6 sm:p-10 pt-20 sm:pt-24">
      <BackLink />

      <div className="mt-8">
        <span className="inline-block rounded-full border border-[var(--accent-primary)]/40 bg-[var(--accent-primary)]/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-[var(--accent-primary-light)] mb-3">
          Current
        </span>
        <h1 className="font-header text-2xl sm:text-3xl font-bold tracking-tight mb-2">
          Bureau of Reclamation, U.S. Department of the Interior
        </h1>
        <h2 className="text-xl font-semibold text-foreground/80 mb-1">
          Electrical Engineering Intern – Power Systems Analysis &amp; Control
        </h2>
        <p className="text-foreground/60">May 2026 – Present | Lakewood, CO</p>
      </div>

      <div className="mt-12 glass-panel rounded-2xl p-8 sm:p-12 text-center">
        <p className="relative z-10 font-body text-sm sm:text-base text-foreground/50">
          Details coming soon.
        </p>
      </div>
    </main>
  );
}
