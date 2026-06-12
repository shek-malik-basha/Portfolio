import { useEffect, useRef, useState } from "react";
import { HiAcademicCap, HiCode, HiDatabase, HiChip } from "react-icons/hi";
import { SiReact, SiPython, SiMongodb, SiNodedotjs, SiExpress, SiPostgresql } from "react-icons/si";
import aboutCat from "../assets/images/about-cat.jpeg";
const HIGHLIGHTS = [
  {
    icon: HiAcademicCap,
    title: "B.Tech Data Science",
    desc: "Currently pursuing my degree with focus on data-driven problem solving.",
  },
  {
    icon: HiCode,
    title: "Full Stack Development",
    desc: "Building end-to-end web applications using the MERN stack.",
  },
  {
    icon: HiDatabase,
    title: "Data Analytics",
desc: "Exploring datasets, identifying patterns, and creating actionable business insights.",
  },
  {
    icon: HiChip,
    title: "Machine Learning",
    desc: "Applying ML models to real-world problems and research datasets.",
  },
];

const SKILLS = [
  { icon: SiReact, label: "React", color: "#61DAFB" },
  { icon: SiNodedotjs, label: "Node.js", color: "#68A063" },
  { icon: SiPython, label: "Python", color: "#FFD43B" },
  { icon: SiMongodb, label: "MongoDB", color: "#4DB33D" },
  { icon: SiExpress, label: "Express.js", color: "#FFFFFF" }, 
  { icon: SiPostgresql, label: "PostgreSQL", color: "#336791" },
];

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect(); } },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView];
}

export default function About() {
  const [sectionRef, inView] = useInView(0.1);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative bg-[#0a0a0a] py-24 overflow-hidden"
    >
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: "radial-gradient(#ff7a00 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#ff7a00]/6 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* Section label */}
        <div className={`flex items-center gap-3 mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <span className="w-8 h-[2px] bg-[#ff7a00]" />
          <span className="text-[#ff7a00] text-xs font-semibold uppercase tracking-[0.2em]">About Me</span>
          <span className="flex-1 h-px bg-white/5" />
        </div>

        <div className="grid md:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Left — Image column */}
          <div className={`transition-all duration-700 delay-100 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            <div className="relative mx-auto w-fit">

              {/* Corner brackets — signature design element */}
              <span className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-[#ff7a00] rounded-tl-sm" />
              <span className="absolute -top-3 -right-3 w-8 h-8 border-t-2 border-r-2 border-[#ff7a00] rounded-tr-sm" />
              <span className="absolute -bottom-3 -left-3 w-8 h-8 border-b-2 border-l-2 border-[#ff7a00] rounded-bl-sm" />
              <span className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-[#ff7a00] rounded-br-sm" />

              {/* Image */}
              <div className="w-64 h-72 sm:w-72 sm:h-80 lg:w-80 lg:h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-[#1a1a1a] to-[#111] border border-white/8">
                <img
  src={aboutCat}
  alt="About Me"
  className="w-full h-full object-cover"
/>
              </div>

              {/* Floating stat card */}
              <div className="absolute -bottom-5 -right-5 sm:-right-8 bg-[#111] border border-white/10 rounded-xl p-3 shadow-2xl shadow-black/60 backdrop-blur-sm">
                <p className="text-[#ff7a00] text-2xl font-black leading-none">10+</p>
                <p className="text-gray-400 text-[11px] font-medium mt-0.5">Projects Built</p>
              </div>

              {/* Floating year card */}
              <div className="absolute -top-5 -right-5 sm:-right-8 bg-[#ff7a00] rounded-xl px-3 py-2 shadow-lg shadow-orange-500/30">
                <p className="text-white text-xs font-bold">2027 Grad</p>
              </div>
            </div>

            {/* Skill chips below image */}
            <div className="flex flex-wrap gap-2 mt-10 justify-center md:justify-start">
              {SKILLS.map(({ icon: Icon, label, color }) => (
                <div
                  key={label}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.07] hover:border-[#ff7a00]/40 hover:bg-white/[0.07] transition-all duration-200 cursor-default group"
                >
                  <Icon size={13} style={{ color }} />
                  <span className="text-gray-500 text-xs font-medium group-hover:text-gray-300 transition-colors duration-200">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Text column */}
          <div className={`transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-black text-white leading-tight tracking-tight mb-5">
              Building things that{" "}
              <span className="text-[#ff7a00]">matter.</span>
            </h2>

            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-4">
              I'm a <span className="text-gray-200 font-medium">B.Tech Data Science</span> student passionate about Full Stack Development, Data Analytics, and Machine Learning. I enjoy building web applications, working with databases, and solving real-world problems through technology.
            </p>
            <p className="text-gray-500 text-sm leading-relaxed mb-10">
              Whether it's crafting a clean UI, designing a REST API, or training a predictive model — I approach every project with curiosity and a drive to ship something I'm proud of.
            </p>

            {/* Highlight cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {HIGHLIGHTS.map(({ icon: Icon, title, desc }, i) => (
                <div
                  key={title}
                  className={`group flex gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-[#ff7a00]/30 hover:bg-white/[0.05] transition-all duration-300 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                  style={{ transitionDelay: `${300 + i * 80}ms` }}
                >
                  <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-[#ff7a00]/10 border border-[#ff7a00]/20 flex items-center justify-center group-hover:bg-[#ff7a00]/20 transition-colors duration-200">
                    <Icon size={18} className="text-[#ff7a00]" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold mb-0.5">{title}</p>
                    <p className="text-gray-500 text-xs leading-snug">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA row */}
            <div className="flex items-center gap-4 mt-8">
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
                className="px-5 py-2.5 rounded-full bg-[#ff7a00] text-white text-sm font-semibold hover:bg-orange-500 hover:shadow-lg hover:shadow-orange-500/25 active:scale-95 transition-all duration-200"
              >
                Let's Talk
              </a>
              <a
                href="/resume.pdf"
                download
                className="text-sm text-gray-400 font-medium hover:text-[#ff7a00] underline underline-offset-4 decoration-white/10 hover:decoration-[#ff7a00]/50 transition-all duration-200"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}