"use client";

import { Phone, MapPin, Clock } from "lucide-react";

export default function Book() {
  return (
    <>
      <section className="relative h-[50vh] flex items-center justify-center bg-navy overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy/90 to-navy" />
        <div className="relative z-10 text-center">
          <p className="text-blue text-xs tracking-luxe uppercase font-body font-light mb-4 animate-fade-in">Schedule Your Visit</p>
          <h1 className="text-5xl md:text-7xl font-heading font-medium text-white animate-fade-in-up">Book Appointment</h1>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-medium text-navy mb-4">Schedule Your Visit</h2>
            <div className="w-12 h-px bg-blue mx-auto mb-6" />
            <p className="text-text text-base font-body font-light max-w-xl mx-auto mb-4">
              Call us to schedule your appointment, or reach out with any questions about our services.
            </p>
            <p className="text-text text-sm font-body font-light max-w-lg mx-auto">
              Not sure what service is right for you? We offer complimentary consultations for new clients.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-16">
            <a href="tel:919-238-5040" className="bg-ice p-8 text-center hover:shadow-lg transition-all duration-300 group border border-transparent hover:border-blue/20">
              <Phone className="mx-auto text-blue mb-4 group-hover:scale-110 transition-transform" size={28} />
              <h3 className="text-lg font-heading font-medium text-navy mb-2">Call to Book</h3>
              <p className="text-blue text-lg font-body font-medium">(919) 238-5040</p>
              <p className="text-text text-xs font-body font-light mt-2">Speak with our front desk</p>
            </a>
            <a href="tel:919-297-0107" className="bg-ice p-8 text-center hover:shadow-lg transition-all duration-300 group border border-transparent hover:border-blue/20">
              <Phone className="mx-auto text-blue mb-4 group-hover:scale-110 transition-transform" size={28} />
              <h3 className="text-lg font-heading font-medium text-navy mb-2">Second Line</h3>
              <p className="text-blue text-lg font-body font-medium">(919) 297-0107</p>
              <p className="text-text text-xs font-body font-light mt-2">Alternate booking line</p>
            </a>
          </div>

          {/* Info */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <MapPin className="mx-auto text-blue mb-3" size={20} />
              <h4 className="text-xs tracking-elegant uppercase font-body font-medium text-charcoal mb-2">Visit Us</h4>
              <p className="text-sm font-body font-light text-text">151 Quarrystone Circle<br />Suite 116, Cary NC 27519</p>
            </div>
            <div className="text-center">
              <Clock className="mx-auto text-blue mb-3" size={20} />
              <h4 className="text-xs tracking-elegant uppercase font-body font-medium text-charcoal mb-2">Hours</h4>
              <p className="text-sm font-body font-light text-text">Mon-Fri: 7am-7pm<br />Sat: 9am-4pm</p>
            </div>
            <div className="text-center">
              <MapPin className="mx-auto text-blue mb-3" size={20} />
              <h4 className="text-xs tracking-elegant uppercase font-body font-medium text-charcoal mb-2">Email</h4>
              <a href="mailto:info@nirvelli.com" className="text-sm font-body font-light text-text hover:text-blue transition-colors">info@nirvelli.com</a>
            </div>
          </div>

          {/* New Client */}
          <div className="mt-16 bg-navy p-8 md:p-12 text-center">
            <h3 className="text-2xl font-heading font-medium text-white mb-4">New to Nirvelli?</h3>
            <p className="text-white/60 text-sm font-body font-light max-w-lg mx-auto mb-2">
              Welcome! For your first visit, please arrive 10-15 minutes early to complete paperwork. Your provider will begin with a thorough consultation to understand your goals.
            </p>
            <p className="text-white/60 text-sm font-body font-light max-w-lg mx-auto">
              Not sure which service to book? Call us and we will be happy to guide you.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
