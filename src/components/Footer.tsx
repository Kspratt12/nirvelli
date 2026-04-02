import Link from "next/link";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-heading font-medium text-white mb-2">Nirvelli</h3>
            <p className="text-[9px] tracking-luxe uppercase font-body font-light text-white/50 mb-6">
              Med Spa & Laser
            </p>
            <p className="text-sm text-white/60 leading-relaxed font-light">
              Cary&apos;s premier med spa since 2003. 5x Cary Living Diamond Award Winner.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs tracking-luxe uppercase font-body font-medium text-blue mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-blue mt-0.5 shrink-0" />
                <div className="text-sm text-white/60 font-light">
                  <p>151 Quarrystone Circle, Suite 116</p>
                  <p>Cary, NC 27519</p>
                </div>
              </div>
              <a href="tel:919-238-5040" className="flex items-center gap-3 text-sm text-white/60 font-light hover:text-blue transition-colors">
                <Phone size={16} className="text-blue shrink-0" />
                (919) 238-5040
              </a>
              <a href="mailto:info@nirvelli.com" className="flex items-center gap-3 text-sm text-white/60 font-light hover:text-blue transition-colors">
                <Mail size={16} className="text-blue shrink-0" />
                info@nirvelli.com
              </a>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-xs tracking-luxe uppercase font-body font-medium text-blue mb-6">Hours</h4>
            <div className="flex items-start gap-3">
              <Clock size={16} className="text-blue mt-0.5 shrink-0" />
              <div className="text-sm text-white/60 font-light space-y-2">
                <div><p className="text-white/80">Monday</p><p>9am - 7pm</p></div>
                <div><p className="text-white/80">Tue - Thu</p><p>7am - 7pm</p></div>
                <div><p className="text-white/80">Friday</p><p>8am - 7pm</p></div>
                <div><p className="text-white/80">Saturday</p><p>9am - 4pm</p></div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs tracking-luxe uppercase font-body font-medium text-blue mb-6">Quick Links</h4>
            <div className="space-y-3">
              {[
                { name: "Services", href: "/services" },
                { name: "About Us", href: "/about" },
                { name: "Spa Club - $89/mo", href: "/spa-club" },
                { name: "Book Appointment", href: "/book" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <Link key={link.name} href={link.href} className="flex items-center gap-2 text-sm text-white/60 font-light hover:text-blue transition-colors group">
                  <ArrowRight size={12} className="text-blue opacity-0 group-hover:opacity-100 transition-opacity" />
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-4 mt-8">
              <a href="https://www.facebook.com/nirvellimedspa/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-blue hover:text-blue text-white/50 transition-all" aria-label="Facebook">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg>
              </a>
              <a href="https://www.instagram.com/nirvellimedspa/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-blue hover:text-blue text-white/50 transition-all" aria-label="Instagram">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30 font-light">&copy; {new Date().getFullYear()} Nirvelli Med Spa & Laser. All rights reserved.</p>
          <Link href="/book" className="text-xs tracking-elegant uppercase text-blue hover:text-blue-light transition-colors font-light">
            Book an Appointment &rarr;
          </Link>
        </div>
      </div>
    </footer>
  );
}
