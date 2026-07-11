import BackLink from "@/components/BackLink";
import Image from "next/image";

export default function ArduinoEcosystemPage() {
  return (
    <main className="mx-auto max-w-4xl p-6 sm:p-10 pt-20 sm:pt-24">
      <BackLink />
      
      {/* Header */}
      <div className="mt-8 mb-12">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">Arduino Monitored Ecosystem</h1>
        <h2 className="text-xl font-semibold text-foreground/80 mb-1">Sophomore Design Project</h2>
        <p className="text-foreground/60 mb-4">Spring 2024</p>
        
        {/* Project Image */}
        <div className="relative h-48 w-full rounded-xl overflow-hidden mb-8">
          <Image
            src="/projects/AMIE4.png"
            alt="Arduino Monitored Ecosystem"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Overview */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold mb-4">Overview</h3>
        <p className="text-foreground/80 leading-relaxed">
          Designed and built an enclosed ecosystem monitoring system using Arduino, focused on environmental 
          data collection and real-time display through I2C communication.
        </p>
      </section>

      {/* Key Contributions */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold mb-6">Key Contributions</h3>
        <div className="space-y-6">
          <div className="glass-panel rounded-xl p-5 sm:p-6">
            <h4 className="font-semibold mb-2">Sensor Programming</h4>
            <p className="text-foreground/80">
              Programmed Arduino in C++ to collect accurate environmental data (temperature, humidity, soil moisture) from various sensors.
            </p>
          </div>
          
          <div className="glass-panel rounded-xl p-5 sm:p-6">
            <h4 className="font-semibold mb-2">I2C Communication</h4>
            <p className="text-foreground/80">
              Implemented I2C communication protocol to transmit sensor data between Arduino and external components.
            </p>
          </div>
          
          <div className="glass-panel rounded-xl p-5 sm:p-6">
            <h4 className="font-semibold mb-2">Real-Time Data Display</h4>
            <p className="text-foreground/80">
              Created a real-time data display system using an LED module to show collected environmental information in a continuous loop.
            </p>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold mb-4">Impact</h3>
        <p className="text-foreground/80 leading-relaxed">
          Created a reliable environmental monitoring and data display system, demonstrating practical applications 
          of embedded systems, sensor integration, and I2C communication in small-scale ecosystem monitoring.
        </p>
      </section>

      {/* Skills */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold mb-4">Skills</h3>
        <div className="flex flex-wrap gap-3">
          {[
            "Arduino",
            "C++", 
            "Control Systems",
            "Embedded Systems",
            "Environmental Sensing"
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
                src="/projects/AMIE1.jpeg"
                alt="Arduino Ecosystem Setup"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-sm text-foreground/60 text-center">Arduino ecosystem monitoring setup</p>
          </div>
          <div className="space-y-2">
            <div className="relative h-64 rounded-xl overflow-hidden bg-foreground/5 border border-foreground/10">
              <Image
                src="/projects/AMIE3.jpeg"
                alt="Environmental Sensors"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-sm text-foreground/60 text-center">Isa, Macy, and I demonstrating the project at Sophomore Design Expo</p>
          </div>
        </div>
      </section>
    </main>
  );
}


