import React, { useEffect, useState } from "react";
import { personal } from "../data/meta.js";
import Typed from "./Typed.jsx";
import ProfileImage from "../assets/images/asad.png";
export default function Hero() {
  const [showAlt, setShowAlt] = useState(false);
  useEffect(() => {
    const id = setInterval(() => setShowAlt((v) => !v), 3000);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="grid md:grid-cols-12 gap-12 items-center hero-min">
      <div className="md:col-span-7">
        <p className="text-primary font-semibold tracking-wide mb-3">
          {personal.role}
        </p>
        <div className="text-[40px] leading-tight md:text-[64px] md:leading-[1.1] font-extrabold">
          <span className="md:text-[45px]">Hi, I'm </span>
          <span className="highlight md:text-[45px] ">
            <Typed
              text={showAlt ? "Tech Challenge Specialist" : `${personal.name}`}
              speed={75}
              delay={50}
            />
          </span>
        </div>
        <h1 className="mt-4 text-2xl md:text-[32px] font-bold leading-tight">
          MERN Stack Engineer with{" "}
          <span className="text-primary">Growth-Oriented Engineering</span>
        </h1>

        <p className="mt-6 text-[17px] md:text-[18px] text-white/90 max-w-3xl">
          As an <span className="highlight">AI Reasoning Engineer</span>, I
          specialize in{" "}
          <span className="highlight">building cognitive systems</span> that
          think, learn, and adapt. With deep expertise in{" "}
          <span className="highlight">MERN stack development</span> and{" "}
          <span className="highlight">cloud architecture</span>, I create{" "}
          <span className="highlight">end-to-end intelligent applications</span>
          . From <span className="highlight">reasoning algorithms</span> to{" "}
          <span className="highlight">scalable cloud infrastructure</span>, I
          deliver solutions that are both{" "}
          <span className="highlight">sophisticated AI</span> and{" "}
          <span className="highlight">engineered for real-world impact</span>.
        </p>

        <p className="mt-3 text-white/80">{personal.oneLiner}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#projects" className="btn btn-primary">
            View My Work
          </a>

          <a href={`${import.meta.env.BASE_URL}CV.pdf`} className="btn btn-outline" download>
            Download Resume
          </a>
        </div>
      </div>
      <div className="md:col-span-4">
        <div className="p-2 rounded-[28px] border-8 border-primary inline-block shadow-soft">
          <img
            src={ProfileImage}
            alt="Muhammad Asad portrait"
            className="w-[340px] h-[480px] md:w-[300px] md:h-[400px] object-cover rounded-[20px]"
          />
        </div>
      </div>

      {/* Reference metrics row (bottom of hero) */}
      <div className="md:col-span-12 mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            className="fade-up rounded-2xl bg-white text-slate-900 p-8 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            style={{ animationDelay: "0.05s" }}
          >
            <div className="text-3xl font-bold text-primary">9+ Months</div>
            <div className="mt-3 font-medium">MERN Stack Engineering </div>
          </div>
          <div
            className="fade-up  rounded-2xl bg-white text-slate-900 p-8 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            style={{ animationDelay: "0.9s" }}
          >
            <div className="text-3xl font-bold text-primary">6 Months</div>
            <div className="mt-3 font-medium">Mobile App Development </div>
          </div>
          <div
            className="fade-up rounded-2xl bg-white text-slate-900 p-8 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            style={{ animationDelay: "0.26s" }}
          >
            <div className="text-5xl font-extrabold text-primary">15+</div>
            <div className="mt-3 font-medium">Mentees</div>
          </div>
        </div>
      </div>
    </div>
  );
}
