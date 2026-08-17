export type TimelineItem = {
  company: string;
  title: string;
  date: string;
  type: "work" | "education";
  location?: string;
  description: string;
  stack?: string[];
  responsibilities: string[];
};

export const timeline: TimelineItem[] = [
  {
    company: "PT Shelter Indonesia",
    title: "Full-stack Developer",
    date: "Jul 2025 — Present",
    type: "work",
    location: "Surabaya, Indonesia",
    description:
      "Building and maintaining the internal HRIS and the public career portal used by the recruitment team.",
    stack: ["PHP", "CodeIgniter", "MySQL", "JavaScript", "Bootstrap", "Docker"],
    responsibilities: [
      "Own candidate and employee modules end to end, from database schema to admin screens.",
      "Implemented document handling with versioning, plus multi-level approval routing.",
      "Built export-ready reporting that replaced a manual monthly recap.",
      "Shipped the public career portal and connected it to the internal applicant pipeline.",
    ],
  },
  {
    company: "PT Panasonic Manufacturing Indonesia",
    title: "Software Developer (Internship)",
    date: "Jan 2025 — Jun 2025",
    type: "work",
    location: "Jakarta, Indonesia",
    description:
      "Internal tooling to shorten manufacturing and logistics processes on the factory floor.",
    stack: ["Web", "Mobile", "SQL"],
    responsibilities: [
      "Developed a desktop web app for OK/NG spare-part inspection before production.",
      "Built a mobile app for container truck shipment data entry.",
      "Designed and implemented a real-time inventory monitoring system.",
      "Introduced multi-level approval for inventory control and traceability.",
    ],
  },
  {
    company: "Agile Teknik",
    title: "Frontend & Mobile Developer",
    date: "Nov 2024 — Apr 2025",
    type: "work",
    location: "Remote",
    description:
      "Frontend for the Smilearn platform and its Flutter companion app, published on Google Play.",
    stack: ["React.js", "Tailwind CSS", "Flutter", "Dart"],
    responsibilities: [
      "Built the reusable React component system behind the Smilearn marketing site.",
      "Implemented interactive practice and quiz flows in the Flutter app.",
      "Optimised media handling and responsive behaviour for low-end Android devices.",
    ],
  },
  {
    company: "Politeknik Elektronika Negeri Surabaya (PENS)",
    title: "Informatics & Computer Engineering",
    date: "2022 — 2026",
    type: "education",
    location: "Surabaya, Indonesia",
    description:
      "Final project on interactive restaurant recommendation, supervised by the Knowledge Engineering Laboratory.",
    stack: ["Python", "Flask", "scikit-learn", "React"],
    responsibilities: [
      "Authored an IEEE-format paper on content-based filtering with a split-interface architecture.",
      "Built the full research prototype — data pipeline, recommendation engine and web client.",
      "Active in HIMIT PENS, the departmental student association.",
    ],
  },
];
