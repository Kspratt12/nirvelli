"use client";

import { Phone, MapPin, Clock, ArrowRight, Calendar } from "lucide-react";
import Image from "next/image";

const BOOKING_URL = "https://clients.mindbodyonline.com/ASP/adm/adm_appt_search.asp?studioid=711769&prodGroupId=&page=&stype=&optForwardingLink=&nLgIn=&trn=0&lvl=&catid=&prodid=&date=4%2F4%2F2026&classid=0&view=&sSU=&qParam=&tg=&loc=1&vt=&justloggedin=&pMode=0";

export default function Book() {
  return (
    <>
      <section className="relative h-[45vh] flex items-center justify-center bg-navy overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <Image src="/hero-3.jpg" alt="" fill className="object-cover" quality={90} sizes="100vw" />
        </div>
        <div className="absolute inset-0 bg-navy/85" />
        <div className="relative z-10 text-center px-4">
          <Calendar className="mx-auto text-blue mb-4 animate-fade-in" size={28} />
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-heading font-medium text-white animate-fade-in-up">Book Appointment</h1>
          <p className="text-white/60 text-sm font-body font-light mt-4 animate-fade-in" style={{ animationDelay: "0.3s", opacity: 0 }}>
            Schedule your visit at Nirvelli Med Spa in Cary, NC
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-medium text-navy mb-4">
            Schedule Your <span className="italic text-blue">Visit</span>
          </h2>
          <p className="text-text text-base font-body font-light leading-relaxed mb-8 max-w-xl mx-auto">
            Book your appointment online through our secure scheduling system, or give us a call. New clients enjoy $69 facials and massages on their first visit.
          </p>

          <div className="bg-ice p-8 md:p-12 mb-8">
            <p className="text-gold text-xs tracking-luxe uppercase font-body font-semibold mb-4">Online Booking</p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-12 py-4 bg-blue text-white text-sm tracking-elegant uppercase font-body font-semibold hover:bg-blue-dark transition-all duration-300 pulse-cta"
            >
              Book Online Now <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <p className="text-xs text-text/50 font-body font-light mt-4">Opens our secure MindBody scheduling system</p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
            <div className="text-center">
              <p className="text-xs tracking-elegant uppercase font-body font-medium text-blue mb-2">Call Us Directly</p>
              <a href="tel:919-297-0107" className="text-2xl font-heading font-medium text-navy hover:text-blue transition-colors">(919) 297-0107</a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl mx-auto mb-8">
            <div className="bg-navy p-6 text-center">
              <p className="text-3xl font-heading font-medium text-blue mb-1">$69</p>
              <p className="text-sm font-body font-medium text-white mb-1">First Facial</p>
              <p className="text-xs font-body font-light text-white/50">60 min, New clients</p>
            </div>
            <div className="bg-navy p-6 text-center">
              <p className="text-3xl font-heading font-medium text-blue mb-1">$69</p>
              <p className="text-sm font-body font-medium text-white mb-1">First Massage</p>
              <p className="text-xs font-body font-light text-white/50">60 min, New clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-12 bg-ice">
        <div className="max-w-3xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="text-center">
            <Phone className="mx-auto text-blue mb-3" size={22} />
            <a href="tel:919-297-0107" className="text-sm font-body font-medium text-navy hover:text-blue transition-colors block">(919) 297-0107</a>
          </div>
          <div className="text-center">
            <MapPin className="mx-auto text-blue mb-3" size={22} />
            <p className="text-sm font-body font-light text-text">151 Quarrystone Circle<br />Suite 116, Cary NC 27519</p>
          </div>
          <div className="text-center">
            <Clock className="mx-auto text-blue mb-3" size={22} />
            <p className="text-sm font-body font-light text-text">Mon-Fri: 7am-7pm<br />Sat: 9am-4pm</p>
          </div>
        </div>
      </section>
    </>
  );
}
