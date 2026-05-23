import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Top tag */}
        <div className="text-center mb-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C41E3A]">
            About the hospital
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-4">
          We value the trust our<br />patients place in us.
        </h2>
        <p className="text-gray-400 text-center max-w-lg mx-auto text-base mb-16">
          Hear their stories and experiences about the care and support they received at our hospital. Your trust inspires us to provide even better medical services every day.
        </p>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <div className="relative h-[420px] rounded-3xl overflow-hidden">
            <Image
              src="/hospital-front.webp"
              alt="Al-Fatima Hospital"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Overlay pill badge */}
            <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-3 flex items-center gap-3 shadow-sm">
              <div className="w-8 h-8 rounded-xl bg-[#1B2D6B] flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              <div>
                <p className="text-xs font-bold text-gray-900">Certified Specialists</p>
                <p className="text-[10px] text-gray-400">MBBS · FCPS · MRCPS</p>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="flex flex-col gap-6">
            <p className="text-gray-600 text-base leading-relaxed">
              Al-Fatima Hospital has been a cornerstone of healthcare in Karachi, providing compassionate and expert medical care to thousands of patients. Our team of 21+ board-certified consultants spans every major specialty.
            </p>
            <p className="text-gray-600 text-base leading-relaxed">
              From routine OPD visits to complex surgical procedures and 24/7 emergency response, we are committed to being there for our community — with the expertise and equipment to make a real difference.
            </p>

            {/* Metric pills */}
            <div className="grid grid-cols-2 gap-4 mt-2">
              {[
                { v: "21+",  l: "Consultants" },
                { v: "98%",  l: "Satisfaction rate" },
                { v: "9",    l: "Services offered" },
                { v: "24/7", l: "Emergency care" },
              ].map((m) => (
                <div key={m.l} className="bg-[#F5F6FA] rounded-2xl p-4">
                  <p className="text-2xl font-bold text-[#1B2D6B]">{m.v}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{m.l}</p>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="self-start inline-flex items-center gap-2 bg-[#1B2D6B] text-white text-sm font-semibold px-7 py-3.5 rounded-full hover:bg-[#162359] transition-colors mt-2"
            >
              Get in touch
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
