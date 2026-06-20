import _FastMarquee from "react-fast-marquee";
const FastMarquee = _FastMarquee.default || _FastMarquee;

const ITEMS = [
  "AVAILABLE FOR FULL-TIME ROLES",
  "AI FULL-STACK",
  "FOUNDER @ BLUEBOTTLECAP",
  "₹10K+ IN REVENUE",
  "OPEN-SOURCE CONTRIBUTOR",
  "BENNETT UNIVERSITY",
  "PYTHON · REACT · LLMs",
  "BUILDS THINGS THAT WORK",
];

export default function Marquee() {
  return (
    <div className="border-y border-[#0d0d0d] py-5 bg-[#0d0d0d] text-[#f4f4f0]" data-testid="marquee">
      <FastMarquee speed={40} gradient={false}>
        <div className="flex items-center">
          {ITEMS.concat(ITEMS).map((t, i) => (
            <span
              key={i}
              className="font-mono text-xs md:text-sm tracking-[0.3em] mx-8 flex items-center gap-8"
            >
              {t}
              <span className="text-[#ff2a00]">✦</span>
            </span>
          ))}
        </div>
      </FastMarquee>
    </div>
  );
}
