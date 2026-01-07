import BackLink from "@/components/BackLink";
import ExperienceCard, { Experience } from "@/components/ExperienceCard";
import ScrollAnimations from "@/components/ScrollAnimations";

const experiences: Experience[] = [
  {
    title: "FIRST RF",
    company: "Embedded Systems Engineering Intern",
    duration: "May 2025 – Aug 2025",
    description: "Developed phased-array and RF embedded systems for defense applications, including PCB design, SPI driver development, and automation of RF component validation.",
    skills: ["RF Engineering", "Embedded Systems", "Phased Arrays", "Electronic Warfare"],
    imageSrc: "/projects/FRF-main.jpeg",
    href: "/experience/first-rf",
  },
  {
    title: "Bureau of Reclamation, U.S. Department of the Interior",
    company: "Electrical Engineering Intern",
    duration: "May 2024 – Feb 2025",
    description: "Engineered hardware/software solutions for hydropower plants, including governor compliance testing, custom DAC drivers, and real-time simulation tools in QNX RTOS.",
    skills: ["C/C++", "Embedded Systems", "QNX RTOS", "Power Systems"],
    imageSrc: "/projects/BOR-main.jpeg",
    href: "/experience/bor",
  },
  {
    title: "Colorado State University",
    company: "Learning Assistant",
    duration: "Aug 2023 – May 2024",
    description: "Supported student learning in digital logic through lab instruction, tutoring, and technical guidance on combinational and sequential logic design.",
    skills: ["Digital Logic", "Tutoring", "Technical Instruction", "Quartus Prime"],
    imageSrc: "/projects/CSU-main.jpeg",
    href: "/experience/csu-la",
  },
  {
    title: "Woodward, Inc.",
    company: "Electrical Test Engineering Intern",
    duration: "May 2023 – Aug 2023",
    description: "Designed and tested aerospace data acquisition systems, creating Python tools and hardware modules to accelerate analysis and meet customer specifications.",
    skills: ["DAQ", "Python", "Test Engineering"],
    imageSrc: "/projects/WWD-main.png",
    href: "/experience/woodward",
  },
  {
    title: "Colorado State University",
    company: "Research Assistant - ECSyD Lab",
    duration: "Dec 2022 – May 2023",
    description: "Researched photonic integrated circuits; used Python automation to reduce chip measurement times by up to 90% with selective measurement.",
    skills: ["Python", "klayout", "Photonic Integrated Circuits"],
    imageSrc: "/projects/CSU-main.jpeg",
    href: "/experience/csu-research",
  },
];

export default function ExperiencePage() {
  return (
    <main className="mx-auto max-w-7xl p-6 sm:p-10 pt-20 sm:pt-24">
      <div className="mb-8 sm:mb-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight mb-2">Experience</h1>
        <p className="text-foreground/80">Professional roles, internships, and research positions.</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {experiences.map((e, index) => (
          <ScrollAnimations key={`${e.title}-${e.company}`} delay={index * 100}>
            <ExperienceCard {...e} />
          </ScrollAnimations>
        ))}
      </div>
      
      <BackLink />
    </main>
  );
}


