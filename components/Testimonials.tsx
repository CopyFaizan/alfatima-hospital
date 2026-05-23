const reviews = [
  {
    name: "Faraz Khan",
    review:
      "I had an exceptional experience at Al Fatima Hospital. The doctors were highly skilled, attentive, and genuinely caring, taking the time to explain everything clearly. Their expertise made a huge difference.",
    rating: 5,
    tag: "General",
  },
  {
    name: "Munawar Ali",
    review:
      "They just don't only say \"Power to Heal\" — they deliver it. Everything is beyond perfect. I just want this hospital to be bigger and have the capacity for more patients.",
    rating: 5,
    tag: "Overall",
  },
  {
    name: "Shaikh Talha",
    review:
      "Highly recommended for best service and pocket-friendly pricing. My wife's delivery was handled by Dr. Rabia Farooqui. Everything is available in the hospital — best doctors, best nursing staff.",
    rating: 5,
    tag: "Maternity",
  },
  {
    name: "Niyaz Meher",
    review:
      "Excellent consultation by a doctor who took time to carefully explain the cause of my symptoms and the measures to assist with treatment.",
    rating: 5,
    tag: "OPD",
  },
  {
    name: "Noreen Ibrahim",
    review:
      "Overall experience was excellent. Thank you for your exceptional care and support during labor and delivery. Your kindness and expertise made our experience truly memorable.",
    rating: 5,
    tag: "Maternity",
  },
  {
    name: "Muhammad Farhan",
    review:
      "Great experience with the Physiotherapy Department. The physiotherapists are professional, friendly, and skilled. They offered free consultations on World Physiotherapy Week — very helpful. Highly recommended!",
    rating: 5,
    tag: "Physiotherapy",
  },
  {
    name: "Nida Moiz",
    review:
      "Very dedicated and sincere team of doctors and staff. I had my two sons treated here — one by Dr. Fahad Hanif and the other by Dr. Taimoor. All consultants proved to be extremely professional.",
    rating: 5,
    tag: "Surgery",
  },
  {
    name: "Moona Shariff",
    review:
      "I gave birth to 3 babies via c-section in this hospital. The services are excellent. Doctors and staff are friendly and ensured I was properly informed about my health and care. Highly recommended.",
    rating: 5,
    tag: "Maternity",
  },
  {
    name: "Danial Tariq",
    review:
      "I'm totally satisfied with the services. The staff is very cooperative and the treatment is also very satisfactory.",
    rating: 5,
    tag: "General",
  },
  {
    name: "Fariha Sheikh",
    review:
      "Very cooperative staff and highly competent doctors. The ultrasound department is very reliable. Must visit for your health issues.",
    rating: 5,
    tag: "Diagnostics",
  },
  {
    name: "Lubna Batool",
    review:
      "Professionalism, compassion, and a positive patient experience — Al Fatima Hospital has it all. Attentive care, clear communication, and effective treatments. Highly recommend.",
    rating: 5,
    tag: "Overall",
  },
  {
    name: "Talha Hameed",
    review:
      "If giving more than 5 stars was an option, I would love to give it. Al Fatima is performing way above their capacity — an incredible team.",
    rating: 5,
    tag: "Overall",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="13"
          height="13"
          viewBox="0 0 24 24"
          fill={i < count ? "#F59E0B" : "none"}
          stroke={i < count ? "#F59E0B" : "#D1D5DB"}
          strokeWidth="1.5"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

function getInitials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

const avatarColors = [
  "bg-violet-500", "bg-blue-500", "bg-emerald-500", "bg-rose-500",
  "bg-amber-500", "bg-cyan-500", "bg-pink-500", "bg-indigo-500",
  "bg-teal-500", "bg-orange-500", "bg-red-500", "bg-lime-600",
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#F5F6FA]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <span className="inline-block bg-white border border-gray-200 text-gray-500 text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
              Testimonials
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              What Our Patients<br />Say
            </h2>
          </div>
          <p className="text-gray-400 text-sm max-w-sm leading-relaxed md:text-right">
            At Al Fatima Hospital, patient satisfaction and trust are at the heart of everything we do.
            Here&apos;s what our patients say about their experience with our doctors, staff, and services.
          </p>
        </div>

        {/* Masonry grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {reviews.map((r, i) => (
            <div
              key={r.name}
              className="break-inside-avoid bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow duration-200"
            >
              {/* Stars */}
              <Stars count={r.rating} />

              {/* Quote */}
              <p className="text-gray-600 text-sm leading-relaxed mt-3 mb-5">
                &ldquo;{r.review}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className={`w-9 h-9 rounded-full ${avatarColors[i % avatarColors.length]} flex items-center justify-center text-white text-xs font-bold shrink-0`}
                >
                  {getInitials(r.name)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{r.name}</p>
                  <p className="text-[11px] text-gray-400">{r.tag} · Google Review</p>
                </div>
                <svg className="ml-auto shrink-0 opacity-20" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.545 10.239v3.821h5.445c-.712 2.315-2.647 3.972-5.445 3.972a6.033 6.033 0 1 1 0-12.064c1.498 0 2.866.549 3.921 1.453l2.814-2.814A9.969 9.969 0 0 0 12.545 2C7.021 2 2.543 6.477 2.543 12s4.478 10 10.002 10c8.396 0 10.249-7.85 9.426-11.748l-9.426-.013z" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Rating summary */}
        <div className="mt-14 bg-white rounded-2xl border border-gray-100 p-6 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-5">
            <div className="text-center">
              <p className="text-5xl font-bold text-gray-900">4.8</p>
              <Stars count={5} />
              <p className="text-xs text-gray-400 mt-1">118 Google Reviews</p>
            </div>
            <div className="h-12 w-px bg-gray-100 hidden sm:block" />
            <div>
              <p className="font-semibold text-gray-900 text-sm">Al Fatima Hospital</p>
              <p className="text-xs text-gray-400 mt-0.5">Block 4 Gulshan-e-Iqbal, Karachi</p>
              <p className="text-xs text-[#1B2D6B] font-medium mt-1">Verified on Google Maps</p>
            </div>
          </div>
          <a
            href="tel:+922138885945"
            className="shrink-0 inline-flex items-center gap-2 bg-[#1B2D6B] text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-[#162359] transition-colors"
          >
            Book Your Visit
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}
