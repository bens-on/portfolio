import BackLink from "@/components/BackLink";
import CourseBanner from "@/components/CourseBanner";
import Image from "next/image";

export default function ElectricalPowerEngineeringPage() {
  return (
    <main className="mx-auto max-w-4xl p-6 sm:p-10 pt-20 sm:pt-24">
      <BackLink href="/masters" />

      <div className="mt-8 mb-12">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">
          Electrical Power Engineering
        </h1>
        <h2 className="text-xl font-semibold text-foreground/80 mb-1">
          ECE565 · Colorado State University
        </h2>
        <p className="text-foreground/60 mb-4">
          Fall 2025 | Fort Collins, CO · Accelerated MSEE credit
        </p>

        <CourseBanner motif="power" className="mb-8" />
      </div>

      <section className="mb-12">
        <h3 className="text-xl font-semibold mb-4">Why I took it</h3>
        <p className="text-foreground/80 leading-relaxed">
          Dual-counted toward the accelerated MSEE. At BOR I work on a digital
          exciter that has to sit on a real plant — I wanted the grid-side
          analysis, not just the firmware: current, voltage, P and Q, faults,
          and whether the machine stays in step.
        </p>
      </section>

      <section className="mb-12">
        <h3 className="text-xl font-semibold mb-6">What I learned</h3>
        <div className="space-y-6">
          <div className="glass-panel rounded-xl p-5 sm:p-6">
            <h4 className="font-semibold mb-2">Network models</h4>
            <p className="text-foreground/80">
              Three-phase analysis, per-unit, transformers, transmission-line
              models, and the voltage-behind-reactance synchronous-machine
              model — then Y-bus and Z-bus assembly so the network is a
              matrix you can actually modify.
            </p>
          </div>

          <div className="glass-panel rounded-xl p-5 sm:p-6">
            <h4 className="font-semibold mb-2">Power flow and faults</h4>
            <p className="text-foreground/80">
              The power-flow problem in MATLAB/Simscape, then symmetrical
              components and both symmetric and asymmetric fault studies —
              the cases that tell you what a protection scheme is looking at.
            </p>
          </div>

          <div className="glass-panel rounded-xl p-5 sm:p-6">
            <h4 className="font-semibold mb-2">
              Estimation, stability, and dispatch
            </h4>
            <p className="text-foreground/80">
              Weighted-least-squares state estimation, swing-curve integration
              for transient stability, and economic dispatch / unit
              commitment — plus two Simscape projects that force the
              bookwork onto a system you can plot.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h3 className="text-xl font-semibold mb-6">Selected work</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <div className="relative h-64 rounded-xl overflow-hidden bg-foreground/5 border border-foreground/10">
              <Image
                src="/masters/electrical-power-engineering/hero-oneline.png"
                alt="Four-bus power system one-line diagram"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-sm text-foreground/60 text-center">
              Four-bus one-line used for Y-bus work.
            </p>
          </div>
          <div className="space-y-2">
            <div className="relative h-64 rounded-xl overflow-hidden bg-foreground/5 border border-foreground/10">
              <Image
                src="/masters/electrical-power-engineering/network.png"
                alt="Power network schematic"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-sm text-foreground/60 text-center">
              Network schematic for Y-bus assembly.
            </p>
          </div>
          <div className="space-y-2">
            <div className="relative h-64 rounded-xl overflow-hidden bg-foreground/5 border border-foreground/10">
              <Image
                src="/masters/electrical-power-engineering/direct.png"
                alt="Direct-form power system diagram"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-sm text-foreground/60 text-center">
              Direct-form diagram used with the one-line.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h3 className="text-xl font-semibold mb-4">Topics</h3>
        <div className="flex flex-wrap gap-3">
          {[
            "Power Flow",
            "Y-bus / Z-bus",
            "Fault Analysis",
            "State Estimation",
            "Swing Curve",
            "Economic Dispatch",
          ].map((topic) => (
            <span
              key={topic}
              className="px-3 py-1 bg-foreground/10 text-foreground/80 rounded-full text-sm border border-foreground/20"
            >
              {topic}
            </span>
          ))}
        </div>
      </section>
    </main>
  );
}
