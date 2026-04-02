"use client";

import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <>
      <section className="relative h-[50vh] flex items-center justify-center bg-navy overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy/90 to-navy" />
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-heading font-medium text-white animate-fade-in-up">Contact</h1>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-heading font-medium text-navy mb-8">Get in Touch</h2>
              <div className="space-y-8">
                <div>
                  <h4 className="text-xs tracking-elegant uppercase font-body font-medium text-blue mb-3">Address</h4>
                  <div className="flex items-start gap-3">
                    <MapPin size={18} className="text-blue mt-0.5 shrink-0" />
                    <div className="text-sm font-body font-light text-text">
                      <p>151 Quarrystone Circle, Suite 116</p>
                      <p>Cary, NC 27519</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-xs tracking-elegant uppercase font-body font-medium text-blue mb-3">Contact Us</h4>
                  <div className="space-y-3">
                    <a href="tel:919-238-5040" className="flex items-center gap-3 text-sm font-body font-light text-text hover:text-blue transition-colors">
                      <Phone size={18} className="text-blue shrink-0" />(919) 238-5040
                    </a>
                    <a href="tel:919-297-0107" className="flex items-center gap-3 text-sm font-body font-light text-text hover:text-blue transition-colors">
                      <Phone size={18} className="text-blue shrink-0" />(919) 297-0107
                    </a>
                    <a href="mailto:info@nirvelli.com" className="flex items-center gap-3 text-sm font-body font-light text-text hover:text-blue transition-colors">
                      <Mail size={18} className="text-blue shrink-0" />info@nirvelli.com
                    </a>
                  </div>
                </div>
                <div>
                  <Link href="/book" className="group inline-flex items-center gap-2 text-sm font-body font-medium text-blue hover:text-blue-dark transition-colors">
                    Schedule an Appointment <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-heading font-medium text-navy mb-8">Hours</h2>
              <div className="flex items-start gap-3">
                <Clock size={18} className="text-blue mt-0.5 shrink-0" />
                <div className="space-y-3 text-sm font-body font-light text-text">
                  <div><p className="text-charcoal font-medium">Monday</p><p>9am - 7pm</p></div>
                  <div><p className="text-charcoal font-medium">Tuesday - Thursday</p><p>7am - 7pm</p></div>
                  <div><p className="text-charcoal font-medium">Friday</p><p>8am - 7pm</p></div>
                  <div><p className="text-charcoal font-medium">Saturday</p><p>9am - 4pm</p></div>
                  <div><p className="text-charcoal font-medium">Sunday</p><p>Closed</p></div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <iframe src="https://www.google.com/maps?q=151+Quarrystone+Circle+Suite+116+Cary+NC+27519&output=embed" className="w-full h-80 md:h-96 border-0 grayscale hover:grayscale-0 transition-all duration-500" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Nirvelli Location" />
          </div>
        </div>
      </section>
    </>
  );
}
