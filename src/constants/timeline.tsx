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
      "Translating HR operational needs into a CodeIgniter HRIS — workflow design, validation, role-based access and database integration.",
    stack: ["PHP", "CodeIgniter", "MySQL", "JavaScript", "Bootstrap", "Docker"],
    responsibilities: [
      "Turned HR operational requirements into system solutions across the HRIS: workflow design, validation, role-based access and database integration.",
      "Owned recruitment and employee-lifecycle modules — candidate registration and interviews, employee data, transfers, resignations and bulk contract-status updates.",
      "Implemented contract-monitoring workflows and employee document handling, including PKWT documents, so personnel administration is traceable through the system.",
      "Delivered HR operational features — attendance and leave import, payroll, daily appraisal, Workload Analysis (WLA) and monitoring dashboards for reporting and decision support.",
    ],
  },
  {
    company: "PT Panasonic Manufacturing Indonesia",
    title: "Software Developer (Internship)",
    date: "Jan 2025 — Jun 2025",
    type: "work",
    location: "East Jakarta, Indonesia",
    description:
      "Manufacturing-process digitalisation — internal web and mobile tools for the factory floor.",
    stack: ["Web", "Mobile", "SQL"],
    responsibilities: [
      "Worked on a manufacturing digitalisation project, developing a desktop web app to check OK/NG status of production spare parts.",
      "Supported development of a mobile app for recording shipment data on container trucks.",
      "Gained exposure to a web-based inventory monitoring system for incoming, outgoing and disposal goods with a multi-level approval flow.",
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
