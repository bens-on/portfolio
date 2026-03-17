export default function AboutMe() {
  return (
    <section className="w-full mb-12 sm:mb-16" style={{ marginBottom: 'var(--section-spacing-sm)' }}>
      <div className="w-full rounded-2xl border border-foreground/15 bg-background/60 p-4 sm:p-5 md:p-6 transition-all duration-normal ease-smooth shadow-card hover:shadow-card-hover">
        <h2 
          className="font-header font-semibold tracking-tight text-[var(--foreground)] mb-6 sm:mb-7 md:mb-8 text-2xl sm:text-3xl md:text-4xl"
        >
          About Me
        </h2>
        <div className="space-y-4 sm:space-y-5" style={{ gap: 'var(--content-gap-sm)' }}>
          <p 
            className="text-foreground/80 leading-relaxed"
            style={{
              fontSize: 'var(--body-text-size-sm)',
              lineHeight: 'var(--body-text-line-height)',
            }}
          >
            I&apos;m an incoming Graduate Electrical Engineering Student at Colorado State University, with an expected MSEE in 2027. My focus areas are embedded systems and RF engineering, with a strong interest in aerospace and defense applications.
          </p>
          <p 
            className="text-foreground/80 leading-relaxed"
            style={{
              fontSize: 'var(--body-text-size-sm)',
              lineHeight: 'var(--body-text-line-height)',
            }}
          >
            I lead the payload team for CSU&apos;s NASA University Student Launch Initiative, where I&apos;m designing a deployable payload for soil sampling and analysis. The work spans system architecture, embedded firmware, sensor integration, and environmental constraints, with an emphasis on reliability and testability.
          </p>
          <p 
            className="text-foreground/80 leading-relaxed"
            style={{
              fontSize: 'var(--body-text-size-sm)',
              lineHeight: 'var(--body-text-line-height)',
            }}
          >
            Through internships at FIRST RF, the Bureau of Reclamation, and Woodward, I&apos;ve worked across RF systems, power systems, and aerospace test engineering. I&apos;m comfortable operating at the boundary between hardware and software—moving from schematics and signal chains to firmware and measurements—and I prioritize the rapid iteration of prototypes to validate designs early and often.
          </p>
        </div>
      </div>
    </section>
  );
}
