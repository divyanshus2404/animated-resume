import { motion } from "framer-motion";
import _FastMarquee from "react-fast-marquee";
const FastMarquee = _FastMarquee.default || _FastMarquee;
import { SKILL_GROUPS } from "../data/portfolio";

const ALL_SKILLS = SKILL_GROUPS.flatMap((g) => g.items);

export default function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-[#e5e5df]"
      data-testid="skills-section"
    >
      {/* Editorial ribbons */}
      <div className="border-b border-[#0d0d0d] py-6 bg-[#f4f4f0]">
        <FastMarquee speed={30} gradient={false}>
          <div className="flex items-center">
            {ALL_SKILLS.concat(ALL_SKILLS).map((s, i) => (
              <span
                key={i}
                className="font-display text-4xl md:text-6xl lg:text-7xl tracking-tighter mx-8 flex items-center gap-8"
              >
                {s}
                <span className="text-[#ff2a00] text-3xl">/</span>
              </span>
            ))}
          </div>
        </FastMarquee>
      </div>

      <div className="px-6 md:px-12 lg:px-24 py-24 md:py-32">
        <div className="grid grid-cols-12 gap-6 mb-16">
          <div className="col-span-12 md:col-span-6">
            <div className="section-label mb-6">[05] — Stack</div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-none tracking-tighter">
              Tools I reach
              <br />
              for <span className="font-serif italic">daily.</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-[#0d0d0d]">
          {SKILL_GROUPS.map((g, idx) => (
            <motion.div
              key={g.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`p-6 md:p-8 ${
                idx !== SKILL_GROUPS.length - 1 ? "md:border-r border-[#e5e5df]" : ""
              } border-b lg:border-b-0 border-[#e5e5df]`}
              data-testid={`skill-group-${idx}`}
            >
              <div className="font-mono text-[11px] tracking-[0.25em] uppercase text-[#ff2a00] mb-6">
                {g.label}
              </div>
              <ul className="space-y-2">
                {g.items.map((item) => (
                  <li
                    key={item}
                    className="font-display text-xl md:text-2xl tracking-tight leading-tight"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
