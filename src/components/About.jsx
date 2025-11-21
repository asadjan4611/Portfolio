import React from "react";
import { personal } from "../data/meta.js";

export default function About() {
  return (
    <div>
      <div className="text-center mb-6">
        <span className="chip">ABOUT ME</span>
        <h2 className="mt-4 text-3xl md:text-4xl font-extrabold">
          Passionate About Building <span className="highlight">Scalable Solutions</span>
        </h2>
        <p className="mt-3 text-white/80 max-w-3xl mx-auto leading-relaxed">
          With hands‑on experience across full‑stack development and mobile, I focus on
          performance, reliability, and clean execution that drives outcomes.
        </p>
      </div>

      {/* Column layout: My Journey first, then What I Bring as a grid */}
      <div className="space-y-8">
        <div className="card p-6 fade-up">
          <div className="h-1.5 w-14 bg-primary rounded-full mb-4" />
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <h3 className="font-semibold text-xl">My Journey</h3>
            <div className="flex flex-wrap gap-2">
              <span className="chip">ICPC Runner‑up</span>
              <span className="chip">Undergraduate</span>
              <span className="chip">MERN</span>
              <span className="chip">Flutter</span>
              <span className="chip">Cloud Basics</span>
            </div>
          </div>
          
          <div className="text-body space-y-3 mt-4">
            <p className="leading-relaxed">

            ICPC runner-up and software engineer who transforms complex challenges 
            into simple, reliable software. I build end-to-end systems
             with a focus on clear architecture, thorough testing, 
             and intelligent monitoring to make systems resilient
              and easy to maintain.
               </p>
            <p className="leading-relaxed">
              My projects reflect that approach. In <span className="highlight">MarketLane</span> (multivendor
              <span className="highlight"> e‑commerce</span>) I implemented roles (customer/seller/admin), secure
              checkout with payments, and real‑time chat so buyers and sellers can talk instantly.
              In <span className="highlight">NestScout</span> (real‑estate) I built listing CRUD, search with filters
              and pagination, Google login, and image uploads to cloud storage. In a
              <span className="highlight"> social</span> app I added JWT auth, post creation with images, likes,
              and comments with a responsive UI.
            </p>
            <ul className="space-y-2 mt-4">
              <li className="flex gap-2 items-start">
                <span className="mt-1 inline-block w-2 h-2 rounded-full bg-primary" />
                <span className="leading-relaxed">Focus on <span className="highlight">fast APIs</span>, predictable data models, and CI/CD that catches issues early.</span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="mt-1 inline-block w-2 h-2 rounded-full bg-primary" />
                <span className="leading-relaxed">Strengths: <span className="highlight">performance optimization</span>, <span className="highlight">API design</span>, and <span className="highlight">pipeline modernization</span>.</span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="mt-1 inline-block w-2 h-2 rounded-full bg-primary" />
                <span className="leading-relaxed">Communicate clearly and deliver reviews that raise quality without slowing delivery.</span>
              </li>
            </ul>
            <p className="leading-relaxed">
              Day‑to‑day, I focus on what makes software healthy at scale: fast APIs,
              predictable data models, and CI/CD that catches mistakes early. My strengths
              are <span className="highlight">performance optimization</span>, <span className="highlight">API design</span>, and
              <span className="highlight"> modernizing pipelines</span> so teams can ship quickly and safely.
              I communicate clearly and give practical code reviews that improve quality
              without slowing delivery.
            </p>
            <p className="leading-relaxed">
              Tech I’m comfortable with: React, Redux Toolkit, React Router, Tailwind;
              Node.js, Express, MongoDB/Mongoose; auth (JWT/OAuth), real‑time (Socket.IO),
              payments (Stripe/PayPal); Flutter/Dart for mobile; and cloud basics on
              AWS & Azure with CI/CD.
            </p>
          </div>
        </div>

        <div className="fade-up" style={{animationDelay: "0.08s"}}>
          <div className="h-1.5 w-14 bg-primary rounded-full mb-4" />
          <h3 className="font-semibold text-xl mb-4">What I Bring</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="card p-5 hover:bg-white/10 hover:border-white/20 transition">
              <div className="font-medium">Full‑Stack Engineering</div>
              <p className="mt-1 text-white/80 text-sm">
                MERN stack, clean architecture, testing mindset, and performance‑oriented code.
              </p>
            </div>
            <div className="card p-5 hover:bg-white/10 hover:border-white/20 transition">
              <div className="font-medium">Flutter Mobile</div>
              <p className="mt-1 text-white/80 text-sm">
                Cross‑platform UI, responsive layouts, state management, and smooth animations.
              </p>
            </div>
            <div className="card p-5 hover:bg-white/10 hover:border-white/20 transition">
              <div className="font-medium">Real‑Time & Auth</div>
              <p className="mt-1 text-white/80 text-sm">
                Socket.IO, JWT/OAuth, secure sessions, and production‑ready flows.
              </p>
            </div>
            <div className="card p-5 hover:bg-white/10 hover:border-white/20 transition">
              <div className="font-medium">Cloud‑Ready</div>
              <p className="mt-1 text-white/80 text-sm">
                AWS/Azure basics, storage, deployments, and CI/CD with pragmatic automation.
              </p>
            </div>
            <div className="card p-5 hover:bg-white/10 hover:border-white/20 transition">
              <div className="font-medium">Product Thinking</div>
              <p className="mt-1 text-white/80 text-sm">
                Customer‑centric decisions, usable interfaces, and measurable outcomes.
              </p>
            </div>
            <div className="card p-5 hover:bg-white/10 hover:border-white/20 transition">
              <div className="font-medium">Mentorship & Collaboration</div>
              <p className="mt-1 text-white/80 text-sm">
                10+ mentees, strong communication, and crisp documentation for teams.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


