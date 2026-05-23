"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const services = [
  {
    title: "OPD Services",
    desc: "Walk-in consultations with specialist doctors across all departments.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
        <path d="M32 8a8 8 0 1 1 0 16A8 8 0 0 1 32 8z" fill="#111827"/>
        <path d="M14 50c0-9.94 8.06-18 18-18s18 8.06 18 18" stroke="#111827" strokeWidth="4" strokeLinecap="round"/>
        <circle cx="48" cy="30" r="3" fill="#111827"/>
        <path d="M44 36c4 2 7 6 7 10" stroke="#111827" strokeWidth="3" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Laboratory",
    desc: "Full blood work, pathology, and diagnostic testing with fast results.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
        <path d="M24 8h16v20l10 24H14L24 28V8z" fill="#111827" opacity="0.12"/>
        <path d="M24 8h16v20l10 24H14L24 28V8z" stroke="#111827" strokeWidth="3" strokeLinejoin="round"/>
        <path d="M22 8h20" stroke="#111827" strokeWidth="3" strokeLinecap="round"/>
        <circle cx="26" cy="42" r="3" fill="#111827"/>
        <circle cx="36" cy="46" r="2" fill="#111827"/>
      </svg>
    ),
  },
  {
    title: "Ultrasound",
    desc: "High-resolution imaging for abdomen, pelvis, and obstetric scans.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
        <rect x="10" y="20" width="44" height="28" rx="4" fill="#111827" opacity="0.10"/>
        <rect x="10" y="20" width="44" height="28" rx="4" stroke="#111827" strokeWidth="3"/>
        <path d="M18 38l5-8 5 10 5-14 5 10 5-6" stroke="#111827" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="24" y="8" width="16" height="14" rx="3" fill="#111827"/>
      </svg>
    ),
  },
  {
    title: "Digital X-Ray",
    desc: "Modern digital radiography for bone, chest, and joint imaging.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
        <rect x="8" y="8" width="48" height="48" rx="6" fill="#111827"/>
        <path d="M32 16v32" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M32 20 C24 20 18 24 18 30" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none"/>
        <path d="M32 26 C24 26 16 30 16 36" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none"/>
        <path d="M32 20 C40 20 46 24 46 30" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none"/>
        <path d="M32 26 C40 26 48 30 48 36" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none"/>
      </svg>
    ),
  },
  {
    title: "ECG",
    desc: "Electrocardiogram monitoring for accurate heart rhythm assessment.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
        <path d="M32 52 C32 52 10 38 10 24 C10 16 16 10 24 10 C28 10 32 12 32 12 C32 12 36 10 40 10 C48 10 54 16 54 24 C54 38 32 52 32 52Z" fill="#111827" opacity="0.12"/>
        <path d="M32 52 C32 52 10 38 10 24 C10 16 16 10 24 10 C28 10 32 12 32 12 C32 12 36 10 40 10 C48 10 54 16 54 24 C54 38 32 52 32 52Z" stroke="#111827" strokeWidth="3" strokeLinejoin="round"/>
        <path d="M12 30h8l4-10 6 20 4-14 3 8 3-4h12" stroke="#111827" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Pharmacy",
    desc: "On-site pharmacy with a wide range of prescribed medications.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
        <rect x="20" y="8" width="24" height="12" rx="4" fill="#111827"/>
        <rect x="14" y="18" width="36" height="38" rx="5" fill="#111827" opacity="0.10"/>
        <rect x="14" y="18" width="36" height="38" rx="5" stroke="#111827" strokeWidth="3"/>
        <path d="M32 28v16M24 36h16" stroke="#111827" strokeWidth="3" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Minor OT",
    desc: "Equipped operation theatre for minor surgical procedures.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
        <rect x="8" y="36" width="48" height="6" rx="3" fill="#111827"/>
        <circle cx="44" cy="26" r="7" stroke="#111827" strokeWidth="3"/>
        <path d="M20 36 C20 30 28 26 36 26 L44 26" stroke="#111827" strokeWidth="3" strokeLinecap="round"/>
        <path d="M10 16l10 10M14 12l4 4-8 8-4-4z" stroke="#111827" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Physiotherapy",
    desc: "Rehabilitation and physical therapy to restore movement and strength.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
        <circle cx="32" cy="10" r="6" fill="#111827"/>
        <path d="M32 16v16" stroke="#111827" strokeWidth="3" strokeLinecap="round"/>
        <path d="M32 26 L20 34" stroke="#111827" strokeWidth="3" strokeLinecap="round"/>
        <path d="M32 26 L44 34" stroke="#111827" strokeWidth="3" strokeLinecap="round"/>
        <path d="M24 32 L18 50" stroke="#111827" strokeWidth="3" strokeLinecap="round"/>
        <path d="M40 32 L46 50" stroke="#111827" strokeWidth="3" strokeLinecap="round"/>
        <rect x="10" y="44" width="44" height="6" rx="3" stroke="#111827" strokeWidth="2.5"/>
      </svg>
    ),
  },
  {
    title: "24/7 Emergency",
    desc: "Round-the-clock emergency response with trained medical staff.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
        <path d="M32 4 L56 16 L56 40 C56 50 44 58 32 60 C20 58 8 50 8 40 L8 16 Z" fill="#111827" opacity="0.10"/>
        <path d="M32 4 L56 16 L56 40 C56 50 44 58 32 60 C20 58 8 50 8 40 L8 16 Z" stroke="#111827" strokeWidth="3" strokeLinejoin="round"/>
        <path d="M32 22v20M22 32h20" stroke="#111827" strokeWidth="4" strokeLinecap="round"/>
      </svg>
    ),
  },
];

export default function Services() {
  const [current, setCurrent] = useState(0);
  const [perPage, setPerPage] = useState(4);
  const n = services.length;

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setPerPage(1);
      else if (window.innerWidth < 1024) setPerPage(2);
      else setPerPage(4);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxIndex = Math.max(0, n - perPage);

  const prev = useCallback(() => setCurrent((i) => Math.max(0, i - 1)), []);
  const next = useCallback(() => setCurrent((i) => Math.min(maxIndex, i + 1)), [maxIndex]);

  return (
    <section id="services" className="relative py-24 overflow-hidden">

      {/* Background image */}
      <Image
        src="/hospital-front.webp"
        alt=""
        fill
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header row */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="inline-block border border-white/30 text-white/70 text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
              Service
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Our Medical Services
            </h2>
          </div>

          {/* Arrow buttons */}
          <div className="flex gap-3">
            <button
              onClick={prev}
              disabled={current === 0}
              className="w-11 h-11 rounded-full border border-white/30 text-white flex items-center justify-center hover:bg-white/10 disabled:opacity-30 transition-all duration-200"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            <button
              onClick={next}
              disabled={current === maxIndex}
              className="w-11 h-11 rounded-full bg-white text-gray-900 flex items-center justify-center hover:bg-gray-100 disabled:opacity-30 transition-all duration-200"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M9 18l6-6-6-6"/></svg>
            </button>
          </div>
        </div>

        {/* Slider */}
        <div className="overflow-hidden">
          <div
            className="flex gap-4 transition-transform duration-500 ease-in-out"
            style={{
              width: `${(n / perPage) * 100}%`,
              transform: `translateX(-${current * (100 / n)}%)`,
            }}
          >
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-white rounded-2xl p-6 flex flex-col gap-4 hover:shadow-lg transition-shadow duration-200"
                style={{ width: `${100 / n}%` }}
              >
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                  {s.icon}
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-900 mb-2 leading-snug">{s.title}</h3>
                  <p className="text-gray-400 text-[13px] leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
