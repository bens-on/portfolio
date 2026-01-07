import BackLink from "@/components/BackLink";
import Image from "next/image";

export default function BORExperiencePage() {
  return (
    <main className="mx-auto max-w-4xl p-6 sm:p-10 pt-20 sm:pt-24">
      <BackLink />
      
      {/* Header */}
      <div className="mt-8 mb-12">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">Bureau of Reclamation, U.S. Department of the Interior</h1>
        <h2 className="text-xl font-semibold text-foreground/80 mb-1">Electrical Engineering Intern – Power Systems Analysis & Control</h2>
        <p className="text-foreground/60 mb-4">May 2024 – Feb 2025 | Lakewood, CO</p>
        
        {/* Company Image */}
        <div className="relative w-full rounded-xl overflow-hidden mb-8">
          <Image
            src="/projects/buffbill.jpeg"
            alt="Bureau of Reclamation"
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
          At the Bureau of Reclamation, I supported hydropower operations across the western U.S., 
          focusing on control systems, compliance testing, and embedded solutions for power plant equipment.
        </p>
      </section>

      {/* Key Contributions */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold mb-6">Key Contributions</h3>
        <div className="space-y-6">
          <div className="bg-background/40 rounded-lg p-6 border border-foreground/10" style={{ borderRadius: 'var(--radius-lg)', padding: 'var(--spacing-lg)' }}>
            <h4 className="font-semibold mb-2">Compliance Testing</h4>
            <p className="text-foreground/80">
              Performed WECC and NERC compliance testing on hydropower governor and excitation systems.
            </p>
          </div>
          
          <div className="bg-background/40 rounded-lg p-6 border border-foreground/10" style={{ borderRadius: 'var(--radius-lg)', padding: 'var(--spacing-lg)' }}>
            <h4 className="font-semibold mb-2">Field Transducer Box Design</h4>
            <p className="text-foreground/80">
              Designed and deployed a field transducer box to process turbine signals for monitoring and testing.
            </p>
          </div>
          
          <div className="bg-background/40 rounded-lg p-6 border border-foreground/10" style={{ borderRadius: 'var(--radius-lg)', padding: 'var(--spacing-lg)' }}>
            <h4 className="font-semibold mb-2">QNX RTOS Development</h4>
            <p className="text-foreground/80">
              Developed custom C drivers in QNX RTOS for 12-/16-bit Acromag DAC PCIe boards used in governor/excitation controllers.
            </p>
          </div>
          
          <div className="bg-background/40 rounded-lg p-6 border border-foreground/10" style={{ borderRadius: 'var(--radius-lg)', padding: 'var(--spacing-lg)' }}>
            <h4 className="font-semibold mb-2">Simulink Integration</h4>
            <p className="text-foreground/80">
              Integrated Simulink models for real-time simulation via DAC channels, enabling dynamic testing.
            </p>
          </div>
          
          <div className="bg-background/40 rounded-lg p-6 border border-foreground/10" style={{ borderRadius: 'var(--radius-lg)', padding: 'var(--spacing-lg)' }}>
            <h4 className="font-semibold mb-2">STM32 SPI Implementation</h4>
            <p className="text-foreground/80">
              Implemented 32-bit SPI protocols on STM32 microcontrollers to interface with DAC boards, 
              improving resolution over legacy 16-bit systems.
            </p>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold mb-4">Impact</h3>
        <p className="text-foreground/80 leading-relaxed">
          Advanced hydropower compliance and testing processes while strengthening integration of 
          embedded systems with large-scale power infrastructure.
        </p>
      </section>

      {/* Skills */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold mb-4">Skills</h3>
        <div className="flex flex-wrap gap-3">
          {[
            "Embedded Systems",
            "Power Systems", 
            "QNX RTOS",
            "STM32",
            "C/C++",
            "Simulink",
            "Signal Processing"
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

      {/* Experience Images */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold mb-6">Experience Photos</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="space-y-2">
            <div className="relative h-64 rounded-xl overflow-hidden bg-foreground/5 border border-foreground/10">
              <Image
                src="/projects/cabinet.jpeg"
                alt="Bureau of Reclamation Facility"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-sm text-foreground/60 text-center">Bureau of Reclamation facility and equipment for WECC and NERC compliance testing.</p>
          </div>
          <div className="space-y-2">
            <div className="relative h-64 rounded-xl overflow-hidden bg-foreground/5 border border-foreground/10">
              <Image
                src="/projects/powerplant.jpeg"
                alt="Power Systems Work"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-sm text-foreground/60 text-center">An inside look at the powerplant at Buffalo Bill.</p>
          </div>
          <div className="space-y-2">
            <div className="relative h-64 rounded-xl overflow-hidden bg-foreground/5 border border-foreground/10">
              <Image
                src="/projects/me-cody.jpeg"
                alt="Hydropower Systems"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-sm text-foreground/60 text-center">Work trip to Buffalo Bill Dam and Powerplant</p>
          </div>
        </div>
      </section>
    </main>
  );
}
