import type { Product } from "@/types/products";

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

import PosCashier from "/public/images/mock/pos-cashier.png";
import PosDashboard from "/public/images/mock/pos-dashboard.png";
import RecruitPortal from "/public/images/mock/recruit-portal.png";
import RecruitAdmin from "/public/images/mock/recruit-admin.png";
import QrAdmin from "/public/images/mock/qr-admin.png";
import QrSheet from "/public/images/mock/qr-sheet.png";
import GestureLive from "/public/images/mock/gesture-live.png";
import GestureClasses from "/public/images/mock/gesture-classes.png";
import ScraperRun from "/public/images/mock/scraper-run.png";
import EcomStore from "/public/images/mock/ecom-store.png";

export const products: Product[] = [
  {
    title: "Calon Mantu POS",
    slug: "calon-mantu-pos",
    href: "#",
    org: "Client project",
    category: "Web App",
    featured: true,
    role: "Full-stack Developer",
    date: "Apr 2026 — Aug 2026",
    description:
      "A restaurant point-of-sale suite: cashier sessions, QR self-ordering, live stock control, and QRIS payments — Laravel API with a React 19 dashboard.",
    thumbnail: PosCashier,
    images: [PosCashier, PosDashboard],
    stack: [
      "Laravel 12",
      "PHP 8.2",
      "Sanctum",
      "React 19",
      "TypeScript",
      "TanStack Query",
      "Tailwind CSS",
      "MySQL",
    ],
    results:
      "Shipped an end-to-end POS covering cashier shift, self-order, inventory and payment reconciliation across a multi-store setup.",
    highlights: [
      "Designed a 25-table domain model — orders, cashier sessions, stock opname, purchase orders, recipes and audit trail — behind a token-authenticated REST API.",
      "Integrated two payment rails: BNI QRIS and Midtrans, each with a signed webhook endpoint and idempotent status reconciliation.",
      "Built the cashier screen so an order can be taken in under three taps, with an offline-tolerant cart kept in client state.",
      "Added QR self-ordering per table, so guests order from their phone straight into the kitchen queue.",
      "Documented the whole API surface with L5-Swagger so the frontend team could integrate without back-and-forth.",
    ],
    metrics: [
      { label: "API endpoints", value: "80+" },
      { label: "Domain models", value: "25" },
      { label: "Payment rails", value: "2" },
    ],
    content: (
      <div className="space-y-4">
        <p>
          Calon Mantu POS is the largest system I have built end to end. The backend is a
          Laravel 12 API secured with Sanctum, structured around clear domains: catalog and
          recipes, stock (transactions, batches, adjustments, opname, alerts), procurement
          (suppliers, purchase orders), sales (cart, orders, payments) and people (employees,
          roles, attendance).
        </p>
        <p>
          The cashier client is a React 19 + TypeScript app using TanStack Query for server
          state, so the till stays responsive while inventory numbers refresh in the
          background. Guests can scan a table QR to order themselves — the same order
          pipeline, a different entry point.
        </p>
        <p>
          The part I am most proud of is payment reconciliation: QRIS callbacks arrive
          asynchronously and can be delivered more than once, so every webhook handler was
          written to be idempotent and to leave an audit trail an owner can actually read.
        </p>
      </div>
    ),
  },
  {
    title: "HRIS Shelter",
    slug: "hris-shelter",
    href: "#",
    org: "PT Shelter Indonesia",
    category: "Web App",
    featured: true,
    role: "Full-stack Developer",
    date: "Jul 2025 — Present",
    description:
      "Internal HRIS handling employee records, documents, multi-level approvals and payroll-adjacent reporting for an outsourcing company.",
    thumbnail: Shelter1,
    images: [Shelter1, Shelter2],
    stack: ["PHP", "CodeIgniter", "MySQL", "JavaScript", "Bootstrap", "jQuery"],
    results:
      "Maintained and extended the HRIS modules used daily by the HR team — candidate intake, employee data, document handling and export-ready reports.",
    highlights: [
      "Extended candidate and employee modules, including document upload, versioning and expiry reminders.",
      "Implemented multi-level approval flows so requests route to the right approver instead of a shared inbox.",
      "Built export-ready reports (Excel) that replaced a manual monthly recap.",
      "Refactored legacy admin screens for faster data entry and fewer input errors.",
    ],
    metrics: [
      { label: "Modules owned", value: "6+" },
      { label: "Stack", value: "CodeIgniter" },
      { label: "Status", value: "In production" },
    ],
    content: (
      <div className="space-y-4">
        <p>
          Shelter runs an outsourcing business, which means HR data volume is the product.
          The HRIS is a CodeIgniter application I work on day to day: candidate pipeline,
          employee master data, document lifecycle, approvals and reporting.
        </p>
        <p>
          Most of my work here is unglamorous and high impact — making an approval chain
          explicit, making an export match what finance actually needs, making a form fail
          loudly instead of silently. Working inside a legacy codebase taught me to change
          things carefully and to leave each screen better than I found it.
        </p>
      </div>
    ),
  },
  {
    title: "LombokEats Recommender",
    slug: "lombokeats-recommender",
    href: "#",
    org: "Final Project — PENS",
    category: "Data & AI",
    featured: true,
    role: "Full-stack Developer & Researcher",
    date: "Jun 2025 — Jun 2026",
    description:
      "Conversational restaurant recommender using content-based filtering over TF-IDF vectors, with a split-interface architecture — chat on one side, results on the other.",
    thumbnail: TA1,
    images: [TA1, TA2],
    stack: [
      "Python",
      "Flask",
      "scikit-learn",
      "Pandas",
      "Sastrawi",
      "SQLAlchemy",
      "React",
      "Vite",
    ],
    results:
      "Delivered a working recommender plus an IEEE-format paper: “Interactive Restaurant Recommendation System on LombokEats Platform Using Content-Based Filtering and Split-Interface Architecture”.",
    highlights: [
      "Built the Indonesian NLP pipeline — normalisation, Sastrawi stemming, stopword removal — before TF-IDF vectorisation and cosine similarity ranking.",
      "Designed a split-interface UX: the conversation gathers preferences while a live panel shows the ranked results, so users never lose the answer in chat scrollback.",
      "Structured the Flask backend into controllers, services and repositories with a DI container, keeping the recommendation engine testable in isolation.",
      "Scraped and cleaned the restaurant dataset myself, then built the entity extraction that maps free-text intent onto filterable attributes.",
    ],
    metrics: [
      { label: "Dataset", value: "1.5k+ places" },
      { label: "Approach", value: "TF-IDF + cosine" },
      { label: "Output", value: "IEEE paper" },
    ],
    content: (
      <div className="space-y-4">
        <p>
          My final project at PENS, supervised by the Knowledge Engineering Laboratory. The
          problem: tourists searching for food in Lombok get either a flat list or a chatbot
          that buries its answer in conversation. The proposal was a split interface — chat
          for intent, a persistent panel for results.
        </p>
        <p>
          Under the hood it is content-based filtering. Restaurant descriptions, cuisine tags
          and review text are preprocessed with an Indonesian stemmer, vectorised with TF-IDF,
          and ranked by cosine similarity against a preference vector built from the
          conversation so far.
        </p>
        <p>
          The engineering lesson was separation: keeping the recommendation engine free of
          Flask made it possible to evaluate and tune it without touching a single HTTP route.
        </p>
      </div>
    ),
  },
  {
    title: "Sekawan Ring",
    slug: "sekawan-ring",
    href: "#",
    org: "Client project",
    category: "Web App",
    featured: true,
    role: "Frontend Developer",
    date: "Feb 2026 — Apr 2026",
    description:
      "Catalog-to-checkout storefront for a bird ring supplier, with an admin area for orders, invoices and Excel reporting.",
    thumbnail: SekawanRing1,
    images: [SekawanRing1, SekawanRing2],
    stack: ["React 19", "Vite", "TypeScript", "Tailwind CSS", "Zustand", "Recharts", "ExcelJS"],
    results:
      "Delivered the full purchase flow — category browsing, product detail, cart, buyer form, invoice — plus an admin dashboard with export.",
    highlights: [
      "Modelled cart and buyer state in Zustand with persistence, so a refresh never costs the customer their basket.",
      "Built the invoice modal and order recap that the owner sends to buyers directly.",
      "Added a Recharts dashboard and one-click ExcelJS export for order reporting.",
      "Containerised the build with Docker + nginx for deployment.",
    ],
    metrics: [
      { label: "State", value: "Zustand" },
      { label: "Flow", value: "Catalog → invoice" },
      { label: "Deploy", value: "Docker + nginx" },
    ],
    content: (
      <div className="space-y-4">
        <p>
          A Vite + React storefront for a niche retail business. The catalog is
          category-first, since buyers know the bird species before they know the product,
          and the checkout is deliberately short — buyer form, recap, invoice.
        </p>
        <p>
          The admin side is where the value sits: protected routes, order monitoring, charts
          and an Excel export that matches how the owner already worked in spreadsheets.
        </p>
      </div>
    ),
  },
  {
    title: "Smilearn Web",
    slug: "smilearn-web",
    href: "https://smilearn.agileteknik.com",
    org: "Agile Teknik",
    category: "Web App",
    featured: true,
    role: "Frontend Developer",
    date: "Jan 2025 — Apr 2025",
    description:
      "Marketing and product showcase site for an educational platform, built as a reusable React component system.",
    thumbnail: Smilearn,
    images: [Smilearn, Smilearn2],
    stack: ["React.js", "Tailwind CSS", "JavaScript"],
    results:
      "Launched a live, fully responsive site with a consistent component system and optimised media loading.",
    highlights: [
      "Built the reusable UI layer — sections, cards, galleries — so new marketing pages could be assembled without new CSS.",
      "Optimised image and media delivery for fast first paint on mobile connections.",
      "Tuned responsive behaviour down to small Android viewports, which is where most of the traffic came from.",
    ],
    metrics: [
      { label: "Status", value: "Live" },
      { label: "Breakpoints", value: "Mobile-first" },
      { label: "Stack", value: "React + Tailwind" },
    ],
    content: (
      <div className="space-y-4">
        <p>
          Smilearn is an educational platform. I handled the frontend of its public site:
          turning a design into a component system rather than a set of pages, so the team
          could keep shipping without me in the loop.
        </p>
      </div>
    ),
  },
  {
    title: "Smilearn Mobile",
    slug: "smilearn-mobile",
    href: "https://play.google.com/store/apps/details?id=com.b4.smilearn&hl=en",
    org: "Agile Teknik",
    category: "Mobile App",
    featured: true,
    role: "Mobile Developer",
    date: "Nov 2024 — Mar 2025",
    description:
      "Cross-platform learning app published on Google Play, with interactive practice flows and offline-friendly media handling.",
    thumbnail: SmilearnMob2,
    images: [SmilearnMob2, SmilearnMob],
    stack: ["Flutter", "Dart", "REST API"],
    results: "Published to the Google Play Store and tested across a range of Android devices.",
    highlights: [
      "Implemented the interactive practice and quiz flows, including progress state and result screens.",
      "Handled media caching so lessons stay usable on unreliable connections.",
      "Tested across screen sizes and Android versions before release.",
    ],
    metrics: [
      { label: "Platform", value: "Google Play" },
      { label: "Framework", value: "Flutter" },
      { label: "Focus", value: "Practice flows" },
    ],
    content: (
      <div className="space-y-4">
        <p>
          The mobile companion to Smilearn, written in Flutter. The interesting constraint was
          connectivity: students open the app on the move, so anything already downloaded has
          to keep working when the network does not.
        </p>
      </div>
    ),
  },
  {
    title: "Shelter Career Portal",
    slug: "shelter-career-portal",
    href: "#",
    org: "PT Shelter Indonesia",
    category: "Web App",
    role: "Full-stack Developer",
    date: "Aug 2025 — Nov 2025",
    description:
      "Public job board and recruitment back office — vacancies, applicant pipeline, partner companies and WhatsApp notifications.",
    thumbnail: RecruitPortal,
    images: [RecruitPortal, RecruitAdmin],
    stack: ["PHP", "CodeIgniter", "MySQL", "Bootstrap", "Docker"],
    results:
      "Connected the public vacancy listing to the internal applicant pipeline, so recruiters stopped tracking candidates in spreadsheets.",
    highlights: [
      "Built vacancy publishing with province/city targeting and job-position taxonomy.",
      "Implemented the applicant pipeline — new, screening, interview, offering, accepted — with status history.",
      "Added templated WhatsApp notifications so candidates hear back without manual messaging.",
      "Containerised the legacy app with Docker Compose so it runs identically on every machine.",
    ],
    metrics: [
      { label: "Pipeline stages", value: "5" },
      { label: "Notifications", value: "WhatsApp" },
      { label: "Runtime", value: "Docker" },
    ],
    content: (
      <div className="space-y-4">
        <p>
          Recruitment at an outsourcing company is a throughput problem. This portal makes the
          funnel visible: vacancies go out, applications come in, and every candidate has a
          stage instead of living in someone&apos;s inbox.
        </p>
        <p>
          The mockups here reproduce the interface — the production system is internal to
          Shelter and not publicly reachable.
        </p>
      </div>
    ),
  },
  {
    title: "QR Table Ordering",
    slug: "qr-table-ordering",
    href: "#",
    org: "Side project",
    category: "Backend / API",
    role: "Backend Developer",
    date: "Feb 2026 — Mar 2026",
    description:
      "Lightweight Express service that mints, stores and renders per-table QR codes linking guests to a self-ordering page.",
    thumbnail: QrAdmin,
    images: [QrAdmin, QrSheet],
    stack: ["Node.js", "Express 5", "better-sqlite3", "nanoid", "qrcode"],
    results:
      "A single-binary-simple service: generate a table code, print the sheet, and every scan resolves to the right table.",
    highlights: [
      "Used nanoid for short, collision-resistant table codes that stay readable when printed.",
      "Stored codes in SQLite via better-sqlite3 — synchronous, zero-config, fast enough for a venue.",
      "Rendered a print-ready A4 sheet so a restaurant can deploy every table in one pass.",
      "Kept the whole service dependency-light so it can run on the same box as the POS.",
    ],
    metrics: [
      { label: "Runtime", value: "Express 5" },
      { label: "Storage", value: "SQLite" },
      { label: "Deps", value: "4" },
    ],
    content: (
      <div className="space-y-4">
        <p>
          A companion to the POS work: restaurants need a QR per table, and they need to be
          able to reprint one without regenerating all of them. The service does exactly that
          and nothing else.
        </p>
      </div>
    ),
  },
  {
    title: "Restaurant Data Pipeline",
    slug: "restaurant-data-pipeline",
    href: "#",
    org: "Research support",
    category: "Automation",
    role: "Data Engineer",
    date: "Nov 2025 — Jan 2026",
    description:
      "Resumable Selenium scraping pipeline that collected, cleaned and merged 1.5k+ restaurant records used to train the recommender.",
    thumbnail: ScraperRun,
    images: [ScraperRun],
    stack: ["Python", "Selenium", "Pandas", "curl_cffi", "Google Sheets API"],
    results:
      "Turned a manual data-collection problem into a repeatable four-stage pipeline with checkpointing and a 96% success rate.",
    highlights: [
      "Split the job into stages — collect URLs, filter duplicates, scrape details, merge — so a failure never costs the whole run.",
      "Wrote progress checkpoints to CSV so an interrupted run resumes instead of restarting.",
      "Handled rate limiting with randomised delays, batch cooldowns and exponential backoff.",
      "Built a second scraper for Instagram post metadata using TLS fingerprint impersonation, plus a coding sheet generator and Sheets upload for the research team.",
    ],
    metrics: [
      { label: "Records", value: "1.5k+" },
      { label: "Success rate", value: "96%" },
      { label: "Stages", value: "4" },
    ],
    content: (
      <div className="space-y-4">
        <p>
          The recommender needed data that did not exist in a clean form. This pipeline built
          it: URL discovery, deduplication, detail scraping with retries, then a merge step
          that produces one tidy CSV.
        </p>
        <p>
          Everything about it is designed around the assumption that the run <em>will</em> be
          interrupted — checkpoints, resumability, and backoff rather than brute force.
        </p>
      </div>
    ),
  },
  {
    title: "Gesture Detector",
    slug: "gesture-detector",
    href: "#",
    org: "Side project",
    category: "Data & AI",
    role: "Python Developer",
    date: "Sep 2025 — Oct 2025",
    description:
      "Real-time hand gesture recognition from a webcam — 21 MediaPipe landmarks normalised and classified into control actions.",
    thumbnail: GestureLive,
    images: [GestureLive, GestureClasses],
    stack: ["Python", "OpenCV", "MediaPipe", "NumPy"],
    results:
      "Stable real-time recognition at ~28 FPS on a laptop webcam with no GPU.",
    highlights: [
      "Normalised the 21 hand landmarks against the wrist and hand scale, so recognition holds up at different distances from the camera.",
      "Classified gestures from geometric features rather than a trained model — no dataset needed, and every decision is explainable.",
      "Kept the capture loop and the detection logic separate so frames never queue up behind inference.",
    ],
    metrics: [
      { label: "Throughput", value: "~28 FPS" },
      { label: "Landmarks", value: "21" },
      { label: "Latency", value: "~25 ms" },
    ],
    content: (
      <div className="space-y-4">
        <p>
          A computer-vision experiment: read a webcam, find a hand, and turn its shape into a
          command. MediaPipe supplies the landmarks; the interesting part is what you do with
          them once the hand moves closer, further away, or rotates.
        </p>
      </div>
    ),
  },
  {
    title: "Reza Store",
    slug: "reza-store",
    href: "#",
    org: "Freelance",
    category: "Web App",
    role: "Frontend Developer",
    date: "Oct 2025 — Nov 2025",
    description:
      "Fashion e-commerce storefront with catalog filtering, cart and checkout, built on React 19 and TanStack Query.",
    thumbnail: EcomStore,
    images: [EcomStore],
    stack: ["React 19", "TypeScript", "Vite", "TanStack Query", "Tailwind CSS", "Axios"],
    results:
      "Shipped a fast, mobile-first storefront with server state cached and revalidated instead of refetched on every view.",
    highlights: [
      "Used TanStack Query for catalog and cart data, so navigation feels instant and stale data refreshes quietly.",
      "Built the filtering and category routing with React Router.",
      "Designed the grid to stay readable from a 360px phone up to a wide desktop.",
    ],
    metrics: [
      { label: "Data layer", value: "TanStack Query" },
      { label: "Build", value: "Vite" },
      { label: "Design", value: "Mobile-first" },
    ],
    content: (
      <div className="space-y-4">
        <p>
          A freelance storefront. The brief was ordinary; the discipline was in the data
          layer — caching, invalidation and optimistic cart updates, so the UI never blocks on
          a network round trip.
        </p>
      </div>
    ),
  },
];

export const featuredProducts = products.filter((p) => p.featured);

export const categories: string[] = [
  "All",
  ...Array.from(new Set(products.map((p) => p.category).filter(Boolean) as string[])),
];
