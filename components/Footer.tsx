import Image from "next/image";

const navLinks = [
  { label: "About Us",  href: "#about" },
  { label: "Services",  href: "#services" },
  { label: "Doctors",   href: "#doctors" },
  { label: "Contact",   href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14">
        <div className="flex flex-col md:flex-row justify-between gap-10">

          {/* Brand */}
          <div className="max-w-xs">
            <div className="flex items-center gap-2.5 mb-5">
              <Image src="/logo.jpeg" alt="Al-Fatima Hospital" width={36} height={36} className="rounded-full object-cover" />
              <span className="font-bold text-[15px] tracking-tight text-white">
                Al-Fatima<sup className="text-[#C41E3A] text-[10px] font-bold">+</sup>
              </span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed">
              The Power To Heal. Expert medical care for the community of Karachi, round the clock.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-[11px] font-bold uppercase tracking-widest text-white/30 mb-5">Navigation</p>
            <ul className="flex flex-col gap-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-white/50 hover:text-white transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[11px] font-bold uppercase tracking-widest text-white/30 mb-5">Contact</p>
            <div className="flex flex-col gap-2.5">
              <a href="tel:+922138885945" className="text-sm text-white/50 hover:text-white transition-colors">+92 213 888 5945</a>
              <a href="tel:+923301252236" className="text-sm text-white/50 hover:text-white transition-colors">+92 330 1252236</a>
              <p className="text-sm text-white/50">D-1 Block 4, Gulshan-e-Iqbal, Karachi</p>
            </div>
            <div className="mt-5">
              <span className="inline-flex items-center gap-2 text-emerald-400 text-xs font-semibold bg-emerald-400/10 px-3 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                Emergency open 24/7
              </span>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/20 text-xs">&copy; {new Date().getFullYear()} Al-Fatima Hospital. All rights reserved.</p>
          <p className="text-white/20 text-xs">The Power To Heal</p>
        </div>
      </div>
    </footer>
  );
}
