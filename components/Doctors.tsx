"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const doctors = [
  {
    name: "Dr. Rabia Farooqui",
    specialty: "Gynaecologist",
    qual: "MBBS, FCPS",
    experience: "10",
    img: "/doctors/dr-rabia-farooqui.png",
    category: "Gynaecologist",
  },
  {
    name: "Dr. Fahad Hanif",
    specialty: "Plastic Surgeon",
    qual: "MBBS, FCPS",
    experience: "11",
    img: "/doctors/dr-fahad-hanif.png",
    category: "Surgeon",
  },
  {
    name: "Dr. Maryam Javed",
    specialty: "Neuro Physician",
    qual: "MBBS, FCPS",
    experience: "08",
    img: "/doctors/dr-maryam-javed.png",
    category: "Neurologist",
  },
  {
    name: "Dr. Shahrukh Khalil",
    specialty: "Laparoscopic Surgeon",
    qual: "MBBS, FCPS",
    experience: "10",
    img: "/doctors/dr-shahrukh-khalil.png",
    category: "Surgeon",
  },
  {
    name: "Dr. Raza Mehmood",
    specialty: "Orthopedic Surgeon",
    qual: "MBBS, FCPS",
    experience: "09",
    img: "/doctors/dr-raza-mehmood.png",
    category: "Orthopedic",
  },
  {
    name: "Dr. Zubda Malik",
    specialty: "Urologist",
    qual: "MBBS, FCPS",
    experience: "07",
    img: "/doctors/dr-zubda-malik.png",
    category: "Urologist",
  },
];

const tabs = ["All", "Surgeon", "Orthopedic", "Gynaecologist", "Neurologist", "Urologist"];

export default function Doctors() {
  const [activeTab, setActiveTab] = useState("All");
  const [current, setCurrent]     = useState(0);
  const [perPage, setPerPage]     = useState(3);

  const filtered = activeTab === "All"
    ? doctors
    : doctors.filter((d) => d.category === activeTab);

  const n        = filtered.length;
  const maxIndex = Math.max(0, n - perPage);

  // Reset slider when filter or perPage changes
  useEffect(() => { setCurrent(0); }, [activeTab, perPage]);

  // Responsive perPage
  useEffect(() => {
    const update = () => {
      setPerPage(window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Auto-advance
  const next = useCallback(() => {
    setCurrent((i) => (i >= maxIndex ? 0 : i + 1));
  }, [maxIndex]);

  useEffect(() => {
    const t = setInterval(next, 3800);
    return () => clearInterval(t);
  }, [next]);

  const prev = () => setCurrent((i) => (i <= 0 ? maxIndex : i - 1));

  // Track width = (n / perPage) * 100% so each card = (100/n)% of track = (100/perPage)% of container
  const trackWidth   = `${(n / perPage) * 100}%`;
  const cardWidth    = `${100 / n}%`;
  const translatePct = current * (100 / n); // % of track

  return (
    <section id="doctors" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-10 leading-tight">
          Meet Our Medical<br />Experts
        </h2>

        {/* Filter tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                activeTab === tab
                  ? "bg-gray-900 text-white"
                  : "bg-gray-100 text-gray-500 hover:bg-gray-200"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Slider */}
        <div className="relative">
          {/* Prev arrow */}
          {maxIndex > 0 && (
            <button
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
          )}

          {/* Track */}
          <div className="overflow-hidden">
            {n === 0 ? (
              <p className="text-center text-gray-400 py-16">No doctors in this category.</p>
            ) : (
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ width: trackWidth, transform: `translateX(-${translatePct}%)` }}
              >
                {filtered.map((doc) => (
                  <div
                    key={doc.name}
                    style={{ width: cardWidth }}
                    className="px-3"
                  >
                    {/* Photo */}
                    <div className="relative h-72 w-full rounded-2xl overflow-hidden bg-gray-100 mb-4">
                      <Image
                        src={doc.img}
                        alt={doc.name}
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      {/* Specialty pill */}
                      <span className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm text-gray-800 text-[11px] font-semibold px-3 py-1 rounded-full shadow-sm">
                        {doc.specialty}
                      </span>
                    </div>

                    {/* Info */}
                    <div className="px-1">
                      <p className="font-semibold text-gray-900 text-[16px]">{doc.name}</p>
                      <p className="text-sm text-gray-400 mt-1">
                        Experience:{" "}
                        <span className="font-semibold text-gray-700">{doc.experience}+</span>{" "}
                        years
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Next arrow */}
          {maxIndex > 0 && (
            <button
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          )}
        </div>

        {/* Dot indicators */}
        {maxIndex > 0 && (
          <div className="flex items-center justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-6 h-2 bg-gray-900"
                    : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        )}

        {/* Bottom CTA */}
        <div className="flex justify-center mt-10">
          <a
            href="tel:+922138885945"
            className="bg-gray-900 text-white text-sm font-semibold px-8 py-3 rounded-full hover:bg-gray-700 transition-colors duration-200"
          >
            Book Appointment
          </a>
        </div>

      </div>
    </section>
  );
}
