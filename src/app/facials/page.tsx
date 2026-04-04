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
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image src="/facial.jpg" alt="Facial treatment in Cary NC" fill className="object-cover" quality={90} sizes="100vw" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/50 via-navy/30 to-navy/70" />
        <div className="relative z-10 text-center px-4">
          <div className="animate-fade-in" style={{ animationDelay: "0.2s", opacity: 0 }}>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-px bg-blue" />
              <p className="text-blue text-xs tracking-luxe uppercase font-body font-semibold">Advanced Skin Care</p>
              <div className="w-12 h-px bg-blue" />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-heading font-semibold text-white animate-fade-in-up">
            Medical-Grade Facials
          </h1>
          <p className="text-white/70 text-base md:text-lg font-body font-light mt-4 max-w-xl mx-auto animate-fade-in" style={{ animationDelay: "0.3s", opacity: 0 }}>
            Clinical treatments for clear skin, anti-aging, and lasting results. Not your average day spa facial.
          </p>
        </div>
      </section>

      {/* New Client Special */}
      <section className="py-8 bg-navy">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
            <div>
              <p className="text-gold text-xs tracking-luxe uppercase font-body font-bold mb-1">New Client Special</p>
              <p className="text-3xl font-heading font-semibold text-white"><span className="text-blue">$69</span> First Facial</p>
              <p className="text-white/40 text-xs font-body font-light mt-1">60-minute customized facial</p>
            </div>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="group px-8 py-3.5 bg-blue text-white text-xs tracking-elegant uppercase font-body font-bold hover:bg-blue-dark transition-all duration-300 flex items-center gap-2">
              Book Now <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* What is a Medical Facial */}
      <section className="py-32 bg-white">
        <div ref={medical.ref} className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${medical.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-px bg-blue" />
                <p className="text-blue text-xs tracking-luxe uppercase font-body font-semibold">Clinical Results</p>
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-semibold text-navy mb-8 leading-[1.1]">
                What is a<br />Medical <span className="italic text-blue">Facial</span>?
              </h2>
              <p className="text-text text-lg font-body font-light leading-relaxed mb-5">
                A medical facial goes far beyond a typical day spa treatment. Using clinical-grade products and advanced techniques, our licensed aestheticians target specific skin concerns at a deeper level, delivering visible, lasting results.
              </p>
              <p className="text-text/60 text-base font-body font-light leading-relaxed mb-8">
                Every facial at Nirvelli begins with a thorough skin analysis. We customize each treatment to your unique skin type, concerns, and goals, whether that&apos;s clearing acne, reducing wrinkles, or restoring a healthy glow.
              </p>

              <h3 className="text-lg font-heading font-semibold text-navy mb-4">Medical Facial vs. Spa Facial</h3>
              <div className="space-y-3">
                {[
                  "Clinical-grade products that penetrate deeper into skin layers",
                  "Performed by licensed, trained aestheticians",
                  "Targets specific conditions: acne, rosacea, hyperpigmentation, aging",
                  "Measurable results you can see and track over time",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle size={15} className="text-blue shrink-0 mt-0.5" />
                    <span className="text-sm font-body text-charcoal">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[520px] rounded-xl overflow-hidden">
              <Image src="/infusion-peel.jpg" alt="Medical facial treatment" fill className="object-cover" quality={90} sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="py-32 bg-ice">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-px bg-blue" />
              <p className="text-blue text-xs tracking-luxe uppercase font-body font-semibold">Treatments</p>
              <div className="w-12 h-px bg-blue" />
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-semibold text-navy mb-5">Facial Treatments & <span className="italic text-blue">Pricing</span></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: "1st Time Facial", price: "$69", note: "60 min, New clients only", highlight: true },
              { name: "Club OE Facial", price: "$89", note: "60 min, Members" },
              { name: "Calm Skin Facial", price: "$90", note: "60 min, Rosacea & irritated skin" },
              { name: "Blueberry Smoothie Peel", price: "$95", note: "60 min" },
              { name: "Organic Eminence Facial", price: "$100", note: "60 min, Luxury organic" },
              { name: "Dermaplaning", price: "$100", note: "60 min" },
              { name: "Age Corrective Facial", price: "$135", note: "60 min, Ages 40+" },
              { name: "Microneedling", price: "$325", note: "60 min, Scars & sun damage" },
              { name: "Back Facial", price: "$85", note: "45 min" },
            ].map((service) => (
              <a
                key={service.name}
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-6 bg-white rounded-xl border-2 hover:border-blue/30 hover:shadow-lg transition-all duration-300 group ${service.highlight ? "border-blue/30 ring-1 ring-blue/10" : "border-gray-100"}`}
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-sm font-body font-semibold text-navy group-hover:text-blue transition-colors">{service.name}</h3>
                  <span className="text-xl font-heading font-bold text-blue shrink-0">{service.price}</span>
                </div>
                <p className="text-xs font-body font-light text-text/60">{service.note}</p>
                {service.highlight && <span className="inline-block mt-3 text-[10px] font-body font-bold text-white bg-blue px-3 py-1 rounded-full uppercase tracking-wide">Best Value</span>}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* HydraFacial */}
      <section className="py-32 bg-white">
        <div ref={hydra.ref} className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${hydra.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative h-[480px] rounded-xl overflow-hidden">
              <Image src="/hydrafacial.jpg" alt="HydraFacial treatment" fill className="object-cover" quality={90} sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="text-blue" size={20} />
                <p className="text-blue text-xs tracking-luxe uppercase font-body font-semibold">Premium Treatment</p>
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-semibold text-navy mb-8 leading-[1.1]">
                HydraFacial
              </h2>
              <p className="text-text text-lg font-body font-light leading-relaxed mb-8">
                Multi-step treatment using patented Vortex-Fusion technology to cleanse, exfoliate, extract, and hydrate. Gentler than microdermabrasion with equal or superior results.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  { name: "Signature HydraFacial", price: "$199", note: "30 min, Deep cleanse + antioxidants" },
                  { name: "Deluxe HydraFacial", price: "$275", note: "60 min, Enhanced with boosters" },
                  { name: "Platinum HydraFacial", price: "$325", note: "90 min, Lymphatic drainage + Growth Factor" },
                ].map((service) => (
                  <a key={service.name} href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-5 bg-ice rounded-xl border border-transparent hover:border-blue/20 hover:shadow-md transition-all group">
                    <div>
                      <p className="text-sm font-body font-semibold text-navy group-hover:text-blue transition-colors">{service.name}</p>
                      <p className="text-xs font-body font-light text-text/50 mt-0.5">{service.note}</p>
                    </div>
                    <span className="text-2xl font-heading font-bold text-blue">{service.price}</span>
                  </a>
                ))}
              </div>

              <div className="bg-navy/5 rounded-xl p-5">
                <p className="text-sm font-body text-navy">
                  <strong className="font-semibold">HydraFacial Club:</strong> $150/mo for monthly HydraFacial + 15% off products
                </p>
                <p className="text-sm font-body text-navy mt-1">
                  <strong className="font-semibold">Deluxe Club:</strong> $225/mo for monthly Deluxe + 15% off products
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skin Concerns */}
      <section className="py-32 bg-cream">
        <div ref={concerns.ref} className={`max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${concerns.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-px bg-blue" />
              <p className="text-blue text-xs tracking-luxe uppercase font-body font-semibold">We Can Help</p>
              <div className="w-12 h-px bg-blue" />
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-semibold text-navy">Skin Concerns We <span className="italic text-blue">Treat</span></h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Acne & Breakouts", "Fine Lines & Wrinkles", "Sun Damage", "Hyperpigmentation",
              "Uneven Skin Tone", "Rough Texture", "Rosacea", "Enlarged Pores",
              "Dullness & Dehydration", "Scarring", "Age Spots", "Loss of Firmness",
            ].map((concern) => (
              <div key={concern} className="bg-white p-5 rounded-xl text-center border border-gray-100 hover:border-blue/20 hover:shadow-md transition-all duration-300">
                <p className="text-sm font-body font-medium text-navy">{concern}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[450px]">
          <div className="relative hidden lg:block">
            <Image src="/facial2.jpg" alt="Facial treatment results" fill className="object-cover" quality={90} sizes="50vw" />
          </div>
          <div className="bg-navy py-24 lg:py-32 px-8 md:px-16 lg:px-20 flex items-center">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-px bg-blue" />
                <p className="text-blue text-xs tracking-luxe uppercase font-body font-semibold">Get Started</p>
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-semibold text-white mb-6 leading-[1.1]">
                Ready for<br /><span className="italic text-blue">Clear, Healthy Skin</span>?
              </h2>
              <p className="text-white/50 text-lg font-body font-light mb-10 max-w-md">
                Book your facial today. New clients start at just $69 for a full 60-minute customized treatment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="group px-10 py-4 bg-blue text-white text-sm tracking-elegant uppercase font-body font-bold hover:bg-blue-dark transition-all duration-300 inline-flex items-center gap-2">
                  Book Facial <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="tel:919-297-0107" className="px-10 py-4 border border-white/20 text-white text-sm tracking-elegant uppercase font-body font-light hover:border-blue hover:text-blue transition-all duration-300 inline-flex items-center gap-2">
                  <Phone size={16} /> (919) 297-0107
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
