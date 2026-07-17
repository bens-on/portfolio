import AboutMe from "@/components/AboutMe";
import ProjectCard, { Project } from "@/components/ProjectCard";
import ExperienceCard, { Experience } from "@/components/ExperienceCard";
import ScrollAnimations from "@/components/ScrollAnimations";
import Image from "next/image";

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
    title: "L1 HPR Certification",
    description:
      "Successfully obtained Level 1 High Power Rocketry certification by designing, building, and launching my own high-power rocket.",
    tech: ["Rocket Construction", "Recovery Systems", "Motor Selection", "Safety"],
    imageSrc: "/rocket_launch/me_L1.jpeg",
    href: "/projects/l1-certification",
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
    <div className="min-h-screen bg-[var(--background)] overflow-x-hidden relative">
      {/* Projects and Experiences Sections */}
      <div className="relative bg-[var(--background)] w-full pt-12 sm:pt-14" style={{ minHeight: '200px' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          {/* Headshot Image with Name */}
          <ScrollAnimations>
            <div className="mb-8 sm:mb-12 flex flex-col md:flex-row items-center gap-4 md:gap-6 -mt-2 sm:-mt-3">
              <div className="w-28 h-28 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 flex-shrink-0">
                <Image
                  src="/me.png"
                  alt="Alex Benson"
                  width={224}
                  height={224}
                  className="object-contain w-full h-full"
                  sizes="(max-width: 640px) 112px, (max-width: 768px) 160px, (max-width: 1024px) 192px, 224px"
                  priority
                />
              </div>
              <h1 className="font-header font-bold tracking-tighter text-[var(--foreground)] leading-none text-center md:text-left flex-1 flex items-center justify-center md:justify-start min-w-0 text-[clamp(2.25rem,12vw,4.5rem)] md:text-[clamp(2.75rem,8vw,8rem)] lg:text-[clamp(3.5rem,9vw,12rem)] md:h-48 lg:h-56">
                ALEX BENSON
              </h1>
            </div>
          </ScrollAnimations>

          {/* About Me Section */}
          <ScrollAnimations delay={50}>
            <AboutMe />
          </ScrollAnimations>

          {/* Experience Grid */}
          <ScrollAnimations delay={100}>
            <section className="mt-12 sm:mt-16">
              <h2 className="font-header text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-[var(--foreground)] mb-4 sm:mb-6">Experience</h2>
              <div className="mt-4 sm:mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                {sampleExperiences.map((e, index) => (
                  <ScrollAnimations key={`${e.title}-${e.company}`} delay={index * 150}>
                    <ExperienceCard {...e} />
                  </ScrollAnimations>
                ))}
              </div>
            </section>
          </ScrollAnimations>

          {/* Projects Grid */}
          <ScrollAnimations delay={200}>
            <section className="mt-12 sm:mt-16">
              <h2 className="font-header text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-[var(--foreground)] mb-4 sm:mb-6">Projects</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                {sampleProjects.map((p, index) => {
                  const isGreenhouse = p.title === "Automated Greenhouse";
                  return (
                    <ScrollAnimations key={p.title} delay={index * 100}>
                      <div className={isGreenhouse ? "sm:col-span-2" : ""}>
                        <ProjectCard {...p} />
                      </div>
                    </ScrollAnimations>
                  );
                })}
              </div>
            </section>
          </ScrollAnimations>
        </div>
      </div>
    </div>
  );
}
