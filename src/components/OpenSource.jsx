import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { OPENSOURCE } from "../data/portfolio";

export default function OpenSource() {
  return (
    <section
      id="opensource"
      className="px-6 md:px-12 lg:px-24 py-24 md:py-32 border-t border-[#e5e5df] bg-[#0d0d0d] text-[#f4f4f0]"
      data-testid="opensource-section"
    >
      <div className="grid grid-cols-12 gap-6 md:gap-12 items-start">
        <div className="col-span-12 md:col-span-5">
          <div className="font-mono text-[11px] tracking-[0.3em] uppercase text-[#ff2a00] mb-8 flex items-center gap-3">
            <span className="w-8 h-px bg-[#ff2a00]" />
            [06] — Open Source
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-none tracking-tighter">
            Contributing
            <br />
            <span className="font-serif italic">in public.</span>
          </h2>
          <p className="font-mono text-sm leading-relaxed text-[#a3a3a3] mt-6 max-w-md">
            Notable contributions to projects beyond my own work.
          </p>
        </div>

        <div className="col-span-12 md:col-span-7 space-y-4">
          {OPENSOURCE.map((o, i) => (
            <motion.div
              key={o.project}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="border border-[#f4f4f0]/20 p-6 md:p-8 hover:border-[#ff2a00] transition-colors duration-300"
              data-testid={`opensource-${i}`}
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="font-display text-3xl md:text-4xl tracking-tight leading-none">
                    {o.project}
                  </h3>
                  <p className="font-mono text-xs tracking-[0.2em] uppercase text-[#ff2a00] mt-3">
                    {o.label}
                  </p>
                </div>
                <Github size={28} className="text-[#f4f4f0]" />
              </div>
              <p className="font-mono text-sm leading-relaxed text-[#d4d4d4]">{o.note}</p>
              <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#595959] mt-5 pt-5 border-t border-[#f4f4f0]/10">
                {o.date}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
