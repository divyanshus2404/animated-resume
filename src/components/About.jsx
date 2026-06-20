import { motion } from "framer-motion";
import { PROFILE, STATS, EDUCATION } from "../data/portfolio";

export default function About() {
  return (
    <section
      id="about"
      className="px-6 md:px-12 lg:px-24 py-24 md:py-40 border-t border-[#e5e5df]"
      data-testid="about-section"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="section-label mb-12"
      >
        [02] — About
      </motion.div>

      <div className="grid grid-cols-12 gap-6 md:gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="col-span-12 lg:col-span-7"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tighter mb-10">
            I build <span className="font-serif italic text-[#0033a0]">AI-integrated</span> products
            that ship — from prototype to paying users.
          </h2>

          <div className="space-y-5 font-mono text-sm md:text-base leading-relaxed text-[#0d0d0d] max-w-2xl">
            <p>
              Recent B.Tech CSE graduate from Bennett University. I&apos;ve shipped a live AI SaaS
              platform that hit ₹10K+ in revenue within weeks, a computer-vision pipeline for
              underwater robotics, and a couple of mobile MVPs along the way.
            </p>
            <p>
              I&apos;m comfortable across the stack — React frontends, model-serving APIs, Postgres,
              Razorpay flows. I lean toward shipping over theorising, but with a real DSA
              foundation when it matters.
            </p>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 mt-14 border-t border-[#0d0d0d]" data-testid="stats-grid">
            {STATS.map((s, i) => (
              <motion.div
                key={s.k}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`py-6 ${i !== STATS.length - 1 ? "md:border-r border-[#e5e5df]" : ""} ${
                  i % 2 === 0 ? "border-r md:border-r" : ""
                } ${i < 2 ? "border-b md:border-b-0" : ""}`}
              >
                <div className="font-display text-3xl md:text-4xl tracking-tighter">{s.k}</div>
                <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#595959] mt-2">
                  {s.v}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right column: portrait + education card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="col-span-12 lg:col-span-5 flex flex-col gap-6"
        >
          <div className="relative overflow-hidden border border-[#0d0d0d]" data-testid="about-portrait">
            <img
              src={PROFILE.portrait}
              alt="Divyanshu Singh"
              className="w-full h-[420px] md:h-[520px] object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-[#0d0d0d] text-[#f4f4f0] px-5 py-3 font-mono text-[10px] tracking-[0.25em] uppercase flex items-center justify-between">
              <span>DIVYANSHU · 2026</span>
              <span className="text-[#ff2a00]">●</span>
            </div>
          </div>

          {/* Education */}
          <div className="card-flat p-6 md:p-8" data-testid="education-card">
            <div className="section-label mb-4">Education</div>
            <h3 className="font-display text-xl md:text-2xl tracking-tight mb-1">
              {EDUCATION.degree}
            </h3>
            <p className="font-mono text-sm text-[#595959] mb-1">{EDUCATION.school}</p>
            <p className="font-mono text-xs text-[#595959] tracking-wider">
              {EDUCATION.period} · {EDUCATION.cgpa}
            </p>
            <div className="flex flex-wrap gap-2 mt-5">
              {EDUCATION.coursework.map((c) => (
                <span
                  key={c}
                  className="font-mono text-[10px] tracking-[0.15em] uppercase border border-[#e5e5df] px-2 py-1"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
