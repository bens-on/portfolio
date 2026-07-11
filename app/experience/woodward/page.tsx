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

export default function WoodwardExperiencePage() {
  return (
    <main className="mx-auto max-w-4xl p-6 sm:p-10 pt-20 sm:pt-24">
      <BackLink />

      <div className="mt-8 mb-12">
        <h1 className="font-header text-2xl sm:text-3xl font-bold tracking-tight mb-2">
          Woodward, Inc.
        </h1>
        <h2 className="text-xl font-semibold text-foreground/80 mb-1">
          Electrical Test Engineering Intern
        </h2>
        <p className="text-foreground/60 mb-4">May 2023 – Aug 2023 | Loves Park, IL</p>

        <div className="relative w-full rounded-2xl overflow-hidden mb-8 border border-[var(--glass-border)]">
          <Image
            src="/projects/wwd.jpeg"
            alt="Woodward, Inc."
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
            At Woodward I contributed to aerospace test engineering—evaluating DAQ
            hardware, designing response-test modules for space hardware, and
            building Python tools for shop-floor analysis.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h3 className="font-header text-xl font-semibold mb-6">Key Contributions</h3>
        <div className="space-y-4">
          <GlassBlock title="Data Acquisition Evaluation">
            Tested and evaluated data acquisition hardware for aerospace response
            testing in the Production Equipment department.
          </GlassBlock>
          <GlassBlock title="Response-Test Module">
            Designed a response-test module to meet customer space hardware
            requirements at Woodward&apos;s Rock Cut Campus.
          </GlassBlock>
          <GlassBlock title="Python Analysis Tool">
            Developed a Python tool for large-dataset analysis and visualization,
            eliminating reliance on NI DIAdem.
          </GlassBlock>
        </div>
      </section>

      <section className="mb-12">
        <h3 className="font-header text-xl font-semibold mb-4">Impact</h3>
        <p className="text-foreground/80 leading-relaxed">
          Enabled faster testing and analysis of aerospace systems and improved
          engineering workflow efficiency on the shop floor.
        </p>
      </section>

      <section className="mb-12">
        <h3 className="font-header text-xl font-semibold mb-4">Skills</h3>
        <div className="flex flex-wrap gap-2">
          {[
            "Test Engineering",
            "Python",
            "Data Acquisition",
            "Hardware Design",
            "Aerospace Systems",
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
    </main>
  );
}
