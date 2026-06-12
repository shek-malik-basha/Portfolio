import { useEffect, useRef, useState } from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { HiArrowRight } from "react-icons/hi";
import indoorbooking from "../assets/images/projects/indoorbooking.png";
import pnumoniadetection from "../assets/images/projects/pnumoniadetection.png";
import recipefinder from "../assets/images/projects/recipefinder.png";
import smartfarming from "../assets/images/projects/smartfarming.png";
import heartdisease from "../assets/images/projects/heartdisease.png";
import seizureprediction from "../assets/images/projects/seizureprediction.png";
const PROJECTS = [
  {
    id: 1,
    title: "Indoor Sports Booking",
    tag: "Full Stack",
    tagColor: "#ff7a00",
    description:
      "A full-stack platform for booking indoor sports facilities. Users can browse available courts, reserve slots, and manage bookings through a clean, real-time dashboard.",
    tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind"],
    github: "https://github.com/shek-malik-basha/Indoor-Sports-Booking",
    demo: "https://indoor-sports-booking-fk1thck3p-shek-malik-bashas-projects.vercel.app/",
    gradient: "from-orange-500/20 via-orange-900/10 to-transparent",
    accentColor: "#ff7a00",
    image: indoorbooking,
  },
  {
    id: 2,
    title: "Recipe Finder",
    tag: "Frontend",
    tagColor: "#a855f7",
    description:
        "Recipe discovery platform that helps users search meals, explore ingredients, and view cooking instructions through an intuitive and responsive interface.",
    tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    github: "https://github.com/shek-malik-basha/Recipe-Finder",
    demo: "https://recipe-finder-7k1mu4q79-shek-malik-bashas-projects.vercel.app/",
    gradient: "from-purple-500/20 via-purple-900/10 to-transparent",
    accentColor: "#a855f7",
    image: recipefinder,
  },
  {
    id: 3,
    title: "Seizure Prediction",
    tag: "ML / Healthcare",
    tagColor: "#22d3ee",
    description:
      "An EEG signal-based machine learning system that predicts epileptic seizures before onset. Leverages signal processing and classification models for clinical accuracy.",
    tech: ["Python", "Scikit-learn", "NumPy", "Pandas", "Matplotlib"],
    github: "https://github.com/shek-malik-basha/seizure-prediction-system",
    demo: "https://can't.access.com",
    gradient: "from-cyan-500/20 via-cyan-900/10 to-transparent",
    accentColor: "#22d3ee",
    image: seizureprediction,
  },
  {
    id: 4,
    title: "Heart Disease Prediction",
    tag: "ML / Healthcare",
    tagColor: "#f43f5e",
    description:
      "Predictive healthcare application that estimates heart disease risk using patient health parameters and multiple machine learning algorithms.",
    tech: ["Python", "Scikit-learn", "Streamlit", "Pandas", "Seaborn"],
    github: "https://github.com/shek-malik-basha/heart-disease-prediction",
    demo: "https://can't.access.com",
    gradient: "from-rose-500/20 via-rose-900/10 to-transparent",
    accentColor: "#f43f5e",
    image: heartdisease,
  },
  {
    id: 5,
    title: "Pneumonia Detection",
    tag: "Deep Learning",
    tagColor: "#4ade80",
    description:
      "Deep learning system for detecting pneumonia from chest X-ray images. Built using CNN architectures and medical imaging datasets to assist early diagnosis.",
    tech: ["Python", "TensorFlow", "Keras", "OpenCV", "Streamlit"],
    github: "https://github.com/shek-malik-basha/pneumonia-detection-streamlit",
    demo: "https://can't.access.com",
    gradient: "from-green-500/20 via-green-900/10 to-transparent",
    accentColor: "#4ade80",
    image: pnumoniadetection,
  },
  {
    id: 6,
    title: "Smart Farming",
    tag: "AI / ML",
    tagColor: "#4ade80",
    description:
      "Smart agriculture solution that monitors environmental conditions and provides insights for crop management using IoT sensors and machine learning techniques.",
    tech: ["Python", "TensorFlow", "Keras", "OpenCV", "Streamlit"],
    github: "https://github.com/shek-malik-basha/Soil-Health-Monitoring",
    demo: "https://can't.access.com",
    gradient: "from-green-500/20 via-green-900/10 to-transparent",
    accentColor: "#4ade80",
    image: smartfarming,
  },
];

function useInView(threshold = 0.08) {
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

function ProjectCard({ project, inView, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`group relative flex flex-col rounded-2xl border overflow-hidden transition-all duration-500
        ${hovered ? "border-white/20 shadow-2xl -translate-y-1" : "border-white/[0.07]"}
        ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      `}
      style={{
        background: "#0f0f0f",
        boxShadow: hovered ? `0 20px 60px ${project.accentColor}15` : "none",
        transitionDelay: `${index * 100}ms`,
      }}
    >
      {/* Thumbnail */}
      <div
        className={`relative h-44 overflow-hidden bg-gradient-to-br ${project.gradient} bg-[#141414] flex items-center justify-center`}
      >
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(${project.accentColor} 1px, transparent 1px), linear-gradient(90deg, ${project.accentColor} 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
          }}
        />

        {/* Glow circle */}
        <div
          className="absolute inset-0 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at 50% 60%, ${project.accentColor}22 0%, transparent 65%)`,
            opacity: hovered ? 1 : 0.5,
          }}
        />

        {project.image ? (
  <img
    src={project.image}
    alt={project.title}
    className="relative z-10 w-full h-full object-cover transition-transform duration-500"
    style={{
      transform: hovered ? "scale(1.05)" : "scale(1)",
    }}
  />
) : (
  <span
    className="relative z-10 text-5xl transition-transform duration-500"
    style={{ transform: hovered ? "scale(1.15)" : "scale(1)" }}
  >
    {project.icon || "🚀"}
  </span>
)}

        {/* Tag */}
        <div
          className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider"
          style={{
            background: `${project.accentColor}18`,
            border: `1px solid ${project.accentColor}40`,
            color: project.accentColor,
          }}
        >
          {project.tag}
        </div>

        {/* Number */}
        <div className="absolute top-3 right-3 text-[11px] font-black text-white/10 tabular-nums">
          {String(project.id).padStart(2, "0")}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-4">
        <div>
          <h3 className="text-white font-bold text-base leading-snug mb-2 group-hover:text-white transition-colors duration-200">
            {project.title}
          </h3>
          <p className="text-gray-500 text-[13px] leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 rounded-md text-[11px] font-medium text-gray-400 bg-white/[0.04] border border-white/[0.06]"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Divider */}
        <div
          className="h-px transition-all duration-500"
          style={{
            background: hovered
              ? `linear-gradient(90deg, ${project.accentColor}50, transparent)`
              : "rgba(255,255,255,0.05)",
          }}
        />

        {/* Action buttons */}
        <div className="flex items-center gap-3 mt-auto">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white/[0.05] border border-white/[0.08] text-gray-400 text-xs font-medium hover:text-white hover:bg-white/10 hover:border-white/20 active:scale-95 transition-all duration-200"
          >
            <FiGithub size={13} />
            GitHub
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold active:scale-95 transition-all duration-200"
            style={{
              background: `${project.accentColor}18`,
              border: `1px solid ${project.accentColor}35`,
              color: project.accentColor,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = `${project.accentColor}28`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = `${project.accentColor}18`;
            }}
          >
            <FiExternalLink size={13} />
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [sectionRef, inView] = useInView(0.06);
  const [filter, setFilter] = useState("All");

  const tags = ["All", ...Array.from(new Set(PROJECTS.map((p) => p.tag)))];

  const filtered =
    filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.tag === filter);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative bg-[#0a0a0a] py-24 overflow-hidden"
    >
      {/* Background dots */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: "radial-gradient(#ff7a00 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />
      {/* Glow */}
      <div className="absolute top-0 right-1/3 w-96 h-96 bg-[#ff7a00]/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* Section label */}
        <div
          className={`flex items-center gap-3 mb-4 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <span className="w-8 h-[2px] bg-[#ff7a00]" />
          <span className="text-[#ff7a00] text-xs font-semibold uppercase tracking-[0.2em]">
            Projects
          </span>
          <span className="flex-1 h-px bg-white/5" />
        </div>

        {/* Heading */}
        <div
          className={`flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10 transition-all duration-700 delay-100 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <div>
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight tracking-tight mb-2">
              Things I've <span className="text-[#ff7a00]">built.</span>
            </h2>
            <p className="text-gray-500 text-sm sm:text-base max-w-md leading-relaxed">
              A selection of projects spanning web apps, ML models, and data-driven solutions.
            </p>
          </div>

          <a
            href="https://github.com/shek-malik-basha?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-sm text-gray-400 hover:text-[#ff7a00] font-medium transition-colors duration-200 self-start sm:self-auto"
          >
            View all on GitHub
            <HiArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
          </a>
        </div>

        {/* Filter tabs */}
        <div
          className={`flex flex-wrap gap-2 mb-10 transition-all duration-700 delay-150 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200 active:scale-95
                ${filter === tag
                  ? "bg-[#ff7a00] border-[#ff7a00] text-white shadow-lg shadow-orange-500/20"
                  : "bg-white/[0.04] border-white/[0.08] text-gray-400 hover:border-white/20 hover:text-white"
                }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              inView={inView}
              index={i}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={`flex justify-center mt-14 transition-all duration-700 delay-300 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <a
            href="https://github.com/shek-malik-basha?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2.5 px-6 py-3 rounded-full border border-white/10 text-gray-400 text-sm font-semibold hover:border-[#ff7a00]/40 hover:text-white hover:bg-white/[0.04] active:scale-95 transition-all duration-200"
          >
            <FiGithub size={16} />
            See more on GitHub
            <HiArrowRight className="group-hover:translate-x-1 transition-transform duration-200" size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}