import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { EXPERIENCE } from "../data/portfolio";

export default function Experience() {
  return (
    <section
      id="experience"
      className="px-6 md:px-12 lg:px-24 py-24 md:py-40 border-t border-[#e5e5df] bg-[#f4f4f0]"
      data-testid="experience-section"
    >
      <div className="grid grid-cols-12 gap-6 mb-16 md:mb-24">
        <div className="col-span-12 md:col-span-6">
          <div className="section-label mb-8">[03] — Experience</div>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl leading-none tracking-tighter">
            Things I&apos;ve
            <br />
            <span className="font-serif italic text-[#0033a0]">shipped.</span>
          </h2>
        </div>
        <div className="col-span-12 md:col-span-5 md:col-start-8 flex items-end">
          <p className="font-mono text-sm leading-relaxed text-[#595959]">
            A short, dense résumé of work that actually went into production —
            with real users, real metrics, and real bug fixes at 2AM.
          </p>
        </div>
      </div>

      <div className="relative" data-testid="experience-timeline">
        {/* Vertical line */}
        <div className="absolute left-2 md:left-3 top-2 bottom-2 w-px bg-[#0d0d0d]" />

        <div className="space-y-16 md:space-y-24">
          {EXPERIENCE.map((exp, idx) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              className="relative pl-10 md:pl-16"
              data-testid={`experience-${exp.company.toLowerCase()}`}
            >
              {/* Dot */}
              <div className="absolute left-0 top-2 w-5 h-5 bg-[#f4f4f0] border border-[#0d0d0d] flex items-center justify-center">
                <div className="w-2 h-2 bg-[#ff2a00]" />
              </div>

              <div className="grid grid-cols-12 gap-4 md:gap-8">
                <div className="col-span-12 md:col-span-4">
                  <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#595959] mb-3">
                    {exp.period}
                  </div>
                  <h3 className="font-display text-3xl md:text-4xl tracking-tight leading-none mb-2">
                    {exp.company}
                  </h3>
                  <p className="font-mono text-sm text-[#0d0d0d]">{exp.role}</p>
                  <p className="font-mono text-[11px] tracking-[0.15em] uppercase text-[#595959] mt-1">
                    {exp.location}
                  </p>
                </div>

                <div className="col-span-12 md:col-span-8">
                  <ul className="space-y-4">
                    {exp.bullets.map((b, i) => (
                      <li
                        key={i}
                        className="font-mono text-sm md:text-base leading-relaxed text-[#0d0d0d] flex gap-3"
                      >
                        <span className="text-[#ff2a00] flex-shrink-0 mt-1">→</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-6">
                    {exp.stack.map((s) => (
                      <span
                        key={s}
                        className="font-mono text-[10px] tracking-[0.15em] uppercase border border-[#0d0d0d] px-2.5 py-1"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
