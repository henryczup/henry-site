export type ResumeItem = {
  title: string;
  org?: string;
  location?: string;
  date: string;
  subtitle?: string;
  bullets?: string[];
  links?: { label: string; href: string }[];
  projects?: {
    title: string;
    bullets: string[];
    links?: { label: string; href: string }[];
  }[];
};

export const education: ResumeItem[] = [
  {
    title: "B.S. in Computer Engineering",
    org: "University of Wisconsin-Madison",
    location: "Madison, WI",
    date: "September 2022 - December 2025",
    subtitle:
      "GPA: 3.54/4.00. Courses: Operating Systems, Computer Architecture, Digital System Design & Synthesis, Microprocessor Systems, Artificial Neural Networks, Applied Communications Systems, Client Focused Hardware Prototyping Capstone.",
  },
  {
    title: "M.S. in Electrical and Computer Engineering",
    org: "University of Wisconsin-Madison",
    location: "Madison, WI",
    date: "January 2026 - Expected December 2026",
    subtitle: "Focus: Electromagnetics, Machine Learning & Signal Processing",
  },
];

export const experience: ResumeItem[] = [
  {
    title: "Software Engineering Intern",
    org: "Honeywell Aerospace",
    location: "Phoenix, AZ",
    date: "June 2025 - August 2025",
    bullets: [
      "Developed a secure, on-device AI system in Docker for local data processing.",
      "Automated data search task saving 13.87 minutes per hour of work.",
      "Informed system design by interfacing with test benches and internal requirement documents.",
    ],
  },
  {
    title: "Researcher",
    org: "University of Wisconsin-Madison",
    location: "Madison, WI",
    date: "May 2024 - Present",
    projects: [
      {
        title: "Cost Effective Capacitance Sensor Platform for Wearable Applications",
        bullets: [
          "Developed a low-cost capacitive sensing system for wearable use that can be scanned and read with a smartphone.",
          "Reduced cost by 75-90% compared to Bluetooth systems, with an estimated per-unit cost of $0.40-$0.65 at scale.",
          "Awarded 2nd place at the ECE Undergraduate Research Symposium among 37 projects; patent filed.",
        ],
        links: [
          {
            label: "Poster",
            href: "https://docs.google.com/presentation/d/1T1qgnnrkYAt_PJ09slcXwNkcZV427z03/",
          },
        ],
      },
      {
        title: "RFIC Transformer Inverse Design",
        bullets: [
          "Built a Python toolkit for RFIC transformer layout generation, EMX/Cadence evaluation, and optimization.",
          "Added workflows with Evolution Strategies and Bayesian Optimization support for transformer design exploration.",
        ],
        links: [
          {
            label: "GitHub",
            href: "https://github.com/henryczup/rfic-transformer-inverse-design",
          },
        ],
      },
      {
        title: "Production Line Antenna Test Platform",
        bullets: [
          "Built a production-style antenna test platform for e-field validation using thermal imaging at two polarizations.",
          "Integrated STM32 Nucleo motion control with grblHAL, TB6600 stepper drivers, and RF relay control.",
        ],
      },
    ],
  },
  {
    title: "Founder, Technician",
    org: "Capital Tech Repairs",
    location: "Madison, WI",
    date: "May 2023 - Present",
    bullets: [
      "Launched an on-campus iPhone repair service tailored to college students, offering fast, walkable convenience.",
      "Completed 36+ repairs with a 100% 5-star review rate (28/28) and an average repair time of 29 minutes.",
      "Attracted 7,000+ views from 1,600+ users with 63-second average engagement, managing 17,000+ user events.",
    ],
    links: [{ label: "Website", href: "https://capitaltechrepairs.com" }],
  },
];

export const selectedProjects: ResumeItem[] = [
  {
    title: "LAXGRADES",
    date: "",
    bullets: [
      "Created a grade distribution platform for UW-La Crosse, analyzing 17,000+ grades to guide course selection.",
      "Attracted 2,800 users with 107,000+ site events and an average engagement time of 3m 53s per active user.",
    ],
    links: [{ label: "Website", href: "https://laxgrades.com" }],
  },
  {
    title: "QR Antenna Optimizer",
    date: "",
    bullets: [
      "Built a Python/CST workflow to generate QR-code-based microstrip patch antennas.",
      "Automated S11 simulation and Bayesian Optimization across patch size, feed width, and QR geometry variants.",
    ],
    links: [{ label: "Website", href: "https://www.qrantenna.com" }],
  },
  {
    title: "Theta Tau Engineering Fraternity Website",
    date: "",
    bullets: [
      'Won "Best Website" award at nationals out of 94 chapters for leading a complete website redesign.',
      "Drove engagement to 1,900+ users and 13,800+ events with a 1:03 average session duration.",
    ],
    links: [{ label: "Website", href: "https://thetatauxi.org" }],
  },
  {
    title: "Auto Door Unlocker",
    date: "",
    bullets: [
      "Built an ESP32-based system that automatically unlocks building entrance when the apartment intercom is called.",
      "Detects incoming calls using ring detection and initiates an automatic response with DTMF tone to unlock the door.",
    ],
    links: [{ label: "GitHub", href: "https://github.com/henryczup/auto-door-unlocker" }],
  },
  {
    title: "Running Form Analysis System",
    date: "",
    bullets: [
      "Developed a computer vision system to analyze running form, improve technique, and reduce injuries.",
      "Engineered a real-time system extracting 20+ biomechanical metrics at 35 frames per second.",
    ],
    links: [{ label: "GitHub", href: "https://github.com/henryczup/running-form-analyzer" }],
  },
];
