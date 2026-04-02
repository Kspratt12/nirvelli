"use client";

import Link from "next/link";
import { ArrowRight, Award, Check, Star } from "lucide-react";

export default function SpaClub() {
  return (
    <>
      <section className="relative h-[50vh] flex items-center justify-center bg-navy overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy/90 to-navy" />
        <div className="relative z-10 text-center">
          <Award className="mx-auto text-gold mb-6 animate-fade-in" size={32} />
          <p className="text-blue text-xs tracking-luxe uppercase font-body font-light mb-4 animate-fade-in">Membership</p>
          <h1 className="text-5xl md:text-7xl font-heading font-medium text-white animate-fade-in-up">Spa Club</h1>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-medium text-navy mb-4">The Best Value in Cary</h2>
            <div className="w-12 h-px bg-blue mx-auto mb-8" />
            <p className="text-text text-base font-body font-light max-w-2xl mx-auto leading-relaxed">
              Join the Nirvelli Spa Club and make self-care a priority every month. For just $89, you will receive one premium treatment of your choice plus exclusive member benefits.
            </p>
          </div>

          {/* Pricing Card */}
          <div className="max-w-md mx-auto bg-navy text-white p-10 md:p-12 text-center mb-16">
            <Award className="mx-auto text-gold mb-4" size={28} />
            <p className="text-xs tracking-luxe uppercase font-body font-light text-blue mb-4">Monthly Membership</p>
            <p className="text-6xl font-heading font-medium text-white mb-1">$89</p>
            <p className="text-white/50 text-sm font-body font-light mb-8">per month</p>

            <div className="space-y-4 text-left mb-10">
              {[
                "One premium treatment of your choice each month",
                "15% off all retail products",
                "15% off all spa add-on services",
                "Priority booking access",
                "Unused services roll over (up to 6 months)",
                "Additional services at $89 each",
              ].map((perk) => (
                <div key={perk} className="flex items-start gap-3">
                  <Check size={16} className="text-blue shrink-0 mt-0.5" />
                  <span className="text-sm font-body font-light text-white/80">{perk}</span>
                </div>
              ))}
            </div>

            <a href="tel:919-238-5040" className="block w-full py-4 bg-blue text-white text-xs tracking-elegant uppercase font-body font-medium hover:bg-blue-dark transition-all duration-300 text-center">
              Call to Join - (919) 238-5040
            </a>
          </div>

          {/* Treatments */}
          <div className="text-center mb-12">
            <h3 className="text-2xl font-heading font-medium text-navy mb-4">Choose From These Treatments</h3>
            <p className="text-text text-sm font-body font-light">Pick any one of these each month as your included treatment:</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {[
              "Customized Facial (55 min)",
              "Swedish Massage (50 min)",
              "Deep Tissue Massage (50 min)",
              "Chemical Peel",
              "Dermaplaning",
              "Body Scrub",
            ].map((treatment) => (
              <div key={treatment} className="bg-ice p-5 text-center">
                <Star size={16} className="mx-auto text-blue mb-2" />
                <p className="text-sm font-body font-medium text-navy">{treatment}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-xs text-text/50 font-body font-light">Each additional service in the month is also $89. Members save 15% on add-ons.</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-navy">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-medium text-white mb-6">Ready to Join?</h2>
          <p className="text-white/60 text-sm font-body font-light mb-8">Call us today to start your Spa Club membership and make self-care a habit.</p>
          <a href="tel:919-238-5040" className="group inline-flex items-center gap-2 px-10 py-4 bg-blue text-white text-xs tracking-elegant uppercase font-body font-medium hover:bg-blue-dark transition-all duration-300">
            Call (919) 238-5040 <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>
    </>
  );
}
