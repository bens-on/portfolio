import BackLink from "@/components/BackLink";
import Image from "next/image";

export default function CSUResearchExperiencePage() {
  return (
    <main className="mx-auto max-w-4xl p-6 sm:p-10">
      <BackLink />
      
      {/* Header */}
      <div className="mt-8 mb-12">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Colorado State University – ECSyD</h1>
        <h2 className="text-xl font-semibold text-foreground/80 mb-1">Undergraduate Research Assistant</h2>
        <p className="text-foreground/60 mb-4">Dec 2022 – May 2023 | Fort Collins, CO</p>
        
        {/* Company Image */}
        <div className="relative h-48 w-full rounded-xl overflow-hidden mb-8">
          <Image
            src="/projects/PIC.png"
            alt="Colorado State University Research Lab"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Overview */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold mb-4">Overview</h3>
        <p className="text-foreground/80 leading-relaxed">
          Conducted undergraduate research in photonic integrated circuits, working on measurement 
          automation and data reduction for microchip characterization.
        </p>
      </section>

      {/* Key Contributions */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold mb-6">Key Contributions</h3>
        <div className="space-y-6">
          <div className="bg-background/40 rounded-lg p-6 border border-foreground/10">
            <h4 className="font-semibold mb-2">Measurement Automation</h4>
            <p className="text-foreground/80">
              Automated measurement process with Python, isolating chip sectors for targeted testing.
            </p>
          </div>
          
          <div className="bg-background/40 rounded-lg p-6 border border-foreground/10">
            <h4 className="font-semibold mb-2">Process Optimization</h4>
            <p className="text-foreground/80">
              Reduced measurement time per chip by 75–90%, significantly increasing lab throughput.
            </p>
          </div>
          
          <div className="bg-background/40 rounded-lg p-6 border border-foreground/10">
            <h4 className="font-semibold mb-2">Research Collaboration</h4>
            <p className="text-foreground/80">
              Collaborated with graduate researchers to validate photonic circuit performance.
            </p>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold mb-4">Impact</h3>
        <p className="text-foreground/80 leading-relaxed">
          Improved lab efficiency while gaining hands-on experience in photonic ICs, measurement 
          automation, and applied Python development.
        </p>
      </section>

      {/* Skills */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold mb-4">Skills</h3>
        <div className="flex flex-wrap gap-3">
          {[
            "Python",
            "Photonic Integrated Circuits", 
            "Data Automation",
            "Research"
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
