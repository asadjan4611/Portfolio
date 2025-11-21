import React, { useMemo, useState } from "react";

const SkillCard = ({ name }) => (
  <div className="card p-6 flex items-center justify-center text-center">
    <span className="font-medium text-white/90">{name}</span>
  </div>
);

const TABS = [
  {
    key: "frontend",
    label: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "React Native",
      "React Native Web",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Redux / Redux Toolkit",
      "React Query",
      "Context API",
      "Material UI",
      "Shadcn UI",
      "Socket.IO (client)",
    
    ]
  },
  {
    key: "backend",
    label: "Backend",
    items: [
      "Node.js",
      "Express",
      "REST APIs",
      "MongoDB",
      "Mongoose",
      "JWT Auth",
      "WebSockets / Socket.IO",
      "Stripe & PayPal",
      "Supabase (storage)",
      "Firebase Auth / Admin",
    ]
  },
  {
    key: "cloud",
    label: "Cloud",
    items: [
      "AWS S3",
      "AWS EC2 (basics)",
      "Azure App Service (basics)",
      "Azure Storage (basics)",
      "Firebase (Auth, Firestore, FCM, Analytics)",
      "Supabase Storage",
      "GitHub Actions (CI/CD)"
    ]
  },
  {
    key: "tools",
    label: "Tools  and Others",
    items: [
      "Git & GitHub",
      "Insomania",
      "Postman",
      "Cloudinary",
      "Figma (handoff)"
    ]
  },
  {
    key: "ai",
    label: "AI/ML",
    items: ["Python (basics)",  "OpenAI API",  "Prompt Engineering", "LLM Evaluation"]
  }
];

export default function Skills() {
  const [active, setActive] = useState("frontend");
  const current = useMemo(() => TABS.find((t) => t.key === active) || TABS[0], [active]);

  return (
    <div>
      <div className="text-center mb-6">
        <span className="chip">TECH STACK</span>
        <h2 className="mt-3 text-3xl md:text-4xl font-extrabold">
          Technologies <span className="highlight">&amp; Skills</span>
        </h2>
        <p className="mt-2 text-white/80 max-w-3xl mx-auto">
          A concise view of the tools I use to build reliable apps across web and mobile.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
        {TABS.map((t) => {
          const isActive = t.key === active;
          return (
            <button
              key={t.key}
              onClick={() => setActive(t.key)}
              className={`px-4 py-2 rounded-xl border text-sm transition ${
                isActive ? "bg-primary text-black border-transparent" : "bg-white/5 text-white/90 border-white/15 hover:bg-white/10"
              }`}
            >
              {t.label}
            </button>
          );
        })}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {current.items.map((name) => (
          <SkillCard key={`${current.key}-${name}`} name={name} />
        ))}
      </div>
    </div>
  );
}