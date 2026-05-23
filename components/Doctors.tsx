const featured = [
  {
    name: "Dr. Rabia Farooqi",
    specialty: "Gynaecologist",
    qual: "MBBS, FCPS",
    days: "Mon, Wed & Fri",
    time: "7:00 – 8:00 PM",
    color: "#7C3AED",
    initial: "RF",
  },
  {
    name: "Dr. Nadeem Azhar",
    specialty: "Diabetologist",
    qual: "MBBS, Senior Diabetologist",
    days: "Mon – Sat",
    time: "8:00 – 9:00 PM",
    color: "#EA580C",
    initial: "NA",
  },
  {
    name: "Dr. Muhammad Rafay",
    specialty: "Neurosurgeon",
    qual: "MBBS, FCPS",
    days: "Friday",
    time: "3:30 – 4:30 PM",
    color: "#0891B2",
    initial: "MR",
  },
  {
    name: "Dr. Ifrah Uroos",
    specialty: "Cardiologist",
    qual: "MBBS, FCPS",
    days: "Wed & Sat",
    time: "4:30 – 6:30 PM",
    color: "#C41E3A",
    initial: "IU",
  },
  {
    name: "Dr. Osama Jawed Khan",
    specialty: "Laparoscopic Surgeon",
    qual: "MBBS, FCPS",
    days: "Mon & Fri",
    time: "9:00 – 10:00 PM",
    color: "#1B2D6B",
    initial: "OJ",
  },
  {
    name: "Dr. Bushra Jilani",
    specialty: "Dermatologist",
    qual: "MBBS, Diploma Dermatology",
    days: "Tue & Wed",
    time: "5:00 – 6:00 PM",
    color: "#DB2777",
    initial: "BJ",
  },
];

export default function Doctors() {
  return (
    <section id="doctors" className="py-24 bg-[#F5F6FA]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#C41E3A] mb-3 block">
              Our Specialists
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Meet our doctors
            </h2>
          </div>
          <a
            href="tel:+922138885945"
            className="self-start md:self-auto inline-flex items-center gap-2 border border-gray-300 text-gray-600 text-sm font-semibold px-5 py-2.5 rounded-full hover:border-[#1B2D6B] hover:text-[#1B2D6B] transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.5 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.44 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.4a16 16 0 0 0 5.7 5.7l.79-.79a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z"/>
            </svg>
            Book appointment
          </a>
        </div>

        {/* Doctor cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map((doc) => (
            <div
              key={doc.name}
              className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              {/* Avatar + name */}
              <div className="flex items-center gap-4 mb-5">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-bold text-base shrink-0"
                  style={{ backgroundColor: doc.color }}
                >
                  {doc.initial}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-[15px] leading-tight">{doc.name}</p>
                  <p className="text-sm font-medium mt-0.5" style={{ color: doc.color }}>{doc.specialty}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{doc.qual}</p>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-gray-50 mb-4" />

              {/* Availability */}
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5 text-gray-400">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>
                  </svg>
                  <span>{doc.days}</span>
                </div>
                <div className="flex items-center gap-1.5 text-gray-400">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
                  </svg>
                  <span>{doc.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-10 bg-white rounded-2xl border border-gray-100 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="font-semibold text-gray-900 text-sm">21+ specialist consultants on our panel</p>
            <p className="text-gray-400 text-sm mt-0.5">Call us to check availability for any specialty</p>
          </div>
          <div className="flex gap-3 shrink-0">
            <a href="tel:+922138885945"
               className="text-sm font-semibold text-[#1B2D6B] bg-[#1B2D6B]/8 px-5 py-2.5 rounded-full hover:bg-[#1B2D6B]/15 transition-colors">
              +92 213 888 5945
            </a>
            <a href="tel:+923301252236"
               className="text-sm font-semibold text-[#C41E3A] bg-[#C41E3A]/8 px-5 py-2.5 rounded-full hover:bg-[#C41E3A]/15 transition-colors">
              +92 330 1252236
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
