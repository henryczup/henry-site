export type Project = {
  slug: string;
  title: string;
  oneLiner: string;
  href?: string;
  repo?: string;
  thumb: string; // path under /public
  tags?: string[];
};

export const projects: Project[] = [
  {
    slug: "capacitance-sensor-platform",
    title: "Wearable capacitance sensor platform",
    oneLiner:
      "Low-cost capacitive sensing system scanned + read by smartphone; 75–90% cheaper than Bluetooth-based systems.",
    thumb: "/thumbs/cap-sense.svg",
    tags: ["hardware", "mobile", "sensing"],
  },
  {
    slug: "ml-antenna-field-characterization",
    title: "ML antenna field characterization",
    oneLiner:
      "Rapid antenna test workflow using thermal measurements + simulation feedback; automated CST sweeps for training data.",
    thumb: "/thumbs/antenna.svg",
    tags: ["rf", "ml", "automation"],
  },
  {
    slug: "running-form-analyzer",
    title: "Running form analysis",
    oneLiner:
      "Real-time computer vision pipeline extracting 20+ biomechanics metrics at ~35 FPS.",
    repo: "https://github.com/henryczup/running-form-analyzer",
    thumb: "/thumbs/running.svg",
    tags: ["cv", "sports", "realtime"],
  },
  {
    slug: "capital-tech-repairs",
    title: "Capital Tech Repairs",
    oneLiner:
      "On-campus iPhone repair service + full-stack booking platform with real-time scheduling.",
    href: "https://capitaltechrepairs.com",
    thumb: "/thumbs/ctr.svg",
    tags: ["business", "full-stack"],
  },
  {
    slug: "laxgrades",
    title: "LAXGRADES",
    oneLiner:
      "Grade distribution explorer for UW–La Crosse (17k+ grades) with search/filtering; monetized with ads.",
    href: "https://laxgrades.com",
    thumb: "/thumbs/laxgrades.svg",
    tags: ["data", "product"],
  },
  {
    slug: "theta-tau-site",
    title: "Theta Tau Xi website",
    oneLiner:
      "Led a full redesign; won “Best Website” at nationals (94 chapters).",
    href: "https://thetatauxi.org",
    thumb: "/thumbs/thetatau.svg",
    tags: ["web"],
  },
  {
    slug: "auto-door-unlocker",
    title: "Auto door unlocker",
    oneLiner:
      "ESP32 system that detects apartment intercom calls and responds with DTMF to unlock the entrance.",
    repo: "https://github.com/henryczup/auto-door-unlocker",
    thumb: "/thumbs/door.svg",
    tags: ["embedded", "iot"],
  },
  {
    slug: "treadmill-upper-body-coach",
    title: "Treadmill upper-body form coach",
    oneLiner:
      "Phone-on-console CV coach for upper-body cues (bounce, posture, arm swing) using the treadmill ‘Netflix setup’ constraint.",
    thumb: "/thumbs/treadmill.svg",
    tags: ["cv", "sports", "mobile"],
  },
];
