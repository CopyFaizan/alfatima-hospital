const services = [
  {
    title: "OPD Services",
    desc: "Walk-in consultations with specialist doctors across all departments.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
        <circle cx="32" cy="16" r="10" fill="#1B2D6B" opacity="0.15"/>
        <path d="M32 8a8 8 0 1 1 0 16A8 8 0 0 1 32 8z" fill="#1B2D6B"/>
        <path d="M14 50c0-9.94 8.06-18 18-18s18 8.06 18 18" stroke="#1B2D6B" strokeWidth="4" strokeLinecap="round"/>
        <path d="M44 36c4 2 7 6 7 10" stroke="#1B2D6B" strokeWidth="3" strokeLinecap="round"/>
        <circle cx="48" cy="30" r="3" fill="#1B2D6B"/>
        {/* Stethoscope */}
        <path d="M20 26c0 0-4 2-4 8s4 10 10 10" stroke="#1B2D6B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M44 26c0 0 4 2 4 8" stroke="#1B2D6B" strokeWidth="3" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Laboratory",
    desc: "Full blood work, pathology, and diagnostic testing with fast results.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
        <path d="M24 8h16v20l10 24H14L24 28V8z" fill="#1B2D6B" opacity="0.12"/>
        <path d="M24 8h16v20l10 24H14L24 28V8z" stroke="#1B2D6B" strokeWidth="3" strokeLinejoin="round"/>
        <path d="M22 8h20" stroke="#1B2D6B" strokeWidth="3" strokeLinecap="round"/>
        <circle cx="26" cy="42" r="3" fill="#1B2D6B"/>
        <circle cx="36" cy="46" r="2" fill="#1B2D6B"/>
        <circle cx="30" cy="48" r="2" fill="#1B2D6B"/>
        <path d="M18 36h28" stroke="#1B2D6B" strokeWidth="2" strokeLinecap="round" opacity="0.4"/>
      </svg>
    ),
  },
  {
    title: "Ultrasound",
    desc: "High-resolution imaging for abdomen, pelvis, and obstetric scans.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
        <rect x="10" y="20" width="44" height="28" rx="4" fill="#1B2D6B" opacity="0.12"/>
        <rect x="10" y="20" width="44" height="28" rx="4" stroke="#1B2D6B" strokeWidth="3"/>
        <path d="M18 38l5-8 5 10 5-14 5 10 5-6" stroke="#1B2D6B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="24" y="8" width="16" height="14" rx="3" fill="#1B2D6B"/>
        <path d="M32 22v-6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="32" cy="12" r="2" fill="white"/>
      </svg>
    ),
  },
  {
    title: "Digital X-Ray",
    desc: "Modern digital radiography for bone, chest, and joint imaging.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
        <rect x="8" y="8" width="48" height="48" rx="6" fill="#1B2D6B"/>
        {/* Ribcage */}
        <path d="M32 16v32" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M32 20 C24 20 18 24 18 30" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none"/>
        <path d="M32 26 C24 26 16 30 16 36" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none"/>
        <path d="M32 32 C24 32 16 36 16 42" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none"/>
        <path d="M32 20 C40 20 46 24 46 30" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none"/>
        <path d="M32 26 C40 26 48 30 48 36" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none"/>
        <path d="M32 32 C40 32 48 36 48 42" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none"/>
        {/* Collarbone */}
        <path d="M22 18 C26 16 30 16 32 16" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <path d="M42 18 C38 16 34 16 32 16" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "ECG",
    desc: "Electrocardiogram monitoring for accurate heart rhythm assessment.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
        <path d="M32 52 C32 52 10 38 10 24 C10 16 16 10 24 10 C28 10 32 12 32 12 C32 12 36 10 40 10 C48 10 54 16 54 24 C54 38 32 52 32 52Z" fill="#1B2D6B" opacity="0.15"/>
        <path d="M32 52 C32 52 10 38 10 24 C10 16 16 10 24 10 C28 10 32 12 32 12 C32 12 36 10 40 10 C48 10 54 16 54 24 C54 38 32 52 32 52Z" stroke="#1B2D6B" strokeWidth="3" strokeLinejoin="round"/>
        <path d="M12 30h8l4-10 6 20 4-14 3 8 3-4h12" stroke="#1B2D6B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Pharmacy",
    desc: "On-site pharmacy with a wide range of prescribed medications.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
        <rect x="20" y="8" width="24" height="12" rx="4" fill="#1B2D6B"/>
        <rect x="14" y="18" width="36" height="38" rx="5" fill="#1B2D6B" opacity="0.12"/>
        <rect x="14" y="18" width="36" height="38" rx="5" stroke="#1B2D6B" strokeWidth="3"/>
        <path d="M32 28v16M24 36h16" stroke="#1B2D6B" strokeWidth="3" strokeLinecap="round"/>
        <path d="M22 8h20" stroke="#1B2D6B" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
      </svg>
    ),
  },
  {
    title: "Minor OT",
    desc: "Equipped operation theatre for minor surgical procedures.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
        {/* Patient on table */}
        <rect x="8" y="36" width="48" height="6" rx="3" fill="#1B2D6B"/>
        <circle cx="44" cy="26" r="7" fill="#1B2D6B" opacity="0.2"/>
        <circle cx="44" cy="26" r="7" stroke="#1B2D6B" strokeWidth="3"/>
        <path d="M20 36 C20 30 28 26 36 26 L44 26" stroke="#1B2D6B" strokeWidth="3" strokeLinecap="round"/>
        <path d="M16 42v8M48 42v8" stroke="#1B2D6B" strokeWidth="3" strokeLinecap="round"/>
        {/* Scalpel */}
        <path d="M10 16l10 10M14 12l4 4-8 8-4-4z" stroke="#1B2D6B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Physiotherapy",
    desc: "Rehabilitation and physical therapy to restore movement and strength.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
        <circle cx="32" cy="10" r="6" fill="#1B2D6B"/>
        <path d="M32 16v16" stroke="#1B2D6B" strokeWidth="3" strokeLinecap="round"/>
        <path d="M32 26 L20 34" stroke="#1B2D6B" strokeWidth="3" strokeLinecap="round"/>
        <path d="M32 26 L44 34" stroke="#1B2D6B" strokeWidth="3" strokeLinecap="round"/>
        <path d="M24 32 L18 50" stroke="#1B2D6B" strokeWidth="3" strokeLinecap="round"/>
        <path d="M40 32 L46 50" stroke="#1B2D6B" strokeWidth="3" strokeLinecap="round"/>
        {/* Bed / table */}
        <rect x="10" y="44" width="44" height="6" rx="3" fill="#1B2D6B" opacity="0.2"/>
        <rect x="10" y="44" width="44" height="6" rx="3" stroke="#1B2D6B" strokeWidth="2.5"/>
      </svg>
    ),
  },
  {
    title: "24/7 Emergency",
    desc: "Round-the-clock emergency response with trained medical staff.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
        <path d="M32 4 L56 16 L56 40 C56 50 44 58 32 60 C20 58 8 50 8 40 L8 16 Z" fill="#1B2D6B" opacity="0.12"/>
        <path d="M32 4 L56 16 L56 40 C56 50 44 58 32 60 C20 58 8 50 8 40 L8 16 Z" stroke="#1B2D6B" strokeWidth="3" strokeLinejoin="round"/>
        <path d="M32 22v20M22 32h20" stroke="#1B2D6B" strokeWidth="4" strokeLinecap="round"/>
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C41E3A] mb-3 block">
            What We Offer
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Medical Services
          </h2>
          <p className="text-gray-400 text-sm max-w-md mx-auto">
            Comprehensive healthcare across all major specialties — all under one roof.
          </p>
        </div>

        {/* Scrollable card strip */}
        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-none -mx-2 px-2">
          {services.map((s) => (
            <div
              key={s.title}
              className="snap-start shrink-0 w-44 bg-white border-2 border-[#1B2D6B]/15 rounded-3xl p-5 flex flex-col items-center text-center gap-4 hover:border-[#1B2D6B]/40 hover:shadow-md transition-all duration-200"
            >
              <div className="w-16 h-16 flex items-center justify-center">
                {s.icon}
              </div>
              <div>
                <p className="text-[#1B2D6B] font-bold text-xs uppercase tracking-wide leading-tight mb-1.5">
                  {s.title}
                </p>
                <p className="text-gray-400 text-[11px] leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll hint */}
        <div className="flex items-center gap-2 mt-5 md:hidden">
          <div className="h-px flex-1 bg-gray-100" />
          <span className="text-xs text-gray-300 font-medium">Swipe to see all</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#d1d5db" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </div>

      </div>
    </section>
  );
}
