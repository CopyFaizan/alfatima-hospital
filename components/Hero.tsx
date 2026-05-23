import Image from "next/image";

const stats = [
  { value: "20+", label: "Specialists" },
  { value: "24/7", label: "Emergency" },
  { value: "98%",  label: "Satisfaction" },
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col overflow-hidden">

      {/* Background image */}
      <Image
        src="/hero.png"
        alt="Al-Fatima Hospital"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Overlay — strong at top for headline, dark at bottom for content */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/80" />

      {/* ── TOP: Headline + description in the sky ── */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 pt-28 gap-5">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.08]">
          We are here to<br />
          help you stay<br />
          <span className="text-[#ef4444]">healthy.</span>
        </h1>
        <p className="text-white/70 text-base md:text-lg max-w-md leading-relaxed">
          Expert consultants, modern diagnostics, and round-the-clock
          emergency care — Gulshan-e-Iqbal, Karachi.
        </p>
      </div>

      {/* Spacer — pushes bottom content down past the building */}
      <div className="flex-1" />

      {/* ── BOTTOM: Description, buttons, stats, badge — below the building ── */}
      <div className="relative z-10 flex flex-col items-center text-center gap-6 px-6 pb-20">

        {/* CTAs */}
        <div className="flex flex-wrap gap-3 justify-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#1B2D6B] hover:bg-[#162359] text-white text-sm font-semibold px-7 py-3.5 rounded-full transition-colors duration-200"
          >
            Make an Appointment
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white text-sm font-semibold px-7 py-3.5 rounded-full transition-colors duration-200"
          >
            Our Services
          </a>
        </div>

        {/* Divider */}
        <div className="w-24 h-px bg-white/20" />

        {/* Stats */}
        <div className="flex flex-wrap gap-10 justify-center">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl font-bold text-white">{s.value}</p>
              <p className="text-xs text-white/50 mt-0.5 font-medium tracking-wide">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Google reviews badge */}
        <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-5 py-3">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-white">4.8</span>
            <div className="flex gap-0.5">
              {[1,2,3,4,5].map((i) => (
                <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="#F59E0B" stroke="none">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
              ))}
            </div>
            <span className="text-xs text-white/60 font-medium">118 Google reviews</span>
          </div>
        </div>

      </div>

      {/* Wave transition */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 60L1440 60L1440 20C1200 55 960 5 720 25C480 45 240 5 0 25L0 60Z" fill="white"/>
        </svg>
      </div>

    </section>
  );
}
