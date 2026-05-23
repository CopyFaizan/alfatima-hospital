const stats = [
  { value: "20+", label: "Years of Service" },
  { value: "21+", label: "Specialist Consultants" },
  { value: "24/7", label: "Emergency Care" },
  { value: "9", label: "Medical Services" },
  { value: "98%", label: "Patient Satisfaction" },
];

export default function Stats() {
  return (
    <section className="bg-[#1B2D6B] py-14">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-1">
              <span className="text-4xl font-bold text-white">{s.value}</span>
              <span className="text-sm text-white/60 font-medium">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
