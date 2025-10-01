"use client";

import BackLink from "@/components/BackLink";
import Image from "next/image";

export default function USLIPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-10 py-6 sm:py-10">
      <BackLink />
      
      {/* Header */}
      <div className="mt-8 mb-12">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">NASA University Student Launch Initiative (USLI)</h1>
        <h2 className="text-lg sm:text-xl font-semibold text-foreground/80 mb-1">Payload Team Lead – Senior Design Project</h2>
        <p className="text-foreground/60 mb-4">Fall 2025 – Spring 2026 | Colorado State University</p>
        
        {/* Project Image */}
        <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden mb-8 bg-gradient-to-br from-background/90 to-background/70 border border-foreground/10">
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/5 to-transparent"></div>
          <Image
            src="/projects/full_team.jpg"
            alt="NASA USLI Team"
            fill
            className="object-cover relative z-10"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 800px"
          />
        </div>
      </div>

      {/* Overview */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold mb-4">Overview</h3>
        <p className="text-foreground/80 leading-relaxed">
          Leading a 8-member payload team in CSU&apos;s NASA USLI program. The project involves designing a 
          deployable payload system to collect and analyze a soil sample during the March 2026 NASA competition in Huntsville, Alabama.
        </p>
      </section>

      {/* Key Contributions */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold mb-6">Key Contributions (Ongoing)</h3>
        <div className="space-y-6">
          <div className="bg-background/40 rounded-lg p-6 border border-foreground/10">
            <h4 className="font-semibold mb-2">Payload Subsystem Design</h4>
            <p className="text-foreground/80">
              Designed, built, and tested a subscale payload to collect telemetry during proof-of-concept flight. This launch validates payload landing systems and records deployment/landing data. Responsible for electrical system design, including preliminary schematics for the drill mechanism, power budgets reviewed with industry engineers, and initial hardware testing.
            </p>
          </div>
          
          <div className="bg-background/40 rounded-lg p-6 border border-foreground/10">
            <h4 className="font-semibold mb-2">Subscale Payload Firmware</h4>
            <p className="text-foreground/80">
              Developed firmware architecture for payload automation, defining communication protocols, GPIO mapping, and control algorithms for autonomous operation.
            </p>
          </div>
          
          <div className="bg-background/40 rounded-lg p-6 border border-foreground/10">
            <h4 className="font-semibold mb-2">Vehicle Integration</h4>
            <p className="text-foreground/80">
              Collaborating with the vehicle team to ensure payload integration preserves rocket stability and performance for the scheduled fall launch.
            </p>
          </div>
          
          <div className="bg-background/40 rounded-lg p-6 border border-foreground/10">
            <h4 className="font-semibold mb-2">Project Management</h4>
            <p className="text-foreground/80">
              Creating Gantt charts, coordinating electrical and mechanical, and ensuring project milestones are met. Provided Git training resources to the programmers on the team to standardize workflow.
            </p>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold mb-4">Impact</h3>
        <p className="text-foreground/80 leading-relaxed">
          Advancing toward a fully functional payload system for flight demonstration at the NASA USLI 2026 competition—highlighting integration of mechanical, electrical, and control subsystems in a rigorous aerospace setting. This work contributes to NASA&apos;s mission of fostering student-led innovation in launch vehicle design and advancing technologies relevant to future space exploration.
        </p>
      </section>

      {/* Skills */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold mb-4">Skills</h3>
        <div className="flex flex-wrap gap-3">
          {[
            "Team Leadership",
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

      {/* Payload Team Photo */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold mb-6">Payload Team</h3>
        <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-gradient-to-br from-background/90 to-background/70 border border-foreground/10">
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/5 to-transparent"></div>
          <Image
            src="/projects/payload_team.jpg"
            alt="NASA USLI Payload Team"
            fill
            className="object-cover relative z-10 cursor-pointer hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 800px"
            onClick={() => window.open('/projects/payload_team.jpg', '_blank')}
          />
        </div>
        <p className="text-sm text-foreground/60 text-center mt-2">CSU&apos;s payload team for the 2026 NASA USLI competition</p>
      </section>

      {/* Project Images */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold mb-6">Project Photos</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-foreground/5 border border-foreground/10 cursor-pointer hover:scale-105 transition-transform duration-300">
              <Image
                src="/projects/workplace1.png"
                alt="Workplace Photo 1"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                onClick={() => window.open('/projects/workplace1.png', '_blank')}
              />
            </div>
            <p className="text-sm text-foreground/60 text-center">ECE Senior Design Space - 3D printers</p>
          </div>
          <div className="space-y-2">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-foreground/5 border border-foreground/10 cursor-pointer hover:scale-105 transition-transform duration-300">
              <Image
                src="/projects/workplace2.png"
                alt="Workplace Photo 2"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                onClick={() => window.open('/projects/workplace2.png', '_blank')}
              />
            </div>
            <p className="text-sm text-foreground/60 text-center">ECE Senior Design Space - testing bench / soldering station</p>
          </div>
          <div className="space-y-2">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-foreground/5 border border-foreground/10 cursor-pointer hover:scale-105 transition-transform duration-300">
              <Image
                src="/projects/USLI-subscale-schematic.jpeg"
                alt="USLI Subscale Schematic"
                fill
                className="object-contain p-2"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                onClick={() => window.open('/projects/USLI-subscale-schematic.jpeg', '_blank')}
              />
            </div>
            <p className="text-sm text-foreground/60 text-center">Schematic for the subscale project</p>
          </div>
          <div className="space-y-2">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-foreground/5 border border-foreground/10 cursor-pointer hover:scale-105 transition-transform duration-300">
              <Image
                src="/projects/payload_schem_v1.png"
                alt="Proposed Payload Schematic"
                fill
                className="object-contain p-2"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                onClick={() => window.open('/projects/payload_schem.png', '_blank')}
              />
            </div>
            <p className="text-sm text-foreground/60 text-center">Proposed Payload schematic</p>
          </div>
          <div className="space-y-2">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-foreground/5 border border-foreground/10 cursor-pointer hover:scale-105 transition-transform duration-300">
              <Image
                src="/projects/usli-legacy-fullscale.jpeg"
                alt="USLI Legacy Full Scale"
                fill
                className="object-contain p-2"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                onClick={() => window.open('/projects/usli-legacy-fullscale.jpeg', '_blank')}
              />
            </div>
            <p className="text-sm text-foreground/60 text-center">Rocket from last year&apos;s team</p>
          </div>
        </div>
      </section>
    </main>
  );
}


