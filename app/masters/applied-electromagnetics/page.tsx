import BackLink from "@/components/BackLink";
import CourseBanner from "@/components/CourseBanner";
import Image from "next/image";

export default function AppliedElectromagneticsPage() {
  return (
    <main className="mx-auto max-w-4xl p-6 sm:p-10 pt-20 sm:pt-24">
      <BackLink href="/masters" />

      <div className="mt-8 mb-12">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">
          Applied Electromagnetics
        </h1>
        <h2 className="text-xl font-semibold text-foreground/80 mb-1">
          ECE541 · Colorado State University
        </h2>
        <p className="text-foreground/60 mb-4">
          Fall 2025 | Fort Collins, CO · Accelerated MSEE credit
        </p>

        <CourseBanner motif="em" className="mb-8" />
      </div>

      <section className="mb-12">
        <h3 className="text-xl font-semibold mb-4">Why I took it</h3>
        <p className="text-foreground/80 leading-relaxed">
          Dual-counted toward the accelerated MSEE during the BSEE. FIRST RF
          was multilayer RF boards and a phased array — I wanted EM past
          ECE340/342, the applied layer: waves, radiation, scattering, and
          guided-wave systems you can actually compute, not just write Maxwell
          for.
        </p>
      </section>

      <section className="mb-12">
        <h3 className="text-xl font-semibold mb-6">What I learned</h3>
        <div className="space-y-6">
          <div className="glass-panel rounded-xl p-5 sm:p-6">
            <h4 className="font-semibold mb-2">Applied fields</h4>
            <p className="text-foreground/80">
              High- and low-frequency electromagnetics, wave propagation,
              radiation and scattering, and wireless and guided-wave systems —
              the catalog core, used as the setup for the computational work.
            </p>
          </div>

          <div className="glass-panel rounded-xl p-5 sm:p-6">
            <h4 className="font-semibold mb-2">Method of Moments</h4>
            <p className="text-foreground/80">
              Point-matching and Galerkin MoM on microstrip and finite
              ground-plane geometries: impedance matrices, surface charge
              density, and capacitance per unit length you can plot and
              argue about.
            </p>
          </div>

          <div className="glass-panel rounded-xl p-5 sm:p-6">
            <h4 className="font-semibold mb-2">Scattering</h4>
            <p className="text-foreground/80">
              Thin-wire scatterer analysis in MoM — turning a radiation and
              scattering problem into a linear system, then debugging the
              discretization until the physics stops lying.
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
                src="/masters/applied-electromagnetics/hero-rcs-polar.png"
                alt="Polar RCS of a thin-wire scatterer"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-sm text-foreground/60 text-center">
              Polar RCS of a thin-wire scatterer, 300 MHz.
            </p>
          </div>
          <div className="space-y-2">
            <div className="relative h-64 rounded-xl overflow-hidden bg-foreground/5 border border-foreground/10">
              <Image
                src="/masters/applied-electromagnetics/galerkin-charge.png"
                alt="Galerkin Method of Moments surface charge on a finite ground plane"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-sm text-foreground/60 text-center">
              Galerkin MoM surface charge on a finite ground plane.
            </p>
          </div>
          <div className="space-y-2">
            <div className="relative h-64 rounded-xl overflow-hidden bg-foreground/5 border border-foreground/10">
              <Image
                src="/masters/applied-electromagnetics/wire-3d-current.png"
                alt="3D current on a thin-wire scatterer"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-sm text-foreground/60 text-center">
              Current on a thin-wire scatterer at 300 MHz.
            </p>
          </div>
          <div className="space-y-2 md:col-span-2">
            <div className="relative h-64 rounded-xl overflow-hidden bg-foreground/5 border border-foreground/10">
              <Image
                src="/masters/applied-electromagnetics/ansys-gcpw.png"
                alt="Ansys grounded coplanar waveguide cross-section"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-sm text-foreground/60 text-center">
              Ansys Electronics Desktop GCPW cross-section.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h3 className="text-xl font-semibold mb-4">Topics</h3>
        <div className="flex flex-wrap gap-3">
          {[
            "Electromagnetics",
            "Method of Moments",
            "Galerkin",
            "Radiation",
            "Scattering",
            "Guided Waves",
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
