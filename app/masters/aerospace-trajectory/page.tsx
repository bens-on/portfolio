import BackLink from "@/components/BackLink";
import CourseBanner from "@/components/CourseBanner";
import Image from "next/image";

export default function AerospaceTrajectoryPage() {
  return (
    <main className="mx-auto max-w-4xl p-6 sm:p-10 pt-20 sm:pt-24">
      <BackLink href="/masters" />

      <div className="mt-8 mb-12">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">
          Aerospace Vehicles Trajectory and Performance
        </h1>
        <h2 className="text-xl font-semibold text-foreground/80 mb-1">
          MECH519B · Colorado State University
        </h2>
        <p className="text-foreground/60 mb-4">
          Spring 2026 | Fort Collins, CO · Accelerated MSEE credit
        </p>

        <CourseBanner motif="trajectory" className="mb-8" />
      </div>

      <section className="mb-12">
        <h3 className="text-xl font-semibold mb-4">Why I took it</h3>
        <p className="text-foreground/80 leading-relaxed">
          Dual-counted toward the accelerated MSEE. Aerospace concentration
          and a year leading the USLI payload team — I wanted the other side
          of that stack: how a vehicle is sized, how an ascent is steered,
          and how you actually design a trajectory to an orbit, not just
          fly a payload on someone else&apos;s rocket.
        </p>
      </section>

      <section className="mb-12">
        <h3 className="text-xl font-semibold mb-6">What I learned</h3>
        <div className="space-y-6">
          <div className="glass-panel rounded-xl p-5 sm:p-6">
            <h4 className="font-semibold mb-2">Orbital regimes</h4>
            <p className="text-foreground/80">
              Orbital elements, Newton and Kepler, energy and angular
              momentum, then Hohmann and three-dimensional transfers —
              LEO, GTO, sun-sync, Molniya, GEO, and the start of
              interplanetary design.
            </p>
          </div>

          <div className="glass-panel rounded-xl p-5 sm:p-6">
            <h4 className="font-semibold mb-2">Ascent and vehicle sizing</h4>
            <p className="text-foreground/80">
              Staging, ideal velocity and mission losses, launch azimuth
              and sites, gravity-turn and linear-tangent steering, and the
              aero, gravity, and thrust-vector losses that eat the
              theoretical Δv.
            </p>
          </div>

          <div className="glass-panel rounded-xl p-5 sm:p-6">
            <h4 className="font-semibold mb-2">Mission design tools</h4>
            <p className="text-foreground/80">
              STK targeting and ascent simulation, an Excel analysis tool
              built over the semester for sizing and margin, and an
              introduction to NASA GMAT. The final project: design a
              rocket, pick a site, and fly two optimized missions.
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
                src="/masters/aerospace-trajectory/hero-gto-3d.png"
                alt="STK 3D view of a GTO ascent"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-sm text-foreground/60 text-center">
              GTO ascent in STK.
            </p>
          </div>
          <div className="space-y-2">
            <div className="relative h-64 rounded-xl overflow-hidden bg-foreground/5 border border-foreground/10">
              <Image
                src="/masters/aerospace-trajectory/sso-3d.png"
                alt="STK 3D sun-synchronous orbit"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-sm text-foreground/60 text-center">
              Sun-synchronous orbit in STK.
            </p>
          </div>
          <div className="space-y-2">
            <div className="relative h-64 rounded-xl overflow-hidden bg-foreground/5 border border-foreground/10">
              <Image
                src="/masters/aerospace-trajectory/gto-2d.png"
                alt="GTO ground track"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-sm text-foreground/60 text-center">
              GTO ground track from Fort Collins.
            </p>
          </div>
          <div className="space-y-2 md:col-span-2">
            <div className="relative h-64 rounded-xl overflow-hidden bg-foreground/5 border border-foreground/10">
              <Image
                src="/masters/aerospace-trajectory/sso-2d.png"
                alt="SSO ground track"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-sm text-foreground/60 text-center">
              SSO ground track.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h3 className="text-xl font-semibold mb-4">Topics</h3>
        <div className="flex flex-wrap gap-3">
          {[
            "Orbital Mechanics",
            "Ascent Design",
            "Staging",
            "STK",
            "GMAT",
            "Launch Vehicles",
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
