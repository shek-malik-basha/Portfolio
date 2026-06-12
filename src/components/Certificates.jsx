import { useEffect, useRef, useState } from "react";
import { FiExternalLink, FiAward } from "react-icons/fi";
import { HiBadgeCheck } from "react-icons/hi";
import awscloud from "../assets/images/certificates/awscloud.png";
import ciscoda from "../assets/images/certificates/ciscoda.png";
import googleda from "../assets/images/certificates/googleda.png";
import hplife from "../assets/images/certificates/hplife.png";
import skillupgenai from "../assets/images/certificates/skillup-genai.png";
import skillupml from "../assets/images/certificates/skillup-ml.png";
const CERTIFICATES = [
  {
    id: 1,
    title: "AWS Cloud Foundations",
    issuer: "AWS",
    issuerIcon: FiAward,
    issuerColor: "#FF9900",
    category: "Cloud & AI",
    image: awscloud,
    skills: ["Cloud", "AWS", "Infrastructure"],
    link: "https://drive.google.com/drive/folders/1BhscKtKOxuSRBVRArWhR5jn0rsjDaIq4?usp=drive_link",
  },

  {
    id: 2,
    title: "Cisco Data Analytics",
    issuer: "Cisco",
    issuerIcon: FiAward,
    issuerColor: "#1BA0D7",
    category: "Data Analytics",
    image: ciscoda,
    skills: ["Analytics", "SQL", "Visualization"],
    link: "https://drive.google.com/drive/folders/1BhscKtKOxuSRBVRArWhR5jn0rsjDaIq4?usp=drive_link",
  },

  {
    id: 3,
    title: "Google Data Analytics",
    issuer: "Google",
    issuerIcon: FiAward,
    issuerColor: "#4285F4",
    category: "Data Analytics",
    image: googleda,
    skills: ["Data Analytics", "SQL", "Excel"],
    link: "https://drive.google.com/drive/folders/1BhscKtKOxuSRBVRArWhR5jn0rsjDaIq4?usp=drive_link",
  },

  {
    id: 4,
    title: "HP Life Certificate",
    issuer: "HP Life",
    issuerIcon: FiAward,
    issuerColor: "#0096D6",
    category: "Development",
    image: hplife,
    skills: ["Business", "Technology", "Learning"],
    link: "https://drive.google.com/drive/folders/1BhscKtKOxuSRBVRArWhR5jn0rsjDaIq4?usp=drive_link",
  },

  {
    id: 5,
    title: "Generative AI",
    issuer: "SkillUp",
    issuerIcon: FiAward,
    issuerColor: "#8b5cf6",
    category: "Data Science",
    image: skillupgenai,
    skills: ["Generative AI", "LLMs", "Prompting"],
    link: "https://drive.google.com/drive/folders/1BhscKtKOxuSRBVRArWhR5jn0rsjDaIq4?usp=drive_link",
  },

  {
    id: 6,
    title: "Machine Learning",
    issuer: "SkillUp",
    issuerIcon: FiAward,
    issuerColor: "#10b981",
    category: "Machine Learning",
    image: skillupml,
    skills: ["ML", "Python", "Models"],
    link: "https://drive.google.com/drive/folders/1BhscKtKOxuSRBVRArWhR5jn0rsjDaIq4?usp=drive_link",
  },
];

const CATEGORIES = ["All", ...Array.from(new Set(CERTIFICATES.map((c) => c.category)))];

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

function CertCard({ cert, inView, index }) {
  const [hovered, setHovered] = useState(false);
  const IssuerIcon = cert.issuerIcon;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`group relative flex flex-col rounded-2xl border overflow-hidden bg-[#0f0f0f] transition-all duration-500
        ${hovered ? "border-white/20 -translate-y-1" : "border-white/[0.07]"}
        ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      `}
      style={{
        boxShadow: hovered ? `0 20px 50px ${cert.accentColor}18` : "none",
        transitionDelay: `${index * 80}ms`,
      }}
    >
      {/* Thumbnail */}
      <div
        className={`relative h-36 overflow-hidden bg-gradient-to-br ${cert.gradient} bg-[#141414] flex items-center justify-center`}
      >
        {/* Grid texture */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(${cert.accentColor} 1px, transparent 1px), linear-gradient(90deg, ${cert.accentColor} 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
          }}
        />

        {/* Radial glow */}
        <div
          className="absolute inset-0 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at 50% 70%, ${cert.accentColor}25 0%, transparent 65%)`,
            opacity: hovered ? 1 : 0.6,
          }}
        />

        <img
  src={cert.image}
  alt={cert.title}
  className="relative z-10 w-full h-48 object-contain bg-white p-2 rounded-t-xl transition-transform duration-500"
  style={{
    transform: hovered ? "scale(1.05)" : "scale(1)"
  }}
/>

        {/* Category chip */}   
        <div
          className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider"
          style={{
            background: `${cert.accentColor}1a`,
            border: `1px solid ${cert.accentColor}40`,
            color: cert.accentColor,
          }}
        >
          {cert.category}
        </div>

        {/* Verified badge */}
        <div className="absolute top-3 right-3">
          <HiBadgeCheck
            size={20}
            className="transition-opacity duration-300"
            style={{ color: cert.accentColor, opacity: hovered ? 1 : 0.5 }}
          />
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#0f0f0f] to-transparent" />
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-1 p-4 gap-3">

      
        {/* Title */}
        <h3 className="text-white text-sm font-bold leading-snug group-hover:text-white transition-colors line-clamp-2">
          {cert.title}
        </h3>

        {/* Skills */}
        <div className="flex flex-wrap gap-1.5">
          {cert.skills.map((s) => (
            <span
              key={s}
              className="text-[10px] font-medium px-2 py-0.5 rounded-md text-gray-400 bg-white/[0.04] border border-white/[0.06]"
            >
              {s}
            </span>
          ))}
        </div>

        {/* Credential ID */}
       <div className="flex items-center gap-1.5">
  <IssuerIcon size={10} style={{ color: cert.issuerColor }} />
  <span className="text-gray-400 text-[11px]">
  Issued by{" "}
  <span className="text-white font-semibold">
    {cert.issuer}
  </span>
</span>
</div>  

        {/* Divider */}
        <div
          className="h-px transition-all duration-500"
          style={{
            background: hovered
              ? `linear-gradient(90deg, ${cert.accentColor}50, transparent)`
              : "rgba(255,255,255,0.05)",
          }}
        />

        {/* CTA */}
        <a
          href={cert.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto flex items-center justify-center gap-2 w-full py-2 rounded-xl text-xs font-semibold border transition-all duration-200 active:scale-95"
          style={{
            background: hovered ? `${cert.accentColor}20` : `${cert.accentColor}0d`,
            borderColor: hovered ? `${cert.accentColor}55` : `${cert.accentColor}25`,
            color: cert.accentColor,
          }}
        >
          <FiExternalLink size={12} />
          View Certificate
        </a>
      </div>
    </div>
  );
}

export default function Certificates() {
  const [sectionRef, inView] = useInView(0.06);
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? CERTIFICATES
      : CERTIFICATES.filter((c) => c.category === active);

  return (
    <section
      id="certificates"
      ref={sectionRef}
      className="relative bg-[#0a0a0a] py-24 overflow-hidden"
    >
      {/* Background dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.022]"
        style={{
          backgroundImage: "radial-gradient(#ff7a00 1px, transparent 1px)",
          backgroundSize: "34px 34px",
        }}
      />
      {/* Ambient glows */}
      <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-[#ff7a00]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 left-0 w-60 h-60 bg-[#8b5cf6]/4 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* Section label */}
        <div className={`flex items-center gap-3 mb-4 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <span className="w-8 h-[2px] bg-[#ff7a00]" />
          <span className="text-[#ff7a00] text-xs font-semibold uppercase tracking-[0.2em]">Certificates</span>
          <span className="flex-1 h-px bg-white/5" />
        </div>

        {/* Heading row */}
        <div className={`flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 transition-all duration-700 delay-100 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <div>
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight tracking-tight mb-2">
              Credentials &{" "}
              <span className="text-[#ff7a00]">Learnings.</span>
            </h2>
            <p className="text-gray-500 text-sm sm:text-base max-w-md leading-relaxed">
              Verified certifications from globally recognised platforms spanning development, data science, and cloud.
            </p>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-6 self-start sm:self-auto">
            <div>
              <p className="text-2xl font-black text-[#ff7a00]">{CERTIFICATES.length}+</p>
              <p className="text-gray-600 text-[11px] uppercase tracking-wider">Certificates</p>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div>
              <p className="text-2xl font-black text-[#ff7a00]">{CATEGORIES.length - 1}</p>
              <p className="text-gray-600 text-[11px] uppercase tracking-wider">Domains</p>
            </div>
          </div>
        </div>

        {/* Filter tabs */}
        <div className={`flex flex-wrap gap-2 mb-10 transition-all duration-700 delay-150 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200 active:scale-95
                ${active === cat
                  ? "bg-[#ff7a00] border-[#ff7a00] text-white shadow-lg shadow-orange-500/20"
                  : "bg-white/[0.04] border-white/[0.08] text-gray-400 hover:border-white/20 hover:text-white"
                }`}
            >
              {cat}
              {cat !== "All" && (
                <span className={`ml-1.5 text-[10px] ${active === cat ? "text-orange-200" : "text-gray-600"}`}>
                  {CERTIFICATES.filter((c) => c.category === cat).length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((cert, i) => (
            <CertCard key={cert.id} cert={cert} inView={inView} index={i} />
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 text-gray-600">
            <FiAward size={36} className="mb-3 opacity-30" />
            <p className="text-sm">No certificates in this category yet.</p>
          </div>
        )}
      </div>
    </section>
  );
}