"use client";

import { useState } from "react";
import Image from "next/image";

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

const fieldClass =
  "w-full border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-gray-400 transition-colors bg-white";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="py-24 bg-[#F5F6FA]">
      <div className="max-w-6xl mx-auto px-6 lg:px-10 flex flex-col gap-16">

        {/* ── Scheduling form ── */}
        <div>
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Quick, Easy &amp;<br />Hassle-Free Scheduling
            </h2>
            <p className="text-gray-400 max-w-md mx-auto text-base leading-relaxed">
              Fill out the form and our team will confirm your appointment shortly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Left image */}
            <div className="relative rounded-3xl overflow-hidden h-72 md:h-auto min-h-[320px]">
              <Image
                src="/doctor-schedule.jpg"
                alt="Al-Fatima Hospital consultation"
                fill
                className="object-cover object-center"
              />
            </div>

            {/* Form */}
            <div className="bg-white rounded-3xl p-7 border border-gray-100 shadow-sm">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full gap-4 text-center py-12">
                  <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Request Sent!</h3>
                  <p className="text-gray-400 text-sm max-w-xs">We&apos;ll call you shortly to confirm your appointment.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-sm text-[#1B2D6B] font-semibold hover:underline mt-2"
                  >
                    Book another
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                  className="flex flex-col gap-3.5"
                >
                  <input type="text" required placeholder="Name" className={fieldClass} />
                  <input type="email" required placeholder="Email" className={fieldClass} />
                  <input type="tel" required placeholder="Phone Number" className={fieldClass} />
                  <select required defaultValue="" className={`${fieldClass} text-gray-400`}>
                    <option value="" disabled>Choose Appointment Type</option>
                    <option className="text-gray-800">OPD Consultation</option>
                    <option className="text-gray-800">Laboratory Test</option>
                    <option className="text-gray-800">Ultrasound</option>
                    <option className="text-gray-800">Digital X-Ray</option>
                    <option className="text-gray-800">ECG</option>
                    <option className="text-gray-800">Physiotherapy</option>
                    <option className="text-gray-800">Emergency</option>
                  </select>
                  <div className="relative">
                    <input
                      type="datetime-local"
                      required
                      className={`${fieldClass} text-gray-400`}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gray-900 hover:bg-gray-700 text-white text-sm font-semibold py-3.5 rounded-full transition-colors duration-200 mt-1"
                  >
                    Book An Appointment
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* ── Contact & Location ── */}
        <div>
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C41E3A] mb-3 block">Find Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Contact &amp; Location</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* Info tiles */}
            <div className="grid grid-cols-2 gap-4">
              {info.map((item) => (
                <div key={item.label} className="bg-white rounded-2xl p-5 border border-gray-100">
                  <div className={`w-9 h-9 ${item.color} rounded-xl flex items-center justify-center mb-4`}>
                    {item.icon}
                  </div>
                  <p className="text-xs font-bold uppercase tracking-wide text-gray-400 mb-1">{item.label}</p>
                  <p className="text-sm font-medium text-gray-800 leading-relaxed whitespace-pre-line">{item.value}</p>
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="relative rounded-3xl overflow-hidden border border-gray-100 shadow-sm h-[320px]">
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

      </div>
    </section>
  );
}
