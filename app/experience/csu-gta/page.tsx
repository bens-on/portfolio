import BackLink from "@/components/BackLink";
import Image from "next/image";

export default function CSUGTAExperiencePage() {
  return (
    <main className="mx-auto max-w-4xl p-6 sm:p-10 pt-20 sm:pt-24">
      <BackLink />

      {/* Header */}
      <div className="mt-8 mb-12">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">Colorado State University</h1>
        <h2 className="text-xl font-semibold text-foreground/80 mb-1">Graduate Teaching Assistant – ECE205 Analog Circuits</h2>
        <p className="text-foreground/60 mb-4">Aug 2026 – Present | Fort Collins, CO</p>

        {/* Company Image */}
        <div className="relative h-48 w-full rounded-xl overflow-hidden mb-8">
          <Image
            src="/projects/Campus-aerial.jpeg"
            alt="Colorado State University"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Overview */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold mb-4">Overview</h3>
        <p className="text-foreground/80 leading-relaxed">
          Serving as a Graduate Teaching Assistant for CSU&apos;s ECE205 Analog Circuits
          course, leading lab instruction and supporting students through circuit
          analysis and lab work.
        </p>
      </section>

      {/* Key Contributions */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold mb-6">Key Contributions</h3>
        <div className="space-y-6">
          <div className="glass-panel rounded-xl p-5 sm:p-6">
            <h4 className="font-semibold mb-2">Lab Sections</h4>
            <p className="text-foreground/80">
              Lead three ECE205 Analog Circuits lab sections, teaching measurement,
              analysis, and experimental procedure.
            </p>
          </div>

          <div className="glass-panel rounded-xl p-5 sm:p-6">
            <h4 className="font-semibold mb-2">Weekly Office Hours</h4>
            <p className="text-foreground/80">
              Host weekly office hours for one-on-one help with homework, lab
              reports, and exam preparation.
            </p>
          </div>

          <div className="glass-panel rounded-xl p-5 sm:p-6">
            <h4 className="font-semibold mb-2">Student Support</h4>
            <p className="text-foreground/80">
              Support students through analog circuit analysis and lab work as
              needed throughout the semester.
            </p>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold mb-4">Impact</h3>
        <p className="text-foreground/80 leading-relaxed">
          Strengthened ability to explain analog circuit concepts clearly while
          reinforcing foundations in circuit analysis, measurement, and lab
          instruction.
        </p>
      </section>

      {/* Skills */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold mb-4">Skills</h3>
        <div className="flex flex-wrap gap-3">
          {[
            "Analog Circuits",
            "Lab Instruction",
            "Teaching",
            "Circuit Analysis",
            "Office Hours",
          ].map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 bg-foreground/10 text-foreground/80 rounded-full text-sm border border-foreground/20"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
    </main>
  );
}
