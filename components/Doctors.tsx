"use client";

import { useState } from "react";
import Image from "next/image";

const doctors = [
  {
    name: "Dr. Abdul Rafay Qazi",
    specialty: "Orthopedic Surgeon",
    experience: "12",
    img: "/doctors/dr-abdul-rafay.png",
    category: "Orthopedic",
  },
  {
    name: "Dr. Shahrukh Khalil",
    specialty: "Laparoscopic Surgeon",
    experience: "10",
    img: "/doctors/dr-shahrukh-khalil.png",
    category: "Surgeon",
  },
  {
    name: "Dr. Maryam Javed",
    specialty: "Neuro Physician",
    experience: "08",
    img: "/doctors/dr-maryam-javed.png",
    category: "Neurologist",
  },
  {
    name: "Dr. Raza Mehmood",
    specialty: "Orthopedic Surgeon",
    experience: "09",
    img: "/doctors/dr-raza-mehmood.png",
    category: "Orthopedic",
  },
  {
    name: "Dr. Fahad Hanif",
    specialty: "Plastic Surgeon",
    experience: "11",
    img: "/doctors/dr-fahad-hanif.png",
    category: "Surgeon",
  },
  {
    name: "Dr. Zubda Malik",
    specialty: "Urologist",
    experience: "07",
    img: "/doctors/dr-zubda-malik.png",
    category: "Urologist",
  },
];

const tabs = ["All", "Surgeon", "Orthopedic", "Neurologist", "Urologist"];

export default function Doctors() {
  const [active, setActive] = useState("All");

  const visible = active === "All"
    ? doctors
    : doctors.filter((d) => d.category === active);

  return (
    <section id="doctors" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-10 leading-tight">
          Meet Our Medical<br />Experts
        </h2>

        {/* Filter tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                active === tab
                  ? "bg-gray-900 text-white"
                  : "bg-gray-100 text-gray-500 hover:bg-gray-200"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Doctor cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((doc) => (
            <div key={doc.name} className="group">
              {/* Photo */}
              <div className="relative h-72 w-full rounded-2xl overflow-hidden bg-gray-100 mb-4">
                <Image
                  src={doc.img}
                  alt={doc.name}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
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

        {/* View All button */}
        <div className="flex justify-center mt-12">
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
