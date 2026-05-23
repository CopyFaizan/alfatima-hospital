const info = [
  {
    label: "Address",
    value: "D-1 Block 4, Gulshan-e-Iqbal\nNear Disco Bakery, Karachi",
    color: "bg-[#1B2D6B]",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "+92 213 888 5945\n+92 330 1252236",
    color: "bg-[#C41E3A]",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.5 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.44 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.4a16 16 0 0 0 5.7 5.7l.79-.79a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z"/>
      </svg>
    ),
  },
  {
    label: "Emergency",
    value: "Open 24 hours\n7 days a week",
    color: "bg-emerald-600",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
  },
  {
    label: "Website",
    value: "www.alfatimahospital\n.com.pk",
    color: "bg-violet-600",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#F5F6FA]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C41E3A] mb-3 block">
            Find Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contact & Location
          </h2>
          <p className="text-gray-400 max-w-md mx-auto text-base">
            Visit us in Gulshan-e-Iqbal or call to book. Walk-ins welcome for OPD.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Info grid */}
          <div className="grid grid-cols-2 gap-4">
            {info.map((item) => (
              <div key={item.label} className="bg-white rounded-2xl p-5 border border-gray-100">
                <div className={`w-9 h-9 ${item.color} rounded-xl flex items-center justify-center mb-4`}>
                  {item.icon}
                </div>
                <p className="text-xs font-bold uppercase tracking-wide text-gray-400 mb-1">{item.label}</p>
                <p className="text-sm font-medium text-gray-800 leading-relaxed whitespace-pre-line">
                  {item.value}
                </p>
              </div>
            ))}

            {/* CTA card spanning full width */}
            <div className="col-span-2 bg-[#1B2D6B] rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="font-bold text-white text-sm">Ready to book an appointment?</p>
                <p className="text-white/60 text-xs mt-0.5">Call us directly — we'll find the right specialist for you.</p>
              </div>
              <a
                href="tel:+922138885945"
                className="shrink-0 inline-flex items-center gap-2 bg-white text-[#1B2D6B] text-sm font-bold px-5 py-2.5 rounded-full hover:bg-gray-100 transition-colors"
              >
                Call now
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="relative rounded-3xl overflow-hidden border border-gray-100 shadow-sm h-[400px]">
            <iframe
              title="Al-Fatima Hospital Map"
              src="https://maps.google.com/maps?q=Al+Fatima+Hospital,+Block+4+Gulshan-e-Iqbal,+Karachi,+75300,+Pakistan&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Get Directions button */}
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Al+Fatima+Hospital,+Block+4+Gulshan-e-Iqbal,+Karachi,+75300,+Pakistan"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 bg-[#1B2D6B] text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-lg hover:bg-[#162359] transition-colors whitespace-nowrap"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
              </svg>
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
