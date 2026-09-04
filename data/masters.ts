import type { Experience } from "@/components/ExperienceCard";

export type MastersCourse = Experience & {
  semester: string;
};

export const mastersCourses: MastersCourse[] = [
  {
    title: "Digital System Design",
    company: "Colorado State University",
    duration: "Fall 2026",
    semester: "Fall 2026",
    description:
      "ECE451/450: Verilog-to-FPGA digital design — combinational and sequential logic, datapath and control, with labs that map HDL onto hardware.",
    skills: ["Verilog", "FPGA", "Sequential Logic", "Datapath"],
    motif: "fpga",
    href: "/masters/digital-system-design",
    current: true,
  },
  {
    title: "Applied AI for Power and Energy",
    company: "Colorado State University",
    duration: "Fall 2026",
    semester: "Fall 2026",
    description:
      "ECE480A9: AI methods paired with grid problems — forecasting, fault detection, state estimation, and frequency control.",
    skills: ["Time-Series ML", "Forecasting", "Power Systems", "RL"],
    motif: "power-ai",
    href: "/masters/applied-ai-power-energy",
    current: true,
  },
  {
    title: "Nonlinear Control Systems",
    company: "Colorado State University",
    duration: "Fall 2026",
    semester: "Fall 2026",
    description:
      "ECE611: stability and feedback design for nonlinear systems — Lyapunov, phase portraits, and controllers beyond linearization.",
    skills: ["Lyapunov", "Phase Portraits", "Feedback Linearization", "Stability"],
    motif: "nonlinear",
    href: "/masters/nonlinear-control",
    current: true,
  },
  {
    title: "Adaptive Systems & Machine Learning",
    company: "Colorado State University",
    duration: "Spring 2026",
    semester: "Spring 2026",
    description:
      "ECE553: adaptive learning algorithms, neural nets, and kernel machines — LMS and backprop through CNNs, GANs, and transformers.",
    skills: ["Neural Networks", "Pattern Recognition", "Deep Learning", "Kernel Machines"],
    motif: "adaptive-ml",
    href: "/masters/adaptive-systems-ml",
  },
  {
    title: "AI for Radar and Remote Sensing",
    company: "Colorado State University",
    duration: "Spring 2026",
    semester: "Spring 2026",
    description:
      "ECE556: machine learning on radar and satellite data — precipitation detection, classification, and estimation with CNNs, RNNs, and related models.",
    skills: ["Radar", "Remote Sensing", "Deep Learning", "CNNs"],
    motif: "radar",
    href: "/masters/ai-radar-remote-sensing",
  },
  {
    title: "Aerospace Vehicles Trajectory and Performance",
    company: "Colorado State University",
    duration: "Spring 2026",
    semester: "Spring 2026",
    description:
      "MECH519B: orbital mechanics and launch-vehicle trajectory design — LEO through interplanetary, with STK, Excel sizing, and GMAT.",
    skills: ["Orbital Mechanics", "Trajectories", "STK", "Launch Vehicles"],
    motif: "trajectory",
    href: "/masters/aerospace-trajectory",
  },
  {
    title: "Applied Electromagnetics",
    company: "Colorado State University",
    duration: "Fall 2025",
    semester: "Fall 2025",
    description:
      "ECE541: applied EM — wave propagation, radiation, and scattering, with Method-of-Moments projects on strips, ground planes, and thin-wire scatterers.",
    skills: ["Electromagnetics", "Method of Moments", "Radiation", "Scattering"],
    motif: "em",
    href: "/masters/applied-electromagnetics",
  },
  {
    title: "Electrical Power Engineering",
    company: "Colorado State University",
    duration: "Fall 2025",
    semester: "Fall 2025",
    description:
      "ECE565: power-system analysis — power flow, faults, state estimation, and stability, with MATLAB/Simscape studies.",
    skills: ["Power Flow", "Fault Analysis", "State Estimation", "MATLAB"],
    motif: "power",
    href: "/masters/electrical-power-engineering",
  },
];

export const currentMastersCourses = mastersCourses.filter(
  (course) => course.current,
);

export function coursesBySemester(): { term: string; courses: MastersCourse[] }[] {
  const terms: string[] = [];
  for (const course of mastersCourses) {
    if (!terms.includes(course.semester)) {
      terms.push(course.semester);
    }
  }
  return terms.map((term) => ({
    term,
    courses: mastersCourses.filter((course) => course.semester === term),
  }));
}
