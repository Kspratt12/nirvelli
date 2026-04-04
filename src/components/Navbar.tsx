"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";

const BOOKING_URL = "https://clients.mindbodyonline.com/ASP/adm/adm_appt_search.asp?studioid=711769&prodGroupId=&page=&stype=&optForwardingLink=&nLgIn=&trn=0&lvl=&catid=&prodid=&date=4%2F4%2F2026&classid=0&view=&sSU=&qParam=&tg=&loc=1&vt=&justloggedin=&pMode=0";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Facials", href: "/facials" },
  { name: "Acupuncture", href: "/acupuncture" },
  { name: "Spa Club", href: "/spa-club" },
  { name: "Resources", href: "/resources" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "glass shadow-sm py-2" : "bg-transparent py-4"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <Image src="/logo-transparent.png" alt="Nirvelli" width={32} height={38} className={`transition-all duration-300 ${scrolled ? "" : "brightness-0 invert"}`} />
            <div>
              <h1 className={`font-heading text-xl md:text-2xl font-medium transition-colors duration-300 ${scrolled ? "text-navy" : "text-white"}`}>
                Nirvelli
              </h1>
              <p className={`text-[7px] md:text-[8px] tracking-luxe uppercase font-body font-light transition-colors duration-300 ${scrolled ? "text-text" : "text-white/70"}`}>
                Med Spa & Laser
              </p>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`px-3 py-2 text-[11px] tracking-wide uppercase font-body font-light transition-all duration-300 hover:text-blue elegant-underline ${
                  scrolled ? "text-charcoal" : "text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-5 py-2 bg-blue text-white text-[11px] tracking-wide uppercase font-body font-semibold hover:bg-blue-dark transition-all duration-300"
            >
              Book Now
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="tel:919-297-0107"
              className={`hidden md:flex items-center gap-2 text-xs tracking-wide transition-colors duration-300 hover:text-blue ${scrolled ? "text-charcoal" : "text-white"}`}
            >
              <Phone size={14} />
              (919) 297-0107
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden p-2 transition-colors duration-300 ${scrolled ? "text-charcoal" : "text-white"}`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <div className={`lg:hidden fixed inset-0 top-0 bg-white z-40 transition-all duration-500 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
            <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2">
              <Image src="/logo-transparent.png" alt="Nirvelli" width={26} height={32} />
              <h2 className="font-heading text-xl font-medium text-navy">Nirvelli</h2>
            </Link>
            <button onClick={() => setIsOpen(false)} className="p-2 text-charcoal hover:text-blue transition-colors" aria-label="Close menu">
              <X size={24} />
            </button>
          </div>
          <div className="flex-1 flex flex-col justify-center px-8 gap-1">
            {navLinks.map((link, i) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="py-3.5 text-center text-sm tracking-wide uppercase font-body font-light text-charcoal rounded-lg hover:bg-ice hover:text-blue transition-all duration-200"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                {link.name}
              </Link>
            ))}
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="mt-2 py-3.5 text-center text-sm tracking-elegant uppercase font-body font-bold bg-blue text-white rounded-lg hover:bg-blue-dark transition-all"
            >
              Book Appointment
            </a>
          </div>
          <div className="px-8 py-6 border-t border-gray-100 flex items-center justify-between">
            <a href="tel:919-297-0107" className="flex items-center gap-2 text-sm text-blue font-semibold">
              <Phone size={16} />
              (919) 297-0107
            </a>
            <p className="text-[10px] text-text/40 font-body">Mon-Sat, Same-day available</p>
          </div>
        </div>
      </div>
    </nav>
  );
}
