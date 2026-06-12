import { useEffect, useRef, useState } from "react";
import { HiArrowDown, HiDownload } from "react-icons/hi";
import { SiReact, SiNodedotjs, SiPython, SiMongodb } from "react-icons/si";
import heroCat from "../assets/images/hero-cat.jpeg";
const TYPED_ROLES = [
  "B.Tech Data Science Student",
  "Full Stack Developer",
  "MERN Stack Developer",
  "ML Enthusiast",
];

function useTypingEffect(words, speed = 80, pause = 1600) {
  const [display, setDisplay] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    let timeout;

    if (!deleting && charIdx <= current.length) {
      timeout = setTimeout(() => {
        setDisplay(current.slice(0, charIdx));
        setCharIdx((c) => c + 1);
      }, speed);
    } else if (!deleting && charIdx > current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx >= 0) {
      timeout = setTimeout(() => {
        setDisplay(current.slice(0, charIdx));
        setCharIdx((c) => c - 1);
      }, speed / 2);
    } else {
      setDeleting(false);
      setWordIdx((w) => (w + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return display;
}

const TECH_BADGES = [
  { icon: SiReact, label: "React", color: "#61DAFB" },
  { icon: SiNodedotjs, label: "Node.js", color: "#68A063" },
  { icon: SiPython, label: "Python", color: "#FFD43B" },
  { icon: SiMongodb, label: "MongoDB", color: "#4DB33D" },
];

export default function Hero() {
  const typedText = useTypingEffect(TYPED_ROLES);
  const heroRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen bg-[#0a0a0a] flex items-center overflow-hidden"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#ff7a00 1px, transparent 1px), linear-gradient(90deg, #ff7a00 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Ambient glow */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-[#ff7a00]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-[#ff7a00]/4 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 w-full py-24 md:py-0">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-8">

          {/* Left — Text Content */}
          <div
            className={`flex-1 max-w-xl transition-all duration-700 ease-out ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-5">
              <span className="w-8 h-[2px] bg-[#ff7a00]" />
              <span className="text-[#ff7a00] text-xs font-semibold uppercase tracking-[0.2em]">
                Available for work
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.6rem] font-black text-white leading-[1.1] tracking-tight mb-4">
              Hi, I'm{" "}
              <span className="relative inline-block">
                <span className="text-[#ff7a00]">Shek</span>
                <br />
                <span className="text-white">Malik Basha</span>
                {/* underline accent */}
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 220 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 6 Q55 2 110 5 Q165 8 218 3"
                    stroke="#ff7a00"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    fill="none"
                    opacity="0.5"
                  />
                </svg>
              </span>
            </h1>

            {/* Typed role */}
            <div className="flex items-center gap-2 mt-6 mb-5 h-8">
              <span className="text-gray-400 text-base sm:text-lg font-medium">
                I'm a{" "}
              </span>
              <span className="text-[#ff7a00] text-base sm:text-lg font-bold font-mono">
                {typedText}
                <span className="inline-block w-0.5 h-5 bg-[#ff7a00] ml-0.5 animate-pulse" />
              </span>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-8 max-w-md">
              Passionate about building modern web applications, data-driven
              solutions, and AI-powered projects. Currently exploring{" "}
              <span className="text-gray-300 font-medium">MERN Stack</span>,{" "}
              <span className="text-gray-300 font-medium">Data Science</span>
              , and{" "}
              <span className="text-gray-300 font-medium">Machine Learning</span>
              .
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 mb-10">
              <button
                onClick={scrollToProjects}
                className="group flex items-center gap-2 px-6 py-3 rounded-full bg-[#ff7a00] text-white text-sm font-semibold hover:bg-orange-500 hover:shadow-xl hover:shadow-orange-500/25 active:scale-95 transition-all duration-200"
              >
                View Projects
                <HiArrowDown className="group-hover:translate-y-0.5 transition-transform duration-200" />
              </button>

              <a
                href="/resume.pdf"
                download
                className="group flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 text-gray-300 text-sm font-semibold hover:border-[#ff7a00]/50 hover:text-white hover:bg-white/5 active:scale-95 transition-all duration-200"
              >
                Download CV
                <HiDownload className="group-hover:translate-y-0.5 transition-transform duration-200" />
              </a>
            </div>

            {/* Tech stack badges */}
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-gray-600 text-xs uppercase tracking-widest">
                Stack
              </span>
              <div className="w-px h-4 bg-white/10" />
              {TECH_BADGES.map(({ icon: Icon, label, color }) => (
                <div
                  key={label}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white/[0.04] border border-white/[0.06] hover:border-white/20 transition-colors duration-200 group cursor-default"
                  title={label}
                >
                  <Icon style={{ color }} size={14} />
                  <span className="text-gray-500 text-xs font-medium group-hover:text-gray-300 transition-colors duration-200">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Avatar */}
          <div
            className={`flex-shrink-0 transition-all duration-700 delay-200 ease-out ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] md:w-[380px] md:h-[380px]">
              {/* Outer rotating ring */}
              <div
                className="absolute inset-0 rounded-full border-2 border-dashed border-[#ff7a00]/20 animate-spin"
                style={{ animationDuration: "18s" }}
              />

              {/* Static ring */}
              <div className="absolute inset-3 rounded-full border border-[#ff7a00]/10" />

              {/* Orange arc accent */}
              <svg
                className="absolute inset-0 w-full h-full -rotate-90"
                viewBox="0 0 100 100"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="47"
                  fill="none"
                  stroke="#ff7a00"
                  strokeWidth="1.5"
                  strokeDasharray="60 240"
                  strokeLinecap="round"
                  opacity="0.6"
                />
              </svg>

              {/* Avatar container */}
              <div className="absolute inset-6 rounded-full overflow-hidden bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-white/10 shadow-2xl shadow-black/60">
                <img
  src={heroCat}
  alt="Programmer Cat"
  className="w-full h-full object-cover"
/>
              </div>

              {/* Floating badge — experience */}
              <div className="absolute -bottom-2 -left-4 sm:-left-6 flex items-center gap-2 bg-[#111] border border-white/10 rounded-xl px-3 py-2 shadow-xl shadow-black/50">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-white text-xs font-semibold whitespace-nowrap">
                  Open to Opportunities
                </span>
              </div>

              {/* Floating badge — projects */}
              <div className="absolute -top-2 -right-4 sm:-right-6 bg-[#ff7a00] rounded-xl px-3 py-2 shadow-lg shadow-orange-500/30">
                <p className="text-white text-xs font-bold">10+ Projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <button
        onClick={scrollToProjects}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-600 hover:text-[#ff7a00] transition-colors duration-200 group"
        aria-label="Scroll down"
      >
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <HiArrowDown
          size={16}
          className="animate-bounce group-hover:text-[#ff7a00]"
        />
      </button>
    </section>
  );
}