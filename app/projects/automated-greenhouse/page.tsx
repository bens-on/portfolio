import BackLink from "@/components/BackLink";
import Image from "next/image";

export default function AutomatedGreenhousePage() {
  return (
    <main className="mx-auto max-w-4xl p-6 sm:p-10 pt-20 sm:pt-24">
      <BackLink />
      
      {/* Header */}
      <div className="mt-8 mb-12">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">Automated Greenhouse</h1>
        <h2 className="text-xl font-semibold text-foreground/80 mb-1">Vertically Integrated Project (VIP)</h2>
        <p className="text-foreground/60 mb-4">Fall 2024 | Colorado State University</p>
        
        {/* Project Image */}
        <div className="relative h-48 w-full rounded-xl overflow-hidden mb-8">
          <Image
            src="/projects/AG3.jpeg"
            alt="Automated Greenhouse"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Overview */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold mb-4">Overview</h3>
        <p className="text-foreground/80 leading-relaxed">
          Worked on a multidisciplinary project to design and implement an automated greenhouse system 
          capable of monitoring and controlling environmental parameters for optimal plant growth.
        </p>
      </section>

      {/* Key Contributions */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold mb-6">Key Contributions</h3>
        <div className="space-y-6">
          <div className="glass-panel rounded-xl p-5 sm:p-6">
            <h4 className="font-semibold mb-2">Electrical System Redesign</h4>
            <p className="text-foreground/80">
              Evaluated and redesigned the original electrical control system for safety, efficiency, and documentation.
            </p>
          </div>
          
          <div className="glass-panel rounded-xl p-5 sm:p-6">
            <h4 className="font-semibold mb-2">System Implementation</h4>
            <p className="text-foreground/80">
              Implemented the improved control system in the second iteration of the greenhouse project.
            </p>
          </div>
          
          <div className="glass-panel rounded-xl p-5 sm:p-6">
            <h4 className="font-semibold mb-2">Team Collaboration</h4>
            <p className="text-foreground/80">
              Collaborated with a cross-functional team, contributing 1–3 hours per week throughout the semester.
            </p>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold mb-4">Impact</h3>
        <p className="text-foreground/80 leading-relaxed">
          Delivered a safer, more reliable electrical design for long-term use in greenhouse automation, 
          laying the foundation for scalable environmental control systems.
        </p>
      </section>

      {/* Skills */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold mb-4">Skills</h3>
        <div className="flex flex-wrap gap-3">
          {[
            "Control Systems",
            "Electrical Design", 
            "Documentation",
            "Embedded Systems",
            "Environmental Monitoring"
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

      {/* Project Images */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold mb-6">Project Photos</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <div className="relative h-64 rounded-xl overflow-hidden bg-foreground/5 border border-foreground/10">
              <Image
                src="/projects/AG2.png"
                alt="Automated Greenhouse System"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-sm text-foreground/60 text-center">Automated greenhouse opened to show bare internals.</p>
          </div>
          <div className="space-y-2">
            <div className="relative h-64 rounded-xl overflow-hidden bg-foreground/5 border border-foreground/10">
              <Image
                src="/projects/AG4.jpeg"
                alt="Greenhouse Control System"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-sm text-foreground/60 text-center">3D Printed Crop Cups to hold rockwool.</p>
          </div>
        </div>
      </section>
    </main>
  );
}


