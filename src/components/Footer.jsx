import { PROFILE } from "../data/portfolio";

export default function Footer() {
  return (
    <footer
      className="border-t border-[#0d0d0d] px-6 md:px-12 lg:px-24 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 bg-[#f4f4f0]"
      data-testid="footer"
    >
      <div className="font-mono text-[11px] tracking-[0.25em] uppercase text-[#595959]">
        © {new Date().getFullYear()} {PROFILE.name} — All rights reserved
      </div>
      <div className="font-mono text-[11px] tracking-[0.25em] uppercase text-[#595959]">
        Designed & built in Noida · Hosted on Vercel
      </div>
    </footer>
  );
}
