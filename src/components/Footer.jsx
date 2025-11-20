import { LuFacebook, LuInstagram, LuTwitter } from "react-icons/lu";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-r from-[#050b1a] via-[#0b1327] to-[#050b1a] py-10 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_55%)]" />
      <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-5 px-6 text-center">
        <p className="text-sm uppercase tracking-[0.4em] text-white/60">
          Life Food & Beverage
        </p>
        <h2 className="text-2xl font-heading font-semibold">
          Fueling every sip with bold flavor & clean energy.
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-white/80">
          <a
            href="https://www.facebook.com/lifefoodnepal/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 transition hover:border-white"
          >
            <LuFacebook /> Facebook
          </a>
          <a
            href="https://www.instagram.com/lifefoodnepal/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 transition hover:border-white"
          >
            <LuInstagram /> Instagram
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 transition hover:border-white"
          >
            <LuTwitter /> Twitter
          </a>
        </div>

        <div className="flex flex-col items-center gap-3">
          <a
            href="https://nurainalam.com.np"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full bg-gradient-to-r from-[#ff5fa2] via-white/15 to-[#61dfff] px-6 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-white shadow-[0_10px_30px_rgba(97,223,255,0.35)] transition hover:shadow-[0_15px_40px_rgba(97,223,255,0.5)]"
          >
            Crafted by{" "}
            <span className="tracking-normal font-bold">
              Nurain Alam · nurainalam.com.np
            </span>
          </a>
        </div>

        <p className="text-xs text-white/60">
          © {new Date().getFullYear()} Life Food & Beverage. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
