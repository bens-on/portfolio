import BackLink from "@/components/BackLink";
import Image from "next/image";

export default function WoodwardExperiencePage() {
  return (
    <main className="mx-auto max-w-4xl p-6 sm:p-10">
      <BackLink />
      
      {/* Header */}
      <div className="mt-8 mb-12">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Woodward, Inc.</h1>
        <h2 className="text-xl font-semibold text-foreground/80 mb-1">Electrical Test Engineering Intern</h2>
        <p className="text-foreground/60 mb-4">May 2023 – Aug 2023 | Loves Park, IL</p>
        
        {/* Company Image */}
        <div className="relative w-full rounded-xl overflow-hidden mb-8">
          <Image
            src="/projects/wwd.jpeg"
            alt="Woodward, Inc."
            width={1200}
            height={800}
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Overview */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold mb-4">Overview</h3>
        <p className="text-foreground/80 leading-relaxed">
          At Woodward, I contributed to aerospace test engineering, focusing on hardware design and 
          data analysis tools for space hardware response testing.
        </p>
      </section>

      {/* Key Contributions */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold mb-6">Key Contributions</h3>
        <div className="space-y-6">
          <div className="bg-background/40 rounded-lg p-6 border border-foreground/10">
            <h4 className="font-semibold mb-2">Data Acquisition Research</h4>
            <p className="text-foreground/80">
              Researched and tested data acquisition hardware to improve aerospace test processes.
            </p>
          </div>
          
          <div className="bg-background/40 rounded-lg p-6 border border-foreground/10">
            <h4 className="font-semibold mb-2">Hardware Module Design</h4>
            <p className="text-foreground/80">
              Designed a hardware module to meet customer requirements for spacecraft response verification.
            </p>
          </div>
          
          <div className="bg-background/40 rounded-lg p-6 border border-foreground/10">
            <h4 className="font-semibold mb-2">Python Data Analysis Tool</h4>
            <p className="text-foreground/80">
              Developed a standalone Python script to analyze large datasets, generating interactive 
              visualizations independent of NI DIAdem.
            </p>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold mb-4">Impact</h3>
        <p className="text-foreground/80 leading-relaxed">
          Enabled faster testing and analysis of aerospace systems, improving engineering workflow efficiency.
        </p>
      </section>

      {/* Skills */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold mb-4">Skills</h3>
        <div className="flex flex-wrap gap-3">
          {[
            "Test Engineering",
            "Python", 
            "Data Acquisition",
            "Hardware Design",
            "Aerospace Systems"
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
