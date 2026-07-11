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

export default function FirstRFExperiencePage() {
  return (
    <main className="mx-auto max-w-4xl p-6 sm:p-10 pt-20 sm:pt-24">
      <BackLink />

      <div className="mt-8 mb-12">
        <h1 className="font-header text-2xl sm:text-3xl font-bold tracking-tight mb-2">
          FIRST RF
        </h1>
        <h2 className="text-xl font-semibold text-foreground/80 mb-1">
          Embedded Systems Engineering Intern
        </h2>
        <p className="text-foreground/60 mb-4">May 2025 – Aug 2025 | Boulder, CO</p>

        <div className="relative w-full rounded-2xl overflow-hidden mb-8 border border-[var(--glass-border)]">
          <Image
            src="/projects/interns_ffrange.jpeg"
            alt="FIRST RF"
            width={1200}
            height={800}
            className="w-full h-auto"
          />
        </div>
      </div>

      <section className="mb-12">
        <h3 className="font-header text-xl font-semibold mb-4">Overview</h3>
        <div className="glass-panel rounded-2xl p-5 sm:p-6">
          <p className="relative z-10 text-foreground/80 leading-relaxed">
            At FIRST RF I contributed to embedded systems for a half-duplex phased
            array enabling land and maritime connectivity. The role bridged RF
            hardware, multilayer PCB design, and firmware on Zephyr RTOS.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h3 className="font-header text-xl font-semibold mb-6">Key Contributions</h3>
        <div className="space-y-4">
          <GlassBlock title="Phased Array System">
            Co-developed a half-duplex phased array system for land and maritime
            platform connectivity.
          </GlassBlock>
          <GlassBlock title="RF PCB Design">
            Designed multilayer RF PCBs in Altium with GHz transmission-line
            modeling and stackup optimization for signal integrity.
          </GlassBlock>
          <GlassBlock title="Zephyr SPI Drivers">
            Wrote SPI drivers in C for Zephyr RTOS to control active RF components.
          </GlassBlock>
          <GlassBlock title="S-Parameter Automation">
            Automated passive component validation by processing S-parameter
            datasets in Python.
          </GlassBlock>
        </div>
      </section>

      <section className="mb-12">
        <h3 className="font-header text-xl font-semibold mb-4">Impact</h3>
        <p className="text-foreground/80 leading-relaxed">
          Strengthened experience across RF systems and embedded development while
          improving hardware/software integration workflows.
        </p>
      </section>

      <section className="mb-12">
        <h3 className="font-header text-xl font-semibold mb-4">Skills</h3>
        <div className="flex flex-wrap gap-2">
          {[
            "RF Engineering",
            "Embedded Systems",
            "Altium",
            "Zephyr RTOS",
            "SPI",
            "S-parameters",
            "Phased Arrays",
            "Python",
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <div className="relative h-64 rounded-xl overflow-hidden border border-[var(--glass-border)]">
              <Image
                src="/projects/footprint.jpeg"
                alt="FIRST RF Work Environment"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-sm text-foreground/60 text-center">
              Component footprint used on boards for RF characterization.
            </p>
          </div>
          <div className="space-y-2">
            <div className="relative h-64 rounded-xl overflow-hidden border border-[var(--glass-border)]">
              <Image
                src="/projects/testing.jpeg"
                alt="RF Engineering Work"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-sm text-foreground/60 text-center">
              High-power amplifier test setup.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
