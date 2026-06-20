import { motion } from "framer-motion";
import _FastMarquee from "react-fast-marquee";
const FastMarquee = _FastMarquee.default || _FastMarquee;
import { ArrowUpRight, Mail, Github, Linkedin, FileDown } from "lucide-react";
import { PROFILE } from "../data/portfolio";

const SOCIALS = [
  { label: "Email", href: `mailto:${PROFILE.email}`, icon: Mail, value: PROFILE.email },
  { label: "GitHub", href: PROFILE.github, icon: Github, value: "@divyanshus2404" },
  { label: "LinkedIn", href: PROFILE.linkedin, icon: Linkedin, value: "/in/divyanshu-singh" },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="px-6 md:px-12 lg:px-24 py-24 md:py-40 border-t border-[#e5e5df] relative overflow-hidden"
      data-testid="contact-section"
    >
      <div className="grid grid-cols-12 gap-6 md:gap-12">
        <div className="col-span-12 md:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="section-label mb-8">[07] — Contact</div>
            <h2 className="font-display text-6xl md:text-7xl lg:text-9xl leading-[0.85] tracking-tighter">
              Let&apos;s build
              <br />
              <span className="font-serif italic text-[#0033a0]">something.</span>
            </h2>
            <p className="font-mono text-base md:text-lg leading-relaxed text-[#0d0d0d] mt-10 max-w-xl">
              Open to founding-engineer and SWE roles. If you&apos;re building something
              ambitious in AI, robotics or consumer SaaS — let&apos;s talk.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <a
                href={`mailto:${PROFILE.email}`}
                className="btn-brutal"
                data-testid="contact-email-btn"
              >
                <Mail size={14} /> {PROFILE.email}
              </a>
              <a
                href={PROFILE.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-ghost"
                data-testid="contact-resume-btn"
              >
                Download CV <FileDown size={14} />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="col-span-12 md:col-span-5 md:col-start-8 mt-10 md:mt-0"
        >
          <div className="border border-[#0d0d0d] p-6 md:p-8 bg-white">
            <div className="font-mono text-[11px] tracking-[0.3em] uppercase text-[#595959] mb-6">
              Direct Lines
            </div>
            <div className="divide-y divide-[#e5e5df]">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.label !== "Email" ? "_blank" : undefined}
                  rel="noreferrer"
                  className="flex items-center justify-between py-4 group hover:px-2 transition-all duration-300"
                  data-testid={`contact-${s.label.toLowerCase()}`}
                >
                  <div className="flex items-center gap-4">
                    <s.icon size={18} />
                    <div>
                      <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#595959]">
                        {s.label}
                      </div>
                      <div className="font-mono text-sm text-[#0d0d0d] mt-1">{s.value}</div>
                    </div>
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="text-[#0d0d0d] transition-transform group-hover:rotate-45"
                  />
                </a>
              ))}
            </div>
          </div>

          <div className="mt-6 font-mono text-[11px] tracking-[0.2em] uppercase text-[#595959]">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff2a00] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff2a00]" />
              </span>
              {PROFILE.location} · IST
            </div>
          </div>
        </motion.div>
      </div>

      {/* Mega type bottom */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="mt-24 md:mt-40 -mx-6 md:-mx-12 lg:-mx-24"
      >
        <div className="font-display text-[22vw] leading-[0.85] tracking-tighter text-center text-[#0d0d0d] select-none py-4 overflow-hidden">
          <FastMarquee speed={80} gradient={false}>
            <span className="pr-16 uppercase">DIVYANSHU SINGH</span>
          </FastMarquee>
        </div>
      </motion.div>
    </section>
  );
}
