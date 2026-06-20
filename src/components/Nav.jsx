import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const LINKS = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.77, 0, 0.175, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-[#f4f4f0]/80 border-b border-black/10"
          : "bg-transparent"
      }`}
      data-testid="main-nav"
    >
      <div className="px-6 md:px-12 lg:px-24 py-5 flex items-center justify-between">
        <button
          onClick={() => scrollTo("hero")}
          className="font-display text-lg tracking-tighter"
          data-testid="nav-logo"
        >
          DS<span className="text-[#ff2a00]">.</span>
        </button>

        <div className="hidden md:flex items-center gap-10">
          {LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className="font-mono text-xs tracking-[0.2em] uppercase hard-link"
              data-testid={`nav-${l.id}`}
            >
              {l.label}
            </button>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#595959] flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff2a00] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff2a00]"></span>
            </span>
            Available
          </span>
        </div>

        <button
          className="md:hidden font-mono text-xs tracking-[0.2em] uppercase"
          onClick={() => setOpen(!open)}
          data-testid="nav-menu-toggle"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-black/10 bg-[#f4f4f0] px-6 py-6 flex flex-col gap-4">
          {LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className="font-display text-2xl text-left"
              data-testid={`nav-mobile-${l.id}`}
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </motion.nav>
  );
}
