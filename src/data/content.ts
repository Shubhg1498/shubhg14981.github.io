export const site = {
  name: "Shubham Shursen Ghogare",
  shortName: "Shubham Ghogare",
  headline: "Robotics & Autonomous Systems Engineer.",
  headlineAccent: "From simulation to real robots.",
  role: "Mechatronics Engineer",
  locationLine: "Kaiserslautern, DE",
  tagline:
    "M.Sc. Commercial Vehicle Technology at RPTU with hands-on work in robot learning, ADAS, and safety-critical control. Intern at NEURA Robotics training platforms for diverse manipulation tasks.",
  email: "shubham.ghogare14@gmail.com",
  location: "Kaiserslautern, Germany",
  focus: "Robotics · ADAS · Control & ML",
  currently:
    "Intern at NEURA Robotics · Master thesis on Neural Control Barrier Functions",
  social: {
    github: "https://github.com/Shubhg1498",
    linkedin: "https://www.linkedin.com/in/shubham-ghogare-b30537136/",
    instagram: "https://www.instagram.com/",
  },
} as const;

export const heroCredentials = [
  "M.Sc. Commercial Vehicle Technology",
  "ROS 2 · PyTorch · Python",
  "NEURA Robotics",
  "ADAS & Autonomous Systems",
  "Open to roles in DE/EU",
] as const;

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#achievements", label: "Achievements" },
  { href: "#skills", label: "Strengths" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
] as const;

export const about = {
  title: "Engineer. Builder. Team player.",
  paragraphs: [
    "I'm a mechatronics engineer with a Master's in Commercial Vehicle Technology and a B.Tech in Mechanical Engineering from VIT. I connect vehicle dynamics, modern control, and machine learning for autonomous and robotic systems.",
    "At NEURA Robotics I train humanoid and collaborative robots on diverse real-world tasks—bridging data collection, policy learning, and deployment. My thesis implements and evaluates Neural Control Barrier Functions in ROS 2 for certifiably safe motion in simulation.",
    "Previously at ZF Group I built automated MATLAB validation for gear simulation; at MOBOTIX I work on embedded vision. I also photograph and study plants outside the lab—same curiosity, different domain.",
  ],
} as const;

/** Placeholder highlights — replace values in content.ts when you have final numbers. */
export const achievements = [
  {
    value: "6+",
    label: "Years in robotics & automotive",
    detail: "ARAI · KI Racing · ZF · NEURA",
  },
  {
    value: "8.69",
    label: "B.Tech CGPA",
    detail: "VIT · Mechanical Engineering",
  },
  {
    value: "M.Sc.",
    label: "Commercial Vehicle Technology",
    detail: "RPTU Kaiserslautern-Landau",
  },
  {
    value: "2×",
    label: "SAE BAJA USA",
    detail: "KI Racing · Vehicle dynamics lead",
  },
] as const;

export const skillGroups = [
  {
    title: "Robotics & Autonomy",
    items: [
      "ROS 2",
      "Isaac Sim",
      "Manipulation & teleop",
      "Reinforcement learning",
      "Humanoid / cobot platforms",
    ],
  },
  {
    title: "Control & Safety",
    items: [
      "Control Barrier Functions",
      "Neural CBF (thesis)",
      "MATLAB / Simulink",
      "Vehicle dynamics",
      "Trajectory planning",
    ],
  },
  {
    title: "Programming & ML",
    items: [
      "Python",
      "PyTorch",
      "C++",
      "Computer vision",
      "Linux",
    ],
  },
  {
    title: "Automotive & ADAS",
    items: [
      "ADAS concepts",
      "Commercial vehicle systems",
      "Software validation",
      "HEV energy management",
      "Simulation workflows",
    ],
  },
] as const;

export type ProjectMedia =
  | { type: "image"; src: string; alt?: string; fit?: "cover" | "contain" }
  | { type: "video"; src: string; poster?: string }
  | { type: "youtube"; id: string };

export type Project = {
  title: string;
  subtitle: string;
  org: string;
  description: string;
  tags: string[];
  highlight?: string;
  media?: ProjectMedia;
  href?: string;
  repo?: string;
  /** e.g. Google Drive link to thesis PDF */
  reportUrl?: string;
};

export const projects: Project[] = [
  {
    title: "Vision Dual-Arm Teleoperation",
    subtitle: "Active development · 2025–2026",
    org: "Personal research · ROS 2 stack",
    description:
      "Dual-arm teleoperation integrating vision and control for dexterous manipulation—data collection, policy interfaces, and hardware-in-the-loop experiments.",
    tags: ["ROS 2", "Python", "Computer Vision", "Manipulation"],
    repo: "https://github.com/Shubhg1498/vision-dual-arm-teleop",
  },
  {
    title: "Neural Control Barrier Functions",
    subtitle: "Master thesis · 2024–2025",
    org: "RPTU Kaiserslautern-Landau · Institute of Electromobility",
    description:
      "Implementation and evaluation of neural control barrier functions in ROS 2–based simulation: Gazebo environment setup, data collection, Python preprocessing, PyTorch training with Weights & Biases validation, and verification of the learned nCBF as a safety filter.",
    tags: ["ROS 2", "Gazebo", "PyTorch", "Python", "W&B", "Safety"],
    media: {
      type: "image",
      src: "projects/thesis-ncbf-flowchart.png",
      alt: "Thesis workflow from Gazebo/ROS simulation through PyTorch training to nCBF safety filter verification",
      fit: "contain",
    },
    reportUrl:
      "https://drive.google.com/file/d/14jPYReLPAdvtDuCVOaZfYJSJKQ5S26Pi",
    repo: "https://github.com/Shubhg1498/Masters-Thesis-NCBF-Training",
  },
  {
    title: "Hierarchical RL for Robotic Arm",
    subtitle: "M.Sc. project · 2025",
    org: "Reinforcement learning · manipulation",
    description:
      "Hierarchical RL framework decomposing long-horizon arm tasks into reusable skills with structured training and evaluation in simulation.",
    tags: ["Python", "RL", "Robotics"],
    repo: "https://github.com/Shubhg1498/hierarchical-rl-robotic-arm",
  },
  {
    title: "CBF Obstacle Avoidance",
    subtitle: "Simulation · 2024",
    org: "2D car-like robot",
    description:
      "PD control with Control Barrier Functions for static and dynamic obstacles—trajectory tracking with formal safety constraints in Python simulation.",
    tags: ["Python", "CBF", "Motion Planning"],
    repo: "https://github.com/Shubhg1498/CBF-for-obstacle-avoidance",
  },
  {
    title: "Parallel Mild-Hybrid EMS",
    subtitle: "B.Tech capstone · 2020",
    org: "Energy management · HEV",
    description:
      "Rule-based and optimization-driven energy management for a parallel mild-hybrid electric vehicle in MATLAB/Simulink.",
    tags: ["MATLAB", "HEV", "Control"],
    repo: "https://github.com/Shubhg1498/Energy-Management-System-for-Parallel-Mild-Hybrid-Electric-Vehicle",
  },
];

export const experience = [
  {
    period: "2025 — Present",
    title: "Robotics Intern",
    org: "NEURA Robotics",
    detail:
      "Training robots on diverse manipulation tasks; simulation, data collection, and deployment on NEURA platforms.",
  },
  {
    period: "Nov 2024 — Present",
    title: "Master Thesis Student",
    org: "RPTU Kaiserslautern-Landau",
    detail:
      "Neural Control Barrier Functions in ROS 2—implementation, evaluation, and safe motion planning.",
  },
  {
    period: "Feb 2024 — Present",
    title: "Working Student",
    org: "MOBOTIX AG",
    detail:
      "Embedded vision and industrial camera systems in a production-oriented environment.",
  },
  {
    period: "Jul — Dec 2023",
    title: "Research Intern",
    org: "ZF Group",
    detail:
      "Automated MATLAB validation tooling for gear simulation and software verification workflows.",
  },
  {
    period: "Jun 2019 — Jun 2020",
    title: "Student Trainee",
    org: "ARAI, Pune",
    detail:
      "Automotive testing, calibration, and vehicle development at India's leading automotive R&D institute.",
  },
  {
    period: "2017 — 2019",
    title: "Vehicle Dynamics · Vice Captain",
    org: "KI Racing (VIT)",
    detail:
      "Formula Student team—SAE BAJA Oregon & Rochester; vehicle dynamics and competition operations.",
  },
] as const;

export type EducationEntry = {
  period: string;
  degree: string;
  school: string;
  location: string;
  detail: string;
  stats: { label: string; value: string }[];
};

export const education: EducationEntry[] = [
  {
    period: "2021 — 2025",
    degree: "M.Sc. Commercial Vehicle Technology",
    school: "RPTU Kaiserslautern-Landau",
    location: "Germany",
    detail: "Autonomous driving, ADAS, and commercial vehicle systems.",
    stats: [
      { label: "Focus", value: "ADAS · Autonomy" },
      { label: "Thesis", value: "Neural CBF / ROS 2" },
      { label: "Status", value: "Completed" },
    ],
  },
  {
    period: "2016 — 2020",
    degree: "B.Tech Mechanical Engineering",
    school: "Vellore Institute of Technology",
    location: "India",
    detail: "Robotics, vehicle dynamics, and design-intensive coursework.",
    stats: [
      { label: "CGPA", value: "8.69" },
      { label: "Team", value: "KI Racing" },
      { label: "Activities", value: "SAE BAJA USA" },
    ],
  },
];

export const certifications = [
  "Aerial Robotics (Coursera)",
  "Electric Cars: Technology, Business & Introduction (edX)",
  "SAE BAJA Oregon & Rochester (SAE International)",
] as const;

export const contactCta = {
  title: "Ready to build safer, smarter autonomous systems?",
  lead: "Open to robotics, ADAS, and autonomy roles across Germany and the EU.",
} as const;
