const reviews = [
  {
    name: "Faraz Khan",
    review: "I had an exceptional experience at Al Fatima Hospital. The doctors were highly skilled, attentive, and genuinely caring, taking the time to explain everything clearly.",
    rating: 5,
    tag: "General",
  },
  {
    name: "Munawar Ali",
    review: "They don't just say \"Power to Heal\" — they deliver it. Everything is beyond perfect. I just want this hospital to grow bigger and serve even more patients.",
    rating: 5,
    tag: "Overall",
  },
  {
    name: "Shaikh Talha",
    review: "Highly recommended for best service and pocket-friendly pricing. My wife's delivery was handled by Dr. Rabia Farooqui. Best doctors, best nursing staff — everything is available.",
    rating: 5,
    tag: "Maternity",
  },
  {
    name: "Niyaz Meher",
    review: "Excellent consultation by a doctor who took time to carefully explain the cause of my symptoms and the measures to assist with treatment.",
    rating: 5,
    tag: "OPD",
  },
  {
    name: "Noreen Ibrahim",
    review: "Overall experience was excellent. Thank you for your exceptional care and support during labor and delivery. Your kindness and expertise made our experience truly memorable.",
    rating: 5,
    tag: "Maternity",
  },
  {
    name: "Muhammad Farhan",
    review: "Great experience with the Physiotherapy Department. The physiotherapists are professional, friendly, and skilled. They offered free consultations on World Physiotherapy Week — highly recommended!",
    rating: 5,
    tag: "Physiotherapy",
  },
  {
    name: "Nida Moiz",
    review: "Very dedicated and sincere team of doctors and staff. I had my two sons treated here — one by Dr. Fahad Hanif. All consultants proved to be extremely professional.",
    rating: 5,
    tag: "Surgery",
  },
  {
    name: "Moona Shariff",
    review: "I gave birth to 3 babies via c-section in this hospital. The services are excellent. Doctors and staff are friendly and ensure I am properly informed about my health and care.",
    rating: 5,
    tag: "Maternity",
  },
  {
    name: "Danial Tariq",
    review: "I'm totally satisfied with the services. The staff is very cooperative and the treatment is also very satisfactory.",
    rating: 5,
    tag: "General",
  },
  {
    name: "Fariha Sheikh",
    review: "Very cooperative staff and highly competent doctors. The ultrasound department is very reliable. Must visit for your health issues.",
    rating: 5,
    tag: "Diagnostics",
  },
  {
    name: "Talha Hameed",
    review: "If giving more than 5 stars was an option, I would love to give it. Al Fatima is performing way above their capacity — an incredible team.",
    rating: 5,
    tag: "Overall",
  },
  {
    name: "Lubna Batool",
    review: "Professionalism, compassion, and a positive patient experience. Attentive care, clear communication, and effective treatments. Highly recommend from my side.",
    rating: 5,
    tag: "Overall",
  },
];

const avatarColors = [
  "bg-violet-500","bg-blue-500","bg-emerald-500","bg-rose-500",
  "bg-amber-500","bg-cyan-500","bg-pink-500","bg-indigo-500",
  "bg-teal-500","bg-orange-500","bg-red-500","bg-lime-600",
];

function Stars() {
  return (
    <div className="flex gap-0.5">
      {[1,2,3,4,5].map((i) => (
        <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#F59E0B" stroke="none">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({ r, idx }: { r: typeof reviews[0]; idx: number }) {
  return (
    <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm shrink-0">
      <Stars />
      <p className="text-gray-600 text-sm leading-relaxed mt-3 mb-4">
        &ldquo;{r.review}&rdquo;
      </p>
      <div className="flex items-center gap-2.5">
        <div className={`w-8 h-8 rounded-full ${avatarColors[idx % avatarColors.length]} flex items-center justify-center text-white text-[11px] font-bold shrink-0`}>
          {r.name.split(" ").slice(0,2).map(n => n[0]).join("")}
        </div>
        <div>
          <p className="text-xs font-semibold text-gray-900">{r.name}</p>
          <p className="text-[10px] text-gray-400">{r.tag} · Google Review</p>
        </div>
      </div>
    </div>
  );
}

const col1 = reviews.slice(0, 6);
const col2 = reviews.slice(6, 12);

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
            Patient satisfaction and trust are at the heart of everything we do.
            Here&apos;s what our patients say about their experience at Al Fatima Hospital.
          </p>
        </div>

        {/* Scrolling columns with top/bottom fade */}
        <div
          className="relative h-[560px] overflow-hidden"
          style={{
            maskImage: "linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)",
          }}
        >
          <div className="flex gap-5 h-full">

            {/* Column 1 — faster */}
            <div className="flex-1 flex flex-col gap-5 animate-scroll-up">
              {[...col1, ...col1].map((r, i) => (
                <ReviewCard key={i} r={r} idx={i % col1.length} />
              ))}
            </div>

            {/* Column 2 — slower */}
            <div className="flex-1 flex flex-col gap-5 animate-scroll-up-slow">
              {[...col2, ...col2].map((r, i) => (
                <ReviewCard key={i} r={r} idx={(i % col2.length) + 6} />
              ))}
            </div>

          </div>
        </div>

        {/* Rating summary */}
        <div className="mt-10 bg-white rounded-2xl border border-gray-100 p-6 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-5">
            <div className="text-center">
              <p className="text-5xl font-bold text-gray-900">4.8</p>
              <div className="flex gap-0.5 justify-center mt-1">
                {[1,2,3,4,5].map((i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#F59E0B" stroke="none">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                ))}
              </div>
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
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}
