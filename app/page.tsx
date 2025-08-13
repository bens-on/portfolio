import Hero from "@/components/Hero";
import AnimatedNav from "@/components/AnimatedNav";
import ProjectCard, { Project } from "@/components/ProjectCard";

const sampleProjects: Project[] = [
  {
    title: "NASA USLI Payload",
    description:
      "Deployable payload to land, sample 50 mL soil, and perform onboard analysis for a March 2026 L2 launch.",
    tech: ["Leadership", "Project Management", "Embedded System Design"],
    imageSrc: "/projects/USLI.png",
    href: "/projects/usli",
  },
  {
    title: "Automated Greenhouse",
    description:
      "Reworked electrical design for a safe, efficient greenhouse control system with documentation.",
    tech: ["Power", "Electrical Safety", "Controls", "C++"],
    imageSrc: "/projects/AG1.png",
    href: "/projects/automated-greenhouse",
  },
  {
    title: "Arduino Monitored Ecosystem",
    description:
      "Environmental data logging and feedback control to maintain plant growth conditions.",
    tech: ["C++", "Sensors", "I2C"],
    imageSrc: "/projects/AMIE1.jpeg",
    href: "/projects/arduino-ecosystem",
  },
];

export default function Home() {
  return (
    <div className="font-sans min-h-screen">
      <Hero
        name="Alex Benson"
        title="Senior Electrical Engineering Student at Colorado State University"
        subtitle="Aspiring Embedded Systems Engineer"
        headshotSrc="/headshot2.png"
      />
      <div className="mx-auto max-w-6xl p-6 sm:p-10">
        <section>
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">Projects</h2>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {sampleProjects.map((p) => (
              <ProjectCard key={p.title} {...p} />
            ))}
          </div>
        </section>

        <section className="mt-10">
          <AnimatedNav
            items={[
              { label: "Resume", href: "/resume" },
              { label: "Experience", href: "/experience" },
              { label: "Contact", href: "/contact" },
            ]}
          />
        </section>
      </div>
    </div>
  );
}
