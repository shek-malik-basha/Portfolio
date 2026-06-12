import { useState, useEffect } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = NAV_LINKS.map((link) =>
        document.querySelector(link.href)
      );

      let current = "#home";
      sections.forEach((section) => {
        if (!section) return;
        const sectionTop = section.offsetTop - 80;
        if (window.scrollY >= sectionTop) {
          current = `#${section.id}`;
        }
      });
      setActiveLink(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (href) => {
    setActiveLink(href);
    setMenuOpen(false);

    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0d0d0d]/95 backdrop-blur-md shadow-lg shadow-black/40 border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-16 md:h-[70px]">
          {/* Logo / Name */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick("#home");
            }}
            className="flex items-center gap-2 group select-none"
          >
            <span className="w-8 h-8 rounded-full bg-[#ff7a00] flex items-center justify-center text-white font-bold text-sm shadow-md shadow-orange-500/30 group-hover:scale-110 transition-transform duration-200">
              S
            </span>
            <span className="text-white font-semibold text-[15px] tracking-wide leading-tight">
              Shek{" "}
              <span className="text-[#ff7a00] font-bold">Malik Basha</span>
            </span>
          </a>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(({ label, href }) => {
              const isActive = activeLink === href;
              return (
                <li key={href}>
                  <a
                    href={href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(href);
                    }}
                    className={`relative px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 group
                      ${
                        isActive
                          ? "text-[#ff7a00]"
                          : "text-gray-400 hover:text-white"
                      }`}
                  >
                    {label}
                    {/* Underline indicator */}
                    <span
                      className={`absolute bottom-1 left-3 right-3 h-[2px] rounded-full bg-[#ff7a00] transition-all duration-300 origin-left
                        ${
                          isActive
                            ? "scale-x-100 opacity-100"
                            : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-60"
                        }`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Desktop CTA */}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick("#contact");
            }}
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ff7a00] text-white text-sm font-semibold hover:bg-orange-500 hover:shadow-lg hover:shadow-orange-500/30 active:scale-95 transition-all duration-200"
          >
            Hire Me
          </a>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="md:hidden text-gray-300 hover:text-[#ff7a00] transition-colors duration-200 p-1"
          >
            {menuOpen ? <HiX size={26} /> : <HiMenuAlt3 size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#111111]/98 backdrop-blur-md border-t border-white/5 px-4 pt-3 pb-6">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map(({ label, href }) => {
              const isActive = activeLink === href;
              return (
                <li key={href}>
                  <a
                    href={href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(href);
                    }}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200
                      ${
                        isActive
                          ? "bg-[#ff7a00]/10 text-[#ff7a00] border-l-2 border-[#ff7a00]"
                          : "text-gray-400 hover:bg-white/5 hover:text-white border-l-2 border-transparent"
                      }`}
                  >
                    {label}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="mt-4 px-4">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick("#contact");
              }}
              className="block w-full text-center py-3 rounded-full bg-[#ff7a00] text-white text-sm font-semibold hover:bg-orange-500 active:scale-95 transition-all duration-200 shadow-lg shadow-orange-500/20"
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}