import { HiMail, HiHeart, HiArrowUp } from "react-icons/hi";
import { FiGithub, FiLinkedin } from "react-icons/fi";

const NAV_LINKS = [
  { label: "Home",         href: "#home" },
  { label: "About",        href: "#about" },
  { label: "Skills",       href: "#skills" },
  { label: "Projects",     href: "#projects" },
  { label: "Certificates", href: "#certificates" },
  { label: "Education", href: "#education" },
  { label: "Contact",      href: "#contact" },
];

const SOCIAL_LINKS = [
  { label: "GitHub",   href: "https://github.com/shek-malik-basha",           icon: FiGithub,   color: "#e2e8f0" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/malik-basha-shek/",      icon: FiLinkedin, color: "#0a66c2" },
  { label: "Email",    href: "mailto: malikbashashaik09@gmail.com",             icon: HiMail,     color: "#ff7a00" },
];

function scrollTo(href) {
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#080808] border-t border-white/[0.06] overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-40 bg-[#ff7a00]/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* Top section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 py-12 border-b border-white/[0.05]">

          {/* Brand */}
          <div className="sm:col-span-1 flex flex-col gap-4">
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); scrollTo("#home"); }}
              className="flex items-center gap-2.5 group w-fit"
            >
              <span className="w-9 h-9 rounded-xl bg-[#ff7a00] flex items-center justify-center text-white font-black text-sm shadow-lg shadow-orange-500/25 group-hover:scale-110 transition-transform duration-200">
                S
              </span>
              <span className="text-white font-bold text-[15px] tracking-wide leading-tight">
                Shek <span className="text-[#ff7a00]">Malik Basha</span>
              </span>
            </a>
            <p className="text-gray-600 text-xs leading-relaxed max-w-[220px]">
              Full Stack Developer & Data Science student passionate about building impactful digital products.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-2 mt-1">
              {SOCIAL_LINKS.map(({ label, href, icon: Icon, color }) => (
                <a
                  key={label}
                  href={href}
                  target={label !== "Email" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 rounded-lg border border-white/[0.07] flex items-center justify-center text-gray-500 hover:border-[#ff7a00]/40 hover:bg-[#ff7a00]/10 hover:text-white transition-all duration-200 group"
                >
                  <Icon size={14} className="group-hover:scale-110 transition-transform duration-200" style={{ color: undefined }} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav links */}
          <div className="sm:col-span-1">
            <p className="text-gray-400 text-[11px] font-semibold uppercase tracking-[0.18em] mb-4">
              Navigation
            </p>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={(e) => { e.preventDefault(); scrollTo(href); }}
                    className="text-gray-500 text-sm hover:text-[#ff7a00] transition-colors duration-200 flex items-center gap-1 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#ff7a00]/0 group-hover:bg-[#ff7a00] transition-all duration-200 flex-shrink-0" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact snapshot */}
          <div className="sm:col-span-1">
            <p className="text-gray-400 text-[11px] font-semibold uppercase tracking-[0.18em] mb-4">
              Get in Touch
            </p>
            <div className="flex flex-col gap-3">
              {SOCIAL_LINKS.map(({ label, href, icon: Icon, color }) => (
                <a
                  key={label}
                  href={href}
                  target={label !== "Email" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 group w-fit"
                >
                  <Icon size={13} style={{ color }} className="flex-shrink-0" />
                  <span className="text-gray-500 text-xs group-hover:text-gray-200 transition-colors duration-200 truncate">
                    {label === "Email"
                      ? "shekmalikbasha@gmail.com"
                      : label === "GitHub"
                      ? "github.com/shekmalikbasha"
                      : "linkedin.com/in/shekmalikbasha"}
                  </span>
                </a>
              ))}

              {/* Availability dot */}
              <div className="flex items-center gap-2 mt-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-gray-600 text-[11px]">Open to opportunities</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 py-5">
          <p className="text-gray-600 text-xs text-center sm:text-left flex items-center gap-1 flex-wrap justify-center">
            © {year} Shek Malik Basha · Made with
            <HiHeart size={12} className="text-[#ff7a00] mx-0.5" />
            using React & Tailwind CSS
          </p>

          {/* Back to top */}
          <button
            onClick={() => scrollTo("#home")}
            aria-label="Back to top"
            className="group flex items-center gap-1.5 text-gray-600 hover:text-[#ff7a00] text-xs font-medium transition-colors duration-200"
          >
            Back to top
            <span className="w-6 h-6 rounded-lg border border-white/[0.08] flex items-center justify-center group-hover:border-[#ff7a00]/40 group-hover:bg-[#ff7a00]/10 transition-all duration-200">
              <HiArrowUp size={11} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}