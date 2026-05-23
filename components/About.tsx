import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#F8F9FC]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
              <Image
                src="/hospital-front.webp"
                alt="Al-Fatima Hospital Building"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-4 lg:-right-8 bg-white rounded-2xl shadow-xl p-5 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#C41E3A]/10 flex items-center justify-center">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C41E3A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <div>
                <p className="text-xl font-bold text-[#1B2D6B]">24/7</p>
                <p className="text-xs text-gray-500">Emergency Services</p>
              </div>
            </div>
          </div>

          {/* Text side */}
          <div>
            <span className="inline-block text-[#C41E3A] text-xs font-bold uppercase tracking-widest mb-3">
              About Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1B2D6B] mb-6 leading-tight">
              The Power <br />To Heal
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mb-6">
              Al-Fatima Hospital has been serving the community of Karachi with compassionate, high-quality medical care. Located in the heart of Gulshan-e-Iqbal, we bring together a team of 21+ experienced consultants across all major medical specialties.
            </p>
            <p className="text-gray-600 text-base leading-relaxed mb-8">
              Our state-of-the-art diagnostic facilities — including digital X-Ray, ultrasound, ECG, and a full laboratory — ensure accurate diagnosis and effective treatment, all under one roof.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { label: "Expert Consultants", value: "21+" },
                { label: "Medical Services", value: "9" },
                { label: "Patient Satisfaction", value: "98%" },
                { label: "Emergency Response", value: "24/7" },
              ].map((item) => (
                <div key={item.label} className="bg-white rounded-xl p-4 border border-gray-100">
                  <p className="text-2xl font-bold text-[#1B2D6B]">{item.value}</p>
                  <p className="text-sm text-gray-500 mt-0.5">{item.label}</p>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#C41E3A] hover:bg-[#a8192f] text-white font-semibold px-7 py-3.5 rounded-full transition-colors duration-200 text-sm"
            >
              Get in Touch
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
