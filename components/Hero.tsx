import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="bg-[#EEF2FF] pt-16 overflow-hidden">

      {/* ── Text zone ── */}
      <div className="flex flex-col items-center text-center px-6 pt-14 pb-10 gap-6 max-w-4xl mx-auto">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-1.5 text-xs font-semibold text-gray-500 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C41E3A] inline-block" />
          Al-Fatima Hospital · Gulshan-e-Iqbal, Karachi
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.1] max-w-2xl">
          We are here to help you{" "}
          stay <span className="text-[#C41E3A]">healthy.</span>
        </h1>

        {/* Description */}
        <p className="text-gray-500 text-base md:text-lg max-w-md leading-relaxed">
          Expert consultants, modern diagnostics, and round-the-clock
          emergency care — all under one roof.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3 justify-center">
          <a
            href="#contact"
            className="inline-flex items-center bg-gray-900 hover:bg-gray-700 text-white text-sm font-semibold px-7 py-3.5 rounded-full transition-colors duration-200"
          >
            Book Appointment
          </a>
          <a
            href="#services"
            className="inline-flex items-center bg-white border border-gray-200 hover:border-gray-300 text-gray-700 text-sm font-semibold px-7 py-3.5 rounded-full transition-colors duration-200 shadow-sm"
          >
            Our Services
          </a>
        </div>
      </div>

      {/* ── Photo strip ── */}
      <div className="flex items-end justify-center gap-4 px-6 max-w-5xl mx-auto">

        {/* Left doctor */}
        <div className="hidden md:block relative w-44 h-64 rounded-3xl overflow-hidden shadow-xl shrink-0 mb-6">
          <Image
            src="/doctors/dr-rabia-farooqui.png"
            alt="Dr. Rabia Farooqui"
            fill
            className="object-cover object-top"
          />
        </div>

        {/* Center — hospital banner */}
        <div className="relative flex-1 max-w-xl h-64 md:h-80 rounded-3xl overflow-hidden shadow-2xl">
          <Image
            src="/hero.png"
            alt="Al-Fatima Hospital"
            fill
            priority
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 600px"
          />
        </div>

        {/* Right doctor */}
        <div className="hidden md:block relative w-44 h-64 rounded-3xl overflow-hidden shadow-xl shrink-0 mb-6">
          <Image
            src="/doctors/dr-fahad-hanif.png"
            alt="Dr. Fahad Hanif"
            fill
            className="object-cover object-top"
          />
        </div>
      </div>

    </section>
  );
}
