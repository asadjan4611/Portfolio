import img1 from "../assets/images/1.png";
import img2 from "../assets/images/2.png";
import img3 from "../assets/images/3.png";




export const projects = [
  {
    id: "multivendor",
    name: "MarketLane",
    repo: "https://github.com/asadjan4611/WEB_APP/blob/main/README.md",
    live: "https://frontend-multivendor.netlify.app/",
    cover: img3,
    period: "Practice Project",
    problem:
      "Traditional single‑vendor stores limit growth and collaboration between sellers and buyers.",
    solution:
      "A full multivendor marketplace with role‑based dashboards (Customer, Seller, Admin), secure checkout, real‑time chat, and payments.",
    overview:
      "End‑to‑end marketplace: I designed schemas (users, shops, products, orders, payments, messages), built secure role‑based flows, added Stripe/PayPal payments, and implemented real‑time customer–seller messaging. Focus on clear module boundaries, predictable state, and safe payments.",
    techDetails: [
      { name: "React (Vite)", why: "Fast dev experience; modular dashboards and storefront UI." },
      { name: "Redux Toolkit", why: "Centralized cart/session and admin data with predictable updates." },
      { name: "Tailwind", why: "Consistent, responsive styling for all roles." },
      { name: "Node.js + Express", why: "REST APIs for auth, products, orders, and payments." },
      { name: "MongoDB + Mongoose", why: "Flexible documents for shops, products, orders, messages." },
      { name: "Stripe / PayPal", why: "Secure checkout and payment confirmation via webhooks." },
      { name: "Socket.IO", why: "Real‑time chat and order status updates." }
    ],
    sections: [
      {
        title: "Role‑based Access & Seller Onboarding",
        problem:
          "The platform must support different responsibilities and secure areas for customers, sellers, and admins.",
        solution:
          "Implemented JWT auth with role checks and a guided seller onboarding flow with shop verification."
      },
      {
        title: "Payments & Order Processing",
        problem:
          "Users need secure online payments and reliable order lifecycle updates.",
        solution:
          "Integrated Stripe/PayPal with order intents; added order status tracking and notifications."
      },
      {
        title: "Customer–Seller Communication",
        problem:
          "Buyers often need quick clarifications from sellers before purchasing.",
        solution:
          "Built real‑time chat using Socket.IO with message history per order for better support."
      }
    ],
    stack: [
      "React (Vite)",
      "Redux Toolkit",
      "Tailwind",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.IO",
      "Stripe",
      "PayPal"
    ],
    features: [
      "Role‑based auth (JWT), shop onboarding",
      "Product/catalog management and search",
      "Cart, wishlist, orders, order status",
      "Stripe/PayPal payments",
      "Customer–Seller real‑time messaging (Socket.IO)",
      "Admin management (users, sellers, transactions)"
    ],
    impact: [
      "End‑to‑end marketplace experience",
      "Practiced real‑world flows like seller onboarding and payouts"
    ],
    codeRef: "Multivendor/"
  },
  {
    id: "real-estate",
    name: "NestScout",
    repo: "https://github.com/asadjan4611/MERN_ESTATE_APP",
    live: "https://mern-estate-frontend.netlify.app/",
    cover: img2,
    period: "Practice Project",
    problem:
      "Listing apps need secure ownership, image storage, and flexible search to be useful.",
    solution:
      "A MERN listing platform with Google OAuth, cookie‑based JWT, Supabase image storage, and advanced filters with pagination.",
    overview:
      "A listings platform with secure ownership and robust discovery. Google OAuth + cookie‑based JWT for auth; owner‑only CRUD; Supabase Storage for images; server‑side filters/sort/pagination for fast search.",
    techDetails: [
      { name: "React (Vite) + React Router", why: "Client routing and fast builds for listing flows." },
      { name: "Redux Toolkit + Persist", why: "Stable auth/session across reloads." },
      { name: "Node.js + Express", why: "REST endpoints for listing CRUD and search." },
      { name: "MongoDB + Mongoose", why: "Schema for listings and owner references." },
      { name: "Firebase Auth (Google)", why: "Low‑friction OAuth sign‑in." },
      { name: "Supabase Storage", why: "Simple, reliable image uploads with public URLs." }
    ],
    sections: [
      {
        title: "Ownership & Authentication",
        problem:
          "Only listing owners should be able to modify their properties while keeping sign‑in friction low.",
        solution:
          "Used Google OAuth + cookie‑based JWT, enforcing owner checks on CRUD endpoints."
      },
      {
        title: "Image Uploads & Storage",
        problem:
          "Listings need multiple images with reliable storage and public delivery URLs.",
        solution:
          "Uploaded images to Supabase Storage and saved returned public URLs on listing documents."
      },
      {
        title: "Search & Pagination",
        problem:
          "Users require fast discovery with filters (offer, parking, furnished) and predictable pagination.",
        solution:
          "Built flexible query filters with server‑side pagination and sort parameters."
      }
    ],
    stack: [
      "React (Vite)",
      "React Router",
      "Redux Toolkit + Persist",
      "Tailwind",
      "Node.js",
      "Express",
      "MongoDB",
      "Firebase Auth (Google)",
      "Supabase Storage"
    ],
    features: [
      "Auth with email/password and Google OAuth",
      "Create/update/delete listings (owner‑only)",
      "Upload up to 6 images per listing to Supabase",
      "Search, filters, sorting and pagination",
      "Profile management and owned listings"
    ],
    impact: [
      "Secure resource ownership and robust search experience",
      "Hands‑on integration with third‑party auth and storage"
    ],
    codeRef: "real-estate/"
  },
  {
    id: "sociopedia",
    name: "Sociopedia — Social App",
    repo: null,
    live: "https://sociopedia-front-end.netlify.app/",
    cover: img1,
    period: "Practice Project",
    problem:
      "Build a modern social feed with secure auth, posts with images, likes, and comments.",
    solution:
      "A social platform with JWT auth, protected APIs, image uploads for posts, likes map, and comments with a responsive client.",
    overview:
      "Token‑based social app with a responsive feed. Backend exposes protected APIs; client handles post creation with images, likes, and comments using an efficient state model.",
    techDetails: [
      { name: "React + Material UI", why: "Composable UI for feed, posts, and profiles." },
      { name: "Redux", why: "Stores user/token and feed state." },
      { name: "Node.js + Express", why: "Protected API routes for posts/likes/comments." },
      { name: "MongoDB", why: "Documents for users, posts, and interactions." },
      { name: "JWT", why: "Secures requests and guards private routes." }
    ],
    sections: [
      {
        title: "Secure Feed & Auth",
        problem:
          "Only authenticated users should read/post content; APIs must be protected.",
        solution:
          "JWT‑based auth with protected endpoints and token checks on feed/post routes."
      },
      {
        title: "Posts with Media",
        problem:
          "Users want to share images with posts without slowing the app.",
        solution:
          "Implemented image uploads and efficient post payloads; optimized UI with lazy rendering."
      },
      {
        title: "Likes & Comments",
        problem:
          "Interactions should be fast and consistent across sessions.",
        solution:
          "Used a likes map and comment arrays with atomic updates and optimistic UI on the client."
      }
    ],
    stack: [
      "React",
      "Redux",
      "Material UI",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT"
    ],
    features: [
      "Login/register and token‑based auth",
      "Create posts with images",
      "Global feed and user posts",
      "Like/unlike and comments",
      "Responsive UI"
    ],
    impact: [
      "Implemented secure auth and scalable post model",
      "Built reusable widget‑based UI components"
    ],
    codeRef: "Sociopedia/"
  },
  {
    id: "flutter-chemist",
    name: "Flutter App — Chemist Lab",
    repo: null,
    live: null,
    period: "Mobile App",
    problem:
      "People need a simple way to browse common lab tests and request a booking from their phone.",
    solution:
      "A beginner‑friendly Flutter app to view basic test packages, add them to a cart, pick a date/time, and submit a booking request (no online payments; confirmation handled manually).",
    overview:
      "A compact mobile app focused on clear UX for selecting lab tests and requesting a booking. I implemented a lightweight architecture with state management (Provider) and local persistence for cart items using shared_preferences so the app works well offline and across restarts.",
    techDetails: [
      { name: "Flutter + Dart", why: "Single codebase for Android/iOS with smooth UI and fast iteration via Hot Reload." },
      { name: "Provider", why: "Simple, testable state management for cart and booking flows." },
      { name: "shared_preferences", why: "Local persistence of selected tests and form values for offline resilience." }
    ],
    sections: [
      {
        title: "Catalog & Search",
        problem: "Users must quickly find tests among multiple categories.",
        solution: "Implemented searchable lists with categorized views and local filtering for responsiveness."
      },
      {
        title: "Cart & Booking",
        problem: "Users need to add tests, review totals, and choose a preferred date/time.",
        solution: "Built a cart store with Provider and a guided booking form with validation and simple confirmation flow."
      },
      {
        title: "Offline‑friendly UX",
        problem: "Users may close/reopen the app and expect their selections to persist.",
        solution: "Persisted cart and form fields in shared_preferences and restored them on app start."
      }
    ],
    stack: ["Flutter", "Dart", "Provider", "shared_preferences"],
    features: [
      "Browse lab tests by simple categories",
      "Search tests by name",
      "Add/remove tests from a cart",
      "Choose preferred date and time",
      "Basic form validation for name/phone/address",
      "Local cart persistence using shared_preferences"
    ],
    impact: [
      "Practiced Flutter layouts (ListView, Grid, Forms) and navigation",
      "Learned state management with Provider and local storage",
      "Built a small but complete request flow without backend complexity"
    ],
    codeRef: null
  },
  {
    id: "flutter-image-pdf",
    name: "Flutter App — Image to PDF Editor",
    repo: null,
    live: null,
    period: "Mobile App",
    problem:
      "Combining multiple photos into a single PDF is a common need for assignments, receipts, and documents.",
    solution:
      "A simple utility app to pick images from gallery or camera, reorder pages, choose page size, and export/share a PDF.",
    overview:
      "A utility app that converts selected images into a single PDF. It focuses on a predictable editing flow: pick images, reorder pages, choose paper size/orientation, then export and share. Emphasis on device permissions, file I/O, and predictable UI updates.",
    techDetails: [
      { name: "Flutter + Dart", why: "Fast UI prototyping and cross‑platform distribution." },
      { name: "image_picker", why: "Select images from camera or gallery with appropriate permissions." },
      { name: "pdf", why: "Generate PDFs on device with configurable page sizes and orientation." },
      { name: "path_provider", why: "Resolve safe storage locations for exported files across platforms." }
    ],
    sections: [
      {
        title: "Image Selection & Ordering",
        problem: "Users need to add and reorder pages easily before export.",
        solution: "Used image_picker and a ReorderableListView to implement intuitive drag‑and‑drop page ordering."
      },
      {
        title: "PDF Generation",
        problem: "Users want control over paper size and orientation with reliable output.",
        solution: "Integrated the pdf package to render pages, apply page size, and export to a shareable file."
      },
      {
        title: "Permissions & Storage",
        problem: "Accessing camera/gallery and saving files must respect platform sandboxing.",
        solution: "Handled runtime permissions and wrote files to directories returned by path_provider; added share intent."
      }
    ],
    stack: ["Flutter", "Dart", "image_picker", "pdf", "path_provider"],
    features: [
      "Pick images from gallery or camera",
      "Reorder pages with ReorderableListView",
      "Set page size (A4/Letter) and orientation",
      "Generate PDF using the pdf package",
      "Save to device and share via intent",
      "Light/Dark mode basics"
    ],
    impact: [
      "Gained experience with permissions and file I/O",
      "Worked with popular Flutter packages and platform storage paths",
      "Improved understanding of state updates and list reordering"
    ],
    codeRef: null
  }
];


