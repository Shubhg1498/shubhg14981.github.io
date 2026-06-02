export const site = {
  name: "Shubham Shursen Ghogare",
  shortName: "Shubham Ghogare",
  role: "Mechatronics Engineer · Robotics & Autonomous Systems",
  tagline:
    "MSc Commercial Vehicle Technology at RPTU. I work on robot learning, ADAS, and safe motion planning—from simulation to real hardware.",
  email: "shubham.ghogare14@gmail.com",
  location: "Kaiserslautern, Germany",
  focus: "Robotics · ADAS · Control & ML",
  currently:
    "Intern at NEURA Robotics · Master thesis on Neural Control Barrier Functions",
  social: {
    github: "https://github.com/Shubhg1498",
    linkedin: "https://www.linkedin.com/in/shubham-ghogare-b30537136/",
    /** Update with your photography Instagram URL when ready */
    instagram: "https://www.instagram.com/",
  },
} as const;

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#photography", label: "Photography" },
  { href: "#contact", label: "Contact" },
] as const;

export const about = {
  paragraphs: [
    "I'm a mechatronics engineer with a Master's in Commercial Vehicle Technology and a foundation in mechanical engineering from VIT. I bridge vehicle dynamics, control theory, and modern ML for autonomous systems.",
    "At NEURA Robotics I train humanoid and collaborative robots on diverse manipulation tasks. My thesis implements and evaluates Neural Control Barrier Functions in ROS 2 simulation for certifiably safe navigation.",
    "Outside the lab I'm a photographer and amateur botanist—always curious about how complex systems (natural or engineered) behave.",
  ],
  focus: site.focus,
} as const;

export const skills = [
  "ROS 2",
  "Python",
  "PyTorch",
  "MATLAB / Simulink",
  "Control Barrier Functions",
  "Reinforcement Learning",
  "Isaac Sim",
  "Computer Vision",
  "Vehicle Dynamics",
  "ADAS / Autonomous Driving",
  "C++",
  "Linux",
] as const;

export type Project = {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    title: "Vision Dual-Arm Teleoperation",
    description:
      "Dual-arm teleoperation stack integrating vision and control for dexterous robot manipulation—active development.",
    tags: ["ROS 2", "Python", "Robotics"],
    repo: "https://github.com/Shubhg1498/vision-dual-arm-teleop",
  },
  {
    title: "Hierarchical RL for Robotic Arm",
    description:
      "Hierarchical reinforcement learning framework for multi-stage robotic arm tasks with structured skill decomposition.",
    tags: ["Python", "RL", "Manipulation"],
    repo: "https://github.com/Shubhg1498/hierarchical-rl-robotic-arm",
  },
  {
    title: "Neural CBF Training (Master Thesis)",
    description:
      "Implementation and evaluation of Neural Control Barrier Functions in a ROS 2-based simulation environment for safe autonomous motion.",
    tags: ["ROS 2", "PyTorch", "Safety"],
    repo: "https://github.com/Shubhg1498/Masters-Thesis-NCBF-Training",
  },
  {
    title: "CBF Obstacle Avoidance",
    description:
      "2D car-like robot simulation combining PD control with Control Barrier Functions for static and dynamic obstacle avoidance.",
    tags: ["Python", "CBF", "Planning"],
    repo: "https://github.com/Shubhg1498/CBF-for-obstacle-avoidance",
  },
  {
    title: "Parallel Mild-Hybrid EMS",
    description:
      "Energy management strategy for a parallel mild-hybrid electric vehicle—rule-based and optimization-driven control.",
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
      "Training robots on diverse manipulation and task policies; bridging simulation, data collection, and deployment on NEURA platforms.",
  },
  {
    period: "Nov 2024 — Present",
    title: "Master Thesis Student",
    org: "RPTU Kaiserslautern-Landau",
    detail:
      "Neural Control Barrier Functions in ROS 2 simulation—implementation, evaluation, and safe motion planning for autonomous systems.",
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
      "Literature review on software validation; designed and implemented an automated MATLAB-based validation tool for gear simulation workflows.",
  },
  {
    period: "Jun 2019 — Jun 2020",
    title: "Student Trainee",
    org: "ARAI, Pune",
    detail:
      "Automotive R&D exposure—testing, calibration, and vehicle development processes in India's leading automotive research institute.",
  },
  {
    period: "2017 — 2019",
    title: "Vehicle Dynamics Engineer · Vice Captain",
    org: "KI Racing (VIT)",
    detail:
      "Formula Student team—vehicle dynamics, design, and competition operations for SAE BAJA events in the US.",
  },
] as const;

export const education = [
  {
    period: "2021 — 2025",
    degree: "M.Sc. Commercial Vehicle Technology",
    school: "RPTU Kaiserslautern-Landau",
    detail: "Focus on autonomous driving, ADAS, and commercial vehicle systems.",
  },
  {
    period: "2016 — 2020",
    degree: "B.Tech Mechanical Engineering (8.69 CGPA)",
    school: "Vellore Institute of Technology",
    detail: "Mechatronics-oriented track with robotics, vehicle dynamics, and design projects.",
  },
] as const;

export const certifications = [
  "Aerial Robotics (Coursera)",
  "Electric Cars: Technology, Business & Introduction (edX)",
  "SAE BAJA Oregon & Rochester (SAE International)",
] as const;

export const photography = {
  title: "Photography",
  lead: "Street, travel, and nature—another way I study light and composition.",
  cta: "View on Instagram",
} as const;
