import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/banner.png"
          alt="Al-Fatima Hospital"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Dark overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1b45]/85 via-[#0d1b45]/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-24 pb-16 w-full">
        <div className="max-w-2xl">
          {/* Trust badge */}
          <div className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8 animate-fade-in">
            <div className="flex -space-x-2">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="w-7 h-7 rounded-full border-2 border-white/60 bg-gradient-to-br from-blue-300 to-blue-500"
                />
              ))}
            </div>
            <span className="text-white/90 text-sm font-medium">
              Trusted by thousands of patients in Karachi
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 animate-fade-up">
            We are <span className="text-[#ef4444]">expert</span>
            <br />
            medical specialists.
          </h1>

          <p className="text-white/75 text-lg md:text-xl mb-10 leading-relaxed animate-fade-up delay-100">
            Al-Fatima Hospital delivers compassionate, world-class care with
            20+ specialist consultants and 24/7 emergency services — right
            in the heart of Gulshan-e-Iqbal, Karachi.
          </p>

          <div className="flex flex-wrap gap-4 animate-fade-up delay-200">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#C41E3A] hover:bg-[#a8192f] text-white font-semibold px-7 py-3.5 rounded-full transition-colors duration-200 text-sm"
            >
              Free Consultation
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#doctors"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold px-7 py-3.5 rounded-full transition-colors duration-200 text-sm"
            >
              View Doctors
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        {/* Floating info cards */}
        <div className="absolute bottom-10 right-8 hidden lg:flex flex-col gap-4 animate-fade-up delay-300">
          <div className="bg-white rounded-2xl shadow-xl p-5 min-w-[200px]">
            <p className="text-xs text-gray-500 font-medium uppercase tracking-wide mb-1">Trusted Rate</p>
            <p className="text-4xl font-bold text-[#1B2D6B]">98%</p>
            <p className="text-xs text-gray-500 mt-1">Patients satisfied with our care</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 min-w-[200px]">
            <div className="flex flex-col gap-2">
              {["Compassionate", "Expert", "Accessible"].map((tag) => (
                <div
                  key={tag}
                  className="flex items-center gap-2"
                >
                  <span className="w-2 h-2 rounded-full bg-[#C41E3A] shrink-0" />
                  <span className="text-white text-sm font-medium">{tag}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 60L1440 60L1440 20C1200 60 960 0 720 20C480 40 240 0 0 20L0 60Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
