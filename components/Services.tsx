const services = [
  {
    title: "OPD Services",
    desc: "Outpatient consultations with our specialist consultants across all departments.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Laboratory",
    desc: "Full diagnostic blood work, culture, and pathology testing with quick turnaround.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v11m0 0a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2m-6 0h6m0 0V3" />
      </svg>
    ),
  },
  {
    title: "Ultrasound",
    desc: "High-resolution ultrasound imaging for abdomen, pelvis, obstetrics, and more.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" /><path d="M7 8l2 4 2-6 2 4 2-2" />
      </svg>
    ),
  },
  {
    title: "Digital X-Ray",
    desc: "Modern digital radiography for accurate bone and chest imaging within minutes.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M9 9h6M9 12h6M9 15h4" />
      </svg>
    ),
  },
  {
    title: "ECG",
    desc: "Electrocardiogram testing to monitor and assess heart rhythm and function.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    title: "Pharmacy",
    desc: "On-site pharmacy stocked with a wide range of prescribed and OTC medications.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M9 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-4M9 3a2 2 0 0 1 4 0M9 3h6M12 11v6M9 14h6" />
      </svg>
    ),
  },
  {
    title: "Minor OT",
    desc: "Clean, equipped operation theatre for minor surgical and procedural interventions.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="m19 14-7-7-9 9 2 2 7-7 7 7z" /><path d="m5 19 2 2M3 21l2-2" />
      </svg>
    ),
  },
  {
    title: "Physiotherapy",
    desc: "Rehabilitation and physical therapy to restore movement, strength, and function.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <circle cx="12" cy="5" r="2" /><path d="M12 7v7m0 0-3 4m3-4 3 4M9 11H5m14 0h-4" />
      </svg>
    ),
  },
  {
    title: "24/7 Emergency",
    desc: "Round-the-clock emergency services with trained staff ready to respond instantly.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" /><circle cx="19" cy="5" r="3" fill="#C41E3A" stroke="none" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#F8F9FC]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#C41E3A] text-xs font-bold uppercase tracking-widest mb-3">
            What We Offer
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1B2D6B] mb-4">
            Our Medical Services
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base">
            From diagnostics to surgery, we provide a full spectrum of healthcare services under one roof.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`group bg-white rounded-2xl p-7 border border-gray-100 hover:border-[#1B2D6B]/20 hover:shadow-lg transition-all duration-300 ${
                i === 8 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="w-12 h-12 rounded-xl bg-[#1B2D6B]/8 flex items-center justify-center text-[#1B2D6B] mb-5 group-hover:bg-[#1B2D6B] group-hover:text-white transition-colors duration-300">
                {s.icon}
              </div>
              <h3 className="text-lg font-semibold text-[#1B2D6B] mb-2">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
