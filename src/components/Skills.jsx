import { useEffect, useRef, useState } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
} from "react-icons/fa";

import {
  SiExpress,
  SiMongodb,
  SiMysql,
} from "react-icons/si";

const CATEGORIES = [
  {
    id: "frontend",
    label: "Frontend",
    color: "#ff7a00",
    description: "Crafting responsive, interactive UIs",
    skills: [
      { name: "HTML5",       icon: FaHtml5,      color: "#E34F26", level: 92 },
      { name: "CSS3",        icon: FaCss3Alt,       color: "#1572B6", level: 88 },
      { name: "JavaScript",  icon: FaJs, color: "#F7DF1E", level: 85 },
      { name: "React",       icon: FaReact,      color: "#61DAFB", level: 82 },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    color: "#ff7a00",
    description: "Building robust server-side systems",
    skills: [
      { name: "Node.js",    icon: FaNodeJs, color: "#68A063", level: 78 },
      { name: "Express.js", icon: SiExpress,   color: "#ffffff", level: 75 },
    ],
  },
  {
    id: "database",
    label: "Database",
    color: "#ff7a00",
    description: "Managing structured & unstructured data",
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "#4DB33D", level: 80 },
      { name: "SQL",     icon: SiMysql,  color: "#4479A1", level: 74 },
    ],
  },
  {
    id: "programming",
    label: "Programming",
    color: "#ff7a00",
    description: "Core languages for logic & algorithms",
    skills: [
      { name: "Python", icon: FaPython, color: "#FFD43B", level: 84 },
      { name: "Java",   icon: FaJava,   color: "#ED8B00", level: 70 },
    ],
  },
];

function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

function SkillBar({ level, color, inView, delay }) {
  return (
    <div className="h-1 w-full bg-white/[0.06] rounded-full overflow-hidden">
      <div
        className="h-full rounded-full transition-all duration-1000 ease-out"
        style={{
          width: inView ? `${level}%` : "0%",
          background: `linear-gradient(90deg, ${color}99, ${color})`,
          transitionDelay: `${delay}ms`,
          boxShadow: inView ? `0 0 8px ${color}55` : "none",
        }}
      />
    </div>
  );
}

function SkillCard({ skill, inView, delay }) {
  const [hovered, setHovered] = useState(false);
  const Icon = skill.icon;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative group flex flex-col gap-3 p-4 rounded-xl border transition-all duration-300 cursor-default
        ${hovered
          ? "bg-white/[0.06] border-[#ff7a00]/30 shadow-lg shadow-[#ff7a00]/5 -translate-y-0.5"
          : "bg-white/[0.03] border-white/[0.06]"
        }
        ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
      `}
      style={{ transition: "opacity 0.5s ease, transform 0.5s ease, background 0.3s, border-color 0.3s, box-shadow 0.3s", transitionDelay: `${delay}ms` }}
    >
      {/* Icon + name row */}
      <div className="flex items-center gap-3">
        <div
          className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300"
          style={{
            background: hovered ? `${skill.color}18` : `${skill.color}0d`,
            border: `1px solid ${skill.color}${hovered ? "40" : "20"}`,
          }}
        >
          <Icon size={18} style={{ color: skill.color }} />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-white text-sm font-semibold truncate">{skill.name}</p>
          <p className="text-gray-600 text-[11px] font-medium">{skill.level}% proficiency</p>
        </div>
      </div>

      {/* Progress bar */}
      <SkillBar level={skill.level} color={skill.color} inView={inView} delay={delay + 200} />
    </div>
  );
}

function CategoryCard({ cat, globalInView, catIdx }) {
  const baseDelay = catIdx * 80;

  return (
    <div
      className={`flex flex-col gap-5 p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:border-[#ff7a00]/20 transition-all duration-500
        ${globalInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
      `}
      style={{ transitionDelay: `${baseDelay}ms` }}
    >
      {/* Card header */}
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span
              className="w-2 h-2 rounded-full"
              style={{ background: "#ff7a00", boxShadow: "0 0 6px #ff7a0088" }}
            />
            <h3 className="text-white text-base font-bold tracking-tight">{cat.label}</h3>
          </div>
          <p className="text-gray-600 text-[11px] leading-snug">{cat.description}</p>
        </div>
        <span className="flex-shrink-0 text-[10px] font-semibold text-[#ff7a00] bg-[#ff7a00]/10 border border-[#ff7a00]/20 rounded-full px-2.5 py-1">
          {cat.skills.length} skills
        </span>
      </div>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-[#ff7a00]/20 via-white/5 to-transparent" />

      {/* Skills */}
      <div className="flex flex-col gap-3">
        {cat.skills.map((skill, i) => (
          <SkillCard
            key={skill.name}
            skill={skill}
            inView={globalInView}
            delay={baseDelay + 150 + i * 80}
          />
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const [sectionRef, inView] = useInView(0.08);

  const totalSkills = CATEGORIES.reduce((acc, c) => acc + c.skills.length, 0);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative bg-[#0a0a0a] py-24 overflow-hidden"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(#ff7a00 1px, transparent 1px), linear-gradient(90deg, #ff7a00 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      {/* Ambient glow */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-[#ff7a00]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-60 h-60 bg-[#ff7a00]/4 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* Section header */}
        <div className={`flex items-center gap-3 mb-4 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <span className="w-8 h-[2px] bg-[#ff7a00]" />
          <span className="text-[#ff7a00] text-xs font-semibold uppercase tracking-[0.2em]">Skills</span>
          <span className="flex-1 h-px bg-white/5" />
        </div>

        <div className={`mb-12 transition-all duration-700 delay-100 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight tracking-tight mb-3">
            Tools I build <span className="text-[#ff7a00]">with.</span>
          </h2>
          <p className="text-gray-500 text-sm sm:text-base max-w-xl leading-relaxed">
            A curated set of technologies I use across the full product lifecycle — from UI to data pipelines.
          </p>
        </div>

        {/* Stats strip */}
        <div className={`flex flex-wrap gap-6 mb-12 transition-all duration-700 delay-150 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          {[
            { value: CATEGORIES.length, label: "Categories" },
            { value: totalSkills, label: "Technologies" },
            { value: "10+", label: "Projects" },
          ].map(({ value, label }) => (
            <div key={label} className="flex items-baseline gap-2">
              <span className="text-2xl font-black text-[#ff7a00]">{value}</span>
              <span className="text-gray-600 text-xs font-medium uppercase tracking-wider">{label}</span>
            </div>
          ))}
        </div>

        {/* Category grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CATEGORIES.map((cat, i) => (
            <CategoryCard
              key={cat.id}
              cat={cat}
              globalInView={inView}
              catIdx={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}