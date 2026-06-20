import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { PROFILE } from "../data/portfolio";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};
const item = {
  hidden: { y: 30, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.7, ease: [0.77, 0, 0.175, 1] } },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen px-6 md:px-12 lg:px-24 pt-32 pb-16 grid-lines"
      data-testid="hero-section"
    >
      {/* Top meta strip */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid grid-cols-12 gap-4 font-mono text-[10px] md:text-xs tracking-[0.25em] uppercase text-[#595959] mb-16 md:mb-24"
      >
        <div className="col-span-6 md:col-span-3">
          [01] — Portfolio / 2026
        </div>
        <div className="col-span-6 md:col-span-3">
          Lat 28.5° · Long 77.4°
        </div>
        <div className="hidden md:block md:col-span-3">
          Bennett University Grad
        </div>
        <div className="hidden md:block md:col-span-3 text-right">
          Last Updated · Dec 2025
        </div>
      </motion.div>

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="grid grid-cols-12 gap-4 md:gap-8 items-end"
      >
        <div className="col-span-12 lg:col-span-9">
          <motion.div variants={item} className="section-label mb-8">
            AI Full-Stack Developer & Founder
          </motion.div>

          <motion.h1
            variants={item}
            className="font-display text-[14vw] md:text-[10vw] lg:text-[9rem] leading-[0.85] tracking-tighter"
          >
            Divyanshu
          </motion.h1>
          <motion.h1
            variants={item}
            className="font-display text-[14vw] md:text-[10vw] lg:text-[9rem] leading-[0.85] tracking-tighter flex items-center gap-4"
          >
            Singh
            <span className="font-serif italic text-[#ff2a00] text-[8vw] md:text-[5vw] lg:text-7xl translate-y-2">
              /b<span className="not-italic">u</span>ilder
            </span>
          </motion.h1>
        </div>

        <motion.div
          variants={item}
          className="col-span-12 lg:col-span-3 lg:pb-4 flex lg:justify-end"
        >
          <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#0d0d0d] border border-[#0d0d0d] px-4 py-3 inline-flex items-center gap-2">
            <span className="w-2 h-2 bg-[#ff2a00]" />
            Open to roles
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom row */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="grid grid-cols-12 gap-4 md:gap-8 mt-16 md:mt-24"
      >
        <div className="col-span-12 md:col-span-5 lg:col-span-4">
          <p className="font-mono text-sm md:text-base leading-relaxed text-[#0d0d0d]">
            {PROFILE.tagline}
          </p>
        </div>

        <div className="hidden md:block md:col-span-3 lg:col-span-4 font-mono text-xs tracking-[0.2em] uppercase text-[#595959] leading-loose">
          <div>Noida, IN</div>
          <div>B.Tech CSE — 2026</div>
          <div className="text-[#0d0d0d] mt-2">divyanshus2404@gmail.com</div>
        </div>

        <div className="col-span-12 md:col-span-4 flex md:justify-end items-end gap-4 flex-wrap">
          <button
            onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-brutal"
            data-testid="hero-view-work"
          >
            View Work <ArrowDownRight size={14} />
          </button>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-ghost"
            data-testid="hero-contact"
          >
            Get in touch <ArrowUpRight size={14} />
          </button>
        </div>
      </motion.div>

      {/* Decorative grid corner */}
      <div className="absolute top-32 right-6 lg:right-24 hidden lg:flex flex-col gap-1 font-mono text-[10px] text-[#595959]">
        <div>+ + + + +</div>
        <div>+ + + + +</div>
        <div>+ + + + +</div>
      </div>
    </section>
  );
}
