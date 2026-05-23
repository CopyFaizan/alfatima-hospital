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
