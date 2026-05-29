export type ResumeItem = {
  title: string;
  org?: string;
  location?: string;
  date: string;
  subtitle?: string;
  bullets?: string[];
  links?: { label: string; href: string }[];
};

export const education: ResumeItem[] = [
  {
    title: "M.S. in Electrical and Computer Engineering",
    org: "University of Wisconsin-Madison",
    location: "Madison, WI",
    date: "Jan 2026 - expected Dec 2026",
    subtitle: "Focus: RF/microwave engineering, machine learning, and signal processing",
  },
  {
    title: "B.S. in Computer Engineering",
    org: "University of Wisconsin-Madison",
    location: "Madison, WI",
    date: "Sept 2022 - Dec 2025",
    subtitle:
      "GPA: 3.54/4.00. Coursework: operating systems, computer architecture, digital system design and synthesis, microprocessor systems, artificial neural networks, applied communications systems, and hardware prototyping capstone.",
  },
];

export const experience: ResumeItem[] = [
  {
    title: "Software Engineering Intern",
    org: "Honeywell Aerospace",
    location: "Phoenix, AZ",
    date: "Jun 2025 - Aug 2025",
    bullets: [
      "Developed a secure on-device AI system in Docker for local data processing workflows.",
      "Automated an internal data-search task, saving 13.87 minutes per hour of analyst work.",
      "Used test-bench behavior and internal requirement documents to inform system design decisions.",
    ],
  },
  {
    title: "Researcher",
    org: "University of Wisconsin-Madison",
    location: "Madison, WI",
    date: "May 2024 - present",
    bullets: [
      "Built a low-cost wearable capacitive sensing platform that can be scanned, visualized, and logged from a smartphone.",
      "Created a cross-platform iOS and Android app for real-time capacitance data capture.",
      "Reduced estimated per-unit cost to $0.40-$0.65 at scale, 75-90% below comparable Bluetooth systems.",
      "Awarded 2nd place out of 37 projects at the ECE Undergraduate Research Symposium; patent filed.",
      "Built Python workflows for RF/microwave inverse design using CST simulation, optimization, surrogate modeling, and physics-based performance prediction.",
      "Built a production-style antenna test platform for electric-field validation using thermal imaging at two polarizations, STM32/grblHAL motion control, RF relay timing, and automated cold/hot delta-image capture.",
      "Developed real-time computer vision tooling for running-form analysis with 20+ biomechanical metrics at 35 FPS.",
    ],
    links: [
      {
        label: "Capacitance sensor poster",
        href: "https://docs.google.com/presentation/d/1T1qgnnrkYAt_PJ09slcXwNkcZV427z03/",
      },
      {
        label: "Running form analyzer",
        href: "https://github.com/henryczup/running-form-analyzer",
      },
    ],
  },
  {
    title: "Founder, Technician",
    org: "Capital Tech Repairs",
    location: "Madison, WI",
    date: "May 2023 - present",
    bullets: [
      "Launched an on-campus iPhone repair service designed around fast, walkable service for college students.",
      "Completed 36+ repairs with a 100% 5-star review rate across 28 reviews and a 29-minute average repair time.",
      "Built a full-stack booking platform with real-time calendar integration and support for multiple repair locations.",
      "Drove 7,000+ views from 1,600+ users with 63-second average engagement and 17,000+ tracked user events.",
    ],
    links: [{ label: "Website", href: "https://capitaltechrepairs.com" }],
  },
];

export const selectedProjects: ResumeItem[] = [
  {
    title: "RFIC Transformer Inverse Design",
    location: "Madison, WI",
    date: "2026",
    bullets: [
      "Built a Python toolkit for RFIC transformer layout generation, EMX/Cadence evaluation, and optimization.",
      "Implemented layout export, Touchstone/S-parameter analysis, differential metric extraction, and objective scoring.",
      "Added workflows with evolution strategies and Bayesian optimization support for transformer design exploration.",
    ],
    links: [{ label: "GitHub", href: "https://github.com/henryczup/rfic-transformer-inverse-design" }],
  },
  {
    title: "QR Antenna Optimizer",
    location: "Madison, WI",
    date: "2026",
    bullets: [
      "Built a Python/CST workflow to generate QR-code-based microstrip patch antennas.",
      "Automated S11 simulation and optimization across patch size, feed width, and QR geometry variants.",
      "Ranked QR payloads and rotations to preserve scanability while maintaining antenna feed connectivity.",
      "Orchestrated large CST design sweeps on CHTC GPUs using TuRBO optimization.",
    ],
  },
  {
    title: "LAXGRADES",
    location: "Madison, WI",
    date: "2024 - present",
    bullets: [
      "Created a UW-La Crosse grade distribution platform that analyzes 17,000+ grades to support course selection.",
      "Implemented search and filtering around historical grade data for registration planning.",
      "Reached 2,800 users, 107,000+ site events, and 3m 53s average engagement per active user.",
      "Monetized organic registration-period traffic through ad placement.",
    ],
    links: [{ label: "Website", href: "https://laxgrades.com" }],
  },
  {
    title: "Theta Tau Xi Website",
    location: "Madison, WI",
    date: "2024",
    bullets: [
      "Led a complete website redesign that won Best Website at nationals among 94 chapters.",
      "Increased engagement to 1,900+ users and 13,800+ events with a 1:03 average session duration.",
    ],
    links: [{ label: "Website", href: "https://thetatauxi.org" }],
  },
  {
    title: "Auto Door Unlocker",
    location: "Madison, WI",
    date: "2024",
    bullets: [
      "Built an ESP32-based system that detects apartment intercom calls and sends DTMF tones to unlock a building entrance.",
      "Integrated ring detection, off-hook control, GPIO switching, and a DTMF module into a working embedded prototype.",
    ],
    links: [{ label: "GitHub", href: "https://github.com/henryczup/auto-door-unlocker" }],
  },
];
