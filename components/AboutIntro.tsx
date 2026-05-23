import Image from "next/image";

const avatars = [
  "/doctors/dr-rabia-farooqui.png",
  "/doctors/dr-fahad-hanif.png",
  "/doctors/dr-maryam-javed.png",
  "/doctors/dr-raza-mehmood.png",
];

export default function AboutIntro() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-6 lg:px-10 flex flex-col items-center text-center">

        {/* Badge */}
        <span className="inline-block border border-gray-200 text-gray-500 text-xs font-semibold px-4 py-1.5 rounded-full mb-8">
          About
        </span>

        {/* Description */}
        <p className="text-xl md:text-2xl leading-relaxed mb-14">
          <span className="text-gray-900 font-medium">
            At Al-Fatima Hospital, we are committed to delivering high-quality,
            patient-centered healthcare with compassion and integrity.
          </span>{" "}
          <span className="text-gray-400">
            With over a decade of medical excellence, our team of certified
            specialists provides comprehensive treatment using modern diagnostics
            and evidence-based practices.
          </span>
        </p>

        {/* Stats visual */}
        <div className="flex items-end justify-center gap-5 w-full">

          {/* Left stat card */}
          <div className="bg-[#F5F6FA] rounded-3xl px-8 py-8 text-center shrink-0 mb-10">
            <p className="text-5xl font-bold text-gray-900">10+</p>
            <p className="text-sm text-gray-400 mt-2 leading-snug">Years<br />Experience</p>
          </div>

          {/* Center doctor photo — tallest, overlaps */}
          <div className="relative w-52 md:w-60 h-72 md:h-80 rounded-3xl overflow-hidden shadow-2xl shrink-0 z-10">
            <Image
              src="/doctors/dr-shahrukh-khalil.png"
              alt="Al-Fatima Hospital Specialist"
              fill
              className="object-cover object-top"
            />
          </div>

          {/* Right stat cards stacked */}
          <div className="flex flex-col gap-4 shrink-0">
            <div className="bg-[#F5F6FA] rounded-3xl px-8 py-7 text-center">
              <p className="text-5xl font-bold text-gray-900">20+</p>
              <p className="text-sm text-gray-400 mt-2 leading-snug">Specialist<br />Doctors</p>
            </div>
            <div className="bg-[#F5F6FA] rounded-3xl px-8 py-7 text-center">
              <p className="text-5xl font-bold text-gray-900">5k+</p>
              <p className="text-sm text-gray-400 mt-2 leading-snug">Satisfied<br />Patients</p>
            </div>
          </div>

        </div>

        {/* Avatar group — left aligned */}
        <div className="w-full flex mt-7">
          <div className="flex -space-x-3">
            {avatars.map((src) => (
              <div
                key={src}
                className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-sm shrink-0"
              >
                <Image src={src} alt="Doctor" fill className="object-cover object-top" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
