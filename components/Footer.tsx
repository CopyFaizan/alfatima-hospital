import Image from "next/image";

const links = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Doctors", href: "#doctors" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0d1b45] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <Image
                src="/logo.jpeg"
                alt="Al-Fatima Hospital"
                width={44}
                height={44}
                className="rounded-full object-cover"
              />
              <div>
                <p className="font-bold text-sm text-white">AL-FATIMA</p>
                <p className="text-[11px] text-[#C41E3A] font-semibold tracking-wide">HOSPITAL</p>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-4">
              The Power To Heal. Serving Karachi with compassionate, expert medical care since our founding.
            </p>
            <p className="text-white/30 text-xs">
              D-1 Block 4, Gulshan-e-Iqbal, Karachi
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-semibold text-sm text-white/80 uppercase tracking-widest mb-5">Quick Links</p>
            <ul className="flex flex-col gap-3">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-white/50 hover:text-white transition-colors duration-200"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-semibold text-sm text-white/80 uppercase tracking-widest mb-5">Contact Us</p>
            <div className="flex flex-col gap-3">
              <a href="tel:+922138885945" className="text-sm text-white/50 hover:text-white transition-colors">
                +92 213 888 5945
              </a>
              <a href="tel:+923301252236" className="text-sm text-white/50 hover:text-white transition-colors">
                +92 330 1252236
              </a>
              <p className="text-sm text-white/50">www.alfatimahospital.com.pk</p>
            </div>

            <div className="mt-6">
              <p className="text-xs text-white/30 mb-2 uppercase tracking-wide">Emergency</p>
              <span className="inline-flex items-center gap-2 bg-[#C41E3A]/20 text-[#C41E3A] text-xs font-semibold px-4 py-2 rounded-full">
                <span className="w-2 h-2 bg-[#C41E3A] rounded-full animate-pulse" />
                Open 24/7
              </span>
            </div>
          </div>
        </div>

        {/* Divider + copyright */}
        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs">
            &copy; {new Date().getFullYear()} Al-Fatima Hospital. All rights reserved.
          </p>
          <p className="text-white/30 text-xs">The Power To Heal</p>
        </div>
      </div>
    </footer>
  );
}
