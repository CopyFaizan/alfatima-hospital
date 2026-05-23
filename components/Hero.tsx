import Image from "next/image";

const stats = [
  { value: "4.9", label: "Patient Rating" },
  { value: "20+", label: "Specialists" },
  { value: "24/7", label: "Emergency" },
  { value: "98%", label: "Satisfaction" },
];

export default function Hero() {
  return (
    <section id="home" className="min-h-screen bg-[#F5F6FA] flex items-stretch pt-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full flex flex-col lg:flex-row items-center gap-10 py-16 lg:py-0">

        {/* ── Left column ── */}
        <div className="flex-1 flex flex-col justify-center">

          {/* Trust badge */}
          <div className="inline-flex items-center gap-3 mb-10 animate-fade-in">
            <div className="flex -space-x-2.5">
              {["bg-blue-400","bg-emerald-400","bg-violet-400"].map((c, i) => (
                <div key={i} className={`w-8 h-8 rounded-full border-2 border-white ${c}`} />
              ))}
            </div>
            <span className="text-sm font-medium text-gray-500">
              10 000+ <span className="text-gray-400">Healthy patients</span>
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-[1.1] mb-6 animate-fade-up">
            We are here to<br />
            help you stay<br />
            <span className="text-[#C41E3A]">healthy.</span>
          </h1>

          <p className="text-gray-500 text-lg mb-10 leading-relaxed max-w-md animate-fade-up delay-100">
            Al-Fatima Hospital — expert consultants, modern diagnostics, and
            round-the-clock emergency care in Gulshan-e-Iqbal, Karachi.
          </p>

          {/* CTA */}
          <div className="flex flex-wrap gap-3 mb-16 animate-fade-up delay-200">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#1B2D6B] text-white text-sm font-semibold px-7 py-3.5 rounded-full hover:bg-[#162359] transition-colors"
            >
              Make an appointment
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 bg-white border border-gray-200 text-gray-700 text-sm font-semibold px-7 py-3.5 rounded-full hover:border-gray-300 transition-colors"
            >
              Our services
            </a>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap gap-8 animate-fade-up delay-300">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-3xl font-bold text-[#1B2D6B]">{s.value}</p>
                <p className="text-xs text-gray-400 mt-0.5 font-medium">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Google reviews badge */}
          <div className="mt-8 inline-flex items-center gap-3 bg-white border border-gray-200 rounded-2xl px-5 py-3 shadow-sm animate-fade-up delay-400 w-fit">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-bold text-gray-900">4.8</span>
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map((i) => (
                  <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#F59E0B" stroke="none">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                ))}
              </div>
              <span className="text-xs text-gray-400 font-medium">118 Google reviews</span>
            </div>
          </div>
        </div>

        {/* ── Right column — image panel ── */}
        <div className="flex-1 relative h-[520px] lg:h-[calc(100vh-80px)] max-h-[700px] w-full rounded-3xl overflow-hidden shadow-xl animate-fade-in delay-200">
          <Image
            src="/hero.png"
            alt="Al-Fatima Hospital"
            fill
            priority
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          {/* Subtle overlay to unify colors */}
          <div className="absolute inset-0 bg-[#1B2D6B]/10" />

          {/* Floating card */}
          <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md rounded-2xl p-5 flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#C41E3A]/10 flex items-center justify-center shrink-0">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C41E3A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900">24/7 Emergency Services</p>
              <p className="text-xs text-gray-400 mt-0.5">Always here when you need us most</p>
            </div>
            <span className="ml-auto flex items-center gap-1.5 text-xs font-semibold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
              Open now
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
