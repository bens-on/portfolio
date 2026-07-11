export default function AboutMe() {
  return (
    <section className="w-full mb-12 sm:mb-16">
      <div className="glass-panel w-full rounded-2xl p-5 sm:p-6 md:p-8">
        <h2 className="relative z-10 font-header font-semibold tracking-tight text-[var(--foreground)] mb-5 sm:mb-6 text-2xl sm:text-3xl md:text-4xl">
          About Me
        </h2>
        <div className="relative z-10 space-y-4 sm:space-y-5 text-sm sm:text-base leading-relaxed text-foreground/80">
          <p>
            I&apos;m an Electrical Engineering graduate student at Colorado State
            University focused on embedded systems and AI for real-time sensing
            and control in aerospace and industrial environments. I completed my
            B.S. in Electrical Engineering (Aerospace concentration, Mathematics
            minor) in May 2026 and am pursuing an MSEE expected December 2027.
          </p>
          <p>
            This summer I&apos;m back at the Bureau of Reclamation as an Electrical
            Engineering Intern in Power System Analysis &amp; Control. As Payload
            Team Lead for CSU&apos;s NASA University Student Launch Initiative, I led
            a nine-person team through design, build, and flight of a deployable
            soil-sampling payload—and wrote an honors thesis on subsystem
            integration and reliability in high-power rocket payloads.
          </p>
          <p>
            Through roles at FIRST RF, BOR, and Woodward, I&apos;ve worked across RF
            hardware, hydropower controls, and aerospace test engineering. I work
            best close to the hardware—debugging, designing, coding, and iterating.
          </p>
        </div>
      </div>
    </section>
  );
}
