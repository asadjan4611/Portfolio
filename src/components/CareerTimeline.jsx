import React, { useState } from "react";

const Chip = ({ children, variant = "neutral" }) => {
  const base =
    "inline-flex items-center px-3 py-1 text-xs font-semibold mr-2 mb-2 rounded-md";
  const styles =
    variant === "teal" ? "bg-primary text-black" : "bg-white/90 text-slate-900";
  return <span className={`${base} ${styles}`}>{children}</span>;
};

const Item = ({
  role,
  org,
  period,
  summary = [],
  responsibilities = [],
  tech = [],
  delay = "0s",
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative pl-8 fade-up" style={{ animationDelay: delay }}>
      <span className="absolute left-0 top-3 w-3 h-3 rounded-full bg-primary ring-4 ring-[rgba(0,229,161,0.25)]" />
      <div className="card p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="font-semibold">{role}</div>
            {/* <div className="text-sm text-white/70">{org}</div> */}
          </div>
          <span className="px-3 py-1 rounded-full bg-primary text-black text-xs font-semibold whitespace-nowrap">
            {period}
          </span>
        </div>

        {summary?.length ? (
          <ul className="mt-3 space-y-1 text-white/90 list-disc list-inside">
            {summary.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
        ) : null}

        {responsibilities?.length || tech?.length ? (
          <div className="mt-4">
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="w-full flex items-center justify-between rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-left hover:bg-white/10 transition"
            >
              <span className="font-medium">Key responsibilities</span>
              <svg
                className={`w-4 h-4 transition-transform ${
                  open ? "rotate-180" : ""
                }`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                open ? "max-h-[2000px] mt-4" : "max-h-0"
              }`}
            >
              <div className="bg-white text-slate-900 rounded-2xl p-5 border border-primary/20">
                {responsibilities?.length ? (
                  <>
                    <div className="text-sm font-semibold text-slate-700 mb-2">
                      Key Responsibilities:
                    </div>
                    <ul className="space-y-2">
                      {responsibilities.map((r, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="mt-1 inline-block w-2 h-2 rounded-full bg-teal-400" />
                          <span className="leading-relaxed">{r}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : null}

                {tech?.length ? (
                  <div className="mt-5">
                    <div className="text-sm font-semibold text-slate-700 mb-2">
                      Technologies Used:
                    </div>
                    <div className="flex flex-wrap -m-1">
                      {tech.map((t, i) => (
                        <div key={i} className="m-1">
                          <Chip variant="teal">{t}</Chip>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default function CareerTimeline() {
  return (
    <section>
      <div className="text-center mb-6">
        <span className="chip">Career Timeline</span>
        <h2 className="mt-4 text-3xl md:text-4xl font-extrabold">
          How I’ve Grown Into <span className="highlight">Full‑Stack & AI</span>
        </h2>
        <p className="mt-2 text-white/80 max-w-3xl mx-auto">
          From Flutter and MERN foundations to AI reasoning at Turing — here’s
          the path so far.
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-[6px] top-0 bottom-0 w-px bg-primary/40" />
        <div className="space-y-6">
          <Item
            role="AI Reasoning Engineer"
            org="Turing · Palo Alto, California, United States (Remote)"
            period="Oct 2025 — Present"
            summary={[
              "Improving LLM accuracy and reliability through prompt/rubric design and systematic evaluation.",
            ]}
            responsibilities={[
              "Write prompts, rubrics, and tests to guide models and measure correctness.",
              "Analyze model errors and datasets to reduce illusion and improve grounding.",
              "Resolve ambiguous tasks by running fast experiments and documenting decisions.",
              "Train and evaluate models for reasoning and coding tasks.",
            ]}
            tech={[
              "Prompt Engineering",
              "LLM Evaluation",
              "Python",
              "TypeScript",
              "LangChain",
              "GitHub",
              "Jupyter",
            ]}
            delay="0.00s"
          />
          <Item
            role="MERN Stack Engineer (Training & Projects)"
            org="Dev Weekends"
            period="Jan 2025 — Sep 2025"
            summary={[
              "Delivered multiple portfolio projects across web and mobile.",
            ]}
            responsibilities={[
              "MarketLane (E‑Commerce Web-app): role‑based access, Stripe/PayPal checkout, real‑time chat (Socket.IO).",
              "NestScout (Real‑Estate Web-app): listing CRUD, search/filters/pagination, Google OAuth, Supabase image storage.",
              "Social app: JWT auth, posts with images, likes/comments, responsive UI.",
            ]}
            tech={[
              "React",
              "Vite",
              "Redux Toolkit",
              "Tailwind",
              "Node.js",
              "Express",
              "MongoDB",
              "Mongoose",
              "JWT",
              "Socket.IO",
              "Stripe",
              "PayPal",
              "Supabase",
              "Firebase Auth",
            ]}
            delay="0.16s"
          />
          <Item
            role="Flutter Developer"
            org="PITB Incubation Center · Lahore"
            period="Sep 2024 — Dec 2024"
            summary={[
              "Delivered two Flutter apps end‑to‑end: requirements → UI → testing → release → support.",
            ]}
            responsibilities={[
              "Applied MVVM across modules; integrated RESTful APIs with pagination, retries, and structured error handling.",
              "Implemented data layers with Firebase (Auth, Firestore, FCM, Analytics) and local storage (Hive/sqflite) for offline‑first sync and caching.",
              "Built responsive, accessible UIs; improved performance and stability using DevTools and Crashlytics.",
              "Collaborated closely with design and backend; performed focused, actionable code reviews.",
            ]}
            tech={[
              "Flutter",
              "Dart",
              "MVVM",
              "REST",
              "Firebase Auth",
              "Firestore",
              "FCM",
              "Analytics",
              "Hive",
              "sqflite",
              "Crashlytics",
            ]}
            delay="0.24s"
          />
        </div>
      </div>
    </section>
  );
}
