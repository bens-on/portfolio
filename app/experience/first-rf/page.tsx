import BackLink from "@/components/BackLink";
import Image from "next/image";

export default function FirstRFExperiencePage() {
  return (
    <main className="mx-auto max-w-4xl p-6 sm:p-10 pt-20 sm:pt-24">
      <BackLink />
      
      {/* Header */}
      <div className="mt-8 mb-12">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">FIRST RF</h1>
        <h2 className="text-xl font-semibold text-foreground/80 mb-1">Embedded Systems Engineering Intern</h2>
        <p className="text-foreground/60 mb-4">May 2025 – Aug 2025 | Boulder, CO</p>
        
        {/* Company Image */}
        <div className="relative w-full rounded-xl overflow-hidden mb-8">
          <Image
            src="/projects/interns_ffrange.jpeg"
            alt="FIRST RF"
            width={1200}
            height={800}
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Overview */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold mb-4">Overview</h3>
        <p className="text-foreground/80 leading-relaxed">
          At FIRST RF, I worked on embedded systems for a half-duplex phased array system enabling land and maritime connectivity. 
          My role bridged RF hardware, embedded software, and RF engineering fundamentals to deliver a working system.
        </p>
      </section>

      {/* Key Contributions */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold mb-6">Key Contributions</h3>
        <div className="space-y-6">
          <div className="bg-background/40 rounded-lg p-6 border border-foreground/10" style={{ borderRadius: 'var(--radius-lg)', padding: 'var(--spacing-lg)' }}>
            <h4 className="font-semibold mb-2">Phased Array Communication System</h4>
            <p className="text-foreground/80">
              Co-developed a phased array communication system for military grade platforms.
            </p>
          </div>
          
          <div className="bg-background/40 rounded-lg p-6 border border-foreground/10" style={{ borderRadius: 'var(--radius-lg)', padding: 'var(--spacing-lg)' }}>
            <h4 className="font-semibold mb-2">PCB Design & Signal Integrity</h4>
            <p className="text-foreground/80">
              Designed multilayer PCB layouts in Altium, performing transmission-line calculations and 
              stackup tuning to ensure GHz-range signal integrity.
            </p>
          </div>
          
          <div className="bg-background/40 rounded-lg p-6 border border-foreground/10" style={{ borderRadius: 'var(--radius-lg)', padding: 'var(--spacing-lg)' }}>
            <h4 className="font-semibold mb-2">Embedded Software Development</h4>
            <p className="text-foreground/80">
              Authored cross-platform SPI drivers in C for Zephyr RTOS to control active RF components.
            </p>
          </div>
          
        </div>
      </section>

      {/* Impact */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold mb-4">Impact</h3>
        <p className="text-foreground/80 leading-relaxed">
          Strengthened experience in RF systems and embedded development, while improving workflows 
          for both hardware and software integration.
        </p>
      </section>

      {/* Skills */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold mb-4">Skills</h3>
        <div className="flex flex-wrap gap-3">
          {[
            "RF Engineering",
            "Embedded Systems", 
            "PCB Design",
            "Altium",
            "Python",
            "Zephyr RTOS",
            "SPI"
          ].map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 bg-foreground/10 text-foreground/80 rounded-full text-sm border border-foreground/20"
              style={{ borderRadius: 'var(--radius-full)' }}
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Experience Images */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold mb-6">Experience Photos</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <div className="relative h-64 rounded-xl overflow-hidden bg-foreground/5 border border-foreground/10">
              <Image
                src="/projects/footprint.jpeg"
                alt="FIRST RF Work Environment"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-sm text-foreground/60 text-center">Footprint of component that we used in component specific boards in testing RF qualities.</p>
          </div>
          <div className="space-y-2">
            <div className="relative h-64 rounded-xl overflow-hidden bg-foreground/5 border border-foreground/10">
              <Image
                src="/projects/testing.jpeg"
                alt="RF Engineering Work"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-sm text-foreground/60 text-center">Testing setup for a high power amplifier.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
