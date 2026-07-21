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

const photos = [
  {
    src: "/projects/bor-2026/hilTesting.png",
    alt: "Hardware-in-the-loop testing setup",
    caption:
      "Hardware-in-the-loop testing in the lab for digital controller exciter model validation.",
  },
  {
    src: "/projects/bor-2026/grandCoulee.png",
    alt: "Grand Coulee Dam from the third powerhouse",
    caption: "Grand Coulee Dam from the top of the third powerhouse.",
  },
  {
    src: "/projects/bor-2026/couleeGenerators.png",
    alt: "Generating units at Grand Coulee",
    caption: "Smaller generating units at Grand Coulee.",
  },
  {
    src: "/projects/bor-2026/hoover.png",
    alt: "Hoover Dam during America 250 celebration",
    caption: "Hoover Dam during the America 250 celebration.",
  },
  {
    src: "/projects/bor-2026/hooverGenerators.png",
    alt: "Hoover Dam Arizona-side generator deck",
    caption:
      "Top deck of the generators on the Arizona side of Hoover Dam.",
  },
];

export default function BORExperiencePage() {
  return (
    <main className="mx-auto max-w-4xl p-6 sm:p-10 pt-20 sm:pt-24">
      <BackLink />

      <div className="mt-8 mb-12">
        <span className="inline-block rounded-full border border-[var(--accent-primary)]/40 bg-[var(--accent-primary)]/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-[var(--accent-primary-light)] mb-3">
          Current
        </span>
        <h1 className="font-header text-2xl sm:text-3xl font-bold tracking-tight mb-2">
          Bureau of Reclamation, U.S. Department of the Interior
        </h1>
        <h2 className="text-xl font-semibold text-foreground/80 mb-1">
          Electrical Engineering Intern – Power Systems Analysis &amp; Control
        </h2>
        <p className="text-foreground/60 mb-4">May 2026 – Present | Lakewood, CO</p>

        <div className="relative w-full aspect-[16/10] max-h-[28rem] rounded-2xl overflow-hidden mb-8 border border-[var(--glass-border)]">
          <Image
            src="/projects/bor-2026/hooverIntakeTowers.png"
            alt="Intake towers at Hoover Dam"
            fill
            className="object-cover object-[center_40%]"
            sizes="(max-width: 896px) 100vw, 896px"
            priority
          />
        </div>
      </div>

      <section className="mb-12">
        <h3 className="font-header text-xl font-semibold mb-4">Overview</h3>
        <div className="glass-panel rounded-2xl p-5 sm:p-6 space-y-4">
          <p className="relative z-10 text-foreground/80 leading-relaxed">
            In the Power System Analysis &amp; Control group, I work on the
            embedded software stack for a digital excitation system that will
            run in hydropower plants across the western United States. The
            controller targets an industrial computer running a custom QNX image
            and it must talk reliably to multifunction DAQ hardware in the field
            and in the lab.
          </p>
          <p className="relative z-10 text-foreground/80 leading-relaxed">
            A core piece of that work is the custom QNX driver I built for the
            NI PCIe 6353 (and some other boards) so the Target machine can
            interface with the DAQ path used by the digital exciter. Controller
            code is compiled and deployed to the target, where resource managers
            handle I/O, networking, logging, and an embedded Simulink exciter
            simulation. On top of that stack I designed an HMI client that
            consumes the live TCP stream, including multiple processes that
            operators will use once the system is deployed to plants across the
            West.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h3 className="font-header text-xl font-semibold mb-6">Key Contributions</h3>
        <div className="space-y-4">
          <GlassBlock title="NI PCIe 6353 QNX Driver">
            Built the QNX RTOS device driver for the NI PCIe 6353 (and the
            foundation for additional DAQ boards) so the SEL-3355 can exchange
            I/O with multifunction DAQ hardware through register-level and PCIe
            memory interfaces.
          </GlassBlock>
          <GlassBlock title="Digital Exciter Platform">
            Contribute to digital excitation system controller software that
            compiles to the SEL-3355 under QNX, including resource managers for
            TCP, board I/O, logging, and an embedded Simulink exciter harness
            used for simulation and validation.
          </GlassBlock>
          <GlassBlock title="HMI Design">
            Designed the plant HMI as a TCP client to the controller stream, and
            implemented multiple HMI processes that will ship with the system to
            western U.S. power plants.
          </GlassBlock>
          <GlassBlock title="Hardware-in-the-Loop Validation">
            Support HIL testing for digital controller exciter model
            validation—exercising the real-time stack against lab hardware
            before field deployment.
          </GlassBlock>
        </div>
      </section>

      <section className="mb-12">
        <h3 className="font-header text-xl font-semibold mb-4">Skills</h3>
        <div className="flex flex-wrap gap-2">
          {[
            "QNX RTOS",
            "Driver Development",
            "DAQ",
            "PCIe",
            "C/C++",
            "TCP/IP",
            "HMI",
            "Visual Basic",
            "Simulink",
            "HIL Testing",
            "Exciter Controls",
            "Power Systems",
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
          {photos.map((photo) => (
            <div key={photo.src} className="space-y-2">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-[var(--glass-border)]">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <p className="text-sm text-foreground/60 text-center">{photo.caption}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
