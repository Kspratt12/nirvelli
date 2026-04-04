"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle, Phone, Sparkles } from "lucide-react";

const BOOKING_URL = "https://clients.mindbodyonline.com/ASP/adm/adm_appt_search.asp?studioid=711769&prodGroupId=&page=&stype=&optForwardingLink=&nLgIn=&trn=0&lvl=&catid=&prodid=&date=4%2F4%2F2026&classid=0&view=&sSU=&qParam=&tg=&loc=1&vt=&justloggedin=&pMode=0";

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export default function Facials() {
  const medical = useInView();
  const hydra = useInView();
  const concerns = useInView();

  return (
    <>
      {/* Hero */}
      <section className="relative h-[55vh] flex items-center justify-center overflow-hidden">
        <Image src="/facial-acupuncture.png" alt="Facial treatment in Cary NC" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/40 to-navy/80" />
        <div className="relative z-10 text-center px-4">
          <p className="text-blue text-xs tracking-luxe uppercase font-body font-medium mb-4 animate-fade-in">Advanced Skin Care</p>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-heading font-medium text-white animate-fade-in-up">
            Medical-Grade Facials<br />
            <span className="italic text-blue-light">in Cary, NC</span>
          </h1>
          <p className="text-white/70 text-sm md:text-base font-body font-light mt-4 max-w-xl mx-auto animate-fade-in" style={{ animationDelay: "0.3s", opacity: 0 }}>
            Clinical treatments for clear skin, anti-aging, and lasting results. Not your average day spa facial.
          </p>
        </div>
      </section>

      {/* New Client Special */}
      <section className="py-10 bg-navy">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
            <div>
              <p className="text-gold text-xs tracking-luxe uppercase font-body font-semibold mb-1">New Client Special</p>
              <p className="text-3xl font-heading font-medium text-white"><span className="text-blue">$69</span> First Facial</p>
              <p className="text-white/50 text-xs font-body font-light">60-minute customized facial for new clients</p>
            </div>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="group px-8 py-3.5 bg-blue text-white text-xs tracking-elegant uppercase font-body font-semibold hover:bg-blue-dark transition-all duration-300 flex items-center gap-2">
              Book Now <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* What is a Medical Facial */}
      <section className="py-20 bg-white">
        <div ref={medical.ref} className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${medical.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-blue text-xs tracking-luxe uppercase font-body font-medium mb-4">Clinical Results</p>
              <h2 className="text-3xl md:text-4xl font-heading font-medium text-navy mb-6">What is a Medical Facial?</h2>
              <div className="section-divider mb-6" />
              <p className="text-text text-base font-body font-light leading-relaxed mb-4">
                A medical facial goes far beyond a typical day spa treatment. Using clinical-grade products and advanced techniques, our licensed aestheticians target specific skin concerns at a deeper level — delivering visible, lasting results.
              </p>
              <p className="text-text text-base font-body font-light leading-relaxed mb-6">
                Every facial at Nirvelli begins with a thorough skin analysis. We customize each treatment to your unique skin type, concerns, and goals — whether that&apos;s clearing acne, reducing wrinkles, or restoring a healthy glow.
              </p>

              <h3 className="text-lg font-heading font-medium text-navy mb-4">Medical Facial vs. Spa Facial</h3>
              <div className="space-y-3 mb-6">
                {[
                  "Clinical-grade products that penetrate deeper into skin layers",
                  "Performed by licensed, trained aestheticians with medical oversight",
                  "Targets specific conditions: acne, rosacea, hyperpigmentation, aging",
                  "Measurable results you can see and track over time",
                  "Safe for all skin types with personalized protocols",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-blue shrink-0 mt-0.5" />
                    <span className="text-sm font-body font-light text-charcoal">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[450px] img-zoom rounded-sm overflow-hidden">
              <Image src="/our-massage-therapist-and-specialist.png" alt="Medical facial treatment" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="py-16 bg-ice">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-medium text-navy mb-4">Facial Treatments & Pricing</h2>
            <div className="section-divider mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: "1st Time Facial", price: "$69", note: "60 min — New clients only", highlight: true },
              { name: "Club OE Facial", price: "$89", note: "60 min — Members" },
              { name: "Calm Skin Facial", price: "$90", note: "60 min — Rosacea & irritated skin" },
              { name: "Blueberry Smoothie Peel", price: "$95", note: "60 min" },
              { name: "Organic Eminence Facial", price: "$100", note: "60 min — Luxury organic" },
              { name: "Dermaplaning", price: "$100", note: "60 min" },
              { name: "Age Corrective Facial", price: "$135", note: "60 min — Ages 40+" },
              { name: "Microneedling", price: "$325", note: "60 min — Scars, sun damage, acne" },
              { name: "Back Facial", price: "$85", note: "45 min" },
            ].map((service) => (
              <a
                key={service.name}
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-5 bg-white border hover:border-blue/30 hover:shadow-md transition-all group ${service.highlight ? "border-blue/30 ring-1 ring-blue/10" : "border-gray-100"}`}
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-sm font-body font-semibold text-navy group-hover:text-blue transition-colors">{service.name}</h3>
                  <span className="text-lg font-heading font-medium text-blue shrink-0">{service.price}</span>
                </div>
                <p className="text-xs font-body font-light text-text">{service.note}</p>
                {service.highlight && <span className="inline-block mt-2 text-[10px] font-body font-semibold text-blue uppercase tracking-wide">Best Value for New Clients</span>}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* HydraFacial */}
      <section className="py-20 bg-white">
        <div ref={hydra.ref} className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${hydra.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="text-center mb-12">
            <Sparkles className="mx-auto text-blue mb-4" size={28} />
            <p className="text-blue text-xs tracking-luxe uppercase font-body font-medium mb-4">Premium Treatment</p>
            <h2 className="text-3xl md:text-4xl font-heading font-medium text-navy mb-4">HydraFacial</h2>
            <div className="section-divider mx-auto mb-6" />
            <p className="text-text text-base font-body font-light max-w-2xl mx-auto">
              Multi-step treatment using patented Vortex-Fusion technology to cleanse, exfoliate, extract, and hydrate. Gentler than microdermabrasion with equal or superior results.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-10">
            {[
              { name: "Signature HydraFacial", price: "$199", note: "30 min — Deep cleanse + antioxidants" },
              { name: "Deluxe HydraFacial", price: "$275", note: "60 min — Enhanced treatment with boosters" },
              { name: "Platinum HydraFacial", price: "$325", note: "90 min — Lymphatic drainage + Growth Factor" },
            ].map((service) => (
              <a key={service.name} href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="bg-ice p-6 text-center border border-blue/10 hover:border-blue/30 hover:shadow-md transition-all group">
                <p className="text-3xl font-heading font-medium text-blue mb-2">{service.price}</p>
                <p className="text-sm font-heading font-medium text-navy mb-1 group-hover:text-blue transition-colors">{service.name}</p>
                <p className="text-xs font-body font-light text-text">{service.note}</p>
              </a>
            ))}
          </div>

          <div className="text-center">
            <p className="text-sm font-body font-light text-text mb-2">
              <strong className="text-navy font-semibold">HydraFacial Club:</strong> $150/mo for monthly HydraFacial + 15% off products
            </p>
            <p className="text-sm font-body font-light text-text mb-6">
              <strong className="text-navy font-semibold">Deluxe Club:</strong> $225/mo for monthly Deluxe HydraFacial + 15% off products
            </p>
          </div>
        </div>
      </section>

      {/* Skin Concerns */}
      <section className="py-20 bg-cream">
        <div ref={concerns.ref} className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${concerns.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-medium text-navy mb-4">Skin Concerns We Treat</h2>
            <p className="text-text text-base font-body font-light max-w-2xl mx-auto">
              Our medical-grade facials address a wide range of skin conditions with targeted, results-driven treatments.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Acne & Breakouts",
              "Fine Lines & Wrinkles",
              "Sun Damage",
              "Hyperpigmentation",
              "Uneven Skin Tone",
              "Rough Texture",
              "Rosacea",
              "Enlarged Pores",
              "Dullness & Dehydration",
              "Scarring",
              "Age Spots",
              "Loss of Firmness",
            ].map((concern) => (
              <div key={concern} className="bg-white p-4 text-center border border-gray-100 hover:border-blue/20 transition-colors">
                <p className="text-sm font-body font-medium text-navy">{concern}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image src="/facial-acupuncture.png" alt="" fill className="object-cover" sizes="100vw" />
        </div>
        <div className="absolute inset-0 bg-navy/90" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-medium text-white mb-4">
            Ready for <span className="italic text-blue">Clear, Healthy Skin</span>?
          </h2>
          <p className="text-white/60 text-sm font-body font-light mb-8 max-w-lg mx-auto">
            Book your facial today. New clients start at just $69 for a full 60-minute customized treatment.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="group px-10 py-4 bg-blue text-white text-sm tracking-elegant uppercase font-body font-semibold hover:bg-blue-dark transition-all duration-300 flex items-center gap-2">
              Book Facial <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="tel:919-297-0107" className="px-10 py-4 border border-white/30 text-white text-sm tracking-elegant uppercase font-body font-light hover:border-blue hover:text-blue transition-all duration-300 flex items-center gap-2">
              <Phone size={16} /> Call (919) 297-0107
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
