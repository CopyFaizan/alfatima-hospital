export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#C41E3A] text-xs font-bold uppercase tracking-widest mb-3">
            Find Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1B2D6B] mb-4">
            Contact & Location
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto text-base">
            Visit us, call us, or drop by. We are open seven days a week for OPD and around the clock for emergencies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Contact cards */}
          <div className="flex flex-col gap-5">
            {/* Address */}
            <div className="flex items-start gap-5 bg-[#F8F9FC] rounded-2xl p-6">
              <div className="w-11 h-11 rounded-xl bg-[#1B2D6B] flex items-center justify-center shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-[#1B2D6B] mb-1">Address</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  D-1 Block 4, Gulshan-e-Iqbal<br />
                  Near Disco Bakery, Karachi
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-5 bg-[#F8F9FC] rounded-2xl p-6">
              <div className="w-11 h-11 rounded-xl bg-[#C41E3A] flex items-center justify-center shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.5 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.44 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.4a16 16 0 0 0 5.7 5.7l.79-.79a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-[#1B2D6B] mb-1">Phone</p>
                <a href="tel:+922138885945" className="block text-gray-600 text-sm hover:text-[#C41E3A] transition-colors">
                  +92 213 888 5945
                </a>
                <a href="tel:+923301252236" className="block text-gray-600 text-sm hover:text-[#C41E3A] transition-colors">
                  +92 330 1252236
                </a>
              </div>
            </div>

            {/* Website */}
            <div className="flex items-start gap-5 bg-[#F8F9FC] rounded-2xl p-6">
              <div className="w-11 h-11 rounded-xl bg-[#1B2D6B] flex items-center justify-center shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-[#1B2D6B] mb-1">Website</p>
                <p className="text-gray-600 text-sm">www.alfatimahospital.com.pk</p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-5 bg-[#F8F9FC] rounded-2xl p-6">
              <div className="w-11 h-11 rounded-xl bg-[#C41E3A] flex items-center justify-center shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-[#1B2D6B] mb-1">Emergency</p>
                <p className="text-gray-600 text-sm">Open 24 hours, 7 days a week</p>
                <p className="text-gray-500 text-xs mt-0.5">OPD hours vary by consultant</p>
              </div>
            </div>
          </div>

          {/* Map embed */}
          <div className="rounded-3xl overflow-hidden border border-gray-100 shadow-lg h-[480px] bg-[#e8eef4] flex items-center justify-center">
            <iframe
              title="Al-Fatima Hospital Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.3!2d67.0688!3d24.9204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zQWwtRmF0aW1hIEhvc3BpdGFsLCBHdWxzaGFuLWUtSXFiYWwsIEthcmFjaGk!5e0!3m2!1sen!2spk!4v1684756827!5m2!1sen!2spk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
