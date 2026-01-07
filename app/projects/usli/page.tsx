"use client";

import BackLink from "@/components/BackLink";
import Image from "next/image";

export default function USLIPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-10 py-6 sm:py-10 pt-20 sm:pt-24">
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
        <p className="text-foreground/80 leading-relaxed mb-4">
          Leading an 8-member payload team in CSU&apos;s NASA USLI Senior Design Team. The project involves designing a 
          deployable payload system to collect and analyze a soil sample during the April 2026 NASA competition in Huntsville, Alabama.
        </p>
        <p className="text-foreground/80 leading-relaxed">
          Responsibilities include overseeing electrical and firmware development, coordinating with mechanical and vehicle teams, and 
          managing project timelines to ensure successful integration and testing ahead of the launch. As the only electrical engineer on 
          the payload team, I&apos;m deeply involved in system design, component selection, and testing to meet mission requirements.
        </p>
      </section>

      {/* Key Contributions */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold mb-6">Key Contributions (Ongoing)</h3>
        <div className="space-y-6">
          <div className="bg-background/40 rounded-lg p-6 border border-foreground/10" style={{ borderRadius: 'var(--radius-lg)', padding: 'var(--spacing-lg)' }}>
            <h4 className="font-semibold mb-2">Payload Subsystem Design</h4>
            <p className="text-foreground/80">
              Designed, built, and tested a subscale payload to collect telemetry during proof-of-concept flight. This launch validates payload landing systems and records deployment/landing data. Responsible for electrical system design, including preliminary schematics for the drill mechanism, power budgets reviewed with industry engineers, and initial hardware testing.
            </p>
          </div>
          
          <div className="bg-background/40 rounded-lg p-6 border border-foreground/10" style={{ borderRadius: 'var(--radius-lg)', padding: 'var(--spacing-lg)' }}>
            <h4 className="font-semibold mb-2">Subscale Payload Firmware</h4>
            <p className="text-foreground/80">
              Developed firmware architecture for payload automation, defining communication protocols, GPIO mapping, and control algorithms for autonomous operation.
            </p>
          </div>
          
          <div className="bg-background/40 rounded-lg p-6 border border-foreground/10" style={{ borderRadius: 'var(--radius-lg)', padding: 'var(--spacing-lg)' }}>
            <h4 className="font-semibold mb-2">Vehicle Integration</h4>
            <p className="text-foreground/80">
              Collaborating with the vehicle team to ensure payload integration preserves rocket stability and performance for the scheduled fall launch.
            </p>
          </div>
          
          <div className="bg-background/40 rounded-lg p-6 border border-foreground/10" style={{ borderRadius: 'var(--radius-lg)', padding: 'var(--spacing-lg)' }}>
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
              style={{ borderRadius: 'var(--radius-full)' }}
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* L1 Certification Highlight */}
      <section className="mb-12">
        <div className="bg-background/40 rounded-lg p-6 border border-foreground/10 hover:border-foreground/20 transition-colors" style={{ borderRadius: 'var(--radius-lg)', padding: 'var(--spacing-lg)' }}>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h4 className="font-semibold mb-2">Level 1 High Power Rocketry (L1 HPR) Certification</h4>
              <p className="text-foreground/80 text-sm">
                Successfully obtained L1 HPR certification through building and launching my own high-power rocket. 
                This hands-on experience with rocket construction, recovery systems, and launch operations directly 
                informs my work on the USLI payload team.
              </p>
            </div>
            <a 
              href="/projects/l1-certification"
              className="inline-flex items-center gap-2 px-4 py-2 bg-foreground text-background rounded-lg hover:bg-foreground/90 transition-colors text-sm font-medium whitespace-nowrap"
            >
              View L1 Certification
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
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
        
        {/* Early Development */}
        <div className="mb-12">
          <h4 className="text-lg font-medium mb-4 text-foreground/90">Early Development</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <div className="relative aspect-[4/3] w-full overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300">
                <Image
                  src="/projects/usli-updates/sensor_test.jpeg"
                  alt="Original breadboard testing of sensors"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                  onClick={() => window.open('/projects/usli-updates/sensor_test.jpeg', '_blank')}
                />
              </div>
              <p className="text-sm text-foreground/60 text-center">Original breadboard testing of all sensors included on the final competition payload</p>
            </div>
          </div>
        </div>

        {/* Prototype 1: Subscale Electronics Development */}
        <div className="mb-12">
          <h4 className="text-lg font-medium mb-4 text-foreground/90">Prototype 1: Subscale Electronics Development</h4>
          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-0 overflow-hidden">
              <div className="relative aspect-[3/4] md:aspect-[4/3] md:col-span-2 overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300">
                <Image
                  src="/projects/subscale_electronics_p1/p1_1.JPG"
                  alt="Prototype 1 subscale electronics development"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, 400px"
                  onClick={() => window.open('/projects/subscale_electronics_p1/p1_1.JPG', '_blank')}
                />
              </div>
              <div className="relative aspect-[4/3] md:aspect-[4/3] md:col-span-2 overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300">
                <Image
                  src="/projects/subscale_electronics_p1/p1_2.JPG"
                  alt="Prototype 1 subscale electronics development"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, 400px"
                  onClick={() => window.open('/projects/subscale_electronics_p1/p1_2.JPG', '_blank')}
                />
              </div>
              <div className="relative aspect-[3/4] md:aspect-[4/3] md:col-span-4 overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300">
                <Image
                  src="/projects/subscale_electronics_p1/p1_3.JPG"
                  alt="Prototype 1 subscale electronics development"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 800px"
                  onClick={() => window.open('/projects/subscale_electronics_p1/p1_3.JPG', '_blank')}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Prototype 2: Subscale Testing and Deployment */}
        <div className="mb-12">
          <h4 className="text-lg font-medium mb-4 text-foreground/90">Prototype 2: Subscale Testing and Deployment</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-foreground/5 cursor-pointer hover:scale-105 transition-transform duration-300">
                <Image
                  src="/projects/usli-updates/subscale_electronics.png"
                  alt="Subscale electronics front-facing photo"
                  fill
                  className="object-contain p-2"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                  onClick={() => window.open('/projects/usli-updates/subscale_electronics.png', '_blank')}
                />
              </div>
              <p className="text-sm text-foreground/60 text-center">Subscale electronics, front-facing, that was in the payload body for subscale launches 1 and 2. Collects real-time clock data, altitude data, payload internal temperature, barometric pressure, and stores it to a microSD card. A buzzer is used as an indicator and a tactile button as a toggle.</p>
            </div>
            <div className="space-y-2">
              <div className="relative aspect-[4/3] w-full overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300">
                <Image
                  src="/projects/usli-updates/subscale1_assmebly.jpeg"
                  alt="Subscale 1 rocket assembly"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                  onClick={() => window.open('/projects/usli-updates/subscale1_assmebly.jpeg', '_blank')}
                />
              </div>
              <p className="text-sm text-foreground/60 text-center">Subscale 1 rocket being assembled</p>
            </div>
            <div className="space-y-2">
              <div className="relative aspect-[4/3] w-full overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300">
                <Image
                  src="/projects/usli-updates/recovery_subscale1.jpeg"
                  alt="Payload recovery after deployment"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                  onClick={() => window.open('/projects/usli-updates/recovery_subscale1.jpeg', '_blank')}
                />
              </div>
              <p className="text-sm text-foreground/60 text-center">Payload landing after deployment at the test site in Hartsel. The parachute burnt up when the black powder charges fired, causing parachute failure. However, the deployment of the payload body was successful. The payload orientation system worked nominally and suffered no damages. The microSD card from this first launch was lost at this location but was not recovered.</p>
            </div>
            <div className="space-y-2">
              <div className="relative aspect-[4/3] w-full overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300">
                <Image
                  src="/projects/usli-updates/Altitude.png"
                  alt="Altitude drift data from BMP280"
                  fill
                  className="object-contain bg-foreground/5 p-2"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                  onClick={() => window.open('/projects/usli-updates/Altitude.png', '_blank')}
                />
              </div>
              <p className="text-sm text-foreground/60 text-center">Altitude drift of the BMP280 sensor over time (5 hour span)</p>
            </div>
          </div>
        </div>

        {/* CDR Design: MOLEA System */}
        <div className="mb-12">
          <h4 className="text-lg font-medium mb-4 text-foreground/90">CDR Design: MOLEA System</h4>
          <p className="text-sm text-foreground/70 mb-4">MOLEA stands for Mechanical Operations for Layered Extraction and Analysis. Design as of Critical Design Review (CDR).</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <div className="relative aspect-[4/3] w-full overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300">
                <Image
                  src="/projects/usli-updates/MOLEA_schematic.png"
                  alt="MOLEA schematic - newest revision of competition payload"
                  fill
                  className="object-contain bg-foreground/5 p-2"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                  onClick={() => window.open('/projects/usli-updates/MOLEA_schematic.png', '_blank')}
                />
              </div>
              <p className="text-sm text-foreground/60 text-center">Newest revision of the competition payload. This is the brain of the payload. There are other components in the power block, but the specific circuitry we are using is kept private.</p>
            </div>
            <div className="space-y-2">
              <div className="relative aspect-[4/3] w-full overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300">
                <Image
                  src="/projects/usli-updates/block_diagram.png"
                  alt="Electrical block diagram for MOLEA system"
                  fill
                  className="object-contain bg-foreground/5 p-2"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                  onClick={() => window.open('/projects/usli-updates/block_diagram.png', '_blank')}
                />
              </div>
              <p className="text-sm text-foreground/60 text-center">Electrical block diagram for the MOLEA system</p>
            </div>
            <div className="space-y-2 md:col-span-2">
              <div className="relative aspect-[16/9] w-full overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300">
                <Image
                  src="/projects/usli-updates/power_architecture.png"
                  alt="Power architecture block diagram"
                  fill
                  className="object-contain bg-foreground/5 p-2"
                  sizes="(max-width: 640px) 100vw, 800px"
                  onClick={() => window.open('/projects/usli-updates/power_architecture.png', '_blank')}
                />
              </div>
              <p className="text-sm text-foreground/60 text-center">Power architecture block diagram, focused on the power rails</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="mt-16 mb-12 p-6 bg-foreground/5 rounded-xl border border-foreground/10">
        <h2 className="text-lg font-semibold tracking-tight mb-2">Questions About This Project?</h2>
        <p className="text-foreground/80 mb-4">
          Due to the nature of this work, I can&apos;t show everything on this website. If you have questions about 
          the technical details, design decisions, or the work that went into this project, feel free to reach out!
        </p>
        <div className="flex flex-wrap gap-3">
          <a 
            href="mailto:alexander.benson@me.com?subject=Question about USLI Project" 
            className="inline-flex items-center gap-2 px-4 py-2 bg-foreground text-background rounded-lg hover:bg-foreground/90 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Send Email
          </a>
          <a 
            href="/contact" 
            className="inline-flex items-center gap-2 px-4 py-2 border border-foreground/20 rounded-lg hover:bg-foreground/5 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            View Contact Page
          </a>
        </div>
      </section>
    </main>
  );
}


