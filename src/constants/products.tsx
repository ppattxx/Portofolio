import Smilearn from "/public/images/Smilearn.png";
import Smilearn2 from "/public/images/Smilearn2.png";
import SmilearnMob from "/public/images/SmilearnMob.png";
import SmilearnMob2 from "/public/images/SmilearnMob2.png";
import SekawanRing1 from "/public/images/SekawanRing1.png";
import SekawanRing2 from "/public/images/SekawanRing2.png";
import Shelter1 from "/public/images/Shelter1.png";
import Shelter2 from "/public/images/Shelter2.png";
import TA1 from "/public/images/TA1.png";
import TA2 from "/public/images/TA2.png";

export const products = [
  {
    href: "https://smilearn.agileteknik.com",
    title: "Smilearn",
    description:
      "A design and development studio that focuses on building quality apps.",
    thumbnail: Smilearn,
    images: [Smilearn, Smilearn2],
    stack: ["React.js", "Tailwindcss"],
    role: "Frontend Developer",
    date: "01/2025 — 04/2025",
    results: "Delivered a fully responsive marketing site with reusable React components and optimized performance.",
    slug: "Smilearn",
    content: (
      <div>
        <p>
          Smilearn is an educational platform designed to make learning accessible and engaging.
          I worked on the frontend development of their marketing site and web application,
          building reusable React components and ensuring responsive design across all devices.
        </p>
      </div>
    ),
  },
  {
    href: "https://play.google.com/store/apps/details?id=com.b4.smilearn&hl=en",
    title: "Smilearn Mobile App",
    description:
      "Cross-platform mobile application for interactive learning on the go.",
    thumbnail: SmilearnMob2,
    images: [SmilearnMob2, SmilearnMob],
    stack: ["Flutter", "Dart"],
    role: "Mobile Developer",
    date: "11/2024 — 03/2025",
    results: "Published to Google Play Store with interactive practice flows and responsive UI.",
    slug: "algochurn",
    content: (
      <div>
        <p>
          Built the Smilearn mobile application from the ground up using Flutter.
          The app features interactive learning modules, progress tracking, and a clean,
          intuitive user interface optimized for mobile devices.
        </p>
      </div>
    ),
  },
  {
    href: "#",
    title: "Sekawan Ring",
    description:
      "Web app for catalog, cart, checkout, and admin operations.",
    thumbnail: SekawanRing1,
    images: [SekawanRing1, SekawanRing2],
    stack: ["React", "Vite", "Tailwind CSS", "Zustand", "React Router", "Axios"],
    role: "Frontend Developer",
    date: "Feb 2026 - Mar 2026",
    results:
      "Built complete catalog, cart, checkout, and admin flows with dashboard reports and export-ready views.",
    slug: "sekawan-ring",
    content: (
      <div>
        <p>
          A Vite-based React application for retail workflow management.
          Implemented client-side state management with Zustand, built catalog and cart flows,
          added analytics widgets, and created export-ready admin reporting screens.
        </p>
      </div>
    ),
  },
  {
    href: "#",
    title: "HRIS Shelter",
    description:
      "HRIS platform for recruitment, employee records, and payroll workflows.",
    thumbnail: Shelter1,
    images: [Shelter1, Shelter2],
    stack: ["PHP", "CodeIgniter", "MySQL", "JavaScript", "Bootstrap"],
    role: "Full-stack Developer",
    date: "Jul 2025 - Present",
    results:
      "Maintained and enhanced HRIS modules; delivered data export, document management, and approval workflows.",
    slug: "hris-shelter",
    content: (
      <div>
        <p>
          Worked on HRIS modules including candidate management, employee data,
          and HR operations workflows. Implemented data export/reporting,
          improved document handling, and enhanced administrative screens.
        </p>
      </div>
    ),
  },
  {
    href: "#",
    title: "Sistem Rekomendasi Chatbot",
    description:
      "Recommendation chatbot with content-based filtering for tourist destination discovery, featuring web UI and Flask API.",
    thumbnail: TA1,
    images: [TA1, TA2],
    stack: ["Flask", "Python", "Pandas", "scikit-learn", "React", "Vite"],
    role: "Full-stack Developer",
    date: "Jun 2025 - Present",
    results:
      "Delivered end-to-end recommendation chatbot with NLP preprocessing, TF-IDF vectorization, recommendation engine, and interactive web UI.",
    slug: "chatbot-rekomendasi",
    content: (
      <div>
        <p>
          A final project implementing content-based filtering for tourist destination recommendations.
          Built a Flask API with data processing, intent handling, and recommendation logic using TF-IDF
          and cosine similarity, paired with a React frontend for interactive chat and results display.
        </p>
      </div>
    ),
  },
];
