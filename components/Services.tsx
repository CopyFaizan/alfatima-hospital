const services = [
  {
    title: "General Medicine",
    tags: ["OPD", "Internal Medicine"],
    bg: "bg-blue-100",
    accent: "bg-blue-200 text-blue-800",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-blue-500">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    title: "Diagnostics",
    tags: ["X-Ray", "Ultrasound", "ECG", "Lab"],
    bg: "bg-violet-100",
    accent: "bg-violet-200 text-violet-800",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-violet-500">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
  },
  {
    title: "Paediatrics",
    tags: ["Child Specialist", "Pediatric Surgery"],
    bg: "bg-emerald-100",
    accent: "bg-emerald-200 text-emerald-800",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-emerald-500">
        <circle cx="12" cy="5" r="2"/><path d="M12 7v7m0 0-3 4m3-4 3 4M9 11H5m14 0h-4"/>
      </svg>
    ),
  },
  {
    title: "Surgery",
    tags: ["General", "Laparoscopic", "Orthopedic"],
    bg: "bg-rose-100",
    accent: "bg-rose-200 text-rose-800",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-rose-500">
        <path d="m19 14-7-7-9 9 2 2 7-7 7 7z"/><path d="m5 19 2 2M3 21l2-2"/>
      </svg>
    ),
  },
  {
    title: "Women's Health",
    tags: ["Gynaecology", "Obstetrics"],
    bg: "bg-pink-100",
    accent: "bg-pink-200 text-pink-800",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-pink-500">
        <circle cx="12" cy="8" r="6"/><path d="M12 14v8M9 19h6"/>
      </svg>
    ),
  },
  {
    title: "Emergency",
    tags: ["24/7", "Trauma", "Critical Care"],
    bg: "bg-orange-100",
    accent: "bg-orange-200 text-orange-800",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-orange-500">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
  },
  {
    title: "Physiotherapy",
    tags: ["Rehabilitation", "Sports"],
    bg: "bg-teal-100",
    accent: "bg-teal-200 text-teal-800",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-teal-500">
        <path d="M6 5a3 3 0 1 0 6 0 3 3 0 0 0-6 0"/><path d="m3 16 2-6h8l2 6M5 16h12M8 22h6"/>
      </svg>
    ),
  },
  {
    title: "Dermatology",
    tags: ["Skin", "Cosmetic"],
    bg: "bg-amber-100",
    accent: "bg-amber-200 text-amber-800",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-amber-500">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#C41E3A] mb-3 block">
              What We Offer
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Our Services
            </h2>
          </div>
          <p className="text-gray-400 text-sm max-w-xs leading-relaxed md:text-right">
            Comprehensive medical care across all major specialties — all under one roof.
          </p>
        </div>

        {/* Horizontal scroll cards */}
        <div className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-none -mx-2 px-2">
          {services.map((s) => (
            <div
              key={s.title}
              className={`${s.bg} rounded-3xl p-7 min-w-[240px] max-w-[240px] snap-start flex flex-col justify-between gap-6 hover:scale-[1.02] transition-transform duration-200 cursor-default`}
            >
              <div>{s.icon}</div>
              <div>
                <h3 className="font-semibold text-gray-900 text-lg mb-3">{s.title}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {s.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`${s.accent} text-[11px] font-semibold px-2.5 py-1 rounded-full`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll hint */}
        <div className="flex items-center gap-2 mt-5">
          <div className="h-px flex-1 bg-gray-100" />
          <span className="text-xs text-gray-300 font-medium">Scroll to explore</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#d1d5db" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
        </div>

      </div>
    </section>
  );
}
