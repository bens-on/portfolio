import BackLink from "@/components/BackLink";
import CourseBanner from "@/components/CourseBanner";

export default function NonlinearControlPage() {
  return (
    <main className="mx-auto max-w-4xl p-6 sm:p-10 pt-20 sm:pt-24">
      <BackLink href="/masters" />

      <div className="mt-8 mb-12">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">
          Nonlinear Control Systems
        </h1>
        <h2 className="text-xl font-semibold text-foreground/80 mb-1">
          ECE611 · Colorado State University
        </h2>
        <p className="text-foreground/60 mb-4">Fall 2026 | Fort Collins, CO</p>

        <CourseBanner motif="nonlinear" className="mb-8" />
      </div>

      <section className="mb-12">
        <h3 className="text-xl font-semibold mb-4">Why I took it</h3>
        <p className="text-foreground/80 leading-relaxed">
          Governors and exciters leave the linearization the moment the
          machine actually moves. I already work on Simulink models for a
          digital exciter; I wanted the ECE611 toolkit — Lyapunov,
          phase portraits, and nonlinear feedback design — so those
          models are not just linearized A matrices I hope stay valid.
        </p>
      </section>

      <section className="mb-12">
        <h3 className="text-xl font-semibold mb-6">What I&apos;m learning</h3>
        <div className="space-y-6">
          <div className="glass-panel rounded-xl p-5 sm:p-6">
            <h4 className="font-semibold mb-2">Nonlinear systems</h4>
            <p className="text-foreground/80">
              Nonlinear and time-varying systems, vector spaces and
              norms, and the conditions for existence and uniqueness of
              solutions — the background Khalil assumes before you talk
              about stability.
            </p>
          </div>

          <div className="glass-panel rounded-xl p-5 sm:p-6">
            <h4 className="font-semibold mb-2">Stability analysis</h4>
            <p className="text-foreground/80">
              Phase portraits, Lyapunov theorems, Popov and circle
              criteria for nonlinear feedback, and passivity and small
              gain for operators — how to argue stability without
              eigenvalues of a local linearization.
            </p>
          </div>

          <div className="glass-panel rounded-xl p-5 sm:p-6">
            <h4 className="font-semibold mb-2">Controller design</h4>
            <p className="text-foreground/80">
              Jacobian linearization and gain scheduling, feedback
              linearization, and direct nonlinear design methods,
              including computer projects that force the theory onto a
              system you can simulate.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h3 className="text-xl font-semibold mb-4">Topics</h3>
        <div className="flex flex-wrap gap-3">
          {[
            "Lyapunov",
            "Phase Portraits",
            "Popov / Circle",
            "Passivity",
            "Gain Scheduling",
            "Feedback Linearization",
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
