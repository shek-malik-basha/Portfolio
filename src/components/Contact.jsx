import { useRef, useState } from "react";
import { HiMail, HiDownload, HiCheckCircle, HiExclamationCircle } from "react-icons/hi";
import { FiGithub, FiLinkedin, FiSend } from "react-icons/fi";
import emailjs from "@emailjs/browser";
const SOCIAL_LINKS = [
  {
    id: "email",
    label: "Email",
    value: "shekmalikbasha@gmail.com",
    display: "shekmalikbasha@gmail.com",
    href: "mailto:shekmalikbasha@gmail.com",
    icon: HiMail,
    color: "#ff7a00",
    desc: "Drop me a message anytime",
  },
  {
    id: "github",
    label: "GitHub",
    value: "github.com/shekmalikbasha",
    display: "github.com/shekmalikbasha",
    href: "https://github.com/shek-malik-basha",
    icon: FiGithub,
    color: "#e2e8f0",
    desc: "Check out my code & projects",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/shekmalikbasha",
    display: "linkedin.com/in/shekmalikbasha",
    href: "https://www.linkedin.com/in/malik-basha-shek/",
    icon: FiLinkedin,
    color: "#0a66c2",
    desc: "Connect with me professionally",
  },
];

const INITIAL_FORM = { name: "", email: "", subject: "", message: "" };

function validate(form) {
  const errors = {};
  if (!form.name.trim()) errors.name = "Name is required.";
  if (!form.email.trim()) errors.email = "Email is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
    errors.email = "Enter a valid email.";
  if (!form.subject.trim()) errors.subject = "Subject is required.";
  if (!form.message.trim()) errors.message = "Message is required.";
  else if (form.message.trim().length < 20)
    errors.message = "Message must be at least 20 characters.";
  return errors;
}

function InputField({ label, id, type = "text", value, onChange, error, placeholder, rows }) {
  const Tag = rows ? "textarea" : "input";
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-gray-400 text-xs font-semibold uppercase tracking-wider">
        {label}
      </label>
      <Tag
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        className={`w-full bg-white/[0.04] border rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-all duration-200
          focus:bg-white/[0.06] focus:border-[#ff7a00]/60 focus:ring-2 focus:ring-[#ff7a00]/10
          ${error ? "border-rose-500/60" : "border-white/[0.08] hover:border-white/15"}
          ${rows ? "resize-none leading-relaxed" : ""}
        `}
      />
      {error && (
        <p className="flex items-center gap-1.5 text-rose-400 text-xs">
          <HiExclamationCircle size={13} />
          {error}
        </p>
      )}
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const formRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((err) => ({ ...err, [name]: undefined }));
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  const errs = validate(form);
  if (Object.keys(errs).length) {
    setErrors(errs);
    return;
  }

  setStatus("sending");

  try {
    await emailjs.send(
      "service_4vh9sjq",
      "template_df5ih4f",
      {
        from_name: form.name,
        from_email: form.email,
        subject: form.subject,
        message: form.message,
      },
      "yDSVVsugVgG4lbQXU"
    );

    setStatus("success");
    setForm(INITIAL_FORM);

    setTimeout(() => {
      setStatus("idle");
    }, 4000);

  } catch (error) {
    console.error("EmailJS Error:", error);
    setStatus("error");
  }
};
  return (
    <section
      id="contact"
      className="relative bg-[#0a0a0a] py-24 overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(#ff7a00 1px, transparent 1px), linear-gradient(90deg, #ff7a00 1px, transparent 1px)",
          backgroundSize: "52px 52px",
        }}
      />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#ff7a00]/6 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-[2px] bg-[#ff7a00]" />
          <span className="text-[#ff7a00] text-xs font-semibold uppercase tracking-[0.2em]">Contact</span>
          <span className="flex-1 h-px bg-white/5" />
        </div>

        {/* Heading */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight tracking-tight mb-2">
            Let's work <span className="text-[#ff7a00]">together.</span>
          </h2>
          <p className="text-gray-500 text-sm sm:text-base max-w-md leading-relaxed">
            Have a project, opportunity, or just want to connect? My inbox is always open.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14">

          {/* Left — Info panel */}
          <div className="lg:col-span-2 flex flex-col gap-6">

            {/* Social cards */}
            <div className="flex flex-col gap-3">
              {SOCIAL_LINKS.map(({ id, label, display, href, icon: Icon, color, desc }) => (
                <a
                  key={id}
                  href={href}
                  target={id !== "email" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:border-[#ff7a00]/25 hover:bg-white/[0.04] transition-all duration-300 hover:-translate-y-0.5"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-105"
                    style={{
                      background: `${color}15`,
                      border: `1px solid ${color}30`,
                    }}
                  >
                    <Icon size={18} style={{ color }} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-gray-500 text-[10px] font-semibold uppercase tracking-wider mb-0.5">{label}</p>
                    <p className="text-white text-sm font-medium truncate group-hover:text-[#ff7a00] transition-colors duration-200">
                      {display}
                    </p>
                    <p className="text-gray-600 text-[11px] mt-0.5">{desc}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-[#ff7a00]/20 via-white/5 to-transparent" />

            {/* Resume download */}
            <div className="p-5 rounded-2xl border border-[#ff7a00]/20 bg-[#ff7a00]/[0.04]">
              <p className="text-white text-sm font-bold mb-1">Looking for my CV?</p>
              <p className="text-gray-500 text-xs leading-relaxed mb-4">
                Download my resume for a complete overview of my skills, experience, and education.
              </p>
              <a
                href="/resume.pdf"
                download
                className="group flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-[#ff7a00] text-white text-sm font-semibold hover:bg-orange-500 hover:shadow-lg hover:shadow-orange-500/25 active:scale-95 transition-all duration-200"
              >
                <HiDownload size={16} className="group-hover:-translate-y-0.5 transition-transform duration-200" />
                Download Resume
              </a>
            </div>

            {/* Availability badge */}
            <div className="flex items-center gap-3 px-4 py-3 rounded-xl border border-white/[0.06] bg-white/[0.02]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
              <p className="text-gray-400 text-xs leading-snug">
                <span className="text-white font-medium">Available for work</span> · Open to internships, full-time & freelance roles.
              </p>
            </div>
          </div>

          {/* Right — Contact form */}
          <div className="lg:col-span-3">
            <div className="p-6 sm:p-8 rounded-2xl border border-white/[0.07] bg-[#0f0f0f]">
              <div
                className="h-[3px] w-16 rounded-full mb-6"
                style={{ background: "linear-gradient(90deg, #ff7a00, #ff7a0060)" }}
              />
              <h3 className="text-white font-bold text-lg mb-1">Send a Message</h3>
              <p className="text-gray-500 text-sm mb-7">I typically reply within 24 hours.</p>

              {status === "success" ? (
                <div className="flex flex-col items-center justify-center py-14 gap-4 text-center">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                    <HiCheckCircle size={28} className="text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-base mb-1">Message Sent!</p>
                    <p className="text-gray-500 text-sm">Thanks for reaching out. I'll get back to you soon.</p>
                  </div>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <InputField
                      label="Full Name"
                      id="name"
                      value={form.name}
                      onChange={handleChange}
                      error={errors.name}
                      placeholder="Shek Malik Basha"
                    />
                    <InputField
                      label="Email Address"
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      error={errors.email}
                      placeholder="you@example.com"
                    />
                  </div>

                  <InputField
                    label="Subject"
                    id="subject"
                    value={form.subject}
                    onChange={handleChange}
                    error={errors.subject}
                    placeholder="Project collaboration, opportunity, etc."
                  />

                  <InputField
                    label="Message"
                    id="message"
                    value={form.message}
                    onChange={handleChange}
                    error={errors.message}
                    placeholder="Tell me about your project or opportunity..."
                    rows={5}
                  />

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="group flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-[#ff7a00] text-white text-sm font-bold hover:bg-orange-500 hover:shadow-xl hover:shadow-orange-500/25 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 mt-1"
                  >
                    {status === "sending" ? (
                      <>
                        <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeOpacity="0.3" />
                          <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <FiSend size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Footer strip */}
        <div className="mt-20 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} Shek Malik Basha · Built with React & Tailwind CSS
          </p>
          <div className="flex items-center gap-4">
            {SOCIAL_LINKS.map(({ id, href, icon: Icon, color }) => (
              <a
                key={id}
                href={href}
                target={id !== "email" ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg border border-white/[0.08] flex items-center justify-center text-gray-500 hover:text-white hover:border-[#ff7a00]/40 hover:bg-[#ff7a00]/10 transition-all duration-200"
                aria-label={id}
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}