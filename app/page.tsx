import Hero from "@/components/Hero";
import AnimatedNav from "@/components/AnimatedNav";
import ProjectCard, { Project } from "@/components/ProjectCard";
import ExperienceCard, { Experience } from "@/components/ExperienceCard";
import Link from "next/link";

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

const sampleExperiences: Experience[] = [
  {
    title: "FIRST RF",
    company: "Embedded Systems Engineering Intern",
    duration: "May 2025 - Aug 2025",
    description: "Developed phased-array and RF embedded systems for defense applications, including PCB design, SPI driver development, and automation of RF component validation.",
    skills: ["RF Engineering", "Embedded Systems", "Phased Arrays", "Electronic Warfare"],
    imageSrc: "/projects/FRF-main.jpeg",
    href: "/experience/first-rf",
  },
  {
    title: "Bureau of Reclamation, DOI",
    company: "Electrical Engineering Intern",
    duration: "May 2024 - Aug 2024",
    description: "Engineered hardware/software solutions for hydropower plants, including governor compliance testing, custom DAC drivers, and real-time simulation tools in QNX RTOS.",
    skills: ["C/C++", "Embedded Systems", "QNX RTOS", "Power Systems"],
    imageSrc: "/projects/BOR-main.jpeg",
    href: "/experience/bor",
  },
  {
    title: "Colorado State University",
    company: "Learning Assistant",
    duration: "Aug 2023 - May 2024",
    description: "Supported student learning in digital logic through lab instruction, tutoring, and technical guidance on combinational and sequential logic design.",
    skills: ["Digital Logic", "Tutoring", "Technical Instruction", "Quartus Prime"],
    imageSrc: "/projects/CSU-main.jpeg",
    href: "/experience/csu-la",
  },
  {
    title: "Woodward",
    company: "Electrical Test Engineering Intern",
    duration: "May 2023 - Aug 2023",
    description: "Designed and tested aerospace data acquisition systems, creating Python tools and hardware modules to accelerate analysis and meet customer specifications.",
    skills: ["DAQ", "Python", "Test Engineering"],
    imageSrc: "/projects/WWD-main.png",
    href: "/experience/woodward",
  },
  {
    title: "Colorado State University",
    company: "Research Assistant - ECSyD Lab",
    duration: "Dec 2022 - May 2023",
    description: "Researched photonic integrated circuits; used Python automation to reduce chip measurement times by up to 90% with selective measurement.",
    skills: ["Python", "klayout", "Photonic Integrated Circuits"],
    imageSrc: "/projects/CSU-main.jpeg",
    href: "/experience/csu-research",
  },
];

export default function Home() {
  return (
    <div className="font-sans min-h-screen">
      <Hero
        name="Alex Benson"
        title="Senior Electrical Engineering Student at Colorado State University"
        subtitle="Aspiring Embedded Systems Engineer"
        headshotSrc="/me.png?v=2"
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
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">Experience</h2>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {sampleExperiences.map((e) => (
              <ExperienceCard key={`${e.title}-${e.company}`} {...e} />
            ))}
          </div>
        </section>

        <section className="mt-16">
          <AnimatedNav
            items={[
              { label: "Resume", href: "/resume" },
              { label: "Contact", href: "/contact" },
            ]}
          />
        </section>
      </div>
    </div>
  );
}
