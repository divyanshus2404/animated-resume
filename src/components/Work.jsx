import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "../data/portfolio";

export default function Work() {
  return (
    <section
      id="work"
      className="px-6 md:px-12 lg:px-24 py-24 md:py-40 border-t border-[#e5e5df]"
      data-testid="work-section"
    >
      <div className="grid grid-cols-12 gap-6 mb-16 md:mb-24 items-end">
        <div className="col-span-12 md:col-span-7">
          <div className="section-label mb-8">[04] — Selected Work</div>
          <h2 className="font-display text-5xl md:text-6xl lg:text-8xl leading-[0.9] tracking-tighter">
            Four projects.
            <br />
            <span className="font-serif italic">Built end-to-end.</span>
          </h2>
        </div>
        <div className="col-span-12 md:col-span-4 md:col-start-9">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-[#595959]">
            (Scroll through · click to expand)
          </p>
        </div>
      </div>

      {/* Bento grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6" data-testid="projects-grid">
        {PROJECTS.map((p, idx) => (
          <motion.a
            href={p.link || "#"}
            target="_blank"
            rel="noopener noreferrer"
            key={p.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, delay: idx * 0.08 }}
            className={`group relative border border-[#0d0d0d] bg-white overflow-hidden block ${p.span}`}
            data-testid={`project-${p.id}`}
          >
            <div className="relative aspect-[16/10] overflow-hidden border-b border-[#0d0d0d] bg-[#f4f4f0]">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 font-mono text-[10px] tracking-[0.25em] uppercase bg-[#0d0d0d] text-[#f4f4f0] px-3 py-1.5">
                {p.tag}
              </div>
              <div className="absolute top-4 right-4 font-mono text-[10px] tracking-[0.25em] uppercase bg-[#f4f4f0] text-[#0d0d0d] px-3 py-1.5 border border-[#0d0d0d]">
                {p.year}
              </div>
            </div>

            <div className="p-6 md:p-8">
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <h3 className="font-display text-2xl md:text-3xl tracking-tight leading-none">
                    {p.title}
                  </h3>
                  <p className="font-mono text-xs tracking-[0.15em] uppercase text-[#595959] mt-2">
                    {p.subtitle}
                  </p>
                </div>
                <div className="w-10 h-10 border border-[#0d0d0d] flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-[#0d0d0d] group-hover:text-[#f4f4f0] group-hover:rotate-45">
                  <ArrowUpRight size={16} />
                </div>
              </div>

              <p className="font-mono text-sm leading-relaxed text-[#0d0d0d] mb-5">
                {p.description}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#e5e5df]">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="font-mono text-[10px] tracking-[0.15em] uppercase px-2 py-1 text-[#595959]"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
