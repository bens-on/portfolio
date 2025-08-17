import BackLink from "@/components/BackLink";
import Image from "next/image";

export default function USLIPage() {
  return (
    <main className="mx-auto max-w-4xl p-6 sm:p-10">
      <BackLink />
      
      {/* Header */}
      <div className="mt-8 mb-12">
        <h1 className="text-3xl font-bold tracking-tight mb-2">NASA University Student Launch Initiative (USLI)</h1>
        <h2 className="text-xl font-semibold text-foreground/80 mb-1">Payload Team Lead – Senior Design Project</h2>
        <p className="text-foreground/60 mb-4">Fall 2025 – Spring 2026 | Colorado State University</p>
        
        {/* Project Image */}
        <div className="relative h-48 w-full rounded-xl overflow-hidden mb-8">
          <Image
            src="/projects/rocket-model.png"
            alt="NASA USLI Payload"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Overview */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold mb-4">Overview</h3>
        <p className="text-foreground/80 leading-relaxed">
          Leading a 4-member payload team in CSU&apos;s NASA USLI program. The project involves designing a 
          deployable system to collect and analyze a soil sample during a March 2026 L2 rocket launch.
        </p>
      </section>

      {/* Key Contributions */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold mb-6">Key Contributions (Ongoing)</h3>
        <div className="space-y-6">
          <div className="bg-background/40 rounded-lg p-6 border border-foreground/10">
            <h4 className="font-semibold mb-2">Payload Subsystem Design</h4>
            <p className="text-foreground/80">
              Design, built, and tested a payload capable of collecting telemetry data to be used for analysis post subscale launch.
            </p>
          </div>
          
          <div className="bg-background/40 rounded-lg p-6 border border-foreground/10">
            <h4 className="font-semibold mb-2">Subscale Payload Firmware</h4>
            <p className="text-foreground/80">
              Wrote device drivers for the subscale payloads components.
            </p>
          </div>
          
          <div className="bg-background/40 rounded-lg p-6 border border-foreground/10">
            <h4 className="font-semibold mb-2">Vehicle Integration</h4>
            <p className="text-foreground/80">
              Ongoing collaboration with the vehicle team to ensure payload integration maintains rocket performance and stability for a late fall launch.
            </p>
          </div>
          
          <div className="bg-background/40 rounded-lg p-6 border border-foreground/10">
            <h4 className="font-semibold mb-2">Testing Coordination</h4>
            <p className="text-foreground/80">
              Coordinating testing plans for deployment reliability, data collection, and sample handling.
            </p>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold mb-4">Impact</h3>
        <p className="text-foreground/80 leading-relaxed">
          Establishing a fully functional payload system for flight demonstration at NASA USLI 2026, 
          showcasing integration of mechanical, electrical, and control systems in a high-stakes aerospace environment.
        </p>
      </section>

      {/* Skills */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold mb-4">Skills</h3>
        <div className="flex flex-wrap gap-3">
          {[
            "Systems Engineering",
            "Payload Design", 
            "Team Leadership",
            "Aerospace Integration",
            "Embedded Systems",
            "Testing & Validation"
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

      {/* Project Images */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold mb-6">Project Photos</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <div className="relative h-64 rounded-xl overflow-hidden bg-foreground/5 border border-foreground/10">
              <Image
                src="/projects/USLI-subscale-schematic.jpeg"
                alt="USLI Subscale Schematic"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-sm text-foreground/60 text-center">Schematic for the subscale project</p>
          </div>
          <div className="space-y-2">
            <div className="relative h-64 rounded-xl overflow-hidden bg-foreground/5 border border-foreground/10">
              <Image
                src="/projects/usli-legacy-fullscale.jpeg"
                alt="USLI Legacy Full Scale"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-sm text-foreground/60 text-center">Rocket from last year&apos;s team</p>
          </div>
        </div>
      </section>
    </main>
  );
}


