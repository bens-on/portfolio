import AboutMe from "@/components/AboutMe";
import ProjectCard, { Project } from "@/components/ProjectCard";
import ExperienceCard, { Experience } from "@/components/ExperienceCard";
import ScrollAnimations from "@/components/ScrollAnimations";
import Image from "next/image";

const sampleProjects: Project[] = [
  {
    title: "NASA USLI Payload",
    description:
      "Led a 9-person team to design, build, and fly a deployable soil collection and pH analysis payload for NASA USLI; honors thesis on subsystem integration and reliability.",
    tech: ["Leadership", "Embedded Systems", "Aerospace", "Systems Integration"],
    imageSrc: "/projects/USLI.png",
    href: "/projects/usli",
  },
  {
    title: "L1 HPR Certification",
    description:
      "NAR Level 1 High Power Rocketry certification (Nov 2025)—designed, built, and launched a personal high-power rocket with recovery systems.",
    tech: ["Rocket Construction", "Recovery Systems", "Motor Selection", "Safety"],
    imageSrc: "/rocket_launch/me_L1.jpeg",
    href: "/projects/l1-certification",
  },
  {
    title: "Automated Greenhouse",
    description:
      "Reworked electrical design for a safe, modular greenhouse control system with documentation and safety upgrades.",
    tech: ["Power", "Electrical Safety", "Controls", "C++"],
    imageSrc: "/projects/AG1.png",
    href: "/projects/automated-greenhouse",
  },
  {
    title: "Arduino Monitored Ecosystem",
    description:
      "Environmental data logging and feedback control to maintain plant growth conditions with sensors and relays.",
    tech: ["C++", "Sensors", "I2C", "Controls"],
    imageSrc: "/projects/AMIE1.jpeg",
    href: "/projects/arduino-ecosystem",
  },
];

const sampleExperiences: Experience[] = [
  {
    title: "Bureau of Reclamation, DOI",
    company: "Electrical Engineering Intern",
    duration: "May 2026 – Present",
    description:
      "Returning to the Power System Analysis & Control group supporting hydropower governor and excitation systems, embedded controls, and field instrumentation.",
    skills: ["Power Systems", "Embedded Systems", "Controls", "Hydropower"],
    imageSrc: "/projects/BOR-main.jpeg",
    href: "/experience/bor",
    current: true,
  },
  {
    title: "FIRST RF",
    company: "Embedded Systems Engineering Intern",
    duration: "May 2025 – Aug 2025",
    description:
      "Co-developed a half-duplex phased array for land and maritime connectivity—Altium RF PCB design, Zephyr SPI drivers, and S-parameter validation automation.",
    skills: ["Zephyr RTOS", "Altium", "Phased Arrays", "S-parameters"],
    imageSrc: "/projects/FRF-main.jpeg",
    href: "/experience/first-rf",
  },
  {
    title: "Bureau of Reclamation, DOI",
    company: "Electrical Engineering Intern",
    duration: "May 2024 – Feb 2025",
    description:
      "WECC/NERC governor compliance testing, field transducer design, QNX DAC drivers with Simulink injection, and STM32 SPI for ±10V 3-phase measurement.",
    skills: ["QNX RTOS", "STM32", "C/C++", "Power Systems"],
    imageSrc: "/projects/BOR-main.jpeg",
    href: "/experience/bor",
  },
  {
    title: "Colorado State University",
    company: "Learning Assistant",
    duration: "Aug 2023 – May 2024",
    description:
      "Supported digital logic lab instruction, grading, and tutoring on combinational and sequential design.",
    skills: ["Digital Logic", "Tutoring", "Quartus Prime"],
    imageSrc: "/projects/CSU-main.jpeg",
    href: "/experience/csu-la",
  },
  {
    title: "Woodward",
    company: "Electrical Test Engineering Intern",
    duration: "May 2023 – Aug 2023",
    description:
      "Tested aerospace DAQ hardware, designed a response-test module for space hardware, and built a Python analysis tool that replaced NI DIAdem workflows.",
    skills: ["DAQ", "Python", "Test Engineering", "Aerospace"],
    imageSrc: "/projects/WWD-main.png",
    href: "/experience/woodward",
  },
  {
    title: "Colorado State University",
    company: "Research Assistant – ECSyD Lab",
    duration: "Dec 2022 – May 2023",
    description:
      "Researched photonic integrated circuits; Python automation reduced chip measurement times by up to 90% via selective measurement.",
    skills: ["Python", "klayout", "Photonics"],
    imageSrc: "/projects/CSU-main.jpeg",
    href: "/experience/csu-research",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden relative">
      <div className="relative w-full pt-14 sm:pt-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <ScrollAnimations>
            <section className="mb-10 sm:mb-14 flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
              <div className="relative flex-shrink-0">
                <div
                  className="absolute -inset-1 rounded-full opacity-80 blur-md"
                  style={{ background: "var(--gradient-aurora)" }}
                  aria-hidden
                />
                <div className="relative w-28 h-28 sm:w-44 sm:h-44 md:w-52 md:h-52 rounded-full p-[3px] bg-gradient-to-br from-[var(--accent-tertiary)] via-[var(--accent-primary)] to-[var(--accent-pink)] shadow-glow-aurora">
                  <div className="relative w-full h-full rounded-full overflow-hidden border border-white/20 bg-[var(--background)]">
                    <Image
                      src="/me.png"
                      alt="Alex Benson"
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 112px, (max-width: 768px) 176px, 208px"
                      priority
                    />
                  </div>
                </div>
              </div>
              <div className="flex-1 text-center sm:text-left">
                <p className="font-body text-xs sm:text-sm uppercase tracking-[0.2em] text-foreground/55 mb-2 sm:mb-3">
                  Portfolio
                </p>
                <h1 className="font-header font-bold tracking-tighter leading-none text-[clamp(2.4rem,9vw,7.5rem)] text-gradient-aurora">
                  ALEX BENSON
                </h1>
                <p className="mt-3 sm:mt-4 font-body text-sm sm:text-base md:text-lg text-foreground/75 max-w-xl mx-auto sm:mx-0">
                  MSEE student · Embedded Systems &amp; AI · Aerospace
                </p>
              </div>
            </section>
          </ScrollAnimations>

          <ScrollAnimations delay={80}>
            <AboutMe />
          </ScrollAnimations>

          <ScrollAnimations delay={120}>
            <section className="mt-10 sm:mt-14">
              <h2 className="font-header text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-[var(--foreground)] mb-4 sm:mb-6">
                Experience
              </h2>
              <div className="mt-4 sm:mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                {sampleExperiences.map((e, index) => (
                  <ScrollAnimations
                    key={`${e.title}-${e.company}-${e.duration}`}
                    delay={index * 80}
                  >
                    <ExperienceCard {...e} />
                  </ScrollAnimations>
                ))}
              </div>
            </section>
          </ScrollAnimations>

          <ScrollAnimations delay={160}>
            <section className="mt-12 sm:mt-16">
              <h2 className="font-header text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-[var(--foreground)] mb-4 sm:mb-6">
                Projects
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                {sampleProjects.map((p, index) => {
                  const isGreenhouse = p.title === "Automated Greenhouse";
                  return (
                    <ScrollAnimations key={p.title} delay={index * 80}>
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
