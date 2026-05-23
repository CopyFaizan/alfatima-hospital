const doctors = [
  { name: "Dr. Anum Latif", specialty: "General Physician & Internal Medicine", qual: "MBBS, FCPS, MRCPS", days: "Tue & Thu", time: "7:00 – 8:00 PM" },
  { name: "Dr. Adiba Zeeshan", specialty: "General Physician & Internal Medicine", qual: "MBBS, FCPS", days: "Mon & Wed", time: "5:00 – 7:00 PM" },
  { name: "Dr. Taimoor Iftikhar Qureshi", specialty: "Pediatric Surgeon", qual: "MBBS, FCPS", days: "Thu & Sat", time: "8:00 – 9:00 PM" },
  { name: "Dr. Adil Iqbal", specialty: "Plastic Surgeon", qual: "MBBS, FCPS", days: "On Call", time: "On Call" },
  { name: "Dr. Abdul Rafay Kazi", specialty: "Orthopedic & Trauma Surgeon", qual: "MBBS, FCPS", days: "Mon & Thu", time: "9:30 – 10:30 PM" },
  { name: "Dr. Osama Jawed Khan", specialty: "General / Laparoscopic Surgeon", qual: "MBBS, FCPS", days: "Mon & Fri", time: "9:00 – 10:00 PM" },
  { name: "Dr. Shumaila Zehra", specialty: "General / Laparoscopic Surgeon", qual: "MBBS, FCPS", days: "Mon – Sat", time: "6:30 – 7:30 PM" },
  { name: "Dr. Arooba Zahid", specialty: "General / Laparoscopic Surgeon", qual: "MBBS, FCPS", days: "Mon & Wed", time: "5:00 – 6:00 PM" },
  { name: "Dr. Shahrukh Khalil", specialty: "General / Laparoscopic Surgeon", qual: "MBBS, FCPS", days: "Tue & Fri", time: "5:00 – 6:00 PM" },
  { name: "Dr. Muhammad Rafay", specialty: "Neurosurgeon", qual: "MBBS, FCPS", days: "Friday", time: "3:30 – 4:30 PM" },
  { name: "Dr. Nadeem Azhar", specialty: "Diabetologist", qual: "MBBS, Senior Diabetologist", days: "Mon – Sat", time: "8:00 – 9:00 PM" },
  { name: "Dr. Rabia Farooqi", specialty: "Gynaecologist", qual: "MBBS, FCPS", days: "Mon, Wed & Fri", time: "7:00 – 8:00 PM" },
  { name: "Dr. Hira Bashir", specialty: "Gynaecologist", qual: "MBBS, FCPS", days: "Saturday", time: "5:00 – 6:00 PM" },
  { name: "Dr. Faiqa Hassan", specialty: "Gynaecologist", qual: "MBBS, FCPS", days: "Mon & Thu", time: "1:00 – 2:00 PM" },
  { name: "Dr. Quratul-Ain", specialty: "Child Specialist", qual: "MBBS, FCPS", days: "Mon & Wed", time: "6:00 – 7:00 PM" },
  { name: "Dr. Ifrah Uroos", specialty: "Cardiologist", qual: "MBBS, FCPS", days: "Wed & Sat", time: "4:30 – 6:30 PM" },
  { name: "Dr. Farhan Ahmed", specialty: "Cardiologist", qual: "MBBS, FCPS", days: "Tuesday", time: "8:30 – 9:30 PM" },
  { name: "Dr. Muzamil Husain", specialty: "Urologist", qual: "MBBS, FCPS", days: "Wed & Fri", time: "6:00 – 7:00 PM" },
  { name: "Dr. Waqas Ahmed", specialty: "Urologist", qual: "MBBS, FCPS, MRCPS", days: "Saturday", time: "7:00 – 8:00 PM" },
  { name: "Dr. Bushra Jilani", specialty: "Dermatologist", qual: "MBBS, Diploma Dermatology", days: "Tue & Wed", time: "5:00 – 6:00 PM" },
  { name: "Dr. Fariha Sheikh", specialty: "Sonologist", qual: "MBBS, FCPS", days: "Mon, Wed & Fri", time: "5:00 – 8:00 PM" },
];

function getInitials(name: string) {
  return name
    .replace("Dr. ", "")
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("");
}

const specialtyColors: Record<string, string> = {
  "Gynaecologist": "#7C3AED",
  "Cardiologist": "#C41E3A",
  "Neurosurgeon": "#0891B2",
  "Pediatric Surgeon": "#059669",
  "Plastic Surgeon": "#D97706",
  "Diabetologist": "#EA580C",
  "Child Specialist": "#16A34A",
  "Urologist": "#1B2D6B",
  "Dermatologist": "#DB2777",
  "Sonologist": "#0284C7",
};

function getColor(specialty: string) {
  for (const key of Object.keys(specialtyColors)) {
    if (specialty.includes(key)) return specialtyColors[key];
  }
  return "#1B2D6B";
}

export default function Doctors() {
  return (
    <section id="doctors" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#C41E3A] text-xs font-bold uppercase tracking-widest mb-3">
            Our Specialists
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1B2D6B] mb-4">
            Consultant OPD Schedule
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base">
            Meet our team of qualified specialists. Walk-in or call to confirm availability.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {doctors.map((doc) => {
            const color = getColor(doc.specialty);
            const initials = getInitials(doc.name);
            return (
              <div
                key={doc.name}
                className="rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all duration-300 overflow-hidden bg-white group"
              >
                {/* Top bar */}
                <div
                  className="h-1.5 w-full"
                  style={{ backgroundColor: color }}
                />

                <div className="p-6">
                  <div className="flex items-start gap-4">
                    {/* Avatar */}
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0"
                      style={{ backgroundColor: color }}
                    >
                      {initials}
                    </div>

                    <div className="min-w-0">
                      <h3 className="font-semibold text-[#1B2D6B] text-base leading-tight truncate">
                        {doc.name}
                      </h3>
                      <p className="text-sm font-medium mt-0.5" style={{ color }}>
                        {doc.specialty}
                      </p>
                      <p className="text-xs text-gray-400 mt-0.5">{doc.qual}</p>
                    </div>
                  </div>

                  {/* Schedule */}
                  <div className="mt-5 pt-4 border-t border-gray-50 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-1.5 text-xs text-gray-500">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" />
                      </svg>
                      <span>{doc.days}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-gray-500">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
                      </svg>
                      <span>{doc.time}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Appointment CTA */}
        <div className="mt-14 text-center">
          <p className="text-gray-500 text-sm mb-4">
            For appointments, call us at:
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href="tel:+922138885945"
              className="inline-flex items-center gap-2 border border-[#1B2D6B] text-[#1B2D6B] font-semibold text-sm px-6 py-3 rounded-full hover:bg-[#1B2D6B] hover:text-white transition-colors duration-200"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.5 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.44 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.4a16 16 0 0 0 5.7 5.7l.79-.79a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z" />
              </svg>
              +92 213 888 5945
            </a>
            <a
              href="tel:+923301252236"
              className="inline-flex items-center gap-2 bg-[#1B2D6B] text-white font-semibold text-sm px-6 py-3 rounded-full hover:bg-[#162359] transition-colors duration-200"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.5 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.44 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.4a16 16 0 0 0 5.7 5.7l.79-.79a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z" />
              </svg>
              +92 330 1252236
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
