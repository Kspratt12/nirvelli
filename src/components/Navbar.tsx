"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Spa Club", href: "/spa-club" },
  { name: "Book Now", href: "/book" },
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
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-10 h-10 md:w-12 md:h-12">
              <Image src="/logo.png" alt="Nirvelli Med Spa" fill className="object-contain" sizes="48px" />
            </div>
            <div>
              <h1 className={`font-heading text-lg md:text-xl font-medium transition-colors duration-300 ${scrolled ? "text-navy" : "text-white"}`}>
                Nirvelli
              </h1>
              <p className={`text-[7px] md:text-[8px] tracking-luxe uppercase font-body font-light transition-colors duration-300 ${scrolled ? "text-text" : "text-white/70"}`}>
                Med Spa & Laser
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`px-4 py-2 text-xs tracking-wide uppercase font-body font-light transition-all duration-300 hover:text-blue elegant-underline ${
                  scrolled ? "text-charcoal" : "text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Phone + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a
              href="tel:919-238-5040"
              className={`hidden md:flex items-center gap-2 text-xs tracking-wide transition-colors duration-300 hover:text-blue ${scrolled ? "text-charcoal" : "text-white"}`}
            >
              <Phone size={14} />
              (919) 238-5040
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

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 top-0 bg-white z-40 transition-all duration-500 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
            <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-3">
              <div className="relative w-10 h-10">
                <Image src="/logo-black.png" alt="Nirvelli" fill className="object-contain" sizes="40px" />
              </div>
              <h2 className="font-heading text-xl font-medium text-navy">Nirvelli</h2>
            </Link>
            <button onClick={() => setIsOpen(false)} className="p-2 text-charcoal" aria-label="Close menu">
              <X size={24} />
            </button>
          </div>
          <div className="flex-1 flex flex-col justify-center px-6 gap-2">
            {navLinks.map((link, i) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`py-3 text-center text-sm tracking-elegant uppercase font-body font-light border transition-all duration-200 ${
                  i === 0 ? "bg-navy text-white border-navy" : "text-charcoal border-gray-200 hover:border-navy"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="px-8 py-6 border-t border-gray-100">
            <a href="tel:919-238-5040" className="flex items-center gap-2 text-sm text-blue">
              <Phone size={16} />
              (919) 238-5040
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
