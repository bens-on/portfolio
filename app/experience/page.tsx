import BackLink from "@/components/BackLink";
import ExperienceCard, { Experience } from "@/components/ExperienceCard";
import ScrollAnimations from "@/components/ScrollAnimations";

const experiences: Experience[] = [
  {
    title: "Bureau of Reclamation, DOI",
    company: "Electrical Engineering Intern",
    duration: "May 2026 – Present",
    description:
      "Building QNX drivers for NI PCIe DAQ hardware on an SEL-3355 digital exciter platform, plus the plant HMI that will deploy across western U.S. hydropower plants.",
    skills: ["QNX RTOS", "Driver Development", "HMI", "DAQ"],
    imageSrc: "/projects/BOR-main.jpeg",
    href: "/experience/bor",
    current: true,
  },
  {
    title: "Colorado State University",
    company: "Graduate Teaching Assistant",
    duration: "Aug 2026 – Present",
    description:
      "Lead three ECE205 Analog Circuits lab sections, host weekly office hours, and support students through circuit analysis and lab work.",
    skills: ["Analog Circuits", "Lab Instruction", "Teaching"],
    imageSrc: "/projects/CSU-main.jpeg",
    href: "/experience/csu-gta",
    current: true,
  },
  {
    title: "FIRST RF",
    company: "Embedded Systems Engineering Intern",
    duration: "May 2025 – Aug 2025",
    description:
      "Co-developed a half-duplex phased array for land and maritime connectivity—Altium RF PCB design, Zephyr SPI drivers, and S-parameter validation automation.",
    skills: ["Zephyr RTOS", "Altium", "Phased Arrays", "RF Validation"],
    imageSrc: "/projects/FRF-main.jpeg",
    imageContain: true,
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
    href: "/experience/bor-2024",
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

export default function ExperiencePage() {
  return (
    <main className="mx-auto max-w-7xl p-6 sm:p-10 pt-20 sm:pt-24">
      <div className="mb-8 sm:mb-12">
        <h1 className="font-header text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight mb-2">
          Experience
        </h1>
        <p className="text-foreground/80">
          Professional roles, internships, and research positions.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {experiences.map((e, index) => (
          <ScrollAnimations
            key={`${e.title}-${e.company}-${e.duration}`}
            delay={index * 80}
          >
            <ExperienceCard {...e} />
          </ScrollAnimations>
        ))}
      </div>

      <div className="mt-10">
        <BackLink />
      </div>
    </main>
  );
}
