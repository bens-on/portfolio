import BackLink from "@/components/BackLink";
import Image from "next/image";

function GlassBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="glass-panel rounded-xl p-5 sm:p-6">
      <h4 className="relative z-10 font-semibold mb-2">{title}</h4>
      <p className="relative z-10 text-foreground/80">{children}</p>
    </div>
  );
}

export default function BORExperiencePage() {
  return (
    <main className="mx-auto max-w-4xl p-6 sm:p-10 pt-20 sm:pt-24">
      <BackLink />

      <div className="mt-8 mb-12">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="rounded-full border border-[var(--accent-primary)]/40 bg-[var(--accent-primary)]/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-[var(--accent-primary-light)]">
            Current + Prior
          </span>
        </div>
        <h1 className="font-header text-2xl sm:text-3xl font-bold tracking-tight mb-2">
          Bureau of Reclamation, U.S. Department of the Interior
        </h1>
        <h2 className="text-xl font-semibold text-foreground/80 mb-1">
          Electrical Engineering Intern – Power Systems Analysis &amp; Control
        </h2>
        <p className="text-foreground/60 mb-1">May 2026 – Present | Lakewood, CO</p>
        <p className="text-foreground/60 mb-4">May 2024 – Feb 2025 | Lakewood, CO</p>

        <div className="relative w-full rounded-2xl overflow-hidden mb-8 border border-[var(--glass-border)]">
          <Image
            src="/projects/buffbill.jpeg"
            alt="Bureau of Reclamation"
            width={1200}
            height={800}
            className="w-full h-auto"
          />
        </div>
      </div>

      <section className="mb-12">
        <h3 className="font-header text-xl font-semibold mb-4">Overview</h3>
        <div className="glass-panel rounded-2xl p-5 sm:p-6 space-y-4">
          <p className="relative z-10 text-foreground/80 leading-relaxed">
            I returned to the Bureau of Reclamation in summer 2026 as an Electrical
            Engineering Intern in the Power System Analysis &amp; Control group—the
            same team I worked with from May 2024 through February 2025.
          </p>
          <p className="relative z-10 text-foreground/80 leading-relaxed">
            Across both engagements I&apos;ve supported hydropower operations across
            the western U.S., focusing on governor and excitation compliance,
            embedded control software, and field instrumentation for plant testing.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h3 className="font-header text-xl font-semibold mb-6">Key Contributions</h3>
        <div className="space-y-4">
          <GlassBlock title="Compliance Testing">
            Tested hydropower governor and excitation control systems for WECC and
            NERC compliance.
          </GlassBlock>
          <GlassBlock title="Field Transducer Design">
            Designed and deployed a field transducer for signal conditioning at
            western U.S. power plants.
          </GlassBlock>
          <GlassBlock title="QNX RTOS DAC Drivers">
            Developed C drivers in QNX RTOS for 12-/16-bit Acromag DAC PCIe boards
            with Simulink model injection and shared-memory parameter control over
            TCP/IP.
          </GlassBlock>
          <GlassBlock title="STM32 SPI Measurement">
            Implemented 32-bit SPI communication on an STM32 controller, enabling
            frequency injection and ±10V measurement of 3-phase voltage and current.
          </GlassBlock>
        </div>
      </section>

      <section className="mb-12">
        <h3 className="font-header text-xl font-semibold mb-4">Impact</h3>
        <p className="text-foreground/80 leading-relaxed">
          Advanced hydropower compliance and testing workflows while strengthening
          the integration of embedded systems with large-scale power infrastructure.
        </p>
      </section>

      <section className="mb-12">
        <h3 className="font-header text-xl font-semibold mb-4">Skills</h3>
        <div className="flex flex-wrap gap-2">
          {[
            "Embedded Systems",
            "Power Systems",
            "QNX RTOS",
            "STM32",
            "C/C++",
            "Simulink",
            "SPI",
            "TCP/IP",
            "Signal Conditioning",
          ].map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 rounded-full text-sm border border-[var(--glass-border)] bg-[var(--glass-bg)] text-foreground/80"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h3 className="font-header text-xl font-semibold mb-6">Experience Photos</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              src: "/projects/cabinet.jpeg",
              alt: "Bureau of Reclamation Facility",
              caption:
                "Facility and equipment for WECC and NERC compliance testing.",
            },
            {
              src: "/projects/powerplant.jpeg",
              alt: "Power Systems Work",
              caption: "Inside Buffalo Bill powerplant.",
            },
            {
              src: "/projects/me-cody.jpeg",
              alt: "Hydropower Systems",
              caption: "Work trip to Buffalo Bill Dam and Powerplant.",
            },
          ].map((photo) => (
            <div key={photo.src} className="space-y-2">
              <div className="relative h-64 rounded-xl overflow-hidden border border-[var(--glass-border)]">
                <Image src={photo.src} alt={photo.alt} fill className="object-cover" />
              </div>
              <p className="text-sm text-foreground/60 text-center">{photo.caption}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
