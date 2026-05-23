"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const links = [
  { label: "About Us",  href: "#about" },
  { label: "Services",  href: "#services" },
  { label: "Doctors",   href: "#doctors" },
  { label: "Contact",   href: "#contact" },
];

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-sm" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-16">

        {/* Logo */}
        <a href="#home" className="flex items-center gap-2.5 shrink-0">
          <Image
            src="/logo.jpeg"
            alt="Al-Fatima Hospital"
            width={36}
            height={36}
            className="rounded-full object-cover"
          />
          <span className="font-bold text-[15px] tracking-tight text-[#1B2D6B]">
            Al-Fatima<sup className="text-[#C41E3A] text-[10px] font-bold">+</sup>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13.5px] font-medium text-gray-500 hover:text-[#1B2D6B] transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center bg-gray-900 hover:bg-gray-700 text-white text-[13px] font-semibold px-5 py-2.5 rounded-full transition-colors duration-200"
        >
          Contact Us
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 text-[#1B2D6B]"
        >
          {menuOpen
            ? <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6 6 18M6 6l12 12" /></svg>
            : <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M3 12h18M3 6h18M3 18h18" /></svg>
          }
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-5 flex flex-col gap-4">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
               className="text-sm font-medium text-gray-600 hover:text-[#1B2D6B]">
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setMenuOpen(false)}
             className="self-start border border-[#1B2D6B] text-[#1B2D6B] text-sm font-semibold px-5 py-2 rounded-full">
            Contact Us
          </a>
        </div>
      )}
    </header>
  );
}
