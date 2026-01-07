import BackLink from "@/components/BackLink";
import Image from "next/image";

export default function CSULAExperiencePage() {
  return (
    <main className="mx-auto max-w-4xl p-6 sm:p-10 pt-20 sm:pt-24">
      <BackLink />
      
      {/* Header */}
      <div className="mt-8 mb-12">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">Colorado State University</h1>
        <h2 className="text-xl font-semibold text-foreground/80 mb-1">Learning Assistant – ECE102 Digital Circuit Logic</h2>
        <p className="text-foreground/60 mb-4">Aug 2023 – May 2024 | Fort Collins, CO</p>
        
        {/* Company Image */}
        <div className="relative h-48 w-full rounded-xl overflow-hidden mb-8">
          <Image
            src="/projects/Campus-aerial.jpeg"
            alt="Colorado State University"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Overview */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold mb-4">Overview</h3>
        <p className="text-foreground/80 leading-relaxed">
          Served as a Learning Assistant for CSU&apos;s introductory digital logic course, supporting students 
          in foundational circuit design.
        </p>
      </section>

      {/* Key Contributions */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold mb-6">Key Contributions</h3>
        <div className="space-y-6">
          <div className="bg-background/40 rounded-lg p-6 border border-foreground/10">
            <h4 className="font-semibold mb-2">Lab Sessions & Office Hours</h4>
            <p className="text-foreground/80">
              Led weekly lab sessions and held additional office hours for one-on-one tutoring.
            </p>
          </div>
          
          <div className="bg-background/40 rounded-lg p-6 border border-foreground/10">
            <h4 className="font-semibold mb-2">Digital Logic Instruction</h4>
            <p className="text-foreground/80">
              Guided students through combinational and sequential logic design, Boolean algebra, and basic circuit analysis.
            </p>
          </div>
          
          <div className="bg-background/40 rounded-lg p-6 border border-foreground/10">
            <h4 className="font-semibold mb-2">FPGA Implementation Support</h4>
            <p className="text-foreground/80">
              Helped students implement designs using Quartus Prime and FPGA-based tools.
            </p>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold mb-4">Impact</h3>
        <p className="text-foreground/80 leading-relaxed">
          Strengthened ability to communicate technical concepts clearly, while reinforcing my own 
          foundations in digital system design.
        </p>
      </section>

      {/* Skills */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold mb-4">Skills</h3>
        <div className="flex flex-wrap gap-3">
          {[
            "Digital Logic",
            "Boolean Algebra", 
            "Teaching",
            "Quartus Prime",
            "Circuit Design"
          ].map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 bg-foreground/10 text-foreground/80 rounded-full text-sm border border-foreground/20"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
    </main>
  );
}
