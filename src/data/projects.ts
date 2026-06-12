export type Project = {
  slug: string;
  title: string;
  oneLiner: string;
  href?: string;
  linkLabel?: string;
  thumb: string; // path under /public
  tags?: string[];
  featured?: boolean;
};

export type ProjectSection = {
  title: string;
  projects: Project[];
};

export const projectSections: ProjectSection[] = [
  {
    title: "Featured",
    projects: [
      {
        slug: "qr-antenna-optimizer",
        title: "QR Antenna Optimizer",
        oneLiner:
          "Python/CST workflow for QR-code-based microstrip patch antennas with Bayesian S11 optimization.",
        href: "https://www.qrantenna.com/",
        linkLabel: "Website",
        thumb: "/thumbs/screens/qr-antenna-optimizer.png",
        tags: ["rf", "cst", "optimization"],
        featured: true,
      },
    ],
  },
  {
    title: "University of Wisconsin-Madison Research",
    projects: [
      {
        slug: "capacitance-sensor-platform",
        title: "Cost Effective Capacitance Sensor Platform",
        oneLiner:
          "Low-cost wearable capacitance sensing system scanned by smartphone with real-time mobile visualization.",
        href: "https://docs.google.com/presentation/d/1T1qgnnrkYAt_PJ09slcXwNkcZV427z03/",
        linkLabel: "Poster",
        thumb: "/thumbs/screens/cap-sensor-preview-2026-05-29-094430.png",
        tags: ["hardware", "mobile", "sensing"],
      },
      {
        slug: "rfic-transformer-inverse-design",
        title: "RFIC Transformer Inverse Design",
        oneLiner:
          "Python toolkit for RFIC transformer layout generation, EMX/Cadence evaluation, and design optimization.",
        href: "https://github.com/henryczup/rfic-transformer-inverse-design",
        linkLabel: "GitHub",
        thumb: "/thumbs/screens/rfic-transformer-inverse-design.png",
        tags: ["rfic", "emx", "optimization"],
      },
      {
        slug: "rf-passives-inverse-design",
        title: "Radio Frequency Passives Inverse Design",
        oneLiner:
          "Inverse-design workflows for RF passive structures including antennas and Doherty combiner networks.",
        href: "https://uwprod-my.sharepoint.com/:p:/g/personal/hczupryna_wisc_edu/IQAMCx84ZAsVS6csbYI1Mx5NATgis0AIZhOF65viPtPGbkU?e=2Chbhj",
        linkLabel: "Slides",
        thumb: "/thumbs/screens/multiport-microwave-inverse-design.png",
        tags: ["rf", "antennas", "optimization"],
      },
      {
        slug: "production-line-antenna-test-platform",
        title: "Production Line Antenna Test Platform",
        oneLiner:
          "Production-style e-field validation platform using thermal imaging at two polarizations and RF relay control.",
        linkLabel: "Coming soon",
        thumb: "/thumbs/screens/production-line-antenna-test-platform.png",
        tags: ["rf", "thermal", "automation"],
      },
    ],
  },
  {
    title: "Capital Tech Repairs",
    projects: [
      {
        slug: "capital-tech-repairs",
        title: "Capital Tech Repairs",
        oneLiner:
          "On-campus iPhone repair service and full-stack booking platform with 36+ repairs and 100% 5-star reviews.",
        href: "https://capitaltechrepairs.com",
        linkLabel: "Website",
        thumb: "/thumbs/screens/capital-tech-repairs.png",
        tags: ["business", "full-stack", "repair"],
      },
    ],
  },
  {
    title: "Projects",
    projects: [
      {
        slug: "laxgrades",
        title: "LAXGRADES",
        oneLiner:
          "UW-La Crosse grade distribution platform with 17,000+ grades, 2,800 users, and 107,000+ site events.",
        href: "https://laxgrades.com",
        linkLabel: "Website",
        thumb: "/thumbs/screens/laxgrades.png",
        tags: ["data", "product"],
      },
      {
        slug: "theta-tau-site",
        title: "Theta Tau Engineering Fraternity Website",
        oneLiner:
          "Complete website redesign that won Best Website at nationals among 94 chapters.",
        href: "https://thetatauxi.org",
        linkLabel: "Website",
        thumb: "/thumbs/screens/theta-tau-site.png",
        tags: ["web"],
      },
      {
        slug: "running-form-analyzer",
        title: "Running Form Analysis System",
        oneLiner:
          "Real-time computer vision system extracting 20+ biomechanical running metrics at 35 FPS.",
        href: "https://github.com/henryczup/running-form-analyzer",
        linkLabel: "GitHub",
        thumb: "/thumbs/screens/running-form-analyzer.gif",
        tags: ["cv", "sports", "realtime"],
      },
      {
        slug: "auto-door-unlocker",
        title: "Auto Door Unlocker",
        oneLiner:
          "ESP32 system that detects apartment intercom calls and sends DTMF tones to unlock the entrance.",
        href: "https://github.com/henryczup/auto-door-unlocker",
        linkLabel: "GitHub",
        thumb: "/thumbs/screens/auto-door-unlocker.gif",
        tags: ["embedded", "iot"],
      },
    ],
  },
];

export const projects: Project[] = projectSections.flatMap((section) => section.projects);
