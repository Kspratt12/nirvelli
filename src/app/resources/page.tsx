"use client";

import Image from "next/image";
import { Download, FileText, Phone, ArrowRight } from "lucide-react";

const BOOKING_URL = "https://clients.mindbodyonline.com/ASP/adm/adm_appt_search.asp?studioid=711769&prodGroupId=&page=&stype=&optForwardingLink=&nLgIn=&trn=0&lvl=&catid=&prodid=&date=4%2F4%2F2026&classid=0&view=&sSU=&qParam=&tg=&loc=1&vt=&justloggedin=&pMode=0";

export default function Resources() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[45vh] flex items-center justify-center overflow-hidden">
        <Image src="/product-4-eminence-organic-skin-care.jpg" alt="Nirvelli Med Spa products" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/40 to-navy/80" />
        <div className="relative z-10 text-center px-4">
          <p className="text-blue text-xs tracking-luxe uppercase font-body font-semibold mb-4 animate-fade-in">For Our Patients</p>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-heading font-semibold text-white animate-fade-in-up">Patient Resources</h1>
          <p className="text-white/60 text-sm font-body font-light mt-4 animate-fade-in" style={{ animationDelay: "0.3s", opacity: 0 }}>
            Downloadable forms and guides to prepare for your visit
          </p>
        </div>
      </section>

      {/* Resources */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-navy mb-4">Downloadable Forms & Guides</h2>
            <p className="text-text text-base font-body font-light max-w-xl mx-auto leading-relaxed">
              Save time on your visit by downloading and completing these forms ahead of your appointment.
            </p>
          </div>

          <div className="space-y-6">
            {/* Consultation Form */}
            <a
              href="https://www.nirvelli.com/wp-content/uploads/Cosmetic-Patient-Consultation-Form.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 bg-ice p-6 md:p-8 border border-gray-100 hover:border-blue/30 hover:shadow-lg transition-all group"
            >
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm group-hover:shadow-md transition-shadow">
                <FileText size={28} className="text-blue" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-heading font-semibold text-navy group-hover:text-blue transition-colors mb-1">
                  Cosmetic Patient Consultation Form
                </h3>
                <p className="text-sm font-body font-light text-text mb-2">
                  Required for all new cosmetic and injectable consultations. Complete before your appointment to save time.
                </p>
                <span className="text-blue text-xs tracking-elegant uppercase font-body font-bold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  <Download size={12} /> Download PDF
                </span>
              </div>
            </a>

            {/* Cookbook */}
            <a
              href="https://www.nirvelli.com/wp-content/uploads/Cookbook-Purification.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 bg-ice p-6 md:p-8 border border-gray-100 hover:border-blue/30 hover:shadow-lg transition-all group"
            >
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm group-hover:shadow-md transition-shadow">
                <FileText size={28} className="text-blue" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-heading font-semibold text-navy group-hover:text-blue transition-colors mb-1">
                  Purification Cookbook
                </h3>
                <p className="text-sm font-body font-light text-text mb-2">
                  Healthy recipes and nutrition guidance to complement your wellness treatments and support your goals.
                </p>
                <span className="text-blue text-xs tracking-elegant uppercase font-body font-bold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  <Download size={12} /> Download PDF
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-semibold text-white mb-4">Questions About Your Visit?</h2>
          <p className="text-white/60 text-sm font-body font-light mb-8 max-w-md mx-auto">
            Our team is happy to help you prepare. Call us or book online.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="group px-10 py-4 bg-blue text-white text-sm tracking-elegant uppercase font-body font-bold hover:bg-blue-dark transition-all duration-300 inline-flex items-center gap-2">
              Book Appointment <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="tel:919-297-0107" className="px-10 py-4 border border-white/30 text-white text-sm tracking-elegant uppercase font-body font-light hover:border-blue hover:text-blue transition-all duration-300 inline-flex items-center gap-2">
              <Phone size={16} /> (919) 297-0107
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
