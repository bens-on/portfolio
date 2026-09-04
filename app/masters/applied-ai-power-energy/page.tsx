import BackLink from "@/components/BackLink";
import CourseBanner from "@/components/CourseBanner";

export default function AppliedAIPowerEnergyPage() {
  return (
    <main className="mx-auto max-w-4xl p-6 sm:p-10 pt-20 sm:pt-24">
      <BackLink href="/masters" />

      <div className="mt-8 mb-12">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">
          Applied AI for Power and Energy Systems
        </h1>
        <h2 className="text-xl font-semibold text-foreground/80 mb-1">
          ECE480A9 · Colorado State University
        </h2>
        <p className="text-foreground/60 mb-4">Fall 2026 | Fort Collins, CO</p>

        <CourseBanner motif="power-ai" className="mb-8" />
      </div>

      <section className="mb-12">
        <h3 className="text-xl font-semibold mb-4">Why I took it</h3>
        <p className="text-foreground/80 leading-relaxed">
          At BOR I sit next to hydropower plants and a digital exciter —
          plant data, frequency response, and a controller that has to be
          right when it ships. This course pairs each AI method with a
          grid problem (forecasting, faults, state estimation, frequency
          control) instead of teaching models in the abstract. That is the
          version I wanted.
        </p>
      </section>

      <section className="mb-12">
        <h3 className="text-xl font-semibold mb-6">What I&apos;m learning</h3>
        <div className="space-y-6">
          <div className="glass-panel rounded-xl p-5 sm:p-6">
            <h4 className="font-semibold mb-2">ML on power-system data</h4>
            <p className="text-foreground/80">
              Core ML on engineering models, then unsupervised methods
              for fault and anomaly detection, and time-series models for
              load and renewable generation forecasting.
            </p>
          </div>

          <div className="glass-panel rounded-xl p-5 sm:p-6">
            <h4 className="font-semibold mb-2">Structure-aware models</h4>
            <p className="text-foreground/80">
              CNNs for contingency and security assessment, graph
              networks for state estimation, physics-informed networks
              for optimal power flow, and neural ODEs for system
              dynamics.
            </p>
          </div>

          <div className="glass-panel rounded-xl p-5 sm:p-6">
            <h4 className="font-semibold mb-2">Learning for grid control</h4>
            <p className="text-foreground/80">
              Reinforcement learning for frequency response, multi-agent
              RL for distributed energy resource coordination, and
              Bayesian methods for risk-aware operations.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h3 className="text-xl font-semibold mb-4">Topics</h3>
        <div className="flex flex-wrap gap-3">
          {[
            "Time-Series ML",
            "Forecasting",
            "State Estimation",
            "Optimal Power Flow",
            "Reinforcement Learning",
            "Power Systems",
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
