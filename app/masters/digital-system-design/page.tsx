import BackLink from "@/components/BackLink";
import CourseBanner from "@/components/CourseBanner";

export default function DigitalSystemDesignPage() {
  return (
    <main className="mx-auto max-w-4xl p-6 sm:p-10 pt-20 sm:pt-24">
      <BackLink href="/masters" />

      <div className="mt-8 mb-12">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">
          Digital System Design
        </h1>
        <h2 className="text-xl font-semibold text-foreground/80 mb-1">
          ECE451 / ECE450 · Colorado State University
        </h2>
        <p className="text-foreground/60 mb-4">Fall 2026 | Fort Collins, CO</p>

        <CourseBanner motif="fpga" className="mb-8" />
      </div>

      <section className="mb-12">
        <h3 className="text-xl font-semibold mb-4">Why I took it</h3>
        <p className="text-foreground/80 leading-relaxed">
          I was a learning assistant for ECE102. This is the course that
          turns that digital-logic background into a full design flow:
          describe the hardware in Verilog, map it to gates, and load it
          onto an FPGA in the ECE450 lab. The MSEE is embedded systems; I
          wanted a semester where the datapath and the control logic are
          something I built, not something I only talk to from firmware.
        </p>
      </section>

      <section className="mb-12">
        <h3 className="text-xl font-semibold mb-6">What I&apos;m learning</h3>
        <div className="space-y-6">
          <div className="glass-panel rounded-xl p-5 sm:p-6">
            <h4 className="font-semibold mb-2">Verilog and the design flow</h4>
            <p className="text-foreground/80">
              Behavioral HDL for combinational and sequential systems,
              then the rest of the path: gate-level mapping, simulation,
              and verification on an FPGA — software description down to
              a chip you can debug.
            </p>
          </div>

          <div className="glass-panel rounded-xl p-5 sm:p-6">
            <h4 className="font-semibold mb-2">
              Combinational and sequential machines
            </h4>
            <p className="text-foreground/80">
              Combinational logic, then state-machine design and
              optimization, and the sequential circuits that show up once
              you leave a single truth table.
            </p>
          </div>

          <div className="glass-panel rounded-xl p-5 sm:p-6">
            <h4 className="font-semibold mb-2">
              Datapath, control, and PLDs
            </h4>
            <p className="text-foreground/80">
              Arithmetic logic, datapath and control, and implementing
              combinational logic on programmable devices — the split
              between the path that moves data and the logic that steers
              it.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h3 className="text-xl font-semibold mb-4">Topics</h3>
        <div className="flex flex-wrap gap-3">
          {[
            "Verilog",
            "FPGA",
            "Combinational Logic",
            "State Machines",
            "Datapath",
            "PLDs",
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
